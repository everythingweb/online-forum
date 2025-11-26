import React from 'react';

// Data structure for the navigation links in the footer
const footerNavigation = {
  // Links relevant to the PRODUCT
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Status', href: '#' },
  ],
  // Links relevant to the COMPANY and Social Proof
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Customers', href: '#testimonials' },
    { name: 'Careers', href: '#careers' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ],
  // Links relevant to RESOURCES (documentation, support)
  resources: [
    { name: 'Help Center', href: '#help' },
    { name: 'Documentation', href: '#docs' },
    { name: 'API', href: '#api' },
    { name: 'Community Forum', href: '#forum' },
    { name: 'Partners', href: '#partners' },
  ],
  // Legal and compliance links
  legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
  ],
};

const ProductivityFooter = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="xl:grid xl:grid-cols-5 xl:gap-8">

          {/* Column 1: Logo & Newsletter Signup */}
          <div className="space-y-8 xl:col-span-2">
            <div className="flex items-center text-white text-2xl font-bold">
                <span className="text-indigo-400 mr-2">🚀</span>
                ProductivityPro
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              The platform to unify your work, whether you're managing a business, a university group, or an event.
            </p>
            
            {/* Newsletter Signup */}
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border border-transparent bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-700"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:ml-3 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-700"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Column 2-5: Navigation Links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-semibold text-white">Product</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.product.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm text-gray-400 hover:text-white transition duration-150">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-semibold text-white">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm text-gray-400 hover:text-white transition duration-150">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-semibold text-white">Resources</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.resources.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm text-gray-400 hover:text-white transition duration-150">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-semibold text-white">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm text-gray-400 hover:text-white transition duration-150">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-700/50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ProductivityPro, Inc. All rights reserved.
          </p>
          {/* Placeholder for Social Icons (optional) */}
          <div className="flex space-x-6 mt-4 md:mt-0">
             {/* You would insert SVG icons for Twitter, LinkedIn, etc., here */}
             <span className="text-gray-400 hover:text-white transition duration-150">🐦</span>
             <span className="text-gray-400 hover:text-white transition duration-150">🔗</span>
             <span className="text-gray-400 hover:text-white transition duration-150">📸</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProductivityFooter;