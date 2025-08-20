export interface SavingsGoal {
    id: string;
    name: string;
    targetAmount: number;
    currentAmount: number;
    targetDate: string;
    projectedDate: string;
}

export interface Debt {
    id: string;
    creditor: string;
    type: 'Credit Card' | 'Student Loan' | 'Auto Loan' | 'Personal Loan';
    balance: number;
    interestRate: number;
    minPayment: number;
    dueDate: string;
}

export const savingsGoals: SavingsGoal[] = [
    {
        id: 'goal-1',
        name: 'European Vacation',
        targetAmount: 4000,
        currentAmount: 1200,
        targetDate: 'Dec 31, 2025',
        projectedDate: 'Feb 15, 2026',
    },
    {
        id: 'goal-2',
        name: 'Emergency Fund',
        targetAmount: 10000,
        currentAmount: 6500,
        targetDate: 'Oct 31, 2025',
        projectedDate: 'Oct 20, 2025',
    },
     {
        id: 'goal-3',
        name: 'New Car Downpayment',
        targetAmount: 5000,
        currentAmount: 800,
        targetDate: 'Mar 31, 2026',
        projectedDate: 'May 1, 2026',
    },
];

export const debts: Debt[] = [
    {
        id: 'debt-1',
        creditor: 'Chase Sapphire',
        type: 'Credit Card',
        balance: 3000,
        interestRate: 18.5,
        minPayment: 75,
        dueDate: 'June 25, 2025',
    },
    {
        id: 'debt-2',
        creditor: 'FedLoan Servicing',
        type: 'Student Loan',
        balance: 25000,
        interestRate: 4.5,
        minPayment: 250,
        dueDate: 'July 1, 2025',
    },
     {
        id: 'debt-3',
        creditor: 'Toyota Financial',
        type: 'Auto Loan',
        balance: 8500,
        interestRate: 3.2,
        minPayment: 400,
        dueDate: 'July 5, 2025',
    },
];

export const totalDebt = debts.reduce((sum, debt) => sum + debt.balance, 0);
