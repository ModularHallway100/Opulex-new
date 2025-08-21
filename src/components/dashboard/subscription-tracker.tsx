"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Gem, AlertTriangle, Info } from "lucide-react"
import { Progress } from "../ui/progress"

const subscriptions = [
  {
    name: "Netflix Premium",
    logo: "https://placehold.co/40x40.png",
    renewalDate: "June 15",
    cost: 22.99,
    usage: 25,
    underused: true,
  },
  {
    name: "Spotify Duo",
    logo: "https://placehold.co/40x40.png",
    renewalDate: "June 20",
    cost: 14.99,
    usage: 90,
    underused: false,
  },
  {
    name: "Adobe CC All Apps",
    logo: "https://placehold.co/40x40.png",
    renewalDate: "Aug 01",
    cost: 59.99,
    usage: 75,
    underused: false,
  },
]

const SubscriptionTracker = () => {
  return (
    <Card className="bg-secondary/50 border-primary/20">
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {subscriptions.map((sub, index) => (
            <Card key={index} className="bg-background/40 flex flex-col">
              <CardHeader className="flex-row items-start gap-4 space-y-0">
                <Image src={sub.logo} alt={`${sub.name} logo`} width={40} height={40} className="rounded-md" data-ai-hint="logo" />
                <div className="flex-grow">
                  <CardTitle className="text-lg font-bold">{sub.name}</CardTitle>
                  <CardDescription className="text-xs">Next payment: {sub.renewalDate}</CardDescription>
                </div>
                {sub.underused && (
                   <Badge variant="destructive" className="bg-yellow-500/80 text-yellow-foreground text-xs">Underused</Badge>
                )}
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-end space-y-4">
                <div>
                  <p className="text-2xl font-bold font-mono">${sub.cost}<span className="text-sm text-muted-foreground">/ month</span></p>
                </div>
                <div>
                   <Label className="text-xs text-muted-foreground">Usage Meter</Label>
                   <Progress value={sub.usage} className="h-2 mt-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-blue-900/30 border-blue-500/50">
            <CardHeader className="flex-row items-start gap-4">
                 <Info className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                 <div>
                    <CardTitle className="text-lg font-headline">AI Concierge</CardTitle>
                    <CardDescription className="text-blue-200/80">
                        Downgrade Netflix to Basic. Your low usage on Premium suggests the Basic plan ($9.99/mo) is a better fit.
                    </CardDescription>
                 </div>
            </CardHeader>
            <CardFooter className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-primary">
                    <Gem className="h-5 w-5" />
                    <span className="font-bold">+156</span>
                    <span className="text-xs">Freedom Pts/yr</span>
                </div>
                <Button variant="ghost" size="sm">Dismiss</Button>
            </CardFooter>
        </Card>

      </CardContent>
    </Card>
  );
}

const Label = (props: React.LabelHTMLAttributes<HTMLLabelElement>) => (
    <label {...props} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" />
)


export default SubscriptionTracker
