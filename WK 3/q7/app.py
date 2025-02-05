import os
from dotenv import load_dotenv
load_dotenv()
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import requests
from sklearn.metrics.pairwise import cosine_similarity

# Initialize FastAPI app
app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["OPTIONS", "POST"],
    allow_headers=["*"]
)

# OpenAI API details
OPENAI_API_URL = "https://aiproxy.sanand.workers.dev/openai/v1/embeddings"
API_KEY = os.getenv("S_ANAND_OPENAI_API_KEY")

# Define request model
class SimilarityRequest(BaseModel):
    docs: List[str]
    query: str

class SimilarityResponse(BaseModel):
    matches: List[str]

def get_embeddings(texts: List[str]):
    headers = {"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"}
    payload = {"model": "text-embedding-3-small", "input": texts}
    response = requests.post(OPENAI_API_URL, headers=headers, json=payload)
    response.raise_for_status()
    return [item["embedding"] for item in response.json()["data"]]

@app.post("/similarity", response_model=SimilarityResponse)
def get_similar_docs(request: SimilarityRequest):
    # Ensure docs are provided
    if not request.docs:
        raise HTTPException(status_code=400, detail="Document list cannot be empty")
    
    # Generate embeddings for documents and query using OpenAI API
    doc_embeddings = get_embeddings(request.docs)
    query_embedding = get_embeddings([request.query])[0]  # Single vector
    
    # Compute cosine similarity
    similarities = cosine_similarity([query_embedding], doc_embeddings)[0]
    
    # Get indices of top 3 matches
    top_indices = np.argsort(similarities)[-3:][::-1]  # Sort descending
    
    # Get top matching documents
    top_matches = [request.docs[i] for i in top_indices]
    
    return {"matches": top_matches}