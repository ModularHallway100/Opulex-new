
"use client";

import React from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { Home, BarChart2, Wallet, Settings, LogOut, PiggyBank, Receipt, Target, Bell, Users, Briefcase, Code } from 'lucide-react'
import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import { useAuth, useAuthContext } from '@/context/auth-context';

const navItems = [
  { href: '/dashboard', icon: <Home />, label: 'Dashboard' },
  { href: '/dashboard/budget', icon: <Wallet />, label: 'Budget' },
  { href: '/dashboard/transactions', icon: <Receipt />, label: 'Transactions' },
  { href: '/dashboard/subscriptions', icon: <Receipt />, label: 'Subscriptions' },
  { href: '/dashboard/goals', icon: <Target />, label: 'Goals' },
  { href: '/dashboard/reports', icon: <BarChart2 />, label: 'Reports' },
  { href: '/dashboard/portfolio', icon: <Briefcase />, label: 'Portfolio' },
  { href: '/dashboard/accounts', icon: <Wallet />, label: 'Accounts' },
  { href: '/dashboard/notifications', icon: <Bell />, label: 'Notifications' },
  { href: '/dashboard/family', icon: <Users />, label: 'Family' },
]

const devNavItems = [
    { href: '/dashboard/developer', icon: <Code />, label: 'Developer Zone' },
]

const SidebarLink = ({ href, icon, label }: { href: string, icon: React.ReactElement, label: string }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} passHref>
            <Button 
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                    "w-full justify-start text-base py-6",
                    isActive && "bg-primary/10 text-primary border-primary/50 border"
                )}
            >
                {React.cloneElement(icon, { className: "mr-4" })}
                <span>{label}</span>
            </Button>
        </Link>
    );
}

const Sidebar = () => {
  const { signOut } = useAuth();
  const { user } = useAuthContext();
  const isDev = user?.email === 'dev@opulex.co' || user?.phoneNumber === '+10000000000';

  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen px-4 py-8 bg-secondary border-r border-border/40">
      <div className="flex items-center justify-center mb-12 h-10">
        <Link href="/dashboard">
            <Logo />
        </Link>
      </div>
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <SidebarLink key={item.href} {...item} />
        ))}
        {isDev && (
             <div className="pt-4 mt-4 border-t border-primary/20">
                {devNavItems.map((item) => (
                    <SidebarLink key={item.href} {...item} />
                ))}
            </div>
        )}
      </nav>
       <div className="mt-auto">
        <SidebarLink href="/dashboard/settings" icon={<Settings />} label="Settings" />
        <Button variant="ghost" className="w-full justify-start text-base py-6" onClick={signOut}>
            <LogOut className="mr-4" />
            <span>Sign Out</span>
        </Button>
      </div>
    </aside>
  )
}

export default Sidebar
