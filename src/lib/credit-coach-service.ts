
'use server';

import { getCreditCoaching as getCreditCoachingFlow } from "@/ai/flows/credit-coach";
import type { CreditCoachInput, CreditCoachOutput } from "@/ai/schemas/credit-coach-schema";


// This service connects the frontend to the Genkit AI flow.
export const getCreditCoaching = async (input: CreditCoachInput): Promise<CreditCoachOutput> => {
  // In a real app, you might add extra validation or logging here.
  return await getCreditCoachingFlow(input);
};

export type { CreditCoachOutput };
