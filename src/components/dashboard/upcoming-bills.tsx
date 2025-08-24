
"use client"
import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell } from "lucide-react"
import { upcomingAlerts } from '@/lib/notifications-data';

const bills = upcomingAlerts.map(alert => ({
    name: alert.name,
    due: `Due in ${alert.dueIn} days`,
    dueIn: alert.dueIn,
    amount: alert.amount.toFixed(2),
    reminder: true,
}))

const UpcomingBills = () => {
  if (bills.length === 0) {
    return (
       <Card className="bg-background/40 border-primary/20">
         <CardHeader>
            <CardTitle className="text-xl font-headline">Upcoming Bills</CardTitle>
         </CardHeader>
        <CardContent className="flex items-center justify-center h-full text-muted-foreground">
            <p>No upcoming bills found.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-background/40 border-primary/20">
      <CardHeader>
        <CardTitle className="text-xl font-headline">Upcoming Bills</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {bills.map((bill) => (
            <li key={bill.name} className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{bill.name}</p>
                <p className="text-xs text-muted-foreground">{bill.due}</p>
              </div>
              <div className="flex items-center gap-3">
                {bill.reminder && (
                  <div className="flex items-center gap-1 text-primary text-xs">
                    <Bell className="h-3 w-3" />
                    Due in {bill.dueIn} days
                  </div>
                )}
                <p className="font-mono text-sm">${bill.amount}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default UpcomingBills
