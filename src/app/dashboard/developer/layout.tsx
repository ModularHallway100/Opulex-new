
import React from 'react';
import DeveloperSidebar from '@/components/developer/developer-sidebar';

export default function DeveloperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-8">
      <DeveloperSidebar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
