import React from 'react';
import Sidebar from '@/components/dashboard/sidebar';
import Header from '@/components/dashboard/header';
import ChatWidget from '@/components/chatbot/chat-widget';

const ParticleField = () => {
    // This component will only render on the client
    const [particles, setParticles] = React.useState<React.JSX.Element[]>([]);

    React.useEffect(() => {
        const newParticles = Array.from({ length: 50 }).map((_, i) => {
            const style = {
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDuration: `${Math.random() * 5 + 5}s`,
                animationDelay: `${Math.random() * 5}s`,
            };
            return <div key={i} className="particle" style={style}></div>;
        });
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent"></div>
            <div className="particle-field">
                {particles}
            </div>
        </div>
    )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
