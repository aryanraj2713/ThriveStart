import json
import os
from typing import Dict, List, Union
from groq import Groq
from pydantic import BaseModel
from pinecone import Pinecone
from angle_emb import AnglE
from env import load_dotenv

load_dotenv()


class BusinessModel(BaseModel):
    id: int
    companyName: str
    ownersName: str
    industry: str
    businessDescription: str
    companyCity: str
    companyState: str
    yearlyRevenue: float
    monthlyRevenue: List[float]
    monthlySales: List[int]
    grossMargin: float
    netMargin: float
    ebidta: int
    cashBurn: int
    SKUs: List[str]
    hasUSP: bool
    isBootstrapped: bool
    debt: int
    govtAID: bool


class InvestorModel(BaseModel):
    name: str
    id: int
    netWorth: int
    education: List[Dict[str, str]]
    companiesInvested: List[Dict[str, Union[str, int, float]]]
    specializationIndustry: List[str]
    sectors: List[str]


pinecone = Pinecone(api_key=os.getenv("PINECONE_KEY"))
businessIndex = pinecone.Index("default")

angle = AnglE.from_pretrained("WhereIsAI/UAE-Large-V1", pooling_strategy="cls").cuda()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def upsertBusiness(business: BusinessModel):
    vector_embedding = angle.encode(
        business.businessDescription, to_numpy=True
    ).tolist()[0]
    businessIndex.upsert(
        vectors=[
            {
                "id": str(business.id),
                "values": vector_embedding,
                "metadata": flattenDictValuesToJSON(business.model_dump()),
            }
        ]
    )

def flattenDictValuesToJSON(d: Dict):
    metadata = d.copy()
    for k, v in d.items():
        if isinstance(v, list):
            metadata[k] = json.dumps(v)
        elif isinstance(v, dict):
            metadata[k] = flattenDictValuesToJSON(v)
        else:
            metadata[k] = str(v)
    return metadata

def upsertInvestor(investor: InvestorModel):
    vector_embedding = angle.encode(investor.name, to_numpy=True).tolist()[0]
    
    businessIndex.upsert(
        vectors=[
            {
                "id": str(investor.id),
                "values": vector_embedding,
                "metadata": flattenDictValuesToJSON(investor.model_dump()),
            }
        ]
    )


def businessAnalysis(business: BusinessModel, q: str):
    query_embedding = angle.encode(q, to_numpy=True).tolist()

    result = businessIndex.query(
        vector=query_embedding, top_k=3, include_values=False, include_metadata=True
    )

    prompt = """
    Instructions:
    - Be helpful and answer the question concisely. If you don't know the answer, say 'I don't know'.
    - Utilize the context provided for accurate and specific information.
    - Incorporate your preexisting knowledge to enhance the depth and relevance of your response.
    - You are answering as a finance and business guru to people who are trying to make their startup successful.
    - Provide advantages and disadvantages of different investment options.
    - Answer the question asked and avoid diverting from the topic.
    - Cite your sources.

    DONT REPLY WITH "based on the information provided, I think..." or "I believe that..." or end with "I hope this helps" or "please note that..." JUST ANSWER THE QUESTION

    DONT GIVE REFERENCES IF ANY
    """

    chat_completion = client.chat.completions.create(
        messages=[
            {"role": "system", "content": f"{prompt}"},
            {
                "role": "system",
                "content": result.to_str() + f"\n\n{business.model_dump_json()}",
            },
            {
                "role": "user",
                "content": f"{q}",
            },
        ],
        model="mixtral-8x7b-32768",
        temperature=0.8,
        max_tokens=2048,
        top_p=1,
        stop=None,
        stream=False,
    )

    return chat_completion.choices[0].message.content


def investorAnalysis(investor: InvestorModel, q: str):
    query_embedding = angle.encode(q, to_numpy=True).tolist()

    result = businessIndex.query(
        vector=query_embedding, top_k=5, include_values=False, include_metadata=True
    )

    prompt = """
    Instructions:
    - Be helpful and answer questions concisely. If you don't know the answer, say 'I don't know'
    - Utilize the context provided for accurate and specific information.
    - Incorporate your preexisting knowledge to enhance the depth and relevance of your response.
    - You are answering as a finance and a business guru to people who are trying to make their startup successful.
    - Help the client with giving advantages and disadvantages of different investment options.
    - Provide detailed information about the investor's net worth, education, companies invested in, specialization industry, and sectors.
    - Cite your sources.

    DONT REPLY WITH "based on the information provided, I think..." or "I believe that..." or end with "I hope this helps" or "please note that..." JUST ANSWER THE QUESTION

    DONT GIVE REFERENCES IF ANY
    """

    chat_completion = client.chat.completions.create(
        messages=[
            {"role": "system", "content": f"{prompt}"},
            {
                "role": "system",
                "content": result.to_str() + f"\n\n{investor.model_dump_json()}",
            },
            {
                "role": "user",
                "content": f"{q}",
            },
        ],
        model="mixtral-8x7b-32768",
        temperature=0.8,
        max_tokens=2048,
        top_p=1,
        stop=None,
        stream=False,
    )

    return chat_completion.choices[0].message.content