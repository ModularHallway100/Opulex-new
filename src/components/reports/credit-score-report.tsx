
"use client";
import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, RefreshCw, Bot, Sparkles } from "lucide-react";
import { creditScoreData } from "@/lib/reports-data";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { getCreditCoaching, type CreditCoachOutput } from "@/lib/credit-coach-service";
import { Skeleton } from "../ui/skeleton";

const getScoreColor = (score: number) => {
  if (score >= 800) return "text-green-400";
  if (score >= 740) return "text-green-500";
  if (score >= 670) return "text-yellow-500";
  if (score >= 580) return "text-orange-500";
  if (score > 0) return "text-red-500";
  return "text-muted-foreground";
};

const CreditScoreGauge = ({ score }: { score: number }) => {
    const color = getScoreColor(score);
    const rotation = score > 0 ? (score - 300) / (850 - 300) * 180 : 0;

    return (
        <div className="relative flex items-center justify-center h-48 w-48 mx-auto">
            <svg className="absolute inset-0" viewBox="0 0 120 120">
                <defs>
                    <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--destructive))" />
                        <stop offset="50%" stopColor="hsl(var(--warning))" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" />
                    </linearGradient>
                </defs>
                <path
                    key="gauge-background"
                    d="M 10 60 A 50 50 0 0 1 110 60"
                    stroke="hsl(var(--muted))"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                />
                {score > 0 && (
                  <path
                      key="gauge-foreground"
                      d="M 10 60 A 50 50 0 0 1 110 60"
                      stroke="url(#gaugeGradient)"
                      strokeWidth="12"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${(rotation / 180) * 157}, 157`}
                      style={{ transition: 'stroke-dasharray 1s ease-in-out' }}
                  />
                )}
            </svg>
            <div className="text-center">
                <div className={`text-5xl font-bold ${color}`}>{score > 0 ? score : 'N/A'}</div>
                <div className="text-lg font-semibold">{creditScoreData.rating}</div>
            </div>
        </div>
    );
};

const AiCoachSection = () => {
    const [coaching, setCoaching] = React.useState<CreditCoachOutput | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (creditScoreData.score > 0) {
            setIsLoading(true);
            getCreditCoaching({
                score: creditScoreData.score,
                positiveFactors: creditScoreData.positiveFactors,
                negativeFactors: creditScoreData.negativeFactors,
            })
            .then(data => setCoaching(data))
            .catch(() => setError("The AI Oracle is resting. Please try again later."))
            .finally(() => setIsLoading(false));
        } else {
            setIsLoading(false);
        }
    }, []);

    if (isLoading) {
        return (
            <div className="space-y-4 pt-4 border-t border-primary/20 mt-4">
                <div className="flex items-center gap-3">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <Skeleton className="h-6 w-48" />
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
            </div>
        );
    }

    if (error || !coaching) {
        return null; // Don't show the section if there's an error or no data
    }

    return (
        <div className="space-y-4 pt-4 border-t-2 border-primary/20 mt-4">
            <h3 className="font-headline text-lg flex items-center gap-2 text-primary">
                <Bot />
                AI Credit Coach
            </h3>
            <p className="text-sm text-muted-foreground italic">"{coaching.summary}"</p>
            <div className="space-y-3">
                {coaching.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                        <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <p className="font-semibold">{rec.title}</p>
                            <p className="text-xs text-muted-foreground">{rec.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


const CreditScoreReport = () => {
    if(creditScoreData.score === 0) {
        return (
             <Card className="bg-card h-full">
                <CardHeader>
                    <CardTitle className="text-xl font-headline">Credit Score</CardTitle>
                    <CardDescription>Monitor your credit health.</CardDescription>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground py-10">
                    <p>No credit score data available.</p>
                    <p className="text-sm">Link an account or use the app more to generate a score.</p>
                </CardContent>
            </Card>
        )
    }

  return (
    <Card className="bg-card h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl font-headline">Credit Score</CardTitle>
        <CardDescription>Provided by {creditScoreData.provider}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-6">
        <CreditScoreGauge score={creditScoreData.score} />

        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
                 <h4 className="font-semibold flex items-center gap-2"><ThumbsUp className="text-green-500" /> Positive Factors</h4>
                 <ul className="text-xs list-disc list-inside text-muted-foreground space-y-1">
                    {creditScoreData.positiveFactors.map(factor => <li key={factor}>{factor}</li>)}
                 </ul>
            </div>
             <div className="space-y-2">
                 <h4 className="font-semibold flex items-center gap-2"><ThumbsDown className="text-red-500" /> Negative Factors</h4>
                 <ul className="text-xs list-disc list-inside text-muted-foreground space-y-1">
                    {creditScoreData.negativeFactors.map(factor => <li key={factor}>{factor}</li>)}
                 </ul>
            </div>
        </div>
        <AiCoachSection />
      </CardContent>
       <CardFooter className="flex-col items-stretch gap-2 pt-4 border-t border-primary/20">
         <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button>
                    <RefreshCw className="mr-2" />
                    Update Score
                </Button>
            </AlertDialogTrigger>
             <AlertDialogContent className="bg-card border-primary/20">
                <AlertDialogHeader>
                    <AlertDialogTitle>Update Credit Score</AlertDialogTitle>
                    <AlertDialogDescription>
                        Score updates are not yet implemented. This feature will be available in a future update.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction>OK</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
        <p className="text-xs text-muted-foreground text-center">Last updated: {creditScoreData.lastUpdated}</p>
      </CardFooter>
    </Card>
  );
};

export default CreditScoreReport;
