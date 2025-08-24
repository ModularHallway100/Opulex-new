
"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Database, Download, Trash2, AlertTriangle } from "lucide-react";
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
import { Input } from '../ui/input';

const DataPrivacySettings = () => {
    const [confirmationText, setConfirmationText] = useState('');

    const handleDelete = () => {
        // In a real app, this would trigger a backend process
        // to send a confirmation email.
        console.log("Account deletion initiated.");
        alert("A confirmation link has been sent to your email to finalize the deletion.");
        setConfirmationText('');
    };

    return (
        <Card className="bg-card border-primary/20">
            <CardHeader>
                 <div className="flex items-center gap-4">
                    <Database className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl font-headline">Data & Privacy</CardTitle>
                </div>
                <CardDescription>Manage your data sharing and account status.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-4">
                    <div className="flex items-start justify-between">
                        <Label htmlFor="ai-sharing" className="max-w-xs">
                            Share anonymized data to improve AI models
                        </Label>
                        <Switch id="ai-sharing" defaultChecked />
                    </div>
                    <div className="flex items-start justify-between">
                        <Label htmlFor="offers-sharing" className="max-w-xs">
                           Allow partners to recommend offers
                        </Label>
                        <Switch id="offers-sharing" />
                    </div>
                </div>

                <div className="space-y-3 pt-6 border-t border-border/50">
                     <Button variant="outline" className="w-full">
                        <Download className="mr-2" />
                        Export All Data
                     </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                         <Button variant="destructive" className="w-full">
                            <Trash2 className="mr-2" />
                            Delete Account
                         </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="bg-card border-primary/20">
                        <AlertDialogHeader>
                          <AlertDialogTitle className="flex items-center gap-2">
                            <AlertTriangle className="text-destructive" />
                            Are you absolutely sure?
                            </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your account and remove your data from our servers. A confirmation link will be sent to your email.
                            <br/><br/>
                            Please type <strong>DELETE</strong> to confirm.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <Input 
                            value={confirmationText}
                            onChange={(e) => setConfirmationText(e.target.value)}
                            placeholder="DELETE"
                            className="bg-background"
                        />
                        <AlertDialogFooter>
                          <AlertDialogCancel onClick={() => setConfirmationText('')}>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            disabled={confirmationText !== 'DELETE'}
                            onClick={handleDelete}
                          >
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                </div>
            </CardContent>
        </Card>
    )
}

export default DataPrivacySettings;
