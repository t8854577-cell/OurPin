import os
from google import genai
from google.genai import types

API_KEY = os.getenv("GEMINI_API_KEY")

if not API_KEY:
    raise ValueError("GEMINI_API_KEY is missing!")

# Configure automatic retries
retry_options = types.HttpRetryOptions(
    attempts=7,
    initial_delay=2.0,
    max_delay=30.0,
    exp_base=2.0,
    jitter=1.0,
    http_status_codes=[408, 429, 500, 502, 503, 504]
)

# Initialize Gemini
client = genai.Client(
    api_key=API_KEY,
    http_options=types.HttpOptions(
        retry_options=retry_options
    )
)


def generate_content(prompt):
    response = client.models.generate_content(
        model="gemini-3.8-flash",
        contents=prompt
    )

    return response.text


if __name__ == "__main__":

    prompt = """
    Write a short educational reading passage
    about Artificial Intelligence.

    Then create 3 multiple-choice questions.
    Include four options for each question.
    """

    result = generate_content(prompt)
    print(result)
