import React from 'react';
// Icon placeholder - using an accessible star icon for ratings
const StarIcon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M10.788 3.212a.75.75 0 0 1 1.424 0l3.193 6.386a.75.75 0 0 0 1.082.261l6.096-3.832a.75.75 0 0 1 .867.243l-3.832 6.096a.75.75 0 0 0 .261 1.082l6.386 3.193a.75.75 0 0 1 0 1.424l-6.386 3.193a.75.75 0 0 0-.261 1.082l3.832 6.096a.75.75 0 0 1-.867.243l-6.096-3.832a.75.75 0 0 0-1.082-.261l-3.193 6.386a.75.75 0 0 1-1.424 0l-3.193-6.386a.75.75 0 0 0-1.082-.261l-6.096 3.832a.75.75 0 0 1-.867-.243l3.832-6.096a.75.75 0 0 0-.261-1.082l-6.386-3.193a.75.75 0 0 1 0-1.424l6.386-3.193a.75.75 0 0 0 .261-1.082l-3.832-6.096a.75.75 0 0 1 .867-.243l6.096 3.832a.75.75 0 0 0 1.082.261l3.193-6.386Z" clipRule="evenodd" />
  </svg>
);

const testimonials = [
  {
    quote: "Our team's project completion rate jumped 40% after integrating this platform. The communication tools are game-changing for remote business collaboration.",
    name: 'Sarah Chen',
    title: 'Head of Operations, NexusCorp',
    avatar: 'https://i.pravatar.cc/150?img=1', // Placeholder URL
    type: 'Business',
  },
  {
    quote: "As a major university, managing research groups and student forums was complex. The knowledge hub feature has created a centralized source of truth for everyone.",
    name: 'Dr. Alan Reed',
    title: 'Director of Academic Systems, State University',
    avatar: 'https://i.pravatar.cc/150?img=2',
    type: 'University',
  },
  {
    quote: "Planning our annual developer convention requires juggling hundreds of speakers and timelines. The intuitive scheduling tool made event management effortless.",
    name: 'Maria Lopez',
    title: 'Chief Event Organizer, TechConnect 2024',
    avatar: 'https://i.pravatar.cc/150?img=3',
    type: 'Convention Event',
  },
];

const logos = [
  'Logo_Business',
  'Logo_Forum',
  'Logo_University',
  'Logo_Event',
  'Logo_Consulting',
  'Logo_NonProfit',
];

const TestimonialCard = ({ quote, name, title, avatar, type }) => {
  // Simple function to render a 5-star rating
  const renderRating = () => (
    <div className="flex text-yellow-500 mb-4">
      {Array(5).fill(0).map((_, i) => (
        <StarIcon key={i} className="h-5 w-5" />
      ))}
    </div>
  );

  // Helper to color the testimonial background based on type (for visual variety)
  const typeClasses = {
    'Business': 'border-indigo-500',
    'University': 'border-green-500',
    'Convention Event': 'border-pink-500',
  };

  return (
    <div className={`flex flex-col h-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl transition duration-300 hover:shadow-2xl border-t-4 ${typeClasses[type] || 'border-gray-300'}`}>
      {renderRating()}
      <blockquote className="flex-grow text-lg font-medium text-gray-900 dark:text-gray-200 italic">
        "{quote}"
      </blockquote>
      <div className="mt-6 flex items-center">
        <img className="h-12 w-12 rounded-full object-cover ring-2 ring-indigo-600 dark:ring-indigo-400" src={avatar} alt={name} />
        <div className="ml-4">
          <p className="text-base font-semibold text-gray-900 dark:text-white">{name}</p>
          <p className="text-sm text-indigo-600 dark:text-indigo-400">{title}</p>
        </div>
      </div>
    </div>
  );
};

const SocialProofSection = () => {
  return (
    <section className="py-20 sm:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">
            Built on Trust & Results
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Join the 10,000+ Leaders Achieving Peak Efficiency
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Don't just take our word for it—see how our platform transforms productivity across diverse industries.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* --- Trusted By / Logo Cloud Section --- */}
        <div className="mt-20 border-t border-gray-200 dark:border-gray-700 pt-16">
          <h3 className="text-center text-xl font-semibold text-gray-900 dark:text-white mb-8">
            Trusted by Leading Organizations
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6 items-center justify-items-center">
            {logos.map((logo, index) => (
              <div key={index} className="col-span-1 flex justify-center py-4 px-2 opacity-60 hover:opacity-100 transition duration-300 filter grayscale hover:grayscale-0">
                {/* Replace with actual <img> tags pointing to high-quality SVG/PNG logos */}
                <div className="text-xl font-bold text-gray-500 dark:text-gray-400">
                  {logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;