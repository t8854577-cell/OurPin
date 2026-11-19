
import os
import json
from pathlib import Path
from datetime import datetime, timezone

from google import genai
from google.genai import types

API_KEY = os.getenv("GEMINI_API_KEY")

if not API_KEY:
    raise ValueError("GEMINI_API_KEY is missing!")

MODEL_NAME = "gemini-3.8-flash"

# Retry temporary API errors
retry_options = types.HttpRetryOptions(
    attempts=7,
    initial_delay=2.0,
    max_delay=30.0,
    exp_base=2.0,
    jitter=1.0,
    http_status_codes=[408, 429, 500, 502, 503, 504]
)

client = genai.Client(
    api_key=API_KEY,
    http_options=types.HttpOptions(
        retry_options=retry_options
    )
)

# Required JSON structure
CONTENT_SCHEMA = {
    "type": "OBJECT",
    "properties": {
        "title": {"type": "STRING"},
        "passage": {"type": "STRING"},
        "questions": {
            "type": "ARRAY",
            "items": {
                "type": "OBJECT",
                "properties": {
                    "question": {"type": "STRING"},
                    "options": {
                        "type": "ARRAY",
                        "items": {
                            "type": "OBJECT",
                            "properties": {
                                "label": {"type": "STRING"},
                                "text": {"type": "STRING"}
                            },
                            "required": ["label", "text"]
                        }
                    },
                    "correct_option": {"type": "STRING"},
                    "explanation": {"type": "STRING"}
                },
                "required": [
                    "question",
                    "options",
                    "correct_option",
                    "explanation"
                ]
            }
        }
    },
    "required": ["title", "passage", "questions"]
}


def generate_content(prompt):
    response = client.models.generate_content(
        model=MODEL_NAME,
        contents=prompt,
        config=types.GenerateContentConfig(
            response_mime_type="application/json",
            response_schema=CONTENT_SCHEMA
        )
    )

    if not response.text:
        raise RuntimeError("Gemini returned an empty response.")

    content = json.loads(response.text)

    # Basic validation
    if len(content["questions"]) != 3:
        raise ValueError("Expected exactly 3 questions.")

    for question in content["questions"]:
        if len(question["options"]) != 4:
            raise ValueError("Each question must have 4 options.")

        labels = [option["label"] for option in question["options"]]

        if labels != ["A", "B", "C", "D"]:
            raise ValueError("Options must be labelled A, B, C, D.")

        if question["correct_option"] not in labels:
            raise ValueError("Invalid correct answer.")

    return content


def save_content(content):
    output_dir = Path("data")
    output_dir.mkdir(parents=True, exist_ok=True)

    output = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "title": content["title"],
        "passage": content["passage"],
        "questions": content["questions"]
    }

    output_file = output_dir / "daily_practice.json"

    with output_file.open("w", encoding="utf-8") as file:
        json.dump(output, file, indent=2, ensure_ascii=False)

    print(f"Content successfully saved: {output_file}")


if __name__ == "__main__":

    prompt = """
    Create an educational reading passage about Artificial Intelligence
    for senior secondary students.

    Generate exactly 3 comprehension MCQs based only on the passage.

    Each question must have:
    - Four options labelled A, B, C and D.
    - Exactly one correct answer.
    - A short explanation for the correct answer.

    Make the questions test comprehension and inference,
    not just memorisation.

    Return the result in the required JSON structure.
    """

    generated_content = generate_content(prompt)
    save_content(generated_content)

    print("AI content generation completed successfully.")
