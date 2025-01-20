'use client'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Chika Chat",
      description: "A secure and lightweight messaging application designed for ease of use, offering a simple yet efficient user experience with end-to-end encryption to ensure privacy and security of conversations. It focuses on providing a fast, intuitive interface for seamless communication, ideal for users who prioritize both functionality and simplicity.",
      link: "https://chika-chat.onrender.com", // Add project link if available
    },
  ];

  return (
    <div className="bg-gray-800/30 p-8 rounded-lg backdrop-filter backdrop-blur-lg shadow-xl border border-gray-700/20">
      <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gray-100">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div 
            key={project.id} 
            className="flex flex-col items-center bg-gray-900/50 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <h3 className="text-2xl font-semibold mb-3 text-blue-300">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-gray-100 transition-colors duration-300 inline-flex items-center"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
