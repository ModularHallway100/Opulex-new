
"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PlusCircle, Target, AlertCircle, TrendingUp } from "lucide-react";
import { savingsGoals } from "@/lib/goals-data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const getProgressBarColor = (progress: number) => {
  if (progress < 50) return "bg-destructive";
  if (progress < 80) return "bg-yellow-500";
  return "bg-green-500";
};


const SavingsGoals = () => {
    const [goals, setGoals] = useState(savingsGoals);

    // Modal state would be managed here, e.g., const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Card className="bg-secondary/50 border-primary/20 mt-4">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="text-xl font-headline">Savings Goals</CardTitle>
                        <CardDescription>Track and manage your long-term savings objectives.</CardDescription>
                    </div>
                     <Button>
                        <PlusCircle className="mr-2" />
                        New Savings Goal
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                
                <div className="p-3 bg-blue-900/40 border border-blue-500/50 rounded-lg text-sm flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-400" />
                    <p>
                        <span className="font-bold">AI Suggestion:</span> You have an extra $250 in unallocated funds this month. Consider allocating it to your 'Emergency Fund' to reach your goal 3 months sooner.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {goals.map(goal => {
                        const progress = (goal.currentAmount / goal.targetAmount) * 100;
                        return (
                            <Card key={goal.id} className="bg-background/40 flex flex-col">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-primary/10 rounded-md">
                                                <Target className="text-primary h-6 w-6" />
                                            </div>
                                            <CardTitle className="text-lg font-bold">{goal.name}</CardTitle>
                                        </div>
                                         <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <AlertCircle className="h-5 w-5 text-yellow-500" />
                                                </TooltipTrigger>
                                                <TooltipContent className="bg-background border-primary/30">
                                                    <p>On current pace, you'll reach this goal by {goal.projectedDate}.</p>
                                                    <p>You're slightly behind schedule.</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                    <CardDescription className="text-xs mt-2 bg-black/30 p-2 rounded-md border border-white/10 text-center font-mono tracking-widest">
                                        TARGET: ${goal.targetAmount.toLocaleString()} by {goal.targetDate}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col justify-end">
                                    <div className="space-y-2">
                                        <Progress value={progress} className="h-3" indicatorClassName={getProgressBarColor(progress)} />
                                        <div className="text-xs flex justify-between">
                                            <span className="text-muted-foreground">Progress</span>
                                            <span className="font-semibold">${goal.currentAmount.toLocaleString()} / ${goal.targetAmount.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
                 <div className="flex justify-end pt-4">
                    <Button variant="outline">Rebalance Goals</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default SavingsGoals;
