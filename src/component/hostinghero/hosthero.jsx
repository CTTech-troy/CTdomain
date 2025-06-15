import React from "react";


const HostHero = () => {
    return (
      <>
        <div className="bg-primary text-white text-center py-2 text-sm">
          <div className="container mx-auto px-4">
            <p>
              Limited Time Offer: Get .com domains for just $8.88/year!{" "}
              <a href="#" className="underline font-medium">
                Shop Now
              </a>
            </p>
          </div>
        </div>

        {/* Hero Section */}
        <section
          className="hero-section relative"
          style={{
            backgroundImage:
              "url('https://static.nc-img.com/hosting/frontend/8f23e76e-d07a1a45bf7e/modules/hosting-landing/assets/images/hosting-hero-banner.4fe95a1d4d246946641f8f350f4d1fcb.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/50"></div>
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Web hosting for every need
              </h1>
              <p className="text-xl mb-8">
               Your path to the perfect hosting plan starts here
              </p>
              <div className="flex justify-center">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200 cursor-pointer whitespace-nowrap !rounded-button">
                 Find your perfect plan
                </button>   
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default HostHero;