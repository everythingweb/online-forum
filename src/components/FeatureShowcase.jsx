import React from 'react';
// These icons are placeholders. In a real app, you would use a library like 
// Heroicons (free and widely used with Tailwind) or Font Awesome.
// Example: import { ClockIcon, UsersIcon, ShieldCheckIcon, BookOpenIcon } from '@heroicons/react/24/outline';

// Placeholder icons (using standard text emojis for simplicity)
const icons = {
  speed: '⚡',
  teamwork: '👥',
  security: '🔒',
  knowledge: '📚',
  calendar: '📅',
  search: '🔍',
};

const features = [
  {
    icon: icons.speed,
    title: 'Instant Task Synchronization',
    description: 'Never miss an update. All projects, tasks, and deadlines are updated across all devices in real-time, ensuring everyone works with the latest information.',
  },
  {
    icon: icons.teamwork,
    title: 'Integrated Team Collaboration',
    description: 'Break down silos with built-in chat, commenting, and threaded discussions directly within projects. Perfect for forums, business units, or student groups.',
  },
  {
    icon: icons.knowledge,
    title: 'Centralized Knowledge Hub',
    description: 'Document everything in one place. Create organized wikis, FAQs, and documentation for easy onboarding and future reference (ideal for universities and events).',
  },
  {
    icon: icons.calendar,
    title: 'Intuitive Timeline Scheduling',
    description: 'Visualize your progress with Gantt charts and calendar views. Drag-and-drop planning makes scheduling complex convention events or business projects simple.',
  },
  {
    icon: icons.security,
    title: 'Enterprise-Grade Security',
    description: 'Protect sensitive data with advanced encryption, user roles, and granular permission controls, meeting the requirements of major universities and businesses.',
  },
  {
    icon: icons.search,
    title: 'Powerful Global Search',
    description: 'Find any document, comment, or task instantly across all your workspaces. Save time and ensure no valuable information is ever lost.',
  },
];

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col rounded-xl bg-gray-50 dark:bg-gray-800 p-6 shadow-lg transition duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-100 dark:border-gray-700">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500 text-white text-2xl mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400">
      {description}
    </p>
  </div>
);

const FeatureShowcase = () => {
  return (
    <section className="py-20 sm:py-32 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">
            Productivity Reimagined
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Everything You Need to Get Work Done
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            From seamless communication to granular project control, our platform empowers every team, regardless of size or industry.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Optional: Secondary CTA or Social Proof */}
        <div className="mt-16 text-center">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-indigo-700"
            >
              See All Features in Action &rarr;
            </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;