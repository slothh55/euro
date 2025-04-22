'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FlashcardDeck({ title, description, cards, unitNumber }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [studyMode, setStudyMode] = useState('browse'); // 'browse', 'study', 'test'
  const [knownCards, setKnownCards] = useState([]);
  const [unknownCards, setUnknownCards] = useState([]);
  const [shuffledDeck, setShuffledDeck] = useState([...Array(cards.length).keys()]);
  const [showProgress, setShowProgress] = useState(false);

  // Shuffle the deck
  const shuffleDeck = () => {
    const indices = [...Array(cards.length).keys()];
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    setShuffledDeck(indices);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  // Start study mode
  const startStudyMode = (mode) => {
    setStudyMode(mode);
    setKnownCards([]);
    setUnknownCards([]);
    shuffleDeck();
  };

  // Handle card flip
  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  // Navigate to next card
  const nextCard = () => {
    if (currentCardIndex < shuffledDeck.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    } else if (studyMode !== 'browse') {
      setShowProgress(true);
    }
  };

  // Navigate to previous card
  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  };

  // Mark card as known
  const markAsKnown = () => {
    const cardId = shuffledDeck[currentCardIndex];
    if (!knownCards.includes(cardId)) {
      setKnownCards([...knownCards, cardId]);
    }
    if (unknownCards.includes(cardId)) {
      setUnknownCards(unknownCards.filter(id => id !== cardId));
    }
    nextCard();
  };

  // Mark card as unknown
  const markAsUnknown = () => {
    const cardId = shuffledDeck[currentCardIndex];
    if (!unknownCards.includes(cardId)) {
      setUnknownCards([...unknownCards, cardId]);
    }
    if (knownCards.includes(cardId)) {
      setKnownCards(knownCards.filter(id => id !== cardId));
    }
    nextCard();
  };

  // Reset to deck view
  const resetDeck = () => {
    setStudyMode('browse');
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setShowProgress(false);
  };

  // Study again with only unknown cards
  const studyUnknownCards = () => {
    if (unknownCards.length === 0) return;
    
    setShuffledDeck([...unknownCards]);
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setShowProgress(false);
    setKnownCards([]);
    setUnknownCards([]);
  };

  // Current card based on mode and shuffled index
  const currentCard = cards[shuffledDeck[currentCardIndex]];

  // Study progress stats
  const progress = {
    total: cards.length,
    known: knownCards.length,
    unknown: unknownCards.length,
    remaining: cards.length - knownCards.length - unknownCards.length,
    percentage: Math.round((knownCards.length / cards.length) * 100)
  };

  if (showProgress) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Study Progress</h2>
        
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span>Mastery:</span>
            <span className="font-bold">{progress.percentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className="h-4 rounded-full bg-green-500" 
              style={{ width: `${progress.percentage}%` }}
            ></div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
          <div className="bg-green-100 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{progress.known}</div>
            <div className="text-sm">Known</div>
          </div>
          <div className="bg-red-100 p-4 rounded-lg">
            <div className="text-2xl font-bold text-red-600">{progress.unknown}</div>
            <div className="text-sm">Need Review</div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="text-2xl font-bold">{progress.total}</div>
            <div className="text-sm">Total Cards</div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 justify-center">
          {progress.unknown > 0 && (
            <button 
              onClick={studyUnknownCards}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
            >
              Study Unknown Cards
            </button>
          )}
          <button 
            onClick={() => startStudyMode('study')}
            className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-dark transition-colors"
          >
            Restart Study Session
          </button>
          <button 
            onClick={resetDeck}
            className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
          >
            Back to Deck
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      
      {studyMode === 'browse' ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <button 
              onClick={() => startStudyMode('study')}
              className="bg-primary text-white p-4 rounded-lg hover:bg-primary-dark transition-colors flex flex-col items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="font-bold">Study Mode</span>
              <span className="text-sm">Track your progress</span>
            </button>
            
            <button 
              onClick={() => startStudyMode('test')}
              className="bg-secondary text-white p-4 rounded-lg hover:bg-secondary-dark transition-colors flex flex-col items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <span className="font-bold">Test Mode</span>
              <span className="text-sm">Challenge yourself</span>
            </button>
          </div>
          
          <div className="border-t pt-6">
            <h3 className="font-bold mb-3">Browse All Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {cards.map((card, index) => (
                <div 
                  key={index}
                  className="border rounded-md p-3 hover:bg-gray-50 cursor-pointer"
                  onClick={() => {
                    setShuffledDeck([...Array(cards.length).keys()]);
                    setCurrentCardIndex(index);
                    setStudyMode('browse');
                    setIsFlipped(false);
                  }}
                >
                  <div className="text-sm font-medium text-gray-500 mb-1">Card {index + 1}</div>
                  <div className="font-medium truncate">{card.front}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Link href={`/units/${unitNumber}`} className="text-primary hover:text-primary-dark">
              Back to Unit {unitNumber}
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-4 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Card {currentCardIndex + 1} of {shuffledDeck.length}
            </div>
            {studyMode === 'study' && (
              <div className="flex gap-2">
                <div className="text-sm text-green-600">Known: {knownCards.length}</div>
                <div className="text-sm text-red-600">Unknown: {unknownCards.length}</div>
              </div>
            )}
          </div>
          
          <div 
            className="relative h-64 md:h-80 border rounded-lg mb-6 cursor-pointer perspective-1000"
            onClick={flipCard}
          >
            <div className={`absolute inset-0 backface-hidden transition-transform duration-500 ease-in-out ${isFlipped ? 'rotate-y-180 opacity-0' : 'opacity-100'}`}>
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                <div className="text-sm text-gray-500 mb-2">Question:</div>
                <div className="text-xl font-medium">{currentCard.front}</div>
                <div className="mt-4 text-sm text-gray-400">Click to flip</div>
              </div>
            </div>
            
            <div className={`absolute inset-0 backface-hidden transition-transform duration-500 ease-in-out ${isFlipped ? 'opacity-100' : 'rotate-y-180 opacity-0'}`}>
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500 mb-2">Answer:</div>
                <div className="text-xl">{currentCard.back}</div>
                <div className="mt-4 text-sm text-gray-400">Click to flip back</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between">
            <button 
              onClick={prevCard}
              disabled={currentCardIndex === 0}
              className={`px-4 py-2 rounded-md ${currentCardIndex === 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300 transition-colors'}`}
            >
              Previous
            </button>
            
            {studyMode === 'study' && isFlipped && (
              <div className="flex gap-2">
                <button 
                  onClick={markAsUnknown}
                  className="px-4 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors"
                >
                  I need to review this
                </button>
                <button 
                  onClick={markAsKnown}
                  className="px-4 py-2 bg-green-100 text-green-600 rounded-md hover:bg-green-200 transition-colors"
                >
                  I know this
                </button>
              </div>
            )}
            
            {(studyMode === 'test' || !isFlipped) && (
              <button 
                onClick={nextCard}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
              >
                {currentCardIndex < shuffledDeck.length - 1 ? 'Next' : 'Finish'}
              </button>
            )}
          </div>
          
          <div className="mt-6 pt-6 border-t flex justify-between">
            <button 
              onClick={shuffleDeck}
              className="text-secondary hover:text-secondary-dark"
            >
              Shuffle Cards
            </button>
            <button 
              onClick={resetDeck}
              className="text-primary hover:text-primary-dark"
            >
              Back to Deck
            </button>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
