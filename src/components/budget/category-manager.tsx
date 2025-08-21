
"use client";

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Pencil, Trash2, PlusCircle, AlertTriangle, Gem } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface Category {
  id: string;
  name: string;
  allocated: number;
  aiSuggestion: number;
  isEssential?: boolean;
}

interface CategoryManagerProps {
  categories: Category[];
  totalIncome: number;
}

const getStatusColor = (allocated: number, suggestion: number) => {
    const diff = Math.abs(allocated - suggestion);
    const tolerance = suggestion * 0.1;
    if (diff <= tolerance) return 'bg-primary'; // Gold
    if (diff <= tolerance * 2) return 'bg-yellow-500'; // Amber
    return 'bg-destructive'; // Crimson
}

const CategoryManager = ({ categories: initialCategories, totalIncome }: CategoryManagerProps) => {
    const [categories, setCategories] = React.useState(initialCategories);

    const handleAllocationChange = (id: string, value: number[]) => {
        setCategories(prev => prev.map(cat => cat.id === id ? { ...cat, allocated: value[0] } : cat));
    };

    const handleInputChange = (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value.replace(/[^0-9]/g, ''));
        setCategories(prev => prev.map(cat => cat.id === id ? { ...cat, allocated: value } : cat));
    };

  return (
    <Card className="bg-secondary/50 border-primary/20">
      <CardHeader>
        <CardTitle className="text-xl font-headline">Spending Categories</CardTitle>
        <CardDescription>Allocate your income to different spending categories.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {categories.map((category) => {
          const statusColor = getStatusColor(category.allocated, category.aiSuggestion);
          let alertMessage = null;
          if (statusColor === 'bg-destructive') {
            alertMessage = `Critical: Allocation is significantly different from the AI suggestion of $${category.aiSuggestion}.`;
          } else if (statusColor === 'bg-yellow-500') {
            alertMessage = `Your allocation is off from the AI suggestion of $${category.aiSuggestion}.`;
          }
          
          return (
            <div key={category.id} className="space-y-3">
              <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                      <TooltipProvider>
                          <Tooltip>
                              <TooltipTrigger asChild>
                                <div className={`w-4 h-4 rounded-full ${statusColor} flex items-center justify-center`}>
                                    {statusColor === 'bg-primary' && <Gem className="h-2 w-2 text-primary-foreground" />}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="bg-background border-primary/30">
                                  <p>AI suggests budgeting ${category.aiSuggestion}.</p>
                                  {category.allocated < category.aiSuggestion && <p>You have allocated ${category.aiSuggestion - category.allocated} less.</p>}
                                  {category.allocated > category.aiSuggestion && <p>You have allocated ${category.allocated - category.aiSuggestion} more.</p>}
                              </TooltipContent>
                          </Tooltip>
                      </TooltipProvider>
                      <span className="font-semibold">{category.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                          <Pencil className="h-4 w-4" />
                      </Button>
                      {!category.isEssential && (
                          <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive hover:text-destructive">
                              <Trash2 className="h-4 w-4" />
                          </Button>
                      )}
                  </div>
              </div>
              <div className="flex items-center gap-4">
                <Slider
                  value={[category.allocated]}
                  max={totalIncome}
                  step={10}
                  onValueChange={(value) => handleAllocationChange(category.id, value)}
                  className="flex-1"
                />
                <div className="relative w-32">
                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                   <Input 
                      value={category.allocated.toLocaleString()}
                      onChange={(e) => handleInputChange(category.id, e)}
                      className="pl-6 font-mono"
                   />
                </div>
              </div>
              {alertMessage && (
                   <div className={`flex items-center gap-2 text-xs p-2 rounded-md ${
                     statusColor === 'bg-destructive' ? 'bg-destructive/20 text-destructive-foreground' : 'bg-yellow-900/20 text-yellow-400'
                   }`}>
                      <AlertTriangle className="h-4 w-4" />
                      <span>{alertMessage}</span>
                   </div>
              )}
            </div>
          )
        })}
        <div className="pt-4">
            <Button variant="outline" className="w-full">
                <PlusCircle className="mr-2" />
                Create New Category
            </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryManager;
