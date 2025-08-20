import { Button } from '@/components/ui/button';
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import Logo from '@/components/logo';

const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
            <a href="#" className="flex items-center gap-2 justify-center md:justify-start">
              <Logo />
            </a>
            <p className="text-sm text-muted-foreground mt-2">
                © {new Date().getFullYear()} Opulex Inc. All rights reserved.
            </p>
        </div>
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Button>
            <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Button>
            <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
