
"use client";

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { sharedGoals } from "@/lib/family-data";
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

const SharedGoals = () => {
    const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);

  return (
    <Card className="bg-secondary/50 border-primary/20">
      <CardHeader>
        <div className="flex justify-between items-center">
            <div>
                <CardTitle className="text-xl font-headline">Shared Savings Goals</CardTitle>
                <CardDescription>Work together towards your common financial objectives.</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => setIsCreateModalOpen(true)}>
                <PlusCircle className="mr-2" />
                New Goal
            </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {sharedGoals.length === 0 ? (
            <p className='text-center text-muted-foreground pt-4'>No shared goals yet. Create one to get started.</p>
        ) : sharedGoals.map((goal) => {
          const progress = (goal.currentAmount / goal.targetAmount) * 100;
          return (
            <div key={goal.id} className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-semibold">{goal.name}</h4>
                    <p className="text-sm font-mono">${goal.currentAmount.toLocaleString()} / ${goal.targetAmount.toLocaleString()}</p>
                </div>
                <Progress value={progress} />
              </div>
              <div className="text-xs text-muted-foreground space-y-1">
                {goal.contributions.map(c => (
                    <div key={c.member} className="flex justify-between">
                        <span>{c.member}'s Contribution:</span>
                        <span className="font-mono">${c.amount.toLocaleString()}</span>
                    </div>
                ))}
              </div>
            </div>
          );
        })}
      </CardContent>
       <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
        <DialogContent className="sm:max-w-[425px] bg-secondary border-primary/20">
          <DialogHeader>
            <DialogTitle className="font-headline text-primary">Create New Shared Goal</DialogTitle>
            <DialogDescription>
              Define a new financial objective for your Inner Circle.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="goal-name">Goal Name</Label>
              <Input id="goal-name" placeholder="e.g., Family Vacation" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="goal-amount">Target Amount</Label>
              <Input id="goal-amount" type="number" placeholder="5000" />
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
    </Card>
  );
};

export default SharedGoals;
