export const householdMembers = [
  {
    id: "user-1",
    name: "Alice",
    email: "alice@example.com",
    avatar: "https://placehold.co/100x100.png",
    role: "Master",
    lastActive: "2 hours ago",
  },
  {
    id: "user-2",
    name: "Bob",
    email: "bob@example.com",
    avatar: "https://placehold.co/100x100.png",
    role: "Contributor",
    lastActive: "1 day ago",
  },
];

export const sharedExpenses = [
  {
    id: "exp-1",
    name: "Groceries (Costco)",
    total: 240.5,
    yourShare: 120.25,
    yourPercentage: 50,
    status: "Paid",
    date: "June 5, 2025",
  },
  {
    id: "exp-2",
    name: "Internet Bill (Comcast)",
    total: 80.0,
    yourShare: 40.0,
    yourPercentage: 50,
    status: "Paid",
    date: "June 1, 2025",
  },
  {
    id: "exp-3",
    name: "Rent",
    total: 3000.0,
    yourShare: 1500.0,
    yourPercentage: 50,
    status: "Upcoming",
    date: "July 1, 2025",
  },
];

export const sharedGoals = [
    {
        id: 's-goal-1',
        name: 'Family Vacation',
        targetAmount: 5000,
        currentAmount: 2000,
        contributions: [
            { member: 'Alice', amount: 1200 },
            { member: 'Bob', amount: 800 },
        ]
    },
    {
        id: 's-goal-2',
        name: 'New Living Room Sofa',
        targetAmount: 1500,
        currentAmount: 750,
        contributions: [
            { member: 'Alice', amount: 375 },
            { member: 'Bob', amount: 375 },
        ]
    }
]
