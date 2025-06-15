import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faServer,
  faShieldAlt,
  faHeadset,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their
            online presence.
          </p>
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8 relative">
            <div className="text-blue-600 text-5xl absolute -top-5 left-8">
              <FontAwesomeIcon icon={faQuoteLeft} />
            </div>
            <div className="pt-4">
              <p className="text-gray-700 text-lg italic mb-6">
                "DomainHost has been instrumental in growing my online
                business. Their domain and hosting services are reliable, and
                their customer support team is always ready to help. I
                couldn't be happier with my choice!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20smiling%20business%20woman%20with%20shoulder%20length%20hair%20against%20a%20neutral%20background.%20Clean%20portrait%20with%20good%20lighting%20suitable%20for%20a%20testimonial.%20Natural%2C%20confident%20expression.&width=100&height=100&seq=6&orientation=squarish"
                    alt="Sarah Johnson"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">
                    Founder, Creative Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Dots */}
          <div className="flex justify-center mt-6">
            <button className="w-3 h-3 rounded-full bg-blue-600 mx-1 cursor-pointer"></button>
            <button className="w-3 h-3 rounded-full bg-gray-300 mx-1 cursor-pointer"></button>
            <button className="w-3 h-3 rounded-full bg-gray-300 mx-1 cursor-pointer"></button>
          </div>
        </div>

        {/* Trust Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-blue-600 text-4xl mb-4">
              <FontAwesomeIcon icon={faServer} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              99.9% Uptime
            </h3>
            <p className="text-gray-600">
              We guarantee your website stays online with our reliable
              infrastructure.
            </p>
          </div>
          <div>
            <div className="text-blue-600 text-4xl mb-4">
              <FontAwesomeIcon icon={faShieldAlt} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Secure Hosting
            </h3>
            <p className="text-gray-600">
              Advanced security measures to protect your website from threats.
            </p>
          </div>
          <div>
            <div className="text-blue-600 text-4xl mb-4">
              <FontAwesomeIcon icon={faHeadset} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              24/7 Support
            </h3>
            <p className="text-gray-600">
              Our expert team is always available to help you with any issues.
            </p>
          </div>
          <div>
            <div className="text-blue-600 text-4xl mb-4">
              <FontAwesomeIcon icon={faSyncAlt} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              30-Day Guarantee
            </h3>
            <p className="text-gray-600">
              Try our services risk-free with our money-back guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
