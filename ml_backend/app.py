from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from model.analyse import (
    BusinessModel,
    InvestorModel,
    businessAnalysis,
    investorAnalysis,
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods="*",
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/analyse/business")
async def analyse_business(business: BusinessModel, q: str):
    try:
        result = businessAnalysis(business, q)
        return {"result": result}
    except Exception as e:
        return {"error": str(e)}, 400


@app.post("/analyse/investor")
async def analyse_investor(investor: InvestorModel, q: str):
    try:
        result = investorAnalysis(investor, q)
        return {"result": result}
    except Exception as e:
        return {"error": str(e)}, 400