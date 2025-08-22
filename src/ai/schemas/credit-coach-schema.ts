/**
 * @fileOverview Zod schemas and TypeScript types for the Credit Coach AI flow.
 * This file contains shared data structures used by both the frontend and the AI flow.
 */
import { z } from 'genkit';

// Input schema for the credit coach flow
export const CreditCoachInputSchema = z.object({
  score: z.number().describe("The user's credit score, ranging from 300 to 850."),
  positiveFactors: z.array(z.string()).describe('List of factors positively affecting the score.'),
  negativeFactors: z.array(z.string()).describe('List of factors negatively affecting the score.'),
});
export type CreditCoachInput = z.infer<typeof CreditCoachInputSchema>;

// Output schema for the credit coach flow
export const CreditCoachOutputSchema = z.object({
  summary: z.string().describe("A brief, encouraging, and insightful summary of the user's credit situation."),
  recommendations: z.array(z.object({
    title: z.string().describe('A short, catchy title for the recommendation.'),
    description: z.string().describe('A concise, actionable description of the step the user can take.'),
  })).describe('A list of 2-3 concrete recommendations for improving or maintaining the credit score.'),
});
export type CreditCoachOutput = z.infer<typeof CreditCoachOutputSchema>;
