from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods="*",
    allow_headers=["*"],
)

from mistral_analyzer import run_business_assistant
from investor_analyzer import run_investor_desc

@app.get("/")
async def root():
    return {"message": "Hello World"}



@app.post("/analyze_b")
async def analyze_business_data(id: int):
    result = run_business_assistant(id)
    return {"result": result}

@app.post("/analyze_i")
async def run_investor_descp(id: int):
    result = run_investor_desc(id)
    return {"result": result}
