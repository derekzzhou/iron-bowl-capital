
import React from 'react';
import { ClipboardCheck, FileText, CreditCard, BadgeCheck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "Simple Application",
      description: "Fill out our straightforward application form with basic information about yourself and your creative endeavors."
    },
    {
      icon: <ClipboardCheck className="h-12 w-12 text-primary" />,
      title: "Quick Review",
      description: "Our team evaluates your application and credit score to determine eligibility, typically within 2-3 business days."
    },
    {
      icon: <BadgeCheck className="h-12 w-12 text-primary" />,
      title: "Get Approved",
      description: "Receive your approval notification with details on your loan terms, amount, and repayment schedule."
    },
    {
      icon: <CreditCard className="h-12 w-12 text-primary" />,
      title: "Receive Funding",
      description: "Funds are deposited directly to your account, typically within 24 hours of finalizing your loan agreement."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">How It Works</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our streamlined process makes it easy to get the funding you need to pursue your creative passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm flex flex-col items-center text-center card-hover">
              <div className="mb-5 bg-primary-light/10 p-4 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              <div className="mt-4 bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center font-bold text-primary">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
