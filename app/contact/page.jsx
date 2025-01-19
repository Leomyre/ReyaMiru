'use client'

import { useState, useEffect } from 'react'
import Loading from '@/components/Loading';
import UrlConfig from '@/util/config'

export default function Contact() {
  const contact = {
    email: 'ghleomyre@gmail.com',
    phone: '+261385807810',
    github: 'https://github.com/Leomyre',
    facebook: 'https://www.facebook.com/Akari.Leomyre',
  };

  
  return (
    <div className="bg-gray-800/30 p-8 rounded-lg backdrop-filter backdrop-blur-lg shadow-xl border border-gray-700/20">
      <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gray-100">
        Contact
      </h2>
      {contact ? (
        <div className="space-y-4">
          <p className="flex items-center">
  <strong className="text-blue-300 mr-2">Email:</strong>
  <a
    href={`mailto:${contact.email}`}
    className="text-gray-200 hover:text-blue-400 transition-colors duration-300"
  >
    {contact.email}
  </a>
</p>

          <p className="flex items-center">
            <strong className="text-blue-300 mr-2">Téléphone:</strong>
            <span className="text-gray-200">{contact.phone}</span>
          </p>
          <p className="flex items-center">
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
        <p className="text-center text-gray-200">Aucune information de contact disponible.</p>
      )}
    </div>
  )
}

