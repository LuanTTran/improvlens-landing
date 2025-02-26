import { Metadata } from 'next';
import Header from '@/app/sections/Header';
import Hero from '@/app/sections/Hero';
import Features from '@/app/sections/Features';
import HowItWorks from '@/app/sections/HowItWorks';
import AppShowcase from '@/app/sections/AppShowcase';
import FAQ from '@/app/sections/FAQ';
import Download from '@/app/sections/Download';
import Footer from '@/app/sections/Footer';

export const metadata: Metadata = {
  title: 'ImprovLens - Transform Your Event Photography Experience',
  description: 'ImprovLens helps event hosts and guests seamlessly capture, share, and enjoy every moment of your special events.',
  openGraph: {
    title: 'ImprovLens - Transform Your Event Photography Experience',
    description: 'ImprovLens helps event hosts and guests seamlessly capture, share, and enjoy every moment of your special events.',
    images: ['/og-image.png'],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a1a] to-[#1a1a3a] text-white">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <AppShowcase />
      <FAQ />
      <Download />
      <Footer />
    </main>
  );
}
