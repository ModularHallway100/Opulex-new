"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertCircle, Mail } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { spendingWarnings } from "@/lib/notifications-data";

const SpendingWarnings = () => {
  return (
    <Card className="bg-secondary/50 border-primary/20">
      <CardHeader>
        <CardTitle className="text-xl font-headline">Spending Warnings</CardTitle>
        <CardDescription>Real-time alerts and weekly summaries to keep you on track.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
            {spendingWarnings.map((warning) => (
                <div key={warning.id} className="flex items-center gap-3 p-3 bg-yellow-900/30 border border-yellow-500/50 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-yellow-500" />
                    <p className="text-sm">{warning.message}</p>
                </div>
            ))}
        </div>

        <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
          <div className="flex items-center gap-3">
            <Mail className="h-6 w-6 text-primary" />
            <div>
              <Label htmlFor="weekly-summary" className="font-semibold">
                Weekly Email Summary
              </Label>
              <p className="text-xs text-muted-foreground">Receive a digest of your spending every Sunday.</p>
            </div>
          </div>
          <Switch id="weekly-summary" defaultChecked />
        </div>
      </CardContent>
    </Card>
  );
};

export default SpendingWarnings;
