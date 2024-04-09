import os
import json
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

def run_business_assistant(id: int):
    open_json = open("business_data_2.json")
    data = json.load(open_json) 

    # find the business data using the query
    for business in data:
        if business["business_id"] == id:
            data = business
            break

    client = Groq(
        # This is the default and can be omitted
        api_key=os.getenv("GROQ_API_KEY"),
    )

    # query = input("Input query: ")
    query = "You are generous and positive LLM model and investments are subject to market risks."
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": f"Analyze the buisness and generate 5 bullet points from investors point of view.You are a business assistant and analyzer based on data: {data}",
            },
            {
                "role": "user",
                "content": f"{query}",
            }
        ],
        model="mixtral-8x7b-32768",
        max_tokens=1024,
    )

    return chat_completion.choices[0].message.content

# Example usage:
result = run_business_assistant()
print(result)



