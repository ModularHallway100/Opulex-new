
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Database, Bot, Palmtree, LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const devNavItems = [
    { href: '/dashboard/developer', icon: <LayoutDashboard />, label: 'Overview' },
    { href: '/dashboard/developer/data-seeder', icon: <Database />, label: 'Data Seeder' },
    { href: '/dashboard/developer/flow-tester', icon: <Bot />, label: 'Flow Tester' },
    { href: '/dashboard/developer/component-showcase', icon: <Palmtree />, label: 'Component Showcase' },
];

const DeveloperSidebarLink = ({ href, icon, label }: { href: string, icon: React.ReactElement, label: string }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} passHref>
            <Button
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                    "w-full justify-start",
                    isActive && "bg-primary/10 text-primary"
                )}
            >
                {React.cloneElement(icon, { className: "mr-2 h-4 w-4" })}
                <span>{label}</span>
            </Button>
        </Link>
    );
};

const DeveloperSidebar = () => {
    return (
        <aside className="hidden md:flex flex-col w-56 bg-secondary/50 border-primary/20 rounded-lg p-4 h-fit">
            <nav className="flex-1 space-y-2">
                {devNavItems.map((item) => (
                    <DeveloperSidebarLink key={item.href} {...item} />
                ))}
            </nav>
        </aside>
    );
};

export default DeveloperSidebar;
