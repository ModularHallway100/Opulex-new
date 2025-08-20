import Features from '@/components/landing/features';
import Footer from '@/components/landing/footer';
import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import LeadCapture from '@/components/landing/lead-capture';
import Testimonials from '@/components/landing/testimonials';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Testimonials />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  );
}
