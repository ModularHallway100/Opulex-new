
import { ShoppingBag, UtensilsCrossed, Car, Home, HeartPulse, Receipt, Shirt, Clapperboard } from 'lucide-react';

export interface Transaction {
    id: string;
    merchant: string;
    amount: number;
    status: 'completed' | 'pending';
    date: string;
    category: 'groceries' | 'utilities' | 'rent' | 'transportation' | 'shopping' | 'entertainment' | 'income';
}

export const transactions: Transaction[] = [];

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
