
"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pencil, HandCoins, Gem } from 'lucide-react';
import IncomeEditorModal from './income-editor';

interface IncomeAllocatorProps {
  totalIncome: number;
  totalAllocated: number;
  remainingToAllocate: number;
}

const IncomeAllocator = ({ totalIncome, totalAllocated, remainingToAllocate }: IncomeAllocatorProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const allocationPercentage = totalIncome > 0 ? (totalAllocated / totalIncome) * 100 : 0;

  return (
    <>
      <Card className="bg-secondary/50 border-primary/20">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
                <HandCoins className="h-8 w-8 text-primary" />
            </div>
            <div>
              <CardTitle className="text-xl font-headline">Total Monthly Income</CardTitle>
              <CardDescription>Allocate every dollar to a category.</CardDescription>
            </div>
          </div>
          <div className="text-right">
             <div className="flex items-center gap-2">
                <h2 className="text-3xl font-bold">${totalIncome.toLocaleString()}</h2>
                <Button variant="ghost" size="icon" onClick={() => setIsModalOpen(true)}>
                    <Pencil className="h-5 w-5" />
                </Button>
             </div>
             <p className="text-sm text-muted-foreground">to be budgeted</p>
          </div>
        </CardHeader>
        <CardContent className="text-center">
            <div className="w-full bg-muted rounded-full h-8 dark:bg-black/50 relative overflow-hidden border-2 border-primary/30">
                <div 
                    className="bg-primary/80 h-full rounded-full transition-all duration-500 ease-in-out flex items-center justify-center text-primary-foreground font-bold text-sm" 
                    style={{ width: `${allocationPercentage}%` }}
                >
                   <span>${totalAllocated.toLocaleString()} Allocated</span>
                </div>
                 <div className="absolute inset-0 flex items-center justify-center">
                     {remainingToAllocate > 0 && (
                        <p className="font-bold text-lg flex items-center gap-2">
                            <Gem className="h-5 w-5 text-primary animate-pulse" />
                            <span>${remainingToAllocate.toLocaleString()} Remaining to Allocate</span>
                        </p>
                     )}
                      {remainingToAllocate === 0 && (
                        <p className="font-bold text-lg text-primary">
                            Every dollar has a job!
                        </p>
                     )}
                      {remainingToAllocate < 0 && (
                        <p className="font-bold text-lg text-destructive">
                            You've over-allocated by ${Math.abs(remainingToAllocate).toLocaleString()}!
                        </p>
                     )}
                </div>
            </div>
        </CardContent>
      </Card>
      <IncomeEditorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default IncomeAllocator;
