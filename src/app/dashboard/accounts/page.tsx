import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function AccountsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-headline text-primary">Connected Accounts</h1>
            <p className="text-muted-foreground">Manage your linked financial accounts.</p>
        </div>
        <Button>
            <Plus className="mr-2" />
            Link New Account
        </Button>
      </div>

      <Card className="bg-secondary/50 border-primary/20">
        <CardHeader>
          <CardTitle>Your Accounts</CardTitle>
          <CardDescription>All your financial accounts in one place.</CardDescription>
        </CardHeader>
        <CardContent>
           <p className="text-muted-foreground">Account management functionality will be built here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
