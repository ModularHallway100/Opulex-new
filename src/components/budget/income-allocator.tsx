"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pencil, HandCoins } from 'lucide-react';
import IncomeEditorModal from './income-editor';

interface Category {
  id: string;
  name: string;
  allocated: number;
}

interface IncomeAllocatorProps {
  totalIncome: number;
  totalAllocated: number;
  remainingToAllocate: number;
  categories: Category[];
}

const IncomeAllocator = ({ totalIncome, totalAllocated, remainingToAllocate }: IncomeAllocatorProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <CardContent>
            <div className="w-full bg-muted rounded-full h-6 dark:bg-gray-700">
                <div 
                    className="bg-primary h-6 rounded-full text-center text-white text-sm flex items-center justify-center" 
                    style={{ width: `${(totalAllocated / totalIncome) * 100}%` }}
                >
                    ${totalAllocated.toLocaleString()} Allocated
                </div>
            </div>
             <p className="text-center mt-2 font-bold text-lg">
                ${remainingToAllocate.toLocaleString()} Remaining to Allocate
            </p>
        </CardContent>
      </Card>
      <IncomeEditorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default IncomeAllocator;
