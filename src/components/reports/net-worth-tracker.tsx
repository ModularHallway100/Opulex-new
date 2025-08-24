
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { netWorthData, assets, liabilities } from "@/lib/reports-data"
import { TrendingUp, TrendingDown, Info, Bot } from "lucide-react"

const NetWorthTracker = () => {
    const currentNetWorth = netWorthData.length > 0 ? netWorthData[netWorthData.length - 1].netWorth : 0;
    
    const isEmpty = netWorthData.length === 0 && assets.length === 0 && liabilities.length === 0;

  return (
    <Card className="bg-card mt-4">
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
        {isEmpty ? (
            <div className="text-center py-10 text-muted-foreground">
                <Bot className="h-12 w-12 mx-auto mb-4 text-primary/50" />
                <p className="font-semibold">No Net Worth Data</p>
                <p className="text-sm">Link financial accounts to start tracking your net worth.</p>
            </div>
        ) : (
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
                                <defs>
                                    <linearGradient id="colorNetWorth" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                                    </linearGradient>
                                    <linearGradient id="colorAssets" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="hsl(var(--secondary-foreground))" stopOpacity={0.3}/>
                                        <stop offset="95%" stopColor="hsl(var(--secondary-foreground))" stopOpacity={0}/>
                                    </linearGradient>
                                    <linearGradient id="colorLiabilities" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.3}/>
                                        <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
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
                                <Area type="monotone" dataKey="assets" stackId="1" stroke="hsl(var(--secondary-foreground))" fill="url(#colorAssets)" name="Assets" />
                                <Area type="monotone" dataKey="liabilities" stackId="1" stroke="hsl(var(--destructive))" fill="url(#colorLiabilities)" name="Liabilities" />
                                <Area type="monotone" dataKey="netWorth" stackId="2" stroke="hsl(var(--primary))" fill="url(#colorNetWorth)" name="Net Worth" />
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
                    {netWorthData.length > 1 && (
                        <div className="p-3 bg-blue-900/40 border border-blue-500/50 rounded-lg text-sm flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-blue-400" />
                            <p>
                                <span className="font-bold">Projection:</span> Your net worth is projected to reach ${ (currentNetWorth * 1.1).toLocaleString() } in 6 months.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        )}
      </CardContent>
    </Card>
  )
}

export default NetWorthTracker
