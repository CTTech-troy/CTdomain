import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const templates = [
  {
    id: 1,
    category: "portfolio",
    price: "₦30,000",
    title: "Creative Portfolio",
    description: "Perfect for photographers, designers, and creative professionals.",
    image: "https://readdy.ai/api/search-image?query=modern%20minimalist%20portfolio%20website%20template%20with%20clean%20layout%2C%20white%20background%2C%20professional%20photography%20showcase%2C%20elegant%20typography%2C%20responsive%20design%2C%20portfolio%20gallery%2C%20about%20section%2C%20contact%20form%2C%20light%20color%20scheme%2C%20creative%20professional&width=600&height=338&seq=1&orientation=landscape"
  },
  {
    id: 2,
    category: "business",
    price: "₦50,000",
    title: "Corporate Business",
    description: "Professional template for companies and service providers.",
    image: "https://readdy.ai/api/search-image?query=professional%20business%20website%20template%20with%20corporate%20layout%2C%20light%20background%2C%20business%20meeting%20image%2C%20service%20sections%2C%20team%20profiles%2C%20testimonials%2C%20contact%20information%2C%20clean%20modern%20design%2C%20professional%20look%2C%20responsive%20layout&width=600&height=338&seq=2&orientation=landscape"
  },
  {
    id: 3,
    category: "blog",
    price: "₦30,000",
    title: "Modern Blog",
    description: "Clean and minimalist design for bloggers and content creators.",
    image: "https://readdy.ai/api/search-image?query=modern%20blog%20website%20template%20with%20clean%20layout%2C%20featured%20posts%20section%2C%20sidebar%20with%20categories%2C%20search%20functionality%2C%20author%20profiles%2C%20comment%20section%2C%20reading%20time%20indicator%2C%20newsletter%20signup%2C%20minimalist%20design%2C%20responsive%20layout&width=600&height=338&seq=3&orientation=landscape"
  },
  {
    id: 4,
    category: "ecommerce",
    price: "₦100,000",
    title: "Online Store",
    description: "Complete eCommerce solution with product pages and checkout.",
    image: "https://readdy.ai/api/search-image?query=ecommerce%20website%20template%20with%20product%20grid%20layout%2C%20shopping%20cart%2C%20product%20details%20page%2C%20checkout%20process%2C%20payment%20options%2C%20product%20categories%2C%20search%20functionality%2C%20wishlist%20feature%2C%20customer%20reviews%2C%20responsive%20design&width=600&height=338&seq=4&orientation=landscape"
  },
  {
    id: 5,
    category: "portfolio",
    price: "₦40,000",
    title: "Artist Showcase",
    description: "Gallery-focused template for artists and illustrators.",
    image: "https://readdy.ai/api/search-image?query=artist%20portfolio%20website%20template%20with%20gallery%20layout%2C%20artwork%20showcase%2C%20artist%20bio%2C%20exhibition%20history%2C%20contact%20form%2C%20minimalist%20design%2C%20fullscreen%20image%20viewer%2C%20project%20categories%2C%20light%20background%2C%20responsive%20design&width=600&height=338&seq=5&orientation=landscape"
  },
  {
    id: 6,
    category: "business",
    price: "₦60,000",
    title: "Restaurant & Cafe",
    description: "Specialized template for restaurants with menu and booking.",
    image: "https://readdy.ai/api/search-image?query=restaurant%20website%20template%20with%20food%20menu%2C%20reservation%20system%2C%20chef%20profiles%2C%20food%20gallery%2C%20location%20map%2C%20opening%20hours%2C%20testimonials%2C%20about%20section%2C%20clean%20design%2C%20responsive%20layout&width=600&height=338&seq=6&orientation=landscape"
  },
  {
    id: 7,
    category: "blog",
    price: "₦35,000",
    title: "Travel Blog",
    description: "Designed for travel bloggers with map integration and galleries.",
    image: "https://readdy.ai/api/search-image?query=travel%20blog%20website%20template%20with%20destination%20guides%2C%20photo%20galleries%2C%20travel%20tips%2C%20itineraries%2C%20map%20integration%2C%20author%20profiles%2C%20social%20sharing%2C%20newsletter%20signup%2C%20responsive%20design&width=600&height=338&seq=7&orientation=landscape"
  },
  {
    id: 8,
    category: "ecommerce",
    price: "₦90,000",
    title: "Fashion Boutique",
    description: "Stylish template for clothing and fashion retailers.",
    image: "https://readdy.ai/api/search-image?query=fashion%20ecommerce%20website%20template%20with%20clothing%20products%2C%20model%20photography%2C%20size%20guides%2C%20product%20categories%2C%20wishlist%2C%20shopping%20cart%2C%20checkout%20process%2C%20customer%20reviews%2C%20responsive%20design&width=600&height=338&seq=8&orientation=landscape"
  }
];

const categories = ["all", "portfolio", "business", "blog", "ecommerce"];

export default function WebsiteBuilderDashboard() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTemplates =
    activeCategory === "all"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

  useEffect(() => {
    document.title = "Website Builder Dashboard";
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6 fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800">
            Website Builder Dashboard
          </h1>
          <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
            <i className="ri-user-line text-gray-600 ri-lg"></i>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto pt-24 px-6 pb-16">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Create Your Dream Website Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Choose from our professionally designed templates or start from
            scratch to build a website that perfectly represents your brand.
          </p>
          <Link to="/WebDashboard" className="inline-block" data-readdy="true">
            <button className="bg-[#6366f1] text-white px-6 py-3 rounded-[8px] font-medium hover:bg-[#4f46e5]/90 transition-colors flex items-center mx-auto">
              <div className="w-5 h-5 mr-2 flex items-center justify-center">
                <i className="ri-add-line"></i>
              </div>
              Start from Scratch
            </button>
          </Link>
        </section>

        {/* Category Filters */}
        <section className="mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Pre-built Templates
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    activeCategory === cat
                      ? "bg-[#4f46e5] text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Template Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-3 right-3 bg-[#4f46e5] text-white text-sm font-medium px-3 py-1 rounded-full">
                  {template.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {template.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {template.description}
                </p>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 rounded-[8px] transition-colors">
                  Select Template
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
