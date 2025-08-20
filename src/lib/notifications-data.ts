export const todayAlerts = [
    { id: 'alert-1', name: 'Electric Bill', amount: 85.00, action: 'View Bill' },
    { id: 'alert-2', name: 'Netflix Renewal', amount: 15.99, action: 'Manage Subscription' },
];

export const upcomingAlerts = [
    { id: 'alert-3', name: 'Water Bill', amount: 45.00, dueIn: 3 },
    { id: 'alert-4', name: 'Internet Bill', amount: 60.00, dueIn: 5 },
];

export const spendingWarnings = [
    { id: 'warn-1', message: "You've spent 85% of your Grocery budget. Your next purchase may put you over." },
    { id: 'warn-2', message: "You've spent 95% of your Entertainment budget for June." },
];

export const aiAlerts = [
    { 
        id: 'ai-1', 
        type: 'warning',
        title: 'Potential Overdraft Warning',
        description: 'Based on upcoming bills ($2,500) and your balance ($2,300), you may face an overdraft on June 29.',
        action: 'Transfer Funds'
    },
    { 
        id: 'ai-2', 
        type: 'opportunity',
        title: 'Savings Opportunity',
        description: 'You have $500 in unallocated income. Would you like to deposit it into your Emergency Fund?',
        action: 'Deposit Now'
    },
];
