"use client";

import { FaEnvelope, FaPhoneAlt, FaGithub, FaFacebookF, FaWhatsapp } from 'react-icons/fa'; // Import des icônes de react-icons

export default function Contact() {
  const contact = {
    email: "ghleomyre@gmail.com",
    whatsapp: "0385807810",
    github: "https://github.com/Leomyre",
    facebook: "https://www.facebook.com/Akari.Leomyre",
  };

  return (
    <div className="bg-gray-800/30 p-8 rounded-lg backdrop-filter backdrop-blur-lg shadow-xl border border-gray-700/20">
      <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gray-100">
        Contact
      </h2>
      <div className="flex flex-col items-center bg-gray-900/50 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
        {contact ? (
          <div className="space-y-4">
            <p className="flex items-center">
              <FaEnvelope className="h-6 w-6 text-blue-300 mr-2" />
              <strong className="text-blue-300 mr-2">Email:</strong>
              <a
                href={`mailto:${contact.email}`}
                className="text-gray-200 hover:text-blue-400 transition-colors duration-300"
              >
                {contact.email}
              </a>
            </p>

            <p className="flex items-center">
              <FaWhatsapp className="h-6 w-6 text-blue-300 mr-2" />
              <strong className="text-blue-300 mr-2">WhatsApp:</strong>
              <span className="text-gray-200">{contact.whatsapp}</span>
            </p>

            <p className="flex items-center">
              <FaGithub className="h-6 w-6 text-blue-300 mr-2" />
              <strong className="text-blue-300 mr-2">GitHub:</strong>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                GitHub de Léomyre
              </a>
            </p>

            <p className="flex items-center">
              <FaFacebookF className="h-6 w-6 text-blue-300 mr-2" />
              <strong className="text-blue-300 mr-2">Facebook:</strong>
              <a
                href={contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                Léomyre
              </a>
            </p>
          </div>
        ) : (
          <p className="text-center text-gray-200">
            Aucune information de contact disponible.
          </p>
        )}
      </div>
    </div>
  );
}
