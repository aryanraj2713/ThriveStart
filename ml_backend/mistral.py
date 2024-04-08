# API = "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"

import os
import json
from groq import Groq


open_json = open("business_data.json")
data = json.load(open_json)
# print(data)





client = Groq(
    # This is the default and can be omitted
    api_key=os.environ.get("GROQ_API_KEY"),
)

query = str(input("input query"))


chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "system",
            "content": f"you are a business assistant and analyzer based on data :{data}",
        },
        {
            "role": "user",
            "content": f'{query}',
        }
    ],
    model="mixtral-8x7b-32768",
    max_tokens=1024,

)

print(chat_completion.choices[0].message.content)