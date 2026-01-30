
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getRepairAdvice = async (userMessage: string, chatHistory: { role: 'user' | 'model', text: string }[]) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are an expert white goods repair assistant for "HomeGuard Appliance Repair". 
        Your goal is to help customers diagnose appliance issues and offer professional repair solutions.
        
        Business Context:
        - We repair: refrigerators, washing machines, dishwashers, ovens, dryers, and air conditioners.
        - We offer: Same-day service, affordable pricing, certified techs, original spare parts, and warranty.
        
        Guidelines:
        1. Always be professional, empathetic, and helpful.
        2. If a user describes a symptom (e.g., "my fridge isn't cooling"), provide a few likely causes but emphasize that a certified technician should handle complex repairs.
        3. Mention our "Same-day service" and "Certified technicians" naturally.
        4. Ask clarifying questions if the appliance type isn't clear.
        5. Encourage booking a professional inspection for safety.`,
      },
    });

    // Reconstruct history
    // Note: We use the last few messages for context
    const response = await chat.sendMessage({ message: userMessage });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a bit of trouble connecting to my knowledge base. Please try describing your appliance issue again, or call us directly for immediate help!";
  }
};

export const generateMarketingMaterials = async (businessName: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate professional marketing content for a white goods repair business named "${businessName}". 
      The business offers: same-day service, affordable pricing, certified technicians, original parts, and warranty.
      
      Please provide:
      1. A business description (friendly and trustworthy).
      2. A catchy slogan.
      3. A Google Ad (Headline + Description).
      4. A website homepage intro.
      5. A chatbot greeting asking what is broken.
      
      Format the response as JSON with the following structure:
      {
        "businessDescription": "...",
        "slogan": "...",
        "googleAd": { "headline": "...", "description": "..." },
        "homepageIntro": "...",
        "chatbotGreeting": "..."
      }`,
      config: {
        responseMimeType: "application/json"
      }
    });
    
    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Content Generation Error:", error);
    return null;
  }
};
