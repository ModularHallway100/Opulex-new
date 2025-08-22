

"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PlusCircle, Target, AlertCircle, TrendingUp } from "lucide-react";
import { savingsGoals as initialGoals } from "@/lib/goals-data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from '../ui/input';
import { Label } from '../ui/label';


const getProgressBarColor = (progress: number) => {
  if (progress < 50) return "bg-destructive";
  if (progress < 80) return "bg-yellow-500";
  return "bg-green-500";
};


const SavingsGoals = () => {
    const [goals, setGoals] = useState(initialGoals);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    return (
        <>
        <Card className="bg-secondary/50 border-primary/20 mt-4">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="text-xl font-headline">Savings Goals</CardTitle>
                        <CardDescription>Track and manage your long-term savings objectives.</CardDescription>
                    </div>
                     <Button onClick={() => setIsCreateModalOpen(true)}>
                        <PlusCircle className="mr-2" />
                        New Savings Goal
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                
                {goals.length === 0 ? (
                     <p className="text-center text-muted-foreground py-10">No savings goals yet. Create one to get started!</p>
                ) : (
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
                )}
                 <div className="flex justify-end pt-4">
                    <Button variant="outline" disabled={goals.length === 0}>Rebalance Goals</Button>
                </div>
            </CardContent>
        </Card>
        <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
            <DialogContent className="sm:max-w-[425px] bg-secondary border-primary/20">
                <DialogHeader>
                    <DialogTitle className="font-headline text-primary">New Savings Goal</DialogTitle>
                    <DialogDescription>
                    Define your next financial objective.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="goal-name">Goal Name</Label>
                        <Input id="goal-name" placeholder="e.g., Emergency Fund"/>
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="goal-target">Target Amount</Label>
                        <Input id="goal-target" type="number" placeholder="10000" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="goal-date">Target Date</Label>
                        <Input id="goal-date" type="date" />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button type="submit" onClick={() => setIsCreateModalOpen(false)}>Create Goal</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
        </>
    )
}

export default SavingsGoals;
