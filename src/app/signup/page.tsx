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
import { Separator } from '@/components/ui/separator';

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
            <Card className="w-full max-w-md bg-secondary border-primary/20 shadow-2xl shadow-primary/10">
                <CardHeader className="text-center p-8 bg-black/30 border-b-2 border-primary">
                     <div className="flex justify-center mb-4">
                        <Logo />
                    </div>
                    <CardTitle className="text-2xl font-headline text-primary">You Are Invited</CardTitle>
                    <CardDescription>Join Opulex and begin your wealth mastery journey.</CardDescription>
                </CardHeader>
                <form onSubmit={handleSignUp}>
                    <CardContent className="space-y-4 p-8">
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
                    <CardFooter className="flex-col gap-4 p-8 pt-4">
                        <Button className="w-full" size="lg">Accept Invitation</Button>
                        <div className="flex items-center w-full gap-4 text-xs text-muted-foreground">
                            <Separator className="flex-1" />
                            OR
                            <Separator className="flex-1" />
                        </div>
                        <Button variant="outline" className="w-full">Sign up with Google</Button>
                        <p className="text-xs text-muted-foreground">
                            Already a member?{" "}
                            <Link href="/signin" passHref>
                                <span className="text-primary hover:underline cursor-pointer">Log In</span>
                            </Link>
                        </p>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
