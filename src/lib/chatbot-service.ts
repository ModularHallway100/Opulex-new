
'use server';

import { chatbotFlow } from "@/ai/flows/chatbot";
import { budgetData } from "./budget-data";
import { transactions } from "./transactions-data";
import { savingsGoals } from "./goals-data";

// This service connects the frontend to the Genkit AI flow.
export const getChatbotResponse = async (query: string): Promise<string> => {
  return await chatbotFlow({
    prompt: query,
    budget: budgetData,
    transactions: transactions,
    goals: savingsGoals,
  });
};
