
// This is a mock service to simulate AI responses.
// In a real application, this would be a Genkit flow.

const responses: { [key: string]: string } = {
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
