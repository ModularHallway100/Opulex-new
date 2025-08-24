
export const householdMembers = [
    {
        id: '1',
        name: 'Alex Sterling',
        email: 'alex.s@opulex.co',
        avatar: 'https://placehold.co/100x100.png',
        role: 'Master',
        lastActive: 'Online'
    },
    {
        id: '2',
        name: 'Jordan Sterling',
        email: 'jordan.s@opulex.co',
        avatar: 'https://placehold.co/100x100.png',
        role: 'Contributor',
        lastActive: '2 hours ago'
    }
];

export const sharedExpenses = [
    {
        id: '1',
        name: 'Groceries (Costco Run)',
        date: 'July 15, 2024',
        total: 345.67,
        yourShare: 172.84,
        yourPercentage: 50,
        status: 'Paid'
    },
    {
        id: '2',
        name: 'Internet Bill',
        date: 'July 20, 2024',
        total: 89.99,
        yourShare: 45.00,
        yourPercentage: 50,
        status: 'Paid'
    },
    {
        id: '3',
        name: 'Weekend Getaway Hotel',
        date: 'July 22, 2024',
        total: 550.00,
        yourShare: 275.00,
        yourPercentage: 50,
        status: 'Pending'
    },
];

export const sharedGoals = [
    {
        id: '1',
        name: 'Family Vacation to Hawaii',
        targetAmount: 8000,
        currentAmount: 4500,
        contributions: [
            { member: 'Alex', amount: 2500 },
            { member: 'Jordan', amount: 2000 }
        ]
    },
    {
        id: '2',
        name: 'New Kitchen Appliances',
        targetAmount: 3500,
        currentAmount: 1200,
        contributions: [
            { member: 'Alex', amount: 600 },
            { member: 'Jordan', amount: 600 }
        ]
    }
];
