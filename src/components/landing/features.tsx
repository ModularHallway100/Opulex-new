import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BrainCircuit, ShieldCheck, TrendingUp, DollarSign, Target, Zap } from 'lucide-react';

const features = [
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: 'AI-Powered Insights',
    description: 'Leverage sophisticated algorithms to uncover market trends and opportunities tailored to your portfolio.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: 'Automated Risk Management',
    description: 'Our system continuously monitors and adjusts your positions to mitigate risks and protect your capital.',
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: 'Personalized Growth Strategies',
    description: 'Receive bespoke investment strategies that align with your financial goals and risk tolerance.',
  },
  {
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    title: 'Tax Optimization',
    description: 'Intelligently manage your assets to minimize tax liabilities and maximize your net returns.',
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: 'Goal-Oriented Tracking',
    description: 'Set and track financial milestones with clear visualizations and progress reports.',
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'Real-Time Execution',
    description: 'Seamlessly execute trades across multiple markets with speed and precision.',
  },
];

const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-headline text-primary">Core Features</h2>
        <p className="mt-4 text-lg text-muted-foreground font-body">
          Everything you need to build and manage your wealth intelligently.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <Card key={feature.title} className="bg-secondary border-primary/10 transform transition-all duration-300 hover:scale-105 hover:border-primary/40">
            <CardHeader className="flex flex-col items-start gap-4">
              {feature.icon}
              <CardTitle className="font-headline">{feature.title}</CardTitle>
              <CardDescription className="font-body text-base">{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
