
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ApplyForm from '@/components/ApplyForm';

const Apply = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Apply for a Microloan</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Take the first step toward growing your creative career with a loan designed for Asian American creators.
            </p>
          </div>
          
          <ApplyForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Apply;
