
"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { categories, statuses } from "@/lib/transactions-data";
import { Table } from "@tanstack/react-table";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { PlusCircle } from "lucide-react";

interface DataTableFilterSheetProps<TData> {
  isOpen: boolean;
  onClose: () => void;
  table: Table<TData>;
}

export function DataTableFilterSheet<TData>({
  isOpen,
  onClose,
  table,
}: DataTableFilterSheetProps<TData>) {

  const handleClear = () => {
    table.resetColumnFilters();
    table.resetGlobalFilter();
    onClose();
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="flex flex-col bg-secondary border-primary/20">
        <SheetHeader>
          <SheetTitle className="font-headline text-primary">Advanced Filters</SheetTitle>
          <SheetDescription>
            Refine the Ledger with custom rules and filters.
          </SheetDescription>
        </SheetHeader>
        
        <div className="flex-1 space-y-6 py-4 overflow-y-auto">
            <div className="space-y-4">
                <h4 className="text-sm font-semibold text-muted-foreground">FILTER BY</h4>
                <div className="space-y-2">
                    <Label htmlFor="date-range">Date Range</Label>
                    <Select>
                        <SelectTrigger id="date-range">
                            <SelectValue placeholder="All time" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All time</SelectItem>
                            <SelectItem value="7d">Last 7 days</SelectItem>
                            <SelectItem value="30d">Last 30 days</SelectItem>
                            <SelectItem value="90d">Last 90 days</SelectItem>
                            <SelectItem value="custom">Custom Range</SelectItem>
                        </SelectContent>
                    </Select>
                 </div>
                 <div className="space-y-2">
                    <Label>Amount</Label>
                    <div className="flex gap-2">
                        <Input placeholder="Min amount" type="number" className="bg-background" />
                        <Input placeholder="Max amount" type="number" className="bg-background" />
                    </div>
                 </div>
            </div>

            <Separator />

            <div className="space-y-4">
                <h4 className="text-sm font-semibold text-muted-foreground">AUTO-CATEGORIZATION RULES</h4>
                 <div className="space-y-2">
                    <Label htmlFor="rule-merchant">If merchant contains...</Label>
                    <Input id="rule-merchant" placeholder="e.g., Starbucks" className="bg-background" />
                 </div>
                 <div className="space-y-2">
                    <Label htmlFor="rule-category">Then assign category...</Label>
                     <Select>
                        <SelectTrigger id="rule-category">
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map(cat => (
                                <SelectItem key={cat.value} value={cat.value}>
                                    <div className="flex items-center gap-2">
                                        <cat.icon className="h-4 w-4" />
                                        {cat.label}
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                 </div>
                 <Button size="sm" variant="outline" className="w-full">
                    <PlusCircle className="mr-2 h-4 w-4"/>
                    Add New Rule
                 </Button>
            </div>
        </div>

        <SheetFooter className="pt-4 border-t border-primary/20">
          <Button variant="ghost" onClick={handleClear}>Clear Filters</Button>
          <Button onClick={onClose}>Apply</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
