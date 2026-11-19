import os
from google import genai

# Get API key from GitHub Secrets
API_KEY = os.getenv("GEMINI_API_KEY")

if not API_KEY:
    raise ValueError("GEMINI_API_KEY is missing!")

# Initialize Gemini
client = genai.Client(api_key=API_KEY)


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
