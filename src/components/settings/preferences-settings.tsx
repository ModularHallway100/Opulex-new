import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Palette } from "lucide-react";
import { Switch } from "../ui/switch";

const PreferenceSettings = () => {
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

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <Label htmlFor="date-format">Use DD/MM/YYYY format</Label>
                    <Switch id="date-format" />
                </div>
                 <div className="flex items-center justify-between">
                    <Label htmlFor="number-format">Use dots for thousands separators</Label>
                    <Switch id="number-format" />
                </div>
            </CardContent>
        </Card>
    )
}

export default PreferenceSettings;
