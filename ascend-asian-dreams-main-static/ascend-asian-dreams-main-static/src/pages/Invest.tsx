
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InvestForm from '@/components/InvestForm';

const Invest = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Invest in Creative Futures</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Join our community of investors supporting the next generation of Asian American creators.
            </p>
          </div>
          
          <div className="mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm mb-16">
              <h2 className="text-2xl font-bold mb-6 font-serif">Why Invest With Us</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-xl mb-3">Financial Returns</h3>
                  <p className="text-gray-700">Our loan portfolio has historically yielded 7-10% annual returns, outperforming many traditional investment vehicles.</p>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-xl mb-3">Social Impact</h3>
                  <p className="text-gray-700">Your investment directly supports underrepresented creators, helping build a more diverse creative economy.</p>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-xl mb-3">Risk Management</h3>
                  <p className="text-gray-700">Our thorough vetting process and credit checks ensure a loan repayment rate of over 95%.</p>
                </div>
              </div>
            </div>
            
            <InvestForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Invest;
