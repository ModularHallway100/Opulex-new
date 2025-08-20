// This is a mock service to simulate AI responses.
// In a real application, this would be a Genkit flow.

const responses: { [key: string]: string } = {
  "how much did i spend on dining last month?": "In May 2025, you spent $350 on Dining, which is 10% higher than April’s $320. Would you like me to set a $300 budget for Dining in June?",
  "what bills are due this week?": "Electric bill: $85 due June 10; Spotify renewal: $9.99 due June 12; Car insurance: $90 due June 14. Want reminders two days before each?",
  "show me my net worth trend": "On Jan 1, 2025, your net worth was $28,000; on Jun 1, 2025, it’s $32,400—a 15% increase. Would you like the detailed chart?",
  "suggest ways to save more": "You’re overspending on Dining and Entertainment by 12% vs. average. Reducing Dining by $20/week and Entertainment by $15/week could save $140/month. Shall I adjust your Dining budget to $250 and Entertainment to $100?",
  "default": "I'm sorry, I can't answer that question right now. I am still learning. Try asking about your spending, bills, or net worth."
};

export const getChatbotResponse = (query: string): Promise<string> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const key = query.toLowerCase().trim();
      const response = responses[key] || responses["default"];
      resolve(response);
    }, 1000); // Simulate network delay
  });
};
