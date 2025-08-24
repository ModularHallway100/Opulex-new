
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PiggyBank, Target, BarChart2, Bot, Users, Shield } from 'lucide-react';

const features = [
  {
    icon: <PiggyBank className="h-10 w-10 text-primary" />,
    title: 'AI-Powered Budgeting',
    description: 'Let our intelligent system categorize expenses, find savings, and create a budget that works for you.',
  },
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: 'Gamified Goals',
    description: 'Turn your financial goals into exciting quests and unlock achievements on your path to wealth.',
  },
  {
    icon: <BarChart2 className="h-10 w-10 text-primary" />,
    title: 'Visual Reports',
    description: 'Understand your financial health at a glance with beautiful, interactive charts and insights.',
  },
   {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: 'Personal AI Assistant',
    description: 'Your 24/7 financial guide is always ready to answer questions and provide proactive advice.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Collaborative Budgeting',
    description: 'Manage shared finances with family or partners seamlessly with role-based permissions.',
  },
   {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: 'Bank-Level Security',
    description: 'Your data is protected with end-to-end encryption and two-factor authentication.',
  },
];

const Features = () => {
  return (
    <section className="py-20 px-6 bg-card/50">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-headline font-bold mb-4">Your Arsenal for Financial Victory</h2>
        <p className="text-muted-foreground mb-12">
          Opulex equips you with every tool you need to master your money, from intelligent budgeting to collaborative planning.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature) => (
          <Card key={feature.title} className="bg-background/40 border-primary/20 text-center hover:shadow-primary/20 hover:shadow-lg transition-shadow">
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
    </section>
  );
};

export default Features;
