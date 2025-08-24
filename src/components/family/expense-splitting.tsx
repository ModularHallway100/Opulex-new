
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
    <Card className="bg-card border-primary/20">
      <CardHeader>
        <CardTitle className="text-xl font-headline">Shared Expense Tracker</CardTitle>
        <CardDescription>View and manage split household expenses.</CardDescription>
      </CardHeader>
      <CardContent>
        {sharedExpenses.length === 0 ? (
          <div className="text-center py-10 text-muted-foreground">
            <p>No shared expenses to display.</p>
          </div>
        ) : (
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
        )}
        <div className="mt-4 flex justify-end">
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="outline" disabled={sharedExpenses.length === 0}>Settle Up</Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-card border-primary/20">
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
