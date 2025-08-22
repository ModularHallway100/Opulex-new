
'use server';

import { chatbotFlow } from "@/ai/flows/chatbot";

// This service connects the frontend to the Genkit AI flow.
export const getChatbotResponse = async (query: string): Promise<string> => {
  return await chatbotFlow(query);
};
