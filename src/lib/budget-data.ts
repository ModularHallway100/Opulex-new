
export const budgetData = {
    income: {
        sources: [
            { id: 'salary', name: 'Monthly Salary', amount: 5500 },
            { id: 'freelance', name: 'Freelance Work', amount: 1200 },
        ]
    },
    categories: [
        { id: 'rent', name: 'Rent/Mortgage', allocated: 2000, spent: 2000, isEssential: true },
        { id: 'groceries', name: 'Groceries', allocated: 600, spent: 550, aiSuggestion: 650, isEssential: true },
        { id: 'utilities', name: 'Utilities', allocated: 250, spent: 230, aiSuggestion: 250, isEssential: true },
        { id: 'transport', name: 'Transportation', allocated: 300, spent: 280, isEssential: true },
        { id: 'dining', name: 'Dining Out', allocated: 400, spent: 450, aiSuggestion: 350 },
        { id: 'shopping', name: 'Shopping', allocated: 500, spent: 300, aiSuggestion: 400 },
        { id: 'entertainment', name: 'Entertainment', allocated: 250, spent: 280 },
        { id: 'investments', name: 'Investments', allocated: 1000, spent: 1000 },
        { id: 'gym', name: 'Gym Membership', allocated: 50, spent: 50 },
    ]
};
