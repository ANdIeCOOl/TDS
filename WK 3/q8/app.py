import os
from dotenv import load_dotenv
load_dotenv()
from fastapi import FastAPI, HTTPException, Query, Request
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import requests
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

class Function_Call(BaseModel):
    query: str
tools = [
    {
        "type": "function",
        "function":{
      "name": "get_ticket_status",
      "description": "Retrieve the status of a support ticket by its ID.",
      "parameters": {
        "type": "object",
        "properties": {
          "ticket_id": {
            "type": "integer",
            "description": "The unique identifier of the support ticket."
          }
        },
        "required": ["ticket_id"],
        "additionalProperties":False
      },
      "strict":True
    }
    },
    {   "type": "function",
        "function":{
        "name": "schedule_meeting",
      "description": "Schedule a meeting in a specified room at a given date and time, and room",
      "parameters": {
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "description": "The date of the meeting in YYYY-MM-DD format."
          },
          "time": {
            "type": "string",
            "description": "The time of the meeting in HH:MM format (24-hour)."
          },
          "meeting_room": {
            "type": "string",
            "description": "The meeting room where the meeting will be held."
          }
        },
        "required": ["date", "time", "meeting_room"],
        "additionalProperties": False
      },
      "strict": True
    }
    },
    {   "type": "function",
        "function":{
      "name": "get_expense_balance",
      "description": "Retrieve the current expense balance for an employee.",
      "parameters": {
        "type": "object",
        "properties": {
          "employee_id": {
            "type": "integer",
            "description": "The unique identifier of the employee."
          }
        },
        "required": ["employee_id"],
        "additionalProperties": False
      },
      "strict": True
    }
    },
    {   "type": "function",
        "function":{
      "name": "calculate_performance_bonus",
      "description": "Calculate the performance bonus for an employee in a given year.",
      "parameters": {
        "type": "object",
        "properties": {
          "employee_id": {
            "type": "integer",
            "description": "The unique identifier of the employee."
          },
          "current_year": {
            "type": "integer",
            "description": "The year for which the bonus is being calculated."
          }
        },
        "required": ["employee_id", "current_year"],
        "additionalProperties": False
      },
      "strict": True
    }
    },
    {   "type": "function",
        "function":{
      "name": "report_office_issue",
      "description": "Report an issue within the office to a specific department.",
      "parameters": {
        "type": "object",
        "properties": {
          "issue_code": {
            "type": "integer",
            "description": "The predefined issue code representing the office issue."
          },
          "department": {
            "type": "string",
            "description": "The department responsible for handling the issue."
          }
        },
        "required": ["issue_code", "department"],
        "additionalProperties": False
      },
      "strict": True
    }
    }
  
]
import httpx
from typing import List, Dict, Any
def query_gpt(user_input: str, tools: list[Dict[str, Any]]) -> Dict[str, Any]:
    print("🔍 User Input:", user_input)
    response = requests.post(
        "http://aiproxy.sanand.workers.dev/openai/v1/chat/completions",
        headers={"Authorization": f"Bearer {API_KEY}",
                "Content-Type": "application/json"},
        json={
            "model": "gpt-4o-mini",
            "messages": [
                {"role": "user", "content": user_input}
            ],
            "tools": tools,
            "tool_choice": "required"
        }
    )
    result = response.json()
    # response = httpx.post(
    #     "https://aiproxy.sanand.workers.dev/openai/v1/chat/completions",
    #     headers={
    #         "Authorization": f"Bearer {API_KEY}",
    #         "Content-Type": "application/json",
    #     },
    #     json={
    #         "model": "gpt-4o-mini",
    #         "messages": [{"role": "user", "content": user_input}],
    #         "tools": tools,
    #         "tool_choice": "required",
    #     },
    # )
    print("🔍 Full Response:", result)
    return response.json()["choices"][0]["message"]["tool_calls"][0]["function"]


@app.get("/execute")
def function_call(request: Request):
    # Ensure docs are provided
    # if not request.query:
    #     raise HTTPException(status_code=400, detail="Query cannot be empty")
    print(".....")
    print(request.query_params.getlist("q")[0])
    print(".....")
    a = query_gpt(request.query_params.getlist("q")[0], tools)
    return a