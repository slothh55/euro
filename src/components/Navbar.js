'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUnitsDropdownOpen, setIsUnitsDropdownOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUnitsDropdown = () => {
    setIsUnitsDropdownOpen(!isUnitsDropdownOpen);
    if (!isUnitsDropdownOpen) {
      setIsToolsDropdownOpen(false);
    }
  };

  const toggleToolsDropdown = () => {
    setIsToolsDropdownOpen(!isToolsDropdownOpen);
    if (!isToolsDropdownOpen) {
      setIsUnitsDropdownOpen(false);
    }
  };

  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">AP Euro Review</Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            
            {/* Units Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleUnitsDropdown}
                className="flex items-center hover:text-accent transition-colors focus:outline-none"
              >
                Units
                <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isUnitsDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link href="/units/1" className="block px-4 py-2 text-primary hover:bg-light-gray">Unit 1: Renaissance and Exploration</Link>
                  <Link href="/units/2" className="block px-4 py-2 text-primary hover:bg-light-gray">Unit 2: Age of Reformation</Link>
                  <Link href="/units/3" className="block px-4 py-2 text-primary hover:bg-light-gray">Unit 3: Absolutism and Constitutionalism</Link>
                  <Link href="/units/4" className="block px-4 py-2 text-primary hover:bg-light-gray">Unit 4: Scientific, Philosophical, and Political Developments</Link>
                  <Link href="/units/5" className="block px-4 py-2 text-primary hover:bg-light-gray">Unit 5: Conflict, Crisis, and Reaction</Link>
                  <Link href="/units/6" className="block px-4 py-2 text-primary hover:bg-light-gray">Unit 6: Industrialization and Its Effects</Link>
                  <Link href="/units/7" className="block px-4 py-2 text-primary hover:bg-light-gray">Unit 7: 19th-Century Perspectives</Link>
                  <Link href="/units/8" className="block px-4 py-2 text-primary hover:bg-light-gray">Unit 8: 20th-Century Global Conflicts</Link>
                  <Link href="/units/9" className="block px-4 py-2 text-primary hover:bg-light-gray">Unit 9: Cold War and Contemporary Europe</Link>
                </div>
              )}
            </div>
            
            {/* Tools Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleToolsDropdown}
                className="flex items-center hover:text-accent transition-colors focus:outline-none"
              >
                Study Tools
                <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isToolsDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link href="/flashcards" className="block px-4 py-2 text-primary hover:bg-light-gray">Flashcards</Link>
                  <Link href="/quizzes" className="block px-4 py-2 text-primary hover:bg-light-gray">Quizzes</Link>
                  <Link href="/practice-tests" className="block px-4 py-2 text-primary hover:bg-light-gray">Practice Tests</Link>
                  <Link href="/dbq-practice" className="block px-4 py-2 text-primary hover:bg-light-gray">DBQ Practice</Link>
                  <Link href="/timelines" className="block px-4 py-2 text-primary hover:bg-light-gray">Interactive Timelines</Link>
                  <Link href="/maps" className="block px-4 py-2 text-primary hover:bg-light-gray">Interactive Maps</Link>
                </div>
              )}
            </div>
            
            <Link href="/practice-exams" className="hover:text-accent transition-colors">Practice Exams</Link>
            <Link href="/resources" className="hover:text-accent transition-colors">Resources</Link>
            <Link href="/about" className="hover:text-accent transition-colors">About</Link>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              
              <button 
                onClick={toggleUnitsDropdown}
                className="flex items-center justify-between hover:text-accent transition-colors focus:outline-none text-left"
              >
                Units
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isUnitsDropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                </svg>
              </button>
              
              {isUnitsDropdownOpen && (
                <div className="pl-4 flex flex-col space-y-2">
                  <Link href="/units/1" className="hover:text-accent transition-colors">Unit 1: Renaissance and Exploration</Link>
                  <Link href="/units/2" className="hover:text-accent transition-colors">Unit 2: Age of Reformation</Link>
                  <Link href="/units/3" className="hover:text-accent transition-colors">Unit 3: Absolutism and Constitutionalism</Link>
                  <Link href="/units/4" className="hover:text-accent transition-colors">Unit 4: Scientific, Philosophical, and Political Developments</Link>
                  <Link href="/units/5" className="hover:text-accent transition-colors">Unit 5: Conflict, Crisis, and Reaction</Link>
                  <Link href="/units/6" className="hover:text-accent transition-colors">Unit 6: Industrialization and Its Effects</Link>
                  <Link href="/units/7" className="hover:text-accent transition-colors">Unit 7: 19th-Century Perspectives</Link>
                  <Link href="/units/8" className="hover:text-accent transition-colors">Unit 8: 20th-Century Global Conflicts</Link>
                  <Link href="/units/9" className="hover:text-accent transition-colors">Unit 9: Cold War and Contemporary Europe</Link>
                </div>
              )}
              
              <button 
                onClick={toggleToolsDropdown}
                className="flex items-center justify-between hover:text-accent transition-colors focus:outline-none text-left"
              >
                Study Tools
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isToolsDropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                </svg>
              </button>
              
              {isToolsDropdownOpen && (
                <div className="pl-4 flex flex-col space-y-2">
                  <Link href="/flashcards" className="hover:text-accent transition-colors">Flashcards</Link>
                  <Link href="/quizzes" className="hover:text-accent transition-colors">Quizzes</Link>
                  <Link href="/practice-tests" className="hover:text-accent transition-colors">Practice Tests</Link>
                  <Link href="/dbq-practice" className="hover:text-accent transition-colors">DBQ Practice</Link>
                  <Link href="/timelines" className="hover:text-accent transition-colors">Interactive Timelines</Link>
                  <Link href="/maps" className="hover:text-accent transition-colors">Interactive Maps</Link>
                </div>
              )}
              
              <Link href="/practice-exams" className="hover:text-accent transition-colors">Practice Exams</Link>
              <Link href="/resources" className="hover:text-accent transition-colors">Resources</Link>
              <Link href="/about" className="hover:text-accent transition-colors">About</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
