
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Info, TrendingUp, TrendingDown, Bell, Bot } from "lucide-react"
import { insights, forecasts } from "@/lib/reports-data"


const AiInsights = () => {

    if (insights.length === 0 && forecasts.length === 0) {
        return (
             <Card className="bg-card border-primary/20">
                <CardHeader>
                    <CardTitle className="text-xl font-headline">AI Insights & Royal Decrees</CardTitle>
                    <CardDescription>Personalized analysis to help you make smarter financial decisions.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-center py-10 text-muted-foreground">
                        <Bot className="h-12 w-12 mx-auto mb-4 text-primary/50" />
                        <p className="font-semibold">The Oracle is Observing</p>
                        <p className="text-sm">As you use the app, AI-powered insights and forecasts will appear here.</p>
                    </div>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="bg-card border-primary/20">
            <CardHeader>
                <CardTitle className="text-xl font-headline">AI Insights & Royal Decrees</CardTitle>
                <CardDescription>Personalized analysis to help you make smarter financial decisions.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {insights.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {insights.map((insight, index) => (
                        <Card key={index} className="bg-background/50">
                            <CardHeader className="flex-row items-center gap-4 space-y-0">
                                {insight.icon}
                                <CardTitle className="text-base font-semibold">{insight.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{insight.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                )}

                {forecasts.length > 0 && (
                 <div className="space-y-4">
                     <h3 className="text-lg font-semibold text-center text-primary">Predictive Forecasts</h3>
                    {forecasts.map((forecast, index) => (
                        <Card key={index} className="bg-background/50 border-primary/20">
                            <CardContent className="p-4 flex items-center justify-between">
                                <div>
                                    <p className="font-semibold">{forecast.title}</p>
                                    <p className="text-sm text-muted-foreground">{forecast.description}</p>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm">Acknowledge</Button>
                                    <Button size="sm">
                                        <Bell className="mr-2 h-4 w-4" />
                                        Set Reminder
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                 </div>
                 )}

            </CardContent>
        </Card>
    )
}

export default AiInsights;
