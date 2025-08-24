
"use client"
import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowDown, ArrowUp } from "lucide-react"
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"
import { budgetData } from "@/lib/budget-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { chartConfig, ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

const expenseData = budgetData.categories
  .filter(cat => (cat.spent || 0) > 0)
  .map((cat, index) => ({
    name: cat.name,
    amount: cat.spent || 0,
    budget: cat.allocated,
    fill: `hsl(var(--chart-${index + 1}))`,
    change: Math.floor(Math.random() * 41) - 20, // Mock change +/- 20%
    lastMonth: Math.floor((cat.spent || 0) * (1 + (Math.random() * 0.4 - 0.2))), // Mock last month spending
  }));

const getProgressBarColor = (percent: number) => {
    if (percent > 90) return "bg-destructive";
    if (percent > 75) return "bg-yellow-500";
    return "bg-green-500";
};

const ExpenseBreakdown = () => {
    if (expenseData.length === 0) {
    return (
       <Card className="bg-background/40 border-primary/20 h-full">
         <CardHeader>
            <CardTitle className="text-xl font-headline">Expense Breakdown</CardTitle>
            <CardDescription>Your spending by category for the current month.</CardDescription>
         </CardHeader>
        <CardContent className="flex items-center justify-center h-full text-muted-foreground">
            <p>No expenses recorded this month.</p>
        </CardContent>
      </Card>
    )
  }

  const spendingChartConfig = expenseData.reduce((acc, item, index) => {
    acc[item.name.toLowerCase()] = {
      label: item.name,
      color: `hsl(var(--chart-${index + 1}))`,
    };
    return acc;
  }, {} as ChartConfig);


  return (
    <Card className="bg-background/40 border-primary/20 h-full">
      <CardHeader>
        <CardTitle className="text-xl font-headline">Expense Breakdown</CardTitle>
        <CardDescription>Your spending by category for the current month.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="list" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="chart">Chart View</TabsTrigger>
          </TabsList>
          <TabsContent value="list" className="mt-4">
            <ul className="space-y-4">
              {expenseData.map((item) => {
                const percentSpent = item.budget > 0 ? (item.amount / item.budget) * 100 : 0;
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
          </TabsContent>
          <TabsContent value="chart">
             <div className="h-[300px] w-full mt-4">
                <ChartContainer config={spendingChartConfig} className="min-h-[200px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                             <RechartsTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel nameKey="name" />}
                                />
                            <Pie
                                data={expenseData}
                                dataKey="amount"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                innerRadius={60}
                                labelLine={false}
                                strokeWidth={5}
                                stroke="hsl(var(--background))"
                            >
                                {expenseData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

export default ExpenseBreakdown
