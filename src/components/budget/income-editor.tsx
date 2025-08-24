
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { PlusCircle, X } from "lucide-react";

interface IncomeSource {
  id: string;
  name: string;
  amount: number;
}

interface IncomeEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSources?: IncomeSource[];
}

const IncomeEditorModal = ({ isOpen, onClose, initialSources = [] }: IncomeEditorModalProps) => {
  const [sources, setSources] = useState(initialSources);

  const handleAddSource = () => {
    setSources([...sources, { id: `new-${Date.now()}`, name: '', amount: 0 }]);
  }

  const handleRemoveSource = (id: string) => {
    setSources(sources.filter(s => s.id !== id));
  }

  const handleUpdate = (id: string, key: 'name' | 'amount', value: string | number) => {
    setSources(sources.map(s => s.id === id ? { ...s, [key]: value } : s));
  }

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-card border-primary/20">
        <DialogHeader>
          <DialogTitle className="font-headline text-primary">Edit Income</DialogTitle>
          <DialogDescription>
            Adjust your total monthly income sources here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {sources.length > 0 ? sources.map(source => (
            <div key={source.id} className="grid grid-cols-6 items-center gap-2">
              <Input
                id={`${source.id}-name`}
                value={source.name}
                placeholder="Source Name"
                onChange={(e) => handleUpdate(source.id, 'name', e.target.value)}
                className="col-span-3"
              />
              <div className="relative col-span-2">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id={`${source.id}-amount`}
                  type="number"
                  value={source.amount}
                  onChange={(e) => handleUpdate(source.id, 'amount', Number(e.target.value))}
                  className="pl-6"
                />
              </div>
              <Button variant="ghost" size="icon" onClick={() => handleRemoveSource(source.id)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          )) : (
            <p className="text-center text-sm text-muted-foreground py-4">No income sources added yet.</p>
          )}

          <Button variant="outline" onClick={handleAddSource}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Income Source
          </Button>

        </div>
        <DialogFooter>
            <DialogClose asChild>
                <Button type="button" variant="secondary">
                    Cancel
                </Button>
            </DialogClose>
            <Button type="submit" onClick={onClose}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default IncomeEditorModal;
