import { SYSTEM_PROMPT } from "@/data/systemPrompt";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export async function generateResponse(history: { role: string; content: string }[], message: string) {
    if (!API_KEY) {
        return "ERROR: API Key configuration missing. Neural uplink failed.";
    }

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [
                    { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
                    ...history.map(h => ({
                        role: h.role === "user" ? "user" : "model",
                        parts: [{ text: h.content }]
                    })),
                    { role: "user", parts: [{ text: message }] }
                ],
                generationConfig: {
                    maxOutputTokens: 150,
                    temperature: 0.7
                }
            })
        });

        const data = await response.json();

        if (data.error) {
            console.error("Gemini API Error:", data.error);
            return `SYSTEM ERROR: ${data.error.message || "Unknown error"}`;
        }

        if (!data.candidates || data.candidates.length === 0) {
            return "NO RESPONSE FROM NEURAL CORE.";
        }

        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error("Network Error:", error);
        return "CONNECTION ERROR: Backbone link unstable.";
    }
}
