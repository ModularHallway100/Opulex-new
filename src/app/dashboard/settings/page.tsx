import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline text-primary">Settings</h1>
        <p className="text-muted-foreground">Customize your Opulex experience.</p>
      </div>
      
      <Card className="bg-secondary/50 border-primary/20">
        <CardHeader>
          <CardTitle>Application Settings</CardTitle>
          <CardDescription>Manage your preferences for notifications, security, and more.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Settings options will be built out here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
