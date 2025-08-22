
import BudgetSummary from '@/components/dashboard/budget-summary';
import ExpenseBreakdown from '@/components/dashboard/expense-breakdown';
import UpcomingBills from '@/components/dashboard/upcoming-bills';
import QuickActions from '@/components/dashboard/quick-actions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DashboardPage() {
  const isBudgetLow = false; // Replace with real logic

  return (
    <div className="space-y-8">
      {isBudgetLow && (
        <div className="p-4 bg-red-900/50 border border-destructive rounded-lg text-destructive-foreground">
          <p>
            <span className="font-bold">Attention:</span> You’re closing in on your total budget for this month.
          </p>
        </div>
      )}

      <BudgetSummary />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ExpenseBreakdown />
        </div>
        <div className="space-y-8">
          <UpcomingBills />
        </div>
      </div>
      
      <QuickActions />

       <Card className="bg-background/40 border-primary/20 hover:border-primary/40 transition-all">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl font-headline">View All Accounts</CardTitle>
          <Button asChild variant="outline" size="sm">
            <Link href="/dashboard/accounts">Manage Accounts</Link>
          </Button>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Link your financial accounts to see them here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
