"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, TrendingUp, ArrowRightLeft } from "lucide-react";
import { aiAlerts } from "@/lib/notifications-data";

const AiPoweredAlerts = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="h-6 w-6 text-destructive" />;
      case "opportunity":
        return <TrendingUp className="h-6 w-6 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <Card className="bg-secondary/50 border-primary/20">
      <CardHeader>
        <CardTitle className="text-xl font-headline">AI-Powered Alerts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {aiAlerts.map((alert) => (
          <Card key={alert.id} className="bg-background/40">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-start gap-4">
                {getIcon(alert.type)}
                <div>
                  <p className="font-semibold">{alert.title}</p>
                  <p className="text-sm text-muted-foreground">{alert.description}</p>
                </div>
              </div>
              <Button size="sm">
                <ArrowRightLeft className="mr-2 h-4 w-4" />
                {alert.action}
              </Button>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default AiPoweredAlerts;
