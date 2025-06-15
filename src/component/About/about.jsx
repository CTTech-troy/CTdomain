import React from 'react';
import './About.css';

// Tailwind CSS configuration (moved from <script> to a JS object)


// Feature data used internally
const featureData = [
 
  {
    id: 2,
    tag: 'CUSTOMIZED TO YOUR TASTE',
    title: 'Perfect For Entrepreneurs And Enterprises',
    description:
      'Truehost Nigeria provides personalized hosting services in Nigeria befitting each of your needs. If you are looking to scale your operations from where you are now to the next level, you are in the right place. Our web hosting packages in Nigeria, domains, and servers come with adequate resources to fuel your growth.',
    imageUrl:
      'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Business Analytics',
    linkText: 'Launch Today',
    linkHref: '#',
  },
  {
    id: 3,
    tag: 'ENTERPRISE-GRADE INFRASTRUCTURE',
    title: 'Reliable Cloud Hosting Solutions',
    description:
      'Our state-of-the-art data centers provide 99.9% uptime guarantee with redundant systems and continuous monitoring. Experience lightning-fast loading speeds with SSD storage and optimized server configurations designed for maximum performance and security.',
    imageUrl:
      'https://readdy.ai/api/search-image?query=professional%20cloud%20computing%20server%20room%20with%20modern%20technology%2C%20high-performance%20servers%2C%20clean%20and%20organized%20cables%2C%20blue%20led%20lights%2C%20technical%20environment%2C%20data%20center%2C%20enterprise-grade%20hardware%2C%20cooling%20systems&width=600&height=400&seq=feature3&orientation=landscape',
    imageAlt: 'Cloud Infrastructure',
    linkText: 'Explore Plans',
    linkHref: '#',
  },
  {
    id: 4,
    tag: 'ADVANCED SECURITY FEATURES',
    title: 'Keep Your Website Protected',
    description:
      'We implement multiple layers of security including free SSL certificates, DDoS protection, regular malware scanning, and automated backups. Our dedicated security team works around the clock to ensure your data remains safe from emerging threats.',
    imageUrl:
      'https://readdy.ai/api/search-image?query=professional%20website%20security%20visualization%2C%20digital%20protection%20shield%2C%20firewall%20concept%2C%20cyber%20security%20measures%2C%20code%20protection%2C%20SSL%20certificate%2C%20data%20encryption%2C%20modern%20tech%20aesthetic%2C%20blue%20and%20white%20color%20scheme&width=600&height=400&seq=feature4&orientation=landscape',
    imageAlt: 'Website Security',
    linkText: 'Learn More',
    linkHref: '#',
  },
  {
  id: 5,
  tag: 'INTUITIVE DRAG-AND-DROP TOOLS',
  title: 'Build Beautiful Websites Without Coding',
  description:
    'Our Website Builder empowers you to create professional-looking websites with ease. Use pre-designed templates, drag-and-drop blocks, and real-time editing to bring your vision to life—no coding required.',
  imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
  imageAlt: 'Website Builder Interface',
  linkText: 'Try the Builder',
  linkHref: '#',
}

];

// Single Feature
const Feature = ({ feature, index }) => {
  const isEven = (index + 1) % 2 === 0;
  const layout = isEven ? 'md:flex-row-reverse' : '';

  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${layout}`}>
      <div className="w-full md:w-1/2">
        <img
          src={feature.imageUrl}
          alt={feature.imageAlt}
          className="w-full h-auto object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="w-full md:w-1/2">
        <p className="text-gray-500 text-sm font-medium uppercase mb-2">{feature.tag}</p>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{feature.title}</h3>
        <p className="text-gray-600 mb-6">{feature.description}</p>
        <a href={feature.linkHref} className="text-indigo-600 font-medium hover:underline inline-flex items-center">
          {feature.linkText}
          <i className="ri-arrow-right-line ml-2"></i>
        </a>
      </div>
    </div>
  );
};

// About Section
const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-16">
          {featureData.map((feature, index) => (
            <Feature key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
