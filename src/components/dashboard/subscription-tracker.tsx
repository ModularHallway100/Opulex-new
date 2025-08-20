"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'
import Image from "next/image"

const subscriptions = [
  { name: "Netflix", logo: "https://placehold.co/32x32.png", frequency: "Monthly", next_renewal: "June 15", cost: 15, underused: true },
  { name: "Spotify", logo: "https://placehold.co/32x32.png", frequency: "Monthly", next_renewal: "June 20", cost: 10, underused: false },
  { name: "Adobe CC", logo: "https://placehold.co/32x32.png", frequency: "Yearly", next_renewal: "Aug 01", cost: 599, underused: false },
]

const historyData = [
    { month: 'Jan', spend: 25 },
    { month: 'Feb', spend: 25 },
    { month: 'Mar', spend: 25 },
    { month: 'Apr', spend: 35 },
    { month: 'May', spend: 25 },
    { month: 'Jun', spend: 25 },
]

const SubscriptionTracker = () => {
  return (
    <Card className="bg-secondary/50 border-primary/20">
      <CardHeader>
        <CardTitle className="text-xl font-headline">Subscriptions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {subscriptions.map((sub) => (
          <div key={sub.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src={sub.logo} alt={`${sub.name} logo`} width={32} height={32} className="rounded-md" data-ai-hint="logo" />
              <div>
                <p className="font-semibold">{sub.name}</p>
                <p className="text-xs text-muted-foreground">Renews: {sub.next_renewal}</p>
              </div>
            </div>
            <p className="font-mono text-sm">${sub.cost}</p>
             {sub.underused && <Badge variant="destructive" className="text-xs">Underused</Badge>}
          </div>
        ))}

        {subscriptions.find(s => s.underused) && (
            <div className="p-3 bg-red-900/40 border border-destructive/50 rounded-lg text-xs">
                <p className="font-bold">Consider Cancelling?</p>
                <p className="text-destructive-foreground/80">You paid $15/month for Netflix but watched only 3 hours in May. Cancelling could save $180/year.</p>
            </div>
        )}
        
        <div className="pt-4">
            <p className="text-sm font-medium mb-2 text-center">Historical Subscription Spend</p>
             <div className="h-[100px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={historyData}>
                        <Tooltip
                            contentStyle={{ 
                                backgroundColor: 'hsl(var(--background))', 
                                borderColor: 'hsl(var(--border))',
                                fontSize: '12px',
                                borderRadius: 'var(--radius)',
                            }}
                        />
                        <Line type="monotone" dataKey="spend" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
             </div>
        </div>

      </CardContent>
    </Card>
  )
}

export default SubscriptionTracker
