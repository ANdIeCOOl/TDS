# /// script
# requires-python = ">=3.13"
# dependencies = [
#     "fastapi",
#     "uvicorn",
# ]
# ///
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from typing import List
import csv
from fastapi.responses import JSONResponse
import json

app = FastAPI()

# Enable CORS for all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_methods=["*"],  # Allow only GET requests
    allow_headers=["*"],  # Allow any headers
)

# Sample CSV file reading function (you can replace this with your actual CSV)
def read_students_from_csv(file_path="/workspaces/TDS/WK 2/q9/q-fastapi.csv"):
    students = []
    with open(file_path, mode="r") as file:
        reader = csv.DictReader(file)
        for row in reader:
            row['studentId'] = int(row['studentId'])  # Convert the 'class' column to integer
            students.append(row)  # Assuming CSV contains columns like 'name', 'class', etc.
    return students

# Sample endpoint to get students based on class
@app.get("/api")
async def get_students(request: Request):
    # Read all students from CSV
    class_list = request.query_params.getlist("class")
    students = read_students_from_csv()
    print("---")
    print (class_list)
    print("----")
    # Filter students based on the 'class' query parameter
    filtered_students = [student for student in students if student['class'] in class_list] if class_list else students
    print(json.dumps(filtered_students))
    return JSONResponse(content={"students": filtered_students})
    