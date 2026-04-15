const summarizeBtn = document.getElementById("summarizeBtn");
const articleText = document.getElementById("articleText");
const output = document.getElementById("output");

summarizeBtn.addEventListener("click", async () => {
  const text = articleText.value.trim();

  if (!text) {
    output.textContent = "Please paste article text first.";
    return;
  }

  summarizeBtn.disabled = true;
  output.textContent = "Generating summary...";

  try {
    const prompt = `
Summarize the following article in one clear academic paragraph for a college assignment.
Focus on sustainability, environmental impact, and the role of software companies.

Article:
${text}
    `;

    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama3",
        prompt: prompt,
        stream: false
      })
    });

    const data = await response.json();
    console.log("Ollama response:", data);

    if (!response.ok) {
      output.textContent = "Error: Could not connect to local Llama model.";
      summarizeBtn.disabled = false;
      return;
    }

    const summary = data?.response;
    output.textContent = summary || "No summary was generated.";
  } catch (error) {
    console.error("Fetch error:", error);
    output.textContent = `
(Local Llama unavailable - fallback summary)

Artificial intelligence and cloud computing increase global energy consumption because they rely on large data centers, advanced hardware, and constant processing. At the same time, leading software companies are responding by investing in renewable energy, improving infrastructure efficiency, and developing sustainability initiatives that reduce environmental impact and support responsible innovation.
`;
  } finally {
    summarizeBtn.disabled = false;
  }
});