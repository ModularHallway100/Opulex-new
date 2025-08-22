
"use client"
import * as React from 'react';
import IncomeAllocator from '@/components/budget/income-allocator';
import CategoryManager from '@/components/budget/category-manager';
import FinancialHealth from '@/components/budget/financial-health';
import { Button } from '@/components/ui/button';
import { budgetData as initialData } from '@/lib/budget-data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import VirtualEnvelopes from '@/components/budget/virtual-envelopes';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import IncomeEditorModal from '@/components/budget/income-editor';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


export default function BudgetPage() {
  const [budgetData, setBudgetData] = React.useState(initialData);
  const [isIncomeModalOpen, setIsIncomeModalOpen] = React.useState(false);

  const totalIncome = budgetData.income.sources.reduce((sum, source: any) => sum + source.amount, 0);
  const totalAllocated = budgetData.categories.reduce((sum, category: any) => sum + category.allocated, 0);
  const remainingToAllocate = totalIncome - totalAllocated;

  if (budgetData.categories.length === 0 && totalIncome === 0) {
    return (
       <div className="space-y-8">
        <div>
            <h1 className="text-3xl font-headline text-primary">The Treasury Room</h1>
            <p className="text-muted-foreground">Set up your budget for the month using your preferred method.</p>
        </div>
        <Card className="bg-secondary/50 border-primary/20 text-center py-12">
            <CardContent>
                <p className="text-lg font-semibold mb-2">Your Treasury is Empty</p>
                <p className="text-muted-foreground mb-6">Start by linking a financial account or manually adding your income sources.</p>
                <div className="flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/dashboard/accounts">Link Account</Link>
                    </Button>
                    <Button variant="outline" onClick={() => setIsIncomeModalOpen(true)}>Add Income Manually</Button>
                </div>
            </CardContent>
        </Card>
        <IncomeEditorModal isOpen={isIncomeModalOpen} onClose={() => setIsIncomeModalOpen(false)} />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline text-primary">The Treasury Room</h1>
        <p className="text-muted-foreground">Set up your budget for the month using your preferred method.</p>
      </div>

      <IncomeAllocator 
        totalIncome={totalIncome} 
        totalAllocated={totalAllocated}
        remainingToAllocate={remainingToAllocate}
      />
      
       <Tabs defaultValue="zero-based" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="zero-based">Zero-Based Budget</TabsTrigger>
          <TabsTrigger value="envelopes">Virtual Envelopes</TabsTrigger>
        </TabsList>
        <TabsContent value="zero-based">
            <CategoryManager categories={budgetData.categories} totalIncome={totalIncome} />
        </TabsContent>
        <TabsContent value="envelopes">
            <VirtualEnvelopes categories={budgetData.categories} />
        </TabsContent>
      </Tabs>


      <FinancialHealth />

      <div className="flex justify-end pt-4">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button size="lg" disabled={remainingToAllocate !== 0}>
              Save Budget Plan
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-secondary border-primary/20">
            <AlertDialogHeader>
              <AlertDialogTitle>Budget Saved!</AlertDialogTitle>
              <AlertDialogDescription>
                Your budget plan has been successfully saved.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>OK</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

