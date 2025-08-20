"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Logo from '@/components/logo';
import { Chrome } from "lucide-react";
import PasswordStrength from "@/components/password-strength";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});

export default function SignUpPage() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Sign up with:", values);
    // In a real app, handle sign-up logic here.
    // For this prototype, we'll navigate to the 2FA setup.
    router.push('/verify-2fa');
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
        <Card className="bg-secondary border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl font-headline text-primary">Get Started</CardTitle>
            <CardDescription className="text-muted-foreground font-body">
              Create an account to start managing your finances.
            </CardDescription>
          </CardHeader>
          <CardContent>
             <div className="grid grid-cols-2 gap-4 mb-6">
                <Button variant="outline"><Chrome className="mr-2 h-4 w-4" /> Google</Button>
                <Button variant="outline">Phone</Button>
            </div>

            <div className="flex items-center my-4">
                <div className="flex-grow border-t border-muted-foreground/20"></div>
                <span className="mx-4 text-xs uppercase text-muted-foreground">OR</span>
                <div className="flex-grow border-t border-muted-foreground/20"></div>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john.doe@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input 
                          type="password" 
                          placeholder="••••••••" 
                          {...field} 
                          onChange={(e) => {
                            field.onChange(e);
                            setPassword(e.target.value);
                          }}
                        />
                      </FormControl>
                      <PasswordStrength password={password} />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Create Account
                </Button>
              </form>
            </Form>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/signin" className="font-semibold text-primary hover:underline">
                Sign In
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
