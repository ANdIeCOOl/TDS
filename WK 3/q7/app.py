from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
from sklearn.metrics.pairwise import cosine_similarity
import openai

app = FastAPI()

class SimilarityRequest(BaseModel):
    docs: List[str]
    query: str

class SimilarityResponse(BaseModel):
    matches: List[str]

@app.post("/similarity", response_model=SimilarityResponse)
async def compute_similarity(request: SimilarityRequest):
    if not request.docs or not request.query:
        raise HTTPException(status_code=400, detail="Docs and query must be provided")
 
        
    doc_embeddings = [get_embedding(doc) for doc in request.docs]
    query_embedding = get_embedding(request.query)

    similarities = cosine_similarity([query_embedding], doc_embeddings)[0]
    matches = [doc for doc, similarity in sorted(zip(request.docs, similarities), key=lambda x: x[1], reverse=True)]
    return SimilarityResponse(matches=matches)