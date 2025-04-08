// src/lib/api/openai.ts

export async function generateCreativeText(prompt: string, tone: string) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OpenAI API key is not set");
  }

  const requestBody = JSON.stringify({
    model: "gpt-4", // or "gpt-3.5-turbo"
    messages: [
      {
        role: "system",
        content: `You are a helpful assistant that generates creative text with a ${tone} tone.`,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  console.log('Request:', requestBody);

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: requestBody,
  });

  if (!res.ok) {
    switch (res.status) {
      case 401:
        throw new Error("Unauthorized: Check your API key.");
      case 429:
        throw new Error("Rate limit exceeded: Please try again later.");
      default:
        throw new Error(`OpenAI API error: ${res.statusText}`);
    }
  }

  const data = await res.json();
  console.log("Response:", data);

  return data.choices[0].message.content.trim();
}
