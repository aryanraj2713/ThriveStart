import os
import numpy as np
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from transformers import pipeline
from typing import Optional
import json
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
async def analyze_business_data():
    query = "Analyze the buisness and generate 5 bullet points from investors point of view."
    result = run_business_assistant()
    return {"result": result}

@app.post("/analyze_i")
async def run_investor_descp():
    result = run_investor_desc()
    return {"result": result}
