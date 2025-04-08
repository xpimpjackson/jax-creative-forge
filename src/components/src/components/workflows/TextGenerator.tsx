import { useState } from "react";
import { generateCreativeText } from "@/lib/api/openai";
import { Button } from "@/components/ui/button";
const tones = [
  "Poetic",
  "Casual",
  "Professional",
  "Playful",
  "Dark",
  "Surreal",
  "Minimal",
];

const TextGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [tone, setTone] = useState("Poetic");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      const output = await generateCreativeText(prompt, tone);
      setResult(output);
    } catch (err: any) {
      setResult("⚠️ Error: " + err.message);
    }
    setLoading(false);
  };
  return (
    <div className="space-y-6 bg-white/5 p-6 rounded-xl border border-white/10">
      <h2 className="text-2xl font-bold text-white">Creative Text Generator</h2>

      <textarea
        className="w-full p-4 rounded-md text-black"
        rows={4}
        placeholder="Describe what you want written..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <div className="flex gap-3 flex-wrap">
        {tones.map((t) => (
          <button
            key={t}
            onClick={() => setTone(t)}
            className={`px-4 py-2 rounded-md border ${
              tone === t
                ? "bg-jax-purple text-white"
                : "border-white/20 text-white

