'use client';

import { useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Timeline from '../../../components/Timeline';
import Flashcard from '../../../components/Flashcard';
import Quiz from '../../../components/Quiz';
import Link from 'next/link';

export default function Unit2Page() {
  const [activeTab, setActiveTab] = useState('overview');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const reformationEvents = [
    {
      year: '1517',
      title: 'Luther\'s 95 Theses',
      description: 'Martin Luther posted his 95 Theses on the door of the Castle Church in Wittenberg, challenging the Catholic Church\'s practice of selling indulgences.',
      significance: 'Traditionally considered the beginning of the Protestant Reformation, sparking religious reform movements across Europe.'
    },
    {
      year: '1521',
      title: 'Diet of Worms',
      description: 'Luther was summoned before Emperor Charles V and refused to recant his writings, declaring "Here I stand, I can do no other."',
      significance: 'Luther was declared an outlaw and heretic, but was protected by German princes, allowing the Reformation to continue.'
    },
    {
      year: '1525',
      title: 'German Peasants\' War',
      description: 'Peasants revolted across German-speaking territories, partly inspired by Luther\'s ideas about Christian freedom.',
      significance: 'Luther condemned the revolts, which were brutally suppressed. The alliance between the Reformation and secular authorities was strengthened.'
    },
    {
      year: '1529',
      title: 'Protestation at Speyer',
      description: 'Lutheran princes and cities protested against the Edict of Worms at the Diet of Speyer.',
      significance: 'The term "Protestant" originated from this protest, becoming a label for all non-Catholic Western Christians.'
    },
    {
      year: '1534',
      title: 'Act of Supremacy in England',
      description: 'Henry VIII declared himself Supreme Head of the Church of England, breaking with Rome.',
      significance: 'Established the independent Anglican Church and began the English Reformation, though initially with few doctrinal changes from Catholicism.'
    },
    {
      year: '1536',
      title: 'Calvin\'s Institutes of the Christian Religion',
      description: 'John Calvin published his systematic theology, outlining his doctrine of predestination and church governance.',
      significance: 'Became the foundation for Reformed Protestantism (Calvinism), which spread throughout Europe and later to North America.'
    },
    {
      year: '1545-1563',
      title: 'Council of Trent',
      description: 'The Catholic Church\'s ecumenical council that addressed Protestant challenges and reformed Catholic practices.',
      significance: 'Clarified Catholic doctrine, reformed clerical abuses, and launched the Counter-Reformation.'
    },
    {
      year: '1555',
      title: 'Peace of Augsburg',
      description: 'Agreement between Charles V and the Schmalkaldic League establishing the principle of "cuius regio, eius religio" (whose realm, their religion).',
      significance: 'Officially recognized Lutheranism and allowed German princes to determine the religion of their territories.'
    },
    {
      year: '1572',
      title: 'St. Bartholomew\'s Day Massacre',
      description: 'Thousands of French Protestants (Huguenots) were killed in Paris and throughout France.',
      significance: 'Intensified religious conflicts in France and demonstrated the violence of the religious wars.'
    },
    {
      year: '1598',
      title: 'Edict of Nantes',
      description: 'Henry IV of France granted limited religious freedom to French Protestants.',
      significance: 'Temporarily ended the French Wars of Religion and established a precedent for religious toleration.'
    },
    {
      year: '1618-1648',
      title: 'Thirty Years\' War',
      description: 'A series of conflicts beginning in the Holy Roman Empire that eventually involved most European powers.',
      significance: 'Began as a religious conflict but evolved into a political struggle. Ended with the Peace of Westphalia, which established principles of state sovereignty.'
    }
  ];
  
  const quizQuestions = [
    {
      question: 'Which of the following was NOT one of Martin Luther\'s key theological principles?',
      options: [
        'Salvation by faith alone (sola fide)',
        'Scripture as the sole religious authority (sola scriptura)',
        'The priesthood of all believers',
        'The infallibility of the Pope'
      ],
      correctAnswer: 3,
      explanation: 'Luther rejected papal infallibility and authority. His key principles included salvation by faith alone (sola fide), scripture as the sole religious authority (sola scriptura), and the priesthood of all believers, which challenged the Catholic Church\'s hierarchical structure.'
    },
    {
      question: 'The Peace of Augsburg (1555) established which principle in the Holy Roman Empire?',
      options: [
        'Universal religious freedom for all individuals',
        'Cuius regio, eius religio (whose realm, their religion)',
        'The supremacy of Calvinism over Lutheranism',
        'The separation of church and state'
      ],
      correctAnswer: 1,
      explanation: 'The Peace of Augsburg established the principle of "cuius regio, eius religio" (whose realm, their religion), which allowed German princes to determine whether their territories would be Catholic or Lutheran. It did not recognize other Protestant denominations or grant individual religious freedom.'
    },
    {
      question: 'Which of the following best describes the Catholic Counter-Reformation?',
      options: [
        'A military campaign to eliminate Protestantism by force',
        'A series of reforms and initiatives to revitalize the Catholic Church and respond to Protestant criticisms',
        'The Catholic Church\'s complete acceptance of Protestant theological ideas',
        'A political alliance between the Pope and Protestant rulers'
      ],
      correctAnswer: 1,
      explanation: 'The Counter-Reformation (or Catholic Reformation) was the Catholic Church\'s response to the Protestant Reformation, involving internal reforms addressing corruption, clarification of doctrine at the Council of Trent, the founding of new religious orders like the Jesuits, and renewed missionary efforts.'
    },
    {
      question: 'Henry VIII\'s primary motivation for breaking with the Catholic Church was:',
      options: [
        'His sincere belief in Lutheran theology',
        'His desire to seize Church property and wealth',
        'His need for a male heir and a divorce from Catherine of Aragon',
        'Popular demand for religious reform in England'
      ],
      correctAnswer: 2,
      explanation: 'Henry VIII broke with Rome primarily because Pope Clement VII refused to annul his marriage to Catherine of Aragon, who had not produced a male heir. While Henry did seize Church property after the break, and there was some popular support for reform, his initial motivation was personal and dynastic rather than theological.'
    },
    {
      question: 'The Thirty Years\' War (1618-1648) began as a conflict over:',
      options: [
        'Trade routes and colonial possessions',
        'Dynastic succession to the French throne',
        'Religious tensions between Protestants and Catholics in the Holy Roman Empire',
        'Ottoman expansion into Eastern Europe'
      ],
      correctAnswer: 2,
      explanation: 'The Thirty Years\' War began as a religious conflict between Protestants and Catholics in the Holy Roman Empire, specifically over the status of Protestant princes in Bohemia. It later evolved into a broader European conflict involving political and dynastic interests.'
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Unit Header */}
        <section className="bg-unit2-color text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Unit 2: Age of Reformation</h1>
            <p className="text-xl mb-4">c. 1450 to c. 1648</p>
            <p className="text-lg">
              Explore the religious, political, and social transformations of 16th-century Europe as the Protestant Reformation challenged the Catholic Church and reshaped Western Christianity.
            </p>
          </div>
        </section>
        
        {/* Navigation Tabs */}
        <section className="bg-light-gray border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'overview' ? 'bg-white border-t-2 border-unit2-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('overview')}
              >
                Overview
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'key-topics' ? 'bg-white border-t-2 border-unit2-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('key-topics')}
              >
                Key Topics
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'timeline' ? 'bg-white border-t-2 border-unit2-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('timeline')}
              >
                Timeline
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'figures' ? 'bg-white border-t-2 border-unit2-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('figures')}
              >
                Key Figures
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'flashcards' ? 'bg-white border-t-2 border-unit2-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('flashcards')}
              >
                Flashcards
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'quiz' ? 'bg-white border-t-2 border-unit2-color' : 'hover:bg-white'}`}
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
                  The Age of Reformation was a period of profound religious, political, and social transformation in Europe. Beginning with Martin Luther's challenge to the Catholic Church in 1517, the Protestant Reformation fractured the religious unity of Western Christianity and led to the establishment of new Christian denominations across Europe.
                </p>
                <p className="mb-4">
                  This religious revolution was made possible by several factors: growing dissatisfaction with corruption in the Catholic Church, the rise of Renaissance humanism with its emphasis on returning to original sources, the support of secular rulers who saw opportunities for political gain, and the invention of the printing press, which allowed reformers' ideas to spread rapidly.
                </p>
                <p className="mb-4">
                  The Catholic Church responded with its own reform movement, often called the Counter-Reformation or Catholic Reformation, which addressed internal corruption, clarified doctrine, and renewed spiritual practices. The religious divisions that emerged during this period led to decades of conflict, including civil wars in France and Germany and the Thirty Years' War (1618-1648).
                </p>
                <p className="mb-4">
                  Beyond its religious impact, the Reformation had far-reaching consequences for European politics, society, and culture. It contributed to the rise of the modern state, influenced economic development, transformed education, and affected family life and gender roles. The period also saw significant artistic developments, particularly the emergence of Mannerist and Baroque styles.
                </p>
                
                <h3 className="text-2xl font-bold mt-8 mb-4">Key Developments</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The emergence of Protestant denominations, including Lutheranism, Calvinism, and Anglicanism</li>
                  <li>The Catholic Counter-Reformation and the Council of Trent</li>
                  <li>Religious wars and conflicts throughout Europe</li>
                  <li>Changes in the relationship between church and state</li>
                  <li>The impact of religious reform on education, family life, and social welfare</li>
                  <li>The development of Mannerist and Baroque artistic styles</li>
                  <li>The Peace of Westphalia (1648) and the establishment of a new European order</li>
                </ul>
              </div>
            )}
            
            {/* Key Topics Tab */}
            {activeTab === 'key-topics' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Key Topics</h2>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Luther and the Protestant Reformation</h3>
                  <p className="mb-4">
                    Martin Luther, a German monk and theology professor, initiated the Protestant Reformation when he posted his 95 Theses in 1517, challenging the Catholic Church's practice of selling indulgences (pardons for sins).
                  </p>
                  <p className="mb-4">
                    Luther's theology centered on several key principles:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Sola Fide (Faith Alone)</strong>: Salvation comes through faith alone, not through good works or sacraments</li>
                    <li><strong>Sola Scriptura (Scripture Alone)</strong>: The Bible is the only source of religious authority, not church tradition or papal decrees</li>
                    <li><strong>Priesthood of All Believers</strong>: All Christians have direct access to God without needing priests as intermediaries</li>
                    <li><strong>Sola Gratia (Grace Alone)</strong>: Salvation is entirely God's gift, not something that can be earned</li>
                  </ul>
                  <p className="mb-4">
                    After being excommunicated by Pope Leo X in 1521 and declared an outlaw by Emperor Charles V at the Diet of Worms, Luther was protected by German princes. He translated the Bible into German, making it accessible to ordinary people, and developed a new form of church organization that relied on secular authorities.
                  </p>
                  <p>
                    Luther's ideas spread rapidly thanks to the printing press, and by the 1530s, many German states had adopted Lutheranism as their official religion.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">The Spread of Protestant Reform</h3>
                  <p className="mb-4">
                    The Reformation quickly spread beyond Luther's initial movement, taking different forms across Europe:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Zwinglianism</strong>: Led by Huldrych Zwingli in Zurich, Switzerland, this reform movement emphasized the authority of scripture and simplified worship practices, removing images and elaborate ceremonies.</li>
                    <li><strong>Calvinism</strong>: Developed by John Calvin in Geneva, Calvinism emphasized God's sovereignty and the doctrine of predestination (the idea that God had predetermined who would be saved). Calvin established a theocratic government in Geneva that became a model for Reformed churches elsewhere. Calvinism spread to France (Huguenots), Scotland (Presbyterians), the Netherlands, and parts of Germany.</li>
                    <li><strong>Anabaptists</strong>: Radical reformers who rejected infant baptism and advocated for the separation of church and state. They faced persecution from both Catholics and mainstream Protestants.</li>
                    <li><strong>Anglicanism</strong>: In England, the Reformation began for political rather than theological reasons when Henry VIII broke with Rome to annul his marriage to Catherine of Aragon. The Church of England maintained Catholic ritual while adopting some Protestant theology, especially under Edward VI and Elizabeth I.</li>
                  </ul>
                  <p>
                    By the mid-16th century, large parts of northern Europe had become Protestant, while southern Europe remained predominantly Catholic. Central Europe became a patchwork of Catholic and Protestant territories.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">The Catholic Reformation</h3>
                  <p className="mb-4">
                    The Catholic Church responded to the Protestant challenge with its own reform movement, often called the Counter-Reformation or Catholic Reformation:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Council of Trent (1545-1563)</strong>: This ecumenical council clarified Catholic doctrine, reaffirmed the authority of both scripture and tradition, reformed clerical abuses, and standardized the Mass.</li>
                    <li><strong>New Religious Orders</strong>: The Society of Jesus (Jesuits), founded by Ignatius of Loyola, became the intellectual and missionary vanguard of the Catholic Reformation. Other new orders focused on education, charity, and spiritual renewal.</li>
                    <li><strong>Inquisition and Index</strong>: The Roman Inquisition was strengthened to combat heresy, and the Index of Forbidden Books was established to censor Protestant and other prohibited works.</li>
                    <li><strong>Spiritual Renewal</strong>: Catholic mysticism flourished with figures like Teresa of Ávila and John of the Cross, while new devotional practices and church art sought to inspire the faithful.</li>
                  </ul>
                  <p>
                    The Catholic Reformation successfully prevented Protestantism from spreading further in Europe and even reclaimed some territories, particularly in Poland and parts of Germany.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Religious Wars and Conflicts</h3>
                  <p className="mb-4">
                    The religious divisions of the Reformation era led to numerous conflicts throughout Europe:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>German Peasants' War (1524-1525)</strong>: A massive uprising partly inspired by Luther's ideas about Christian freedom, though Luther himself condemned the revolt. The rebellion was brutally suppressed by the nobility.</li>
                    <li><strong>Schmalkaldic Wars (1546-1547)</strong>: Conflicts between the Holy Roman Emperor Charles V and an alliance of Lutheran princes.</li>
                    <li><strong>French Wars of Religion (1562-1598)</strong>: A series of civil wars between French Catholics and Protestants (Huguenots) that devastated France. The conflict included the St. Bartholomew's Day Massacre (1572), in which thousands of Huguenots were killed. The wars ended with the Edict of Nantes (1598), which granted limited religious toleration to Huguenots.</li>
                    <li><strong>Dutch Revolt (1568-1648)</strong>: The predominantly Calvinist northern provinces of the Netherlands rebelled against Catholic Spanish rule, eventually gaining independence as the Dutch Republic.</li>
                    <li><strong>Thirty Years' War (1618-1648)</strong>: Beginning as a conflict between Protestants and Catholics in the Holy Roman Empire, this devastating war eventually involved most European powers and became as much about politics as religion. It ended with the Peace of Westphalia, which established the principle of state sovereignty and a more secular approach to international relations.</li>
                  </ul>
                  <p>
                    These conflicts resulted in millions of deaths and enormous economic damage, but they also led to important developments in international law, religious toleration, and state formation.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Social and Political Impacts</h3>
                  <p className="mb-4">
                    The Reformation had profound effects on European society and politics:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>State Power</strong>: The Reformation generally strengthened secular authority as rulers gained control over church appointments, lands, and education. This contributed to the development of the modern state.</li>
                    <li><strong>Education</strong>: Both Protestants and Catholics emphasized education to promote their religious views. Literacy rates increased, particularly in Protestant areas where reading the Bible was encouraged.</li>
                    <li><strong>Family Life</strong>: Protestant reformers rejected clerical celibacy and monastic life, elevating marriage as the ideal Christian state. This changed attitudes toward family life and sexuality.</li>
                    <li><strong>Women's Roles</strong>: The Reformation had mixed effects for women. The closure of convents eliminated an important space for female autonomy, but Protestant emphasis on Bible reading promoted female literacy. Some radical sects allowed women to preach, but mainstream Protestantism generally reinforced patriarchal authority.</li>
                    <li><strong>Poor Relief</strong>: The dissolution of monasteries disrupted traditional charity, leading to new systems of poor relief administered by secular authorities, particularly in Protestant areas.</li>
                    <li><strong>Economic Effects</strong>: The "Protestant work ethic" thesis suggests that Calvinist values of hard work, thrift, and self-discipline contributed to the rise of capitalism, though this connection remains debated by historians.</li>
                  </ul>
                  <p>
                    These social and political changes laid important groundwork for the Enlightenment and the development of modern European society.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Art and Culture in the Age of Reformation</h3>
                  <p className="mb-4">
                    The Reformation period saw significant developments in art and culture:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Protestant Attitudes to Art</strong>: Protestant reformers were often suspicious of religious imagery, which they associated with idolatry. This led to iconoclasm (the destruction of religious images) in some areas. Protestant art tended to focus on biblical narratives and portraiture rather than saints and the Virgin Mary.</li>
                    <li><strong>Catholic Art</strong>: The Catholic Church reaffirmed the value of religious art at the Council of Trent but regulated it to ensure doctrinal correctness. Catholic art of this period aimed to inspire emotional devotion and counter Protestant criticisms.</li>
                    <li><strong>Mannerism</strong>: This artistic style emerged in the late Renaissance, featuring elongated figures, complex poses, and artificial colors. It reflected the spiritual and intellectual uncertainty of the period.</li>
                    <li><strong>Baroque</strong>: Developing in the late 16th century, Baroque art and architecture used dramatic effects, emotional intensity, and grandeur to inspire awe. It became particularly associated with the Catholic Counter-Reformation but was also adapted in Protestant countries.</li>
                    <li><strong>Music</strong>: The Reformation transformed religious music. Luther, himself a composer, encouraged congregational singing in the vernacular. The Catholic Church reformed its music at the Council of Trent, leading to the austere beauty of composers like Palestrina. Later, both Protestant and Catholic composers developed elaborate sacred music traditions.</li>
                    <li><strong>Literature</strong>: Vernacular literature flourished during this period, partly due to Bible translations and religious debates. In England, the Reformation era coincided with the golden age of English literature, including Shakespeare and the King James Bible.</li>
                  </ul>
                  <p>
                    These cultural developments reflected the religious divisions of the era but also transcended them, creating artistic traditions that would influence European culture for centuries.
                  </p>
                </div>
              </div>
            )}
            
            {/* Timeline Tab */}
            {activeTab === 'timeline' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Timeline of Key Events</h2>
                <Timeline events={reformationEvents} />
              </div>
            )}
            
            {/* Key Figures Tab */}
            {activeTab === 'figures' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Key Figures</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Martin Luther (1483-1546)</h3>
                    <p className="mb-2"><strong>Role:</strong> German monk, theologian, and founder of Lutheranism</p>
                    <p className="mb-2"><strong>Contributions:</strong> Posted the 95 Theses challenging indulgences; translated the Bible into German; developed the doctrines of salvation by faith alone and the priesthood of all believers.</p>
                    <p><strong>Significance:</strong> Initiated the Protestant Reformation; challenged papal authority and established a new form of Christianity that spread throughout northern Europe.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">John Calvin (1509-1564)</h3>
                    <p className="mb-2"><strong>Role:</strong> French theologian and reformer based in Geneva</p>
                    <p className="mb-2"><strong>Contributions:</strong> Wrote "Institutes of the Christian Religion"; developed the doctrine of predestination; established a theocratic government in Geneva.</p>
                    <p><strong>Significance:</strong> Founded Calvinism, which spread to France, the Netherlands, Scotland, and later to North America; his ideas about church governance influenced democratic political thought.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Henry VIII (1491-1547)</h3>
                    <p className="mb-2"><strong>Role:</strong> King of England</p>
                    <p className="mb-2"><strong>Contributions:</strong> Broke with the Catholic Church over his divorce from Catherine of Aragon; established himself as Supreme Head of the Church of England.</p>
                    <p><strong>Significance:</strong> Initiated the English Reformation, which eventually led to the establishment of Anglicanism; his actions had profound consequences for English politics and society.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Ignatius of Loyola (1491-1556)</h3>
                    <p className="mb-2"><strong>Role:</strong> Spanish priest and founder of the Society of Jesus (Jesuits)</p>
                    <p className="mb-2"><strong>Contributions:</strong> Wrote "Spiritual Exercises"; established the Jesuit order focused on education, missionary work, and defending Catholicism.</p>
                    <p><strong>Significance:</strong> The Jesuits became the intellectual and missionary vanguard of the Catholic Reformation, establishing schools and missions worldwide.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Elizabeth I (1533-1603)</h3>
                    <p className="mb-2"><strong>Role:</strong> Queen of England</p>
                    <p className="mb-2"><strong>Contributions:</strong> Established the Elizabethan Religious Settlement, a moderate Protestant approach that became the foundation of Anglicanism.</p>
                    <p><strong>Significance:</strong> Stabilized England after decades of religious turmoil; her "middle way" allowed England to avoid the worst of the religious wars that devastated continental Europe.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Charles V (1500-1558)</h3>
                    <p className="mb-2"><strong>Role:</strong> Holy Roman Emperor and King of Spain</p>
                    <p className="mb-2"><strong>Contributions:</strong> Opposed the Protestant Reformation; presided over the Diet of Worms that condemned Luther; fought numerous wars to maintain Catholic unity.</p>
                    <p><strong>Significance:</strong> His inability to suppress Protestantism despite his vast power demonstrated the strength of the reform movement; his abdication and the division of his territories shaped European politics for centuries.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Teresa of Ávila (1515-1582)</h3>
                    <p className="mb-2"><strong>Role:</strong> Spanish mystic, Carmelite nun, and reformer</p>
                    <p className="mb-2"><strong>Contributions:</strong> Reformed the Carmelite Order; wrote spiritual classics like "The Interior Castle"; developed a contemplative prayer practice.</p>
                    <p><strong>Significance:</strong> Exemplified Catholic spiritual renewal during the Counter-Reformation; became the first female Doctor of the Church; her writings continue to influence Christian spirituality.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">William Tyndale (c. 1494-1536)</h3>
                    <p className="mb-2"><strong>Role:</strong> English scholar and translator</p>
                    <p className="mb-2"><strong>Contributions:</strong> Translated the Bible into English from original Hebrew and Greek texts; smuggled copies into England.</p>
                    <p><strong>Significance:</strong> His translation formed the basis of the King James Bible and shaped the English language; he was executed for heresy, becoming a Protestant martyr.</p>
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
                    front="What were the main causes of the Protestant Reformation?" 
                    back="Corruption in the Catholic Church (including the sale of indulgences), the influence of Renaissance humanism, political opposition to papal authority, the invention of the printing press, and genuine desire for spiritual renewal."
                  />
                  
                  <Flashcard 
                    front="What were Luther's key theological principles?" 
                    back="Salvation by faith alone (sola fide), scripture as the sole religious authority (sola scriptura), the priesthood of all believers, and salvation by grace alone (sola gratia)."
                  />
                  
                  <Flashcard 
                    front="How did Calvinism differ from Lutheranism?" 
                    back="Calvinism emphasized predestination (God's predetermined selection of the saved), featured more austere worship practices, established more independent church governance, and was more internationally oriented. Calvin's Geneva became a model for Reformed churches worldwide."
                  />
                  
                  <Flashcard 
                    front="What was the Catholic Counter-Reformation?" 
                    back="The Catholic Church's response to the Protestant Reformation, including internal reforms addressing corruption, clarification of doctrine at the Council of Trent, the founding of new religious orders like the Jesuits, and renewed missionary efforts."
                  />
                  
                  <Flashcard 
                    front="What was the Peace of Augsburg (1555)?" 
                    back="An agreement between Charles V and the Lutheran princes establishing the principle of 'cuius regio, eius religio' (whose realm, their religion), which allowed German princes to determine whether their territories would be Catholic or Lutheran."
                  />
                  
                  <Flashcard 
                    front="How did the English Reformation differ from continental reforms?" 
                    back="The English Reformation began for political rather than theological reasons when Henry VIII sought to annul his marriage. The Church of England maintained Catholic ritual while gradually adopting some Protestant theology, creating a 'middle way' between Catholicism and Protestantism."
                  />
                  
                  <Flashcard 
                    front="What was the Thirty Years' War (1618-1648)?" 
                    back="A series of conflicts beginning as a religious war between Protestants and Catholics in the Holy Roman Empire that eventually involved most European powers and became as much about politics as religion. It ended with the Peace of Westphalia, which established principles of state sovereignty."
                  />
                  
                  <Flashcard 
                    front="How did the Reformation affect art and culture?" 
                    back="Protestant regions often rejected religious imagery, leading to iconoclasm in some areas. Catholic art emphasized emotional devotion and doctrinal correctness. The period saw the development of Mannerist and Baroque styles, changes in religious music, and the flourishing of vernacular literature."
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
                  <li><Link href="/practice-tests/unit2" className="text-secondary hover:text-accent">Unit 2 Practice Test</Link></li>
                  <li><Link href="/dbq-practice/unit2" className="text-secondary hover:text-accent">Reformation DBQ Practice</Link></li>
                  <li><Link href="/short-answer/unit2" className="text-secondary hover:text-accent">Short Answer Questions</Link></li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">External Resources</h3>
                <ul className="space-y-2">
                  <li><a href="https://www.khanacademy.org/humanities/renaissance-reformation/protestant-reformation" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Khan Academy: Protestant Reformation</a></li>
                  <li><a href="https://www.britannica.com/event/Reformation" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Britannica: The Reformation</a></li>
                  <li><a href="https://www.metmuseum.org/toah/hd/refo/hd_refo.htm" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Metropolitan Museum: The Reformation</a></li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">Video Lectures</h3>
                <ul className="space-y-2">
                  <li><a href="https://www.youtube.com/watch?v=Yrj2wyzj0R8" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">AP European History: Age of Reformation</a></li>
                  <li><a href="https://www.youtube.com/watch?v=IATyzSAjC1w" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Luther and the Protestant Reformation</a></li>
                  <li><a href="https://www.youtube.com/watch?v=PbBDP1Elbbg" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Counter-Reformation and Religious Wars</a></li>
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
              <Link href="/units/1" className="btn btn-primary">
                Previous: Unit 1 - Renaissance and Exploration
              </Link>
              
              <Link href="/units/3" className="btn btn-primary">
                Next: Unit 3 - Absolutism and Constitutionalism
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
