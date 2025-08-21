import Link from 'next/link'
import { Home, BarChart2, Wallet, Settings, LogOut, PiggyBank, Receipt, Target, Bell, Users, Briefcase } from 'lucide-react'
import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'

const navItems = [
  { href: '/dashboard', icon: <Home />, label: 'Dashboard' },
  { href: '/dashboard/budget', icon: <PiggyBank />, label: 'Budget' },
  { href: '/dashboard/transactions', icon: <Receipt />, label: 'Transactions' },
  { href: '/dashboard/goals', icon: <Target />, label: 'Goals' },
  { href: '/dashboard/reports', icon: <BarChart2 />, label: 'Reports' },
  { href: '/dashboard/portfolio', icon: <Briefcase />, label: 'Portfolio' },
  { href: '/dashboard/notifications', icon: <Bell />, label: 'Notifications' },
  { href: '/dashboard/accounts', icon: <Wallet />, label: 'Accounts' },
  { href: '/dashboard/family', icon: <Users />, label: 'Family' },
]

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen px-4 py-8 bg-secondary border-r border-border/40">
      <div className="flex items-center justify-center mb-12">
        <Link href="/dashboard">
            <Logo />
        </Link>
      </div>
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href} passHref>
            <Button variant="ghost" className="w-full justify-start text-base py-6">
                {React.cloneElement(item.icon, { key: item.href + '-icon' })}
                <span>{item.label}</span>
            </Button>
          </Link>
        ))}
      </nav>
       <div className="mt-auto">
        <Link href="/dashboard/settings" key="/dashboard/settings" passHref>
            <Button variant="ghost" className="w-full justify-start text-base py-6">
                <Settings />
                <span>Settings</span>
            </Button>
        </Link>
         <Link href="/" key="/" passHref>
            <Button variant="ghost" className="w-full justify-start text-base py-6">
                <LogOut />
                <span>Sign Out</span>
            </Button>
         </Link>
      </div>
    </aside>
  )
}

export default Sidebar