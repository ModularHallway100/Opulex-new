
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Upload } from "lucide-react";
import PasswordStrength from "../password-strength";
import { useState } from "react";
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

const ProfileSettings = () => {
    const [password, setPassword] = useState('');

    return (
        <Card className="bg-card border-primary/20">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <User className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl font-headline">Profile Settings</CardTitle>
                </div>
                <CardDescription>Manage your personal information and password.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                    <Avatar className="h-20 w-20">
                        <AvatarImage src="https://placehold.co/100x100.png" alt="User" data-ai-hint="portrait" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="outline">
                                <Upload className="mr-2 h-4 w-4" />
                                Upload Picture
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-card border-primary/20">
                            <AlertDialogHeader>
                                <AlertDialogTitle>Upload Picture</AlertDialogTitle>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                </div>
                 <div className="space-y-4 pt-4 border-t border-border/50">
                    <h3 className="text-lg font-semibold">Change Password</h3>
                     <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input 
                            id="new-password" 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                         <PasswordStrength password={password} />
                    </div>
                 </div>
                <div className="flex justify-end">
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button>Save Changes</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-card border-primary/20">
                            <AlertDialogHeader>
                                <AlertDialogTitle>Changes Saved</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Your profile information has been updated.
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

export default ProfileSettings;
