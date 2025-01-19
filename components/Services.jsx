 import { FaCode, FaSearch, FaMobileAlt } from 'react-icons/fa';

export default function Services() {

const services = [
  {
    id: 1,
    title: 'Web Application Development',
    description: "Building modern, scalable, and high-performance web applications tailored to your needs.",
    icon: <FaCode className="text-5xl text-blue-400 mb-4" />, // React icon
  },
  {
    id: 2,
    title: 'SEO Optimization',
    description: "Enhancing your website’s visibility and ranking on search engines through proven strategies.",
    icon: <FaSearch className="text-5xl text-blue-400 mb-4" />, // React icon
  },
  {
    id: 3,
    title: 'Mobile Application Development',
    description: "Creating responsive, intuitive, and user-friendly mobile applications for iOS and Android.",
    icon: <FaMobileAlt className="text-5xl text-blue-400 mb-4" />, // React icon
  },
];


  return (
    <div className="bg-gray-800/30 p-8 rounded-lg backdrop-filter backdrop-blur-lg shadow-xl border border-gray-700/20 my-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gray-100">
        My Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center bg-gray-900/50 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            {service.icon}
            <h3 className="text-2xl font-semibold mb-2 text-gray-100">{service.title}</h3>
            <p className="text-gray-300 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
