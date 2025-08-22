import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MonthlyReport from "@/components/reports/monthly-report";
import NetWorthTracker from "@/components/reports/net-worth-tracker";
import AiInsights from "@/components/reports/ai-insights";
import CreditScoreReport from "@/components/reports/credit-score-report";

export default function ReportsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline text-primary">The Oracle Room</h1>
        <p className="text-muted-foreground">Consult the oracle for deep insights into your financial empire.</p>
      </div>

      <AiInsights />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <CreditScoreReport />
        </div>
        <div className="lg:col-span-2">
          <Tabs defaultValue="monthly" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="monthly">Monthly Report</TabsTrigger>
              <TabsTrigger value="net-worth">Net Worth</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly">
              <MonthlyReport />
            </TabsContent>
            <TabsContent value="net-worth">
              <NetWorthTracker />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
