"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Logo from '@/components/logo';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  code: z.string().min(6, { message: "Your code must be 6 digits." }).max(6),
});

export default function Verify2FAPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("2FA code:", values.code);
    // In a real app, handle 2FA verification logic here.
    // On success, redirect to dashboard.
    router.push('/dashboard');
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
        <Card className="bg-secondary border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl font-headline text-primary">Two-Factor Authentication</CardTitle>
            <CardDescription className="text-muted-foreground font-body">
              Enter the code from your authenticator app.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Verification Code</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="123456" 
                          {...field} 
                          maxLength={6}
                          className="text-center text-2xl tracking-[1em] font-mono"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Verify
                </Button>
              </form>
            </Form>
             <Button variant="link" className="w-full mt-4">Use another method</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
