import AssetOverview from "@/components/portfolio/asset-overview";
import PortfolioPerformanceChart from "@/components/portfolio/portfolio-performance-chart";
import HoldingsTable from "@/components/portfolio/holdings-table";
import AiRiskAlerts from "@/components/portfolio/ai-risk-alerts";

export default function PortfolioPage() {
  return (
    <div className="space-y-8">
       <div>
        <h1 className="text-3xl font-headline text-primary">Investment Portfolio</h1>
        <p className="text-muted-foreground">Track your assets and monitor market performance.</p>
      </div>

      <AssetOverview />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <PortfolioPerformanceChart />
        </div>
        <div className="space-y-8">
            <AiRiskAlerts />
        </div>
      </div>

      <HoldingsTable />
    </div>
  );
}
