
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from '@/context/auth-context';
import { roboto, plusJakartaSans } from './fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Opulex - Take Control of Your Money with AI',
  description: 'AI-driven budgeting, subscription tracking, and global, multi-currency support.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn("font-body antialiased", roboto.variable, plusJakartaSans.variable)}>
        <AuthProvider>
            {children}
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
