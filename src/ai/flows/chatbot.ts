
/**
 * @fileoverview A chatbot flow for the Opulex financial assistant.
 */
'use server';

import { ai } from '@/ai/genkit';
import { type ChatContext, ChatContextSchema } from '@/ai/schemas/chat-schema';
import { z } from 'genkit';


const chatbotFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatContextSchema,
    outputSchema: z.string(),
  },
  async (context) => {
    const llmResponse = await ai.generate({
      prompt: `You are Opulex, a sophisticated and encouraging financial AI assistant. Your goal is to help users master their wealth with clarity and confidence.

      You have access to the user's financial data. Use it to answer their questions accurately and provide personalized insights.
      
      Here is the user's financial data:
      - Budget: ${JSON.stringify(context.budget)}
      - Transactions: ${JSON.stringify(context.transactions)}
      - Savings Goals: ${JSON.stringify(context.goals)}

      User query: "${context.prompt}"

      Analyze the user's query in the context of their financial data and provide a helpful, clear, and encouraging response.
      If you don't know the answer, say that you are still learning but can help with topics like budgeting, spending, or savings goals.
      Keep your responses concise and easy to understand.
      `,
      model: 'googleai/gemini-2.5-flash-preview',
    });

    return llmResponse.text;
  }
);

export async function getChatbotResponse(context: ChatContext): Promise<string> {
    return chatbotFlow(context);
}
