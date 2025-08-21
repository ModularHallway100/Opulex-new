"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarCheck, Bell, History } from "lucide-react";
import { todayAlerts, upcomingAlerts } from "@/lib/notifications-data";

const DueDateAlerts = () => {
  return (
    <Card className="bg-secondary/50 border-primary/20">
      <CardHeader>
        <CardTitle className="text-xl font-headline">Decrees & Due Dates</CardTitle>
        <CardDescription>Official notices of your upcoming financial obligations.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
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
                    <Button size="sm">{alert.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

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
                    <Button variant="ghost" size="sm">
                        <History className="mr-2 h-4 w-4" />
                        Snooze
                    </Button>
                    <Button size="sm">Pay Now</Button>
                    </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DueDateAlerts;
