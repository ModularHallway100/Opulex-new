"use client"

import * as React from "react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, Info } from "lucide-react"
import {
  Tooltip as UiTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const budgetData = [
  { name: "Rent", budgeted: 2000, actual: 2000 },
  { name: "Groceries", budgeted: 500, actual: 350 },
  { name: "Utilities", budgeted: 150, actual: 180 },
  { name: "Dining", budgeted: 200, actual: 175 },
  { name: "Transport", budgeted: 100, actual: 80 },
  { name: "Shopping", budgeted: 300, actual: 450 },
  { name: "Entertainment", budgeted: 150, actual: 120 },
]

const totalBudget = budgetData.reduce((sum, item) => sum + item.budgeted, 0)
const totalActual = budgetData.reduce((sum, item) => sum + item.actual, 0)
const remainingBudget = totalBudget - totalActual
const percentSpent = (totalActual / totalBudget) * 100

const getProgressBarColor = () => {
  if (percentSpent > 90) return "bg-destructive";
  if (percentSpent > 75) return "bg-yellow-500";
  return "bg-green-500";
};

const BudgetSummary = () => {
  return (
    <Card className="bg-secondary/50 border-primary/20">
      <CardHeader>
        <div className="flex justify-between items-start">
            <div>
                <CardTitle className="text-xl font-headline">Budget Summary</CardTitle>
                <CardDescription>Your current month's financial overview.</CardDescription>
            </div>
             <div className="flex items-center gap-4">
                <div className="text-right">
                    <p className="text-sm text-muted-foreground">Remaining Budget</p>
                    <p className="text-2xl font-bold text-primary">${remainingBudget.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">of ${totalBudget.toLocaleString()}</p>
                </div>
                <div className="w-48">
                    <Progress value={percentSpent} className={getProgressBarColor()} />
                </div>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={budgetData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
              <Tooltip
                cursor={{ fill: 'hsl(var(--accent)/0.5)' }}
                contentStyle={{ 
                    backgroundColor: 'hsl(var(--background))', 
                    borderColor: 'hsl(var(--border))',
                    borderRadius: 'var(--radius)',
                }}
              />
              <Bar dataKey="budgeted" fill="hsl(var(--muted))" name="Budgeted" radius={[4, 4, 0, 0]} />
              <Bar dataKey="actual" fill="hsl(var(--primary))" name="Actual Spending" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-xs">
            {budgetData.map(item => {
                const spendingRatio = item.actual / item.budgeted;
                if (spendingRatio > 0.85) {
                    return (
                        <TooltipProvider key={item.name}>
                            <UiTooltip>
                                <TooltipTrigger asChild>
                                    <div className="flex items-center gap-1 text-yellow-500 cursor-pointer">
                                        <AlertTriangle className="h-4 w-4" />
                                        <span>{item.name}</span>
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent className="bg-background border-primary/30">
                                    <p>You've spent {(spendingRatio * 100).toFixed(0)}% of your {item.name.toLowerCase()} budget.</p>
                                    <p>Consider adjusting your spending.</p>
                                </TooltipContent>
                            </UiTooltip>
                        </TooltipProvider>
                    )
                }
                return null;
            })}
        </div>
      </CardContent>
    </Card>
  )
}

export default BudgetSummary
