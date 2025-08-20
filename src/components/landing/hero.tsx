"use client";

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Hero = () => {
  const tiers = [
    {
      name: 'Essential',
      price: '$19/mo',
      features: ['Core Portfolio Tracking', 'Basic Analytics', 'Community Access'],
    },
    {
      name: 'Premium',
      price: '$49/mo',
      features: ['Advanced AI Insights', 'Tax Optimization', 'Priority Support'],
    },
    {
      name: 'Elite',
      price: 'Contact Us',
      features: ['Personalized Strategies', 'Dedicated Advisor', 'Exclusive Market Access'],
    },
  ];

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-headline">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-primary via-amber-200 to-primary bg-clip-text text-transparent">
              Intelligent
            </span>{' '}
            Wealth Management
          </h1>{' '}
          for the Modern Investor
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 font-body">
          Opulex combines cutting-edge AI with expert financial strategies to help you navigate the complexities of the market and grow your wealth with confidence.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button className="w-full md:w-1/3 group font-bold text-lg p-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Early Access <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-96 p-0 border-primary/20 bg-card/50 backdrop-blur-lg">
                <Card className="border-none bg-transparent">
                  <CardHeader>
                    <CardTitle className="font-headline text-primary">Subscription Tiers</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {tiers.map((tier) => (
                      <div key={tier.name}>
                        <h3 className="font-bold font-headline">{tier.name} - <span className="text-primary">{tier.price}</span></h3>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                          {tier.features.map(feature => (
                            <li key={feature} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </CardContent>
                </Card>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      
      {/* Placeholder for a 3D graphic or animation */}
      <div className="w-full h-96 rounded-lg bg-secondary flex items-center justify-center">
          <div className="text-muted-foreground">
              Visual representation of financial growth
          </div>
      </div>

    </section>
  );
};

export default Hero;
