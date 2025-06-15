import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useEffect } from 'react';

const HostingPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsHeaderSticky(true);
      } else {
        setIsHeaderSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "What is web hosting?",
      answer: "Web hosting is a service that allows organizations and individuals to post a website or web page onto the Internet. A web host, or web hosting service provider, is a business that provides the technologies and services needed for the website or webpage to be viewed on the Internet."
    },
    {
      question: "How do I choose the right hosting plan?",
      answer: "Consider your website's needs including expected traffic, storage requirements, and technical specifications. For small websites, shared hosting is often sufficient. For larger sites with higher traffic, VPS or dedicated hosting may be more appropriate."
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer: "Yes, we offer a 30-day money-back guarantee on all our hosting plans. If you're not satisfied with our services within the first 30 days, you can request a full refund."
    },
    {
      question: "Can I upgrade my hosting plan later?",
      answer: "Absolutely! You can easily upgrade your hosting plan as your website grows. Our scalable solutions ensure a smooth transition between plans with minimal downtime."
    },
    {
      question: "Do you provide SSL certificates?",
      answer: "Yes, all our hosting plans include free SSL certificates to ensure your website is secure and trusted by visitors. This helps improve your site's SEO ranking and protects sensitive information."
    },
    {
      question: "What kind of customer support do you offer?",
      answer: "We provide 24/7 customer support through live chat, email, and phone. Our technical support team is always available to help you with any issues or questions you might have."
    }
  ];

  return (
    <div className="font-sans min-h-screen">
      <div className={isHeaderSticky ? 'pt-24 md:pt-28' : ''}>
        {/* Hosting Plans */}
        <section id="plans" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Hosting Plan</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Select the perfect hosting solution for your website needs. All plans include 24/7 support and a 30-day money-back guarantee.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Plan */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:transform hover:scale-105">
                <div className="p-8 border-b">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Stellar</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-4xl font-bold text-gray-900">$2.99</span>
                    <span className="text-gray-600 ml-1">/month</span>
                  </div>
                  <p className="text-gray-600">Perfect for personal websites and blogs</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      <span className="text-gray-700">1 Website</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      <span className="text-gray-700">30 GB SSD Storage</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      <span className="text-gray-700">Unmetered Bandwidth</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      <span className="text-gray-700">Free SSL Certificate</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      <span className="text-gray-700">Daily Backups</span>
                    </li>
                    <li className="flex items-center text-gray-400">
                      <i className="fas fa-times mr-3"></i>
                      <span>Priority Support</span>
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 text-white mt-8 py-3 rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">Buy Now</button>
                </div>
              </div>
              
              {/* Plus Plan */}
              <div className="bg-white rounded-lg shadow-xl overflow-hidden transform scale-105 border-2 border-blue-500 relative z-10">
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-medium">POPULAR</div>
                <div className="p-8 border-b">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Stellar Plus</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-4xl font-bold text-gray-900">$4.99</span>
                    <span className="text-gray-600 ml-1">/month</span>
                  </div>
                  <p className="text-gray-600">Ideal for small businesses and online stores</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      <span className="text-gray-700">Unlimited Websites</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      <span className="text-gray-700">100 GB SSD Storage</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      <span className="text-gray-700">Unmetered Bandwidth</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      <span className="text-gray-700">Free SSL Certificate</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      <span className="text-gray-700">Daily Backups</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      <span className="text-gray-700">Priority Support</span>
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 text-white mt-8 py-3 rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">Buy Now</button>
                </div>
              </div>
              
              {/* Business Plan */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:transform hover:scale-105">
                <div className="p-8 border-b">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Stellar Business</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-4xl font-bold text-gray-900">$7.99</span>
                    <span className="text-gray-600 ml-1">/month</span>
                  </div>
                  <p className="text-gray-600">Advanced features for high-traffic websites</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      <span className="text-gray-700">Unlimited Websites</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      <span className="text-gray-700">200 GB SSD Storage</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      <span className="text-gray-700">Unmetered Bandwidth</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      <span className="text-gray-700">Free SSL Certificate</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      <span className="text-gray-700">Daily Backups</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      <span className="text-gray-700">Priority Support</span>
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 text-white mt-8 py-3 rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">We provide top-notch hosting services with features designed to make your website fast, secure, and reliable.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-server text-blue-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">99.9% Uptime</h3>
                <p className="text-gray-600">We guarantee 99.9% uptime for your website, ensuring your business stays online and accessible to customers at all times.</p>
              </div>
              
              {/* Feature 2 */}
              <div className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-globe text-blue-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Free Domain</h3>
                <p className="text-gray-600">Get a free domain name with our annual hosting plans. Choose from a wide range of domain extensions for your website.</p>
              </div>
              
              {/* Feature 3 */}
              <div className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-headset text-blue-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
                <p className="text-gray-600">Our expert support team is available 24/7 to help you with any issues or questions. We're just a click away.</p>
              </div>
              
              {/* Feature 4 */}
              <div className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-lock text-blue-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">SSL Certificate</h3>
                <p className="text-gray-600">Free SSL certificates with all hosting plans to secure your website and build trust with your visitors.</p>
              </div>
              
              {/* Feature 5 */}
              <div className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-rocket text-blue-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Setup</h3>
                <p className="text-gray-600">Get your website up and running in minutes with our one-click installation for popular applications like WordPress.</p>
              </div>
              
              {/* Feature 6 */}
              <div className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-database text-blue-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Daily Backups</h3>
                <p className="text-gray-600">Automatic daily backups of your website data, ensuring you never lose important information.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why CTHost</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <p className="text-gray-600 mb-6"><span style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px'}}>Your Business Online </span><br />
                    Your website security and privacy comes first at Namecheap, and we will always support the rights of individuals and consumers online. It’s our mission to keep the Internet open, free, and safe for everyone.</p>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <p className="text-gray-600 mb-6"><span style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px'}}>Privacy and Security </span><br />
                  Boost your business with industry-premium products and services, at prices that won’t break your budget. If it doesn’t provide you with a better Internet experience, we simply don’t offer it.</p>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
                <p className="text-gray-600 mb-6"><span style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '20px'}}>Customer Service</span><br />
                    You’re covered by a Support Team that’s renowned for being one of the most knowledgeable, friendly, and professional in the business. Real people are ready to assist you with any issue, any time, 24/7.</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <div className="flex flex-wrap justify-center mt-8 gap-8">
                <div className="flex items-center">
                  <i className="fab fa-amazon text-gray-400 text-4xl"></i>
                </div>
                <div className="flex items-center">
                  <i className="fab fa-google text-gray-400 text-4xl"></i>
                </div>
                <div className="flex items-center">
                  <i className="fab fa-microsoft text-gray-400 text-4xl"></i>
                </div>
                <div className="flex items-center">
                  <i className="fab fa-spotify text-gray-400 text-4xl"></i>
                </div>
                <div className="flex items-center">
                  <i className="fab fa-slack text-gray-400 text-4xl"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Find answers to common questions about our hosting services.</p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <i className={`fas ${activeAccordion === index ? 'fa-chevron-up' : 'fa-chevron-down'} text-gray-500`}></i>
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${activeAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="p-4 bg-white">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Still have questions? Our support team is here to help.</p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">Contact Support</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HostingPage;
