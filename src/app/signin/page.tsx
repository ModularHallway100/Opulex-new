
"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from 'next/link';
import Logo from '@/components/logo';
import { KeyRound } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';

export default function SignInPage() {
    const { signInWithEmail, isUnlocking } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        signInWithEmail(email, password);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            {isUnlocking && (
                <div className="gate-unlock-overlay">
                    <KeyRound className="gate-unlock-key" />
                </div>
            )}
            <Card className="w-full max-w-md bg-secondary border-primary/20 overflow-hidden">
                <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                        <Logo />
                    </div>
                    <CardTitle className="text-2xl font-headline">Welcome Back</CardTitle>
                    <CardDescription>Unlock your Opulex command center.</CardDescription>
                </CardHeader>
                <form onSubmit={handleSignIn}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="john.doe@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <Label htmlFor="password">Password</Label>
                                <Link href="#" passHref>
                                    <Button variant="link" className="p-0 h-auto text-xs">Forgot password?</Button>
                                </Link>
                            </div>
                            <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-4">
                        <Button type="submit" className="w-full" disabled={isUnlocking}>
                            <KeyRound className="mr-2" />
                            Log In
                        </Button>
                        <p className="text-xs text-muted-foreground">
                            Don't have an account?{" "}
                            <Link href="/signup" passHref>
                                <span className="text-primary hover:underline cursor-pointer">Enter the Vault</span>
                            </Link>
                        </p>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
