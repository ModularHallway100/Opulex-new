
import { Award, ShieldCheck, Axe, TrendingUp } from "lucide-react";

export const achievements = [
    { id: 1, name: "Budget Baron", description: "Created your first budget.", unlocked: true, icon: <Award className="h-8 w-8 text-primary" /> },
    { id: 2, name: "Debt Slayer", description: "Paid off one of your debts completely.", unlocked: false, icon: <Axe className="h-8 w-8" /> },
    { id: 3, name: "Fortress Builder", description: "Fully funded your emergency savings goal.", unlocked: false, icon: <ShieldCheck className="h-8 w-8" /> },
    { id: 4, name: "Wealth Ascendant", description: "Reached a net worth of $100,000.", unlocked: true, icon: <TrendingUp className="h-8 w-8 text-primary" /> },
];

export const connectedAccounts = [
    {
        name: 'Chase Freedom Unlimited',
        logo: 'https://placehold.co/40x40.png',
        lastRefreshed: '2 minutes ago',
    },
    {
        name: 'Bank of America Savings',
        logo: 'https://placehold.co/40x40.png',
        lastRefreshed: '5 minutes ago',
    }
]
