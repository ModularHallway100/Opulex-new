"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from "recharts"
import { AlertTriangle } from "lucide-react"

const agingData = [
  { name: "Feb 1", income: 5000, expenses: 0, balance: 5000 },
  { name: "Feb 8", income: 0, expenses: 1200, balance: 3800 },
  { name: "Feb 15", income: 0, expenses: 500, balance: 3300 },
  { name: "Feb 22", income: 0, expenses: 800, balance: 2500 },
  { name: "Feb 28", income: 0, expenses: 2600, balance: -100 },
  { name: "Mar 1", income: 5000, expenses: 0, balance: 4900 },
]

const FinancialHealth = () => {
  return (
    <Card className="bg-secondary/50 border-primary/20">
      <CardHeader>
        <CardTitle className="text-xl font-headline">Financial Health Tools</CardTitle>
        <CardDescription>Advanced tools to help you get ahead.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
          <Label htmlFor="rollover-funds" className="font-semibold">
            Roll over unspent funds to next month
          </Label>
          <Switch id="rollover-funds" />
        </div>

        <div>
            <h3 className="text-lg font-semibold mb-2 text-center">Aging Your Money</h3>
            <div className="p-3 bg-red-900/40 border border-destructive/50 rounded-lg text-sm mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <p>
                    <span className="font-bold">Alert:</span> Your January income was fully spent by Feb 25. Consider building an emergency buffer.
                </p>
            </div>
            <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={agingData}>
                        <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(value) => `$${value/1000}k`} />
                        <Tooltip 
                             contentStyle={{ 
                                backgroundColor: 'hsl(var(--background))', 
                                borderColor: 'hsl(var(--border))',
                                borderRadius: 'var(--radius)',
                            }}
                        />
                        <Legend wrapperStyle={{fontSize: "12px"}}/>
                        <Line type="monotone" dataKey="balance" name="Cash Flow" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4 }}/>
                        <ReferenceLine x="Feb 25" stroke="hsl(var(--destructive))" strokeDasharray="3 3">
                            <Label value="Funds Depleted" position="insideTop" fill="hsl(var(--destructive))" fontSize={12} />
                        </ReferenceLine>
                         <ReferenceLine y={0} stroke="hsl(var(--border))" strokeDasharray="3 3" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default FinancialHealth
