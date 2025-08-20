import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Database, Download, Trash2 } from "lucide-react";

const DataPrivacySettings = () => {
    return (
        <Card className="bg-secondary/50 border-primary/20">
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
                      <Button variant="destructive" className="w-full">
                        <Trash2 className="mr-2" />
                        Delete Account
                     </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default DataPrivacySettings;
