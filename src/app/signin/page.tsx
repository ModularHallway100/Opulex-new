
"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from 'next/link';
import Logo from '@/components/logo';
import { KeyRound, Phone } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';
import { Separator } from '@/components/ui/separator';

export default function SignInPage() {
    const { 
        signInWithEmail, 
        signInWithPhone, 
        verifyOtp, 
        isUnlocking 
    } = useAuth();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);

    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        signInWithEmail(email, password);
    }
    
    const handlePhoneSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const success = await signInWithPhone(phone);
        if (success) {
            setOtpSent(true);
        }
    }

    const handleVerifyOtp = (e: React.FormEvent) => {
        e.preventDefault();
        verifyOtp(otp);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div id="recaptcha-container"></div>
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
                            <Input id="email" type="email" placeholder="john.doe@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <Label htmlFor="password">Password</Label>
                                <Link href="#" passHref>
                                    <Button variant="link" className="p-0 h-auto text-xs">Forgot password?</Button>
                                </Link>
                            </div>
                            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <Button type="submit" className="w-full" disabled={isUnlocking}>
                            <KeyRound className="mr-2" />
                            Log In with Email
                        </Button>
                    </CardContent>
                </form>

                <div className="flex items-center w-full gap-4 text-xs text-muted-foreground px-6 pb-4">
                    <Separator className="flex-1" />
                    OR
                    <Separator className="flex-1" />
                </div>
                
                <form onSubmit={handleVerifyOtp}>
                    <CardContent className="space-y-4">
                        {!otpSent ? (
                             <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <div className="flex gap-2">
                                    <Input id="phone" type="tel" placeholder="Enter phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    <Button variant="outline" onClick={handlePhoneSignIn} disabled={isUnlocking || !phone}>
                                        Send Code
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                <Label htmlFor="otp">Verification Code</Label>
                                <Input id="otp" type="text" placeholder="Enter OTP" required value={otp} onChange={(e) => setOtp(e.target.value)} />
                                <Button type="submit" className="w-full" disabled={isUnlocking || !otp}>
                                    <Phone className="mr-2" />
                                    Sign In with Phone
                                </Button>
                            </div>
                        )}
                    </CardContent>
                </form>

                <CardFooter className="flex-col gap-4">
                    <p className="text-xs text-muted-foreground">
                        Don't have an account?{" "}
                        <Link href="/signup" passHref>
                            <span className="text-primary hover:underline cursor-pointer">Enter the Vault</span>
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
