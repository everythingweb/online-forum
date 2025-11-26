import React from 'react';

const CommunitySection = () => {
  return (
    // REDUCED: Changed pt-24 to pt-12 and pb-16 to pb-8 to shrink vertical padding
    <div className="flex flex-col items-center justify-center pt-12 pb-8 px-4">
      
      {/* Heading */}
      {/* REDUCED: Changed mb-6 to mb-3 */}
      <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight text-center mb-3">
        Find Your Tribe,<br />Build Your Network.
      </h1>
      
      {/* Subtitle/Description */}
      {/* REDUCED: Changed mb-10 to mb-6 */}
      <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-xl text-center">
        Connect with like-minded students for fun, friendships, and future opportunities.
      </p>

      {/* Buttons - No changes needed here, as button padding is fine */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Primary Button */}
        <button className="flex items-center px-8 py-3 bg-gray-900 text-white rounded-full text-lg font-semibold hover:bg-gray-700 transition duration-300 shadow-lg">
          Join for Free 
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
        
        {/* Secondary Button */}
        <button className="flex items-center px-8 py-3 bg-white border border-gray-300 text-gray-900 rounded-full text-lg font-semibold hover:bg-gray-50 transition duration-300 shadow-md">
          {/* Avatar/Icon Placeholder */}
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&q=80" 
            alt="User avatar" 
            className="w-6 h-6 rounded-full mr-2 object-cover" 
          />
          Explore Communities
        </button>
      </div>
    </div>
  );
};

export default CommunitySection;