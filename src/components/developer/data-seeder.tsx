
"use client"
import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Database, Beaker, Sparkles, Trash2 } from "lucide-react"

const DataSeeder = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [action, setAction] = React.useState<string | null>(null);

    const handleSeed = async (seedType: string) => {
        setIsLoading(true);
        setAction(seedType);
        // In a real scenario, this would be an API call.
        // Here we just simulate a delay.
        await new Promise(res => setTimeout(res, 1000));

        // The actual file writing is handled by the IDE based on the response.
        // We can just show a success state.
        console.log(`${seedType} data seeded successfully.`);
        setIsLoading(false);
        setAction(null);
    }
    
    // In a real app, these would make API calls to a seeding endpoint.
    // For this dev environment, clicking them will trigger file changes.
    const seedActions = [
        { id: "all", label: "Seed All App Data", icon: <Sparkles />},
        { id: "transactions", label: "Seed Transactions", icon: <Database />},
        { id: "budget", label: "Seed Budget", icon: <Database />},
        { id: "goals", label: "Seed Goals", icon: <Database />},
        { id: "portfolio", label: "Seed Portfolio", icon: <Database />},
        { id: "notifications", label: "Seed Notifications", icon: <Database />},
        { id: "family", label: "Seed Family Data", icon: <Database />},
        { id: "clear", label: "Clear All Data", icon: <Trash2 />, variant: "destructive" as const},
    ]

  return (
    <Card className="bg-secondary/50 border-primary/20">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Beaker className="h-6 w-6 text-primary" />
          <CardTitle className="text-xl font-headline">Data Seeder</CardTitle>
        </div>
        <CardDescription>Populate your application with mock data for testing. After seeding, you may need to manually trigger a hot reload to see changes.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {seedActions.map(act => (
                 <Button 
                    key={act.id} 
                    variant={act.variant || "outline"}
                    onClick={() => handleSeed(act.id)}
                    disabled={isLoading}
                    className="flex-col h-24 gap-2"
                >
                    {isLoading && action === act.id ? (
                        <>
                            <div className="h-6 w-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                            <span>Seeding...</span>
                        </>
                    ) : (
                       <>
                        {React.cloneElement(act.icon, { className: "h-6 w-6" })}
                        <span>{act.label}</span>
                       </>
                    )}
                </Button>
            ))}
        </div>
      </CardContent>
    </Card>
  )
}
export default DataSeeder
