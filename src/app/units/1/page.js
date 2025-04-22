'use client';

import { useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Timeline from '../../../components/Timeline';
import Flashcard from '../../../components/Flashcard';
import Quiz from '../../../components/Quiz';
import Link from 'next/link';

export default function Unit1Page() {
  const [activeTab, setActiveTab] = useState('overview');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const renaissanceEvents = [
    {
      year: '1347-1351',
      title: 'Black Death',
      description: 'The bubonic plague killed approximately one-third of Europe\'s population, leading to labor shortages and economic changes that contributed to the end of feudalism.',
      significance: 'Created conditions for social mobility and new economic opportunities that helped fuel the Renaissance.'
    },
    {
      year: '1397',
      title: 'Medici Bank Founded',
      description: 'Giovanni de\' Medici established the Medici Bank in Florence, which became one of the most prosperous and respected banks in Europe.',
      significance: 'The Medici family\'s wealth allowed them to become important patrons of Renaissance art and humanism.'
    },
    {
      year: '1440',
      title: 'Gutenberg Printing Press',
      description: 'Johannes Gutenberg developed the movable-type printing press in Germany.',
      significance: 'Revolutionized the spread of knowledge and ideas across Europe, making books more affordable and accessible.'
    },
    {
      year: '1453',
      title: 'Fall of Constantinople',
      description: 'The Ottoman Empire captured Constantinople, ending the Byzantine Empire.',
      significance: 'Led to an influx of Greek scholars and texts into Western Europe, further fueling the Renaissance.'
    },
    {
      year: '1454',
      title: 'Gutenberg Bible',
      description: 'The first major book printed using Gutenberg\'s printing press.',
      significance: 'Demonstrated the potential of the printing press and began the Print Revolution.'
    },
    {
      year: '1469',
      title: 'Lorenzo de\' Medici Rises to Power',
      description: 'Lorenzo "The Magnificent" became the de facto ruler of Florence.',
      significance: 'His rule marked the peak of the Florentine Renaissance, as he was a major patron of artists and scholars.'
    },
    {
      year: '1492',
      title: 'Columbus Reaches the Americas',
      description: 'Christopher Columbus, sponsored by Ferdinand and Isabella of Spain, reached the Caribbean islands.',
      significance: 'Initiated European exploration and colonization of the Americas and the Columbian Exchange.'
    },
    {
      year: '1498',
      title: 'Vasco da Gama Reaches India',
      description: 'Portuguese explorer Vasco da Gama found a direct sea route to India.',
      significance: 'Broke the Venetian monopoly on the spice trade and shifted economic power to Atlantic states.'
    },
    {
      year: '1513',
      title: 'Machiavelli Writes "The Prince"',
      description: 'Niccolò Machiavelli wrote his famous political treatise while in exile from Florence.',
      significance: 'Represented Renaissance political thought and the concept of realpolitik, separating politics from Christian morality.'
    },
    {
      year: '1517',
      title: 'Protestant Reformation Begins',
      description: 'Martin Luther published his 95 Theses, challenging Catholic Church practices.',
      significance: 'Led to religious fragmentation in Europe and influenced the later Northern Renaissance.'
    }
  ];
  
  const quizQuestions = [
    {
      question: 'Which of the following best describes humanism during the Renaissance?',
      options: [
        'A focus on religious devotion and asceticism',
        'An intellectual movement emphasizing human potential and classical learning',
        'A political philosophy advocating for democratic governments',
        'A scientific approach rejecting all religious beliefs'
      ],
      correctAnswer: 1,
      explanation: 'Renaissance humanism was an intellectual movement that emphasized human potential, achievements, and the revival of classical Greek and Roman learning. It did not reject religion but sought to reconcile classical philosophy with Christian theology.'
    },
    {
      question: 'The Medici family was significant to the Renaissance primarily because they:',
      options: [
        'Led military campaigns that united Italy',
        'Were important religious reformers who challenged the Catholic Church',
        'Served as patrons of the arts and supported Renaissance artists and scholars',
        'Invented new techniques for painting and sculpture'
      ],
      correctAnswer: 2,
      explanation: 'The Medici family, especially Cosimo and Lorenzo de\' Medici, were wealthy bankers who used their fortune to patronize Renaissance artists and scholars in Florence, supporting figures like Michelangelo, Botticelli, and Leonardo da Vinci.'
    },
    {
      question: 'Which technological innovation had the greatest impact on the spread of Renaissance ideas throughout Europe?',
      options: [
        'The astrolabe',
        'The caravel ship',
        'The printing press',
        'The mechanical clock'
      ],
      correctAnswer: 2,
      explanation: 'Johannes Gutenberg\'s printing press (c. 1440) revolutionized communication by making books more affordable and accessible, allowing Renaissance ideas to spread rapidly across Europe and contributing to increased literacy rates.'
    },
    {
      question: 'The "Columbian Exchange" refers to:',
      options: [
        'The trade of goods between Italy and France during the Renaissance',
        'The exchange of diplomatic envoys between European nations',
        'The transfer of plants, animals, diseases, and cultures between the Americas and the Old World',
        'The sharing of artistic techniques between Renaissance masters'
      ],
      correctAnswer: 2,
      explanation: 'The Columbian Exchange was the widespread transfer of plants, animals, culture, human populations, technology, diseases, and ideas between the Americas, West Africa, and the Old World following Christopher Columbus\'s 1492 voyage.'
    },
    {
      question: 'Which of the following was NOT a motivation for European exploration during the 15th and 16th centuries?',
      options: [
        'The desire to spread Christianity',
        'The search for new trade routes to Asia',
        'The pursuit of gold and other valuable resources',
        'The goal of establishing democratic governments in new territories'
      ],
      correctAnswer: 3,
      explanation: 'European exploration was primarily motivated by economic interests (finding trade routes and resources), religious zeal (spreading Christianity), and competition between European powers. Establishing democratic governments was not a goal of early European explorers.'
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Unit Header */}
        <section className="bg-unit1-color text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Unit 1: Renaissance and Exploration</h1>
            <p className="text-xl mb-4">c. 1450 to c. 1648</p>
            <p className="text-lg">
              Explore the rebirth of classical learning, artistic innovation, and the age of discovery that marked Europe's transition from medieval to early modern society.
            </p>
          </div>
        </section>
        
        {/* Navigation Tabs */}
        <section className="bg-light-gray border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'overview' ? 'bg-white border-t-2 border-unit1-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('overview')}
              >
                Overview
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'key-topics' ? 'bg-white border-t-2 border-unit1-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('key-topics')}
              >
                Key Topics
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'timeline' ? 'bg-white border-t-2 border-unit1-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('timeline')}
              >
                Timeline
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'figures' ? 'bg-white border-t-2 border-unit1-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('figures')}
              >
                Key Figures
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'flashcards' ? 'bg-white border-t-2 border-unit1-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('flashcards')}
              >
                Flashcards
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'quiz' ? 'bg-white border-t-2 border-unit1-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('quiz')}
              >
                Quiz
              </button>
            </div>
          </div>
        </section>
        
        {/* Content Sections */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Unit Overview</h2>
                <p className="mb-4">
                  The Renaissance and Age of Exploration marked a pivotal shift from medieval to early modern Europe. This period saw a revival of classical learning, artistic innovation, and scientific advancement. Italian city-states like Florence and Venice became cultural hubs, fostering creativity and intellectual growth. Exploration expanded European horizons, leading to global trade networks and colonial empires.
                </p>
                <p className="mb-4">
                  The Renaissance (meaning "rebirth") began in Italy during the 14th century and spread throughout Europe by the 16th century. It was characterized by a renewed interest in the classical learning of ancient Greece and Rome, the development of new artistic techniques, and the rise of humanism—an intellectual movement that emphasized human potential and achievements.
                </p>
                <p className="mb-4">
                  Meanwhile, technological advancements in navigation and shipbuilding enabled European explorers to venture beyond familiar waters. Portugal and Spain led the way, establishing trade routes to Africa and Asia and colonizing the Americas after Columbus's 1492 voyage. The resulting Columbian Exchange transformed ecosystems, economies, and societies on both sides of the Atlantic.
                </p>
                <p className="mb-4">
                  This period also saw the rise of centralized monarchies in Western Europe, the invention of the printing press (which revolutionized the spread of knowledge), and the beginning of the Protestant Reformation—all developments that would profoundly shape European and world history.
                </p>
                
                <h3 className="text-2xl font-bold mt-8 mb-4">Key Developments</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Revival of classical learning and the rise of humanism</li>
                  <li>Artistic innovations in painting, sculpture, and architecture</li>
                  <li>Scientific advancements and the early Scientific Revolution</li>
                  <li>Invention of the printing press and expansion of literacy</li>
                  <li>European exploration and the beginning of global trade networks</li>
                  <li>Colonization of the Americas and the Columbian Exchange</li>
                  <li>Development of the slave trade</li>
                  <li>Rise of centralized monarchies in Western Europe</li>
                  <li>Commercial Revolution and early capitalism</li>
                </ul>
              </div>
            )}
            
            {/* Key Topics Tab */}
            {activeTab === 'key-topics' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Key Topics</h2>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">The Italian Renaissance</h3>
                  <p className="mb-4">
                    The Renaissance began in the wealthy city-states of Italy, where a combination of factors created ideal conditions for cultural and intellectual flourishing:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Wealth from trade and banking financed artistic and scholarly patronage</li>
                    <li>Political competition between city-states encouraged cultural achievements as displays of prestige</li>
                    <li>The rediscovery of classical texts inspired new approaches to art, literature, and philosophy</li>
                    <li>The rise of secular values alongside religious ones allowed for broader cultural expression</li>
                  </ul>
                  <p>
                    Renaissance art was characterized by naturalism, perspective, and classical influences. Artists like Leonardo da Vinci, Michelangelo, and Raphael created works that demonstrated mastery of human anatomy, emotion, and composition. Architecture, led by figures like Brunelleschi, revived classical forms while developing new techniques.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Humanism</h3>
                  <p className="mb-4">
                    Renaissance humanism was an intellectual movement that emphasized:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>The potential and achievements of humans</li>
                    <li>The study of classical texts in their original languages</li>
                    <li>Eloquence and civic virtue</li>
                    <li>Critical thinking and questioning of established authorities</li>
                  </ul>
                  <p className="mb-4">
                    Key humanist figures included Petrarch (often called the "father of humanism"), Erasmus (who prepared a critical edition of the New Testament), and Thomas More (who wrote "Utopia," exploring an ideal society).
                  </p>
                  <p>
                    While humanism was not anti-religious, it did encourage a more critical approach to religious texts and traditions, laying groundwork for the later Protestant Reformation.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">The Northern Renaissance</h3>
                  <p className="mb-4">
                    As Renaissance ideas spread beyond Italy, they took on distinct characteristics in northern Europe:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Greater emphasis on religious themes and moral messages</li>
                    <li>More detailed realism in art, particularly in oil painting</li>
                    <li>Focus on applying humanist learning to Christian reform</li>
                    <li>Vernacular literature that reached broader audiences</li>
                  </ul>
                  <p>
                    Northern Renaissance artists like Jan van Eyck, Albrecht Dürer, and Pieter Bruegel the Elder developed distinctive styles that combined Italian influences with local traditions. Writers like Shakespeare in England and Cervantes in Spain created literary masterpieces that explored human nature and society.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">The Printing Revolution</h3>
                  <p className="mb-4">
                    Johannes Gutenberg's development of the movable-type printing press around 1440 revolutionized European society by:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Making books more affordable and accessible</li>
                    <li>Standardizing texts and reducing copying errors</li>
                    <li>Enabling the rapid spread of new ideas</li>
                    <li>Contributing to rising literacy rates</li>
                    <li>Facilitating the Protestant Reformation through the mass distribution of religious texts</li>
                  </ul>
                  <p>
                    By 1500, printing presses had produced millions of books across Europe, fundamentally changing how knowledge was preserved and transmitted.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">New Monarchies</h3>
                  <p className="mb-4">
                    The period from 1450 to 1648 saw the rise of centralized monarchies in Western Europe, particularly in:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Spain: Ferdinand and Isabella unified the country through marriage, completed the Reconquista, expelled Jews and Muslims, and sponsored Columbus's voyages</li>
                    <li>France: Louis XI and his successors strengthened royal authority, reduced the power of nobles, and developed a professional army and bureaucracy</li>
                    <li>England: The Tudor dynasty, especially Henry VII and Elizabeth I, established strong central government, controlled the nobility, and developed naval power</li>
                  </ul>
                  <p>
                    These "new monarchies" laid the foundations for the absolutist states of the 17th century by expanding royal authority, developing professional bureaucracies, and creating standing armies.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Age of Exploration</h3>
                  <p className="mb-4">
                    European exploration in the 15th and 16th centuries was driven by:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Economic motives: desire for direct access to Asian luxury goods and precious metals</li>
                    <li>Religious zeal: spreading Christianity to new lands</li>
                    <li>Political competition between European powers</li>
                    <li>Technological advancements in navigation and shipbuilding</li>
                    <li>Renaissance curiosity about the wider world</li>
                  </ul>
                  <p className="mb-4">
                    Portugal, under Prince Henry the Navigator, led early exploration along the African coast, eventually establishing a sea route to India. Spain sponsored Columbus's voyages to the Americas and quickly conquered vast territories in Mexico and Peru.
                  </p>
                  <p>
                    The Treaty of Tordesillas (1494) divided the non-European world between Portugal and Spain, though other European powers would soon challenge this arrangement.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">The Columbian Exchange</h3>
                  <p className="mb-4">
                    The Columbian Exchange was the transfer of plants, animals, diseases, and cultures between the Americas and the Old World following Columbus's voyages. Its impacts included:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Devastating population decline among indigenous Americans due to European diseases like smallpox</li>
                    <li>Introduction of New World crops (potatoes, maize, tomatoes) to Europe, Africa, and Asia, eventually supporting population growth</li>
                    <li>Transfer of Old World livestock (horses, cattle, pigs) to the Americas, transforming ecosystems and societies</li>
                    <li>Exchange of cultural practices, technologies, and ideas</li>
                  </ul>
                  <p>
                    The Columbian Exchange represents one of the most significant ecological events in human history, with lasting global consequences.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">The Slave Trade</h3>
                  <p className="mb-4">
                    European colonization of the Americas led to the development of the transatlantic slave trade:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Initially, Europeans enslaved indigenous Americans, but disease and resistance limited this practice</li>
                    <li>The Portuguese began importing enslaved Africans to work on sugar plantations in Brazil</li>
                    <li>The Spanish, English, French, and Dutch followed this model in their colonies</li>
                    <li>A "triangular trade" developed: European goods to Africa, enslaved people to the Americas, colonial products to Europe</li>
                  </ul>
                  <p>
                    By the end of the Renaissance period, the slave trade was becoming a major economic institution that would eventually transport millions of Africans to the Americas, with profound and tragic consequences for African societies and the development of the Americas.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">The Commercial Revolution</h3>
                  <p className="mb-4">
                    The exploration and colonization of the Americas contributed to significant economic changes in Europe:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Shift of economic power from Mediterranean to Atlantic states</li>
                    <li>Influx of American silver causing price inflation across Europe</li>
                    <li>Development of new financial institutions and practices</li>
                    <li>Rise of mercantilism as an economic theory emphasizing trade surpluses and colonial resources</li>
                    <li>Growth of joint-stock companies like the Dutch East India Company</li>
                    <li>Expansion of commercial agriculture and proto-industrialization</li>
                  </ul>
                  <p>
                    These developments laid the groundwork for later capitalism and the Industrial Revolution, representing a significant transition from medieval economic patterns.
                  </p>
                </div>
              </div>
            )}
            
            {/* Timeline Tab */}
            {activeTab === 'timeline' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Timeline of Key Events</h2>
                <Timeline events={renaissanceEvents} />
              </div>
            )}
            
            {/* Key Figures Tab */}
            {activeTab === 'figures' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Key Figures</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Leonardo da Vinci (1452-1519)</h3>
                    <p className="mb-2"><strong>Role:</strong> Artist, scientist, engineer, and polymath</p>
                    <p className="mb-2"><strong>Contributions:</strong> Created masterpieces like the Mona Lisa and The Last Supper; made detailed anatomical studies; designed innovative machines and engineering solutions.</p>
                    <p><strong>Significance:</strong> Embodied the "Renaissance man" ideal with his wide-ranging talents and curiosity; pioneered techniques like sfumato in painting; bridged art and science through observation and experimentation.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Michelangelo Buonarroti (1475-1564)</h3>
                    <p className="mb-2"><strong>Role:</strong> Sculptor, painter, architect, and poet</p>
                    <p className="mb-2"><strong>Contributions:</strong> Created sculptures like David and Pietà; painted the Sistine Chapel ceiling; designed part of St. Peter's Basilica in Rome.</p>
                    <p><strong>Significance:</strong> Demonstrated unparalleled skill in depicting the human form; elevated the status of artists; his work exemplified Renaissance ideals of beauty, harmony, and human dignity.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Niccolò Machiavelli (1469-1527)</h3>
                    <p className="mb-2"><strong>Role:</strong> Political philosopher and diplomat</p>
                    <p className="mb-2"><strong>Contributions:</strong> Wrote "The Prince," a treatise on political power; served the Florentine Republic as a diplomat.</p>
                    <p><strong>Significance:</strong> Pioneered modern political science by analyzing politics based on how rulers actually behaved rather than how they should behave ideally; introduced the concept that "the ends justify the means" in politics.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Johannes Gutenberg (c. 1400-1468)</h3>
                    <p className="mb-2"><strong>Role:</strong> Inventor and printer</p>
                    <p className="mb-2"><strong>Contributions:</strong> Developed the movable-type printing press around 1440; printed the Gutenberg Bible.</p>
                    <p><strong>Significance:</strong> His invention revolutionized communication by making books more affordable and accessible; enabled the rapid spread of Renaissance ideas and later the Protestant Reformation.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Lorenzo de' Medici (1449-1492)</h3>
                    <p className="mb-2"><strong>Role:</strong> Ruler of Florence and patron of the arts</p>
                    <p className="mb-2"><strong>Contributions:</strong> Governed Florence during its cultural golden age; supported artists and scholars like Michelangelo, Botticelli, and Poliziano.</p>
                    <p><strong>Significance:</strong> His patronage exemplified how wealthy elites supported Renaissance culture; his diplomatic skills maintained peace in Italy for decades; nicknamed "Lorenzo the Magnificent" for his cultural contributions.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Desiderius Erasmus (1466-1536)</h3>
                    <p className="mb-2"><strong>Role:</strong> Humanist scholar and theologian</p>
                    <p className="mb-2"><strong>Contributions:</strong> Produced a critical edition of the Greek New Testament; wrote "In Praise of Folly," satirizing church abuses.</p>
                    <p><strong>Significance:</strong> Promoted "Christian humanism" that applied classical learning to religious reform; advocated for church reform while remaining Catholic; his work influenced the Protestant Reformation.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Christopher Columbus (1451-1506)</h3>
                    <p className="mb-2"><strong>Role:</strong> Explorer</p>
                    <p className="mb-2"><strong>Contributions:</strong> Led four voyages across the Atlantic, reaching the Caribbean and establishing Spanish presence in the Americas.</p>
                    <p><strong>Significance:</strong> His voyages initiated European colonization of the Americas and the Columbian Exchange; transformed global trade and power relations; had devastating consequences for indigenous American populations.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Queen Isabella I of Castile (1451-1504)</h3>
                    <p className="mb-2"><strong>Role:</strong> Queen of Castile and co-monarch of Spain</p>
                    <p className="mb-2"><strong>Contributions:</strong> Unified Spain through marriage to Ferdinand of Aragon; completed the Reconquista; sponsored Columbus's voyages; established the Spanish Inquisition.</p>
                    <p><strong>Significance:</strong> Her reign exemplified the "new monarchies" that centralized power; her support for exploration launched Spain's colonial empire; her religious policies shaped Spanish identity.</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Flashcards Tab */}
            {activeTab === 'flashcards' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Flashcards</h2>
                <p className="mb-6">Click on each card to flip it and reveal the answer.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Flashcard 
                    front="What was Renaissance Humanism?" 
                    back="An intellectual movement that emphasized human potential and achievements, the study of classical texts, eloquence, and civic virtue. It encouraged critical thinking while generally remaining compatible with Christianity."
                  />
                  
                  <Flashcard 
                    front="What were the main features of Renaissance art?" 
                    back="Naturalism, perspective, classical influences, anatomical accuracy, emotional expressiveness, and technical innovation. Renaissance artists sought to create realistic representations of the world while idealizing human forms."
                  />
                  
                  <Flashcard 
                    front="How did the printing press impact European society?" 
                    back="It made books more affordable and accessible, standardized texts, enabled the rapid spread of ideas, contributed to rising literacy rates, and facilitated the Protestant Reformation through mass distribution of religious texts."
                  />
                  
                  <Flashcard 
                    front="What was the Columbian Exchange?" 
                    back="The transfer of plants, animals, diseases, and cultures between the Americas and the Old World following Columbus's voyages. It led to population decline among indigenous Americans due to disease, introduced new crops globally, and transformed ecosystems."
                  />
                  
                  <Flashcard 
                    front="What were the main motivations for European exploration?" 
                    back="Economic motives (desire for Asian luxury goods and precious metals), religious zeal (spreading Christianity), political competition between European powers, technological advancements, and Renaissance curiosity about the world."
                  />
                  
                  <Flashcard 
                    front="How did the Northern Renaissance differ from the Italian Renaissance?" 
                    back="The Northern Renaissance featured greater emphasis on religious themes and moral messages, more detailed realism in art (especially oil painting), focus on applying humanist learning to Christian reform, and more vernacular literature."
                  />
                  
                  <Flashcard 
                    front="What were the characteristics of the 'new monarchies' of the Renaissance period?" 
                    back="Centralization of power, reduction of noble privileges, development of professional bureaucracies and standing armies, increased taxation, and policies promoting national unity and economic growth."
                  />
                  
                  <Flashcard 
                    front="What was mercantilism?" 
                    back="An economic theory and practice that emphasized maximizing exports and minimizing imports to achieve a favorable balance of trade. It viewed colonies as sources of raw materials and markets for finished goods, and promoted government regulation of the economy."
                  />
                </div>
              </div>
            )}
            
            {/* Quiz Tab */}
            {activeTab === 'quiz' && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Test Your Knowledge</h2>
                <Quiz questions={quizQuestions} />
              </div>
            )}
          </div>
        </section>
        
        {/* Related Resources */}
        <section className="py-8 bg-light-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card">
                <h3 className="text-xl font-bold mb-2">Practice Materials</h3>
                <ul className="space-y-2">
                  <li><Link href="/practice-tests/unit1" className="text-secondary hover:text-accent">Unit 1 Practice Test</Link></li>
                  <li><Link href="/dbq-practice/unit1" className="text-secondary hover:text-accent">Renaissance DBQ Practice</Link></li>
                  <li><Link href="/short-answer/unit1" className="text-secondary hover:text-accent">Short Answer Questions</Link></li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">External Resources</h3>
                <ul className="space-y-2">
                  <li><a href="https://www.metmuseum.org/toah/hd/ren/hd_ren.htm" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Metropolitan Museum: Renaissance Art</a></li>
                  <li><a href="https://www.khanacademy.org/humanities/renaissance-reformation" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Khan Academy: Renaissance and Reformation</a></li>
                  <li><a href="https://www.britannica.com/event/European-exploration" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Britannica: European Exploration</a></li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">Video Lectures</h3>
                <ul className="space-y-2">
                  <li><a href="https://www.youtube.com/watch?v=DcCojSiNAqc" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">The Renaissance and Exploration</a></li>
                  <li><a href="https://www.youtube.com/watch?v=EuzAbE-kPkM" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Renaissance Art History</a></li>
                  <li><a href="https://www.youtube.com/watch?v=NjEGncridoQ" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">The Age of Exploration</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Navigation to Other Units */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Continue Your Study</h2>
            <div className="flex flex-wrap justify-between">
              <div>
                <span className="text-gray-500">Previous Unit</span>
                <p>This is the first unit</p>
              </div>
              
              <Link href="/units/2" className="btn btn-primary">
                Next: Unit 2 - Age of Reformation
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
