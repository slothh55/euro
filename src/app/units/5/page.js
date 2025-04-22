'use client';

import { useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Timeline from '../../../components/Timeline';
import Flashcard from '../../../components/Flashcard';
import Quiz from '../../../components/Quiz';
import Link from 'next/link';

export default function Unit5Page() {
  const [activeTab, setActiveTab] = useState('overview');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const revolutionEvents = [
    {
      year: '1776',
      title: 'American Declaration of Independence',
      description: 'The American colonies declared independence from Great Britain.',
      significance: 'Inspired revolutionary movements in Europe and established a republic based on Enlightenment principles.'
    },
    {
      year: '1783',
      title: 'Treaty of Paris',
      description: 'Ended the American Revolutionary War, with Great Britain recognizing American independence.',
      significance: 'Weakened France financially (due to its support of the American Revolution) and contributed to its pre-revolutionary crisis.'
    },
    {
      year: '1789 (May)',
      title: 'Estates-General Convenes',
      description: 'Louis XVI called the Estates-General to address France\'s financial crisis.',
      significance: 'First meeting since 1614; marked the beginning of the French Revolution as the Third Estate demanded greater representation.'
    },
    {
      year: '1789 (June)',
      title: 'Tennis Court Oath',
      description: 'Representatives of the Third Estate vowed not to disband until France had a constitution.',
      significance: 'Transformed the Estates-General into the National Assembly, challenging the king\'s authority.'
    },
    {
      year: '1789 (July 14)',
      title: 'Storming of the Bastille',
      description: 'Parisian crowd attacked the Bastille prison, a symbol of royal authority.',
      significance: 'Symbolized the popular uprising against the monarchy and is now celebrated as French National Day.'
    },
    {
      year: '1789 (August)',
      title: 'Declaration of the Rights of Man and of the Citizen',
      description: 'Document proclaiming the rights of all citizens, including liberty, property, security, and resistance to oppression.',
      significance: 'Established the principles of universal rights and citizenship that would influence democratic movements worldwide.'
    },
    {
      year: '1791',
      title: 'French Constitution of 1791',
      description: 'Established a constitutional monarchy with a legislative assembly.',
      significance: 'Limited the king\'s power and abolished feudal privileges, though maintained a property requirement for voting.'
    },
    {
      year: '1792',
      title: 'France Declares War on Austria',
      description: 'Revolutionary France went to war with Austria, beginning the French Revolutionary Wars.',
      significance: 'Internationalized the revolution and led to increasing radicalization within France.'
    },
    {
      year: '1792 (September)',
      title: 'September Massacres',
      description: 'Mobs killed prisoners in Paris amid fears of counter-revolutionary plots.',
      significance: 'Demonstrated the increasing violence of the revolution and the breakdown of order.'
    },
    {
      year: '1793 (January)',
      title: 'Execution of Louis XVI',
      description: 'The former king was tried for treason and executed by guillotine.',
      significance: 'Marked the definitive end of the French monarchy and shocked European royal houses.'
    },
    {
      year: '1793-1794',
      title: 'Reign of Terror',
      description: 'Period of state-sponsored violence and executions led by Robespierre and the Committee of Public Safety.',
      significance: 'Approximately 17,000 people were officially executed, with many more dying in prison, as the revolution "devoured its children."'
    },
    {
      year: '1794 (July)',
      title: 'Thermidorian Reaction',
      description: 'Robespierre was overthrown and executed, ending the Reign of Terror.',
      significance: 'Began a more moderate phase of the revolution under the Directory.'
    },
    {
      year: '1795',
      title: 'Directory Established',
      description: 'New government with a five-member executive and a bicameral legislature.',
      significance: 'Attempted to stabilize France but was plagued by corruption and reliance on the military.'
    },
    {
      year: '1799',
      title: 'Napoleon\'s Coup d\'État (18 Brumaire)',
      description: 'Napoleon Bonaparte overthrew the Directory and established the Consulate.',
      significance: 'Ended the revolutionary period and began the Napoleonic era.'
    },
    {
      year: '1804',
      title: 'Napoleon Crowned Emperor',
      description: 'Napoleon crowned himself Emperor of the French, with Pope Pius VII present.',
      significance: 'Formalized the transition from republic to empire while maintaining some revolutionary principles.'
    },
    {
      year: '1805',
      title: 'Battle of Trafalgar',
      description: 'British naval victory over the combined French and Spanish fleets.',
      significance: 'Secured British naval supremacy and prevented Napoleon from invading Britain.'
    },
    {
      year: '1805',
      title: 'Battle of Austerlitz',
      description: 'Napoleon\'s greatest military victory, defeating the combined Russian and Austrian armies.',
      significance: 'Led to the dissolution of the Holy Roman Empire and established French dominance in continental Europe.'
    },
    {
      year: '1812',
      title: 'Napoleon\'s Invasion of Russia',
      description: 'Napoleon led the Grande Armée into Russia but was forced to retreat during the winter.',
      significance: 'Catastrophic defeat that severely weakened Napoleon\'s forces and prestige.'
    },
    {
      year: '1813',
      title: 'Battle of Leipzig (Battle of Nations)',
      description: 'Coalition forces defeated Napoleon in the largest battle in Europe before World War I.',
      significance: 'Forced Napoleon to retreat to France and led to the collapse of his empire.'
    },
    {
      year: '1814',
      title: 'First Abdication of Napoleon',
      description: 'Napoleon abdicated and was exiled to Elba.',
      significance: 'Temporarily ended the Napoleonic Wars and restored the Bourbon monarchy under Louis XVIII.'
    },
    {
      year: '1815 (March-June)',
      title: 'Hundred Days',
      description: 'Napoleon escaped from Elba, returned to power in France, but was defeated at Waterloo.',
      significance: 'Final chapter of the Napoleonic era, leading to Napoleon\'s permanent exile to Saint Helena.'
    },
    {
      year: '1814-1815',
      title: 'Congress of Vienna',
      description: 'Conference of European powers to reorganize Europe after the Napoleonic Wars.',
      significance: 'Established a balance of power that largely maintained peace in Europe for nearly 40 years and created a conservative order opposed to revolutionary movements.'
    }
  ];
  
  const quizQuestions = [
    {
      question: 'Which of the following was a major cause of the French Revolution?',
      options: [
        'France\'s decisive victory in the Seven Years\' War',
        'Financial crisis exacerbated by France\'s support of the American Revolution',
        'The successful implementation of physiocratic economic reforms',
        'A military coup led by disaffected officers'
      ],
      correctAnswer: 1,
      explanation: 'France faced a severe financial crisis in the 1780s, made worse by its expensive support of the American Revolution. This crisis, combined with inequitable taxation, poor harvests, and the influence of Enlightenment ideas, forced Louis XVI to call the Estates-General in 1789, setting the stage for the revolution.'
    },
    {
      question: 'The Reign of Terror (1793-1794) was characterized by:',
      options: [
        'Reconciliation with the Catholic Church',
        'Liberal economic policies and free trade',
        'Mass executions of perceived enemies of the revolution',
        'The restoration of the French monarchy'
      ],
      correctAnswer: 2,
      explanation: 'The Reign of Terror was a period of extreme violence led by Robespierre and the Committee of Public Safety. Approximately 17,000 people were officially executed by guillotine, with many more dying in prison. The Terror targeted perceived enemies of the revolution, including nobles, priests, and eventually revolutionary leaders themselves who fell out of favor.'
    },
    {
      question: 'Napoleon Bonaparte\'s Continental System was designed to:',
      options: [
        'Promote free trade throughout Europe',
        'Economically isolate Britain by blocking its trade with continental Europe',
        'Establish a common currency for all European nations',
        'Create a unified European legal code'
      ],
      correctAnswer: 1,
      explanation: 'The Continental System was Napoleon\'s policy of forbidding his allies and conquered territories from trading with Great Britain. Implemented after the British naval victory at Trafalgar made a direct invasion impossible, it aimed to economically isolate Britain and force it to make peace. However, the policy was difficult to enforce and ultimately unsuccessful, damaging continental economies and encouraging smuggling.'
    },
    {
      question: 'Which of the following best describes the Congress of Vienna\'s approach to post-Napoleonic Europe?',
      options: [
        'Promoting nationalist movements and self-determination',
        'Establishing democratic governments throughout Europe',
        'Restoring the pre-revolutionary status quo in all territories',
        'Creating a balance of power among the major European states while restoring legitimate monarchs'
      ],
      correctAnswer: 3,
      explanation: 'The Congress of Vienna (1814-1815), led by Metternich of Austria, sought to create a stable European order after the Napoleonic Wars. Its guiding principles were legitimacy (restoring "legitimate" monarchs), balance of power (preventing any single nation from dominating Europe), and containment of revolutionary and nationalist movements. While it did restore many monarchs, it did not simply return to the pre-revolutionary situation, as it recognized some changes (like keeping the German states consolidated) when necessary for stability.'
    },
    {
      question: 'Romanticism as a cultural movement was characterized by:',
      options: [
        'Emphasis on reason, order, and classical forms',
        'Celebration of emotion, nature, individualism, and national identity',
        'Rejection of religion in favor of scientific materialism',
        'Support for absolute monarchy and traditional social hierarchies'
      ],
      correctAnswer: 1,
      explanation: 'Romanticism emerged in the late 18th century as a reaction against Enlightenment rationalism and the Industrial Revolution. It emphasized emotion over reason, imagination over logic, and nature over urban industrialization. Romantic artists, writers, and musicians celebrated individual genius, national folklore and identity, and sublime natural landscapes. The movement influenced politics through its connection to nationalist movements and its critique of industrial society.'
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Unit Header */}
        <section className="bg-unit5-color text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Unit 5: Conflict, Crisis, and Reaction in the Late 18th Century</h1>
            <p className="text-xl mb-4">c. 1648 to c. 1815</p>
            <p className="text-lg">
              Explore the revolutionary era that transformed Europe, from the American and French Revolutions to the Napoleonic Wars and the conservative reaction at the Congress of Vienna.
            </p>
          </div>
        </section>
        
        {/* Navigation Tabs */}
        <section className="bg-light-gray border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'overview' ? 'bg-white border-t-2 border-unit5-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('overview')}
              >
                Overview
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'key-topics' ? 'bg-white border-t-2 border-unit5-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('key-topics')}
              >
                Key Topics
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'timeline' ? 'bg-white border-t-2 border-unit5-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('timeline')}
              >
                Timeline
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'figures' ? 'bg-white border-t-2 border-unit5-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('figures')}
              >
                Key Figures
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'flashcards' ? 'bg-white border-t-2 border-unit5-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('flashcards')}
              >
                Flashcards
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'quiz' ? 'bg-white border-t-2 border-unit5-color' : 'hover:bg-white'}`}
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
                  The late 18th century was a period of profound transformation in European politics, society, and culture. This era of revolution and reaction began with the American Revolution (1775-1783), which established a republic based on Enlightenment principles of natural rights and popular sovereignty. The success of the American experiment, combined with financial crisis, social inequality, and the spread of Enlightenment ideas, set the stage for the French Revolution (1789-1799), which would radically reshape European politics.
                </p>
                <p className="mb-4">
                  The French Revolution began as a moderate movement for constitutional monarchy but evolved through increasingly radical phases. The execution of King Louis XVI in 1793, the Reign of Terror under Robespierre, and the eventual rise of Napoleon Bonaparte marked key transitions in this revolutionary process. The revolution's principles—liberty, equality, and fraternity—challenged traditional hierarchies and inspired both hope and fear across Europe.
                </p>
                <p className="mb-4">
                  Napoleon's rise to power in 1799 marked the end of the revolutionary period in France but spread revolutionary principles across Europe through his conquests. His Grande Armée redrew the map of Europe, toppling old regimes and implementing the Napoleonic Code, which embodied many revolutionary principles. However, Napoleon's ambitions ultimately led to his downfall, as a coalition of European powers defeated him at Waterloo in 1815 after his disastrous invasion of Russia in 1812.
                </p>
                <p className="mb-4">
                  The Congress of Vienna (1814-1815) sought to restore stability to Europe after the Napoleonic Wars. Led by conservative statesmen like Metternich, the Congress restored legitimate monarchs, created a balance of power among the major states, and established mechanisms to suppress revolutionary movements. This conservative international order would dominate European politics until the revolutions of 1848.
                </p>
                <p className="mb-4">
                  Alongside these political upheavals, the period saw significant economic changes with the early Industrial Revolution, particularly in Britain. New manufacturing methods, urbanization, and changing class structures began to transform European society. The Atlantic economy expanded, with global trade networks and colonial possessions playing increasingly important roles in European prosperity and power.
                </p>
                <p className="mb-4">
                  Culturally, the period witnessed the rise of Romanticism as a reaction against Enlightenment rationalism. Romantic artists, writers, and musicians celebrated emotion, nature, individualism, and national identity. This cultural movement would influence politics through its connection to nationalist movements and its critique of industrial society.
                </p>
                <p className="mb-4">
                  By 1815, Europe had experienced revolutionary changes that, despite conservative restoration efforts, had permanently altered the political landscape. The principles of popular sovereignty, nationalism, and constitutionalism would continue to shape European politics throughout the 19th century, while the economic transformations of the Industrial Revolution would accelerate, creating new social tensions and political movements.
                </p>
                
                <h3 className="text-2xl font-bold mt-8 mb-4">Key Developments</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The American Revolution established a republic based on Enlightenment principles</li>
                  <li>The French Revolution challenged traditional hierarchies and spread revolutionary ideas across Europe</li>
                  <li>The Reign of Terror demonstrated the potential for revolution to descend into violence and dictatorship</li>
                  <li>Napoleon Bonaparte consolidated revolutionary gains while establishing an authoritarian empire</li>
                  <li>The Napoleonic Wars transformed the European political landscape</li>
                  <li>The Congress of Vienna established a conservative international order based on legitimacy and balance of power</li>
                  <li>The early Industrial Revolution began to transform economic and social structures</li>
                  <li>Romanticism emerged as a cultural movement emphasizing emotion, nature, and national identity</li>
                  <li>New political ideologies, including liberalism, conservatism, and early nationalism, took shape</li>
                </ul>
              </div>
            )}
            
            {/* Key Topics Tab */}
            {activeTab === 'key-topics' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Key Topics</h2>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">The French Revolution: Causes and Early Phase</h3>
                  <p className="mb-4">
                    The French Revolution emerged from a complex interplay of long-term structural problems and immediate triggers:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Financial Crisis</strong>: France faced bankruptcy after decades of expensive wars (including the Seven Years' War and support for the American Revolution) and a regressive tax system that exempted the nobility and clergy from many taxes.</li>
                    <li><strong>Social Inequality</strong>: French society was divided into three estates—clergy (First Estate), nobility (Second Estate), and everyone else (Third Estate). Despite comprising 98% of the population, the Third Estate bore most of the tax burden while having limited political rights.</li>
                    <li><strong>Enlightenment Ideas</strong>: The spread of Enlightenment concepts like natural rights, popular sovereignty, and criticism of absolute monarchy created intellectual foundations for revolutionary change.</li>
                    <li><strong>Economic Hardship</strong>: Poor harvests in 1788-1789 led to food shortages and price increases, creating widespread hunger and discontent among the urban and rural poor.</li>
                    <li><strong>Weak Leadership</strong>: Louis XVI was well-intentioned but indecisive, while his wife Marie Antoinette was widely (though often unfairly) blamed for extravagance and foreign influence.</li>
                  </ul>
                  <p className="mb-4">
                    The revolution began when Louis XVI called the Estates-General in May 1789 to address the financial crisis—the first meeting of this representative body since 1614. Events quickly escalated:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Tennis Court Oath</strong> (June 20, 1789): When locked out of their meeting hall, representatives of the Third Estate vowed not to disband until France had a constitution, declaring themselves the National Assembly.</li>
                    <li><strong>Storming of the Bastille</strong> (July 14, 1789): Parisian crowds attacked the Bastille prison, seeking weapons and gunpowder. Though the prison held few inmates, the event became a powerful symbol of popular uprising against royal authority.</li>
                    <li><strong>Great Fear</strong> (Summer 1789): Rural peasants, fearing aristocratic plots and responding to food shortages, attacked manor houses and destroyed feudal records.</li>
                    <li><strong>August Decrees</strong> (August 4-11, 1789): The National Assembly abolished feudal privileges, ending seigneurial dues, exclusive hunting rights, and tax exemptions for the nobility and clergy.</li>
                    <li><strong>Declaration of the Rights of Man and of the Citizen</strong> (August 26, 1789): This foundational document proclaimed universal rights including liberty, property, security, and resistance to oppression, though in practice these rights were not extended to women or enslaved people in French colonies.</li>
                  </ul>
                  <p>
                    The early phase of the revolution (1789-1791) established a constitutional monarchy. The Constitution of 1791 created a Legislative Assembly with limited voting rights (active vs. passive citizens based on property), maintained the king as head of state with a suspensive veto, and reorganized local government. The Civil Constitution of the Clergy nationalized church lands and required priests to swear loyalty to the state, creating significant religious tensions.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">The French Revolution: Radical Phase and Directory</h3>
                  <p className="mb-4">
                    The revolution entered a more radical phase as war and internal divisions created a climate of crisis:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>War with Austria and Prussia</strong> (declared April 1792): Revolutionary France went to war with European powers that threatened to restore Louis XVI's full authority. This internationalized the revolution and heightened fears of counter-revolutionary conspiracies.</li>
                    <li><strong>Storming of the Tuileries</strong> (August 10, 1792): Parisian militants attacked the royal palace, massacring the Swiss Guard and forcing the Legislative Assembly to suspend the king.</li>
                    <li><strong>September Massacres</strong> (September 2-7, 1792): Mobs killed over a thousand prisoners in Paris amid fears of counter-revolutionary plots as Prussian forces advanced toward the capital.</li>
                    <li><strong>National Convention and First Republic</strong> (September 1792): A new assembly abolished the monarchy and established the French Republic. The Convention was dominated by two factions: the more moderate Girondins and the more radical Jacobins.</li>
                    <li><strong>Execution of Louis XVI</strong> (January 21, 1793): After a trial for treason, the former king was guillotined, shocking Europe's monarchies and deepening divisions within France.</li>
                  </ul>
                  <p className="mb-4">
                    The Reign of Terror (1793-1794) emerged from this climate of crisis:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Committee of Public Safety</strong>: Led by Maximilien Robespierre, this executive committee gained extraordinary powers to defend the revolution against internal and external enemies.</li>
                    <li><strong>Law of Suspects</strong> (September 1793): Allowed for the arrest of anyone suspected of counter-revolutionary activities, defined very broadly.</li>
                    <li><strong>Revolutionary Tribunal</strong>: Special court that tried "enemies of the revolution" with limited legal protections, sending thousands to the guillotine.</li>
                    <li><strong>De-Christianization</strong>: Radical campaign against the Catholic Church, including the creation of a new Revolutionary Calendar, conversion of churches to "Temples of Reason," and promotion of the Cult of the Supreme Being.</li>
                    <li><strong>Levée en Masse</strong>: Mass conscription that created the first modern citizen army, mobilizing the entire nation for war.</li>
                  </ul>
                  <p className="mb-4">
                    The Terror claimed approximately 17,000 official victims (with many more dying in prison or without trial), including Marie Antoinette, Girondin leaders, and eventually Robespierre himself. The Thermidorian Reaction (July 1794) ended the Terror when moderates in the Convention, fearing for their own lives, turned against Robespierre and his allies.
                  </p>
                  <p className="mb-4">
                    The Directory period (1795-1799) attempted to stabilize the revolution:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Constitution of Year III</strong> (1795): Created a five-member executive Directory and a bicameral legislature, with high property requirements for voting and office-holding.</li>
                    <li><strong>Ongoing Wars</strong>: France continued fighting the First Coalition, with military success under generals like Napoleon Bonaparte.</li>
                    <li><strong>Economic Problems</strong>: Severe inflation after the collapse of paper currency (assignats), food shortages, and popular unrest.</li>
                    <li><strong>Political Instability</strong>: The Directory faced threats from both royalists and neo-Jacobins, relying increasingly on the military to maintain power.</li>
                  </ul>
                  <p>
                    The Directory's corruption and ineffectiveness created conditions for Napoleon Bonaparte's coup d'état on November 9-10, 1799 (18-19 Brumaire), which established the Consulate and effectively ended the revolutionary period.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Napoleon's Rise, Empire, and Fall</h3>
                  <p className="mb-4">
                    Napoleon Bonaparte's rise from obscure Corsican officer to Emperor of the French represents one of history's most remarkable political ascents:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Early Military Success</strong>: Napoleon gained fame through victories in the Italian Campaign (1796-1797) and his Egyptian Expedition (1798-1799), despite the latter's ultimate failure.</li>
                    <li><strong>Coup of 18 Brumaire</strong> (November 9-10, 1799): With his brother Lucien and political figure Sieyès, Napoleon overthrew the Directory and established the Consulate, with himself as First Consul.</li>
                    <li><strong>Consolidation of Power</strong>: Napoleon gradually increased his authority, becoming Consul for Life in 1802 and Emperor of the French in 1804, when he crowned himself in Notre Dame Cathedral with Pope Pius VII present.</li>
                  </ul>
                  <p className="mb-4">
                    Napoleon's domestic policies balanced revolutionary principles with authoritarian control:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Napoleonic Code</strong> (1804): Comprehensive legal system that preserved revolutionary gains like legal equality and religious tolerance while reinforcing patriarchal authority in family law.</li>
                    <li><strong>Administrative Centralization</strong>: Created a highly centralized state with prefects appointed to administer departments, standardized taxation, and efficient bureaucracy.</li>
                    <li><strong>Concordat with the Catholic Church</strong> (1801): Reconciled the state with the Church while maintaining state control over religious affairs.</li>
                    <li><strong>Educational Reform</strong>: Established lycées (secondary schools) and reformed universities to train civil servants and military officers.</li>
                    <li><strong>Economic Policies</strong>: Stabilized currency, created the Bank of France, and promoted infrastructure development while maintaining continental protectionism.</li>
                  </ul>
                  <p className="mb-4">
                    Napoleon's military campaigns transformed the European landscape:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Grande Armée</strong>: Napoleon's innovative military organization emphasized mobility, flexibility, and meritocratic promotion.</li>
                    <li><strong>Major Victories</strong>: Austerlitz (1805) against Austria and Russia, Jena-Auerstedt (1806) against Prussia, and Wagram (1809) against Austria established French dominance in continental Europe.</li>
                    <li><strong>Territorial Reorganization</strong>: Napoleon dissolved the Holy Roman Empire, created the Confederation of the Rhine, established the Grand Duchy of Warsaw, and placed family members on thrones across Europe.</li>
                    <li><strong>Continental System</strong>: Economic blockade against British trade, intended to force Britain to make peace by damaging its economy.</li>
                  </ul>
                  <p className="mb-4">
                    Napoleon's decline and fall came through a series of strategic errors and growing resistance:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Peninsular War</strong> (1808-1814): Costly conflict in Spain and Portugal that tied down French forces and demonstrated the power of guerrilla warfare and nationalist resistance.</li>
                    <li><strong>Invasion of Russia</strong> (1812): Catastrophic campaign in which the Grande Armée of 600,000 was reduced to around 30,000 survivors due to Russian scorched-earth tactics, harsh winter, and extended supply lines.</li>
                    <li><strong>War of the Sixth Coalition</strong> (1813-1814): Combined forces of Russia, Prussia, Austria, and other powers defeated Napoleon at the Battle of Leipzig (1813) and eventually occupied Paris.</li>
                    <li><strong>First Abdication</strong> (April 1814): Napoleon surrendered and was exiled to Elba, while the Bourbon monarchy was restored under Louis XVIII.</li>
                    <li><strong>Hundred Days</strong> (March-June 1815): Napoleon escaped from Elba, returned to power in France, but was decisively defeated by British and Prussian forces at Waterloo on June 18, 1815.</li>
                    <li><strong>Final Exile</strong>: Napoleon was sent to the remote island of Saint Helena in the South Atlantic, where he died in 1821.</li>
                  </ul>
                  <p>
                    Napoleon's legacy is complex and contradictory. He preserved many revolutionary principles like legal equality and meritocracy while establishing an authoritarian regime. His conquests spread revolutionary ideas and institutions across Europe while also provoking nationalist resistance. His final defeat led to a conservative restoration, but the changes he had implemented—particularly legal and administrative reforms—proved more lasting than the Bourbon monarchy that replaced him.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">The Congress of Vienna and Conservative Order</h3>
                  <p className="mb-4">
                    The Congress of Vienna (1814-1815) was a conference of European powers that sought to establish a stable international order after the Napoleonic Wars:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Key Participants</strong>: Prince Klemens von Metternich (Austria), Viscount Castlereagh (Britain), Tsar Alexander I (Russia), and Prince Talleyrand (France) were the most influential diplomats.</li>
                    <li><strong>Guiding Principles</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li><em>Legitimacy</em>: Restoring "legitimate" monarchs to their thrones, including the Bourbons in France and Spain.</li>
                        <li><em>Balance of Power</em>: Preventing any single nation from dominating Europe by distributing territories to create roughly equal strength among major powers.</li>
                        <li><em>Containment</em>: Suppressing revolutionary and nationalist movements that threatened the established order.</li>
                      </ul>
                    </li>
                    <li><strong>Territorial Settlements</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>France was reduced to its 1792 borders but treated relatively leniently to avoid creating resentment.</li>
                        <li>The Netherlands and Belgium were united in the Kingdom of the Netherlands as a buffer against France.</li>
                        <li>Prussia gained territory in the Rhineland, also serving as a check on France.</li>
                        <li>Austria received northern Italy (Lombardy and Venetia) and presidency of the German Confederation.</li>
                        <li>Russia gained most of Poland as the "Congress Kingdom," with the tsar as king.</li>
                        <li>The German states remained consolidated (reduced from over 300 to 39) in the German Confederation, a loose association replacing the Holy Roman Empire.</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="mb-4">
                    The Congress established a conservative international system to maintain stability:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Concert of Europe</strong>: Regular meetings of the great powers to address international issues and maintain the Vienna settlement.</li>
                    <li><strong>Holy Alliance</strong>: Agreement among Russia, Austria, and Prussia (later joined by France) to uphold Christian principles and suppress revolutionary movements.</li>
                    <li><strong>Quadruple Alliance</strong>: Military alliance among Britain, Russia, Austria, and Prussia against potential French aggression, later including France as the Quintuple Alliance.</li>
                  </ul>
                  <p className="mb-4">
                    Within their own territories, conservative rulers implemented policies to prevent revolution:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Metternich System</strong>: In the Austrian Empire and German Confederation, Metternich established strict censorship, secret police, and suppression of liberal and nationalist movements.</li>
                    <li><strong>Carlsbad Decrees</strong> (1819): Imposed censorship and surveillance in German universities to suppress liberal and nationalist ideas.</li>
                    <li><strong>Restoration France</strong>: Louis XVIII governed as a constitutional monarch under the Charter of 1814, balancing revolutionary changes with traditional authority, but his successor Charles X (1824-1830) attempted to restore more absolute rule.</li>
                  </ul>
                  <p>
                    The Vienna settlement has been criticized for ignoring nationalist aspirations and democratic principles, but it did achieve its primary goal of preventing a general European war for nearly 40 years (until the Crimean War in 1853). The conservative order faced challenges from liberal and nationalist revolutions in 1820-1821 (Spain, Naples, Greece), 1830 (France, Belgium, Poland), and most dramatically in the widespread revolutions of 1848.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">The Rise of Global Markets and Britain's Ascendancy</h3>
                  <p className="mb-4">
                    The late 18th century saw significant changes in global trade patterns and economic systems:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Atlantic Economy</strong>: Trade networks connecting Europe, Africa, and the Americas intensified, with the triangular trade (manufactured goods to Africa, enslaved people to the Americas, colonial products to Europe) playing a central role.</li>
                    <li><strong>Colonial Expansion</strong>: European powers, particularly Britain and France, competed for colonial possessions that provided raw materials and markets.</li>
                    <li><strong>Mercantilism vs. Free Trade</strong>: Traditional mercantilist policies (protecting domestic industries, accumulating precious metals, monopolizing colonial trade) were increasingly challenged by free trade ideas, especially in Britain after Adam Smith's "Wealth of Nations" (1776).</li>
                    <li><strong>Consumer Revolution</strong>: Growing middle classes in Europe consumed more colonial goods like sugar, tea, coffee, and cotton textiles, creating new patterns of consumption and taste.</li>
                  </ul>
                  <p className="mb-4">
                    Britain emerged as the dominant economic power during this period:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Naval Supremacy</strong>: The British Royal Navy established dominance, particularly after the Battle of Trafalgar (1805), protecting trade routes and projecting power globally.</li>
                    <li><strong>Colonial Empire</strong>: Despite losing the Thirteen Colonies in North America, Britain expanded its empire in India (through the East India Company), gained territories from France in the Napoleonic Wars, and established new colonies in Australia and New Zealand.</li>
                    <li><strong>Industrial Revolution</strong>: Britain led the early industrialization process with innovations in textile manufacturing (spinning jenny, water frame, power loom), steam power (Watt's steam engine), and iron production.</li>
                    <li><strong>Financial Power</strong>: London became the world's financial center, with the Bank of England, stock exchange, and insurance markets providing capital and services for global trade.</li>
                    <li><strong>Agricultural Productivity</strong>: Enclosure movement and agricultural improvements increased food production, supporting population growth and urbanization.</li>
                  </ul>
                  <p className="mb-4">
                    These economic developments had significant social and political implications:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Urbanization</strong>: Cities grew rapidly, particularly manufacturing centers like Manchester and Birmingham, creating new urban working classes.</li>
                    <li><strong>Class Formation</strong>: Industrial capitalism created new social divisions between industrial capitalists (factory owners) and industrial workers (proletariat), while the traditional landed aristocracy remained powerful.</li>
                    <li><strong>Working Conditions</strong>: Early factories often featured harsh conditions, long hours, child labor, and dangerous machinery, leading to early labor protests and eventual reform movements.</li>
                    <li><strong>Anti-Slavery Movement</strong>: Economic changes coincided with growing opposition to slavery, with Britain abolishing the slave trade in 1807 and slavery in its colonies in 1833.</li>
                  </ul>
                  <p>
                    By 1815, Britain's economic dominance was unmatched, allowing it to play a leading role in the post-Napoleonic international order while beginning to advocate for free trade rather than traditional mercantilism. The industrial transformation that began in Britain would spread to continental Europe in the coming decades, reshaping societies and creating new political challenges.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Romanticism and Cultural Reactions</h3>
                  <p className="mb-4">
                    Romanticism emerged in the late 18th century as a cultural movement reacting against Enlightenment rationalism and the early Industrial Revolution:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Core Values</strong>: Romantics emphasized emotion over reason, imagination over logic, nature over urban industrialization, and the individual genius over social conventions.</li>
                    <li><strong>Relationship to Revolution</strong>: Many early Romantics initially supported the French Revolution as liberating the human spirit but became disillusioned with its violence and Napoleon's authoritarianism.</li>
                    <li><strong>National Identity</strong>: Romantics celebrated folk cultures, local languages, and historical traditions, contributing to the rise of cultural nationalism.</li>
                    <li><strong>Critique of Industrialization</strong>: Romantic artists and writers often portrayed industry as dehumanizing and destructive to nature and traditional communities.</li>
                  </ul>
                  <p className="mb-4">
                    Romanticism manifested across various art forms:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Literature</strong>: Romantic writers like William Wordsworth, Samuel Taylor Coleridge, and Johann Wolfgang von Goethe explored emotional experiences, celebrated nature, and often featured solitary, introspective protagonists. Gothic novels like Mary Shelley's "Frankenstein" (1818) explored the darker side of human nature and scientific ambition.</li>
                    <li><strong>Visual Arts</strong>: Painters like Caspar David Friedrich, J.M.W. Turner, and Eugène Delacroix emphasized dramatic landscapes, historical and mythological subjects, and emotional intensity over classical restraint.</li>
                    <li><strong>Music</strong>: Composers like Ludwig van Beethoven, Franz Schubert, and later Frédéric Chopin created more emotionally expressive works that broke from classical forms and often incorporated folk melodies.</li>
                    <li><strong>Architecture</strong>: Gothic Revival styles emerged, celebrating medieval aesthetics and craftsmanship in contrast to classical symmetry and industrial production.</li>
                  </ul>
                  <p className="mb-4">
                    Romanticism had significant political implications:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Nationalism</strong>: By celebrating distinct cultural traditions and languages, Romanticism provided cultural foundations for nationalist movements, particularly in Germany, Italy, and Eastern Europe.</li>
                    <li><strong>Conservatism</strong>: Some Romantic thinkers like Edmund Burke emphasized organic community, tradition, and historical continuity against revolutionary change.</li>
                    <li><strong>Liberalism</strong>: Other Romantics championed individual freedom and authenticity against both traditional hierarchies and modern industrial conformity.</li>
                    <li><strong>Social Criticism</strong>: Writers like William Blake and Percy Bysshe Shelley used Romantic sensibilities to critique social injustice and industrial exploitation.</li>
                  </ul>
                  <p>
                    By 1815, Romanticism had become the dominant cultural movement in Europe, influencing not only the arts but also politics, education, and social thought. Its emphasis on national distinctiveness would shape the nationalist movements of the 19th century, while its critique of industrial society would influence later socialist and environmental movements. The tension between Enlightenment rationalism and Romantic emotionalism would continue to shape European intellectual life throughout the 19th century and beyond.
                  </p>
                </div>
              </div>
            )}
            
            {/* Timeline Tab */}
            {activeTab === 'timeline' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Timeline of Key Events</h2>
                <Timeline events={revolutionEvents} />
              </div>
            )}
            
            {/* Key Figures Tab */}
            {activeTab === 'figures' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Key Figures</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Napoleon Bonaparte (1769-1821)</h3>
                    <p className="mb-2"><strong>Role:</strong> French military leader, First Consul (1799-1804), Emperor of the French (1804-1814, 1815)</p>
                    <p className="mb-2"><strong>Contributions:</strong> Consolidated and institutionalized many revolutionary reforms through the Napoleonic Code; reorganized French administration; led successful military campaigns across Europe; spread revolutionary principles through his conquests.</p>
                    <p><strong>Significance:</strong> Transformed the European political landscape through his conquests and reforms. His legacy includes legal codes adopted across Europe, administrative centralization, and the spread of revolutionary principles despite his authoritarian rule.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Maximilien Robespierre (1758-1794)</h3>
                    <p className="mb-2"><strong>Role:</strong> French revolutionary leader, leading figure in the Committee of Public Safety during the Reign of Terror</p>
                    <p className="mb-2"><strong>Contributions:</strong> Advocated for universal male suffrage and abolition of slavery; led the radical Jacobin faction; implemented the Terror to defend the revolution against perceived enemies.</p>
                    <p><strong>Significance:</strong> Embodied the revolution's radical phase and its descent into violence. His commitment to revolutionary virtue and willingness to use terror against "enemies of the revolution" demonstrated how revolutionary idealism could lead to authoritarian practices.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Louis XVI (1754-1793)</h3>
                    <p className="mb-2"><strong>Role:</strong> King of France (1774-1792)</p>
                    <p className="mb-2"><strong>Contributions:</strong> Called the Estates-General in 1789 to address France's financial crisis; attempted to rule as a constitutional monarch after 1789 but secretly sought foreign help to restore his authority.</p>
                    <p><strong>Significance:</strong> His indecisiveness and ambivalence toward constitutional reforms contributed to the revolution's radicalization. His execution in January 1793 marked a decisive break with the monarchical past and shocked Europe's royal houses.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Marie Antoinette (1755-1793)</h3>
                    <p className="mb-2"><strong>Role:</strong> Queen of France (1774-1792), wife of Louis XVI</p>
                    <p className="mb-2"><strong>Contributions:</strong> Became a symbol of royal extravagance and foreign influence; opposed many revolutionary reforms and encouraged Louis XVI's resistance.</p>
                    <p><strong>Significance:</strong> Though many accusations against her were exaggerated or fabricated, her unpopularity reflected genuine tensions about women's political influence, foreign interference, and aristocratic privilege. Her execution in October 1793 symbolized the revolution's rejection of the old regime.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Klemens von Metternich (1773-1859)</h3>
                    <p className="mb-2"><strong>Role:</strong> Austrian Foreign Minister and later Chancellor</p>
                    <p className="mb-2"><strong>Contributions:</strong> Principal architect of the Congress of Vienna; developed the "Metternich System" to suppress liberal and nationalist movements in the German Confederation and Italian states.</p>
                    <p><strong>Significance:</strong> Embodied the conservative reaction against revolutionary and nationalist movements. His diplomatic skill created a relatively stable European order that lasted until the mid-19th century, though it ultimately failed to prevent the rise of nationalism and liberalism.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Toussaint Louverture (1743-1803)</h3>
                    <p className="mb-2"><strong>Role:</strong> Leader of the Haitian Revolution</p>
                    <p className="mb-2"><strong>Contributions:</strong> Led enslaved people in Saint-Domingue (Haiti) in a successful revolt against French colonial rule; abolished slavery; negotiated with European powers; created a constitution for Haiti.</p>
                    <p><strong>Significance:</strong> Demonstrated how revolutionary principles of liberty and equality could be applied to challenge slavery and colonialism. The successful Haitian Revolution established the first independent black republic and influenced debates about slavery throughout the Atlantic world.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Edmund Burke (1729-1797)</h3>
                    <p className="mb-2"><strong>Role:</strong> British statesman and political theorist</p>
                    <p className="mb-2"><strong>Contributions:</strong> Wrote "Reflections on the Revolution in France" (1790), criticizing the revolution's abstract principles and radical break with tradition.</p>
                    <p><strong>Significance:</strong> Articulated key principles of modern conservatism, emphasizing the importance of tradition, gradual change, and practical experience over abstract theories. His critique of the French Revolution influenced conservative thought throughout Europe.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Olympe de Gouges (1748-1793)</h3>
                    <p className="mb-2"><strong>Role:</strong> French playwright, political activist, and feminist</p>
                    <p className="mb-2"><strong>Contributions:</strong> Wrote "Declaration of the Rights of Woman and the Female Citizen" (1791), demanding equal political rights for women; advocated for divorce rights and civil equality.</p>
                    <p><strong>Significance:</strong> Highlighted the revolution's failure to extend rights to women despite its universalist rhetoric. Her execution during the Terror for opposing Robespierre demonstrated the limits of revolutionary inclusion.</p>
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
                    front="What were the main causes of the French Revolution?" 
                    back="Financial crisis exacerbated by France's support of the American Revolution; social inequality with the Third Estate bearing most tax burdens; spread of Enlightenment ideas challenging absolute monarchy; economic hardship from poor harvests in 1788-1789; and weak leadership from Louis XVI."
                  />
                  
                  <Flashcard 
                    front="How did the Reign of Terror (1793-1794) transform the French Revolution?" 
                    back="The Reign of Terror radicalized the revolution through mass executions of perceived enemies (approximately 17,000 official victims); imposed emergency measures like price controls and conscription; attempted to create a new revolutionary culture through de-Christianization; and eventually consumed its own leaders when Robespierre was overthrown and executed in the Thermidorian Reaction."
                  />
                  
                  <Flashcard 
                    front="What were Napoleon Bonaparte's major domestic reforms?" 
                    back="Napoleon's domestic reforms included the Napoleonic Code (comprehensive legal system preserving revolutionary equality while reinforcing patriarchal authority); administrative centralization with prefects governing departments; Concordat with the Catholic Church reconciling state and religion; educational reforms establishing lycées; and economic measures stabilizing currency and developing infrastructure."
                  />
                  
                  <Flashcard 
                    front="What were the guiding principles of the Congress of Vienna (1814-1815)?" 
                    back="The Congress of Vienna was guided by three main principles: legitimacy (restoring 'legitimate' monarchs to their thrones); balance of power (preventing any single nation from dominating Europe); and containment (suppressing revolutionary and nationalist movements that threatened the established order)."
                  />
                  
                  <Flashcard 
                    front="How did Britain achieve economic dominance by 1815?" 
                    back="Britain achieved economic dominance through naval supremacy (especially after Trafalgar); colonial empire providing raw materials and markets; early Industrial Revolution with innovations in textiles, steam power, and iron production; financial power centered in London; and agricultural improvements increasing food production to support population growth and urbanization."
                  />
                  
                  <Flashcard 
                    front="What were the key characteristics of Romanticism as a cultural movement?" 
                    back="Romanticism emphasized emotion over reason; imagination over logic; nature over urban industrialization; individual genius over social conventions; national identity through folk cultures and traditions; and often featured a critique of industrialization as dehumanizing. It manifested across literature, visual arts, music, and architecture."
                  />
                  
                  <Flashcard 
                    front="How did the French Revolution impact women's rights and roles?" 
                    back="The revolution had contradictory effects on women. Women participated actively in revolutionary events (market women's march to Versailles, women's political clubs) and some like Olympe de Gouges advocated for women's rights. However, the revolutionary government ultimately restricted women's political participation, banned women's clubs in 1793, and maintained patriarchal authority in family law, especially under Napoleon's Code."
                  />
                  
                  <Flashcard 
                    front="What was the Continental System and why did it fail?" 
                    back="The Continental System was Napoleon's policy of forbidding his allies and conquered territories from trading with Great Britain, aiming to economically isolate Britain and force it to make peace. It failed because: Britain's naval supremacy allowed it to maintain global trade; smuggling was widespread; continental economies suffered from lost markets and goods; Russia abandoned the system in 1810; and the policy alienated populations in Napoleon's satellite states."
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
                  <li><Link href="/practice-tests/unit5" className="text-secondary hover:text-accent">Unit 5 Practice Test</Link></li>
                  <li><Link href="/dbq-practice/unit5" className="text-secondary hover:text-accent">French Revolution DBQ Practice</Link></li>
                  <li><Link href="/short-answer/unit5" className="text-secondary hover:text-accent">Short Answer Questions</Link></li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">External Resources</h3>
                <ul className="space-y-2">
                  <li><a href="https://www.khanacademy.org/humanities/world-history/1600s-1800s/french-revolution-tutorial/v/french-revolution-part-1" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Khan Academy: French Revolution</a></li>
                  <li><a href="https://www.britannica.com/event/Congress-of-Vienna" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Britannica: Congress of Vienna</a></li>
                  <li><a href="https://www.metmuseum.org/toah/hd/roma/hd_roma.htm" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Metropolitan Museum: Romanticism</a></li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">Video Lectures</h3>
                <ul className="space-y-2">
                  <li><a href="https://www.youtube.com/watch?v=eIP8KOMNNxQ" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">AP European History: Conflict, Crisis, and Reaction</a></li>
                  <li><a href="https://www.youtube.com/watch?v=5fJl_ZX91l0" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">The French Revolution: Crash Course World History</a></li>
                  <li><a href="https://www.youtube.com/watch?v=MrbiSUgZEbg" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Napoleon Bonaparte: Crash Course European History</a></li>
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
              <Link href="/units/4" className="btn btn-primary">
                Previous: Unit 4 - Scientific, Philosophical, and Political Developments
              </Link>
              
              <Link href="/units/6" className="btn btn-primary">
                Next: Unit 6 - Industrialization and Its Effects
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
