import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-border/40">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Opulex. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
