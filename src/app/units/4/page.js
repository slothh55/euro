'use client';

import { useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Timeline from '../../../components/Timeline';
import Flashcard from '../../../components/Flashcard';
import Quiz from '../../../components/Quiz';
import Link from 'next/link';

export default function Unit4Page() {
  const [activeTab, setActiveTab] = useState('overview');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const scientificEvents = [
    {
      year: '1543',
      title: 'Copernicus publishes "On the Revolutions of the Heavenly Spheres"',
      description: 'Nicolaus Copernicus proposed the heliocentric model of the solar system, placing the sun at the center rather than the Earth.',
      significance: 'Challenged the geocentric worldview and marked the beginning of the Scientific Revolution.'
    },
    {
      year: '1543',
      title: 'Vesalius publishes "On the Fabric of the Human Body"',
      description: 'Andreas Vesalius produced detailed anatomical drawings based on human dissections.',
      significance: 'Revolutionized the study of human anatomy and challenged Galenic medical traditions.'
    },
    {
      year: '1610',
      title: 'Galileo\'s Astronomical Observations',
      description: 'Galileo Galilei published "Sidereus Nuncius" (Starry Messenger), describing his telescopic observations of Jupiter\'s moons, the phases of Venus, and the moon\'s surface.',
      significance: 'Provided empirical evidence supporting the Copernican model and demonstrated the value of scientific instruments.'
    },
    {
      year: '1620',
      title: 'Bacon publishes "Novum Organum"',
      description: 'Francis Bacon outlined his inductive method for scientific inquiry.',
      significance: 'Established the foundation for the scientific method based on empirical observation and experimentation.'
    },
    {
      year: '1628',
      title: 'Harvey describes blood circulation',
      description: 'William Harvey published "On the Motion of the Heart and Blood," explaining the circulatory system.',
      significance: 'Overturned ancient theories about blood movement and demonstrated the importance of empirical observation.'
    },
    {
      year: '1637',
      title: 'Descartes publishes "Discourse on Method"',
      description: 'René Descartes outlined his approach to scientific and philosophical inquiry, including his famous statement "Cogito, ergo sum" (I think, therefore I am).',
      significance: 'Established rationalism as a philosophical approach and emphasized the importance of skepticism and mathematical reasoning.'
    },
    {
      year: '1687',
      title: 'Newton publishes "Principia Mathematica"',
      description: 'Isaac Newton presented his laws of motion and universal gravitation.',
      significance: 'Unified terrestrial and celestial physics, providing a mathematical framework that explained diverse physical phenomena.'
    },
    {
      year: '1748',
      title: 'Montesquieu publishes "The Spirit of the Laws"',
      description: 'Charles-Louis de Secondat, Baron de Montesquieu, outlined his theory of separation of powers in government.',
      significance: 'Influenced constitutional design in many countries, particularly the United States Constitution.'
    },
    {
      year: '1751-1772',
      title: 'Diderot and d\'Alembert publish the Encyclopédie',
      description: 'A massive reference work containing articles by leading Enlightenment thinkers.',
      significance: 'Disseminated Enlightenment ideas and challenged traditional authorities by emphasizing reason and scientific knowledge.'
    },
    {
      year: '1762',
      title: 'Rousseau publishes "The Social Contract"',
      description: 'Jean-Jacques Rousseau presented his ideas on political authority and legitimacy.',
      significance: 'Introduced the concept of the "general will" and influenced democratic theory and the French Revolution.'
    },
    {
      year: '1776',
      title: 'Smith publishes "The Wealth of Nations"',
      description: 'Adam Smith outlined his economic theories, including the concept of the "invisible hand" of the market.',
      significance: 'Laid the foundation for classical economics and free-market capitalism.'
    },
    {
      year: '1781',
      title: 'Kant publishes "Critique of Pure Reason"',
      description: 'Immanuel Kant explored the limits and nature of human knowledge.',
      significance: 'Attempted to reconcile rationalism and empiricism, revolutionizing Western philosophy.'
    },
    {
      year: '1789-1799',
      title: 'French Revolution',
      description: 'A period of radical social and political upheaval in France.',
      significance: 'Applied Enlightenment principles to politics, challenging traditional authority and establishing new concepts of citizenship and rights.'
    }
  ];
  
  const quizQuestions = [
    {
      question: 'Which of the following best describes the Scientific Revolution\'s impact on European thought?',
      options: [
        'It reinforced traditional religious explanations of natural phenomena',
        'It established a new approach based on observation, experimentation, and mathematical reasoning',
        'It rejected all forms of organized religion in favor of atheism',
        'It was primarily concerned with political reform rather than understanding the natural world'
      ],
      correctAnswer: 1,
      explanation: 'The Scientific Revolution established a new approach to understanding the natural world based on systematic observation, experimentation, and mathematical reasoning. While it challenged some traditional religious explanations, it did not necessarily lead to atheism, and many scientists remained religious. The movement was primarily focused on understanding nature rather than political reform, though its methods and findings would later influence political thought during the Enlightenment.'
    },
    {
      question: 'The Enlightenment concept of the "social contract" is most closely associated with which of the following ideas?',
      options: [
        'Divine right of kings',
        'Government authority derives from the consent of the governed',
        'Economic mercantilism',
        'Religious predestination'
      ],
      correctAnswer: 1,
      explanation: 'The social contract theory, developed by thinkers like Hobbes, Locke, and Rousseau, proposed that legitimate government authority derives from the consent of the governed. This concept directly challenged the divine right of kings theory, which held that monarchs received their authority directly from God. Social contract theory became a foundational concept for modern democratic governance.'
    },
    {
      question: 'Isaac Newton\'s work was significant because it:',
      options: [
        'Proved that science and religion were incompatible',
        'Established a unified mathematical framework that explained diverse physical phenomena',
        'Demonstrated that the Earth was the center of the universe',
        'Rejected the use of mathematics in scientific inquiry'
      ],
      correctAnswer: 1,
      explanation: 'Newton\'s work, particularly his "Principia Mathematica" (1687), established a unified mathematical framework that explained diverse physical phenomena, including the motion of planets and objects on Earth. His laws of motion and universal gravitation provided a comprehensive system that could predict and explain a wide range of natural phenomena. Newton himself was religious and saw his scientific work as revealing God\'s design of the universe.'
    },
    {
      question: 'Which Enlightenment thinker argued for the separation of powers in government to prevent tyranny?',
      options: [
        'Jean-Jacques Rousseau',
        'Voltaire',
        'Baron de Montesquieu',
        'Denis Diderot'
      ],
      correctAnswer: 2,
      explanation: 'Baron de Montesquieu (Charles-Louis de Secondat) argued for the separation of powers in government in his work "The Spirit of the Laws" (1748). He proposed dividing government into executive, legislative, and judicial branches to prevent any single entity from becoming too powerful. This idea significantly influenced the U.S. Constitution and many other democratic governments.'
    },
    {
      question: 'The Encyclopédie, edited by Denis Diderot and Jean le Rond d\'Alembert, was important because it:',
      options: [
        'Reinforced traditional Catholic teachings',
        'Collected and disseminated Enlightenment ideas and knowledge',
        'Advocated for absolute monarchy',
        'Rejected scientific approaches to knowledge'
      ],
      correctAnswer: 1,
      explanation: 'The Encyclopédie (published 1751-1772) was a massive reference work that collected and disseminated Enlightenment ideas and knowledge. It emphasized reason, science, and secular thinking while often subtly criticizing traditional authorities, particularly the Catholic Church. With contributions from leading thinkers like Voltaire and Rousseau, it became a symbol of the Enlightenment project to reorganize knowledge based on rational principles.'
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Unit Header */}
        <section className="bg-unit4-color text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Unit 4: Scientific, Philosophical, and Political Developments</h1>
            <p className="text-xl mb-4">c. 1648 to c. 1815</p>
            <p className="text-lg">
              Explore how the Scientific Revolution and Enlightenment transformed European thought, challenging traditional beliefs and laying the groundwork for modern science, philosophy, and politics.
            </p>
          </div>
        </section>
        
        {/* Navigation Tabs */}
        <section className="bg-light-gray border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'overview' ? 'bg-white border-t-2 border-unit4-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('overview')}
              >
                Overview
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'key-topics' ? 'bg-white border-t-2 border-unit4-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('key-topics')}
              >
                Key Topics
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'timeline' ? 'bg-white border-t-2 border-unit4-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('timeline')}
              >
                Timeline
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'figures' ? 'bg-white border-t-2 border-unit4-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('figures')}
              >
                Key Figures
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'flashcards' ? 'bg-white border-t-2 border-unit4-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('flashcards')}
              >
                Flashcards
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'quiz' ? 'bg-white border-t-2 border-unit4-color' : 'hover:bg-white'}`}
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
                  The period from 1648 to 1815 witnessed profound intellectual transformations that reshaped European thought and laid the foundations for the modern world. Two major intellectual movements—the Scientific Revolution and the Enlightenment—challenged traditional authorities and ways of thinking, promoting reason, observation, and critical inquiry as the paths to knowledge and progress.
                </p>
                <p className="mb-4">
                  The Scientific Revolution, which began in the 16th century and reached its culmination with Isaac Newton's work in the late 17th century, transformed how Europeans understood the natural world. Scientists like Copernicus, Galileo, and Newton developed new methods based on systematic observation, experimentation, and mathematical reasoning. Their discoveries overturned ancient cosmological and physical theories, demonstrating that the universe operated according to consistent, rational laws that could be discovered through human investigation.
                </p>
                <p className="mb-4">
                  Building on these scientific advances, the Enlightenment of the 18th century extended the application of reason and critical inquiry to social, political, and cultural questions. Enlightenment thinkers like Locke, Montesquieu, Voltaire, and Rousseau challenged traditional political structures, religious authorities, and social hierarchies. They developed new theories of government based on natural rights, the social contract, and the separation of powers, which would profoundly influence political developments, including the American and French Revolutions.
                </p>
                <p className="mb-4">
                  These intellectual movements coincided with significant social and demographic changes in 18th-century Europe, including population growth, urbanization, and the early stages of industrialization. Cultural and artistic developments reflected these changes, with the rise of the public sphere, increased literacy, and new artistic movements like Neoclassicism and early Romanticism.
                </p>
                <p className="mb-4">
                  The concept of "enlightened absolutism" emerged as some European monarchs attempted to implement Enlightenment principles while maintaining their authority. Rulers like Frederick the Great of Prussia, Catherine the Great of Russia, and Joseph II of Austria enacted legal, educational, and administrative reforms influenced by Enlightenment ideas, though they stopped short of fundamentally transforming their political systems.
                </p>
                <p className="mb-4">
                  By the end of this period, the intellectual foundations had been laid for many of the political, social, and scientific developments that would shape the modern world, from democratic governance to modern scientific inquiry to concepts of individual rights and freedoms.
                </p>
                
                <h3 className="text-2xl font-bold mt-8 mb-4">Key Developments</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The Scientific Revolution's establishment of a new approach to understanding nature based on observation, experimentation, and mathematical reasoning</li>
                  <li>The development of the heliocentric model of the solar system and new understandings of physics, astronomy, and human anatomy</li>
                  <li>The Enlightenment's application of reason and critical inquiry to social, political, and religious questions</li>
                  <li>New political theories based on natural rights, the social contract, and the separation of powers</li>
                  <li>The rise of the public sphere, including coffeehouses, salons, and the periodical press</li>
                  <li>Increased literacy and the broader dissemination of ideas through print culture</li>
                  <li>Population growth, urbanization, and changes in family structures and gender roles</li>
                  <li>The concept of enlightened absolutism and attempts at reform by European monarchs</li>
                  <li>The influence of these intellectual movements on the American and French Revolutions</li>
                </ul>
              </div>
            )}
            
            {/* Key Topics Tab */}
            {activeTab === 'key-topics' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Key Topics</h2>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">The Scientific Revolution</h3>
                  <p className="mb-4">
                    The Scientific Revolution marked a fundamental shift in how Europeans understood and investigated the natural world, establishing the foundations of modern science:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>New Cosmology</strong>: Nicolaus Copernicus's heliocentric model (1543) placed the sun rather than the Earth at the center of the solar system, challenging the Ptolemaic geocentric model that had dominated for centuries. Johannes Kepler later refined this model with his laws of planetary motion, showing that planets move in elliptical rather than circular orbits.</li>
                    <li><strong>Observational Astronomy</strong>: Galileo Galilei's telescopic observations in the early 17th century provided empirical evidence supporting the Copernican model. His discoveries of Jupiter's moons, the phases of Venus, and the moon's cratered surface contradicted Aristotelian cosmology and demonstrated the value of scientific instruments.</li>
                    <li><strong>The Scientific Method</strong>: Francis Bacon advocated for an inductive approach based on systematic observation and experimentation, while René Descartes emphasized deductive reasoning and mathematical analysis. Together, these approaches formed the basis of the scientific method.</li>
                    <li><strong>Anatomy and Physiology</strong>: Andreas Vesalius's detailed anatomical studies based on human dissections challenged Galenic medical traditions. William Harvey's discovery of blood circulation (1628) demonstrated how systematic observation could overturn ancient theories.</li>
                    <li><strong>Newtonian Synthesis</strong>: Isaac Newton's "Principia Mathematica" (1687) unified terrestrial and celestial physics with his laws of motion and universal gravitation. His work provided a comprehensive mathematical framework that could explain diverse physical phenomena, from falling apples to planetary orbits.</li>
                  </ul>
                  <p className="mb-4">
                    The Scientific Revolution was not merely a collection of discoveries but a transformation in methodology and worldview. It established that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Nature operates according to consistent, rational laws that can be discovered through human investigation</li>
                    <li>Mathematics is essential for describing and predicting natural phenomena</li>
                    <li>Systematic observation and experimentation, rather than reliance on ancient authorities, are the paths to knowledge</li>
                    <li>The universe can be understood as a complex mechanism, like a clock, operating according to fixed principles</li>
                  </ul>
                  <p>
                    While the Scientific Revolution challenged some traditional religious explanations, many scientists remained religious and saw their work as revealing God's design. The concept of a mechanistic universe governed by mathematical laws was often compatible with belief in a divine creator, leading to the rise of natural theology and deism.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">The Enlightenment</h3>
                  <p className="mb-4">
                    The Enlightenment extended the Scientific Revolution's emphasis on reason and critical inquiry to social, political, and cultural questions:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Philosophical Foundations</strong>: John Locke's empiricism proposed that knowledge comes from sensory experience rather than innate ideas, while Immanuel Kant attempted to reconcile rationalism and empiricism in his critical philosophy. These epistemological theories emphasized human reason's capacity to understand the world.</li>
                    <li><strong>Political Theory</strong>: Enlightenment thinkers developed new theories of government and society:
                      <ul className="list-disc pl-6 mt-2">
                        <li>John Locke argued that government should be based on the consent of the governed and should protect natural rights to life, liberty, and property.</li>
                        <li>Baron de Montesquieu proposed the separation of powers to prevent tyranny, influencing constitutional design in many countries.</li>
                        <li>Jean-Jacques Rousseau introduced the concept of the "general will" and a more radical version of the social contract.</li>
                      </ul>
                    </li>
                    <li><strong>Religious Critique</strong>: Voltaire advocated for religious tolerance and criticized clerical abuses, while deists like Thomas Paine argued for a rational religion based on natural observation rather than revelation. Some thinkers, like Baron d'Holbach, went further and embraced atheism.</li>
                    <li><strong>Economic Thought</strong>: Adam Smith's "The Wealth of Nations" (1776) laid the foundation for classical economics, arguing that free markets guided by the "invisible hand" would lead to greater prosperity than mercantilist policies.</li>
                    <li><strong>Social Criticism</strong>: Enlightenment thinkers critiqued various social institutions and practices:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Cesare Beccaria argued against torture and for more humane criminal justice.</li>
                        <li>Mary Wollstonecraft advocated for women's rights and education in "A Vindication of the Rights of Woman" (1792).</li>
                        <li>Some thinkers, like the Abbé Raynal and later Olympe de Gouges, criticized slavery and colonialism.</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="mb-4">
                    The Enlightenment was not a unified movement but encompassed diverse and sometimes contradictory ideas. However, certain common themes emerged:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Faith in human reason and progress</li>
                    <li>Skepticism toward tradition and established authority</li>
                    <li>Emphasis on individual rights and freedoms</li>
                    <li>Belief that society and government could be reformed based on rational principles</li>
                  </ul>
                  <p>
                    The Enlightenment's ideas spread through various channels, including the Encyclopédie (1751-1772), a massive reference work edited by Denis Diderot and Jean le Rond d'Alembert that aimed to collect and disseminate human knowledge based on rational principles.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">The Public Sphere and Print Culture</h3>
                  <p className="mb-4">
                    The Enlightenment coincided with the development of what historian Jürgen Habermas called the "public sphere"—spaces where private individuals could gather to discuss matters of public interest:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Salons</strong>: Usually hosted by wealthy women in their homes, salons brought together intellectuals, aristocrats, and artists for conversation and debate. Prominent salonnières like Madame Geoffrin in Paris created spaces where Enlightenment ideas could be discussed across social boundaries.</li>
                    <li><strong>Coffeehouses</strong>: Particularly important in England, coffeehouses served as centers for news, debate, and intellectual exchange. They were often associated with specific professions or interests, from literature to science to commerce.</li>
                    <li><strong>Academies and Learned Societies</strong>: Institutions like the Royal Society in London and the Academy of Sciences in Paris promoted scientific research and discussion outside traditional universities.</li>
                    <li><strong>Masonic Lodges</strong>: Freemasonry provided a network for men from different social backgrounds to meet and discuss Enlightenment ideas, emphasizing brotherhood and moral improvement.</li>
                  </ul>
                  <p className="mb-4">
                    These developments were supported by changes in print culture and literacy:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Rising Literacy</strong>: Literacy rates increased significantly during the 18th century, particularly in urban areas and Protestant regions.</li>
                    <li><strong>Periodical Press</strong>: Newspapers, journals, and magazines proliferated, making information and ideas accessible to broader audiences. Publications like The Spectator in England and the Journal des Savants in France shaped public opinion.</li>
                    <li><strong>Book Trade</strong>: The publishing industry expanded, with innovations in production and distribution. Lending libraries and reading societies made books available to those who couldn't afford to purchase them.</li>
                    <li><strong>Censorship and Its Evasion</strong>: Despite government and church censorship, controversial works circulated through underground networks, foreign printing, and coded language.</li>
                  </ul>
                  <p>
                    The public sphere created spaces where traditional authorities could be questioned and new ideas debated, contributing to the Enlightenment's impact on European society and politics.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">18th-Century Society and Demographics</h3>
                  <p className="mb-4">
                    The 18th century saw significant social and demographic changes that both influenced and were influenced by intellectual developments:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Population Growth</strong>: Europe's population increased dramatically, from about 118 million in 1700 to 187 million by 1800. This growth resulted from declining death rates (due to fewer epidemics and improved food supply) rather than increased birth rates.</li>
                    <li><strong>Agricultural Improvements</strong>: New farming techniques, crop rotation systems, and the introduction of new crops (like potatoes and maize) increased food production. The enclosure movement in England consolidated land but displaced many small farmers.</li>
                    <li><strong>Urbanization</strong>: Cities grew significantly, with London reaching one million inhabitants by 1800. Urban growth created new social problems but also concentrated cultural and intellectual activity.</li>
                    <li><strong>Proto-industrialization</strong>: Rural manufacturing, particularly in textiles, expanded through the putting-out system. This laid the groundwork for the later Industrial Revolution while transforming rural economies.</li>
                    <li><strong>Family Structures</strong>: The Western European marriage pattern (late marriage and nuclear families) persisted, but new ideas about childhood, education, and family relationships emerged. Jean-Jacques Rousseau's "Emile" (1762) influenced educational theory and child-rearing practices.</li>
                    <li><strong>Gender Roles</strong>: While traditional gender hierarchies remained strong, Enlightenment discussions of natural rights raised questions about women's status. Some women, like Mary Wollstonecraft, explicitly challenged gender inequality, while others, like the salonnières, carved out influential cultural roles.</li>
                    <li><strong>Consumer Revolution</strong>: Increased availability of goods like sugar, tea, coffee, and manufactured items changed consumption patterns, particularly for the middle classes. New forms of leisure and sociability developed around these consumption practices.</li>
                  </ul>
                  <p>
                    These social and demographic changes created both opportunities and tensions. Population growth and urbanization contributed to poverty and social dislocation, while increased literacy and consumption supported the spread of Enlightenment ideas. The emerging middle classes, particularly in urban areas, became important consumers of Enlightenment literature and participants in the public sphere.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Enlightened Absolutism</h3>
                  <p className="mb-4">
                    Some European monarchs attempted to implement Enlightenment principles while maintaining their absolute authority, a phenomenon historians call "enlightened absolutism" or "enlightened despotism":
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Frederick II (the Great) of Prussia</strong> (r. 1740-1786):
                      <ul className="list-disc pl-6 mt-2">
                        <li>Corresponded with Voltaire and other philosophers</li>
                        <li>Reformed Prussia's legal system and abolished torture</li>
                        <li>Promoted religious toleration</li>
                        <li>Supported education and cultural institutions</li>
                        <li>Maintained a strong military and pursued territorial expansion</li>
                      </ul>
                    </li>
                    <li><strong>Catherine II (the Great) of Russia</strong> (r. 1762-1796):
                      <ul className="list-disc pl-6 mt-2">
                        <li>Corresponded with Diderot and other Enlightenment figures</li>
                        <li>Attempted legal reform through her Nakaz (Instruction)</li>
                        <li>Expanded education, particularly for noble women</li>
                        <li>Supported the arts and founded the Hermitage Museum</li>
                        <li>Expanded Russian territory and strengthened serfdom</li>
                      </ul>
                    </li>
                    <li><strong>Joseph II of Austria</strong> (r. 1780-1790):
                      <ul className="list-disc pl-6 mt-2">
                        <li>Issued the Toleration Patent granting religious freedoms to Protestants and Jews</li>
                        <li>Abolished serfdom and reformed the tax system</li>
                        <li>Reduced the power of the Catholic Church</li>
                        <li>Implemented administrative and educational reforms</li>
                        <li>Many reforms were reversed after his death due to opposition</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="mb-4">
                    Enlightened absolutism reflected the complex relationship between Enlightenment ideas and traditional power structures:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Enlightened monarchs implemented reforms that aligned with Enlightenment principles of rationality, efficiency, and limited religious tolerance</li>
                    <li>However, they generally rejected ideas that would fundamentally challenge their authority, such as popular sovereignty or constitutional government</li>
                    <li>Reforms often aimed to strengthen the state and increase its efficiency rather than primarily benefit subjects</li>
                    <li>The extent to which these monarchs were genuinely influenced by Enlightenment thought versus using it to legitimize their rule remains debated</li>
                  </ul>
                  <p>
                    Despite its limitations, enlightened absolutism represented an important phase in European political development, as rulers attempted to reconcile traditional authority with new intellectual currents.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Cultural and Artistic Developments</h3>
                  <p className="mb-4">
                    The 18th century saw significant cultural and artistic developments that both reflected and shaped intellectual trends:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Neoclassicism</strong>: Drawing inspiration from classical antiquity, neoclassical art and architecture emphasized order, balance, and rationality. Artists like Jacques-Louis David created works with moral and political themes, often supporting Enlightenment values.</li>
                    <li><strong>Literature</strong>: New literary forms emerged and existing ones evolved:
                      <ul className="list-disc pl-6 mt-2">
                        <li>The novel developed as a major genre, with works like Daniel Defoe's "Robinson Crusoe" and Samuel Richardson's "Pamela" exploring individual experience and moral questions.</li>
                        <li>Satire flourished in the hands of writers like Jonathan Swift and Voltaire, who used wit to critique society and politics.</li>
                        <li>The epistolary form (letters) was used for both fiction and philosophical works, creating a sense of intimate conversation with readers.</li>
                      </ul>
                    </li>
                    <li><strong>Music</strong>: The Classical period in music (c. 1750-1820) saw composers like Haydn, Mozart, and early Beethoven create works characterized by clarity, balance, and emotional restraint. Opera became more naturalistic, and instrumental music gained prominence.</li>
                    <li><strong>Early Romanticism</strong>: By the late 18th century, a reaction against Enlightenment rationality began to emerge:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Jean-Jacques Rousseau emphasized feeling and nature over reason and civilization.</li>
                        <li>The Sturm und Drang movement in German literature, including young Goethe, explored emotional extremes and individual genius.</li>
                        <li>Gothic novels like Mary Shelley's "Frankenstein" (1818) explored the darker aspects of science and human nature.</li>
                      </ul>
                    </li>
                    <li><strong>Popular Culture</strong>: While elite culture was transformed by Enlightenment ideas, popular traditions continued in modified forms:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Folk festivals and carnival traditions persisted but faced increasing regulation.</li>
                        <li>Popular literature, including chapbooks and almanacs, reached broader audiences.</li>
                        <li>New forms of commercial entertainment emerged in urban areas.</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    These cultural developments reflected the tensions and contradictions of the age: between reason and emotion, tradition and innovation, elite and popular culture. By the end of the 18th century, the Romantic movement would challenge many Enlightenment assumptions, emphasizing emotion, imagination, and individual genius over universal reason.
                  </p>
                </div>
              </div>
            )}
            
            {/* Timeline Tab */}
            {activeTab === 'timeline' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Timeline of Key Events</h2>
                <Timeline events={scientificEvents} />
              </div>
            )}
            
            {/* Key Figures Tab */}
            {activeTab === 'figures' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Key Figures</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Isaac Newton (1643-1727)</h3>
                    <p className="mb-2"><strong>Role:</strong> English physicist, mathematician, and astronomer</p>
                    <p className="mb-2"><strong>Contributions:</strong> Formulated the laws of motion and universal gravitation in his "Principia Mathematica" (1687); developed calculus; conducted experiments on light and optics.</p>
                    <p><strong>Significance:</strong> Provided a unified mathematical framework that explained diverse physical phenomena, from falling objects to planetary motion. His work represented the culmination of the Scientific Revolution and influenced science, philosophy, and theology for centuries.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">John Locke (1632-1704)</h3>
                    <p className="mb-2"><strong>Role:</strong> English philosopher and political theorist</p>
                    <p className="mb-2"><strong>Contributions:</strong> Developed empiricist epistemology in "An Essay Concerning Human Understanding" (1689); argued for natural rights and the social contract in "Two Treatises of Government" (1689).</p>
                    <p><strong>Significance:</strong> His political ideas influenced democratic movements worldwide, particularly the American Revolution. His empiricism shaped Enlightenment epistemology, while his emphasis on natural rights provided a foundation for modern concepts of human rights.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Voltaire (François-Marie Arouet) (1694-1778)</h3>
                    <p className="mb-2"><strong>Role:</strong> French writer, philosopher, and social critic</p>
                    <p className="mb-2"><strong>Contributions:</strong> Wrote prolifically across genres, including philosophical tales ("Candide"), historical works, and polemics; advocated for religious tolerance and civil liberties.</p>
                    <p><strong>Significance:</strong> Became the most prominent public intellectual of the Enlightenment, using wit and satire to challenge religious intolerance, censorship, and arbitrary authority. His phrase "Écrasez l'infâme" ("Crush the infamous thing") became a rallying cry against religious fanaticism and persecution.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Baron de Montesquieu (1689-1755)</h3>
                    <p className="mb-2"><strong>Role:</strong> French political philosopher</p>
                    <p className="mb-2"><strong>Contributions:</strong> Developed the theory of separation of powers in "The Spirit of the Laws" (1748); analyzed different forms of government and their principles.</p>
                    <p><strong>Significance:</strong> His theory of separating government into executive, legislative, and judicial branches to prevent tyranny influenced constitutional design worldwide, particularly the U.S. Constitution. His comparative approach to political systems established a foundation for political science.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Jean-Jacques Rousseau (1712-1778)</h3>
                    <p className="mb-2"><strong>Role:</strong> Genevan philosopher, writer, and composer</p>
                    <p className="mb-2"><strong>Contributions:</strong> Developed theories of the social contract and general will in "The Social Contract" (1762); explored education in "Emile" (1762); wrote an influential autobiography, "Confessions."</p>
                    <p><strong>Significance:</strong> Presented a more radical vision of democracy based on popular sovereignty and the general will. His critique of civilization and emphasis on nature and feeling influenced Romanticism. His educational theories transformed approaches to childhood and learning.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Denis Diderot (1713-1784)</h3>
                    <p className="mb-2"><strong>Role:</strong> French philosopher and writer</p>
                    <p className="mb-2"><strong>Contributions:</strong> Edited the Encyclopédie (1751-1772), a massive reference work containing articles by leading Enlightenment thinkers; wrote novels, dialogues, and art criticism.</p>
                    <p><strong>Significance:</strong> The Encyclopédie became a symbol of the Enlightenment project to reorganize knowledge based on rational principles. It disseminated Enlightenment ideas while subtly criticizing traditional authorities, particularly the Catholic Church.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Galileo Galilei (1564-1642)</h3>
                    <p className="mb-2"><strong>Role:</strong> Italian astronomer, physicist, and mathematician</p>
                    <p className="mb-2"><strong>Contributions:</strong> Made telescopic observations supporting the Copernican model; conducted experiments on motion; advocated for the mathematical analysis of nature.</p>
                    <p><strong>Significance:</strong> His conflict with the Catholic Church over heliocentrism became a symbol of the tension between science and religious authority. His emphasis on observation, experimentation, and mathematical analysis exemplified the new scientific approach.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Mary Wollstonecraft (1759-1797)</h3>
                    <p className="mb-2"><strong>Role:</strong> English writer and advocate for women's rights</p>
                    <p className="mb-2"><strong>Contributions:</strong> Wrote "A Vindication of the Rights of Woman" (1792), arguing for women's education and equality; responded to Edmund Burke's criticism of the French Revolution.</p>
                    <p><strong>Significance:</strong> Applied Enlightenment principles of reason and natural rights to gender relations, challenging the exclusion of women from full citizenship and education. Her work laid foundations for later feminist movements.</p>
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
                    front="What were the key characteristics of the Scientific Revolution?" 
                    back="Emphasis on systematic observation and experimentation; mathematical analysis of natural phenomena; mechanical view of the universe; challenge to ancient authorities like Aristotle and Ptolemy; development of new scientific instruments and methods; collaboration through scientific societies and publications."
                  />
                  
                  <Flashcard 
                    front="How did Newton's work represent the culmination of the Scientific Revolution?" 
                    back="Newton's laws of motion and universal gravitation provided a unified mathematical framework that explained diverse physical phenomena, from falling objects to planetary motion. His work demonstrated that the same physical laws apply throughout the universe, supporting the mechanical worldview and showing the power of mathematical analysis in understanding nature."
                  />
                  
                  <Flashcard 
                    front="What were the main political theories developed during the Enlightenment?" 
                    back="Social contract theory (government based on consent of the governed); natural rights (inherent rights to life, liberty, property); separation of powers (dividing government into executive, legislative, and judicial branches); popular sovereignty (authority derives from the people); religious tolerance and separation of church and state."
                  />
                  
                  <Flashcard 
                    front="How did the public sphere contribute to the Enlightenment?" 
                    back="The public sphere—including salons, coffeehouses, academies, and the periodical press—created spaces where ideas could be debated across social boundaries. It allowed Enlightenment ideas to circulate, be refined through discussion, and reach broader audiences. Women like salonnières played important roles in facilitating intellectual exchange."
                  />
                  
                  <Flashcard 
                    front="What was enlightened absolutism and how did it relate to Enlightenment ideas?" 
                    back="Enlightened absolutism was an approach to governance where monarchs like Frederick II of Prussia, Catherine the Great of Russia, and Joseph II of Austria implemented reforms influenced by Enlightenment principles while maintaining absolute authority. They typically embraced rationalization, religious tolerance, and educational reform but rejected ideas that would fundamentally challenge their power."
                  />
                  
                  <Flashcard 
                    front="How did Enlightenment ideas influence the American and French Revolutions?" 
                    back="Both revolutions drew on Enlightenment concepts of natural rights, popular sovereignty, and the social contract. The American Declaration of Independence and Constitution incorporated ideas from Locke and Montesquieu. The French Revolution initially aimed to create a constitutional monarchy based on Enlightenment principles before becoming more radical."
                  />
                  
                  <Flashcard 
                    front="What was the relationship between science and religion during this period?" 
                    back="Complex and varied. Some scientific discoveries challenged traditional religious interpretations, leading to conflicts like Galileo's with the Catholic Church. However, many scientists remained religious, seeing their work as revealing God's design. Natural theology sought to prove God's existence through scientific observation, while deism emerged as a rational approach to religion based on natural law rather than revelation."
                  />
                  
                  <Flashcard 
                    front="How did the Enlightenment approach to knowledge differ from medieval and Renaissance approaches?" 
                    back="The Enlightenment emphasized reason, observation, and critical inquiry over tradition and authority. It valued empirical evidence and logical analysis rather than classical or biblical authority. Knowledge was seen as progressive and cumulative rather than primarily recovered from ancient sources. The Enlightenment also emphasized practical utility and the potential for human improvement through knowledge."
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
                  <li><Link href="/practice-tests/unit4" className="text-secondary hover:text-accent">Unit 4 Practice Test</Link></li>
                  <li><Link href="/dbq-practice/unit4" className="text-secondary hover:text-accent">Enlightenment DBQ Practice</Link></li>
                  <li><Link href="/short-answer/unit4" className="text-secondary hover:text-accent">Short Answer Questions</Link></li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">External Resources</h3>
                <ul className="space-y-2">
                  <li><a href="https://www.khanacademy.org/humanities/renaissance-reformation/scientific-revolution-enlightenment" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Khan Academy: Scientific Revolution and Enlightenment</a></li>
                  <li><a href="https://www.britannica.com/science/Scientific-Revolution" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Britannica: The Scientific Revolution</a></li>
                  <li><a href="https://plato.stanford.edu/entries/enlightenment/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Stanford Encyclopedia of Philosophy: Enlightenment</a></li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">Video Lectures</h3>
                <ul className="space-y-2">
                  <li><a href="https://www.youtube.com/watch?v=xFH8DLqTQEA" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">AP European History: Scientific, Philosophical, and Political Developments</a></li>
                  <li><a href="https://www.youtube.com/watch?v=5C-s4JrymKM" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">The Scientific Revolution: Crash Course History of Science</a></li>
                  <li><a href="https://www.youtube.com/watch?v=NnoFj2cMRLY" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">The Enlightenment: Crash Course European History</a></li>
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
              <Link href="/units/3" className="btn btn-primary">
                Previous: Unit 3 - Absolutism and Constitutionalism
              </Link>
              
              <Link href="/units/5" className="btn btn-primary">
                Next: Unit 5 - Conflict, Crisis, and Reaction in the Late 18th Century
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
