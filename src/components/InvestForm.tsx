
import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const InvestForm = () => {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm();
  const { toast } = useToast();
  
  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "Investment inquiry submitted",
      description: "Thank you for your interest. Our team will contact you shortly.",
    });
    // Here you would typically call an API to submit the investment inquiry
  };
  
  const investmentRanges = [
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000 - $250,000",
    "$250,000+"
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 font-serif">Investor Inquiry</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-6">
          <h3 className="text-xl font-bold">Personal Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input 
                id="firstName" 
                placeholder="Enter your first name" 
                {...register("firstName", { required: "First name is required" })}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName.message as string}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input 
                id="lastName" 
                placeholder="Enter your last name" 
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName.message as string}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your.email@example.com" 
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message as string}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                placeholder="(123) 456-7890" 
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message as string}</p>
              )}
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-xl font-bold">Investment Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="investmentRange">Investment Range</Label>
              <Select onValueChange={value => setValue('investmentRange', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select amount" />
                </SelectTrigger>
                <SelectContent>
                  {investmentRanges.map((range, index) => (
                    <SelectItem key={index} value={range}>{range}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="investorType">Investor Type</Label>
              <Select onValueChange={value => setValue('investorType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="individual">Individual</SelectItem>
                  <SelectItem value="institution">Institution/Organization</SelectItem>
                  <SelectItem value="family-office">Family Office</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="investmentGoals">Investment Goals & Questions</Label>
              <Textarea 
                id="investmentGoals" 
                placeholder="Please share your investment goals, any questions you have, and what attracted you to Ascend..." 
                className="h-32"
                {...register("investmentGoals")}
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-2">
            <Checkbox id="accreditedInvestor" onCheckedChange={checked => setValue('accreditedInvestor', checked)} />
            <div className="grid gap-1.5">
              <Label 
                htmlFor="accreditedInvestor" 
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I confirm that I am an accredited investor as defined by SEC regulations.
              </Label>
            </div>
          </div>
          
          <div className="flex items-start space-x-2">
            <Checkbox id="termsAgreement" onCheckedChange={checked => setValue('termsAgreement', checked)} />
            <div className="grid gap-1.5">
              <Label 
                htmlFor="termsAgreement" 
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the Terms of Service and Privacy Policy.
              </Label>
            </div>
          </div>
        </div>
        
        <Button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white py-6">
          Submit Inquiry
        </Button>
      </form>
    </div>
  );
};

export default InvestForm;
