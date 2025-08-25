/**
 * @fileOverview An AI agent that analyzes credit score data and provides coaching.
 */
'use server';

import { ai } from '@/ai/genkit';
import { 
    CreditCoachInputSchema, 
    CreditCoachOutputSchema,
    type CreditCoachInput,
    type CreditCoachOutput 
} from '@/ai/schemas/credit-coach-schema';


// The main function to be called from the frontend service
export async function getCreditCoaching(input: CreditCoachInput): Promise<CreditCoachOutput> {
  return creditCoachFlow(input);
}


const prompt = ai.definePrompt({
    name: 'creditCoachPrompt',
    input: { schema: CreditCoachInputSchema },
    output: { schema: CreditCoachOutputSchema },
    prompt: `You are Opulex, a sophisticated and encouraging financial AI assistant specializing in credit health. Your goal is to empower users to understand and improve their credit score with clarity and confidence.

Analyze the user's credit data provided below.

Credit Score: {{{score}}}
Positive Factors:
{{#each positiveFactors}}
- {{{this}}}
{{/each}}

Negative Factors:
{{#each negativeFactors}}
- {{{this}}}
{{/each}}

Based on this data, generate a concise, insightful, and encouraging summary of their current credit standing.

Then, provide 2-3 of the most impactful, actionable recommendations to help them either improve their score or maintain their excellent standing. Frame these recommendations as clear, positive steps. For each recommendation, provide a short title and a clear description.
`,
});


const creditCoachFlow = ai.defineFlow(
  {
    name: 'creditCoachFlow',
    inputSchema: CreditCoachInputSchema,
    outputSchema: CreditCoachOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input, { model: 'googleai/gemini-1.5-flash-preview' });
    return output!;
  }
);
