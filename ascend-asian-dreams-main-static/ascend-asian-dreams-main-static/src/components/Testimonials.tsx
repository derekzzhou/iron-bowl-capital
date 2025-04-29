
import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const TestimonialCard = ({ quote, name, role, image }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col h-full card-hover">
      <Quote className="text-primary/20 h-12 w-12 mb-4" />
      <p className="text-gray-700 mb-6 flex-grow italic">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Ascend helped me purchase high-quality camera equipment which elevated my content creation. Their loan terms were much better than using my credit card, and their support was personalized to my needs as a creator.",
      name: "James Chen",
      role: "YouTube Travel Vlogger",
      image: "/placeholder.svg"
    },
    {
      quote: "As a filmmaker working on my first independent project, traditional banks didn't understand my vision. Ascend not only provided funding but connected me with a community of like-minded creators.",
      name: "Mia Nguyen",
      role: "Independent Filmmaker",
      image: "/placeholder.svg"
    },
    {
      quote: "The microloan I received helped me launch my cooking blog and invest in quality ingredients and equipment. The application process was straightforward and the team genuinely cared about my success.",
      name: "David Kim",
      role: "Culinary Content Creator",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Success Stories</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Hear from creators who have grown their careers with Ascend's support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
