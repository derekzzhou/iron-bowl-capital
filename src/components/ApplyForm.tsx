
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
import { User, Mail, Phone, DollarSign, Clock, Briefcase } from 'lucide-react';

const ApplyForm = () => {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm();
  const { toast } = useToast();
  
  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "Application submitted",
      description: "We've received your application and will contact you soon.",
    });
    // Here you would typically call an API to submit the application
  };
  
  const loanPurposes = [
    "Camera/Video Equipment",
    "Computer/Tech Equipment",
    "Education/Training",
    "Studio Space",
    "Marketing/Promotion",
    "Vehicle/Transportation",
    "Production Costs",
    "Other Equipment",
    "Other"
  ];
  
  const careerTypes = [
    "Content Creator/Influencer", 
    "Filmmaker/Videographer",
    "Writer/Author",
    "Photographer",
    "Digital Artist",
    "Musician/Sound Designer",
    "Chef/Culinary Artist",
    "Other"
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 font-serif">Loan Application</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-6">
          <h3 className="text-xl font-bold flex items-center">
            <User className="mr-2 h-5 w-5 text-primary" />
            Personal Information
          </h3>
          
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
          <h3 className="text-xl font-bold flex items-center">
            <Briefcase className="mr-2 h-5 w-5 text-primary" />
            Professional Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="careerType">Creative Field/Career</Label>
              <Select onValueChange={value => setValue('careerType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your field" />
                </SelectTrigger>
                <SelectContent>
                  {careerTypes.map((career, index) => (
                    <SelectItem key={index} value={career}>{career}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="yearsActive">Years Active in Field</Label>
              <Input 
                id="yearsActive" 
                type="number" 
                placeholder="e.g., 3" 
                {...register("yearsActive", { required: "Required" })}
              />
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="portfolio">Portfolio/Social Media Links</Label>
              <Textarea 
                id="portfolio" 
                placeholder="Website, Instagram, YouTube, etc." 
                {...register("portfolio", { required: "Required" })}
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-xl font-bold flex items-center">
            <DollarSign className="mr-2 h-5 w-5 text-primary" />
            Loan Details
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="loanAmount">Requested Loan Amount ($)</Label>
              <Input 
                id="loanAmount" 
                type="number" 
                placeholder="5000" 
                min="1000" 
                max="10000" 
                {...register("loanAmount", { 
                  required: "Amount is required",
                  min: {
                    value: 1000,
                    message: "Minimum amount is $1,000"
                  },
                  max: {
                    value: 10000,
                    message: "Maximum amount is $10,000"
                  }
                })}
              />
              {errors.loanAmount && (
                <p className="text-red-500 text-sm">{errors.loanAmount.message as string}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="loanPurpose">Loan Purpose</Label>
              <Select onValueChange={value => setValue('loanPurpose', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select purpose" />
                </SelectTrigger>
                <SelectContent>
                  {loanPurposes.map((purpose, index) => (
                    <SelectItem key={index} value={purpose}>{purpose}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="loanDescription">How will this loan help your creative career?</Label>
              <Textarea 
                id="loanDescription" 
                placeholder="Please describe how you plan to use the funds and how it will benefit your work..." 
                className="h-32"
                {...register("loanDescription", { required: "Description is required" })}
              />
              {errors.loanDescription && (
                <p className="text-red-500 text-sm">{errors.loanDescription.message as string}</p>
              )}
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-2">
            <Checkbox id="creditCheck" onCheckedChange={checked => setValue('creditCheck', checked)} />
            <div className="grid gap-1.5">
              <Label 
                htmlFor="creditCheck" 
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I authorize Ascend to check my credit history as part of this application.
              </Label>
              <p className="text-sm text-gray-500">
                This will not impact your credit score as we use a soft inquiry.
              </p>
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
          Submit Application
        </Button>
      </form>
    </div>
  );
};

export default ApplyForm;
