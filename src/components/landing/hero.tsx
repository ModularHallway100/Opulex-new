import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="text-center py-20 px-6">
      <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary mb-4">
        Opulex – The Game of Wealth Mastery
      </h1>
      <p className="text-xl md:text-2xl text-foreground mb-8">
        “Command your money. Conquer your goals. Live in luxury.”
      </p>
       <p className="max-w-3xl mx-auto text-muted-foreground mb-12">
        Opulex isn’t just a budgeting tool — it’s your personal wealth command center, dressed in premium design, infused with AI intelligence, and wrapped in a gamified experience that turns financial discipline into an adventure. Every screen is a step along your Golden Path to Financial Freedom.
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/signup" passHref>
          <Button size="lg">Begin Your Journey</Button>
        </Link>
      </div>
       <div className="relative mt-16 w-full max-w-5xl mx-auto">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/10 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <Image
          src="https://placehold.co/1200x600.png"
          alt="Opulex Dashboard Preview"
          width={1200}
          height={600}
          className="rounded-lg shadow-2xl mx-auto"
          data-ai-hint="dashboard finance"
        />
      </div>
    </section>
  );
};

export default Hero;
