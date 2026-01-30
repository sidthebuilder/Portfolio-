
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
    console.error("No API key found in .env");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

async function listModels() {
    try {
        // The SDK doesn't expose listModels directly on the main class in some versions,
        // but usually we can try to just get a model and run a simple prompt to test connection first,
        // or use the ModelManager if available.
        // However, for v1beta, we might not have a direct listModels helper in the high-level generic client easily accessible 
        // without looking at the specific class structure. 
        // Actually, looking at the doc, we might need to use the REST API manually if the SDK doesn't expose it easily 
        // or if we just want to be sure.
        // BUT, let's try to just hit the REST endpoint directly for listing models to be 100% sure what the raw API sees.

        const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            console.error("Error from ListModels API:", JSON.stringify(data.error, null, 2));
        } else {
            console.log("Available Models:", JSON.stringify(data, null, 2));
        }

    } catch (error) {
        console.error("Script Error:", error);
    }
}

listModels();
