'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Flashcard({ front, back }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [height, setHeight] = useState('auto');

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Calculate the height of the content to ensure smooth flipping
  useEffect(() => {
    const calculateHeight = () => {
      const frontElement = document.getElementById('front-content');
      const backElement = document.getElementById('back-content');
      
      if (frontElement && backElement) {
        const frontHeight = frontElement.scrollHeight;
        const backHeight = backElement.scrollHeight;
        setHeight(`${Math.max(frontHeight, backHeight) + 40}px`);
      }
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);
    
    return () => {
      window.removeEventListener('resize', calculateHeight);
    };
  }, [front, back]);

  return (
    <div 
      className="flashcard-container cursor-pointer" 
      onClick={handleFlip}
      style={{ height }}
    >
      <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
        <div className="flashcard-front bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div id="front-content">
            <h3 className="text-xl font-semibold mb-2">Question:</h3>
            <p>{front}</p>
          </div>
          <div className="text-sm text-gray-500 mt-4">Click to flip</div>
        </div>
        <div className="flashcard-back bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div id="back-content">
            <h3 className="text-xl font-semibold mb-2">Answer:</h3>
            <p>{back}</p>
          </div>
          <div className="text-sm text-gray-500 mt-4">Click to flip back</div>
        </div>
      </div>
      
      <style jsx>{`
        .flashcard-container {
          perspective: 1000px;
          margin-bottom: 1rem;
          transition: height 0.3s ease;
        }
        
        .flashcard {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s;
        }
        
        .flashcard.flipped {
          transform: rotateY(180deg);
        }
        
        .flashcard-front, .flashcard-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          overflow-y: auto;
        }
        
        .flashcard-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
