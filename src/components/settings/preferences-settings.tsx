
"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Palette } from "lucide-react";
import { Switch } from "../ui/switch";
import { Separator } from '../ui/separator';

const PreferenceSettings = () => {
    const [theme, setTheme] = useState('opulex-prime');

    useEffect(() => {
        const root = document.documentElement;
        // Remove all theme classes
        root.classList.remove('theme-midnight-marble', 'theme-solaris-gold', 'theme-ruby-empire', 'theme-platinum-silver', 'theme-emerald-noir');
        
        // Add the selected theme class if it's not the default
        if (theme && theme !== 'opulex-prime') {
            root.classList.add(`theme-${theme}`);
        }
    }, [theme]);


    return (
        <Card className="bg-secondary/50 border-primary/20">
            <CardHeader>
                 <div className="flex items-center gap-4">
                    <Palette className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl font-headline">Preferences</CardTitle>
                </div>
                <CardDescription>Customize the look and feel of your app.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="currency">Default Currency</Label>
                    <Select defaultValue="usd">
                        <SelectTrigger id="currency">
                            <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="usd">USD - United States Dollar</SelectItem>
                            <SelectItem value="eur">EUR - Euro</SelectItem>
                            <SelectItem value="gbp">GBP - British Pound</SelectItem>
                            <SelectItem value="jpy">JPY - Japanese Yen</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="theme">Theme</Label>
                    <Select defaultValue="dark">
                        <SelectTrigger id="theme">
                            <SelectValue placeholder="Select theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="light">Light</SelectItem>
                             <SelectItem value="system">System Default</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                 <div className="space-y-2">
                    <Label htmlFor="luxury-theme">Luxury Theme Pack</Label>
                    <Select value={theme} onValueChange={setTheme}>
                        <SelectTrigger id="luxury-theme">
                            <SelectValue placeholder="Select theme pack" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="opulex-prime">Opulex Prime (Default)</SelectItem>
                            <SelectItem value="midnight-marble">Midnight Marble</SelectItem>
                            <SelectItem value="solaris-gold">Solaris Gold</SelectItem>
                            <SelectItem value="ruby-empire">Ruby Empire</SelectItem>
                            <SelectItem value="platinum-silver">Platinum Silver</SelectItem>
                            <SelectItem value="emerald-noir">Emerald Noir</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-4 pt-4 border-t border-border/50">
                    <div className="p-4 rounded-lg border border-border/50 bg-background/30 space-y-4">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="date-format">Use DD/MM/YYYY format</Label>
                            <Switch id="date-format" />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                            <Label htmlFor="number-format">Use dots for thousands separators</Label>
                            <Switch id="number-format" />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default PreferenceSettings;
