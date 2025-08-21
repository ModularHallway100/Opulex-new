"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Info, TrendingUp, TrendingDown, Bell } from "lucide-react"

const insights = [
    {
        icon: <TrendingDown className="text-red-500" />,
        title: "Dining Expenses Up 20%",
        description: "Your dining expenses increased by 20% in May compared to April. Consider reducing take-out visits to stay on budget.",
    },
    {
        icon: <TrendingUp className="text-green-500" />,
        title: "Savings Boost!",
        description: "Great job! You saved $100 more than last month. Keep the momentum going!",
    },
    {
        icon: <Info className="text-yellow-500" />,
        title: "Utility Usage High",
        description: "Your utilities were 15% higher than the same month last year. An energy audit could help identify savings.",
    }
]

const forecasts = [
    {
        title: "Budget Alert: Dining",
        description: "If you continue spending at the current rate, you will exceed your June dining budget by $50.",
    },
    {
        title: "Unallocated Funds",
        description: "You have $500 in unallocated income. Consider boosting your Emergency Fund to reach your goal faster.",
    }
]


const AiInsights = () => {
    return (
        <Card className="bg-secondary/50 border-primary/20">
            <CardHeader>
                <CardTitle className="text-xl font-headline">AI Insights & Royal Decrees</CardTitle>
                <CardDescription>Personalized analysis to help you make smarter financial decisions.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
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

            </CardContent>
        </Card>
    )
}

export default AiInsights;
