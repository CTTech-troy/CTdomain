const Services = () => {
    return(
        <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to build and grow your online presence, all in
              one place.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Web Hosting */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:transform hover:-translate-y-1 hover:shadow-md">
              <div className="h-40 bg-blue-600 flex items-center justify-center overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20server%20rack%20with%20blue%20glowing%20lights%20in%20a%20clean%20data%20center%20environment.%20Professional%20web%20hosting%20concept%20with%20abstract%20digital%20connections%20and%20cloud%20computing%20visualization.%20Minimalist%20tech%20background.&width=400&height=300&seq=2&orientation=landscape"
                  alt="Web Hosting"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Web Hosting
                </h3>
                <p className="text-gray-600 mb-4">
                  Fast, secure hosting with 99.9% uptime guarantee and 24/7
                  support.
                </p>
                <button className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-md transition duration-200 cursor-pointer whitespace-nowrap !rounded-button">
                  Learn More
                </button>
              </div>
            </div>
            {/* SSL Certificates */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:transform hover:-translate-y-1 hover:shadow-md">
              <div className="h-40 bg-green-600 flex items-center justify-center overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Digital%20security%20concept%20with%20lock%20icon%20and%20SSL%20certificate%20visualization.%20Secure%20connection%20with%20shield%20and%20padlock%20symbols.%20Abstract%20technology%20background%20with%20encryption%20and%20data%20protection%20elements.%20Clean%20professional%20design.&width=400&height=300&seq=3&orientation=landscape"
                  alt="SSL Certificates"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  SSL Certificates
                </h3>
                <p className="text-gray-600 mb-4">
                  Protect your visitors' data and boost your site's credibility
                  and SEO.
                </p>
                <button className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-md transition duration-200 cursor-pointer whitespace-nowrap !rounded-button">
                  Learn More
                </button>
              </div>
            </div>
            {/* Business Email */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:transform hover:-translate-y-1 hover:shadow-md">
              <div className="h-40 bg-purple-600 flex items-center justify-center overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20business%20email%20concept%20with%20envelope%20icons%20and%20message%20notifications.%20Clean%20digital%20interface%20showing%20email%20application%20with%20organized%20inbox.%20Modern%20communication%20platform%20visualization%20with%20blue%20accent%20colors.&width=400&height=300&seq=4&orientation=landscape"
                  alt="Business Email"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Business Email
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional email with your domain name, spam protection, and
                  large storage.
                </p>
                <button className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-md transition duration-200 cursor-pointer whitespace-nowrap !rounded-button">
                  Learn More
                </button>
              </div>
            </div>
            {/* Website Builder */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:transform hover:-translate-y-1 hover:shadow-md">
              <div className="h-40 bg-orange-600 flex items-center justify-center overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20website%20builder%20interface%20with%20drag%20and%20drop%20elements.%20Visual%20web%20design%20tool%20showing%20responsive%20layout%20creation.%20Clean%20UI%20with%20component%20blocks%20and%20customization%20options.%20Professional%20web%20development%20concept.&width=400&height=300&seq=5&orientation=landscape"
                  alt="Website Builder"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Website Builder
                </h3>
                <p className="text-gray-600 mb-4">
                  Create a stunning website in minutes with our easy
                  drag-and-drop builder.
                </p>
                <button className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-md transition duration-200 cursor-pointer whitespace-nowrap !rounded-button">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
}
export default Services;