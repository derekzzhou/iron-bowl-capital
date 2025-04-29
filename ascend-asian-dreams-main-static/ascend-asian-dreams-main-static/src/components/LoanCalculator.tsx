
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Calculator } from 'lucide-react';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [interestRate, setInterestRate] = useState(8);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    // Calculate monthly payment using the formula: P * r * (1+r)^n / ((1+r)^n - 1)
    const monthlyRate = interestRate / 100 / 12;
    const months = loanTerm;
    const numerator = monthlyRate * Math.pow(1 + monthlyRate, months);
    const denominator = Math.pow(1 + monthlyRate, months) - 1;
    const payment = loanAmount * (numerator / denominator);
    
    setMonthlyPayment(payment);
    setTotalPayment(payment * months);
  }, [loanAmount, loanTerm, interestRate]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center mb-6">
            <Calculator className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-2xl md:text-3xl font-bold font-serif">Loan Calculator</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <label className="font-medium">Loan Amount</label>
                  <span className="text-primary font-medium">${loanAmount.toLocaleString()}</span>
                </div>
                <Slider
                  value={[loanAmount]}
                  min={1000}
                  max={10000}
                  step={500}
                  onValueChange={(val) => setLoanAmount(val[0])}
                  className="my-4"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>$1,000</span>
                  <span>$10,000</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <label className="font-medium">Loan Term</label>
                  <span className="text-primary font-medium">{loanTerm} months</span>
                </div>
                <Slider
                  value={[loanTerm]}
                  min={6}
                  max={36}
                  step={6}
                  onValueChange={(val) => setLoanTerm(val[0])}
                  className="my-4"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>6 months</span>
                  <span>36 months</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <label className="font-medium">Interest Rate</label>
                  <span className="text-primary font-medium">{interestRate}%</span>
                </div>
                <Slider
                  value={[interestRate]}
                  min={5}
                  max={15}
                  step={0.5}
                  onValueChange={(val) => setInterestRate(val[0])}
                  className="my-4"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>5%</span>
                  <span>15%</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="mb-6">
                  <p className="text-gray-600 mb-1">Estimated monthly payment</p>
                  <p className="text-3xl font-bold text-primary">
                    ${monthlyPayment.toFixed(2)}
                  </p>
                </div>
                <div className="mb-6">
                  <p className="text-gray-600 mb-1">Total payment</p>
                  <p className="text-2xl font-bold">
                    ${totalPayment.toFixed(2)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Total interest</p>
                  <p className="text-xl">
                    ${(totalPayment - loanAmount).toFixed(2)}
                  </p>
                </div>
              </div>
              
              <Button className="bg-primary hover:bg-primary-dark text-white">
                Apply Now
              </Button>
              <p className="text-xs text-gray-500 mt-4 text-center">
                This is just an estimate. Your actual rate and monthly payment will be determined based on your application and credit history.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;
