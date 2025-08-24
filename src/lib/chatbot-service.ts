
'use server';

import { getChatbotResponse as getChatbotResponseFlow } from "@/ai/flows/chatbot";
import { type ChatContext } from "@/ai/schemas/chat-schema";
import { budgetData } from "./budget-data";
import { transactions } from "./transactions-data";
import { savingsGoals } from "./goals-data";

// This service connects the frontend to the Genkit AI flow.
export const getChatbotResponse = async (query: string): Promise<string> => {
  
  const context: ChatContext = {
    prompt: query,
    budget: budgetData,
    transactions: transactions,
    goals: savingsGoals,
  };

  return await getChatbotResponseFlow(context);
};
