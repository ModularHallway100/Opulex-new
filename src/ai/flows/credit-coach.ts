/**
 * @fileOverview An AI agent that analyzes credit score data and provides coaching.
 */
'use server';

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

// Input schema for the credit coach flow
export const CreditCoachInputSchema = z.object({
  score: z.number().describe('The user\'s credit score, ranging from 300 to 850.'),
  positiveFactors: z.array(z.string()).describe('List of factors positively affecting the score.'),
  negativeFactors: z.array(z.string()).describe('List of factors negatively affecting the score.'),
});
export type CreditCoachInput = z.infer<typeof CreditCoachInputSchema>;

// Output schema for the credit coach flow
export const CreditCoachOutputSchema = z.object({
  summary: z.string().describe('A brief, encouraging, and insightful summary of the user\'s credit situation.'),
  recommendations: z.array(z.object({
    title: z.string().describe('A short, catchy title for the recommendation.'),
    description: z.string().describe('A concise, actionable description of the step the user can take.'),
  })).describe('A list of 2-3 concrete recommendations for improving or maintaining the credit score.'),
});
export type CreditCoachOutput = z.infer<typeof CreditCoachOutputSchema>;


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
    const { output } = await prompt(input);
    return output!;
  }
);
