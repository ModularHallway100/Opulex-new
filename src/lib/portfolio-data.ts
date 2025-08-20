export const portfolioSummary = {
    totalValue: 125300,
    change: {
        amount: 1200,
        percent: 0.96
    },
    allocations: [
        { name: 'Stocks', value: 75000, color: 'hsl(var(--chart-1))' },
        { name: 'ETFs', value: 30000, color: 'hsl(var(--chart-2))' },
        { name: 'Crypto', value: 15000, color: 'hsl(var(--chart-3))' },
        { name: 'Cash', value: 5300, color: 'hsl(var(--chart-4))' },
    ]
}

export const portfolioHistory = [
    { date: 'Jan 24', value: 110000 },
    { date: 'Feb 24', value: 115000 },
    { date: 'Mar 24', value: 120000 },
    { date: 'Apr 24', value: 118000 },
    { date: 'May 24', value: 124100 },
    { date: 'Jun 24', value: 125300 },
]

export const holdings = [
    { ticker: 'AAPL', name: 'Apple Inc.', value: 25000, changePercent: 1.2, quantity: 120, type: 'Stock' },
    { ticker: 'VOO', name: 'Vanguard S&P 500 ETF', value: 20000, changePercent: 0.8, quantity: 40, type: 'ETF' },
    { ticker: 'BTC', name: 'Bitcoin', value: 10000, changePercent: -2.5, quantity: 0.15, type: 'Crypto' },
    { ticker: 'TSLA', name: 'Tesla, Inc.', value: 15000, changePercent: 3.1, quantity: 80, type: 'Stock' },
    { ticker: 'ETH', name: 'Ethereum', value: 5000, changePercent: 0.5, quantity: 1.5, type: 'Crypto' },
]

export const aiAlerts = [
    { id: 1, severity: 'warning', message: 'Your portfolio is 80% concentrated in the tech sector. Consider diversifying into other industries to reduce risk.' },
    { id: 2, severity: 'info', message: 'Your 401(k) contributions have increased by $200 compared to last year. Keep up the great work!' },
]
