import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyCaWLx3EOXbrIoqACdbolqXJevZ7vFqd30" });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt
  });
  console.log(response.text);
  return response.text;
    // You can handle the response further as needed, e.g., updating state in a React component  
}

export default main;