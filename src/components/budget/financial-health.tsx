
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from "recharts"
import { AlertTriangle } from "lucide-react"

const agingData: any[] = []

const FinancialHealth = () => {
  const isAgingAlert = agingData.some(d => d.balance < 0);

  return (
    <Card className="bg-card border-primary/20">
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
            {isAgingAlert && (
              <div className="p-3 bg-red-900/40 border border-destructive/50 rounded-lg text-sm mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  <p>
                      <span className="font-bold">Alert:</span> Your January income was fully spent by Feb 25. Consider building an emergency buffer.
                  </p>
              </div>
            )}
            <div className="h-[250px] w-full">
              {agingData.length > 0 ? (
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
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  <p>Not enough data to show money aging yet.</p>
                </div>
              )}
            </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default FinancialHealth
