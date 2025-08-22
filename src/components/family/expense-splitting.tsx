
"use client";
import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { sharedExpenses } from "@/lib/family-data";
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


const ExpenseSplitting = () => {
  return (
    <Card className="bg-secondary/50 border-primary/20">
      <CardHeader>
        <CardTitle className="text-xl font-headline">Shared Expense Tracker</CardTitle>
        <CardDescription>View and manage split household expenses.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="p-3 bg-blue-900/40 border border-blue-500/50 rounded-lg text-sm flex items-center gap-2 mb-6">
            <Info className="h-5 w-5 text-blue-400" />
            <p>
                <span className="font-bold">AI Suggestion:</span> Based on income, a 60/40 split is recommended for shared bills.
            </p>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Expense</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Your Share</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sharedExpenses.map((expense) => (
              <TableRow key={expense.id}>
                <TableCell>
                  <div className="font-medium">{expense.name}</div>
                  <div className="text-xs text-muted-foreground">{expense.date}</div>
                </TableCell>
                <TableCell>${expense.total.toFixed(2)}</TableCell>
                <TableCell>
                  ${expense.yourShare.toFixed(2)}{" "}
                  <span className="text-xs text-muted-foreground">({expense.yourPercentage}%)</span>
                </TableCell>
                <TableCell className="text-right">
                  <Badge variant={expense.status === 'Paid' ? 'default' : 'destructive'} 
                         className={expense.status === 'Paid' ? 'bg-green-700' : ''}>
                    {expense.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4 flex justify-end">
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="outline">Settle Up</Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-secondary border-primary/20">
                    <AlertDialogHeader>
                        <AlertDialogTitle>Settle Up Expenses</AlertDialogTitle>
                        <AlertDialogDescription>
                           This feature is not yet implemented. It will be available in a future update.
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
  );
};

export default ExpenseSplitting;
