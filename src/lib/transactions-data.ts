import { ShoppingBag, UtensilsCrossed, Car, Home, HeartPulse, Receipt } from 'lucide-react';

export interface Transaction {
    id: string;
    merchant: string;
    amount: number;
    status: 'completed' | 'pending';
    date: string;
    category: 'groceries' | 'utilities' | 'rent' | 'transportation' | 'shopping' | 'income';
}

export const transactions: Transaction[] = [
    {
        id: 'txn_1',
        merchant: 'Salary Deposit',
        amount: 4500,
        status: 'completed',
        date: '2025-06-01',
        category: 'income',
    },
    {
        id: 'txn_2',
        merchant: 'Apartment Rent',
        amount: -2000,
        status: 'completed',
        date: '2025-06-01',
        category: 'rent',
    },
    {
        id: 'txn_3',
        merchant: 'Trader Joe\'s',
        amount: -120.50,
        status: 'completed',
        date: '2025-06-03',
        category: 'groceries',
    },
    {
        id: 'txn_4',
        merchant: 'Shell Gas Station',
        amount: -45.20,
        status: 'completed',
        date: '2025-06-04',
        category: 'transportation',
    },
    {
        id: 'txn_5',
        merchant: 'PG&E Utilities',
        amount: -85.75,
        status: 'completed',
        date: '2025-06-05',
        category: 'utilities',
    },
    {
        id: 'txn_6',
        merchant: 'Amazon.com',
        amount: -75.99,
        status: 'completed',
        date: '2025-06-06',
        category: 'shopping',
    },
     {
        id: 'txn_7',
        merchant: 'Starbucks',
        amount: -5.50,
        status: 'completed',
        date: '2025-06-07',
        category: 'groceries',
    },
     {
        id: 'txn_8',
        merchant: 'Side Gig Payment',
        amount: 500,
        status: 'completed',
        date: '2025-06-10',
        category: 'income',
    },
     {
        id: 'txn_9',
        merchant: 'Netflix Subscription',
        amount: -15.99,
        status: 'pending',
        date: '2025-06-15',
        category: 'shopping',
    },
];

export const categories = [
    { value: 'groceries', label: 'Groceries', icon: UtensilsCrossed },
    { value: 'utilities', label: 'Utilities', icon: HeartPulse },
    { value: 'rent', label: 'Rent', icon: Home },
    { value: 'transportation', label: 'Transportation', icon: Car },
    { value: 'shopping', label: 'Shopping', icon: ShoppingBag },
    { value: 'income', label: 'Income', icon: Receipt },
];

export const statuses = [
    { value: 'completed', label: 'Completed' },
    { value: 'pending', label: 'Pending' },
];
