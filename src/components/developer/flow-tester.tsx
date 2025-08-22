
"use client"
import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Bot, Beaker, Zap } from "lucide-react"

const FlowTester = () => {
    const [selectedFlow, setSelectedFlow] = React.useState("");
    const [inputJson, setInputJson] = React.useState("");
    const [outputJson, setOutputJson] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

    const handleRunFlow = async () => {
        if (!selectedFlow || !inputJson) return;
        setIsLoading(true);
        setOutputJson("Running flow...");
        
        // In a real scenario, you'd have a server-side endpoint to call the Genkit flow
        // For now, we'll just simulate it.
        await new Promise(res => setTimeout(res, 1500));

        let result = {};
        if (selectedFlow === 'chatbotFlow') {
            try {
                const parsed = JSON.parse(inputJson);
                result = { response: `This is a simulated response to: "${parsed.prompt}"` };
            } catch (e) {
                result = { error: "Invalid JSON for chatbotFlow. Expected { \"prompt\": \"...\" }" };
            }
        } else if (selectedFlow === 'creditCoachFlow') {
             try {
                const parsed = JSON.parse(inputJson);
                result = { 
                    summary: `Simulated coaching summary for score ${parsed.score}.`,
                    recommendations: [
                        { title: "Recommendation 1", description: "This is a simulated recommendation." },
                        { title: "Recommendation 2", description: "Another simulated recommendation." }
                    ]
                 };
            } catch (e) {
                result = { error: "Invalid JSON for creditCoachFlow. Check schema." };
            }
        }

        setOutputJson(JSON.stringify(result, null, 2));
        setIsLoading(false);
    }


  return (
    <Card className="bg-secondary/50 border-primary/20">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Beaker className="h-6 w-6 text-primary" />
          <CardTitle className="text-xl font-headline">Genkit Flow Tester</CardTitle>
        </div>
        <CardDescription>Directly test and debug your Genkit AI flows.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <div className="space-y-2">
                <Label htmlFor="flow-select">Select Flow</Label>
                <Select onValueChange={setSelectedFlow} value={selectedFlow}>
                    <SelectTrigger id="flow-select">
                        <SelectValue placeholder="Select a flow to test..." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="chatbotFlow">chatbotFlow</SelectItem>
                        <SelectItem value="creditCoachFlow">creditCoachFlow</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Button onClick={handleRunFlow} disabled={!selectedFlow || !inputJson || isLoading}>
                <Zap className="mr-2 h-4 w-4" />
                {isLoading ? "Running..." : "Run Flow"}
            </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <Label htmlFor="input-json">Input (JSON)</Label>
                <Textarea 
                    id="input-json"
                    value={inputJson}
                    onChange={(e) => setInputJson(e.target.value)}
                    placeholder={'{\n  "prompt": "Hello, world!"\n}'}
                    className="h-48 font-mono bg-background"
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="output-json">Output (JSON)</Label>
                <Textarea 
                    id="output-json"
                    value={outputJson}
                    readOnly
                    placeholder="Flow output will appear here..."
                    className="h-48 font-mono bg-background/50"
                />
            </div>
        </div>
      </CardContent>
    </Card>
  )
}
export default FlowTester
