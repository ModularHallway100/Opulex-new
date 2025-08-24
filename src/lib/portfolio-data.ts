
export const portfolioSummary = {
    totalValue: 125345.67,
    change: {
        amount: 1203.45,
        percent: 0.97
    },
    allocations: [
        { name: 'Stocks', value: 75200 },
        { name: 'Crypto', value: 25100 },
        { name: 'Bonds', value: 15045.67 },
        { name: 'Cash', value: 10000 }
    ]
}

export const portfolioHistory = [
  { date: "Jan", value: 110000 },
  { date: "Feb", value: 112000 },
  { date: "Mar", value: 115000 },
  { date: "Apr", value: 118000 },
  { date: "May", value: 122000 },
  { date: "Jun", value: 124142 },
  { date: "Jul", value: 125345 },
]

export const holdings = [
  { ticker: "AAPL", name: "Apple Inc.", type: "Stock", quantity: 50, value: 9650, changePercent: 1.2 },
  { ticker: "TSLA", name: "Tesla, Inc.", type: "Stock", quantity: 25, value: 6250, changePercent: -0.8 },
  { ticker: "BTC", name: "Bitcoin", type: "Crypto", quantity: 0.2, value: 12400, changePercent: 2.5 },
  { ticker: "ETH", name: "Ethereum", type: "Crypto", quantity: 2, value: 6800, changePercent: 3.1 },
  { ticker: "BND", name: "Vanguard Total Bond Market", type: "ETF", quantity: 100, value: 7500, changePercent: 0.1 },
];

export const aiAlerts = [
    { id: 1, severity: 'warning', message: 'Your portfolio has high exposure to the tech sector. Consider diversifying.' },
    { id: 2, severity: 'info', message: 'Based on market trends, ETH is showing strong upward momentum.' }
];
