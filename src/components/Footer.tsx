
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-primary font-serif mb-4">Ascend</h3>
            <p className="text-gray-600 mb-4">
              Supporting Asian American creators and entrepreneurs with tailored microloans to help your dreams flourish.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-primary">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-gray-600 hover:text-primary">
                  Apply for a Loan
                </Link>
              </li>
              <li>
                <Link to="/invest" className="text-gray-600 hover:text-primary">
                  Invest with Us
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-600 hover:text-primary">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-600 hover:text-primary">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={20} className="mr-2 text-primary mt-1" />
                <span className="text-gray-600">support@ascendloans.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-primary mt-1" />
                <span className="text-gray-600">
                  123 Creative Avenue<br />
                  San Francisco, CA 94107
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} Ascend Financial Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
