
"use client"

import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { AlertCircle, LineChart, Banknote } from "lucide-react"
import { debts, totalDebt } from "@/lib/goals-data"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type PayoffStrategy = 'snowball' | 'avalanche';

const DebtManagement = () => {
  const [strategy, setStrategy] = useState<PayoffStrategy>('avalanche');

  const sortedDebts = useMemo(() => {
    const debtsCopy = [...debts];
    if (strategy === 'snowball') {
      return debtsCopy.sort((a, b) => a.balance - b.balance);
    } else { // avalanche
      return debtsCopy.sort((a, b) => b.interestRate - a.interestRate);
    }
  }, [strategy]);

  return (
    <Card className="bg-secondary/50 border-primary/20 mt-4">
      <CardHeader>
        <div className="flex justify-between items-start">
            <div>
                <CardTitle className="text-xl font-headline">Debt Payoff Planner</CardTitle>
                <CardDescription>Strategize how to tackle your outstanding debts.</CardDescription>
            </div>
            <div className="text-right">
                <p className="text-muted-foreground text-sm">Total Debt</p>
                <p className="text-2xl font-bold text-destructive">${totalDebt.toLocaleString()}</p>
            </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-center space-x-4 p-4 bg-background/50 rounded-lg">
          <Label htmlFor="strategy-switch" className={strategy === 'avalanche' ? 'text-primary' : ''}>Avalanche (High Interest)</Label>
          <Switch 
            id="strategy-switch"
            checked={strategy === 'snowball'}
            onCheckedChange={(checked) => setStrategy(checked ? 'snowball' : 'avalanche')}
          />
          <Label htmlFor="strategy-switch" className={strategy === 'snowball' ? 'text-primary' : ''}>Snowball (Low Balance)</Label>
        </div>

        <div className="p-3 bg-blue-900/40 border border-blue-500/50 rounded-lg text-sm flex items-center gap-2">
            <LineChart className="h-5 w-5 text-blue-400" />
            <p>
                <span className="font-bold">Timeline Estimate:</span> Using the <span className="font-semibold">{strategy}</span> method, you could be debt-free by 
                {strategy === 'avalanche' ? ' January 2026.' : ' March 2026.'}
            </p>
        </div>

        <div className="space-y-4">
            {sortedDebts.map(debt => (
                <Card key={debt.id} className="bg-background/40">
                    <CardHeader className="p-4 flex-row justify-between items-center">
                         <div className="flex items-center gap-3">
                            <div className="p-2 bg-destructive/10 rounded-md">
                                <Banknote className="text-destructive h-6 w-6" />
                            </div>
                            <div>
                                <CardTitle className="text-lg font-bold">{debt.creditor}</CardTitle>
                                <CardDescription className="text-xs">{debt.type}</CardDescription>
                            </div>
                        </div>
                         <p className="text-lg font-mono font-bold">${debt.balance.toLocaleString()}</p>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                            <p className="text-muted-foreground text-xs">Interest Rate</p>
                            <p className="font-semibold">{debt.interestRate}% APR</p>
                        </div>
                         <div>
                            <p className="text-muted-foreground text-xs">Minimum Payment</p>
                            <p className="font-semibold">${debt.minPayment}/month</p>
                        </div>
                         <div>
                            <p className="text-muted-foreground text-xs">Due Date</p>
                            <p className="font-semibold">{debt.dueDate}</p>
                        </div>
                         <div className="flex justify-end items-center">
                            <Button size="sm">Make a Payment</Button>
                         </div>
                    </CardContent>
                </Card>
            ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default DebtManagement
