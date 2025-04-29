
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import LoanCalculator from '@/components/LoanCalculator';
import Community from '@/components/Community';
import InvestSection from '@/components/InvestSection';
import FAQs from '@/components/FAQs';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <HowItWorks />
        <Testimonials />
        <LoanCalculator />
        <Community />
        <InvestSection />
        <FAQs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
