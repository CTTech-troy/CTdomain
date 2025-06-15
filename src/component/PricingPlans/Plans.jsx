import React, { useState } from 'react';

// Sample Data for Hosting Plans
const hostingPlansData = {
  "Web Hosting": [
    {
      title: "WebHosting Starter",
      description: "With us you can never go wrong",
      originalPrice: "2,500",
      currentPrice: "992",
      savePercentage: "60%",
      billingCycleText: "992/mo when billed triennially.",
      features: [
        "Hosts 10 Websites",
        "WordPress Hosting & other CMS",
        "~25,000 visits monthly",
        "Free Website Migrations",
        "30 GB SSD Storage",
        "1-click Installer",
        "Free .com.ng domain",
        "Free automated SSL",
        "Unlimited bandwidth",
        "Unlimited Email Accounts",
        "Free Daily Backups",
        "Free Website Builder",
        "Free Website Templates",
        "Shared IP Address",
        "Powered by Cpanel",
      ],
    },
    {
      title: "WebHosting Pro",
      description: "With us you can never go wrong",
      originalPrice: "9,625",
      currentPrice: "6125",
      savePercentage: "36%",
      billingCycleText: "6125/mo when billed triennially.",
      features: [
        "Hosts 30 Websites",
        "WordPress Hosting & other CMS",
        "~50,000 visits monthly",
        "Free Website Migrations",
        "50 GB SSD Storage",
        "1-click Installer",
        "Free .com or .com.ng",
        "Free automated SSL",
        "Unlimited bandwidth",
        "Unlimited Email Accounts",
        "Free Daily Backups",
        "Free Website Builder",
        "Free Website Templates",
        "Shared IP Address",
        "Powered by Cpanel",
      ],
    },
    {
      title: "WebHosting Unlimited",
      description: "With us you can never go wrong",
      originalPrice: "11,200", // This was invisible in original, keeping it for data structure
      currentPrice: "9300",
      savePercentage: "17%",
      billingCycleText: "9300/mo when billed triennially.",
      features: [
        "Unlimited SSD Disk Space",
        "Free .COM.NG Domain (applicable on annual basis and above)",
        "Free SSL Certificate",
        "Unlimited Email Accounts",
        "Unlimited Bandwidth Transfer",
        "99.99% Uptime",
        "Host Unlimited domains",
      ],
    },
  ],
  "VPS Hosting": [
    {
      title: "VPS Starter",
      description: "Perfect for small businesses",
      originalPrice: "15,000",
      currentPrice: "9,000",
      savePercentage: "40%",
      billingCycleText: "9,000/mo when billed triennially",
      features: [
        "2 vCPU Cores",
        "2GB RAM",
        "50GB SSD Storage",
        "2TB Bandwidth",
        "1 Dedicated IP",
        "Full Root Access",
      ],
    },
    {
      title: "VPS Professional",
      description: "Ideal for growing businesses",
      originalPrice: "25,000",
      currentPrice: "16,250",
      savePercentage: "35%",
      billingCycleText: "16,250/mo when billed triennially",
      features: [
        "4 vCPU Cores",
        "4GB RAM",
        "100GB SSD Storage",
        "4TB Bandwidth",
        "2 Dedicated IPs",
        "Full Root Access",
      ],
    },
    {
      title: "VPS Enterprise",
      description: "For large-scale operations",
      originalPrice: "40,000",
      currentPrice: "28,000",
      savePercentage: "30%",
      billingCycleText: "28,000/mo when billed triennially",
      features: [
        "8 vCPU Cores",
        "8GB RAM",
        "200GB SSD Storage",
        "8TB Bandwidth",
        "3 Dedicated IPs",
        "Full Root Access",
      ],
    },
  ],
  "Managed Cloud Hosting": [
    {
      title: "Cloud Basic",
      description: "Start your cloud journey",
      originalPrice: "20,000",
      currentPrice: "11,000",
      savePercentage: "45%",
      billingCycleText: "11,000/mo when billed triennially",
      features: [
        "2 CPU Cores",
        "4GB RAM",
        "80GB SSD Storage",
        "3TB Bandwidth",
        "Managed Support",
        "Auto Scaling",
      ],
    },
    {
      title: "Cloud Business",
      description: "Professional cloud solution",
      originalPrice: "35,000",
      currentPrice: "21,000",
      savePercentage: "40%",
      billingCycleText: "21,000/mo when billed triennially",
      features: [
        "4 CPU Cores",
        "8GB RAM",
        "160GB SSD Storage",
        "6TB Bandwidth",
        "24/7 Priority Support",
        "Advanced Monitoring",
      ],
    },
    {
      title: "Cloud Enterprise",
      description: "Enterprise-grade cloud hosting",
      originalPrice: "60,000",
      currentPrice: "39,000",
      savePercentage: "35%",
      billingCycleText: "39,000/mo when billed triennially",
      features: [
        "8 CPU Cores",
        "16GB RAM",
        "320GB SSD Storage",
        "12TB Bandwidth",
        "Dedicated Support Team",
        "Enterprise Security",
      ],
    },
  ],
};

// PriceCard Component
const PriceCard = ({ plan }) => (
  <div className="price-card bg-white rounded-lg shadow-md p-6 flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300 w-full max-w-md mx-auto">
    <h2 className="text-xl font-bold text-gray-800 mb-2">{plan.title}</h2>
    <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className={`text-xs text-gray-500 line-through ${plan.originalPrice === "" ? "invisible" : ""}`}>
          NGN {plan.originalPrice}
        </span>
        <span className="bg-blue-700 text-white text-xs px-3 py-1 rounded-full">
          Save {plan.savePercentage}
        </span>
      </div>
      <div className="flex items-baseline">
        <span className="text-gray-800 font-bold text-3xl">NGN {plan.currentPrice}</span>
        <span className="text-gray-500 text-sm ml-1">/mon</span>
      </div>
    </div>
    <button className="select-btn bg-blue-700 text-white py-3 px-6 rounded font-medium w-full mb-4 whitespace-nowrap hover:bg-blue-800 transition-all duration-300" style={{border: '1px solid #0047AB'}}>
      Select
    </button>
    <p className="text-xs text-gray-500 mb-6">NGN {plan.billingCycleText}</p>
    <ul className="space-y-3 mt-auto">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <div className="w-5 h-5 flex items-center justify-center text-green-500 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M19.952 1.325a.75.75 0 0 1 .298.647v9.646l-4.755 6.007a.75.75 0 0 1-1.07.134L9.043 12.38l-4.634 4.634a.75.75 0 0 1-1.28-.53l-.11-1.328a.75.75 0 0 1 .42-1.025l3.228-2.616a.75.75 0 0 0 .285-.506V8.167a.75.75 0 0 1 .285-.506l3.228-2.616a.75.75 0 0 1 1.025-.42L19.952 1.325Z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-sm">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

// Main App Component
const Plans = () => {
  const [activeTab, setActiveTab] = useState("Web Hosting");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const currentPlans = hostingPlansData[activeTab];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-2 sm:px-4 py-8 md:py-12 max-w-7xl">
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 p-1 rounded-full flex-wrap">
            {Object.keys(hostingPlansData).map((tabName) => (
              <button
                key={tabName}
                className={`hosting-tab px-4 sm:px-6 py-2 text-sm font-medium rounded-full whitespace-nowrap mb-2 sm:mb-0 mr-2 sm:mr-0 ${
                  activeTab === tabName ? "bg-blue-700 text-white" : "text-gray-700"
                }`}
                onClick={() => handleTabClick(tabName)}
              >
                {tabName}
              </button>
            ))}
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">
          Select the perfect package for your business
        </h1>

        <div
          id="hosting-content"
          className="hosting-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {currentPlans.map((plan, index) => (
            <PriceCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;