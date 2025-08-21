import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Gem, Globe, DollarSign } from 'lucide-react';

const heroFeatures = [
    {
        icon: <DollarSign className="h-10 w-10 text-primary" />,
        title: "Wealth Overview",
        description: "See all your assets and spending at a glance."
    },
    {
        icon: <Gem className="h-10 w-10 text-primary" />,
        title: "Intelligent Wealth Tracking",
        description: "AI-driven insights to keep you ahead."
    },
    {
        icon: <Globe className="h-10 w-10 text-primary" />,
        title: "Global Reach",
        description: "Multi-currency mastery, anywhere in the world."
    }
]

const Hero = () => {
  return (
    <section className="relative text-center py-20 px-6 bg-secondary/20 overflow-hidden">
      <div className="absolute inset-0 bg-black/80 z-10">
          <div className="absolute inset-0 opacity-20 animate-pulse">
            {/* Golden threads effect */}
            <div className="absolute top-0 left-1/4 w-1 h-full bg-primary/50 transform -skew-x-12"></div>
            <div className="absolute top-0 left-1/2 w-px h-full bg-primary/50 transform skew-x-12"></div>
            <div className="absolute top-0 left-3/4 w-0.5 h-full bg-primary/50 transform -skew-x-12"></div>
             <div className="absolute bottom-0 right-1/4 w-1 h-full bg-primary/50 transform skew-x-12"></div>
          </div>
      </div>
      <div className="relative z-20 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary mb-4">
            Opulex – The Game of Wealth Mastery
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Command your money. Conquer your goals. Live in luxury.
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {heroFeatures.map((feature) => (
                <Card key={feature.title} className="bg-background/40 border-primary/20 text-center">
                    <CardHeader className="items-center">
                        {feature.icon}
                        <CardTitle className="font-headline text-xl mt-4">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
