'use client';

import { useState, useEffect } from 'react';
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
    <div className="bg-gray-800/30 p-8 rounded-lg backdrop-filter backdrop-blur-lg shadow-xl border border-gray-700/20 my-8">
      <h2 className="text-3xl font-bold mb-6 text-white">Mes compétences</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <SkillBar key={skill.id} name={skill.name} level={skill.level} />
        ))}
      </div>
      <Caractere/>
    </div>
  );
}