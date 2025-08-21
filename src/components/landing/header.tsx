import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';

const Header = () => {
  return (
    <header className="py-4 px-6 md:px-12 flex justify-between items-center absolute top-0 left-0 w-full z-30">
      <Logo />
      <nav className="flex items-center gap-4">
        <Link href="/signin" passHref>
          <Button variant="outline">Log In</Button>
        </Link>
        <Link href="/signup" passHref>
          <Button>Enter the Vault</Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
