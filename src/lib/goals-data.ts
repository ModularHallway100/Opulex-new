
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

export const savingsGoals: SavingsGoal[] = [];

export const debts: Debt[] = [];

export const totalDebt = debts.reduce((sum, debt) => sum + debt.balance, 0);
