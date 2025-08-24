
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarCheck, Bell, History } from "lucide-react";
import { todayAlerts, upcomingAlerts } from "@/lib/notifications-data";
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


const DueDateAlerts = () => {

    if(todayAlerts.length === 0 && upcomingAlerts.length === 0) {
        return null;
    }

  return (
    <Card className="bg-card border-primary/20">
      <CardHeader>
        <CardTitle className="text-xl font-headline">Decrees & Due Dates</CardTitle>
        <CardDescription>Official notices of your upcoming financial obligations.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {todayAlerts.length > 0 && (
            <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <CalendarCheck className="text-destructive" />
                Due Today
            </h3>
            <div className="space-y-3">
                {todayAlerts.map((alert) => (
                <Card key={alert.id} className="bg-destructive/10 border-destructive/40">
                    <CardContent className="p-4 flex items-center justify-between">
                        <div>
                        <p className="font-semibold">{alert.name}</p>
                        <p className="text-sm text-muted-foreground">${alert.amount.toFixed(2)}</p>
                        </div>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button size="sm">{alert.action}</Button>
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
            </div>
            </div>
        )}

        {upcomingAlerts.length > 0 && (
            <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Bell className="text-primary" />
                Upcoming Notices
            </h3>
            <div className="space-y-3">
                {upcomingAlerts.map((alert) => (
                <Card key={alert.id} className="bg-background/50 border-primary/10">
                    <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                        <div>
                            <p className="font-semibold">{alert.name}</p>
                            <p className="text-sm text-muted-foreground">${alert.amount.toFixed(2)}</p>
                        </div>
                        <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                            Due in {alert.dueIn} days
                        </Badge>
                        </div>
                        <div className="flex gap-2">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="ghost" size="sm">
                                    <History className="mr-2 h-4 w-4" />
                                    Snooze
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="bg-card border-primary/20">
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Snooze Alert</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This alert will be snoozed for 24 hours.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                     <AlertDialogAction>OK</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button size="sm">Pay Now</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="bg-card border-primary/20">
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Pay Bill</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This functionality is not yet implemented.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogAction>OK</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                        </div>
                    </CardContent>
                </Card>
                ))}
            </div>
            </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DueDateAlerts;
