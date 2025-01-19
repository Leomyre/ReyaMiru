"use client"

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedBio = ({ name }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
  const cursorControls = useAnimation();

  useEffect(() => {
    let isMounted = true;

    const animateText = async () => {
      for (let i = 0; i <= name.length; i++) {
        if (!isMounted) break;
        setDisplayedText(name.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 60));
      }
        setIsComplete(true);
    };

   const animateCursor = async () => {
      if (isMounted && !isComplete) {
        // Keep cursor visible while typing
        await cursorControls.start({
          opacity: [1, 0],
          transition: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
          },
        });
      } else if (isComplete) {
        // Make cursor invisible after typing is complete
        await cursorControls.start({ opacity: 0 });
      }
    };

    animateText();
    animateCursor();

    return () => {
      isMounted = false;
    };
  }, [name, cursorControls, isComplete]);

  return (
    <p className="text-3xl font-light mb-4">
      {' '}
      <span className="text-white relative">
        {displayedText}
        <motion.span
          className="absolute -right-1 top-0 h-full w-[2px] bg-white"
          animate={cursorControls}
        />
      </span>
    </p>
  );
};

export default AnimatedBio;
