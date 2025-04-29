
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

const Community = () => {
  const successStories = [
    {
      name: "Sarah Nguyen",
      role: "Documentary Filmmaker",
      image: "/placeholder.svg",
      story: "With a $7,500 loan from Ascend, I purchased professional camera equipment and funded post-production for my documentary about Asian American immigrant stories. The film has now been accepted into three film festivals.",
    },
    {
      name: "Jason Park",
      role: "Food Blogger & Photographer",
      image: "/placeholder.svg",
      story: "I used my $5,000 loan to upgrade my camera gear and take a food photography masterclass. My following has tripled, and I've secured partnerships with major food brands that have made the loan more than worth it.",
    },
    {
      name: "Mei Lin",
      role: "YouTube Content Creator",
      image: "/placeholder.svg",
      story: "Ascend helped me set up a proper home studio with lighting and sound equipment. The improved production quality helped me reach 100,000 subscribers and qualify for YouTube's Partner Program.",
    },
    {
      name: "Kevin Choi",
      role: "Podcaster",
      image: "/placeholder.svg",
      story: "My loan funded professional recording equipment and a year of studio time. I've now secured sponsorships that make my podcast financially sustainable, and I'm able to share important stories from the Asian American community.",
    },
  ];

  const upcomingEvents = [
    {
      title: "NYC Creator Meetup",
      date: "May 15, 2025",
      location: "New York, NY",
      description: "Network with fellow Asian American creators and Ascend team members over food and drinks.",
      image: "/placeholder.svg"
    },
    {
      title: "Financial Workshop for Creators",
      date: "June 8, 2025",
      location: "Virtual Event",
      description: "Learn about managing finances as a creative professional, tax strategies, and building credit.",
      image: "/placeholder.svg"
    },
    {
      title: "LA Film Festival Networking",
      date: "July 22, 2025",
      location: "Los Angeles, CA",
      description: "Join us at our exclusive gathering during the LA Film Festival to connect with filmmakers and industry professionals.",
      image: "/placeholder.svg"
    }
  ];

  const resources = [
    {
      title: "Creator Financial Guide",
      description: "A comprehensive guide to managing finances as a creative professional.",
      type: "PDF",
      link: "#"
    },
    {
      title: "Equipment Buying Guide",
      description: "Tips for investing in the right equipment for different creative fields.",
      type: "Article",
      link: "#"
    },
    {
      title: "Tax Tips for Freelancers",
      description: "Understanding taxes and deductions for creative professionals.",
      type: "Video",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Our Community</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Connect with fellow Asian American creators, access resources, and celebrate success stories.
            </p>
          </div>
          
          {/* Success Stories */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 font-serif">Success Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {successStories.map((story, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden flex card-hover">
                  <div className="w-1/3 bg-gray-200">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 w-2/3">
                    <h3 className="font-bold text-xl mb-1">{story.name}</h3>
                    <p className="text-primary mb-3">{story.role}</p>
                    <p className="text-gray-700">{story.story}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Upcoming Events */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 font-serif">Upcoming Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden card-hover">
                  <div className="h-48 bg-gray-200">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-1">{event.title}</h3>
                    <p className="text-primary mb-1">{event.date}</p>
                    <p className="text-gray-600 mb-3">{event.location}</p>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary hover:text-white">
                      Register
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Resources */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 font-serif">Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 card-hover">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm mb-4">
                    {resource.type}
                  </span>
                  <h3 className="font-bold text-xl mb-2">{resource.title}</h3>
                  <p className="text-gray-700 mb-4">{resource.description}</p>
                  <a 
                    href={resource.link} 
                    className="text-primary font-medium hover:text-primary-dark flex items-center"
                  >
                    Access Resource
                  </a>
                </div>
              ))}
            </div>
          </section>
          
          {/* Join Community */}
          <section className="bg-primary text-white p-10 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4 font-serif">Join Our Online Community</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Connect with fellow creators, share experiences, and access exclusive resources through our online community platform.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100">
              Join the Community
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
