
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
import { Textarea } from "../ui/textarea";

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
    onClose();
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-headline text-primary">Transaction Filters</SheetTitle>
          <SheetDescription>
            Refine your view of the ledger with advanced filters.
          </SheetDescription>
        </SheetHeader>
        
        <div className="flex-1 space-y-6 py-4">
            <div className="space-y-3">
                <h4 className="text-sm font-semibold">Filter by Status</h4>
                <div className="flex gap-2">
                    {table.getColumn("category") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("category")}
                        title="Category"
                        options={categories}
                    />
                    )}
                    {table.getColumn("status") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("status")}
                        title="Status"
                        options={statuses}
                    />
                    )}
                </div>
            </div>

            <Separator />

            <div className="space-y-4">
                <h4 className="text-sm font-semibold">Auto-Categorization Rules</h4>
                 <div className="space-y-2">
                    <Label htmlFor="rule-merchant">If merchant contains...</Label>
                    <Input id="rule-merchant" placeholder="e.g., Starbucks" className="bg-secondary" />
                 </div>
                 <div className="space-y-2">
                    <Label htmlFor="rule-category">Then assign category...</Label>
                     {table.getColumn("category") && (
                        <DataTableFacetedFilter
                            column={table.getColumn("category")}
                            title="Category"
                            options={categories}
                        />
                    )}
                 </div>
                 <Button size="sm" variant="outline" className="w-full">+ Add Rule</Button>
            </div>
        </div>

        <SheetFooter>
          <Button variant="ghost" onClick={handleClear}>Clear All</Button>
          <Button onClick={onClose}>Apply Filters</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
