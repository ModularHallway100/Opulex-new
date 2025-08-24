
"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Gem, Info, PlusCircle } from "lucide-react"
import { Progress } from "../ui/progress"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from '../ui/input';
import { Label as UiLabel } from '../ui/label';
import { subscriptions } from "@/lib/subscriptions-data"

const getUsageColor = (usage: number) => {
    if (usage >= 80) return "bg-green-500"; // Emerald
    if (usage >= 40) return "bg-blue-500"; // Sapphire
    return "bg-red-500"; // Ruby
}

const SubscriptionTracker = () => {
   const hasLowUsageSub = subscriptions.some(sub => sub.usage < 40);
   const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);


  if (subscriptions.length === 0) {
    return (
        <Card className="bg-card border-primary/20">
            <CardContent className="pt-6 text-center text-muted-foreground py-12">
                 <p className="text-lg font-semibold mb-2">No Subscriptions Tracked</p>
                 <p className="mb-6">Add your subscriptions to get insights on your recurring spending.</p>
                 <Button variant="outline" onClick={() => setIsCreateModalOpen(true)}>
                    <PlusCircle className="mr-2" />
                    Add Subscription
                </Button>
            </CardContent>
            <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
                <DialogContent className="sm:max-w-[425px] bg-card border-primary/20">
                    <DialogHeader>
                        <DialogTitle className="font-headline text-primary">Add Subscription</DialogTitle>
                        <DialogDescription>
                        Track a new recurring subscription.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="space-y-2">
                            <UiLabel htmlFor="sub-name">Subscription Name</UiLabel>
                            <Input id="sub-name" placeholder="e.g., Netflix" />
                        </div>
                        <div className="space-y-2">
                            <UiLabel htmlFor="sub-cost">Monthly Cost</UiLabel>
                            <Input id="sub-cost" type="number" placeholder="15.99" />
                        </div>
                         <div className="space-y-2">
                            <UiLabel htmlFor="sub-date">Next Renewal Date</UiLabel>
                            <Input id="sub-date" type="date"/>
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button type="submit" onClick={() => setIsCreateModalOpen(false)}>Add</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </Card>
    )
  }

  return (
    <Card className="bg-card border-primary/20">
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {subscriptions.map((sub, index) => {
            const isUnderused = sub.usage < 40;
            return (
                 <Card key={index} className="bg-background/40 flex flex-col shadow-lg border-primary/10 hover:border-primary/30 transition-all">
                    <CardHeader className="flex-row items-start gap-4 space-y-0">
                        <Image src={sub.logo} alt={`${sub.name} logo`} width={40} height={40} className="rounded-md" data-ai-hint="logo" />
                        <div className="flex-grow">
                        <CardTitle className="text-lg font-bold">{sub.name}</CardTitle>
                        <CardDescription className="text-xs">Next payment: {sub.renewalDate}</CardDescription>
                        </div>
                        {isUnderused && (
                            <Badge variant="destructive" className="bg-red-500/80 text-white text-xs">Low Usage</Badge>
                        )}
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-end space-y-4">
                        <div>
                        <p className="text-2xl font-bold font-mono">${sub.cost}<span className="text-sm text-muted-foreground">/ month</span></p>
                        </div>
                        <div>
                        <Label className="text-xs text-muted-foreground">Usage Meter</Label>
                        <Progress value={sub.usage} className="h-2 mt-1" indicatorClassName={getUsageColor(sub.usage)} />
                        </div>
                    </CardContent>
                </Card>
            )
          })}
        </div>
        
        {hasLowUsageSub && (
            <Card className="bg-blue-900/30 border-blue-500/50">
                <CardHeader className="flex-row items-start gap-4">
                    <Info className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                        <CardTitle className="text-lg font-headline">AI Concierge Note</CardTitle>
                        <CardDescription className="text-blue-200/80">
                            We've noticed low usage on some of your subscriptions. Downgrading or canceling could save you money.
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
        )}

      </CardContent>
    </Card>
  );
}

const Label = (props: React.LabelHTMLAttributes<HTMLLabelElement>) => (
    <label {...props} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" />
)


export default SubscriptionTracker
