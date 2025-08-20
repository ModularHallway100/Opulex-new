import Link from 'next/link'
import { Home, BarChart2, Wallet, Settings, LogOut, PiggyBank, Receipt, Target } from 'lucide-react'
import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'

const navItems = [
  { href: '/dashboard', icon: <Home />, label: 'Dashboard' },
  { href: '/dashboard/budget', icon: <PiggyBank />, label: 'Budget' },
  { href: '/dashboard/transactions', icon: <Receipt />, label: 'Transactions' },
  { href: '/dashboard/goals', icon: <Target />, label: 'Goals' },
  { href: '/dashboard/reports', icon: <BarChart2 />, label: 'Reports' },
  { href: '/dashboard/accounts', icon: <Wallet />, label: 'Accounts' },
  { href: '/dashboard/settings', icon: <Settings />, label: 'Settings' },
]

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen px-4 py-8 bg-secondary border-r border-border/40">
      <div className="flex items-center justify-center mb-12">
        <Link href="/dashboard" passHref>
            <Logo />
        </Link>
      </div>
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} passHref>
            <Button variant="ghost" className="w-full justify-start text-base py-6">
                {item.icon}
                {item.label}
            </Button>
          </Link>
        ))}
      </nav>
       <div>
         <Link href="/" passHref>
            <Button variant="ghost" className="w-full justify-start text-base py-6">
                <LogOut />
                Sign Out
            </Button>
         </Link>
      </div>
    </aside>
  )
}

export default Sidebar
