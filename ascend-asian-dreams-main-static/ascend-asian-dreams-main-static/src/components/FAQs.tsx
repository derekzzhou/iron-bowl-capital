
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "Who is eligible to apply for a loan?",
      answer: "To be eligible, you must be of Asian American descent, be at least 18 years old, a U.S. citizen or permanent resident, have a credit score of 640 or higher, and be actively working in a creative or non-traditional career field."
    },
    {
      question: "What are the loan amounts offered?",
      answer: "We offer microloans ranging from $1,000 to $10,000, with most loans averaging between $5,000 and $8,000."
    },
    {
      question: "What are the interest rates and terms?",
      answer: "Interest rates typically range from 5% to 15% APR, depending on credit score and other factors. Loan terms vary from 6 to 36 months, with most borrowers selecting 12 to 24 month terms."
    },
    {
      question: "How long does the application process take?",
      answer: "After submitting your application, you can expect to hear back within 2-3 business days. If approved, funds can be disbursed as quickly as 24 hours after finalizing paperwork."
    },
    {
      question: "What can I use the loan for?",
      answer: "Our loans are designed to support your creative career. Common uses include purchasing equipment, funding education or training, securing studio space, covering production costs, marketing expenses, and more."
    },
    {
      question: "Will applying affect my credit score?",
      answer: "Initially, we perform a soft credit check which does not affect your score. Only if you proceed with a loan offer will we conduct a hard inquiry, which may have a small, temporary impact on your credit score."
    },
    {
      question: "How does repayment work?",
      answer: "Repayments are made in equal monthly installments over your selected loan term. We offer automatic payments for convenience, and there are no prepayment penalties if you choose to pay off your loan early."
    },
    {
      question: "How can I invest in Ascend?",
      answer: "Accredited investors can invest directly in our loan fund, with minimum investments starting at $10,000. Visit our Investor page for more details or schedule a call with our investment team."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Find answers to common questions about our loan program and application process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
