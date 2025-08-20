import IncomeAllocator from '@/components/budget/income-allocator';
import CategoryManager from '@/components/budget/category-manager';
import FinancialHealth from '@/components/budget/financial-health';
import { Button } from '@/components/ui/button';
import { budgetData } from '@/lib/budget-data';

export default function BudgetPage() {
  const totalIncome = budgetData.income.sources.reduce((sum, source) => sum + source.amount, 0);
  const totalAllocated = budgetData.categories.reduce((sum, category) => sum + category.allocated, 0);
  const remainingToAllocate = totalIncome - totalAllocated;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline text-primary">Plan Your Money</h1>
        <p className="text-muted-foreground">Set up your zero-based budget for the month.</p>
      </div>

      <IncomeAllocator 
        totalIncome={totalIncome} 
        totalAllocated={totalAllocated}
        remainingToAllocate={remainingToAllocate}
        categories={budgetData.categories} 
      />
      
      <CategoryManager categories={budgetData.categories} />

      <FinancialHealth />

      <div className="flex justify-end pt-4">
        <Button size="lg" disabled={remainingToAllocate > 0}>
          Save Budget Plan
        </Button>
      </div>
    </div>
  );
}
