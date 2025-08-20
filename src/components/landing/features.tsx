import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, CalendarCheck, Globe } from 'lucide-react';

const features = [
  {
    icon: <BarChart className="w-12 h-12 text-primary" />,
    title: 'Real-Time Budget Overview',
    description: 'Monitor your spending and budgets with up-to-the-minute accuracy.',
  },
  {
    icon: <CalendarCheck className="w-12 h-12 text-primary" />,
    title: 'Automatic Subscription Tracking',
    description: 'Never lose track of recurring payments. We handle it for you automatically.',
  },
  {
    icon: <Globe className="w-12 h-12 text-primary" />,
    title: 'Global, Multi-Currency Support',
    description: 'Manage your finances across different currencies, wherever you are in the world.',
  },
];

const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <Card key={feature.title} className="bg-secondary/50 border-primary/10 transform transition-all duration-300 hover:scale-105 hover:border-primary/40 flex flex-col items-center text-center">
            <CardHeader className="flex flex-col items-center gap-4">
              {feature.icon}
              <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
              <CardDescription className="font-body text-base">{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
