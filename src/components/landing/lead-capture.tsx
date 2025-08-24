
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const LeadCapture = () => {
  return (
    <section className="py-20 px-6 bg-card/50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-headline font-bold mb-4">Begin Your Ascent</h2>
        <p className="text-muted-foreground mb-8">
          Join the waitlist and be among the first to gain access to Opulex. The journey to wealth mastery begins now.
        </p>
        <form className="flex w-full max-w-md mx-auto items-center space-x-2">
          <Input type="email" placeholder="Enter your email" className="h-12" />
          <Button type="submit" size="lg">Join Waitlist</Button>
        </form>
      </div>
    </section>
  );
};

export default LeadCapture;
