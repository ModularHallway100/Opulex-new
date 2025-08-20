import { Button } from '@/components/ui/button';
import { Gem, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
            <a href="#" className="flex items-center gap-2 justify-center md:justify-start">
              <Gem className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg font-headline">Opulex</span>
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
