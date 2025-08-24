
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Shield, RefreshCw, KeyRound, Smartphone } from "lucide-react";
import Image from 'next/image';
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
import { connectedAccounts } from "@/lib/settings-data";

const SecuritySettings = () => {
    return (
        <Card className="bg-card border-primary/20">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl font-headline">Security & Access</CardTitle>
                </div>
                <CardDescription>Manage 2FA and connected financial accounts.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold">Two-Factor Authentication (2FA)</h3>
                    <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg mt-2">
                        <Label htmlFor="2fa-switch" className="font-semibold">
                            Enable Two-Factor Authentication
                        </Label>
                        <Switch id="2fa-switch" defaultChecked />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <Button variant="outline"><Smartphone className="mr-2" />Authenticator App</Button>
                        <Button variant="outline"><KeyRound className="mr-2" />SMS Recovery Codes</Button>
                    </div>
                </div>

                 <div className="space-y-4 pt-6 border-t border-border/50">
                    <h3 className="text-lg font-semibold">Connected Accounts</h3>
                    {connectedAccounts.length > 0 ? (
                        connectedAccounts.map(account => (
                            <div key={account.name} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <Image src={account.logo} alt={account.name} width={32} height={32} data-ai-hint="logo" />
                                    <div>
                                        <p className="font-semibold">{account.name}</p>
                                        <p className="text-xs text-muted-foreground">Last updated: {account.lastRefreshed}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="sm"><RefreshCw className="mr-2" />Refresh</Button>
                                    <Button variant="destructive" size="sm">Disconnect</Button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-sm text-muted-foreground text-center py-4">No financial accounts have been linked.</p>
                    )}
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="outline" className="w-full">Link New Account</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-card border-primary/20">
                            <AlertDialogHeader>
                                <AlertDialogTitle>Link New Account</AlertDialogTitle>
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
    )
}

export default SecuritySettings;
