
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import { portfolioSummary } from "@/lib/portfolio-data"

const AssetOverview = () => {
    return (
        <Card className="bg-card border-primary/20">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-xl font-headline">Portfolio Value</CardTitle>
                        <CardDescription>Your total investment holdings.</CardDescription>
                    </div>
                     <div className="text-right">
                        <p className="text-3xl font-bold text-primary">${portfolioSummary.totalValue.toLocaleString()}</p>
                        <div className="flex items-center justify-end gap-2 text-sm text-green-500">
                            <TrendingUp className="h-4 w-4" />
                           +${portfolioSummary.change.amount.toLocaleString()} ({portfolioSummary.change.percent}%) Today
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {portfolioSummary.allocations.map(asset => (
                        <div key={asset.name} className="p-4 bg-background/50 rounded-lg text-center">
                            <p className="text-sm text-muted-foreground">{asset.name}</p>
                            <p className="text-xl font-bold">${asset.value.toLocaleString()}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default AssetOverview;
