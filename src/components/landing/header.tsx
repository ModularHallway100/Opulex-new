import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Logo />
        </a>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <a href="#lead-capture">Get Early Access</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
