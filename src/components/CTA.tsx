
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/90 to-primary-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Ready to grow your creative career?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Join our community of Asian American creators and access the funding you need to make your vision a reality.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link to="/apply" className="flex items-center">
              Apply Now <ArrowRight size={20} className="ml-2" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-primary-dark">
            <Link to="/how-it-works">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
