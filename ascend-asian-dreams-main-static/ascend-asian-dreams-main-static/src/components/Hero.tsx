
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Pen, Video, Music, BookOpen, PenTool } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              <span className="title-gradient">Financial support</span> for Asian American creators
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Tailored microloans from $5,000 to $10,000 for filmmakers, writers, influencers, 
              and other creative professionals pursuing non-traditional careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-6">
                <Link to="/apply" className="flex items-center">
                  Apply Now <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white text-lg px-8 py-6">
                <Link to="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Creative Icons Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl card-hover">
              <Camera size={48} className="text-primary mb-4" />
              <h3 className="font-bold text-xl mb-2">Photography</h3>
              <p className="text-gray-600">Fund your equipment and studio space</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl card-hover">
              <Video size={48} className="text-secondary-dark mb-4" />
              <h3 className="font-bold text-xl mb-2">Filmmaking</h3>
              <p className="text-gray-600">Get the gear you need for your next project</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl card-hover">
              <Pen size={48} className="text-blue-500 mb-4" />
              <h3 className="font-bold text-xl mb-2">Writing</h3>
              <p className="text-gray-600">Support for your creative journey</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl card-hover">
              <PenTool size={48} className="text-green-600 mb-4" />
              <h3 className="font-bold text-xl mb-2">Digital Art</h3>
              <p className="text-gray-600">Upgrade your tools and education</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
