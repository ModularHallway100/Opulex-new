"use client";

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Pencil, Trash2, PlusCircle, PiggyBank, AlertTriangle } from 'lucide-react';
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
}

const getStatusColor = (allocated: number, suggestion: number) => {
    if (allocated >= suggestion) return 'bg-green-500';
    if (allocated >= suggestion * 0.9) return 'bg-yellow-500';
    return 'bg-red-500';
}

const CategoryManager = ({ categories: initialCategories }: CategoryManagerProps) => {
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
        {categories.map((category) => (
          <div key={category.id} className="space-y-3">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className={React.useMemo(() => `w-3 h-3 rounded-full ${getStatusColor(category.allocated, category.aiSuggestion)}`, [category.allocated, category.aiSuggestion])} />
                            </TooltipTrigger>
                            <TooltipContent className="bg-background border-primary/30">
                                <p>AI suggests budgeting ${category.aiSuggestion}.</p>
                                {category.allocated < category.aiSuggestion && <p>You have allocated ${category.aiSuggestion - category.allocated} less.</p>}
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
                max={5000} // This should be dynamic based on total income
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
            {category.allocated < category.aiSuggestion * 0.9 && (
                 <div className="flex items-center gap-2 text-xs text-yellow-500/80 p-2 bg-yellow-900/20 rounded-md">
                    <AlertTriangle className="h-4 w-4" />
                    <span>Your allocation is significantly lower than the AI suggestion of ${category.aiSuggestion}.</span>
                 </div>
            )}
          </div>
        ))}
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
