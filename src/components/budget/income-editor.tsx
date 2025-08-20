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
import { X } from "lucide-react";

interface IncomeEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const incomeSources = [
    { id: 'salary', name: 'Salary', amount: 4500 },
    { id: 'side-gig', name: 'Side Gig', amount: 500 },
    { id: 'investments', name: 'Investment Income', amount: 0 },
];

const IncomeEditorModal = ({ isOpen, onClose }: IncomeEditorModalProps) => {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-secondary border-primary/20">
        <DialogHeader>
          <DialogTitle className="font-headline text-primary">Edit Income</DialogTitle>
          <DialogDescription>
            Adjust your total monthly income sources here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {incomeSources.map(source => (
            <div key={source.id} className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={source.id} className="text-right">
                {source.name}
              </Label>
              <Input id={source.id} defaultValue={`$${source.amount.toLocaleString()}`} className="col-span-3" />
            </div>
          ))}
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
