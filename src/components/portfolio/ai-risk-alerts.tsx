"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { aiAlerts } from "@/lib/portfolio-data"
import { AlertTriangle, Info } from "lucide-react"
import { Button } from "../ui/button"

const AiRiskAlerts = () => {
    return (
        <Card className="bg-secondary/50 border-primary/20 h-full">
            <CardHeader>
                <CardTitle className="text-xl font-headline">AI Portfolio Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {aiAlerts.map(alert => (
                    <div key={alert.id} className={`p-4 rounded-lg border ${alert.severity === 'warning' ? 'bg-yellow-900/30 border-yellow-500/50' : 'bg-blue-900/30 border-blue-500/50'}`}>
                        <div className="flex items-start gap-3">
                            {alert.severity === 'warning' ? <AlertTriangle className="h-5 w-5 text-yellow-500 mt-1" /> : <Info className="h-5 w-5 text-blue-400 mt-1" />}
                            <div>
                                <p className="font-semibold text-sm">{alert.message}</p>
                                {alert.severity === 'warning' && <Button variant="link" className="p-0 h-auto text-xs mt-2">Rebalance Portfolio</Button>}
                            </div>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}

export default AiRiskAlerts
