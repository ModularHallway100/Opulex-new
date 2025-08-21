"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Logo from '@/components/logo';
import PasswordStrength from '@/components/password-strength';

export default function SignUpPage() {
    const router = useRouter();
    const [password, setPassword] = useState('');

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you'd have validation and an API call here.
        router.push('/dashboard');
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-background py-12">
            <Card className="w-full max-w-md bg-secondary border-primary/20">
                <CardHeader className="text-center">
                     <div className="flex justify-center mb-4">
                        <Logo />
                    </div>
                    <CardTitle className="text-2xl font-headline">Create Your Account</CardTitle>
                    <CardDescription>Join Opulex and start your wealth mastery journey.</CardDescription>
                </CardHeader>
                <form onSubmit={handleSignUp}>
                    <CardContent className="space-y-4">
                         <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" type="text" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="john.doe@example.com" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input 
                                id="password" 
                                type="password" 
                                required 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <PasswordStrength password={password} />
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-4">
                        <Button className="w-full">Create Account</Button>
                         <p className="text-xs text-muted-foreground text-center">
                            By signing up, you agree to our Terms of Service.
                        </p>
                        <p className="text-xs text-muted-foreground">
                            Already have an account?{" "}
                            <Link href="/signin" passHref>
                                <span className="text-primary hover:underline cursor-pointer">Sign In</span>
                            </Link>
                        </p>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}