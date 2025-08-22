import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Beaker, Database, Bot, Palmtree } from "lucide-react";
import Link from "next/link";

const devFeatures = [
    {
        title: "Data Seeder",
        description: "Populate the app with mock data for testing.",
        icon: <Database className="h-8 w-8 text-primary" />,
        href: "/dashboard/developer/data-seeder",
    },
    {
        title: "Flow Tester",
        description: "Directly test and debug Genkit AI flows.",
        icon: <Bot className="h-8 w-8 text-primary" />,
        href: "/dashboard/developer/flow-tester",
    },
    {
        title: "Component Showcase",
        description: "Visual library of all UI components.",
        icon: <Palmtree className="h-8 w-8 text-primary" />,
        href: "/dashboard/developer/component-showcase",
    },
]

export default function DeveloperPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline text-primary">Developer Zone</h1>
        <p className="text-muted-foreground">Tools and utilities for building and testing Opulex.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {devFeatures.map((feature) => (
            <Link href={feature.href} key={feature.href}>
                <Card className="bg-secondary/50 border-primary/20 hover:border-primary/40 transition-all h-full">
                    <CardHeader className="flex-row items-center gap-4">
                        {feature.icon}
                        <CardTitle className="font-headline">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                </Card>
            </Link>
        ))}
      </div>
    </div>
  );
}
