import React from 'react';

const ProductivityHero = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-20 sm:py-32">
      {/* Background shapes (optional) - gives a modern, dynamic look */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-16 sm:-mt-24 w-full h-96 bg-indigo-50 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">

          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 text-center lg:text-left">
            
            {/* Tagline/Pre-heading */}
            <p className="inline-flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 px-3 py-1 rounded-full mb-4">
              <span role="img" aria-label="Rocket" className="mr-2">⚡</span>
              Achieve More, Stress Less
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl md:text-7xl">
              Unleash Your Team's
              <br className="hidden sm:inline" />
              <span className="text-indigo-600 dark:text-indigo-400">Peak Performance.</span>
            </h1>

            {/* Subtext/Value Proposition */}
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-xl lg:max-w-none">
              The all-in-one platform for seamless collaboration, project tracking, and knowledge sharing—designed for efficiency across **forums, business, and education.**
            </p>

            {/* Call-to-Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex justify-center rounded-lg bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Start Your Free Trial
              </a>
              <a
                href="#"
                className="inline-flex justify-center rounded-lg bg-white dark:bg-gray-800 px-6 py-3 text-lg font-semibold text-gray-900 dark:text-white shadow-md ring-1 ring-inset ring-gray-300 dark:ring-gray-700 transition duration-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Book a Demo
              </a>
            </div>

            {/* Trust Element / Social Proof */}
            <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
              Trusted by 10,000+ users and leading institutions worldwide.
            </p>

          </div>

          {/* Right Column: Visual/Image Mockup */}
          <div className="lg:col-span-6 mt-12 lg:mt-0">
            {/* The image/mockup is crucial for showing the product in action */}
            
            <div className="relative rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-[1.02]">
              <img
                className="w-full h-auto object-cover"
                src="https://via.placeholder.com/1000x700/4F46E5/FFFFFF?text=Productivity+App+Dashboard+Mockup"
                alt="Productivity platform dashboard interface"
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductivityHero;