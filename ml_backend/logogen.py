import requests

API_URL = "https://api-inference.huggingface.co/models/iamkaikai/amazing-logos-lora"
headers = {"Authorization": "Bearer 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"}

# """ model_configs = 
#         train_batch_size=14
#         gradient_accumulation_steps=30
#         max_train_steps=3000
#         learning_rate=1e-04
#         lr_scheduler="cosine" --lr_warmup_steps=2900
#     """

# """ 
# prompt_formatt = {template keywords} + [company name] + [concept & country] + {template keywords}

# examples ::

#     Simple elegant logo for a Digital Art, D A circle, successful vibe, minimalist, thought-provoking, abstract, recognizable
#     Simple elegant logo for a 3M Technology Products, 3 M triangles square United states, successful vibe, minimalist, thought-provoking, abstract, recognizable
#     Simple elegant logo for a 38Energy, lines drop fire flame water, successful vibe, minimalist, thought provoking, abstract, recognizable, relatable, sharp, vector art, even edges
# """


tempkey1 = "logo for a Edutech Company with initials TATA"
company_name = "TATA Education"
concept = "Green theme & India"
tempkey2 = "minimalistic logo"
def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.content
image_bytes = query({
	"inputs": f"{tempkey1} + {company_name} + {concept} + {tempkey2}",
})
# You can access the image with PIL.Image for example
import io
from PIL import Image
image = Image.open(io.BytesIO(image_bytes))

with open("generated_logo.png", "wb") as f:
    f.write(image_bytes)


