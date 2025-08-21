
export const budgetData = {
    income: {
        sources: [
            { id: 'salary', name: 'Salary', amount: 4500 },
            { id: 'side-gig', name: 'Side Gig', amount: 500 },
        ]
    },
    categories: [
        { id: 'housing', name: 'Housing', allocated: 1800, spent: 1800, aiSuggestion: 1800, isEssential: true },
        { id: 'food', name: 'Food', allocated: 600, spent: 450, aiSuggestion: 650, isEssential: true },
        { id: 'utilities', name: 'Utilities', allocated: 200, spent: 180, aiSuggestion: 200, isEssential: true },
        { id: 'transportation', name: 'Transportation', allocated: 150, spent: 90, aiSuggestion: 150 },
        { id: 'savings', name: 'Savings', allocated: 1250, spent: 1000, aiSuggestion: 1200, isEssential: true },
        { id: 'debt-repayment', name: 'Debt Repayment', allocated: 500, spent: 500, aiSuggestion: 500 },
        { id: 'entertainment', name: 'Entertainment (Luxury)', allocated: 250, spent: 300, aiSuggestion: 200 },
        { id: 'shopping', name: 'Shopping (Luxury)', allocated: 250, spent: 150, aiSuggestion: 150 },
    ]
};
