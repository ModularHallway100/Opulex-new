"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
});

const LeadCapture = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('Lead captured:', values);
    setSubmitted(true);
  }

  return (
    <section id="lead-capture" className="container py-24 sm:py-32">
      <Card className="max-w-2xl mx-auto bg-secondary border-primary/20 shadow-lg shadow-primary/5">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-headline text-primary">Join the Waitlist</CardTitle>
          <CardDescription className="text-lg text-muted-foreground font-body">
            Be the first to experience the future of wealth management. Sign up for exclusive early access.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {submitted ? (
            <div className="text-center p-8 bg-background/50 rounded-lg">
                <Check className="mx-auto h-16 w-16 text-green-500 bg-green-500/10 rounded-full p-2 mb-4" />
                <h3 className="text-2xl font-headline">Thank You!</h3>
                <p className="text-muted-foreground mt-2">You're on the list! We'll be in touch soon with your exclusive invitation.</p>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="py-6 text-lg" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john.doe@email.com" {...field} className="py-6 text-lg" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full font-bold text-lg py-6" size="lg">
                  Secure My Spot
                </Button>
              </form>
            </Form>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export default LeadCapture;
