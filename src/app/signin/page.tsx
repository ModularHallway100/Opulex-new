"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Logo from '@/components/logo';

export default function SignInPage() {
    const router = useRouter();

    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you'd have validation and an API call here.
        router.push('/dashboard');
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <Card className="w-full max-w-md bg-secondary border-primary/20">
                <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                        <Logo />
                    </div>
                    <CardTitle className="text-2xl font-headline">Welcome Back</CardTitle>
                    <CardDescription>Sign in to your Opulex command center.</CardDescription>
                </CardHeader>
                <form onSubmit={handleSignIn}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="john.doe@example.com" required />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <Label htmlFor="password">Password</Label>
                                <Link href="/forgot-password" passHref>
                                    <Button variant="link" className="p-0 h-auto text-xs">Forgot password?</Button>
                                </Link>
                            </div>
                            <Input id="password" type="password" required />
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-4">
                        <Button type="submit" className="w-full">Sign In</Button>
                        <p className="text-xs text-muted-foreground">
                            Don't have an account?{" "}
                            <Link href="/signup" passHref>
                                <span className="text-primary hover:underline cursor-pointer">Sign Up</span>
                            </Link>
                        </p>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}