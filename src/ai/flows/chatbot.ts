
/**
 * @fileoverview A chatbot flow for the Opulex financial assistant.
 */
'use server';

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const chatbotFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (prompt) => {
    const llmResponse = await ai.generate({
      prompt: `You are Opulex, a sophisticated and encouraging financial AI assistant. Your goal is to help users master their wealth with clarity and confidence.

      User query: "${prompt}"

      Analyze the user's query and provide a helpful, clear, and encouraging response.
      If you don't know the answer, say that you are still learning but can help with topics like budgeting, spending, or savings goals.
      Keep your responses concise and easy to understand.
      `,
      model: 'googleai/gemini-1.5-flash',
    });

    return llmResponse.text;
  }
);
