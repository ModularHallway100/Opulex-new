export const budgetData = {
    income: {
        sources: [
            { id: 'salary', name: 'Salary', amount: 4500 },
            { id: 'side-gig', name: 'Side Gig', amount: 500 },
            { id: 'investments', name: 'Investment Income', amount: 0 },
        ]
    },
    categories: [
        { id: 'rent', name: 'Rent', allocated: 2000, aiSuggestion: 2000, isEssential: true },
        { id: 'groceries', name: 'Groceries', allocated: 450, aiSuggestion: 480 },
        { id: 'utilities', name: 'Utilities', allocated: 150, aiSuggestion: 180, isEssential: true },
        { id: 'transportation', name: 'Transportation', allocated: 100, aiSuggestion: 100 },
        { id: 'subscriptions', name: 'Subscriptions', allocated: 50, aiSuggestion: 50 },
        { id: 'entertainment', name: 'Entertainment', allocated: 200, aiSuggestion: 250 },
        { id: 'savings', name: 'Savings', allocated: 1000, aiSuggestion: 1000, isEssential: true },
    ]
};
