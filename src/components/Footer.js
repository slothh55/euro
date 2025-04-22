'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">AP Euro Review</h3>
            <p className="text-sm">
              A comprehensive resource for AP European History students, featuring detailed content, 
              interactive study tools, and practice materials to help you succeed on the AP exam.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/units" className="text-sm hover:text-accent transition-colors">Units</Link></li>
              <li><Link href="/flashcards" className="text-sm hover:text-accent transition-colors">Flashcards</Link></li>
              <li><Link href="/practice-exams" className="text-sm hover:text-accent transition-colors">Practice Exams</Link></li>
              <li><Link href="/resources" className="text-sm hover:text-accent transition-colors">Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Study Tools</h4>
            <ul className="space-y-2">
              <li><Link href="/flashcards" className="text-sm hover:text-accent transition-colors">Flashcards</Link></li>
              <li><Link href="/quizzes" className="text-sm hover:text-accent transition-colors">Quizzes</Link></li>
              <li><Link href="/practice-tests" className="text-sm hover:text-accent transition-colors">Practice Tests</Link></li>
              <li><Link href="/dbq-practice" className="text-sm hover:text-accent transition-colors">DBQ Practice</Link></li>
              <li><Link href="/timelines" className="text-sm hover:text-accent transition-colors">Interactive Timelines</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">AP Exam Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/exam-format" className="text-sm hover:text-accent transition-colors">Exam Format</Link></li>
              <li><Link href="/scoring-guidelines" className="text-sm hover:text-accent transition-colors">Scoring Guidelines</Link></li>
              <li><Link href="/study-strategies" className="text-sm hover:text-accent transition-colors">Study Strategies</Link></li>
              <li><Link href="/about" className="text-sm hover:text-accent transition-colors">About</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} AP European History Review. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">
            Created to help students master AP European History
          </p>
        </div>
      </div>
    </footer>
  );
}
