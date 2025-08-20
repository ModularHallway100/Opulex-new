"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface PasswordStrengthProps {
  password?: string;
}

const PasswordStrength = ({ password = "" }: PasswordStrengthProps) => {
  const getStrength = (password: string) => {
    let score = 0;
    if (!password) return score;

    // Award every unique letter until 5 symbols
    const letters = new Set(password.split(""));
    score += Math.min(letters.size, 5) * 2;

    // Bonus points for mixing it up
    if (/[a-z]/.test(password)) score += 5;
    if (/[A-Z]/.test(password)) score += 5;
    if (/\d/.test(password)) score += 5;
    if (/[^a-zA-Z0-9]/.test(password)) score += 5;

    return Math.min(100, (score * 100) / 40);
  };

  const strength = getStrength(password);
  
  const strengthLabel =
    strength > 80
      ? "Strong"
      : strength > 50
      ? "Medium"
      : "Weak";
      
  const strengthColor =
    strength > 80
      ? "bg-green-500" // Use a success color
      : strength > 50
      ? "bg-primary" // Use the primary/warning color
      : "bg-destructive"; // Use a danger color

  if (!password) return null;

  return (
    <div className="space-y-2">
      <Progress value={strength} className={cn("h-2", strengthColor)} />
      <p className="text-xs text-right text-muted-foreground">{strengthLabel}</p>
    </div>
  );
};

export default PasswordStrength;
