
'use client';
import React, { useEffect } from 'react';
import Sidebar from '@/components/dashboard/sidebar';
import Header from '@/components/dashboard/header';
import ChatWidget from '@/components/chatbot/chat-widget';
import ParticleField from '@/components/dashboard/particle-field';
import { useAuthContext } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { KeyRound } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    // If loading is finished and there's no user, redirect to signin.
    if (!loading && !user) {
      router.push('/signin');
    }
  }, [loading, user, router]);

  // While loading, show the loading screen.
  if (loading) {
    return (
       <div className="flex items-center justify-center min-h-screen bg-background">
          <div className="gate-unlock-overlay">
              <KeyRound className="gate-unlock-key" />
          </div>
       </div>
    );
  }

  // If loading is finished and there is a user, render the dashboard.
  if (user) {
      return (
        <div className="flex h-screen bg-background">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden relative">
            <ParticleField />
            <div className="relative z-10 flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-transparent p-4 sm:p-6 lg:p-8">
                {children}
                </main>
                <ChatWidget />
            </div>
          </div>
        </div>
      );
  }
  
  // If loading is finished and there is no user, useEffect will handle the redirect.
  // Return null to avoid rendering anything while the redirect happens.
  return null;
}
