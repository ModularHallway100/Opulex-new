
import IncomeAllocator from '@/components/budget/income-allocator';
import CategoryManager from '@/components/budget/category-manager';
import FinancialHealth from '@/components/budget/financial-health';
import { Button } from '@/components/ui/button';
import { budgetData } from '@/lib/budget-data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import VirtualEnvelopes from '@/components/budget/virtual-envelopes';

export default function BudgetPage() {
  const totalIncome = budgetData.income.sources.reduce((sum, source) => sum + source.amount, 0);
  const totalAllocated = budgetData.categories.reduce((sum, category) => sum + category.allocated, 0);
  const remainingToAllocate = totalIncome - totalAllocated;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline text-primary">Plan Your Money</h1>
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
        <Button size="lg" disabled={remainingToAllocate !== 0}>
          Save Budget Plan
        </Button>
      </div>
    </div>
  );
}
