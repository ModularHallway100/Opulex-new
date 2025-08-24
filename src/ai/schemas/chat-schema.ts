/**
 * @fileOverview Zod schemas and TypeScript types for the Chatbot AI flow.
 */
import { z } from 'genkit';

export const ChatContextSchema = z.object({
    prompt: z.string(),
    budget: z.any().describe("The user's budget data, including income and spending categories."),
    transactions: z.any().describe("A list of the user's recent transactions."),
    goals: z.any().describe("The user's savings goals."),
});
export type ChatContext = z.infer<typeof ChatContextSchema>;
