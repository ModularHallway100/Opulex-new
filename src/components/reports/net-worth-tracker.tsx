"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { netWorthData, assets, liabilities } from "@/lib/reports-data"
import { TrendingUp, TrendingDown, Info } from "lucide-react"

const NetWorthTracker = () => {
    const currentNetWorth = netWorthData[netWorthData.length - 1].netWorth;
  return (
    <Card className="bg-secondary/50 border-primary/20 mt-4">
      <CardHeader>
         <div className="flex justify-between items-start">
            <div>
                <CardTitle className="text-xl font-headline">Net Worth Tracker</CardTitle>
                <CardDescription>Monitor the growth of your assets and liabilities over time.</CardDescription>
            </div>
            <div className="text-right">
                <p className="text-muted-foreground text-sm">Current Net Worth</p>
                <p className="text-3xl font-bold text-primary">${currentNetWorth.toLocaleString()}</p>
            </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
                <Card className="bg-background/40 h-full">
                     <CardHeader>
                        <CardTitle className="text-lg font-headline">Net Worth Over Time</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={netWorthData}>
                            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(value) => `$${value/1000}k`} />
                            <Tooltip 
                                contentStyle={{ 
                                    backgroundColor: 'hsl(var(--background))', 
                                    borderColor: 'hsl(var(--border))',
                                    borderRadius: 'var(--radius)',
                                }}
                            />
                            <Legend wrapperStyle={{fontSize: "12px"}}/>
                            <Area type="monotone" dataKey="assets" stackId="1" stroke="#2563eb" fill="#2563eb" name="Assets" />
                            <Area type="monotone" dataKey="liabilities" stackId="1" stroke="#dc2626" fill="#dc2626" name="Liabilities" />
                            <Area type="monotone" dataKey="netWorth" stackId="2" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" name="Net Worth" />
                            </AreaChart>
                        </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="space-y-4">
                 <Card className="bg-background/40">
                    <CardHeader>
                        <CardTitle className="text-base">Assets</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <Table>
                            <TableBody>
                                {assets.map(asset => (
                                    <TableRow key={asset.name}>
                                        <TableCell>{asset.name}</TableCell>
                                        <TableCell className="text-right font-mono">${asset.value.toLocaleString()}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                         </Table>
                    </CardContent>
                 </Card>
                  <Card className="bg-background/40">
                    <CardHeader>
                        <CardTitle className="text-base">Liabilities</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <Table>
                            <TableBody>
                                {liabilities.map(lia => (
                                    <TableRow key={lia.name}>
                                        <TableCell>{lia.name}</TableCell>
                                        <TableCell className="text-right font-mono text-red-500">(${Math.abs(lia.value).toLocaleString()})</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                         </Table>
                    </CardContent>
                 </Card>
                  <div className="p-3 bg-blue-900/40 border border-blue-500/50 rounded-lg text-sm flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-400" />
                    <p>
                        <span className="font-bold">Projection:</span> Your net worth is projected to reach $38,000 in 6 months.
                    </p>
                </div>
            </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default NetWorthTracker
