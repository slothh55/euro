'use client';

import { useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Timeline from '../../../components/Timeline';
import Flashcard from '../../../components/Flashcard';
import Quiz from '../../../components/Quiz';
import Link from 'next/link';

export default function Unit3Page() {
  const [activeTab, setActiveTab] = useState('overview');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const absolutismEvents = [
    {
      year: '1648',
      title: 'Peace of Westphalia',
      description: 'Ended the Thirty Years\' War and established the principle of state sovereignty.',
      significance: 'Created the foundation for the modern state system and marked the beginning of the era of absolutism and constitutionalism.'
    },
    {
      year: '1649',
      title: 'Execution of Charles I',
      description: 'The English king was tried and executed during the English Civil War.',
      significance: 'Marked a dramatic challenge to the divine right of kings and established a brief republican experiment in England.'
    },
    {
      year: '1651',
      title: 'Thomas Hobbes publishes "Leviathan"',
      description: 'Hobbes argued for a strong sovereign authority to maintain order and peace.',
      significance: 'Provided philosophical justification for absolutism based on a social contract rather than divine right.'
    },
    {
      year: '1660',
      title: 'Restoration of the English Monarchy',
      description: 'Charles II returned to England and was restored to the throne.',
      significance: 'Ended the republican Commonwealth period but maintained some limits on royal power.'
    },
    {
      year: '1661',
      title: 'Louis XIV begins personal rule',
      description: 'After the death of Cardinal Mazarin, Louis XIV took direct control of the French government.',
      significance: 'Began the era of Louis XIV\'s absolutist rule, which would become the model for absolutist monarchs across Europe.'
    },
    {
      year: '1682',
      title: 'Louis XIV moves court to Versailles',
      description: 'The French king established his court at the Palace of Versailles.',
      significance: 'Symbolized the centralization of power and created a model of court culture that other European monarchs would emulate.'
    },
    {
      year: '1685',
      title: 'Revocation of the Edict of Nantes',
      description: 'Louis XIV revoked the edict that had granted religious toleration to French Protestants (Huguenots).',
      significance: 'Demonstrated the absolutist principle of religious uniformity and led to the exodus of Huguenots from France.'
    },
    {
      year: '1688-1689',
      title: 'Glorious Revolution',
      description: 'James II was overthrown and replaced by William and Mary, who accepted the Bill of Rights.',
      significance: 'Established constitutional monarchy in England and limited the power of the crown.'
    },
    {
      year: '1689',
      title: 'John Locke publishes "Two Treatises of Government"',
      description: 'Locke argued that government should be based on the consent of the governed and natural rights.',
      significance: 'Provided philosophical justification for constitutionalism and influenced later democratic movements.'
    },
    {
      year: '1701',
      title: 'Act of Settlement',
      description: 'The English Parliament established the Hanoverian succession.',
      significance: 'Further strengthened parliamentary control over the monarchy by determining royal succession.'
    },
    {
      year: '1713',
      title: 'Peace of Utrecht',
      description: 'Ended the War of Spanish Succession and established a new balance of power in Europe.',
      significance: 'Prevented French hegemony in Europe and established the principle of the balance of power in international relations.'
    },
    {
      year: '1740-1748',
      title: 'War of Austrian Succession',
      description: 'Conflict over Maria Theresa\'s succession to the Habsburg territories.',
      significance: 'Demonstrated the competition between absolutist powers and the importance of the balance of power principle.'
    },
    {
      year: '1748',
      title: 'Montesquieu publishes "The Spirit of the Laws"',
      description: 'Montesquieu argued for the separation of powers in government.',
      significance: 'Became a foundational text for constitutional government and influenced the American and French Revolutions.'
    }
  ];
  
  const quizQuestions = [
    {
      question: 'Which of the following best describes the concept of "absolutism" in early modern Europe?',
      options: [
        'A system where power was shared equally between the monarch and the nobility',
        'A form of government in which the monarch claimed complete authority, unrestrained by laws or other institutions',
        'A political system based on democratic elections and popular sovereignty',
        'A government controlled primarily by religious authorities'
      ],
      correctAnswer: 1,
      explanation: 'Absolutism was a form of government in which the monarch claimed complete authority, unrestrained by laws, representative institutions, or other checks on power. Absolutist rulers like Louis XIV of France centralized power in their own hands and often justified their authority through the divine right of kings.'
    },
    {
      question: 'The English Bill of Rights (1689) established which of the following principles?',
      options: [
        'The divine right of kings',
        'The supremacy of the Catholic Church in England',
        'Parliamentary sovereignty and limits on royal power',
        'Universal male suffrage'
      ],
      correctAnswer: 2,
      explanation: 'The English Bill of Rights, passed after the Glorious Revolution, established parliamentary sovereignty and placed significant limits on royal power. It prohibited the monarch from suspending laws, levying taxes without parliamentary consent, maintaining a standing army in peacetime without parliamentary approval, and interfering with parliamentary elections.'
    },
    {
      question: 'Louis XIV\'s statement "L\'état, c\'est moi" ("I am the state") best reflects which political principle?',
      options: [
        'Constitutionalism',
        'Separation of powers',
        'Absolutism',
        'Federalism'
      ],
      correctAnswer: 2,
      explanation: 'Louis XIV\'s famous statement "L\'état, c\'est moi" ("I am the state") perfectly encapsulates the principle of absolutism, in which the monarch personally embodies the state and claims unlimited authority. Louis XIV is often considered the model absolutist monarch who centralized power and reduced the influence of the nobility and other competing authorities.'
    },
    {
      question: 'Which of the following was NOT a characteristic of mercantilism?',
      options: [
        'Government regulation of the economy',
        'Emphasis on maintaining a favorable balance of trade',
        'Accumulation of precious metals',
        'Support for free trade and minimal government intervention'
      ],
      correctAnswer: 3,
      explanation: 'Mercantilism was an economic theory that emphasized government regulation of the economy, maintaining a favorable balance of trade (exporting more than importing), and the accumulation of precious metals. It did NOT support free trade or minimal government intervention; in fact, it advocated for significant state involvement in economic affairs through tariffs, monopolies, and colonial exploitation.'
    },
    {
      question: 'The Peace of Westphalia (1648) is significant because it:',
      options: [
        'Established the principle of state sovereignty in international relations',
        'Created a unified German state',
        'Ended the French Revolution',
        'Restored Catholicism as the only legal religion in Europe'
      ],
      correctAnswer: 0,
      explanation: 'The Peace of Westphalia, which ended the Thirty Years\' War in 1648, is significant because it established the principle of state sovereignty in international relations. It recognized the independence of states to determine their own domestic affairs, including religion, without external interference. This treaty is often considered the foundation of the modern international system.'
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Unit Header */}
        <section className="bg-unit3-color text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Unit 3: Absolutism and Constitutionalism</h1>
            <p className="text-xl mb-4">c. 1648 to c. 1815</p>
            <p className="text-lg">
              Explore the competing models of state power that emerged in Europe following the Peace of Westphalia, as monarchs consolidated authority and constitutional systems developed to limit royal power.
            </p>
          </div>
        </section>
        
        {/* Navigation Tabs */}
        <section className="bg-light-gray border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'overview' ? 'bg-white border-t-2 border-unit3-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('overview')}
              >
                Overview
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'key-topics' ? 'bg-white border-t-2 border-unit3-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('key-topics')}
              >
                Key Topics
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'timeline' ? 'bg-white border-t-2 border-unit3-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('timeline')}
              >
                Timeline
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'figures' ? 'bg-white border-t-2 border-unit3-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('figures')}
              >
                Key Figures
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'flashcards' ? 'bg-white border-t-2 border-unit3-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('flashcards')}
              >
                Flashcards
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'quiz' ? 'bg-white border-t-2 border-unit3-color' : 'hover:bg-white'}`}
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
                  The period from 1648 to 1815 saw the development of two competing models of state power in Europe: absolutism and constitutionalism. Following the Peace of Westphalia, which ended the Thirty Years' War and established the principle of state sovereignty, European rulers sought to consolidate their authority and build stronger, more centralized states.
                </p>
                <p className="mb-4">
                  Absolutist monarchs, exemplified by Louis XIV of France (the "Sun King"), claimed complete authority over their realms, often justifying their power through the divine right of kings. They centralized administration, maintained standing armies, controlled the nobility, and intervened in economic affairs through mercantilist policies. This model of governance spread across much of continental Europe, with variations in Russia, Prussia, Austria, and Spain.
                </p>
                <p className="mb-4">
                  In contrast, constitutionalism emerged most prominently in England (later Great Britain) and the Dutch Republic. Constitutional systems limited the power of rulers through laws, representative institutions, and the protection of certain rights. The English Civil War, the Glorious Revolution, and the establishment of the English Bill of Rights marked key developments in constitutional monarchy, while political philosophers like John Locke and Montesquieu provided intellectual justification for limits on royal power.
                </p>
                <p className="mb-4">
                  This period also saw significant economic developments, including the rise of mercantilism as the dominant economic theory, the expansion of global trade networks, the Dutch Golden Age of commercial prosperity, and the early stages of the Agricultural Revolution. The competition between European powers led to the development of the balance of power principle in international relations, as states sought to prevent any single nation from becoming too dominant.
                </p>
                <p className="mb-4">
                  The struggle between absolutism and constitutionalism laid important groundwork for later political developments, including the Enlightenment, the American Revolution, and the French Revolution, which would further transform European politics and society.
                </p>
                
                <h3 className="text-2xl font-bold mt-8 mb-4">Key Developments</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The rise of absolutist monarchies in France, Russia, Prussia, and Austria</li>
                  <li>The development of constitutional monarchy in England after the Glorious Revolution</li>
                  <li>The Dutch Republic as an alternative model of republican government</li>
                  <li>Mercantilism as the dominant economic theory and practice</li>
                  <li>The balance of power principle in international relations</li>
                  <li>The development of political philosophy through thinkers like Hobbes, Locke, and Montesquieu</li>
                  <li>The expansion of global trade and colonial empires</li>
                  <li>The early Agricultural Revolution and changes in economic practices</li>
                </ul>
              </div>
            )}
            
            {/* Key Topics Tab */}
            {activeTab === 'key-topics' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Key Topics</h2>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Absolutism in France</h3>
                  <p className="mb-4">
                    France under Louis XIV (r. 1643-1715) became the model of absolutist monarchy in Europe. After the turmoil of the Fronde rebellions (1648-1653), which challenged royal authority during his youth, Louis was determined to establish unchallenged control.
                  </p>
                  <p className="mb-4">
                    Key features of French absolutism included:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Centralized Administration</strong>: Louis XIV expanded the bureaucracy and appointed intendants (royal officials) to administer the provinces, bypassing traditional noble authorities.</li>
                    <li><strong>Control of the Nobility</strong>: Louis required nobles to spend time at his court at Versailles, turning them from potential rivals into dependent courtiers competing for royal favor.</li>
                    <li><strong>Religious Uniformity</strong>: Louis revoked the Edict of Nantes in 1685, ending religious toleration for Protestants and declaring "one king, one law, one faith."</li>
                    <li><strong>Economic Intervention</strong>: Under finance minister Jean-Baptiste Colbert, the French government pursued mercantilist policies, establishing royal manufactories, building infrastructure, and regulating trade.</li>
                    <li><strong>Military Power</strong>: Louis maintained a large standing army, engaged in numerous wars to expand French borders, and built the impressive fortress system designed by Vauban.</li>
                    <li><strong>Cultural Patronage</strong>: The king supported arts and culture that glorified the monarchy, with the Palace of Versailles serving as the ultimate symbol of royal power and prestige.</li>
                  </ul>
                  <p>
                    Louis XIV's famous statement "L'état, c'est moi" ("I am the state") encapsulated the absolutist principle that the monarch personally embodied the state. His model of governance influenced rulers across Europe, though the costs of his wars and lavish court ultimately strained French resources.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Absolutism in Eastern Europe</h3>
                  <p className="mb-4">
                    Eastern European monarchs adapted the absolutist model to their own circumstances, often focusing on military power and modernization:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Russia under Peter the Great</strong> (r. 1682-1725): Peter forcibly modernized and westernized Russia, building a new capital at St. Petersburg, creating Russia's first navy, reforming the military, imposing Western dress and customs on the nobility, and establishing the Table of Ranks to create a service nobility. His reforms strengthened the autocratic power of the tsar while transforming Russia into a major European power.</li>
                    <li><strong>Prussia under Frederick William I</strong> (r. 1713-1740): Known as the "Soldier King," Frederick William created a highly militarized state with an army disproportionately large for its population. He established an efficient bureaucracy, maintained strict fiscal discipline, and subordinated the Junker nobility by incorporating them into the officer corps and civil service.</li>
                    <li><strong>Austria under Maria Theresa</strong> (r. 1740-1780): Though initially challenged by the War of Austrian Succession, Maria Theresa strengthened Habsburg authority through administrative centralization, tax reform, and the creation of a more professional bureaucracy, while maintaining the support of the Hungarian nobility.</li>
                  </ul>
                  <p>
                    Eastern European absolutism differed from the French model in several ways: it often involved more dramatic modernization efforts, maintained stronger roles for the nobility, and faced greater challenges in governing ethnically diverse territories.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">English Constitutionalism</h3>
                  <p className="mb-4">
                    England developed a constitutional monarchy that limited royal power through law and representative institutions. This process involved several key developments:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>English Civil War</strong> (1642-1651): The conflict between King Charles I and Parliament arose from disputes over taxation, religion, and royal authority. Parliament's victory, led by Oliver Cromwell, resulted in the execution of Charles I (1649) and the establishment of a republican Commonwealth.</li>
                    <li><strong>The Restoration</strong> (1660): After Cromwell's death, the monarchy was restored under Charles II, but with an understanding that the king would work with Parliament.</li>
                    <li><strong>The Glorious Revolution</strong> (1688-1689): When Catholic James II attempted to reassert royal prerogatives, Parliament invited his Protestant daughter Mary and her husband William of Orange to take the throne. This bloodless revolution established the principle that sovereignty resided in the "King-in-Parliament" rather than the monarch alone.</li>
                    <li><strong>Bill of Rights</strong> (1689): This landmark document prohibited the monarch from suspending laws, levying taxes without parliamentary consent, maintaining a standing army in peacetime without parliamentary approval, and interfering with parliamentary elections.</li>
                    <li><strong>Act of Settlement</strong> (1701): Parliament determined the royal succession, further asserting its authority over the monarchy.</li>
                    <li><strong>Cabinet Government</strong>: During the 18th century, the modern cabinet system began to develop, with ministers collectively responsible to Parliament.</li>
                  </ul>
                  <p>
                    By 1715, England (now part of Great Britain following the 1707 Act of Union with Scotland) had established a constitutional system that balanced monarchical, aristocratic, and democratic elements, with sovereignty residing in Parliament rather than the Crown.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">The Dutch Republic</h3>
                  <p className="mb-4">
                    The Dutch Republic (officially the United Provinces) offered an alternative to both absolutism and constitutional monarchy, establishing a republican system dominated by wealthy merchants:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Political Structure</strong>: The Republic was a confederation of seven provinces, each with substantial autonomy. The States General served as the central governing body, while the position of Stadtholder (usually held by the House of Orange) provided military leadership.</li>
                    <li><strong>Commercial Prosperity</strong>: The 17th century marked the Dutch Golden Age, with Amsterdam becoming the commercial and financial center of Europe. The Dutch East India Company (VOC) dominated Asian trade, while Dutch merchants controlled much of Europe's shipping.</li>
                    <li><strong>Religious Toleration</strong>: Unlike most European states, the Dutch Republic practiced relative religious toleration, attracting religious refugees including Jews and Huguenots who contributed to its economic and cultural vitality.</li>
                    <li><strong>Cultural Achievements</strong>: The Republic produced remarkable artistic and intellectual achievements, including the paintings of Rembrandt and Vermeer, and the philosophical works of Spinoza.</li>
                    <li><strong>Challenges and Decline</strong>: The Republic faced military challenges from France and England, and its power gradually declined in the 18th century as these larger states developed their naval and commercial capabilities.</li>
                  </ul>
                  <p>
                    The Dutch Republic demonstrated that a non-monarchical system could achieve political stability, economic prosperity, and cultural flourishing, providing an important model for later republican movements.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Mercantilism and Economic Development</h3>
                  <p className="mb-4">
                    Mercantilism was the dominant economic theory of this period, based on the premise that the world's wealth was relatively fixed and that states should compete to acquire the largest share:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Key Principles</strong>: Mercantilists advocated maintaining a favorable balance of trade (exporting more than importing), accumulating precious metals, developing domestic manufacturing, protecting industries through tariffs, and exploiting colonies for raw materials and markets.</li>
                    <li><strong>Colbert's Policies</strong>: Jean-Baptiste Colbert, Louis XIV's finance minister, exemplified mercantilist practices by establishing royal manufactories, building roads and canals, imposing protective tariffs, and developing French colonial possessions.</li>
                    <li><strong>Colonial Trade</strong>: European powers established colonial empires and trading companies (like the British and Dutch East India Companies) to secure resources and markets. The triangular trade connected Europe, Africa, and the Americas in a global commercial system that included the Atlantic slave trade.</li>
                    <li><strong>Agricultural Changes</strong>: The early stages of the Agricultural Revolution brought innovations like crop rotation, selective breeding, and new crops, increasing agricultural productivity and supporting population growth.</li>
                    <li><strong>Proto-industrialization</strong>: Rural manufacturing, particularly in textiles, expanded through the putting-out system, laying groundwork for later industrialization.</li>
                  </ul>
                  <p>
                    While mercantilism aligned with absolutist state-building by increasing royal revenues and power, it also contributed to international conflicts as states competed for trade advantages and colonial possessions.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Balance of Power</h3>
                  <p className="mb-4">
                    The concept of the balance of power emerged as a guiding principle in international relations, aiming to prevent any single state from becoming dominant in Europe:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Origins</strong>: The principle developed in response to Louis XIV's attempts to expand French power, as other European states formed coalitions to counter French ambitions.</li>
                    <li><strong>War of Spanish Succession</strong> (1701-1714): When the Spanish Habsburg line ended and a Bourbon prince was poised to inherit the Spanish throne, fears of French-Spanish unification led to a major European conflict. The Peace of Utrecht (1713) resolved the crisis by dividing Spanish possessions and establishing a new balance.</li>
                    <li><strong>Diplomatic Revolution</strong> (1756): Traditional enemies France and Austria allied against Prussia and Britain, demonstrating how the balance of power principle could override traditional enmities.</li>
                    <li><strong>War of Austrian Succession</strong> (1740-1748): When Frederick the Great of Prussia seized Silesia from Maria Theresa of Austria, other powers intervened to prevent excessive Prussian expansion.</li>
                    <li><strong>Seven Years' War</strong> (1756-1763): Often called the first "world war," this conflict involved European powers fighting in Europe, North America, and Asia, with significant consequences for colonial possessions.</li>
                  </ul>
                  <p>
                    The balance of power system helped prevent any single state from dominating Europe, but it also led to frequent wars as states adjusted to maintain equilibrium. The principle would continue to influence European diplomacy through the Congress of Vienna (1814-1815) and beyond.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Political Thought and Philosophy</h3>
                  <p className="mb-4">
                    The competing models of absolutism and constitutionalism were supported by sophisticated political theories:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Thomas Hobbes</strong> (1588-1679): In "Leviathan" (1651), Hobbes argued that humans in their natural state faced a "war of all against all." To escape this dangerous condition, people formed a social contract, surrendering their rights to a sovereign authority that would maintain order. While Hobbes's theory supported absolutism, it based royal authority on a social contract rather than divine right.</li>
                    <li><strong>Jacques Bossuet</strong> (1627-1704): As a French bishop and theorist of divine right monarchy, Bossuet argued in "Politics Drawn from the Very Words of Holy Scripture" that kings received their authority directly from God and were accountable only to Him, providing religious justification for absolutism.</li>
                    <li><strong>John Locke</strong> (1632-1704): In his "Two Treatises of Government" (1689), Locke proposed that government should be based on the consent of the governed and should protect natural rights to life, liberty, and property. If a government violated these rights, citizens had the right to overthrow it. Locke's ideas provided philosophical justification for constitutional limits on royal power.</li>
                    <li><strong>Montesquieu</strong> (1689-1755): In "The Spirit of the Laws" (1748), Montesquieu advocated the separation of powers between executive, legislative, and judicial branches to prevent tyranny. His ideas influenced constitutional developments in many countries, particularly the United States.</li>
                  </ul>
                  <p>
                    These political theories not only reflected the absolutism-constitutionalism debate of their time but also laid important groundwork for the Enlightenment and later democratic movements.
                  </p>
                </div>
              </div>
            )}
            
            {/* Timeline Tab */}
            {activeTab === 'timeline' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Timeline of Key Events</h2>
                <Timeline events={absolutismEvents} />
              </div>
            )}
            
            {/* Key Figures Tab */}
            {activeTab === 'figures' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Key Figures</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Louis XIV of France (1638-1715)</h3>
                    <p className="mb-2"><strong>Role:</strong> King of France (r. 1643-1715)</p>
                    <p className="mb-2"><strong>Contributions:</strong> Established the model of absolutist monarchy; centralized French administration; built the Palace of Versailles; maintained a large standing army; pursued aggressive foreign policy.</p>
                    <p><strong>Significance:</strong> Known as the "Sun King," Louis XIV epitomized absolutist rule and made France the dominant power in Europe. His statement "L'état, c'est moi" ("I am the state") encapsulated the absolutist principle that the monarch personally embodied the state.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Peter the Great of Russia (1672-1725)</h3>
                    <p className="mb-2"><strong>Role:</strong> Tsar of Russia (r. 1682-1725)</p>
                    <p className="mb-2"><strong>Contributions:</strong> Modernized and westernized Russia; built St. Petersburg; created Russia's first navy; reformed the military; established the Table of Ranks; imposed Western customs on the nobility.</p>
                    <p><strong>Significance:</strong> Transformed Russia into a major European power while strengthening autocratic rule. His reforms, though often brutal, laid the foundation for Russia's emergence as a modern state.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Frederick William I of Prussia (1688-1740)</h3>
                    <p className="mb-2"><strong>Role:</strong> King of Prussia (r. 1713-1740)</p>
                    <p className="mb-2"><strong>Contributions:</strong> Created a highly militarized state with an army disproportionately large for its population; established an efficient bureaucracy; maintained strict fiscal discipline.</p>
                    <p><strong>Significance:</strong> Known as the "Soldier King," he transformed Prussia into a military power and laid the groundwork for its later expansion under his son, Frederick the Great.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Oliver Cromwell (1599-1658)</h3>
                    <p className="mb-2"><strong>Role:</strong> Military and political leader during the English Civil War; Lord Protector of the Commonwealth (1653-1658)</p>
                    <p className="mb-2"><strong>Contributions:</strong> Led parliamentary forces against Charles I; established the republican Commonwealth after the king's execution; conquered Ireland and Scotland.</p>
                    <p><strong>Significance:</strong> Demonstrated that monarchs could be held accountable and even executed, challenging divine right theory. His rule showed both the possibilities and limitations of non-monarchical government in early modern Europe.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">William III and Mary II of England</h3>
                    <p className="mb-2"><strong>Role:</strong> Joint monarchs of England (r. 1689-1702 for Mary, 1689-1702 for William)</p>
                    <p className="mb-2"><strong>Contributions:</strong> Accepted the English throne during the Glorious Revolution; agreed to the Bill of Rights limiting royal power; William led the Grand Alliance against Louis XIV.</p>
                    <p><strong>Significance:</strong> Their acceptance of constitutional limitations established the principle that sovereignty resided in the "King-in-Parliament" rather than the monarch alone, creating the model of constitutional monarchy.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Jean-Baptiste Colbert (1619-1683)</h3>
                    <p className="mb-2"><strong>Role:</strong> Finance Minister to Louis XIV</p>
                    <p className="mb-2"><strong>Contributions:</strong> Implemented mercantilist economic policies; established royal manufactories; built infrastructure; reformed tax collection; developed French colonial possessions.</p>
                    <p><strong>Significance:</strong> His economic policies (known as "Colbertism") exemplified mercantilism and supported French absolutism by increasing royal revenues and power.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">John Locke (1632-1704)</h3>
                    <p className="mb-2"><strong>Role:</strong> English philosopher and political theorist</p>
                    <p className="mb-2"><strong>Contributions:</strong> Wrote "Two Treatises of Government" arguing that government should be based on the consent of the governed and should protect natural rights.</p>
                    <p><strong>Significance:</strong> Provided philosophical justification for constitutionalism and influenced later democratic movements, including the American and French Revolutions.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Maria Theresa of Austria (1717-1780)</h3>
                    <p className="mb-2"><strong>Role:</strong> Archduchess of Austria, Queen of Hungary and Bohemia (r. 1740-1780)</p>
                    <p className="mb-2"><strong>Contributions:</strong> Defended her inheritance during the War of Austrian Succession; implemented administrative reforms; reorganized the tax system; improved education.</p>
                    <p><strong>Significance:</strong> Preserved the Habsburg monarchy during a period of crisis and strengthened it through reforms, while demonstrating that a woman could effectively rule a major European power.</p>
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
                    front="What were the key characteristics of absolutism?" 
                    back="Centralization of power in the monarch's hands, divine right theory, control of the nobility, standing armies, religious uniformity, economic intervention through mercantilism, and elaborate court culture (exemplified by Versailles)."
                  />
                  
                  <Flashcard 
                    front="How did the English Bill of Rights (1689) limit royal power?" 
                    back="It prohibited the monarch from suspending laws, levying taxes without parliamentary consent, maintaining a standing army in peacetime without parliamentary approval, and interfering with parliamentary elections. It also guaranteed certain rights to subjects."
                  />
                  
                  <Flashcard 
                    front="What was mercantilism and how did it relate to absolutism?" 
                    back="Mercantilism was an economic theory emphasizing government regulation, favorable balance of trade, and accumulation of precious metals. It supported absolutism by increasing state revenues and power through economic control and colonial exploitation."
                  />
                  
                  <Flashcard 
                    front="How did Peter the Great transform Russia?" 
                    back="Peter modernized and westernized Russia by building St. Petersburg, creating Russia's first navy, reforming the military, establishing the Table of Ranks, imposing Western customs on the nobility, and strengthening autocratic rule."
                  />
                  
                  <Flashcard 
                    front="What was the significance of the Glorious Revolution (1688-1689)?" 
                    back="It established constitutional monarchy in England by replacing James II with William and Mary, who accepted the Bill of Rights. It established the principle that sovereignty resided in the 'King-in-Parliament' rather than the monarch alone."
                  />
                  
                  <Flashcard 
                    front="How did the Dutch Republic differ from absolutist monarchies?" 
                    back="The Dutch Republic was a confederation of provinces with a republican system dominated by wealthy merchants. It featured relative religious toleration, commercial prosperity, and limited central authority, contrasting with absolutist centralization and divine right theory."
                  />
                  
                  <Flashcard 
                    front="What was the balance of power principle in international relations?" 
                    back="The balance of power was the idea that European states should prevent any single nation from becoming too dominant by forming alliances against potential hegemons. It led to shifting coalitions and frequent wars as states adjusted to maintain equilibrium."
                  />
                  
                  <Flashcard 
                    front="How did Locke's political theory differ from Hobbes's?" 
                    back="While both based government on a social contract, Hobbes argued for an absolute sovereign to maintain order, whereas Locke believed government should be based on consent, protect natural rights, and could be overthrown if it violated these rights."
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
                  <li><Link href="/practice-tests/unit3" className="text-secondary hover:text-accent">Unit 3 Practice Test</Link></li>
                  <li><Link href="/dbq-practice/unit3" className="text-secondary hover:text-accent">Absolutism DBQ Practice</Link></li>
                  <li><Link href="/short-answer/unit3" className="text-secondary hover:text-accent">Short Answer Questions</Link></li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">External Resources</h3>
                <ul className="space-y-2">
                  <li><a href="https://www.khanacademy.org/humanities/world-history/renaissance-and-reformation/absolutism-constitutionalism/v/french-absolutism-part-1" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Khan Academy: Absolutism and Constitutionalism</a></li>
                  <li><a href="https://www.britannica.com/topic/absolutism-political-system" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Britannica: Absolutism</a></li>
                  <li><a href="https://www.metmuseum.org/toah/hd/baro/hd_baro.htm" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Metropolitan Museum: Baroque Art and Absolutism</a></li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">Video Lectures</h3>
                <ul className="space-y-2">
                  <li><a href="https://www.youtube.com/watch?v=aU_EjlRaxcc" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">AP Euro Unit 3 Review</a></li>
                  <li><a href="https://www.youtube.com/watch?v=X3Yx0IjLaZY" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Louis XIV and Absolutism</a></li>
                  <li><a href="https://www.youtube.com/watch?v=Yk_QH7DGKs4" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">The English Civil War and Glorious Revolution</a></li>
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
              <Link href="/units/2" className="btn btn-primary">
                Previous: Unit 2 - Age of Reformation
              </Link>
              
              <Link href="/units/4" className="btn btn-primary">
                Next: Unit 4 - Scientific, Philosophical, and Political Developments
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
