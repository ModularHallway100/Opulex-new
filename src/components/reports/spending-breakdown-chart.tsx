
"use client"

import * as React from "react"
import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { spendingBreakdownData } from "@/lib/reports-data"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  rent: { label: "Rent", color: "hsl(var(--chart-1))" },
  groceries: { label: "Groceries", color: "hsl(var(--chart-2))" },
  utilities: { label: "Utilities", color: "hsl(var(--chart-3))" },
  dining: { label: "Dining", color: "hsl(var(--chart-4))" },
  transport: { label: "Transport", color: "hsl(var(--chart-5))" },
  shopping: { label: "Shopping", color: "hsl(var(--chart-1))" },
  entertainment: { label: "Entertainment", color: "hsl(var(--chart-2))" },
} satisfies ChartConfig

const SpendingBreakdownChart = () => {
  const totalValue = React.useMemo(() => {
    return spendingBreakdownData.reduce((acc, curr) => acc + curr.value, 0)
  }, [])

  return (
    <Card className="bg-background/40">
      <CardHeader>
        <CardTitle className="text-lg font-headline">Spending Breakdown</CardTitle>
        <CardDescription>How your money was spent this month.</CardDescription>
      </CardHeader>
      <CardContent>
         <div className="h-[300px] w-full">
            <ChartContainer config={chartConfig}>
              <PieChart>
                <Tooltip
                  cursor={false}
                  content={<ChartTooltipContent 
                    hideLabel
                    contentStyle={{ 
                        backgroundColor: 'hsl(var(--background))', 
                        borderColor: 'hsl(var(--border))',
                    }}
                    />}
                />
                <Pie
                  data={spendingBreakdownData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  strokeWidth={5}
                  stroke="hsl(var(--background))"
                >
                    {spendingBreakdownData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                </Pie>
              </PieChart>
            </ChartContainer>
         </div>
         <div className="mt-4 text-center text-sm">
            Total Spent: <span className="font-bold">${totalValue.toLocaleString()}</span>
         </div>
      </CardContent>
    </Card>
  )
}

export default SpendingBreakdownChart;
