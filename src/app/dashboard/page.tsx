import BudgetSummary from '@/components/dashboard/budget-summary';
import ExpenseBreakdown from '@/components/dashboard/expense-breakdown';
import UpcomingBills from '@/components/dashboard/upcoming-bills';
import QuickActions from '@/components/dashboard/quick-actions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Notification Banner - shown when budget is low */}
      <div className="p-4 bg-red-900/50 border border-destructive rounded-lg text-destructive-foreground">
        <p>
          <span className="font-bold">Attention:</span> You’re closing in on your total budget for this month.
        </p>
      </div>

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
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between"><span>Chase Sapphire Card</span> <span className="font-mono">...1234</span></li>
            <li className="flex justify-between"><span>Citi Double Cash</span> <span className="font-mono">...5678</span></li>
            <li className="flex justify-between"><span>Coinbase Account</span> <span className="font-mono">...f4aE</span></li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
