"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { sharedGoals } from "@/lib/family-data";

const SharedGoals = () => {
  return (
    <Card className="bg-secondary/50 border-primary/20">
      <CardHeader>
        <div className="flex justify-between items-center">
            <div>
                <CardTitle className="text-xl font-headline">Shared Savings Goals</CardTitle>
                <CardDescription>Work together towards your common financial objectives.</CardDescription>
            </div>
            <Button variant="outline" size="sm">
                <PlusCircle className="mr-2" />
                New Goal
            </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {sharedGoals.map((goal) => {
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
    </Card>
  );
};

export default SharedGoals;
