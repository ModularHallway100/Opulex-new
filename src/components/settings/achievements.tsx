
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, ShieldCheck, Axe, TrendingUp } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const achievements = [
    {
        id: 'ef-guardian',
        name: 'Emergency Fund Guardian',
        description: 'Fully funded your emergency savings goal.',
        icon: <ShieldCheck className="h-8 w-8 text-green-500" />,
        unlocked: true,
    },
    {
        id: 'debt-slayer',
        name: 'Debt Slayer',
        description: 'Paid off a credit card or loan.',
        icon: <Axe className="h-8 w-8 text-destructive" />,
        unlocked: true,
    },
     {
        id: 'investor-edge',
        name: 'Investor\'s Edge',
        description: 'Maintained a diversified investment portfolio for 6 months.',
        icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
        unlocked: true,
    },
    {
        id: 'wealth-sage',
        name: 'Wealth Sage',
        description: 'Reach the highest wealth level.',
        icon: <Award className="h-8 w-8 text-muted-foreground" />,
        unlocked: false,
    }
]

const Achievements = () => {
    return (
        <Card className="bg-secondary/50 border-primary/20">
            <CardHeader>
                 <div className="flex items-center gap-4">
                    <Award className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl font-headline">Hall of Achievements</CardTitle>
                </div>
                <CardDescription>Recognizing your milestones in the game of wealth.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {achievements.map(ach => (
                        <TooltipProvider key={ach.id}>
                            <Tooltip>
                                <TooltipTrigger>
                                     <div className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-all ${ach.unlocked ? 'bg-primary/10 border border-primary/20' : 'bg-background/30 opacity-50'}`}>
                                        {ach.icon}
                                        <h3 className="text-sm font-semibold">{ach.name}</h3>
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent className="bg-background border-primary/30 max-w-xs">
                                    <p>{ach.description}</p>
                                    {!ach.unlocked && <p className="text-muted-foreground">(Locked)</p>}
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default Achievements;
