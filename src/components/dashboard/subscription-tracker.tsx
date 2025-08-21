
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gem, AlertTriangle, Sparkles } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"

const subscriptions = [
  { name: "Netflix Premium", logo: "https://placehold.co/40x40.png", next_renewal: "June 15", cost: 22.99, usage: 25, underused: true },
  { name: "Spotify Duo", logo: "https://placehold.co/40x40.png", next_renewal: "June 20", cost: 14.99, usage: 90, underused: false },
  { name: "Adobe CC All Apps", logo: "https://placehold.co/40x40.png", next_renewal: "Aug 01", cost: 59.99, usage: 75, underused: false },
]

const SubscriptionTracker = () => {
  return (
    <div className="space-y-4">
        <h2 className="text-xl font-headline text-primary">Subscription Concierge</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subscriptions.map((sub) => (
                <Card key={sub.name} className="bg-black border-primary/40 text-foreground flex flex-col justify-between shadow-lg shadow-primary/10">
                    <CardHeader className="flex-row justify-between items-start">
                        <Image src={sub.logo} alt={`${sub.name} logo`} width={40} height={40} className="rounded-md" data-ai-hint="logo" />
                        {sub.underused && <Badge variant="destructive" className="bg-amber-500 text-black text-xs gap-1"><AlertTriangle className="h-3 w-3" /> Underused</Badge>}
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <p className="font-headline text-lg text-primary">{sub.name}</p>
                            <p className="text-xs text-muted-foreground">Next payment: {sub.next_renewal}</p>
                        </div>
                        <div className="text-right">
                             <p className="text-2xl font-mono text-primary">${sub.cost}</p>
                             <p className="text-xs text-muted-foreground">/ month</p>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>Usage Meter</span>
                            <div className="flex items-center gap-1 text-primary">
                                <Gem className="h-3 w-3" />
                                <span>{sub.usage}%</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>

        <Card className="bg-secondary/50 border-primary/20">
            <CardHeader className="flex-row items-center gap-4">
                <Sparkles className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg font-headline">AI Concierge</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="p-4 bg-background/50 rounded-lg flex justify-between items-center">
                    <div>
                        <p className="font-semibold">Downgrade Netflix to Basic</p>
                        <p className="text-sm text-muted-foreground">Your low usage on Premium suggests the Basic plan ($9.99/mo) is a better fit.</p>
                    </div>
                    <div className="text-center">
                        <p className="font-bold text-lg text-green-500">+156</p>
                        <p className="text-xs flex items-center gap-1"><Gem className="h-3 w-3" />Freedom Pts/yr</p>
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button variant="ghost">Dismiss All</Button>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default SubscriptionTracker
