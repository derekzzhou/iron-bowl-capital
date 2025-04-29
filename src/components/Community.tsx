
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Users, Calendar, MessageSquare } from 'lucide-react';

const Community = () => {
  const events = [
    {
      title: "NYC Creator Meetup",
      date: "May 15, 2025",
      location: "New York, NY",
      image: "/placeholder.svg"
    },
    {
      title: "Financial Workshop for Creators",
      date: "June 8, 2025",
      location: "Virtual Event",
      image: "/placeholder.svg"
    },
    {
      title: "LA Film Festival Networking",
      date: "July 22, 2025",
      location: "Los Angeles, CA",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-16 mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              <span className="title-gradient">Join our creative</span> community
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Connect with fellow Asian American creators, attend exclusive events, and access resources to help your career flourish.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <Users className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Peer Networking</h3>
                  <p className="text-gray-600">
                    Connect with like-minded creators and entrepreneurs who understand your unique journey.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Calendar className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Exclusive Events</h3>
                  <p className="text-gray-600">
                    Attend workshops, panels, and social gatherings tailored to Asian American creators.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MessageSquare className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Mentorship</h3>
                  <p className="text-gray-600">
                    Get guidance from established professionals who have successfully navigated creative careers.
                  </p>
                </div>
              </div>
            </div>
            
            <Button className="mt-8 bg-primary hover:bg-primary-dark text-white">
              <Link to="/community">Explore Community</Link>
            </Button>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6 font-serif lg:text-center">Upcoming Events</h3>
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="flex bg-white rounded-lg shadow-sm overflow-hidden card-hover">
                  <div className="w-1/3 bg-gray-200">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 w-2/3">
                    <h4 className="font-bold mb-1">{event.title}</h4>
                    <p className="text-primary text-sm mb-1">{event.date}</p>
                    <p className="text-gray-600 text-sm">{event.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
