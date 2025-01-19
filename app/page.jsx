import Link from 'next/link';
import { PaperClipIcon, AcademicCapIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import FavoriteTechnologies from '@/components/FavoriteTechnologies';
import Caractere from '@/components/Caractere';
import Services from '@/components/Services';
import Contact from '@/app/contact/page';
import Projects from '@/app/projects/page';
import AnimatedIntro from '../components/AnimatedIntro';
import AnimatedBio from '../components/AnimatedBio';

export default function Home() {
  const user = {
    name: "Hello, I am Léomyre",
    bio: 'A developer passionate about modern technologies and creating web applications. I love taking on technical challenges and learning new skills every day.',
    image: '/leomyre.jpg',
    cv: '/cv_leomyre.pdf',
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-gray-100 px-6 py-8">
  <div className="bg-gray-800/40 p-10 rounded-lg shadow-2xl border border-gray-700/30 max-w-4xl w-full h-full">
        <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gray-100">
          Welcome to my Portfolio
        </h1>
        
        <div className="mb-6 flex justify-center">
          <img 
            src={user.image} 
            alt="User portrait" 
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg ring-4 ring-blue-500" 
          />
        </div>

        <div className="bg-gray-800/30 p-8 rounded-lg backdrop-filter backdrop-blur-lg shadow-xl border border-gray-700/20 my-8">
          <div className="text-center">
        <AnimatedIntro name={user.name} /></div>
          <div className="flex flex-col items-center bg-gray-900/50 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105" >
          <div className="text-center">
        <AnimatedBio name={user.bio} /></div>
            
          </div>
        </div>
        

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <Link 
            href="/projects" 
            className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            aria-label="View my projects"
          >
            <PaperClipIcon className="h-6 w-6 mr-2" />
            View my projects
          </Link>
          <Link 
            href="/skills" 
            className="flex items-center bg-gray-600 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            aria-label="My skills"
          >
            <AcademicCapIcon className="h-6 w-6 mr-2" />
            My skills
          </Link>
          <a 
            href={user.cv} 
            download 
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            aria-label="Download my CV"
          >
            <ArrowDownTrayIcon className="h-6 w-6 mr-2" />
            Download my CV
          </a>
        </div>

        {/* Spacing between sections */}
        <div className="space-y-12">
          <Caractere />
          <Services />
          <Projects />
          <FavoriteTechnologies />
        </div>

        {/* Contact section with margin */}
        <div className="mt-12">
          <Contact />
        </div>
      </div>
    </div>
  );
}
