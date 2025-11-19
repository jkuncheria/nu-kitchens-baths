import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize the Gemini Client
// The API key must be provided via the environment variable process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const createDesignChat = (): Chat => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are "NuDesign", an expert interior design AI consultant for Nu Kitchens & Baths. 
      Your goal is to assist homeowners with kitchen and bathroom remodeling ideas.
      
      Guidelines:
      1. Be professional, encouraging, and stylish.
      2. Suggest color palettes, materials (quartz, granite, hardwood), and layout tips.
      3. If asked about pricing, give general ranges but emphasize that a personal consultation is needed for accuracy.
      4. Keep responses concise (under 100 words) unless asked for detail.
      5. Promote Nu Kitchens' services: Custom Cabinetry, Full Remodels, and Design-Build process.
      
      Do not generate code or markdown code blocks. Use plain text or bullet points.`,
      temperature: 0.7,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "I'm imagining something beautiful, but I couldn't quite put it into words. Could you try asking again?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("I'm having trouble connecting to the design server right now.");
  }
};