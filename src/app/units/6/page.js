'use client';

import { useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Timeline from '../../../components/Timeline';
import Flashcard from '../../../components/Flashcard';
import Quiz from '../../../components/Quiz';
import Link from 'next/link';

export default function Unit6Page() {
  const [activeTab, setActiveTab] = useState('overview');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const industrialEvents = [
    {
      year: '1764',
      title: 'Spinning Jenny Invented',
      description: 'James Hargreaves invented the spinning jenny, which mechanized the spinning process.',
      significance: 'Dramatically increased textile production efficiency, allowing one worker to spin multiple threads simultaneously.'
    },
    {
      year: '1769',
      title: 'Watt\'s Steam Engine Patent',
      description: 'James Watt patented an improved steam engine with a separate condenser.',
      significance: 'Provided a more efficient and versatile power source that would drive the Industrial Revolution.'
    },
    {
      year: '1771',
      title: 'First Water-Powered Cotton Mill',
      description: 'Richard Arkwright established the first water-powered cotton spinning mill at Cromford.',
      significance: 'Created the factory system model that would be replicated throughout Britain and later Europe.'
    },
    {
      year: '1779',
      title: 'Iron Bridge Constructed',
      description: 'The world\'s first major bridge made of cast iron was built over the River Severn in Shropshire, England.',
      significance: 'Demonstrated the potential of iron as a building material for large structures.'
    },
    {
      year: '1785',
      title: 'Power Loom Invented',
      description: 'Edmund Cartwright patented the power loom, mechanizing the weaving process.',
      significance: 'Completed the mechanization of textile production, leading to fully mechanized textile factories.'
    },
    {
      year: '1793',
      title: 'Cotton Gin Invented',
      description: 'Eli Whitney invented the cotton gin in the United States.',
      significance: 'Dramatically increased cotton processing efficiency, boosting demand for raw cotton and indirectly supporting the textile industry.'
    },
    {
      year: '1799',
      title: 'Combination Acts',
      description: 'British Parliament passed laws prohibiting workers from forming trade unions.',
      significance: 'Attempted to prevent working-class organization during early industrialization, though workers continued to organize secretly.'
    },
    {
      year: '1807',
      title: 'First Commercial Steamboat',
      description: 'Robert Fulton\'s Clermont began commercial steamboat service on the Hudson River.',
      significance: 'Revolutionized river transportation, allowing boats to travel upstream efficiently.'
    },
    {
      year: '1811-1816',
      title: 'Luddite Movement',
      description: 'English textile workers destroyed machinery they believed threatened their jobs.',
      significance: 'Represented one of the first organized worker protests against industrialization and mechanization.'
    },
    {
      year: '1819',
      title: 'Peterloo Massacre',
      description: 'British cavalry charged into a crowd of 60,000-80,000 protesters in Manchester, killing 15 and injuring hundreds.',
      significance: 'Highlighted class tensions and the government\'s fear of working-class political organization.'
    },
    {
      year: '1824',
      title: 'Repeal of Combination Acts',
      description: 'British Parliament repealed the Combination Acts, legalizing trade unions.',
      significance: 'Allowed workers to legally organize, leading to the growth of the labor movement.'
    },
    {
      year: '1825',
      title: 'First Passenger Railway',
      description: 'The Stockton and Darlington Railway began operation in England.',
      significance: 'Marked the beginning of the railway age, which would transform transportation and economic development.'
    },
    {
      year: '1830',
      title: 'Liverpool and Manchester Railway',
      description: 'The first railway to rely exclusively on steam power and to connect two major cities opened.',
      significance: 'Demonstrated the commercial viability of railways for passenger and freight transportation.'
    },
    {
      year: '1832',
      title: 'Reform Act',
      description: 'British Parliament passed the Reform Act, extending voting rights to more middle-class men.',
      significance: 'Reflected the growing political influence of the industrial middle class.'
    },
    {
      year: '1833',
      title: 'Factory Act',
      description: 'British Parliament passed legislation limiting child labor in textile factories.',
      significance: 'First significant government intervention to regulate industrial working conditions.'
    },
    {
      year: '1834',
      title: 'Poor Law Amendment Act',
      description: 'British Parliament reformed the poor relief system, establishing workhouses.',
      significance: 'Reflected the new industrial society\'s harsh attitude toward poverty and unemployment.'
    },
    {
      year: '1838-1848',
      title: 'Chartist Movement',
      description: 'Working-class movement in Britain demanding political reforms including universal male suffrage.',
      significance: 'Represented the first large-scale working-class political movement, though it failed to achieve immediate reforms.'
    },
    {
      year: '1844',
      title: 'Railway Boom',
      description: 'Period of rapid railway expansion in Britain, known as "Railway Mania."',
      significance: 'Created a nationwide transportation network and stimulated economic growth and investment.'
    },
    {
      year: '1848',
      title: 'Revolutions Across Europe',
      description: 'Series of political upheavals across Europe, influenced partly by economic hardship and industrial change.',
      significance: 'Demonstrated the political impact of industrialization and its social consequences.'
    },
    {
      year: '1851',
      title: 'Great Exhibition',
      description: 'First World\'s Fair held in the Crystal Palace in London, showcasing industrial and technological innovations.',
      significance: 'Celebrated Britain\'s industrial supremacy and the achievements of the Industrial Revolution.'
    },
    {
      year: '1856',
      title: 'Bessemer Process',
      description: 'Henry Bessemer patented a process for mass-producing steel inexpensively.',
      significance: 'Enabled the widespread use of steel in construction, machinery, and transportation, launching the Second Industrial Revolution.'
    },
    {
      year: '1867',
      title: 'Second Reform Act',
      description: 'British Parliament further extended voting rights to urban working-class men.',
      significance: 'Reflected the growing political influence of the urban working class.'
    },
    {
      year: '1871',
      title: 'Trade Union Act',
      description: 'British Parliament fully legalized trade unions.',
      significance: 'Recognized the legitimacy of organized labor in industrial society.'
    },
    {
      year: '1875',
      title: 'Public Health Act',
      description: 'Comprehensive legislation in Britain addressing urban sanitation and public health.',
      significance: 'Attempted to address the public health problems created by rapid urbanization.'
    },
    {
      year: '1879',
      title: 'Edison\'s Light Bulb',
      description: 'Thomas Edison demonstrated the first practical incandescent light bulb.',
      significance: 'Led to widespread electric lighting in factories, homes, and cities, extending productive hours.'
    },
    {
      year: '1884',
      title: 'Third Reform Act',
      description: 'British Parliament extended voting rights to rural working-class men.',
      significance: 'Nearly established universal male suffrage, reflecting the political integration of the working class.'
    },
    {
      year: '1889',
      title: 'London Dock Strike',
      description: 'Successful strike by London dock workers for better pay and conditions.',
      significance: 'Demonstrated the growing power of organized unskilled workers in the late 19th century.'
    },
    {
      year: '1891',
      title: 'Rerum Novarum',
      description: 'Pope Leo XIII issued an encyclical addressing the condition of the working class.',
      significance: 'Established Catholic social teaching on industrial capitalism, criticizing both socialism and unrestrained capitalism.'
    },
    {
      year: '1900',
      title: 'Quantum Theory',
      description: 'Max Planck introduced quantum theory, revolutionizing physics.',
      significance: 'Represented the scientific advances of the Second Industrial Revolution, which would lead to new technologies in the 20th century.'
    }
  ];
  
  const quizQuestions = [
    {
      question: 'Which of the following was NOT a key factor in Britain becoming the first country to industrialize?',
      options: [
        'Abundant coal and iron resources',
        'Strong naval power and colonial markets',
        'Political stability and property rights',
        'State-directed economic planning'
      ],
      correctAnswer: 3,
      explanation: 'Unlike later industrializing countries like Germany and Japan, Britain\'s industrialization was not directed by the state but emerged from private enterprise in a context of relatively free markets. Britain\'s early industrialization was facilitated by its abundant natural resources (especially coal and iron), strong naval power that protected trade routes and colonial markets, political stability following the Glorious Revolution, and strong property rights that encouraged investment.'
    },
    {
      question: 'The "putting-out" system in pre-industrial Europe was characterized by:',
      options: [
        'Factory production with centralized machinery',
        'Merchants providing raw materials to rural households for processing',
        'Guilds controlling urban manufacturing through strict regulations',
        'Government-operated manufacturing facilities'
      ],
      correctAnswer: 1,
      explanation: 'The putting-out system (also called the domestic or cottage industry system) involved merchants providing raw materials to rural households, who would process them into finished goods using hand tools in their homes. The merchant would later collect the finished products and pay the workers. This system was a transitional form between guild-based urban manufacturing and the factory system. It allowed for greater production flexibility and avoided guild regulations, but was eventually replaced by factory production as mechanization advanced.'
    },
    {
      question: 'Which technological innovation is correctly paired with its impact?',
      options: [
        'Spinning jenny – revolutionized iron production',
        'Bessemer process – improved textile manufacturing',
        'Steam engine – primarily used for agricultural improvements',
        'Power loom – mechanized weaving in textile production'
      ],
      correctAnswer: 3,
      explanation: 'The power loom, invented by Edmund Cartwright in 1785, mechanized the weaving process in textile production. The spinning jenny (invented by James Hargreaves in 1764) revolutionized spinning, not iron production. The Bessemer process (1856) made steel production more efficient, not textile manufacturing. The steam engine had many applications including mining, factory power, and transportation, but was not primarily used for agricultural improvements.'
    },
    {
      question: 'The Chartist movement in Britain advocated for:',
      options: [
        'The destruction of industrial machinery',
        'Political reforms including universal male suffrage',
        'The establishment of socialist communes',
        'Protective tariffs against foreign imports'
      ],
      correctAnswer: 1,
      explanation: 'The Chartist movement (1838-1848) was a working-class movement that advocated for political reforms outlined in the People\'s Charter, including universal male suffrage, secret ballots, equal electoral districts, annual parliaments, payment for members of Parliament, and abolition of property qualifications for MPs. While primarily political, Chartism was driven by working-class discontent with industrial conditions and limited political representation. The movement for destroying machinery was Luddism, not Chartism.'
    },
    {
      question: 'Which statement best describes the Second Industrial Revolution of the late 19th century?',
      options: [
        'It was characterized by a return to artisanal production methods',
        'It focused primarily on agricultural mechanization',
        'It involved new technologies like electricity, chemicals, and steel',
        'It was limited to Eastern Europe and Russia'
      ],
      correctAnswer: 2,
      explanation: 'The Second Industrial Revolution (approximately 1870-1914) was characterized by new technologies including electricity, chemicals, steel (via the Bessemer process), and internal combustion engines. While the First Industrial Revolution centered on textiles, coal, and steam power, the Second Industrial Revolution involved more complex technologies, scientific research, and corporate organization. It was particularly strong in Germany and the United States, not limited to Eastern Europe and Russia, and represented an intensification of industrial production rather than a return to artisanal methods.'
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Unit Header */}
        <section className="bg-unit6-color text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Unit 6: Industrialization and Its Effects</h1>
            <p className="text-xl mb-4">c. 1815 to c. 1914</p>
            <p className="text-lg">
              Explore the transformative impact of industrialization on European society, economy, politics, and culture during the 19th century.
            </p>
          </div>
        </section>
        
        {/* Navigation Tabs */}
        <section className="bg-light-gray border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'overview' ? 'bg-white border-t-2 border-unit6-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('overview')}
              >
                Overview
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'key-topics' ? 'bg-white border-t-2 border-unit6-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('key-topics')}
              >
                Key Topics
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'timeline' ? 'bg-white border-t-2 border-unit6-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('timeline')}
              >
                Timeline
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'figures' ? 'bg-white border-t-2 border-unit6-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('figures')}
              >
                Key Figures
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'flashcards' ? 'bg-white border-t-2 border-unit6-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('flashcards')}
              >
                Flashcards
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'quiz' ? 'bg-white border-t-2 border-unit6-color' : 'hover:bg-white'}`}
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
                  The Industrial Revolution represents one of the most profound transformations in human history, fundamentally altering how goods were produced, how people lived and worked, and how societies were organized. Beginning in Britain in the late 18th century and spreading across Europe during the 19th century, industrialization replaced human and animal power with machine power, shifted production from homes to factories, and created new social classes and political movements.
                </p>
                <p className="mb-4">
                  The first phase of industrialization (c. 1760-1850) centered on textiles, coal, iron, and steam power. Innovations like the spinning jenny, water frame, power loom, and improved steam engine mechanized textile production and provided new sources of energy. Britain led this transformation due to its abundant coal and iron resources, stable political system, naval supremacy, colonial markets, and agricultural productivity. The factory system emerged, concentrating workers in large facilities with powered machinery, replacing the earlier "putting-out" system of home-based production.
                </p>
                <p className="mb-4">
                  Industrialization spread unevenly across Europe. Belgium, with its coal resources and proximity to Britain, industrialized early. France developed a dual economy with modern industrial sectors alongside traditional handicrafts. German industrialization accelerated after political unification in 1871, quickly becoming a leader in chemicals, electricity, and steel. Southern and Eastern Europe industrialized later and more partially, often dependent on foreign investment and technology.
                </p>
                <p className="mb-4">
                  The second phase of industrialization (c. 1870-1914) introduced new technologies and industries. Steel production (via the Bessemer process), electrical power, chemicals, and internal combustion engines created new industrial sectors. Scientific research became more directly linked to industrial applications. Corporations grew larger, with more complex management structures and international operations. Germany and the United States emerged as industrial powers challenging British dominance.
                </p>
                <p className="mb-4">
                  Industrialization dramatically transformed social structures and living conditions. Rapid urbanization created overcrowded cities with poor sanitation and housing. New social classes emerged: the industrial bourgeoisie (factory owners and entrepreneurs) and the industrial proletariat (factory workers). Working conditions in early factories were often harsh, with long hours, dangerous machinery, low wages, and child labor. Gradually, workers organized into trade unions and political movements demanding better conditions and political rights.
                </p>
                <p className="mb-4">
                  The political impact of industrialization was equally profound. The middle class gained economic power and demanded political representation, leading to reform movements and revolutions. Working-class movements like Chartism in Britain and socialist parties across Europe advocated for universal suffrage and labor protections. Governments gradually abandoned laissez-faire policies in favor of social legislation addressing working conditions, public health, education, and social insurance.
                </p>
                <p className="mb-4">
                  Intellectually, industrialization inspired new ideologies and cultural movements. Classical liberalism advocated free markets and limited government. Socialism, from utopian to Marxist varieties, critiqued industrial capitalism and proposed alternatives. Romanticism emerged partly as a reaction against industrialization, celebrating nature, emotion, and tradition against mechanization and rationalization. Later, realist literature and art depicted the harsh realities of industrial life.
                </p>
                <p className="mb-4">
                  By 1914, industrialization had transformed Europe from a predominantly agricultural society to an industrial powerhouse. This transformation brought unprecedented material prosperity but also new forms of inequality and social tension. The technologies, economic systems, social structures, and ideologies that emerged during this period continue to shape our world today.
                </p>
                
                <h3 className="text-2xl font-bold mt-8 mb-4">Key Developments</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Technological innovations in textiles, steam power, iron, and later steel, electricity, and chemicals</li>
                  <li>Shift from home-based to factory production with powered machinery</li>
                  <li>Development of new transportation systems: canals, railways, and steamships</li>
                  <li>Rapid urbanization and the growth of industrial cities</li>
                  <li>Emergence of new social classes: industrial bourgeoisie and proletariat</li>
                  <li>Formation of trade unions and working-class political movements</li>
                  <li>Rise of new ideologies: classical liberalism, socialism, and Marxism</li>
                  <li>Gradual government intervention in the economy and social welfare</li>
                  <li>Environmental transformation through resource extraction and pollution</li>
                  <li>Cultural responses including Romanticism, Realism, and scientific positivism</li>
                </ul>
              </div>
            )}
            
            {/* Key Topics Tab */}
            {activeTab === 'key-topics' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Key Topics</h2>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Origins and First Phase of Industrialization</h3>
                  <p className="mb-4">
                    The Industrial Revolution began in Britain in the late 18th century due to a unique combination of factors:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Agricultural Revolution</strong>: Innovations like crop rotation, selective breeding, and enclosure increased food production, freeing labor for industry and feeding a growing population.</li>
                    <li><strong>Natural Resources</strong>: Britain had abundant coal and iron ore deposits, often located near each other, providing essential raw materials.</li>
                    <li><strong>Capital Accumulation</strong>: Profits from trade, including colonial and slave trade, provided investment capital for industrial ventures.</li>
                    <li><strong>Political Stability</strong>: After the Glorious Revolution (1688), Britain enjoyed relative political stability and strong property rights, encouraging investment.</li>
                    <li><strong>Colonial Markets</strong>: Britain's colonial empire provided both raw materials (like cotton) and markets for manufactured goods.</li>
                    <li><strong>Naval Supremacy</strong>: The Royal Navy protected trade routes and secured access to global markets and resources.</li>
                    <li><strong>Scientific Culture</strong>: The Scientific Revolution and Enlightenment fostered practical experimentation and innovation.</li>
                    <li><strong>Labor Supply</strong>: Population growth and agricultural displacement created a workforce for factories.</li>
                  </ul>
                  <p className="mb-4">
                    The textile industry led the first phase of industrialization with several key innovations:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Spinning Jenny</strong> (1764): James Hargreaves's invention allowed one worker to spin multiple threads simultaneously.</li>
                    <li><strong>Water Frame</strong> (1769): Richard Arkwright's water-powered spinning machine produced stronger thread and required factory settings.</li>
                    <li><strong>Spinning Mule</strong> (1779): Samuel Crompton combined features of the jenny and water frame, producing finer, stronger thread.</li>
                    <li><strong>Power Loom</strong> (1785): Edmund Cartwright's invention mechanized weaving, completing the mechanization of textile production.</li>
                    <li><strong>Cotton Gin</strong> (1793): Eli Whitney's invention in America dramatically increased cotton processing efficiency, boosting raw material supply.</li>
                  </ul>
                  <p className="mb-4">
                    Steam power transformed industry and transportation:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Newcomen Engine</strong> (1712): Early steam engine used primarily to pump water from mines.</li>
                    <li><strong>Watt's Steam Engine</strong> (1769): James Watt's separate condenser greatly improved efficiency, making steam power practical for various applications.</li>
                    <li><strong>Steamboats</strong>: Robert Fulton's Clermont (1807) demonstrated commercial viability of steam-powered water transportation.</li>
                    <li><strong>Railways</strong>: The Stockton and Darlington Railway (1825) and Liverpool and Manchester Railway (1830) pioneered steam-powered rail transportation.</li>
                  </ul>
                  <p className="mb-4">
                    Iron production advanced through several innovations:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Coke Smelting</strong>: Abraham Darby's use of coke (processed coal) instead of charcoal for smelting iron (1709) increased production capacity.</li>
                    <li><strong>Puddling Process</strong>: Henry Cort's method (1784) for producing wrought iron more efficiently.</li>
                    <li><strong>Iron Bridge</strong> (1779): The world's first major iron bridge demonstrated the material's potential for construction.</li>
                  </ul>
                  <p>
                    These technological innovations transformed production systems. The factory system replaced home-based production, concentrating workers and powered machinery in central locations. This created economies of scale, increased productivity, and allowed greater supervision of workers. The division of labor, where workers performed specialized tasks rather than creating entire products, further increased efficiency but deskilled many workers. Early factories were often harsh environments with long hours (12-16 hours daily), dangerous conditions, low wages, and child labor.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">The Spread of Industrialization Across Europe</h3>
                  <p className="mb-4">
                    Industrialization spread unevenly across Europe, creating distinct patterns of development:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Belgium</strong> became the first continental European country to industrialize, benefiting from:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Rich coal deposits in the Sambre-Meuse valley</li>
                        <li>Proximity to Britain and exposure to British technology</li>
                        <li>Strong textile tradition in cities like Ghent</li>
                        <li>Government support for infrastructure development after independence in 1830</li>
                      </ul>
                    </li>
                    <li><strong>France</strong> developed a dual economy with both modern industry and traditional production:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Textile centers in Alsace, Normandy, and around Lyon</li>
                        <li>Coal mining in the north and central regions</li>
                        <li>Slower industrialization due to scattered resources and political instability</li>
                        <li>Continued strength in luxury goods and artisanal production</li>
                        <li>Greater state involvement through tariffs and infrastructure projects</li>
                      </ul>
                    </li>
                    <li><strong>German states</strong> industrialized later but rapidly, especially after unification in 1871:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Initial development in Prussia's Ruhr Valley and Silesia</li>
                        <li>Zollverein (customs union) created a larger market after 1834</li>
                        <li>Strong emphasis on technical education and applied science</li>
                        <li>Leading role in the Second Industrial Revolution (chemicals, electricity)</li>
                        <li>Significant state support for industry and infrastructure</li>
                        <li>Rapid growth of industrial cities like Essen and Dortmund</li>
                      </ul>
                    </li>
                    <li><strong>Habsburg Empire</strong> (Austria-Hungary) experienced uneven industrialization:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Industrial development concentrated in Bohemia and Lower Austria</li>
                        <li>Textile industry in Bohemia and machinery in Vienna</li>
                        <li>Hungary remained predominantly agricultural</li>
                        <li>Ethnic diversity and political conservatism complicated development</li>
                      </ul>
                    </li>
                    <li><strong>Italy</strong> industrialized primarily in the northern regions after unification in 1861:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Industrial triangle of Milan, Turin, and Genoa</li>
                        <li>Limited coal resources hindered development</li>
                        <li>Hydroelectric power later compensated for coal shortage</li>
                        <li>Sharp north-south divide in industrial development</li>
                      </ul>
                    </li>
                    <li><strong>Russia</strong> began significant industrialization only in the late 19th century:
                      <ul className="list-disc pl-6 mt-2">
                        <li>State-directed industrialization under Finance Ministers Vyshnegradsky and Witte</li>
                        <li>Heavy reliance on foreign investment and technology</li>
                        <li>Focus on railways, military industries, and heavy industry</li>
                        <li>Industrial centers in St. Petersburg, Moscow, and Ukraine</li>
                        <li>Persistence of serfdom until 1861 delayed industrial labor market development</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="mb-4">
                    Several factors influenced the timing and pace of industrialization across Europe:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Natural Resources</strong>: Countries with coal and iron deposits (Britain, Belgium, Germany) industrialized earlier and more extensively.</li>
                    <li><strong>Political Systems</strong>: Political stability and unified markets facilitated industrialization, while fragmentation and absolutism often hindered it.</li>
                    <li><strong>Transportation Networks</strong>: Development of canals, roads, and especially railways was crucial for industrial growth.</li>
                    <li><strong>Banking and Finance</strong>: Later industrializers developed more sophisticated banking systems to mobilize capital (e.g., French investment banks, German universal banks).</li>
                    <li><strong>State Role</strong>: Early industrializers like Britain relied more on private enterprise, while later industrializers like Germany and Russia saw greater state involvement.</li>
                    <li><strong>Education Systems</strong>: Technical education and scientific research became increasingly important, especially for the Second Industrial Revolution.</li>
                  </ul>
                  <p>
                    By 1900, industrialization had created a divided Europe: the industrialized northwest (Britain, Belgium, Germany, northern France), partially industrialized regions (southern France, northern Italy, western Austria-Hungary), and predominantly agricultural areas (southern Italy, Spain, Portugal, Balkans, Russia except for industrial centers). These divisions influenced economic power, military strength, and international relations leading up to World War I.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Second Industrial Revolution and Technological Advances</h3>
                  <p className="mb-4">
                    The Second Industrial Revolution (c. 1870-1914) introduced new technologies, industries, and organizational forms:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Steel Production</strong>: The Bessemer process (1856) and open-hearth furnace (1865) made steel production faster and cheaper, enabling its widespread use in:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Railways (stronger rails and locomotives)</li>
                        <li>Construction (skyscrapers, bridges, larger factories)</li>
                        <li>Shipbuilding (larger, more durable vessels)</li>
                        <li>Machinery (more precise, durable tools and equipment)</li>
                      </ul>
                    </li>
                    <li><strong>Electrical Power</strong>: The development of practical generators, motors, and distribution systems revolutionized industry and daily life:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Thomas Edison's incandescent light bulb (1879) transformed lighting</li>
                        <li>Electric motors allowed more flexible factory layouts than steam engines</li>
                        <li>Electric streetcars/trams improved urban transportation</li>
                        <li>Hydroelectric power reduced dependence on coal in some regions</li>
                        <li>Companies like Siemens (Germany), AEG (Germany), and General Electric (US) became industrial giants</li>
                      </ul>
                    </li>
                    <li><strong>Chemical Industry</strong>: Scientific advances led to new products and processes:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Synthetic dyes replaced natural colorants (starting with mauveine, 1856)</li>
                        <li>Artificial fertilizers (superphosphates, nitrogen fixation) increased agricultural productivity</li>
                        <li>New pharmaceuticals and medicines improved health outcomes</li>
                        <li>Synthetic materials like celluloid and later bakelite (first synthetic plastic, 1907)</li>
                        <li>Germany became the world leader in chemicals through companies like BASF, Bayer, and Hoechst</li>
                      </ul>
                    </li>
                    <li><strong>Internal Combustion Engine</strong>: Developed in the late 19th century, it transformed transportation:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Gottlieb Daimler and Karl Benz pioneered automobile development in Germany</li>
                        <li>Early automobiles were luxury items before mass production techniques</li>
                        <li>Internal combustion engines also powered early aircraft</li>
                      </ul>
                    </li>
                    <li><strong>Communications</strong>: New technologies connected the world:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Telegraph networks expanded globally, with undersea cables connecting continents</li>
                        <li>Telephone (patented by Bell in 1876) enabled voice communication</li>
                        <li>Wireless telegraphy (radio) developed by Marconi in the 1890s</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="mb-4">
                    The relationship between science and industry changed significantly during this period:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Research Laboratories</strong>: Companies established industrial research labs to systematically develop new products and processes.</li>
                    <li><strong>Scientific Education</strong>: Technical universities and polytechnics trained engineers and scientists for industry, particularly in Germany.</li>
                    <li><strong>Applied Science</strong>: Discoveries in physics, chemistry, and biology were rapidly applied to industrial problems.</li>
                    <li><strong>Patents and Intellectual Property</strong>: Legal frameworks for protecting and commercializing innovations developed.</li>
                  </ul>
                  <p className="mb-4">
                    Business organization also evolved to manage larger, more complex enterprises:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Limited Liability Companies</strong>: Legal structures that limited investor risk and facilitated capital raising became common.</li>
                    <li><strong>Vertical Integration</strong>: Companies controlled multiple stages of production from raw materials to finished products.</li>
                    <li><strong>Horizontal Integration</strong>: Mergers and acquisitions created larger firms with greater market share.</li>
                    <li><strong>Cartels and Trusts</strong>: Especially in Germany, firms formed agreements to control prices and markets.</li>
                    <li><strong>Scientific Management</strong>: Frederick Taylor's principles aimed to increase efficiency through time-motion studies and standardized work processes.</li>
                    <li><strong>Professional Management</strong>: Specialized managers with formal training replaced owner-operators in larger firms.</li>
                  </ul>
                  <p>
                    The Second Industrial Revolution shifted the balance of industrial power. Germany and the United States emerged as industrial leaders, challenging British dominance. Germany excelled in chemicals, electrical equipment, and precision engineering, while Britain maintained strength in textiles, shipbuilding, and finance. This changing economic balance contributed to international tensions leading up to World War I.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Social Effects of Industrialization</h3>
                  <p className="mb-4">
                    Industrialization profoundly transformed European society, creating new social classes and living patterns:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Urbanization</strong>: One of the most visible effects was the rapid growth of cities:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Britain's urban population increased from about 20% in 1800 to over 70% by 1900</li>
                        <li>Industrial cities like Manchester, Birmingham, Essen, and Lille grew explosively</li>
                        <li>Early industrial cities faced severe problems: overcrowding, poor housing, inadequate sanitation, pollution</li>
                        <li>High mortality rates from diseases like cholera, typhoid, and tuberculosis</li>
                        <li>Later improvements included water supply systems, sewers, building regulations, and public health measures</li>
                      </ul>
                    </li>
                    <li><strong>New Social Classes</strong>: Industrial capitalism created a new social structure:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Industrial bourgeoisie (factory owners, entrepreneurs, managers) gained economic power</li>
                        <li>Industrial proletariat (factory workers) formed a new working class distinct from traditional artisans</li>
                        <li>Middle class expanded to include professionals, civil servants, clerks, and shopkeepers</li>
                        <li>Traditional elites (aristocracy, landowners) gradually accommodated to industrial society</li>
                      </ul>
                    </li>
                    <li><strong>Working Conditions</strong>: Early industrial work was often harsh:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Long hours (12-16 hour days, six-day weeks) in early factories</li>
                        <li>Dangerous machinery and poor safety conditions</li>
                        <li>Child labor was common, with children as young as 5 working in factories and mines</li>
                        <li>Low wages, especially for women and children</li>
                        <li>Strict discipline and supervision, with fines for infractions</li>
                        <li>Gradual improvements came through legislation and union activity</li>
                      </ul>
                    </li>
                    <li><strong>Family and Gender Roles</strong>: Industrialization altered family structures and gender relations:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Separation of home and workplace changed family dynamics</li>
                        <li>Women's work shifted from home production to factory labor, domestic service, or maintaining the household</li>
                        <li>Middle-class ideal of separate spheres emerged: men in public/work sphere, women in private/domestic sphere</li>
                        <li>Working-class families often required multiple wage earners, including women and children</li>
                        <li>Gradual decline in family size as children became economic costs rather than assets</li>
                      </ul>
                    </li>
                    <li><strong>Standard of Living Debate</strong>: Historians debate whether industrialization improved living standards:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Optimistic view: Real wages eventually rose, consumer goods became more available, life expectancy increased</li>
                        <li>Pessimistic view: Initial decades saw deteriorating conditions, increased work intensity, loss of independence</li>
                        <li>Consensus: Early industrialization (c. 1780-1850) brought mixed or negative effects for many workers; later periods saw more widespread benefits</li>
                        <li>Regional variations: Conditions improved earlier in Britain than in later industrializing countries</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="mb-4">
                    Workers responded to industrial conditions by organizing collectively:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Early Resistance</strong>: Luddites (1811-1816) destroyed machinery they believed threatened their livelihoods.</li>
                    <li><strong>Trade Unions</strong>: Initially illegal (Combination Acts in Britain, 1799-1824), unions gradually gained legal recognition:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Craft unions organized skilled workers by trade</li>
                        <li>Later, industrial unions attempted to organize all workers in an industry regardless of skill</li>
                        <li>Tactics included strikes, collective bargaining, and mutual aid</li>
                      </ul>
                    </li>
                    <li><strong>Political Movements</strong>: Workers organized to gain political rights and influence:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Chartism in Britain (1838-1848) demanded political reforms including universal male suffrage</li>
                        <li>Socialist parties emerged across Europe, especially after 1870</li>
                        <li>Trade union and socialist movements often overlapped but sometimes had different priorities</li>
                      </ul>
                    </li>
                    <li><strong>Mutual Aid</strong>: Workers created self-help organizations:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Friendly societies provided sickness and funeral benefits</li>
                        <li>Cooperative societies offered affordable goods and profit-sharing</li>
                        <li>Educational associations promoted worker literacy and knowledge</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    By the early 20th century, industrial society had matured. Working conditions had improved through legislation and union activity. Public health measures had addressed the worst urban problems. Mass production had made consumer goods more widely available. However, class divisions remained pronounced, and working-class political movements continued to challenge the industrial capitalist system.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Political and Intellectual Responses to Industrialization</h3>
                  <p className="mb-4">
                    Industrialization inspired new political ideologies and movements:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Classical Liberalism</strong>: Advocated free markets and limited government intervention:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Adam Smith's "Wealth of Nations" (1776) argued for free markets guided by the "invisible hand"</li>
                        <li>David Ricardo developed theories of comparative advantage and labor value</li>
                        <li>Laissez-faire principles opposed government regulation of industry</li>
                        <li>Manchester School (Richard Cobden, John Bright) advocated free trade</li>
                        <li>Political reforms sought to extend voting rights to the middle class (e.g., British Reform Act of 1832)</li>
                      </ul>
                    </li>
                    <li><strong>Utopian Socialism</strong>: Early socialist thinkers proposed alternative industrial communities:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Robert Owen established New Lanark in Scotland as a model industrial community</li>
                        <li>Charles Fourier designed phalanstères (communal living and working spaces)</li>
                        <li>Henri de Saint-Simon advocated industrial planning by scientists and engineers</li>
                        <li>These thinkers criticized industrial capitalism but proposed peaceful, experimental alternatives</li>
                      </ul>
                    </li>
                    <li><strong>Marxism</strong>: Karl Marx and Friedrich Engels developed a systematic critique of capitalism:
                      <ul className="list-disc pl-6 mt-2">
                        <li>"Communist Manifesto" (1848) argued that class struggle drives history</li>
                        <li>"Das Kapital" (1867) analyzed capitalism's internal contradictions</li>
                        <li>Predicted that capitalism would produce its own destruction through crises and class conflict</li>
                        <li>Advocated proletarian revolution and collective ownership of the means of production</li>
                        <li>Influenced socialist parties and labor movements across Europe</li>
                      </ul>
                    </li>
                    <li><strong>Anarchism</strong>: Rejected both capitalism and state authority:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Pierre-Joseph Proudhon criticized private property ("Property is theft")</li>
                        <li>Mikhail Bakunin advocated immediate revolution and opposed Marx's emphasis on the state</li>
                        <li>Peter Kropotkin proposed mutual aid and voluntary cooperation</li>
                        <li>Influenced radical labor movements, especially in Southern Europe</li>
                      </ul>
                    </li>
                    <li><strong>Conservatism</strong>: Traditional conservatives criticized industrialization's social disruption:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Edmund Burke emphasized the importance of tradition and organic social development</li>
                        <li>Thomas Carlyle condemned the "cash nexus" replacing traditional social bonds</li>
                        <li>Some conservatives supported paternalistic reforms to address industrial problems</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="mb-4">
                    Governments gradually abandoned laissez-faire principles in favor of regulation and social legislation:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Factory Acts</strong>: Britain pioneered industrial regulation:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Factory Act of 1833 limited child labor in textile factories</li>
                        <li>Mines Act of 1842 prohibited underground work for women and children under 10</li>
                        <li>Ten Hours Act of 1847 limited working hours for women and young persons</li>
                        <li>Factory Act of 1850 established the "normal day" (6am-6pm) with 1.5 hours for meals</li>
                      </ul>
                    </li>
                    <li><strong>Public Health</strong>: Governments addressed urban health problems:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Public Health Act of 1848 in Britain established local boards of health</li>
                        <li>Sanitary reforms improved water supply and sewage systems</li>
                        <li>Housing regulations addressed overcrowding and building standards</li>
                      </ul>
                    </li>
                    <li><strong>Education</strong>: Mass education systems developed:
                      <ul className="list-disc pl-6 mt-2">
                        <li>France established universal primary education under the Ferry Laws (1880s)</li>
                        <li>Britain's Education Act of 1870 created board schools</li>
                        <li>Compulsory education laws spread across Europe</li>
                        <li>Technical education expanded to meet industrial needs</li>
                      </ul>
                    </li>
                    <li><strong>Social Insurance</strong>: Germany led in developing social welfare systems:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Bismarck introduced health insurance (1883), accident insurance (1884), and old-age pensions (1889)</li>
                        <li>Other countries gradually adopted similar programs</li>
                        <li>Aimed to reduce working-class support for socialism while addressing genuine needs</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="mb-4">
                    Cultural and intellectual movements responded to industrialization in various ways:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Romanticism</strong>: Reacted against industrial rationalization and mechanization:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Celebrated nature, emotion, and tradition against industrial modernity</li>
                        <li>William Wordsworth and other poets criticized industrial landscapes</li>
                        <li>John Ruskin and William Morris advocated traditional craftsmanship</li>
                      </ul>
                    </li>
                    <li><strong>Realism</strong>: Depicted industrial society's harsh realities:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Charles Dickens portrayed factory towns and urban poverty in novels like "Hard Times"</li>
                        <li>Émile Zola's "Germinal" depicted mining communities and labor struggles</li>
                        <li>Realist painters captured industrial landscapes and working-class life</li>
                      </ul>
                    </li>
                    <li><strong>Positivism</strong>: Embraced scientific approaches to social questions:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Auguste Comte proposed applying scientific methods to social problems</li>
                        <li>Statistical societies gathered data on industrial conditions</li>
                        <li>Social surveys documented urban poverty and working conditions</li>
                      </ul>
                    </li>
                    <li><strong>Religious Responses</strong>: Churches adapted to industrial society:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Pope Leo XIII's "Rerum Novarum" (1891) addressed the condition of workers</li>
                        <li>Christian socialism emerged in various denominations</li>
                        <li>Religious organizations provided charity and education in industrial areas</li>
                        <li>Working-class religious participation often declined in industrial cities</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    By the early 20th century, these political and intellectual responses had created a complex landscape. Socialist parties had gained significant support in many countries. Governments had accepted greater responsibility for regulating industry and providing social welfare. The ideological debates sparked by industrialization—about markets, state intervention, class conflict, and social justice—continue to shape political discourse today.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Revolutions, Reform, and Nation-Building</h3>
                  <p className="mb-4">
                    The 19th century witnessed numerous political upheavals influenced by industrialization and its effects:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Revolutions of 1830</strong>: Liberal and nationalist uprisings across Europe:
                      <ul className="list-disc pl-6 mt-2">
                        <li>July Revolution in France replaced the Bourbon monarchy with the more liberal Orleans monarchy</li>
                        <li>Belgian Revolution established an independent Belgium with a constitutional monarchy</li>
                        <li>Uprisings in Poland, Italy, and German states were largely suppressed</li>
                        <li>Reflected growing middle-class demands for constitutional government and national self-determination</li>
                      </ul>
                    </li>
                    <li><strong>Revolutions of 1848</strong>: More widespread revolutionary wave with both liberal and social dimensions:
                      <ul className="list-disc pl-6 mt-2">
                        <li>February Revolution in France established the Second Republic</li>
                        <li>June Days uprising in Paris revealed class divisions within the revolutionary movement</li>
                        <li>Revolutions in German and Italian states sought national unification and constitutional government</li>
                        <li>Habsburg Empire faced nationalist uprisings in Hungary, Bohemia, and northern Italy</li>
                        <li>Most revolutions were ultimately defeated, but they demonstrated the power of liberal, nationalist, and emerging socialist ideas</li>
                      </ul>
                    </li>
                    <li><strong>Reform Movements</strong>: Gradual political changes occurred in many countries:
                      <ul className="list-disc pl-6 mt-2">
                        <li>British Reform Acts (1832, 1867, 1884) progressively extended voting rights</li>
                        <li>Chartist movement demanded democratic reforms including universal male suffrage</li>
                        <li>French Third Republic (established 1870) gradually consolidated democratic institutions</li>
                        <li>Suffrage movements advocated voting rights for women, achieving limited success before World War I</li>
                      </ul>
                    </li>
                    <li><strong>Nation-Building</strong>: New nation-states emerged, often linked to industrial development:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Italian unification (Risorgimento) completed in 1870, creating a unified market and industrial potential</li>
                        <li>German unification under Prussian leadership in 1871 accelerated industrial development</li>
                        <li>New national identities were constructed through education, symbols, and shared historical narratives</li>
                        <li>Nation-states increasingly competed for industrial resources, markets, and colonial possessions</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="mb-4">
                    The Concert of Europe and conservative order established after the Napoleonic Wars faced increasing challenges:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Conservative Order</strong>: The Congress of Vienna (1814-1815) established a system to maintain stability:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Balance of power among major European states</li>
                        <li>Legitimacy of traditional monarchies</li>
                        <li>Suppression of revolutionary and nationalist movements</li>
                        <li>Concert of Europe mechanism for great power cooperation</li>
                      </ul>
                    </li>
                    <li><strong>Challenges to the Order</strong>: This system gradually eroded due to:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Liberal and nationalist movements demanding constitutional government and national self-determination</li>
                        <li>Industrial development creating new economic powers and interests</li>
                        <li>Rising middle classes seeking political representation proportionate to their economic power</li>
                        <li>Working-class movements demanding political rights and social reforms</li>
                      </ul>
                    </li>
                    <li><strong>Crimean War</strong> (1853-1856): Disrupted the Concert of Europe and weakened the conservative order:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Russia faced a coalition including Britain, France, and the Ottoman Empire</li>
                        <li>Demonstrated the importance of industrial capacity for military power</li>
                        <li>Weakened Russia and created conditions for reforms including the emancipation of serfs</li>
                        <li>Damaged the cooperation among conservative powers that had maintained the post-1815 order</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    By the late 19th century, the political landscape of Europe had been transformed. Constitutional governments had replaced or limited absolute monarchies in most Western European countries. Nation-states had emerged as the dominant political form. Mass politics had developed with expanded suffrage and organized political parties. Industrial power increasingly determined international influence. These political changes both shaped and were shaped by the ongoing process of industrialization, creating modern European society as it existed on the eve of World War I.
                  </p>
                </div>
              </div>
            )}
            
            {/* Timeline Tab */}
            {activeTab === 'timeline' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Timeline of Key Events</h2>
                <Timeline events={industrialEvents} />
              </div>
            )}
            
            {/* Key Figures Tab */}
            {activeTab === 'figures' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Key Figures</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">James Watt (1736-1819)</h3>
                    <p className="mb-2"><strong>Role:</strong> Scottish inventor and mechanical engineer</p>
                    <p className="mb-2"><strong>Contributions:</strong> Developed the modern steam engine with a separate condenser, dramatically improving efficiency; partnered with Matthew Boulton to manufacture and commercialize steam engines.</p>
                    <p><strong>Significance:</strong> Watt's improved steam engine provided reliable, efficient power that could be located anywhere, not just near water sources. This innovation was crucial for the development of factories, mines, and later transportation, making it one of the most important technologies of the Industrial Revolution.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Richard Arkwright (1732-1792)</h3>
                    <p className="mb-2"><strong>Role:</strong> English inventor and entrepreneur</p>
                    <p className="mb-2"><strong>Contributions:</strong> Patented the water frame for spinning cotton; established the first water-powered cotton mill at Cromford in 1771; developed the factory system with division of labor and strict discipline.</p>
                    <p><strong>Significance:</strong> Often called the "Father of the Factory System," Arkwright created the model for industrial production that would be replicated throughout Britain and later Europe. His organizational innovations were as important as his technological ones, demonstrating how to efficiently manage large workforces in centralized facilities.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Karl Marx (1818-1883)</h3>
                    <p className="mb-2"><strong>Role:</strong> German philosopher, economist, and revolutionary socialist</p>
                    <p className="mb-2"><strong>Contributions:</strong> Developed Marxist theory with Friedrich Engels; wrote "The Communist Manifesto" (1848) and "Das Kapital" (1867); analyzed capitalism as a system based on class exploitation.</p>
                    <p><strong>Significance:</strong> Marx provided the most influential critique of industrial capitalism, arguing that it contained internal contradictions that would lead to its collapse. His ideas inspired socialist and communist movements worldwide and shaped working-class politics in industrialized countries.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Otto von Bismarck (1815-1898)</h3>
                    <p className="mb-2"><strong>Role:</strong> Prussian statesman, first Chancellor of the German Empire</p>
                    <p className="mb-2"><strong>Contributions:</strong> Unified Germany under Prussian leadership; introduced the world's first modern social insurance system with health insurance (1883), accident insurance (1884), and old-age pensions (1889).</p>
                    <p><strong>Significance:</strong> Bismarck's social insurance programs represented a new approach to industrial problems, using state power to address workers' needs while attempting to undermine support for socialism. This "state socialism" provided a model for welfare states that would develop across Europe.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Henry Bessemer (1813-1898)</h3>
                    <p className="mb-2"><strong>Role:</strong> English inventor and engineer</p>
                    <p className="mb-2"><strong>Contributions:</strong> Developed the Bessemer process (1856) for mass-producing steel inexpensively by removing impurities from pig iron using oxidation.</p>
                    <p><strong>Significance:</strong> Bessemer's process made steel production faster, cheaper, and more efficient, enabling its widespread use in construction, machinery, and transportation. This innovation was central to the Second Industrial Revolution and transformed the built environment through steel-framed buildings, bridges, and railways.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Edwin Chadwick (1800-1890)</h3>
                    <p className="mb-2"><strong>Role:</strong> English social reformer and public health advocate</p>
                    <p className="mb-2"><strong>Contributions:</strong> Authored the influential "Report on the Sanitary Condition of the Labouring Population" (1842); helped draft the Public Health Act of 1848; advocated for sanitary reform in industrial cities.</p>
                    <p><strong>Significance:</strong> Chadwick's work highlighted the public health problems created by rapid urbanization and industrialization. His advocacy led to government intervention in public health, establishing the principle that industrial society required regulation to address its negative consequences.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Werner von Siemens (1816-1892)</h3>
                    <p className="mb-2"><strong>Role:</strong> German inventor and industrialist</p>
                    <p className="mb-2"><strong>Contributions:</strong> Invented the dynamo (1866); founded Siemens AG, which became a leader in electrical engineering; developed electric trams and other applications of electrical technology.</p>
                    <p><strong>Significance:</strong> Siemens exemplified the Second Industrial Revolution's integration of science, technology, and business. His innovations in electrical engineering helped establish Germany as a leader in the new industries of the late 19th century, challenging British industrial dominance.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Robert Owen (1771-1858)</h3>
                    <p className="mb-2"><strong>Role:</strong> Welsh social reformer and industrialist</p>
                    <p className="mb-2"><strong>Contributions:</strong> Established New Lanark as a model industrial community with improved working conditions, education, and housing; advocated for cooperative communities; influenced early trade unionism.</p>
                    <p><strong>Significance:</strong> Owen demonstrated that industrial production could be organized more humanely while remaining profitable. As a utopian socialist, he proposed alternatives to competitive capitalism based on cooperation and community, influencing later social reform movements.</p>
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
                    front="What factors made Britain the first country to industrialize?" 
                    back="Britain industrialized first due to several advantages: abundant coal and iron resources often located near each other; agricultural revolution increasing food production and freeing labor; colonial markets and raw materials; naval supremacy protecting trade; political stability and strong property rights after the Glorious Revolution; capital accumulation from trade; and a culture of practical innovation."
                  />
                  
                  <Flashcard 
                    front="How did the factory system differ from earlier forms of production?" 
                    back="The factory system concentrated workers and powered machinery in central locations, replacing the 'putting-out' system of home-based production. It featured: division of labor with workers performing specialized tasks; mechanization replacing skilled handwork; strict discipline and supervision; time-regulated work rather than task-oriented work; and separation of workers from ownership of the means of production."
                  />
                  
                  <Flashcard 
                    front="What were the key innovations of the Second Industrial Revolution (c. 1870-1914)?" 
                    back="The Second Industrial Revolution introduced: steel production via the Bessemer process; electrical power generation and applications; chemical industries producing synthetic dyes, fertilizers, and pharmaceuticals; internal combustion engines leading to automobiles; new communications technologies like telephone and wireless telegraphy; and new business organizations including research laboratories, limited liability companies, and scientific management."
                  />
                  
                  <Flashcard 
                    front="How did industrialization affect European cities?" 
                    back="Industrialization caused rapid urbanization as people migrated for factory work. Early industrial cities faced severe problems: overcrowding, poor housing, inadequate sanitation, pollution, and high disease rates. Later improvements included water supply systems, sewers, building regulations, public parks, and transportation networks. New urban forms emerged, including industrial districts, working-class neighborhoods, and middle-class suburbs."
                  />
                  
                  <Flashcard 
                    front="What were the main working-class responses to industrialization?" 
                    back="Workers responded to industrialization through: early resistance like machine-breaking (Luddites); forming trade unions to negotiate wages and conditions; political movements like Chartism demanding democratic reforms; mutual aid organizations providing benefits and education; supporting socialist parties and ideologies; and eventually achieving reforms through both industrial and political action."
                  />
                  
                  <Flashcard 
                    front="How did government policies toward industry change during the 19th century?" 
                    back="Government policies evolved from early laissez-faire approaches (minimal intervention) to increasing regulation and social legislation. This included factory acts limiting working hours and child labor; public health measures addressing urban conditions; education systems providing mass schooling; and social insurance programs offering health, accident, and old-age benefits. Germany under Bismarck pioneered modern social insurance, while Britain led in factory regulation."
                  />
                  
                  <Flashcard 
                    front="What was the relationship between industrialization and nationalism in the 19th century?" 
                    back="Industrialization and nationalism reinforced each other. National unification (especially in Germany and Italy) created larger markets supporting industrial development. Industrial capacity enhanced national power and prestige. Economic competition between nations intensified nationalist sentiments. Transportation networks (especially railways) integrated national territories. Mass education systems promoted national identity alongside industrial skills. By 1900, industrial strength had become a key measure of national power."
                  />
                  
                  <Flashcard 
                    front="How did Marx analyze industrial capitalism?" 
                    back="Marx analyzed capitalism as a system based on class exploitation where capitalists (bourgeoisie) owned the means of production and extracted surplus value from workers (proletariat). He argued that capitalism contained internal contradictions: tendency toward crisis, concentration of capital, immiseration of workers, and class conflict. These contradictions would eventually lead to proletarian revolution and socialism. Marx's historical materialism viewed economic relations as the foundation of social and political structures."
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
                  <li><Link href="/practice-tests/unit6" className="text-secondary hover:text-accent">Unit 6 Practice Test</Link></li>
                  <li><Link href="/dbq-practice/unit6" className="text-secondary hover:text-accent">Industrial Revolution DBQ Practice</Link></li>
                  <li><Link href="/short-answer/unit6" className="text-secondary hover:text-accent">Short Answer Questions</Link></li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">External Resources</h3>
                <ul className="space-y-2">
                  <li><a href="https://www.khanacademy.org/humanities/world-history/1600s-1800s/industrial-revolution/v/the-industrial-revolution-crash-course" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Khan Academy: Industrial Revolution</a></li>
                  <li><a href="https://www.bbc.co.uk/bitesize/topics/zm7qtfr" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">BBC Bitesize: Industrial Revolution</a></li>
                  <li><a href="https://www.britannica.com/event/Industrial-Revolution" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Britannica: Industrial Revolution</a></li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">Video Lectures</h3>
                <ul className="space-y-2">
                  <li><a href="https://www.youtube.com/watch?v=vffI7U8ZSto" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Europe's Industrial Revolution</a></li>
                  <li><a href="https://www.youtube.com/watch?v=PQFRYAj3d7M" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">AP European History Unit 6: Industrialization and Its Effects</a></li>
                  <li><a href="https://www.youtube.com/watch?v=zhL5DCizj5c" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">The Industrial Revolution: Crash Course European History</a></li>
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
              <Link href="/units/5" className="btn btn-primary">
                Previous: Unit 5 - Conflict, Crisis, and Reaction in the Late 18th Century
              </Link>
              
              <Link href="/units/7" className="btn btn-primary">
                Next: Unit 7 - 19th-Century Perspectives and Political Developments
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
