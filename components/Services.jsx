import { CodeBracketIcon, ServerIcon } from '@heroicons/react/24/solid';
import { FaDatabase } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Développeur Front-End',
      description:
        "Création d'interfaces utilisateur modernes et réactives avec les dernières technologies comme React et Next.js.",
      icon: CodeBracketIcon,
    },
    {
      id: 2,
      title: 'Développeur Back-End',
      description:
        "Mise en place de serveurs robustes et sécurisés avec Django, Node.js, et PHP pour répondre à vos besoins métiers.",
      icon: ServerIcon,
    },
    {
      id: 3,
      title: 'Gestion de Base de Données',
      description:
        "Conception et optimisation de bases de données performantes avec MariaDB, MySQL ou PostgreSQL.",
      icon: FaDatabase, // Remplacement de DatabaseIcon par CircleStackIcon
    },
  ];

  return (
    <div className="bg-gray-800/30 p-8 rounded-lg backdrop-filter backdrop-blur-lg shadow-xl border border-gray-700/20 my-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gray-100">
        Mes Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center bg-gray-900/50 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <service.icon className="text-6xl text-blue-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-gray-100">{service.title}</h3>
            <p className="text-gray-300 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
