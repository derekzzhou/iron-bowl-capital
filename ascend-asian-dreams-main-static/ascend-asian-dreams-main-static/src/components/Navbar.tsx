
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary font-serif">Ascend</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-primary font-medium">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-primary font-medium">
            About
          </Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-primary font-medium">
            How It Works
          </Link>
          <Link to="/community" className="text-gray-700 hover:text-primary font-medium">
            Community
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
            <Link to="/invest">Invest</Link>
          </Button>
          <Button className="bg-primary hover:bg-primary-dark text-white">
            <Link to="/apply">Apply Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary font-medium py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-primary font-medium py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-gray-700 hover:text-primary font-medium py-2"
              onClick={toggleMenu}
            >
              How It Works
            </Link>
            <Link 
              to="/community" 
              className="text-gray-700 hover:text-primary font-medium py-2"
              onClick={toggleMenu}
            >
              Community
            </Link>
            <div className="flex flex-col space-y-3 pt-3">
              <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary hover:text-white">
                <Link to="/invest" onClick={toggleMenu}>Invest</Link>
              </Button>
              <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                <Link to="/apply" onClick={toggleMenu}>Apply Now</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
