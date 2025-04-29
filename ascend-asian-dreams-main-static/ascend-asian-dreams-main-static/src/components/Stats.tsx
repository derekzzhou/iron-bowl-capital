
import React from 'react';

const Stats = () => {
  return (
    <section className="py-12 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h4 className="text-3xl md:text-4xl font-bold mb-1">$2.5M+</h4>
            <p className="text-primary-foreground/80">Loans Funded</p>
          </div>
          
          <div className="text-center">
            <h4 className="text-3xl md:text-4xl font-bold mb-1">350+</h4>
            <p className="text-primary-foreground/80">Creators Supported</p>
          </div>
          
          <div className="text-center">
            <h4 className="text-3xl md:text-4xl font-bold mb-1">95%</h4>
            <p className="text-primary-foreground/80">Repayment Rate</p>
          </div>
          
          <div className="text-center">
            <h4 className="text-3xl md:text-4xl font-bold mb-1">12</h4>
            <p className="text-primary-foreground/80">U.S. States Covered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
