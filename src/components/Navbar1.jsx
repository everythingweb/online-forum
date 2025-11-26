import React from 'react';
import { Link } from 'react-router-dom';
// 1. Import your logo image
import bucRegalLogo from '../assets/vector.jpg'; // ADJUST THIS PATH as necessary

const Navbar1 = () => {
  return (
    <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
      {/* Logo Section */}
      <Link to="/" className="flex items-center space-x-2">
        
        {/* 2. REPLACED SVG AND SPAN WITH THE IMAGE */}
        <img 
          src={bucRegalLogo} 
          alt="BUC Regal Logo" 
          // Adjust w- and h- classes to control the size of your logo
          className="h-8 w-auto" 
        />
        
      </Link>

      {/* Navigation Links (rest of the component remains the same) */}
      <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
        <Link to="/" className="hover:text-teal-500 transition duration-150">Home</Link>
        <Link to="/about" className="hover:text-teal-500 transition duration-150">About Us</Link>
        <Link to="/service" className="hover:text-teal-500 transition duration-150">Our Service</Link>
        <Link to="/testimonials" className="hover:text-teal-500 transition duration-150">Testimonials</Link>
      </div>

      {/* Call to Action Button */}
      <Link 
        to="/apply" 
        className="px-6 py-2 bg-teal-400 text-white rounded-lg text-sm font-semibold hover:bg-teal-500 transition duration-300 shadow-md"
      >
        Apply to learn
      </Link>
    </nav>
  );
};

export default Navbar1;