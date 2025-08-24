
export const todayAlerts = [
    {
        id: '1',
        name: 'Netflix Subscription',
        amount: 15.99,
        action: 'Acknowledge'
    }
];

export const upcomingAlerts = [
     {
        id: '1',
        name: 'Capital One Credit Card',
        amount: 150.00,
        dueIn: 3,
        action: 'Pay Now'
    },
      {
        id: '2',
        name: 'AT&T Phone Bill',
        amount: 85.50,
        dueIn: 5,
        action: 'Pay Now'
    }
];

export const spendingWarnings = [
    {
        id: '1',
        message: 'You have spent 90% of your "Dining Out" budget for the month.'
    }
];

export const aiAlerts = [
    {
        id: '1',
        type: 'warning',
        title: 'High Spending in Shopping',
        description: 'Your spending on shopping is 30% higher than your average. Consider reallocating funds.',
        action: 'Reallocate'
    },
     {
        id: '2',
        type: 'opportunity',
        title: 'Investment Opportunity',
        description: 'A new high-yield savings account is available. You could be earning more on your emergency fund.',
        action: 'Explore'
    }
];
