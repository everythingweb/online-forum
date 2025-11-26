import React, { useState } from 'react';

// Use cases data tailored for different audience types
const useCases = [
  {
    id: 'business',
    title: 'Business Teams & Enterprises',
    icon: '🏢',
    solution: 'Streamline project management, unify remote teams, and centralize critical company documentation in one secure workspace.',
    benefits: [
      'Agile Project Planning',
      'Cross-departmental Collaboration',
      'Automated Workflow Templates',
      'Client & Vendor Management',
    ],
  },
  {
    id: 'university',
    title: 'Academic Institutions & Research Groups',
    icon: '🎓',
    solution: 'Facilitate secure file sharing for research, manage complex class projects, and create dedicated private forums for student groups and faculty.',
    benefits: [
      'Research Data Organization',
      'Student Group Task Tracking',
      'Centralized Course Wikis',
      'Faculty Communication Hub',
    ],
  },
  {
    id: 'event',
    title: 'Convention & Event Organizers',
    icon: '🗓️',
    solution: 'Coordinate speaker schedules, manage vendor contracts, track marketing deliverables, and share real-time updates with your entire event team.',
    benefits: [
      'Timeline & Milestone Tracking',
      'Sponsor & Vendor Vetting',
      'Real-Time Status Dashboards',
      'Post-Event Debriefing Tools',
    ],
  },
  {
    id: 'forum',
    title: 'Online Communities & Forums',
    icon: '💬',
    solution: 'Empower your community leaders and members with integrated tasking tools to manage community projects, moderation, and event planning.',
    benefits: [
      'Moderator Task Management',
      'Community Project Board',
      'Member Onboarding Checklists',
      'Content Calendar Planning',
    ],
  },
];

const SolutionsSection = () => {
  const [activeCase, setActiveCase] = useState(useCases[0]); // Start with Business active

  // Helper function for button styling
  const getButtonClasses = (id) => 
    `px-4 py-2 font-semibold text-lg rounded-lg transition duration-300 ease-in-out ${
      activeCase.id === id
        ? 'bg-indigo-600 text-white shadow-lg'
        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/40'
    }`;

  return (
    <section className="py-20 sm:py-32 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">
            Solutions For Every Challenge
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            See How We Solve Your Specific Productivity Needs
          </h2>
        </div>

        {/* Use Case Tabs/Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {useCases.map((uc) => (
            <button
              key={uc.id}
              onClick={() => setActiveCase(uc)}
              className={getButtonClasses(uc.id)}
            >
              {uc.icon} {uc.title}
            </button>
          ))}
        </div>

        {/* Active Solution Display Card */}
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-indigo-200 dark:border-indigo-900/50">
          
          <div className="md:grid md:grid-cols-12 md:gap-12 items-start">
            
            {/* Left Side: Summary & Icon */}
            <div className="md:col-span-5 mb-8 md:mb-0">
              <div className="text-6xl mb-4">{activeCase.icon}</div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {activeCase.title} Solution
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {activeCase.solution}
              </p>
              
              {/* Optional: CTA to Learn More for this specific use case */}
              <a 
                href={`#${activeCase.id}-demo`} 
                className="mt-6 inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-800 dark:hover:text-indigo-300 transition duration-150"
              >
                Request a Demo for {activeCase.title} &rarr;
              </a>
            </div>

            {/* Right Side: Key Benefits List */}
            <div className="md:col-span-7">
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 border-b pb-2 border-indigo-200 dark:border-indigo-700">
                Key Benefits
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {activeCase.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-3 text-xl">
                      ✔
                    </span>
                    <span className="font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;