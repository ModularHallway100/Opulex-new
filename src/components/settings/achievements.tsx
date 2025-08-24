
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, ShieldCheck, Axe, TrendingUp } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { achievements } from "@/lib/settings-data";

const Achievements = () => {
    return (
        <Card className="bg-card border-primary/20">
            <CardHeader>
                 <div className="flex items-center gap-4">
                    <Award className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl font-headline">Hall of Achievements</CardTitle>
                </div>
                <CardDescription>Recognizing your milestones in the game of wealth.</CardDescription>
            </CardHeader>
            <CardContent>
              {achievements.length > 0 ? (
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
              ) : (
                <div className="text-center text-muted-foreground py-8">
                  <p>Your achievements will appear here as you reach new milestones.</p>
                </div>
              )}
            </CardContent>
        </Card>
    )
}

export default Achievements;
