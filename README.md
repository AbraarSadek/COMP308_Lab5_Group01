
# COMP 308 Lab 5 – Emerging Technologies

## Group Members
- Rojen Balandray
- Abraar Sadek
- Vince Diego

## Project Overview
This project examines the environmental impact of emerging technologies and the sustainable solutions provided by major software companies. The assignment required a short report, article summaries, JavaScript code for a summarizer, and a user interface for running the summarizer and displaying results. :contentReference[oaicite:1]{index=1}

Our group researched recent articles related to:
1. The impact of emerging technologies on the environment
2. Sustainable solutions provided by top software makers

We also implemented an AI-powered summarizer with a simple web interface so users can paste article text and generate a summary.

---

## Objectives
The goals of this lab were to:
- examine sustainability initiatives and environmental responses from major software companies
- analyze the impact of emerging technologies on the environment
- use generative AI to summarize article content
- create a simple UI to run the summarizer and display the generated results :contentReference[oaicite:2]{index=2}

---

## Articles Selected

-- articles found in the references.txt file

### Why These Articles Were Chosen
These articles were selected because they were recent, relevant to sustainability, and directly connected to the themes of the assignment. We focused on articles discussing:
- AI and cloud computing energy usage
- data center electricity consumption
- carbon emissions and environmental impact
- renewable energy and sustainability programs
- environmental initiatives from companies such as Microsoft, Google, Amazon, and other major technology providers

These sources helped us produce summaries that were relevant, current, and aligned with the assignment rubric. 

---

## Summarizer Implementation

### Technologies Used
- HTML
- CSS
- JavaScript
- Ollama
- Llama 3 local model

### How the Summarizer Was Implemented
The summarizer was built as a simple web-based interface. The user pastes article text into a textarea, clicks the **Generate Summary** button, and the application sends the text to a local Llama model through Ollama. The model then returns a summary, which is displayed directly on the page.

The implementation process was:
1. Create the basic UI in `index.html`
2. Style the interface in `style.css`
3. Add summarization logic in `script.js`
4. Connect the frontend to Ollama running locally at `http://localhost:11434`
5. Use the Llama model to generate a summary from article text
6. Display the summary in the output area of the interface

### Why We Used Llama with Ollama
We initially explored Gemini and OpenAI as possible summarizer options because they were listed in the lab materials. However, during testing, quota and billing limitations prevented consistent API access. To ensure a reliable demonstration and working implementation, we switched to a local Llama model using Ollama. This allowed the summarizer to run without depending on online API quota limits while still meeting the assignment goal of using generative AI for summarization. :contentReference[oaicite:4]{index=4}

---

## File Structure

```text
src/
 ├── index.html
 ├── style.css
 └── script.js
README.md


---

## How to Setup and Run the Summarizer

### Requirements

Before running the application, make sure you have the following installed:

| Requirement | Notes |
|---|---|
| Visual Studio Code | Or any code editor |
| Node.js | Optional — only needed for certain extensions |
| Ollama | Required to run the local model |
| Llama 3 | Must be pulled via Ollama |
| Live Server (VS Code extension) | Recommended for serving the frontend |

---

### Step 1 — Install Ollama

1. Download and install Ollama from the [official website](https://ollama.com)
2. Open PowerShell or a terminal
3. Verify the installation:

```bash
ollama --version
```

---

### Step 2 — Install the Llama 3 Model

Pull the model with:

```bash
ollama pull llama3
```

Confirm it was installed successfully:

```bash
ollama list
```

You should see output similar to:

```
llama3:latest
```

---

### Step 3 — Ensure Ollama is Running

Ollama starts a local server automatically at:

```
http://localhost:11434
```

No additional configuration is needed if Ollama is already running.

---

### Step 4 — Open the Project

1. Open the project folder in Visual Studio Code
2. Navigate to `src/index.html`

---

### Step 5 — Run the Application

- Right-click `index.html` and select **Open with Live Server**

> Alternatively, serve the project using any local HTTP server.

---

### Step 6 — Use the Summarizer

1. Paste article text into the input box
2. Click **Generate Summary**
3. Wait a few seconds for the model to respond
4. The generated summary will appear below the input area