'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AP European History Review</h1>
            <p className="text-xl mb-8">Your comprehensive resource for mastering AP European History</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/units" className="btn btn-accent">Explore Units</Link>
              <Link href="/practice-exams" className="btn">Practice Exams</Link>
            </div>
          </div>
        </section>
        
        {/* Units Overview Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">AP European History Units</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card unit-1">
                <h3 className="text-xl font-bold mb-2">Unit 1: Renaissance and Exploration</h3>
                <p className="mb-4">Explore the rebirth of classical learning and the age of discovery.</p>
                <Link href="/units/1" className="btn btn-primary">Study Unit 1</Link>
              </div>
              
              <div className="card unit-2">
                <h3 className="text-xl font-bold mb-2">Unit 2: Age of Reformation</h3>
                <p className="mb-4">Examine religious reforms and conflicts that shaped European society.</p>
                <Link href="/units/2" className="btn btn-primary">Study Unit 2</Link>
              </div>
              
              <div className="card unit-3">
                <h3 className="text-xl font-bold mb-2">Unit 3: Absolutism and Constitutionalism</h3>
                <p className="mb-4">Compare different forms of government that emerged in Europe.</p>
                <Link href="/units/3" className="btn btn-primary">Study Unit 3</Link>
              </div>
              
              <div className="card unit-4">
                <h3 className="text-xl font-bold mb-2">Unit 4: Scientific, Philosophical, and Political Developments</h3>
                <p className="mb-4">Study the Scientific Revolution and Enlightenment thinking.</p>
                <Link href="/units/4" className="btn btn-primary">Study Unit 4</Link>
              </div>
              
              <div className="card unit-5">
                <h3 className="text-xl font-bold mb-2">Unit 5: Conflict, Crisis, and Reaction</h3>
                <p className="mb-4">Analyze the French Revolution and Napoleonic era.</p>
                <Link href="/units/5" className="btn btn-primary">Study Unit 5</Link>
              </div>
              
              <div className="card unit-6">
                <h3 className="text-xl font-bold mb-2">Unit 6: Industrialization and Its Effects</h3>
                <p className="mb-4">Investigate the economic and social transformations of the Industrial Revolution.</p>
                <Link href="/units/6" className="btn btn-primary">Study Unit 6</Link>
              </div>
              
              <div className="card unit-7">
                <h3 className="text-xl font-bold mb-2">Unit 7: 19th-Century Perspectives and Political Developments</h3>
                <p className="mb-4">Examine nationalism, romanticism, and political movements.</p>
                <Link href="/units/7" className="btn btn-primary">Study Unit 7</Link>
              </div>
              
              <div className="card unit-8">
                <h3 className="text-xl font-bold mb-2">Unit 8: 20th-Century Global Conflicts</h3>
                <p className="mb-4">Study World War I, the Russian Revolution, and World War II.</p>
                <Link href="/units/8" className="btn btn-primary">Study Unit 8</Link>
              </div>
              
              <div className="card unit-9">
                <h3 className="text-xl font-bold mb-2">Unit 9: Cold War and Contemporary Europe</h3>
                <p className="mb-4">Analyze post-war Europe, decolonization, and European integration.</p>
                <Link href="/units/9" className="btn btn-primary">Study Unit 9</Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Study Tools Section */}
        <section className="py-12 bg-light-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Interactive Study Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card">
                <h3 className="text-xl font-bold mb-2">Flashcards</h3>
                <p className="mb-4">Master key terms, events, and figures with our comprehensive flashcard system.</p>
                <Link href="/flashcards" className="btn btn-secondary">Start Studying</Link>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">Interactive Quizzes</h3>
                <p className="mb-4">Test your knowledge with quizzes tailored to each unit and topic.</p>
                <Link href="/quizzes" className="btn btn-secondary">Take a Quiz</Link>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">Practice Tests</h3>
                <p className="mb-4">Simulate the AP exam experience with full-length practice tests.</p>
                <Link href="/practice-tests" className="btn btn-secondary">Try a Test</Link>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">DBQ Practice</h3>
                <p className="mb-4">Develop your document analysis skills with our DBQ practice tool.</p>
                <Link href="/dbq-practice" className="btn btn-secondary">Practice DBQs</Link>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">Interactive Timelines</h3>
                <p className="mb-4">Visualize historical events and their connections with interactive timelines.</p>
                <Link href="/timelines" className="btn btn-secondary">Explore Timelines</Link>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">Interactive Maps</h3>
                <p className="mb-4">Understand geographical context with our interactive historical maps.</p>
                <Link href="/maps" className="btn btn-secondary">Explore Maps</Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-secondary text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Ready to Ace Your AP European History Exam?</h2>
            <p className="text-xl mb-8">Start your comprehensive review today with our expert-crafted materials.</p>
            <Link href="/units" className="btn btn-accent">Begin Studying Now</Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
