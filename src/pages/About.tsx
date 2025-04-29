
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: "Michelle Park",
      role: "Founder & CEO",
      image: "/placeholder.svg",
      bio: "Former investment banker with 10+ years in fintech. Passionate about supporting creative entrepreneurs and diversifying the creative economy."
    },
    {
      name: "David Chen",
      role: "Chief Investment Officer",
      image: "/placeholder.svg",
      bio: "20+ years in financial services with expertise in risk management and alternative lending models."
    },
    {
      name: "Sophia Kim",
      role: "Head of Community",
      image: "/placeholder.svg",
      bio: "Documentary filmmaker turned community builder. Dedicated to fostering connections among Asian American creators."
    },
    {
      name: "Jason Tran",
      role: "Chief Technology Officer",
      image: "/placeholder.svg",
      bio: "Tech entrepreneur with multiple successful startups. Expert in fintech and secure lending platforms."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Mission Section */}
          <section className="mb-16">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Our Mission</h1>
                <p className="text-lg text-gray-700 mb-6">
                  Ascend is dedicated to empowering Asian American creators and entrepreneurs in non-traditional careers by providing accessible financial support and building a supportive community.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We believe that financial barriers should not prevent talented individuals from pursuing their creative passions. Our mission is to bridge the gap between traditional financial institutions and the unique needs of the creative community.
                </p>
                <p className="text-lg text-gray-700">
                  Through microloans, community resources, and mentorship, we aim to help Asian American creators thrive and share their authentic voices with the world.
                </p>
              </div>
              <div className="lg:w-1/2 bg-gray-200 rounded-xl h-80">
                <img 
                  src="/placeholder.svg"
                  alt="Ascend Mission"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 font-serif">Our Story</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-gray-700 mb-4">
                Ascend was founded in 2023 by Michelle Park, a former investment banker who recognized a significant gap in financial support for Asian American creators and entrepreneurs pursuing non-traditional careers.
              </p>
              <p className="text-gray-700 mb-4">
                After witnessing talented friends and family members struggle to secure funding for their creative endeavors, Michelle set out to build a financial solution specifically designed for the unique needs of this community.
              </p>
              <p className="text-gray-700 mb-4">
                Starting with a small pilot program supporting 25 creators in New York and California, Ascend demonstrated that with the right financial tools and community support, creative professionals could not only pursue their passions but build sustainable careers.
              </p>
              <p className="text-gray-700">
                Today, Ascend continues to grow, serving hundreds of Asian American creators across the United States, while maintaining our core values of accessibility, community, and cultural understanding.
              </p>
            </div>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 font-serif">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-xl mb-3">Accessibility</h3>
                <p className="text-gray-700">
                  Making financial support accessible to those overlooked by traditional financial institutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-xl mb-3">Community</h3>
                <p className="text-gray-700">
                  Building connections and fostering collaboration among Asian American creators.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-xl mb-3">Cultural Understanding</h3>
                <p className="text-gray-700">
                  Recognizing and honoring the unique challenges and perspectives of Asian American creators.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-xl mb-3">Empowerment</h3>
                <p className="text-gray-700">
                  Providing not just funding, but the resources and support needed for long-term success.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 font-serif">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden card-hover">
                  <div className="h-56 bg-gray-200">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                    <p className="text-primary mb-3">{member.role}</p>
                    <p className="text-gray-700">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-primary/90 to-primary-dark text-white p-10 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4 font-serif">Join the Ascend Community</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Whether you're seeking funding for your creative projects or looking to invest in the next generation of Asian American creators, we'd love to connect with you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-primary hover:bg-gray-100">
                <Link to="/apply">Apply for Funding</Link>
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-primary-dark">
                <Link to="/invest">Become an Investor</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
