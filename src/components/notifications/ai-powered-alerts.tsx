
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, TrendingUp, ArrowRightLeft } from "lucide-react";
import { aiAlerts } from "@/lib/notifications-data";
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

const AiPoweredAlerts = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0" />;
      case "opportunity":
        return <TrendingUp className="h-6 w-6 text-green-500 flex-shrink-0" />;
      default:
        return null;
    }
  };

  if(aiAlerts.length === 0) {
    return null;
  }

  return (
    <Card className="bg-card border-primary/20">
      <CardHeader>
        <CardTitle className="text-xl font-headline">AI-Powered Alerts</CardTitle>
        <CardDescription>Proactive insights from your financial oracle.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {aiAlerts.map((alert) => (
          <Card key={alert.id} className="bg-background/40 border-primary/10">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-start gap-4">
                {getIcon(alert.type)}
                <div>
                  <p className="font-semibold">{alert.title}</p>
                  <p className="text-sm text-muted-foreground">{alert.description}</p>
                </div>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button size="sm">
                        <ArrowRightLeft className="mr-2 h-4 w-4" />
                        {alert.action}
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-card border-primary/20">
                    <AlertDialogHeader>
                        <AlertDialogTitle>Action Confirmation</AlertDialogTitle>
                        <AlertDialogDescription>
                            This functionality is not yet implemented.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction>OK</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default AiPoweredAlerts;
