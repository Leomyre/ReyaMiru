import Link from 'next/link';
import { PaperClipIcon, AcademicCapIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import FavoriteTechnologies from '@/components/FavoriteTechnologies';
import Caractere from '@/components/Caractere';
import Services from '@/components/Services';
import Contact from '@/app/contact/page';

export default function Home() {
  const user = {
    name: 'Léomyre',
    bio: 'Développeur passionné par les technologies modernes et la création d\'applications web. J\'aime relever des défis techniques et apprendre de nouvelles compétences chaque jour.',
    image: '/leomyre.jpg',
    cv: '/cv_leomyre.pdf',
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-center text-gray-100 px-4">
      <div className="bg-gray-800/40 p-10 rounded-lg shadow-2xl border border-gray-700/30 max-w-4xl w-full">
        <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gray-100">
          Bienvenue sur mon Portfolio
        </h1>
        
        <div className="mb-6 flex justify-center">
          <img 
            src={user.image} 
            alt="Portrait de l'utilisateur" 
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg ring-4 ring-blue-500" 
          />
        </div>
        
        <h2 className="text-3xl font-bold mb-4">
          Je suis <span className="text-blue-300">{user.name}</span>
        </h2>
        <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-200">
          {user.bio}
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <Link 
            href="/projects" 
            className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            aria-label="Voir mes projets"
          >
            <PaperClipIcon className="h-6 w-6 mr-2" />
            Voir mes projets
          </Link>
          <Link 
            href="/skills" 
            className="flex items-center bg-gray-600 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            aria-label="Mes compétences"
          >
            <AcademicCapIcon className="h-6 w-6 mr-2" />
            Mes compétences
          </Link>
          <a 
            href={user.cv} 
            download 
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            aria-label="Télécharger mon CV"
          >
            <ArrowDownTrayIcon className="h-6 w-6 mr-2" />
            Télécharger mon CV
          </a>
        </div>

        {/* Espacement entre les sections */}
        <div className="space-y-12">
          <Caractere />
          <Services />
          <FavoriteTechnologies />
        </div>

        {/* Section Contact avec marge */}
        <div className="mt-12">
          <Contact />
        </div>
      </div>
    </div>
  );
}
