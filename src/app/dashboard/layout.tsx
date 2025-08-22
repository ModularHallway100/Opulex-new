
'use client';
import React from 'react';
import Sidebar from '@/components/dashboard/sidebar';
import Header from '@/components/dashboard/header';
import ChatWidget from '@/components/chatbot/chat-widget';
import ParticleField from '@/components/dashboard/particle-field';
import { useAuthContext } from '@/context/auth-context';
import { KeyRound } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuthContext();

  // With auth disabled, we can simplify this.
  // We'll just show the dashboard directly.
  // The loading/user check is no longer strictly necessary but
  // is kept here for when you want to re-enable auth.

  if (loading) {
    return (
       <div className="flex items-center justify-center min-h-screen bg-background">
          <div className="gate-unlock-overlay">
              <KeyRound className="gate-unlock-key" />
          </div>
       </div>
    );
  }

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
