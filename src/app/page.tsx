import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Features from '@/components/landing/features';
import Testimonials from '@/components/landing/testimonials';
import LeadCapture from '@/components/landing/lead-capture';
import Footer from '@/components/landing/footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-background text-foreground">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Black marble background with gold veins"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="absolute inset-0 -z-10 opacity-20"
        data-ai-hint="black marble gold"
      />
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Testimonials />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  );
}
