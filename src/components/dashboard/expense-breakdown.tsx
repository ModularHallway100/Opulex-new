"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowDown, ArrowUp } from "lucide-react"
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"

const expenseData = [
  { name: "Rent", amount: 1200, budget: 1200, change: 0, lastMonth: 1200 },
  { name: "Groceries", amount: 350, budget: 1000, change: 15, lastMonth: 300 },
  { name: "Transportation", amount: 80, budget: 500, change: -10, lastMonth: 90 },
  { name: "Entertainment", amount: 120, budget: 300, change: 20, lastMonth: 100 },
  { name: "Utilities", amount: 180, budget: 200, change: 5, lastMonth: 170 },
  { name: "Shopping", amount: 450, budget: 400, change: 25, lastMonth: 360 },
]

const getProgressBarColor = (percent: number) => {
    if (percent > 90) return "bg-destructive";
    if (percent > 75) return "bg-yellow-500";
    return "bg-green-500";
};


const ExpenseBreakdown = () => {
  return (
    <Card className="bg-background/40 border-primary/20 h-full">
      <CardHeader>
        <CardTitle className="text-xl font-headline">Expense Breakdown</CardTitle>
        <CardDescription>Your spending by category for the current month.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {expenseData.map((item) => {
            const percentSpent = (item.amount / item.budget) * 100;
            return (
                <li key={item.name} className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">{item.name}</span>
                    <div className="flex items-center gap-2">
                    <span className="font-mono">${item.amount.toLocaleString()}</span>
                    <TooltipProvider>
                        <Tooltip>
                        <TooltipTrigger asChild>
                            <div className={`flex items-center cursor-pointer ${item.change >= 0 ? 'text-red-500' : 'text-green-500'}`}>
                            {item.change >= 0 ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                            <span className="text-xs">{Math.abs(item.change)}%</span>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent className="bg-background border-primary/30">
                            <p>You spent ${item.lastMonth} on {item.name.toLowerCase()} last month.</p>
                            <p>This month: ${item.amount}.</p>
                        </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    </div>
                </div>
                <Progress value={percentSpent} className="h-2" indicatorClassName={getProgressBarColor(percentSpent)} />
                </li>
            )
          })}
        </ul>
      </CardContent>
    </Card>
  )
}

export default ExpenseBreakdown
