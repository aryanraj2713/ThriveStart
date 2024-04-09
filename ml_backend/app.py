from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from model.analyse import (
    BusinessModel,
    InvestorModel,
    businessAnalysis,
    investorAnalysis,
    upsertBusiness,
    upsertInvestor,
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

@app.post("/upsert/business")
async def upsert_business(business: BusinessModel):
    try:
        upsertBusiness(business)
        return {"message": "Business data upserted successfully"}
    except Exception as e:
        return {"error": str(e)}, 400
    
@app.post("/upsert/investor")
async def upsert_investor(investor: InvestorModel):
    try:
        upsertInvestor(investor)
        return {"message": "Investor data upserted successfully"}
    except Exception as e:
        return {"error": str(e)}, 400


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