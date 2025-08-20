"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="container text-center py-20 md:py-32">
      <div className="space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-headline bg-gradient-to-r from-primary via-amber-200 to-primary bg-clip-text text-transparent">
          Take Control of Your Money with AI—Anywhere, Anytime
        </h1>

        <p className="text-xl text-muted-foreground font-body">
          Opulex offers AI-driven budgeting, subscription tracking, and global, multi-currency support to help you master your finances.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button asChild size="lg" className="font-bold text-lg p-6">
            <Link href="/signup">Get Started</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-bold text-lg p-6">
            <Link href="/signin">Sign In</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
