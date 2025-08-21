import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';

const Header = () => {
  return (
    <header className="py-4 px-6 md:px-12 flex justify-between items-center">
      <Logo />
      <nav className="flex items-center gap-4">
        <Link href="/signin" passHref>
          <Button variant="ghost">Sign In</Button>
        </Link>
        <Link href="/signup" passHref>
          <Button>Get Started</Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
