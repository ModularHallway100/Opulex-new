
"use client"

import { Bell, Search, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Logo from '@/components/logo'

const Header = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border/40 bg-card/80 px-4 md:px-6">
      <div className="flex items-center gap-4">
        {/* Hidden on larger screens, shown on mobile */}
        <div className="lg:hidden">
            <Logo />
        </div>
        <div className="hidden lg:block relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search transactions, bills..." className="pl-10 w-64 bg-background/50" />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
          <span className="sr-only">Profile</span>
        </Button>
      </div>
    </header>
  )
}

export default Header
