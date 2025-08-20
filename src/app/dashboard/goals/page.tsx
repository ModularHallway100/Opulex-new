import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SavingsGoals from "@/components/goals/savings-goals";
import DebtManagement from "@/components/goals/debt-management";

export default function GoalsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline text-primary">Financial Goals</h1>
        <p className="text-muted-foreground">Plan your long-term savings and debt payoff strategies.</p>
      </div>
      
      <Tabs defaultValue="savings" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="savings">Savings Goals</TabsTrigger>
          <TabsTrigger value="debt">Debt Management</TabsTrigger>
        </TabsList>
        <TabsContent value="savings">
          <SavingsGoals />
        </TabsContent>
        <TabsContent value="debt">
          <DebtManagement />
        </TabsContent>
      </Tabs>
    </div>
  );
}
