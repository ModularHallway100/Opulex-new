"use client";

interface PasswordStrengthProps {
    password?: string;
}

const PasswordStrength = ({ password = '' }: PasswordStrengthProps) => {
    const getStrength = () => {
        let score = 0;
        if (!password) return score;

        // Award points for different criteria
        if (password.length >= 8) score++;
        if (password.length >= 12) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        return score;
    };

    const strength = getStrength();
    const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
    const strengthColors = ['bg-destructive', 'bg-destructive', 'bg-yellow-500', 'bg-green-500', 'bg-green-700'];

    if (!password) return null;

    return (
        <div className="flex items-center gap-2 text-xs mt-2">
            <div className="w-full bg-muted rounded-full h-2">
                <div 
                    className={`h-2 rounded-full transition-all ${strengthColors[strength - 1] || ''}`} 
                    style={{ width: `${(strength / 5) * 100}%` }}
                />
            </div>
            <span className="text-muted-foreground">{strengthLabels[strength - 1]}</span>
        </div>
    );
};

export default PasswordStrength;
