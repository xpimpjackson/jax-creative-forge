// src/lib/api/openai.ts
export async function generateCreativeText(prompt: string, tone: string) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4", // or gpt-3.5-turbo
      messages: [
        {
          role: "system",
          content: `You are a creative writing assistant. Write in a tone/style of: ${tone}`,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error?.message || "OpenAI API error");
  }

  const data = await res.json();
  return data.choices[0].message.content.trim();
}
