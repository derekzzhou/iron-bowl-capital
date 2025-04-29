
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, Users, HandCoins } from 'lucide-react';

const InvestSection = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Competitive Returns",
      description: "Earn attractive financial returns while making a meaningful impact in the creative community."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Risk Management",
      description: "Our thorough vetting process and credit checks help ensure responsible lending decisions."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Community Impact",
      description: "Support underrepresented creators and help build a thriving Asian American creative ecosystem."
    },
    {
      icon: <HandCoins className="h-10 w-10 text-primary" />,
      title: "Transparent Processes",
      description: "Clear reporting and updates on your investment performance and community impact."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              <span className="title-gradient">Invest</span> in creative futures
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Join our community of investors who are fueling the next generation of Asian American creators while earning competitive returns.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Your investment helps provide crucial funding for talented individuals pursuing non-traditional creative careers, creating both social and financial returns.
            </p>
            <Button className="bg-primary hover:bg-primary-dark text-white">
              <Link to="/invest" className="flex items-center">
                Become an Investor
              </Link>
            </Button>
          </div>

          <div className="lg:w-1/2 mt-10 lg:mt-0 grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white shadow-sm rounded-lg p-6 card-hover">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestSection;
