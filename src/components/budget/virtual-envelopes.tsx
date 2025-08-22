
"use client";

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Coins, AlertTriangle, Info } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  allocated: number;
  spent?: number;
  aiSuggestion?: number;
}

interface VirtualEnvelopesProps {
  categories: Category[];
}

const getEnvelopeColor = (allocated: number, spent: number) => {
    const remaining = allocated - spent;
    if (remaining < 0) return 'border-destructive bg-destructive/10';
    if (remaining < allocated * 0.15) return 'border-yellow-500 bg-yellow-900/20';
    return 'border-primary/20 bg-secondary/50';
}

const getAlert = (category: Category) => {
    const spent = category.spent || 0;
    const remaining = category.allocated - spent;
    if (remaining < 0) {
        return {
            type: 'overspent',
            message: `You've overspent by $${Math.abs(remaining).toFixed(2)}.`,
        };
    }
    if (remaining < category.allocated * 0.15 && remaining > 0) {
        return {
            type: 'low',
            message: `Only $${remaining.toFixed(2)} left. Consider replenishing.`,
        };
    }
    if (category.aiSuggestion && category.allocated < category.aiSuggestion) {
        return {
            type: 'info',
            message: `AI suggests allocating $${category.aiSuggestion} to this envelope for optimal results.`,
        };
    }
    return null;
}

const VirtualEnvelopes = ({ categories: initialCategories }: VirtualEnvelopesProps) => {

   if (initialCategories.length === 0) {
    return (
      <Card className="bg-secondary/50 border-primary/20 mt-4">
        <CardContent className="pt-6 text-center text-muted-foreground">
          <p>No envelopes created. Assign funds to categories to create virtual envelopes.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-secondary/50 border-primary/20">
      <CardHeader>
        <CardTitle className="text-xl font-headline">Virtual Envelopes</CardTitle>
        <CardDescription>Manage your budget with a visual envelope system.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initialCategories.map(category => {
                const spent = category.spent || 0;
                const remaining = category.allocated - spent;
                const alert = getAlert(category);
                return (
                    <Card key={category.id} className={`${getEnvelopeColor(category.allocated, spent)} shadow-lg`}>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="flex items-center gap-2 text-lg font-bold">
                                    <Coins className="h-5 w-5 text-primary" />
                                    {category.name}
                                </CardTitle>
                                <Button size="sm" variant="outline">Fund</Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-center">
                                <p className="text-3xl font-mono font-bold">
                                    ${remaining.toLocaleString()}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    Remaining of ${category.allocated.toLocaleString()}
                                </p>
                            </div>
                            {alert && (
                                <div className={`flex items-start gap-2 text-xs p-2 rounded-md mt-4 ${
                                    alert.type === 'overspent' ? 'text-destructive-foreground bg-destructive/40' : 
                                    alert.type === 'low' ? 'text-yellow-400 bg-yellow-900/30' : 'text-blue-400 bg-blue-900/30'
                                }`}>
                                    {alert.type === 'overspent' || alert.type === 'low' ? <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" /> : <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                                    <span>{alert.message}</span>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                )
            })}
        </div>
      </CardContent>
    </Card>
  );
};

export default VirtualEnvelopes;
