'use client';

import { useState, useEffect } from 'react';
import UrlConfig from '../../util/config';
import Loading from '../../components/Loading';
import SkillBar from '../../components/SkillBar';
import Caractere from '../../components/Caractere';

// pages/skills.tsx

export default function Skills() {
  const skills = [
  { id: 1, name: 'HTML & CSS', level: 90 },
  { id: 2, name: 'Django', level: 80 },
  { id: 3, name: 'PHP', level: 78 },
  { id: 4, name: 'JavaScript', level: 75 },
  { id: 5, name: 'Python', level: 75 },
  { id: 6, name: 'React', level: 72 },
  { id: 7, name: 'NextJs', level: 70 },
  { id: 8, name: 'Laravel', level: 68 },
  { id: 9, name: 'TypeScript', level: 65 },
  { id: 10, name: 'JAVA', level: 48 }
];

  return (
    <div className="bg-blue-900 bg-opacity-50 p-8 rounded-lg backdrop-filter backdrop-blur-lg shadow-xl">
      <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-600">
        Mes Compétences
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(skill => (
          <div key={skill.id} className="bg-blue-800 bg-opacity-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-blue-300">{skill.name}</h3>
            <div className="w-full bg-blue-700 rounded-full h-2.5 mb-4">
              <div
                className="bg-gradient-to-r from-blue-300 to-blue-500 h-2.5 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-blue-200">Niveau: {skill.level}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}