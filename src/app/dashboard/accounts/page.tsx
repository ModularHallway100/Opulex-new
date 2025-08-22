
"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


export default function AccountsPage() {
  const [isLinkDialogOpen, setIsLinkDialogOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-headline text-primary">Connected Accounts</h1>
            <p className="text-muted-foreground">Manage your linked financial accounts.</p>
        </div>
        <AlertDialog open={isLinkDialogOpen} onOpenChange={setIsLinkDialogOpen}>
          <AlertDialogTrigger asChild>
            <Button onClick={() => setIsLinkDialogOpen(true)}>
                <Plus className="mr-2" />
                Link New Account
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-secondary border-primary/20">
            <AlertDialogHeader>
              <AlertDialogTitle>Link a New Account</AlertDialogTitle>
              <AlertDialogDescription>
                Account linking functionality is not yet implemented. This will be available in a future update.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={() => setIsLinkDialogOpen(false)}>OK</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <Card className="bg-secondary/50 border-primary/20">
        <CardHeader>
          <CardTitle>Your Accounts</CardTitle>
          <CardDescription>All your financial accounts in one place.</CardDescription>
        </CardHeader>
        <CardContent>
           <p className="text-muted-foreground">Account management functionality will be built here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
