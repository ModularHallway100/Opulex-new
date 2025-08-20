"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileOutput } from "lucide-react"
import SpendingBreakdownChart from "./spending-breakdown-chart"
import IncomeExpenseChart from "./income-expense-chart"

const MonthlyReport = () => {
  return (
    <Card className="bg-secondary/50 border-primary/20 mt-4">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl font-headline">Monthly Financial Report</CardTitle>
            <CardDescription>A summary of your financial activity for the selected period.</CardDescription>
          </div>
          <div className="flex items-center gap-4">
            <Select defaultValue="this-month">
              <SelectTrigger className="w-[220px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="this-month">This Month vs. Last Month</SelectItem>
                <SelectItem value="last-year">This Month vs. Same Month Last Year</SelectItem>
                <SelectItem value="custom">Custom Date Range</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <FileOutput className="mr-2" />
              Export to PDF/CSV
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SpendingBreakdownChart />
        <IncomeExpenseChart />
      </CardContent>
    </Card>
  )
}

export default MonthlyReport
