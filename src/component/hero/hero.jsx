import React, { useState } from "react";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedTld, setSelectedTld] = useState(".com");
  const [isSearching, setIsSearching] = useState(false);

  const popularTlds = [
    { tld: ".com", price: "$12.99" },
    { tld: ".net", price: "$14.99" },
    { tld: ".org", price: "$13.99" },
    { tld: ".io", price: "$39.99" },
    { tld: ".dev", price: "$15.99" },
    { tld: ".app", price: "$16.99" },
    { tld: ".co", price: "$24.99" },
    { tld: ".site", price: "$11.99" },
    { tld: ".online", price: "$9.99" },
    { tld: ".tech", price: "$49.99" },
    { tld: ".store", price: "$29.99" },
    { tld: ".blog", price: "$19.99" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedSearchTerm = searchTerm.trim();
    if (!trimmedSearchTerm) return;

    setIsSearching(true);

    // Simulate API call for domain availability check
    setTimeout(() => {
      const isAvailable = Math.random() > 0.5;
      const domainName = trimmedSearchTerm + selectedTld;

      setSearchResults({
        available: isAvailable,
        domain: domainName,
        price: isAvailable ? "$12.99/year" : "",
      });

      // Generate alternative suggestions if not available
      if (!isAvailable) {
        const altKeywords = ["1", "web", "site", "online"];
        const altSuggestions = altKeywords.map(
          (suffix) => `${trimmedSearchTerm}${suffix}${selectedTld}`
        );
        setSuggestions(altSuggestions);
      } else {
        setSuggestions([]);
      }

      setIsSearching(false);
    }, 800);
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=Modern%20abstract%20technology%20background%20with%20blue%20gradient%2C%20soft%20light%20rays%2C%20and%20geometric%20patterns.%20Clean%20minimalist%20design%20with%20space%20for%20text%20on%20the%20left%20side.%20Professional%2C%20corporate%20feel%20suitable%20for%20a%20tech%20company%20website.&width=1440&height=600&seq=1&orientation=landscape"
            alt="Hero background"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Find Your Perfect Domain Name
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Secure your online presence with our fast, reliable domain
              registration and hosting services.
            </p>
            <div className="bg-white p-1 rounded-lg shadow-lg">
              <form
                onSubmit={handleSearch}
                className="flex flex-col md:flex-row"
              >
                <div className="flex-grow relative">
                  <input
                    type="text"
                    className="w-full px-4 py-3 text-gray-700 border-none focus:outline-none text-lg"
                    placeholder="Find your domain name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <select
                      id="tldSelect"
                      className="appearance-none bg-transparent border-none text-blue-600 font-medium cursor-pointer focus:outline-none pr-6 hover:bg-gray-50 rounded-md"
                      value={selectedTld}
                      onChange={(e) => setSelectedTld(e.target.value)}
                      style={{
                        maxHeight: "300px",
                        scrollbarWidth: "thin",
                        scrollbarColor: "#3B82F6 #E5E7EB",
                      }}
                    >
                      {popularTlds.map(({ tld, price }) => (
                        <option
                          key={tld}
                          value={tld}
                          className="bg-white text-gray-700 py-2 px-4 hover:bg-blue-50"
                        >
                          {tld} - {price}/year
                        </option>
                      ))}
                    </select>
                    <i className="fas fa-chevron-down text-blue-600 absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none"></i>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-2 md:mt-0 md:ml-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200 cursor-pointer whitespace-nowrap !rounded-button"
                >
                  {isSearching ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : (
                    <>Search</>
                  )}
                </button>
              </form>
            </div>
            <div className="flex flex-wrap mt-4 gap-2">
              {popularTlds.map(({ tld, price }) => (
                <button
                  key={tld}
                  onClick={() => setSelectedTld(tld)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors cursor-pointer whitespace-nowrap !rounded-button group relative ${
                    selectedTld === tld
                      ? "bg-blue-600 text-white"
                      : "bg-white/80 text-gray-700 hover:bg-white"
                  }`}
                >
                  {tld}
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {price}/year
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchResults && (
        <section className="bg-white py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Domain Search Results</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-8 shadow-sm">
              <div className="flex items-center justify-between flex-wrap">
                <div className="flex items-center">
                  <i className={`fas fa-${searchResults.available ? "check-circle text-green-500" : "times-circle text-red-500"} text-2xl mr-3`}></i>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {searchResults.domain}
                    </h3>
                    <p className="text-gray-600">
                      {searchResults.available  ? "Available for registration" : "This domain is already taken"}
                    </p>
                  </div>
                </div>
                {searchResults.available && (
                  <div className="mt-4 md:mt-0 flex items-center">
                    <span className="text-xl font-bold text-blue-600 mr-4">
                      {searchResults.price}
                    </span>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200 cursor-pointer whitespace-nowrap !rounded-button">
                      <i className="fas fa-cart-plus mr-2"></i>
                      Add to Cart
                    </button>
                  </div>
                )}
              </div>
            </div>
            {suggestions.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Alternative Suggestions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-lg font-medium text-gray-800">
                            {suggestion}
                          </h4>
                          <p className="text-green-600 text-sm">Available</p>
                        </div>
                        <div className="text-right">
                          <p className="text-blue-600 font-bold">$9.99/year</p>
                          <button className="mt-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition duration-200 cursor-pointer whitespace-nowrap !rounded-button">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Hero