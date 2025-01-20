'use client';

import { useState } from 'react';
import { FaEnvelope, FaWhatsapp, FaGithub, FaFacebookF, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function ContactIcon() {
  const [isVisible, setIsVisible] = useState(false);

  const contact = {
    email: 'ghleomyre@gmail.com',
    whatsapp: '0385807810',
    github: 'https://github.com/Leomyre',
    facebook: 'https://www.facebook.com/Akari.Leomyre',
  };

  return (
    <>
      {/* Bouton fléché pour afficher/masquer l'élément de contact */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 bg-gray-800/30 p-2 rounded-full backdrop-filter backdrop-blur-lg shadow-xl border border-gray-700/20 md:hidden"
        aria-label={isVisible ? 'Masquer les contacts' : 'Afficher les contacts'}
      >
        {isVisible ? (
          <FaChevronUp className="h-6 w-6 text-gray-200" />
        ) : (
          <FaChevronDown className="h-6 w-6 text-gray-200" />
        )}
      </button>

      {/* Élément de contact */}
      <div
        className={`fixed right-0 top-1/2 transform -translate-y-1/2 bg-gray-800/30 p-4 rounded-l-lg backdrop-filter backdrop-blur-lg shadow-xl border border-gray-700/20 flex flex-col space-y-4 z-50 md:left-auto md:top-auto md:transform-none md:translate-y-0 md:space-x-4 md:flex-row md:w-auto ${
          isVisible ? 'block' : 'hidden'
        }`}
      >
        <a
          href={`mailto:${contact.email}`}
          className="text-gray-200 hover:text-blue-400 transition-colors duration-300 flex items-center"
          aria-label="Email"
        >
          <FaEnvelope className="h-6 w-6" />
        </a>
        <a
          href={`https://wa.me/${contact.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-200 hover:text-blue-400 transition-colors duration-300 flex items-center"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="h-6 w-6" />
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-200 hover:text-blue-400 transition-colors duration-300 flex items-center"
          aria-label="GitHub"
        >
          <FaGithub className="h-6 w-6" />
        </a>
        <a
          href={contact.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-200 hover:text-blue-400 transition-colors duration-300 flex items-center"
          aria-label="Facebook"
        >
          <FaFacebookF className="h-6 w-6" />
        </a>
      </div>
    </>
  );
}
