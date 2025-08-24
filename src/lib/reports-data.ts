
import { TrendingUp, TrendingDown, Info, Bot } from "lucide-react";

export const spendingBreakdownData = [
    { name: 'rent', value: 2000, fill: "hsl(var(--chart-1))" },
    { name: 'groceries', value: 600, fill: "hsl(var(--chart-2))" },
    { name: 'utilities', value: 250, fill: "hsl(var(--chart-3))" },
    { name: 'dining', value: 400, fill: "hsl(var(--chart-4))" },
    { name: 'transport', value: 300, fill: "hsl(var(--chart-5))" },
    { name: 'shopping', value: 500, fill: "hsl(var(--chart-1))" },
    { name: 'entertainment', value: 250, fill: "hsl(var(--chart-2))" },
]

export const incomeVsExpenseData = [
  { date: 'Jul 1', income: 4000, expenses: 2400 },
  { date: 'Jul 8', income: 4200, expenses: 2800 },
  { date: 'Jul 15', income: 4800, expenses: 3200 },
  { date: 'Jul 22', income: 5100, expenses: 3500 },
  { date: 'Jul 29', income: 5500, expenses: 3800 },
]

export const netWorthData = [
  { month: "Jan", netWorth: 75000, assets: 100000, liabilities: 25000 },
  { month: "Feb", netWorth: 78000, assets: 104000, liabilities: 26000 },
  { month: "Mar", netWorth: 82000, assets: 110000, liabilities: 28000 },
  { month: "Apr", netWorth: 85000, assets: 115000, liabilities: 30000 },
  { month: "May", netWorth: 90000, assets: 122000, liabilities: 32000 },
  { month: "Jun", netWorth: 95000, assets: 130000, liabilities: 35000 },
  { month: "Jul", netWorth: 100000, assets: 138000, liabilities: 38000 },
];

export const assets = [
    { name: 'Checking Account', value: 15000 },
    { name: 'Savings Account', value: 45000 },
    { name: 'Investment Portfolio', value: 78000 },
]

export const liabilities = [
    { name: 'Credit Card Debt', value: -5000 },
    { name: 'Student Loan', value: -33000 },
]

export const creditScoreData = {
    score: 780,
    rating: 'Excellent',
    provider: 'Opulex Credit',
    lastUpdated: 'July 28, 2024',
    positiveFactors: [
        'Excellent payment history',
        'Low credit utilization',
        'Long credit history'
    ],
    negativeFactors: [
        'One recent hard inquiry',
    ],
};

export const insights = [
    { icon: <TrendingUp className="text-green-500"/>, title: 'Top Spending Category', description: 'Groceries was your highest spending category this month.' },
    { icon: <TrendingDown className="text-red-500"/>, title: 'Reduced Spending', description: 'You spent 15% less on dining out this month. Great job!' },
    { icon: <Info className="text-blue-500"/>, title: 'Subscription Review', description: 'You have 3 subscriptions renewing in the next 7 days.' },
]

export const forecasts = [
    { title: 'Projected Savings', description: 'If you maintain your current savings rate, you are on track to save an additional $1,200 this quarter.' },
]
