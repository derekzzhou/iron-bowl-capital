
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { 
  FileText, 
  ClipboardCheck, 
  BadgeCheck, 
  CreditCard, 
  CheckCircle, 
  XCircle, 
  PieChart, 
  Search, 
  Users, 
  Clock 
} from 'lucide-react';

const HowItWorks = () => {
  const applicationSteps = [
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "1. Submit Application",
      description: "Fill out our straightforward online application with information about yourself, your creative work, and how you plan to use the funds."
    },
    {
      icon: <Search className="h-12 w-12 text-primary" />,
      title: "2. Credit Check",
      description: "We perform a soft credit check (which doesn't affect your score) to evaluate your eligibility."
    },
    {
      icon: <ClipboardCheck className="h-12 w-12 text-primary" />,
      title: "3. Application Review",
      description: "Our team reviews your application, considering your credit history, creative portfolio, and business plan."
    },
    {
      icon: <BadgeCheck className="h-12 w-12 text-primary" />,
      title: "4. Get Approved",
      description: "Upon approval, you'll receive your loan offer with clear terms and repayment schedule."
    },
    {
      icon: <CreditCard className="h-12 w-12 text-primary" />,
      title: "5. Receive Funding",
      description: "After accepting the terms, funds are transferred directly to your account, typically within 24-48 hours."
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "6. Join Our Community",
      description: "Gain access to our community of creators, resources, and events to help your creative career flourish."
    }
  ];

  const eligibilityCriteria = [
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      text: "Asian American heritage"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      text: "Working in a creative or non-traditional field (filmmaking, writing, content creation, etc.)"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      text: "Credit score of 640 or higher"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      text: "U.S. citizen or permanent resident"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      text: "At least 18 years of age"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      text: "Active portfolio or samples of creative work"
    }
  ];
  
  const ineligibilityCriteria = [
    {
      icon: <XCircle className="h-6 w-6 text-red-500" />,
      text: "Bankruptcy in the past 2 years"
    },
    {
      icon: <XCircle className="h-6 w-6 text-red-500" />,
      text: "Credit score below 640"
    },
    {
      icon: <XCircle className="h-6 w-6 text-red-500" />,
      text: "Loan intended for debt consolidation"
    }
  ];

  const loanDetails = [
    {
      title: "Loan Amounts",
      description: "$1,000 - $10,000",
      icon: <PieChart className="h-8 w-8 text-primary" />
    },
    {
      title: "Interest Rates",
      description: "5% - 15% APR",
      icon: <PieChart className="h-8 w-8 text-primary" />
    },
    {
      title: "Loan Terms",
      description: "6 - 36 months",
      icon: <Clock className="h-8 w-8 text-primary" />
    },
    {
      title: "Processing Time",
      description: "2-3 business days",
      icon: <Clock className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">How It Works</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our streamlined process makes it easy to apply for and receive funding tailored to the needs of Asian American creators.
            </p>
          </div>
          
          {/* Application Process */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 font-serif">Application Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applicationSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm flex flex-col items-center text-center card-hover">
                  <div className="mb-5 bg-primary-light/10 p-4 rounded-full">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Eligibility */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 font-serif">Eligibility</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-6">Who is eligible?</h3>
                <ul className="space-y-4">
                  {eligibilityCriteria.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-1 mr-3">{item.icon}</div>
                      <span className="text-gray-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-6">Who is ineligible?</h3>
                <ul className="space-y-4">
                  {ineligibilityCriteria.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-1 mr-3">{item.icon}</div>
                      <span className="text-gray-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    Don't quite meet the eligibility criteria? Contact us to discuss alternative options or resources that might help you achieve your goals.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Loan Details */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 font-serif">Loan Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {loanDetails.map((detail, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="mb-4">
                    {detail.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{detail.title}</h3>
                  <p className="text-gray-700">{detail.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Additional Information</h3>
              <ul className="space-y-3">
                <li className="text-gray-700">
                  <span className="font-medium">No application fees:</span> We don't charge any fees to apply for a loan.
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">No prepayment penalties:</span> You can pay off your loan early without additional charges.
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Soft credit check:</span> Initial evaluation doesn't impact your credit score.
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Flexible use of funds:</span> Use the loan for equipment, education, marketing, or other business needs.
                </li>
              </ul>
            </div>
          </section>
          
          {/* Application Requirements */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 font-serif">Application Requirements</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-6">
                To streamline your application process, please have the following information ready:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-3">Personal Information</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-700">• Full legal name</li>
                    <li className="text-gray-700">• Contact information</li>
                    <li className="text-gray-700">• Social Security Number</li>
                    <li className="text-gray-700">• Date of birth</li>
                    <li className="text-gray-700">• Residential address</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-3">Professional Information</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-700">• Portfolio or work samples</li>
                    <li className="text-gray-700">• Social media profiles</li>
                    <li className="text-gray-700">• Creative field/discipline</li>
                    <li className="text-gray-700">• Years active in your field</li>
                    <li className="text-gray-700">• Brief description of your work</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA */}
          <section className="bg-gradient-to-r from-primary/90 to-primary-dark text-white p-10 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4 font-serif">Ready to take the next step?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Start your application today and take the first step toward growing your creative career.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100">
              <Link to="/apply">Apply Now</Link>
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
