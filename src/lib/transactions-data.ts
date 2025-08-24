
import { ShoppingBag, UtensilsCrossed, Car, Home, HeartPulse, Receipt, Shirt, Clapperboard } from 'lucide-react';

export interface Transaction {
    id: string;
    merchant: string;
    amount: number;
    status: 'completed' | 'pending';
    date: string;
    category: 'groceries' | 'utilities' | 'rent' | 'transportation' | 'shopping' | 'entertainment' | 'income';
}

export const transactions: Transaction[] = [
    { id: '1', merchant: 'Whole Foods', amount: -124.50, status: 'completed', date: '2024-07-28', category: 'groceries' },
    { id: '2', merchant: 'PG&E', amount: -85.22, status: 'completed', date: '2024-07-27', category: 'utilities' },
    { id: '3', merchant: 'Greystar', amount: -2000.00, status: 'completed', date: '2024-07-25', category: 'rent' },
    { id: '4', merchant: 'ExxonMobil', amount: -55.30, status: 'completed', date: '2024-07-24', category: 'transportation' },
    { id: '5', merchant: 'Amazon.com', amount: -78.99, status: 'completed', date: '2024-07-22', category: 'shopping' },
    { id: '6', merchant: 'AMC Theaters', amount: -45.00, status: 'completed', date: '2024-07-21', category: 'entertainment' },
    { id: '7', merchant: 'Starbucks', amount: -7.50, status: 'completed', date: '2024-07-20', category: 'groceries' },
    { id: '8', merchant: 'Salary Deposit', amount: 2750.00, status: 'completed', date: '2024-07-15', category: 'income' },
    { id: '9', merchant: 'Apple Store', amount: -999.00, status: 'pending', date: '2024-07-29', category: 'shopping' },
    { id: '10', merchant: 'Cheesecake Factory', amount: -110.15, status: 'completed', date: '2024-07-18', category: 'groceries' },
    { id: '11', merchant: 'Uber', amount: -25.70, status: 'completed', date: '2024-07-17', category: 'transportation' },
    { id: '12', merchant: 'Comcast', amount: -65.00, status: 'completed', date: '2024-07-15', category: 'utilities' },
];

export const categories = [
    { value: 'groceries', label: 'Groceries', icon: UtensilsCrossed },
    { value: 'utilities', label: 'Utilities', icon: HeartPulse },
    { value: 'rent', label: 'Rent', icon: Home },
    { value: 'transportation', label: 'Transportation', icon: Car },
    { value: 'shopping', label: 'Shopping', icon: ShoppingBag },
    { value: 'entertainment', label: 'Entertainment', icon: Clapperboard },
    { value: 'income', label: 'Income', icon: Receipt },
];

export const statuses = [
    { value: 'completed', label: 'Completed' },
    { value: 'pending', label: 'Pending' },
];
