
export interface SavingsGoal {
    id: string;
    name: string;
    targetAmount: number;
    currentAmount: number;
    targetDate: string;
    projectedDate: string;
}

export interface Debt {
    id:string;
    creditor: string;
    type: 'Credit Card' | 'Student Loan' | 'Auto Loan' | 'Personal Loan';
    balance: number;
    interestRate: number;
    minPayment: number;
    dueDate: string;
}

export const savingsGoals: SavingsGoal[] = [
    { 
        id: '1', 
        name: 'Emergency Fund', 
        targetAmount: 20000, 
        currentAmount: 15500, 
        targetDate: 'Dec 2024',
        projectedDate: 'Jan 2025'
    },
    { 
        id: '2', 
        name: 'Down Payment for House', 
        targetAmount: 100000, 
        currentAmount: 45000,
        targetDate: 'Jun 2026',
        projectedDate: 'Aug 2026'
    },
    {
        id: '3',
        name: 'New Car',
        targetAmount: 40000,
        currentAmount: 12000,
        targetDate: 'Dec 2025',
        projectedDate: 'Feb 2026'
    }
];

export const debts: Debt[] = [
    {
        id: '1',
        creditor: 'Capital One',
        type: 'Credit Card',
        balance: 4500,
        interestRate: 21.99,
        minPayment: 150,
        dueDate: '25th of each month'
    },
     {
        id: '2',
        creditor: 'SoFi',
        type: 'Student Loan',
        balance: 25000,
        interestRate: 5.8,
        minPayment: 350,
        dueDate: '15th of each month'
    },
     {
        id: '3',
        creditor: 'Toyota Financial',
        type: 'Auto Loan',
        balance: 15000,
        interestRate: 4.2,
        minPayment: 450,
        dueDate: '1st of each month'
    }
];

export const totalDebt = debts.reduce((sum, debt) => sum + debt.balance, 0);
