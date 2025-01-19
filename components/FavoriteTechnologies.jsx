import { SiDjango, SiNextdotjs } from 'react-icons/si'

const technologies = [
  { 
    name: 'Django', 
    icon: SiDjango, 
    color: 'text-green-600',
    description: 'Powerful Python framework for building secure and scalable web applications.',
    features: [
      'Built-in user management and authentication',
      'Robust back-end for complex projects',
      'Support for REST APIs via Django Rest Framework',
    ]
  },
  { 
    name: 'Next.js', 
    icon: SiNextdotjs, 
    color: 'text-white',
    description: 'React framework for building modern, high-performance user interfaces.',
    features: [
      'Support for server-side rendering (SSR) for SEO',
      'Flexibility with static or dynamic rendering',
      'Optimized performance and fast page loading',
    ]
  },
]

export default function FavoriteTechnologies() {
  return (
    <div className="bg-gray-800/30 p-8 rounded-lg backdrop-filter backdrop-blur-lg shadow-xl border border-gray-700/20 my-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gray-100">
        My Favorite Technologies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center bg-gray-900/50 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
            <tech.icon className={`text-6xl sm:text-7xl md:text-8xl ${tech.color} mb-4`} />
            <h3 className="text-2xl font-semibold mb-2 text-gray-100">{tech.name}</h3>
            <p className="text-gray-300 text-center mb-4">{tech.description}</p>
            <ul className="list-disc list-inside text-gray-400">
              {tech.features.map((feature, index) => (
                <li key={index} className="mb-1">{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
