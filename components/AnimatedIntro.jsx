"use client"

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedIntro = ({ name }) => {
  const [displayedText, setDisplayedText] = useState('');
  const cursorControls = useAnimation();

  useEffect(() => {
    let isMounted = true;

    const animateText = async () => {
      for (let i = 0; i <= name.length; i++) {
        if (!isMounted) break;
        setDisplayedText(name.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    };

    const animateCursor = async () => {
      if (isMounted) {
        await cursorControls.start({
          opacity: [1, 0],
          transition: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
          },
        });
      }
    };

    animateText();
    animateCursor();

    return () => {
      isMounted = false;
    };
  }, [name, cursorControls]);

  return (
    <h2 className="text-3xl font-bold mb-4">
      {' '}
      <span className="text-blue-300 relative">
        {displayedText}
        <motion.span
          className="absolute -right-1 top-0 h-full w-[2px] bg-blue-300"
          animate={cursorControls}
        />
      </span>
    </h2>
  );
};

export default AnimatedIntro;

