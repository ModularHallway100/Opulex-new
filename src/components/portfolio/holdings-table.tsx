
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { holdings } from "@/lib/portfolio-data"
import { ArrowUp, ArrowDown } from "lucide-react"

const HoldingsTable = () => {
    return (
        <Card className="bg-card border-primary/20">
            <CardHeader>
                <CardTitle className="text-xl font-headline">Your Holdings</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Asset</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Value</TableHead>
                            <TableHead className="text-right">24h Change</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {holdings.map((holding) => (
                            <TableRow key={holding.ticker}>
                                <TableCell>
                                    <div className="font-medium">{holding.name}</div>
                                    <div className="text-xs text-muted-foreground">{holding.ticker}</div>
                                </TableCell>
                                <TableCell>{holding.type}</TableCell>
                                <TableCell>{holding.quantity}</TableCell>
                                <TableCell className="font-mono">${holding.value.toLocaleString()}</TableCell>
                                <TableCell className="text-right">
                                    <div className={`flex items-center justify-end gap-1 ${holding.changePercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                        {holding.changePercent >= 0 ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                                        {Math.abs(holding.changePercent)}%
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default HoldingsTable
