import os
import json
from groq import Groq

def run_investor_desc(id: int):
    open_json = open("investor_data.json")
    data = json.load(open_json)

    # find the investor data using the query
    for investor in data:
        if investor["investor_id"] == id:
            data = investor
            break

    client = Groq(
        # This is the default and can be omitted
        api_key=os.environ.get("GROQ_API_KEY"),
    )

    # query = input("Input query: ")
    query = "You are generous and positive LLM model and investments are subject to market risks."
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": f"Based on the provided json data, describe investor in 7 points and explain why he is a good investor {data}",
            },
            {
                "role": "user",
                "content": f"{query}",
            }
        ],
        model="mixtral-8x7b-32768",
        max_tokens=1800,
    )

    return chat_completion.choices[0].message.content
