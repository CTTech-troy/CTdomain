import React, { useState } from 'react';
import './Domain.css'; // We'll put the custom CSS here, now named Domain.css

// Tailwind CSS Configuration
// const tailwindConfig = {
//   theme: {
//     extend: {
//       colors: {
//         primary: '#0070f3',
//         secondary: '#ff6b6b'
//       },
//       borderRadius: {
//         'none': '0px',
//         'sm': '4px',
//         DEFAULT: '8px',
//         'md': '12px',
//         'lg': '16px',
//         'xl': '20px',
//         '2xl': '24px',
//         '3xl': '32px',
//         'full': '9999px',
//         'button': '8px'
//       }
//     }
//   }
// };

const popularExtensions = [
  '.com', '.net', '.org', '.io', '.co', '.dev'
];

const domainExtensions = [
  { name: '.com', description: 'The most recognized domain extension', price: '8.88' },
  { name: '.net', description: 'Perfect for network and tech companies', price: '10.98' },
  { name: '.org', description: 'Ideal for organizations and non-profits', price: '12.98' },
  { name: '.io', description: 'Popular for tech startups and apps', price: '32.98' },
  { name: '.co', description: 'Short and memorable for businesses', price: '24.98' },
  { name: '.dev', description: 'Perfect for developers and tech projects', price: '14.98' },
  { name: '.app', description: 'Ideal for mobile applications', price: '15.98' },
  { name: '.ai', description: 'Perfect for AI and tech companies', price: '79.98' },
];

const features = [
  {
    icon: 'ri-lock-fill',
    bgColor: 'bg-blue-100',
    textColor: 'text-primary',
    title: 'Free WHOIS Privacy',
    description: 'Keep your personal information private with our complimentary WHOIS privacy protection included with every domain.'
  },
  {
    icon: 'ri-customer-service-2-fill',
    bgColor: 'bg-green-100',
    textColor: 'text-green-600',
    title: '24/7 Expert Support',
    description: 'Our knowledgeable support team is available around the clock to assist you with any questions or issues.'
  },
  {
    icon: 'ri-dashboard-3-fill',
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-600',
    title: 'Intuitive Control Panel',
    description: 'Manage your domains with ease using our user-friendly dashboard designed for both beginners and experts.'
  },
  {
    icon: 'ri-price-tag-3-fill',
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-600',
    title: 'Competitive Pricing',
    description: 'Get the best value for your money with our affordable domain registration and renewal rates.'
  },
  {
    icon: 'ri-secure-payment-fill',
    bgColor: 'bg-red-100',
    textColor: 'text-red-600',
    title: 'Secure Transactions',
    description: 'Rest easy knowing your payments and personal data are protected by industry-leading security measures.'
  },
  {
    icon: 'ri-arrow-go-forward-fill',
    bgColor: 'bg-teal-100',
    textColor: 'text-teal-600',
    title: 'Easy Transfers',
    description: 'Transfer your existing domains to us with our straightforward, hassle-free domain transfer process.'
  },
];

const faqs = [
  {
    question: 'How do I register a domain name?',
    answer: 'Registering a domain is simple. First, search for your desired domain name using our search tool. If it\'s available, add it to your cart and proceed to checkout. Fill in your contact information, select your registration period, and complete the payment. Your domain will be registered immediately after successful payment.'
  },
  {
    question: 'How long can I register a domain for?',
    answer: 'You can register most domains for a period of 1 to 10 years. We recommend registering for multiple years to secure your domain for longer and to avoid the hassle of annual renewals. Additionally, some search engines consider longer registration periods as a positive ranking factor.'
  },
  {
    question: 'What is WHOIS Privacy Protection?',
    answer: 'WHOIS Privacy Protection shields your personal information (name, address, phone number, email) from being publicly visible in the WHOIS database. This helps prevent spam, identity theft, and unwanted solicitations. We offer free WHOIS Privacy Protection with all domain registrations to ensure your personal information remains private.'
  },
  {
    question: 'Can I transfer my existing domain to your service?',
    answer: 'Yes, you can easily transfer your domain to us from another registrar. The transfer process typically takes 5-7 days to complete. To initiate a transfer, you\'ll need to unlock your domain at your current registrar, obtain an authorization code (EPP code), and then start the transfer process on our website. Our support team is available to assist you throughout the process.'
  },
  {
    question: 'What happens if my domain expires?',
    answer: 'If your domain expires, it enters a grace period (typically 30 days) during which you can renew it at the standard renewal rate. After the grace period, the domain enters a redemption period where you can still recover it but at a higher fee. If not renewed during the redemption period, the domain will be released back to the public for registration. We send multiple renewal reminders before expiration to help you avoid this situation.'
  },
];

function Domain() { // Renamed from App to Domain
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="Domain"> {/* Changed class name */}
      {/* Promotional Banner */}
      <div className="bg-primary text-white text-center py-2 text-sm">
        <div className="container mx-auto px-4">
          <p>Limited Time Offer: Get .com domains for just $8.88/year! <a href="#" className="underline font-medium">Shop Now</a></p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/50"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Perfect Domain Name</h1>
            <p className="text-xl mb-8">Secure your online identity with our premium domain registration service</p>

            {/* Domain Search Form */}
            <div className="bg-white p-1 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="flex-grow relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center text-gray-400">
                    <i className="ri-search-line"></i>
                  </div>
                  <input type="text" placeholder="Find your perfect domain name..." className="domain-search-input w-full pl-12 pr-4 py-4 border-none text-gray-800 bg-transparent" />
                </div>
                <div className="relative md:w-48 border-t md:border-t-0 md:border-l border-gray-200">
                  <div className="domain-dropdown-wrapper relative">
                    <select className="domain-dropdown w-full h-full appearance-none bg-transparent pl-4 pr-10 py-4 text-gray-800 cursor-pointer border-none">
                      {popularExtensions.map((ext, index) => (
                        <option key={index} value={ext}>{ext}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center text-gray-400 pointer-events-none">
                      <i className="ri-arrow-down-s-line"></i>
                    </div>
                  </div>
                </div>
                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 !rounded-button whitespace-nowrap font-medium transition duration-200 mt-2 md:mt-0">
                  Search Domain
                </button>
              </div>
            </div>

            {/* Popular Extensions */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {popularExtensions.map((ext, index) => (
                <span key={index} className="bg-white/20 px-3 py-1 rounded-full text-sm">{ext}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center">
              <div className="w-6 h-6 flex items-center justify-center text-yellow-500 mr-2">
                <i className="ri-star-fill"></i>
              </div>
              <div>
                <span className="font-semibold">Rated Excellent</span>
                <span className="text-gray-500 text-sm ml-2">4.8/5 from 10,000+ reviews</span>
              </div>
            </div>
            <div className="h-10 border-l border-gray-200 hidden md:block"></div>
            <div>
              <span className="font-semibold">Trusted by 2+ Million Customers</span>
            </div>
            <div className="h-10 border-l border-gray-200 hidden md:block"></div>
            <div className="flex items-center">
              <div className="w-6 h-6 flex items-center justify-center text-primary mr-2">
                <i className="ri-shield-check-fill"></i>
              </div>
              <span className="font-semibold">100% Secure Checkout</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Domain Service</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide top-notch domain registration services with features designed to make your online journey smooth and successful.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className={`w-14 h-14 flex items-center justify-center ${feature.bgColor} rounded-lg ${feature.textColor} mb-6`}>
                  <i className={`${feature.icon} ri-2x`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Extensions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Domain Extensions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose from a wide variety of domain extensions to find the perfect fit for your website.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {domainExtensions.map((domain, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 text-center">
                <h3 className="text-2xl font-bold mb-2">{domain.name}</h3>
                <p className="text-gray-500 mb-4">{domain.description}</p>
                <div className="text-3xl font-bold text-primary mb-6">${domain.price}<span className="text-sm text-gray-500">/year</span></div>
                <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 !rounded-button whitespace-nowrap transition duration-200">Register Now</button>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="#" className="text-primary font-medium hover:underline flex items-center justify-center">
              View all domain extensions
              <div className="w-5 h-5 flex items-center justify-center ml-1">
                <i className="ri-arrow-right-line"></i>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Online Presence?</h2>
            <p className="text-xl mb-8">Get started today with our easy domain registration process and build your digital identity.</p>
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 !rounded-button whitespace-nowrap font-medium text-lg transition duration-200">Find Your Domain Now</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our domain registration services.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item border-b border-gray-200 py-5">
                <div
                  className="faq-header flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <div className={`faq-icon w-6 h-6 flex items-center justify-center text-gray-500 transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                </div>
                <div className={`faq-content ${openFAQ === index ? 'faq-active' : ''} pt-4 text-gray-600`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Domain; // Exported as Domain