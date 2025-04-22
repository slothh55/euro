'use client';

import { useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Timeline from '../../../components/Timeline';
import Flashcard from '../../../components/Flashcard';
import Quiz from '../../../components/Quiz';
import Link from 'next/link';

export default function Unit7Page() {
  const [activeTab, setActiveTab] = useState('overview');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const nationalismEvents = [
    {
      year: '1815',
      title: 'Congress of Vienna',
      description: 'European powers redrew the map of Europe after Napoleon\'s defeat.',
      significance: 'Ignored nationalist aspirations, creating tensions that would fuel nationalist movements throughout the 19th century.'
    },
    {
      year: '1821-1829',
      title: 'Greek War of Independence',
      description: 'Greeks fought for independence from the Ottoman Empire.',
      significance: 'First successful nationalist movement in post-Napoleonic Europe, inspired by Romantic nationalism and supported by European powers.'
    },
    {
      year: '1830',
      title: 'Belgian Revolution',
      description: 'Belgians separated from the United Kingdom of the Netherlands.',
      significance: 'Created an independent Belgian state, demonstrating the power of nationalist movements to redraw the European map.'
    },
    {
      year: '1830-1831',
      title: 'November Uprising in Poland',
      description: 'Polish rebellion against Russian rule.',
      significance: 'Though unsuccessful, strengthened Polish national identity and demonstrated the challenges facing nationalist movements against powerful empires.'
    },
    {
      year: '1848',
      title: 'Revolutions Across Europe',
      description: 'Series of political upheavals across Europe with nationalist dimensions.',
      significance: 'Though most failed immediately, these revolutions spread nationalist ideas and set the stage for later unification movements.'
    },
    {
      year: '1859',
      title: 'Franco-Austrian War',
      description: 'France and Piedmont-Sardinia defeated Austria.',
      significance: 'Began the process of Italian unification by freeing Lombardy from Austrian control.'
    },
    {
      year: '1860',
      title: 'Garibaldi\'s Expedition of the Thousand',
      description: 'Giuseppe Garibaldi led volunteers to conquer Sicily and Naples.',
      significance: 'Brought southern Italy into the unification process, demonstrating the power of popular nationalism.'
    },
    {
      year: '1861',
      title: 'Kingdom of Italy Proclaimed',
      description: 'Victor Emmanuel II became king of a mostly unified Italy.',
      significance: 'Created a unified Italian state for the first time since the Roman Empire, though Rome and Venetia remained outside.'
    },
    {
      year: '1864',
      title: 'Second Schleswig War',
      description: 'Prussia and Austria defeated Denmark over the Schleswig-Holstein question.',
      significance: 'First step in Bismarck\'s plan for German unification, acquiring territories with German populations.'
    },
    {
      year: '1866',
      title: 'Austro-Prussian War',
      description: 'Prussia defeated Austria in the "Seven Weeks\' War."',
      significance: 'Excluded Austria from German affairs, allowing Prussia to dominate the North German Confederation.'
    },
    {
      year: '1870-1871',
      title: 'Franco-Prussian War',
      description: 'Prussia and the German states defeated France.',
      significance: 'Led to the proclamation of the German Empire, completing German unification under Prussian leadership.'
    },
    {
      year: '1871',
      title: 'German Empire Proclaimed',
      description: 'Wilhelm I of Prussia proclaimed German Emperor at Versailles.',
      significance: 'Created a powerful unified German state that altered the European balance of power.'
    },
    {
      year: '1878',
      title: 'Congress of Berlin',
      description: 'European powers reorganized the Balkans after the Russo-Turkish War.',
      significance: 'Recognized the independence of Romania, Serbia, and Montenegro, while creating an autonomous Bulgaria, reshaping Southeastern Europe along nationalist lines.'
    },
    {
      year: '1882',
      title: 'Triple Alliance Formed',
      description: 'Germany, Austria-Hungary, and Italy formed a defensive alliance.',
      significance: 'Created one of the two alliance systems that would divide Europe before World War I.'
    },
    {
      year: '1894',
      title: 'Dreyfus Affair Begins',
      description: 'French Jewish army officer Alfred Dreyfus falsely accused of treason.',
      significance: 'Revealed tensions between nationalism and minority rights, dividing French society between nationalist traditionalists and liberal defenders of individual rights.'
    },
    {
      year: '1896',
      title: 'First Modern Olympic Games',
      description: 'Revival of the Olympic Games in Athens, Greece.',
      significance: 'Created a venue for nationalist competition in sports, with nations competing for prestige through athletic achievement.'
    },
    {
      year: '1897',
      title: 'First Zionist Congress',
      description: 'Theodor Herzl convened the First Zionist Congress in Basel, Switzerland.',
      significance: 'Launched political Zionism, advocating for a Jewish national homeland in Palestine.'
    },
    {
      year: '1905',
      title: 'First Moroccan Crisis',
      description: 'Germany challenged French influence in Morocco.',
      significance: 'Increased tensions between European powers and strengthened the Anglo-French Entente against Germany.'
    },
    {
      year: '1908',
      title: 'Bosnian Crisis',
      description: 'Austria-Hungary annexed Bosnia-Herzegovina, angering Serbia and Russia.',
      significance: 'Intensified Balkan nationalist tensions and damaged relations between Austria-Hungary and Russia.'
    },
    {
      year: '1912-1913',
      title: 'Balkan Wars',
      description: 'Balkan states fought against the Ottoman Empire and then each other.',
      significance: 'Further weakened Ottoman power in Europe and increased nationalist tensions in the Balkans, setting the stage for World War I.'
    }
  ];
  
  const quizQuestions = [
    {
      question: 'Which of the following best describes the concept of nationalism in 19th-century Europe?',
      options: [
        'The belief that all nations should be governed by a single international authority',
        'The idea that political boundaries should correspond to cultural and linguistic communities',
        'The promotion of free trade and economic cooperation between different countries',
        'The view that traditional monarchies should maintain control over multinational empires'
      ],
      correctAnswer: 1,
      explanation: 'Nationalism in 19th-century Europe was primarily the belief that political boundaries should correspond to cultural and linguistic communities—that each "nation" (defined by shared language, history, and culture) should have its own state. This idea challenged multinational empires like Austria-Hungary and the Ottoman Empire, fueled unification movements in Germany and Italy, and inspired independence movements among subject peoples. Nationalism could take both liberal and conservative forms, but it fundamentally transformed the political map of Europe.'
    },
    {
      question: 'The unification of Germany under Prussian leadership was primarily achieved through:',
      options: [
        'Peaceful diplomatic negotiations and plebiscites',
        'A series of liberal democratic revolutions',
        'Military victories against Denmark, Austria, and France',
        'Economic integration through the Zollverein (customs union)'
      ],
      correctAnswer: 2,
      explanation: 'German unification under Prussian leadership was primarily achieved through military victories orchestrated by Otto von Bismarck, Prussia\'s Minister President. The process involved three wars: against Denmark (1864) over Schleswig-Holstein, against Austria (1866) to exclude Austrian influence from German affairs, and against France (1870-71) which rallied the southern German states behind Prussia. While economic integration through the Zollverein (established 1834) created important foundations, and popular nationalist sentiment played a role, Bismarck\'s "blood and iron" approach—not peaceful diplomacy or democratic revolutions—was the decisive factor in creating the German Empire proclaimed in 1871.'
    },
    {
      question: 'Social Darwinism in the late 19th century was used to justify:',
      options: [
        'Socialist policies aimed at reducing economic inequality',
        'Religious opposition to scientific theories of evolution',
        'Imperialist expansion and racial hierarchies',
        'Democratic reforms expanding voting rights'
      ],
      correctAnswer: 2,
      explanation: 'Social Darwinism misapplied Charles Darwin\'s biological theory of natural selection to human societies, arguing that competition between individuals, groups, races, and nations was natural and beneficial, with the "fittest" deservedly dominating. This pseudo-scientific theory was used to justify imperialism (claiming "superior" European nations had a right or duty to rule "inferior" peoples), racial hierarchies and discrimination, laissez-faire capitalism (opposing welfare measures as interfering with natural selection), and militarism (viewing war as a natural test of national fitness). It represented a distortion of Darwin\'s actual scientific work to support existing power structures and expansionist policies.'
    },
    {
      question: 'Which of the following was NOT a major motivation for European imperialism in the late 19th century?',
      options: [
        'Economic interests including markets, raw materials, and investment opportunities',
        'Strategic competition between European powers for global influence',
        'Cultural and religious missionary impulses',
        'Desire to spread democratic institutions and universal suffrage'
      ],
      correctAnswer: 3,
      explanation: 'European imperialism in the late 19th century was not primarily motivated by a desire to spread democratic institutions and universal suffrage. In fact, European powers often imposed authoritarian colonial administrations that denied basic political rights to indigenous populations. The major motivations included economic interests (securing markets, raw materials, and investment opportunities), strategic competition between European powers (the "scramble for Africa" following the Berlin Conference of 1884-85), cultural and religious missionary impulses (the "civilizing mission" or "white man\'s burden"), nationalist prestige, and social Darwinist ideologies that justified European dominance.'
    },
    {
      question: 'The "New Imperialism" of the late 19th century differed from earlier European colonialism primarily in its:',
      options: [
        'Focus on Africa and Asia rather than the Americas',
        'Reliance on private trading companies rather than direct state control',
        'Emphasis on settlement colonies rather than economic exploitation',
        'Greater concern for indigenous rights and welfare'
      ],
      correctAnswer: 0,
      explanation: 'The "New Imperialism" of the late 19th century differed from earlier European colonialism primarily in its focus on Africa and Asia rather than the Americas. While European powers had established colonies in the Americas from the 16th century onward, the period from approximately 1870 to 1914 saw an unprecedented scramble for territories in Africa and parts of Asia. Other key differences included: more direct state involvement rather than reliance on private trading companies; greater use of formal political control rather than informal economic influence; more sophisticated military technology creating greater power disparities; and more elaborate racial and Social Darwinist justifications. The New Imperialism was not characterized by greater concern for indigenous welfare or an emphasis on settlement colonies (with some exceptions like French Algeria).'
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Unit Header */}
        <section className="bg-unit7-color text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Unit 7: 19th-Century Perspectives and Political Developments</h1>
            <p className="text-xl mb-4">c. 1815 to c. 1914</p>
            <p className="text-lg">
              Explore the rise of nationalism, imperialism, and new ideologies that transformed European politics and society in the century before World War I.
            </p>
          </div>
        </section>
        
        {/* Navigation Tabs */}
        <section className="bg-light-gray border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'overview' ? 'bg-white border-t-2 border-unit7-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('overview')}
              >
                Overview
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'key-topics' ? 'bg-white border-t-2 border-unit7-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('key-topics')}
              >
                Key Topics
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'timeline' ? 'bg-white border-t-2 border-unit7-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('timeline')}
              >
                Timeline
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'figures' ? 'bg-white border-t-2 border-unit7-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('figures')}
              >
                Key Figures
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'flashcards' ? 'bg-white border-t-2 border-unit7-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('flashcards')}
              >
                Flashcards
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'quiz' ? 'bg-white border-t-2 border-unit7-color' : 'hover:bg-white'}`}
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
                  The 19th century witnessed profound transformations in European politics, society, and culture. Following the upheavals of the French Revolution and Napoleonic Wars, Europe entered a period of rapid change characterized by the rise of new political ideologies, nationalist movements, imperial expansion, and cultural innovations. These developments would reshape the European continent and set the stage for the conflicts of the 20th century.
                </p>
                <p className="mb-4">
                  Nationalism emerged as one of the most powerful forces of the 19th century. The idea that each "nation"—defined by shared language, history, and culture—should have its own state challenged the multinational empires established by the Congress of Vienna in 1815. Nationalist movements achieved dramatic successes with the unification of Italy (completed 1871) and Germany (1871), which transformed the European balance of power. Elsewhere, nationalist aspirations fueled independence movements in Greece, Belgium, and the Balkans, while threatening the cohesion of the Austrian, Russian, and Ottoman Empires.
                </p>
                <p className="mb-4">
                  The century also saw the development and competition of major political ideologies. Conservatism sought to maintain traditional authority and social hierarchies in the face of revolutionary change. Liberalism advocated for constitutional government, civil liberties, and free markets. Socialism, in its various forms, critiqued industrial capitalism and proposed alternatives based on collective ownership and economic equality. These ideologies competed for influence across Europe, shaping political debates, party systems, and government policies.
                </p>
                <p className="mb-4">
                  European imperialism reached unprecedented heights during the "New Imperialism" of the late 19th century. Driven by economic interests, strategic competition, nationalist prestige, and cultural missionary impulses, European powers divided much of Africa and parts of Asia among themselves. By 1914, European empires controlled approximately 84% of the world's land surface. This imperial expansion had profound consequences for both the colonized peoples and European societies, reinforcing notions of European superiority while creating new global connections.
                </p>
                <p className="mb-4">
                  Scientific and intellectual developments transformed European worldviews. Charles Darwin's theory of evolution challenged traditional religious understandings of human origins and was misappropriated as "Social Darwinism" to justify imperialism, racism, and class hierarchies. New technologies from the Second Industrial Revolution—electricity, chemicals, internal combustion engines—changed daily life and economic production. Mass education, rising literacy, and new media expanded public discourse and political participation.
                </p>
                <p className="mb-4">
                  Cultural movements reflected and shaped these broader changes. Romanticism, with its emphasis on emotion, individualism, and national identity, influenced literature, art, music, and politics in the early 19th century. Later movements like Realism and Naturalism depicted the social realities of industrial society. By the century's end, modernist movements in art and literature were challenging conventional forms and perspectives, reflecting the accelerating pace of change in European society.
                </p>
                <p className="mb-4">
                  The 19th century also witnessed significant diplomatic developments. After the relative stability of the Concert of Europe system established in 1815, the latter part of the century saw increasing tensions between European powers. The unification of Germany altered the balance of power, while imperial competition created new friction points. By the early 20th century, Europe had divided into two rival alliance systems—the Triple Alliance (Germany, Austria-Hungary, Italy) and the Triple Entente (Britain, France, Russia)—setting the stage for World War I.
                </p>
                <p className="mb-4">
                  By 1914, Europe had been transformed by a century of political, social, economic, and cultural change. The continent dominated global affairs through its empires, industrial might, and military power. Yet beneath this apparent strength lay tensions and contradictions—between nations, classes, and ideologies—that would erupt in the catastrophe of the First World War, bringing the "long 19th century" to a dramatic close.
                </p>
                
                <h3 className="text-2xl font-bold mt-8 mb-4">Key Developments</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Rise of nationalism as a political force, leading to Italian and German unification</li>
                  <li>Development and competition of political ideologies: conservatism, liberalism, socialism</li>
                  <li>New Imperialism and the European scramble for colonies in Africa and Asia</li>
                  <li>Scientific advances including Darwin's theory of evolution and its social applications</li>
                  <li>Second Industrial Revolution introducing new technologies and industries</li>
                  <li>Cultural movements from Romanticism to early Modernism</li>
                  <li>Formation of rival alliance systems and growing international tensions</li>
                  <li>Expansion of mass politics and gradual democratization</li>
                  <li>Challenges to traditional gender roles and early feminist movements</li>
                  <li>Secularization and changing religious attitudes</li>
                </ul>
              </div>
            )}
            
            {/* Key Topics Tab */}
            {activeTab === 'key-topics' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Key Topics</h2>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Nationalism and National Identity</h3>
                  <p className="mb-4">
                    Nationalism emerged as one of the most powerful political forces of the 19th century, transforming the European political landscape:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Intellectual Foundations</strong>: Nationalism developed from several sources:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Romantic movement's emphasis on unique national cultures, languages, and histories</li>
                        <li>Johann Gottfried Herder's concept of the Volksgeist (national spirit) expressed through language and culture</li>
                        <li>French Revolutionary and Napoleonic experience of national mobilization and citizen armies</li>
                        <li>Liberal belief in popular sovereignty and self-determination</li>
                      </ul>
                    </li>
                    <li><strong>Types of Nationalism</strong>: Nationalism took different forms across Europe:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Civic nationalism emphasized shared citizenship and political values (more common in Western Europe)</li>
                        <li>Ethnic nationalism defined the nation by shared language, culture, and ancestry (more common in Central and Eastern Europe)</li>
                        <li>Liberal nationalism linked national self-determination with constitutional government and civil liberties</li>
                        <li>Conservative nationalism emphasized traditional institutions and social order within a national framework</li>
                      </ul>
                    </li>
                    <li><strong>Nation-Building Processes</strong>: Creating national identities involved:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Standardization of national languages through education and literature</li>
                        <li>Creation of national histories emphasizing shared past and destiny</li>
                        <li>Development of national symbols, flags, anthems, and commemorations</li>
                        <li>Establishment of national cultural institutions (museums, theaters, universities)</li>
                        <li>Integration through military service, taxation, and administrative centralization</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="mb-4">
                    Nationalism manifested in different political movements across Europe:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Unification Movements</strong>: In fragmented regions, nationalism drove unification:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Italian Risorgimento (1815-1871) united the Italian peninsula through a combination of Piedmontese leadership (Cavour), revolutionary activism (Mazzini, Garibaldi), and international alliances</li>
                        <li>German unification (1864-1871) achieved through Prussian military victories against Denmark, Austria, and France under Bismarck's leadership</li>
                      </ul>
                    </li>
                    <li><strong>Independence Movements</strong>: Subject peoples sought national liberation:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Greek War of Independence (1821-1829) established an independent Greek state from Ottoman territory</li>
                        <li>Belgian Revolution (1830) separated Belgium from the United Kingdom of the Netherlands</li>
                        <li>Polish uprisings (1830-31, 1863) against Russian rule failed but strengthened Polish national identity</li>
                        <li>Balkan nationalist movements gradually reduced Ottoman territory in Europe</li>
                      </ul>
                    </li>
                    <li><strong>Challenges to Multinational Empires</strong>: Nationalism threatened imperial cohesion:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Habsburg Empire faced demands from Hungarians, Czechs, Poles, Romanians, South Slavs, and Italians</li>
                        <li>Compromise of 1867 created the dual monarchy of Austria-Hungary to accommodate Magyar nationalism</li>
                        <li>Ottoman Empire lost territories to nationalist movements in the Balkans</li>
                        <li>Russian Empire confronted Polish, Finnish, Baltic, and other nationalist movements</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    By the early 20th century, nationalism had become more aggressive and exclusive. The intense national rivalries, territorial disputes, and minority issues created by 19th-century nationalism contributed significantly to the tensions that led to World War I. Nationalism had transformed the European map but also created new conflicts that would shape the 20th century.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Political Ideologies and Movements</h3>
                  <p className="mb-4">
                    The 19th century witnessed the development and competition of major political ideologies that continue to shape political discourse today:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Conservatism</strong>: Emerged as a reaction against the French Revolution:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Edmund Burke's "Reflections on the Revolution in France" (1790) provided intellectual foundations</li>
                        <li>Emphasized tradition, gradual change, and organic social development</li>
                        <li>Defended established institutions: monarchy, aristocracy, church, and family</li>
                        <li>Metternich exemplified conservative diplomacy in post-Napoleonic Europe</li>
                        <li>Later evolved to accommodate some reforms while maintaining social hierarchy</li>
                      </ul>
                    </li>
                    <li><strong>Liberalism</strong>: Advocated individual rights and constitutional government:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Intellectual roots in Enlightenment thinkers like Locke and Montesquieu</li>
                        <li>Supported constitutional monarchy or republic with separation of powers</li>
                        <li>Advocated civil liberties: freedom of speech, press, religion, and assembly</li>
                        <li>Economic liberalism (laissez-faire) opposed government intervention in markets</li>
                        <li>Initially favored limited suffrage based on property ownership</li>
                        <li>Achieved significant reforms in Britain through parliamentary means</li>
                        <li>Played major role in 1830 and 1848 revolutions on the continent</li>
                      </ul>
                    </li>
                    <li><strong>Socialism</strong>: Developed as a critique of industrial capitalism:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Utopian socialists (Saint-Simon, Fourier, Owen) proposed ideal communities</li>
                        <li>Marxism provided systematic critique through historical materialism and class analysis</li>
                        <li>"Communist Manifesto" (1848) by Marx and Engels called for proletarian revolution</li>
                        <li>First International (1864-1876) attempted to unite working-class movements</li>
                        <li>Second International (1889-1916) organized socialist parties across Europe</li>
                        <li>By 1900, mass socialist parties existed in most European countries</li>
                        <li>Revisionism (Bernstein) advocated democratic reform rather than revolution</li>
                      </ul>
                    </li>
                    <li><strong>Anarchism</strong>: Rejected state authority entirely:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Pierre-Joseph Proudhon criticized private property ("Property is theft")</li>
                        <li>Mikhail Bakunin advocated immediate revolution and opposed Marxist emphasis on the state</li>
                        <li>Peter Kropotkin proposed mutual aid and voluntary cooperation</li>
                        <li>Some anarchists endorsed "propaganda by the deed" (political violence)</li>
                        <li>Influenced radical labor movements, especially in Southern Europe</li>
                      </ul>
                    </li>
                    <li><strong>Feminism</strong>: Challenged gender inequality:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Mary Wollstonecraft's "Vindication of the Rights of Woman" (1792) provided early foundations</li>
                        <li>Seneca Falls Convention (1848) launched organized women's rights movement in America</li>
                        <li>Suffragist movements campaigned for women's voting rights across Europe</li>
                        <li>Figures like Millicent Fawcett in Britain advocated moderate approaches</li>
                        <li>Militant tactics emerged with Emmeline Pankhurst's Women's Social and Political Union</li>
                        <li>Socialist feminists linked women's oppression to class exploitation</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="mb-4">
                    These ideologies shaped political developments across Europe:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Revolutions and Reform</strong>: Ideological conflicts drove political change:
                      <ul className="list-disc pl-6 mt-2">
                        <li>1830 Revolutions in France, Belgium, and Poland reflected liberal and nationalist demands</li>
                        <li>1848 "Springtime of Peoples" saw revolutions across Europe with liberal, nationalist, and early socialist elements</li>
                        <li>British Reform Acts (1832, 1867, 1884) gradually expanded suffrage through parliamentary reform</li>
                        <li>French Third Republic (est. 1870) consolidated democratic institutions after the Second Empire</li>
                      </ul>
                    </li>
                    <li><strong>Mass Politics</strong>: Political participation expanded:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Gradual extension of suffrage, though universal male suffrage remained limited before 1914</li>
                        <li>Development of modern political parties with mass membership</li>
                        <li>Growth of trade unions as both economic and political forces</li>
                        <li>Mass circulation newspapers expanded political discourse</li>
                        <li>Public education increased literacy and political awareness</li>
                      </ul>
                    </li>
                    <li><strong>State Expansion</strong>: Government roles grew despite ideological differences:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Public education systems established across Europe</li>
                        <li>Public health measures addressed urban conditions</li>
                        <li>Factory legislation regulated working conditions</li>
                        <li>Social insurance programs (pioneered by Bismarck in Germany) addressed workers' needs</li>
                        <li>Military conscription expanded state reach into citizens' lives</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    By 1914, European political systems reflected a complex mix of these ideologies. Constitutional government had become the norm in Western Europe, though with varying degrees of democratic participation. Socialist parties had gained significant support in many countries. Nationalist sentiment had intensified across the continent. These ideological currents would continue to shape European politics through the tumultuous 20th century.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">New Imperialism and Global Empire</h3>
                  <p className="mb-4">
                    The late 19th century witnessed an unprecedented expansion of European colonial empires, particularly in Africa and Asia:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Scope and Scale</strong>: The "New Imperialism" transformed the global map:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Between 1870 and 1914, European powers acquired approximately 10 million square miles of territory</li>
                        <li>By 1914, European empires controlled about 84% of the world's land surface</li>
                        <li>Africa was partitioned among European powers following the Berlin Conference (1884-1885)</li>
                        <li>Britain expanded control in India and acquired territories in Southeast Asia, East Africa, and Egypt</li>
                        <li>France built a second colonial empire in North and West Africa, Indochina, and the Pacific</li>
                        <li>Germany, Italy, and Belgium became new imperial powers</li>
                        <li>Russia continued territorial expansion in Central Asia and the Far East</li>
                      </ul>
                    </li>
                    <li><strong>Motivations and Justifications</strong>: Multiple factors drove imperial expansion:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Economic interests: markets for manufactured goods, sources of raw materials, investment opportunities</li>
                        <li>Strategic considerations: securing trade routes, preventing rival powers from gaining advantage</li>
                        <li>Nationalist prestige: colonies as symbols of national power and status</li>
                        <li>"Civilizing mission": European cultural and religious superiority complex</li>
                        <li>Social Darwinism: misapplication of evolutionary theory to justify racial hierarchies</li>
                        <li>Domestic politics: diverting attention from internal problems</li>
                        <li>Technological advantages: military technology, medicine, communications</li>
                      </ul>
                    </li>
                    <li><strong>Methods of Imperial Control</strong>: Europeans employed various approaches:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Direct rule through colonial administrators and military force</li>
                        <li>Indirect rule through local elites and traditional authorities</li>
                        <li>Settler colonies in regions with substantial European immigration</li>
                        <li>Economic imperialism using financial leverage without formal political control</li>
                        <li>Treaty ports and concessions in China and elsewhere</li>
                        <li>Protectorates maintaining nominal independence under European control</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="mb-4">
                    Imperialism had profound impacts on both colonized societies and European powers:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Effects on Colonized Peoples</strong>: Imperial rule transformed societies:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Political disruption: arbitrary borders, destruction of indigenous political systems</li>
                        <li>Economic exploitation: extraction of resources, forced labor, cash crop agriculture</li>
                        <li>Social transformation: new elites, urbanization, disruption of traditional structures</li>
                        <li>Cultural impacts: missionary activity, Western education, language policies</li>
                        <li>Demographic effects: population movements, disease, famines</li>
                        <li>Resistance: from immediate armed resistance to later nationalist movements</li>
                      </ul>
                    </li>
                    <li><strong>Effects on European Societies</strong>: Imperialism shaped the colonizers:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Economic benefits for specific industries and investors</li>
                        <li>Consumer goods from colonies entered European markets</li>
                        <li>Military and administrative careers in colonial service</li>
                        <li>Cultural influences: art, literature, exhibitions, museums</li>
                        <li>Reinforcement of racial theories and European superiority complex</li>
                        <li>Political debates between imperial advocates and critics</li>
                      </ul>
                    </li>
                    <li><strong>Imperial Rivalries</strong>: Competition for colonies increased international tensions:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Franco-British tensions over Africa (Fashoda Crisis, 1898)</li>
                        <li>Anglo-German naval rivalry and colonial disputes</li>
                        <li>Russo-Japanese War (1904-1905) over imperial ambitions in Manchuria and Korea</li>
                        <li>Moroccan Crises (1905, 1911) between Germany and France</li>
                        <li>Italian invasion of Ottoman Libya (1911)</li>
                        <li>Balkan Wars (1912-1913) reduced Ottoman territory in Europe</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    By 1914, imperialism had created a global system dominated by European powers. This system generated wealth and power for Europe while subjugating much of the world's population. Imperial rivalries contributed to the international tensions that led to World War I, while the experience of imperialism shaped both European and colonial societies in ways that would influence decolonization movements in the 20th century.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Science, Technology, and Social Thought</h3>
                  <p className="mb-4">
                    The 19th century witnessed revolutionary developments in scientific understanding and technological innovation that transformed European society and thought:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Darwinism and Evolution</strong>: Charles Darwin's theories revolutionized biology and beyond:
                      <ul className="list-disc pl-6 mt-2">
                        <li>"On the Origin of Species" (1859) proposed natural selection as the mechanism of evolution</li>
                        <li>"The Descent of Man" (1871) applied evolutionary theory to human origins</li>
                        <li>Challenged traditional religious accounts of creation and human uniqueness</li>
                        <li>Sparked debates between scientific and religious authorities</li>
                        <li>Influenced by and contributing to broader scientific developments in geology, paleontology, and comparative anatomy</li>
                      </ul>
                    </li>
                    <li><strong>Social Darwinism</strong>: Darwin's theories were misapplied to human societies:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Herbert Spencer coined "survival of the fittest" and applied evolutionary concepts to society</li>
                        <li>Justified social inequality as natural selection at work</li>
                        <li>Used to oppose welfare measures as interfering with natural selection</li>
                        <li>Provided pseudo-scientific justification for racism and imperialism</li>
                        <li>Influenced eugenics movement seeking to "improve" human genetic stock</li>
                      </ul>
                    </li>
                    <li><strong>Scientific and Technological Advances</strong>: The Second Industrial Revolution introduced new technologies:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Electricity: generators, motors, lighting, communications</li>
                        <li>Chemistry: synthetic dyes, fertilizers, explosives, pharmaceuticals</li>
                        <li>Steel production: Bessemer process enabled mass production</li>
                        <li>Internal combustion engine: automobiles, early aircraft</li>
                        <li>Communications: telegraph, telephone, wireless telegraphy</li>
                        <li>Medicine: germ theory (Pasteur, Koch), antiseptics, vaccines</li>
                        <li>Physics: thermodynamics, electromagnetism, early quantum theory</li>
                      </ul>
                    </li>
                    <li><strong>Social Sciences</strong>: New disciplines attempted to study human society scientifically:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Sociology: Auguste Comte, Émile Durkheim studied social structures and functions</li>
                        <li>Psychology: Wilhelm Wundt established first experimental psychology laboratory</li>
                        <li>Anthropology: studied human cultures with often Eurocentric perspectives</li>
                        <li>Economics: developed more mathematical and theoretical approaches</li>
                        <li>Positivism emphasized empirical evidence and scientific methods</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="mb-4">
                    These scientific and intellectual developments influenced broader cultural and social trends:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Secularization</strong>: Religious authority faced increasing challenges:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Scientific explanations competed with religious accounts</li>
                        <li>Biblical criticism examined sacred texts as historical documents</li>
                        <li>Church-state conflicts in many European countries</li>
                        <li>Declining religious practice, especially among urban working classes</li>
                        <li>Religious responses ranged from accommodation to fundamentalist rejection</li>
                      </ul>
                    </li>
                    <li><strong>Education and Literacy</strong>: Knowledge spread more widely:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Public education systems established across Europe</li>
                        <li>Rising literacy rates, especially in Northern and Western Europe</li>
                        <li>Universities expanded and specialized</li>
                        <li>Technical and scientific education gained importance</li>
                        <li>Women gradually gained access to higher education</li>
                      </ul>
                    </li>
                    <li><strong>Mass Media and Communication</strong>: Information circulated more rapidly:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Mass-circulation newspapers reached unprecedented audiences</li>
                        <li>Improved printing technology reduced costs</li>
                        <li>Telegraph enabled rapid news transmission</li>
                        <li>Photography and later film created new visual media</li>
                        <li>Advertising and consumer culture developed</li>
                      </ul>
                    </li>
                    <li><strong>Changing Worldviews</strong>: Traditional certainties were challenged:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Faith in progress and scientific advancement</li>
                        <li>Questioning of traditional religious and moral frameworks</li>
                        <li>Friedrich Nietzsche declared "God is dead" and critiqued conventional morality</li>
                        <li>Sigmund Freud's psychoanalysis suggested unconscious drives beneath rational thought</li>
                        <li>Relativism challenged absolute truths in ethics and knowledge</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    By the early 20th century, these developments had transformed European intellectual and cultural life. Science had gained unprecedented authority, while traditional religious worldviews faced serious challenges. New technologies had changed daily life and economic production. The social sciences offered new ways to understand human behavior and society. These intellectual shifts would continue to develop in the 20th century, with modernist movements in art and literature reflecting the fragmentation of traditional certainties.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Cultural Movements and Artistic Developments</h3>
                  <p className="mb-4">
                    The 19th century witnessed significant cultural and artistic movements that both reflected and shaped broader social and intellectual changes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Romanticism</strong> (c. 1800-1850): Emphasized emotion, imagination, and individualism:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Literature: Wordsworth, Coleridge, Byron, Shelley, Keats in Britain; Goethe, Schiller in Germany; Hugo, Lamartine in France</li>
                        <li>Visual arts: Delacroix, Turner, Friedrich emphasized emotional intensity, sublime nature, historical themes</li>
                        <li>Music: Beethoven, Schubert, Chopin, Berlioz, Wagner created more emotionally expressive works</li>
                        <li>Key themes: nature, emotion, imagination, individualism, the exotic, the supernatural, national identity</li>
                        <li>Political dimensions: often linked to liberal and nationalist movements</li>
                      </ul>
                    </li>
                    <li><strong>Realism</strong> (c. 1840-1880): Depicted contemporary life and social conditions:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Literature: Balzac, Flaubert, Zola in France; Dickens, Eliot in Britain; Tolstoy, Dostoevsky in Russia</li>
                        <li>Visual arts: Courbet, Millet, Daumier portrayed ordinary people and working conditions</li>
                        <li>Key themes: social problems, class divisions, urban life, industrialization, ordinary people</li>
                        <li>Naturalism developed as a more deterministic variant emphasizing biological and social forces</li>
                        <li>Often contained implicit or explicit social criticism</li>
                      </ul>
                    </li>
                    <li><strong>Impressionism and Post-Impressionism</strong> (c. 1870-1900): Transformed visual representation:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Impressionism (Monet, Renoir, Degas) captured fleeting impressions of light and color</li>
                        <li>Post-Impressionism (Van Gogh, Cézanne, Gauguin, Seurat) developed more personal and structured styles</li>
                        <li>Challenged academic conventions and traditional techniques</li>
                        <li>Reflected modern urban life, leisure, and changing social patterns</li>
                        <li>Laid foundations for 20th-century modernist movements</li>
                      </ul>
                    </li>
                    <li><strong>Early Modernism</strong> (c. 1890-1914): Experimented with new forms and perspectives:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Literature: Symbolism (Mallarmé, Yeats) emphasized suggestion over direct statement</li>
                        <li>Visual arts: Expressionism, Cubism, Futurism broke with representational traditions</li>
                        <li>Music: Debussy, Stravinsky, Schoenberg challenged traditional tonality</li>
                        <li>Architecture: Art Nouveau, early functionalism rejected historical styles</li>
                        <li>Reflected accelerating pace of change and questioning of traditional certainties</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="mb-4">
                    Cultural developments were shaped by broader social changes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Mass Culture</strong>: Cultural consumption expanded beyond elites:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Rising literacy and education created larger reading public</li>
                        <li>Cheaper printing technologies enabled mass-market publications</li>
                        <li>Popular theater, music halls, and early cinema reached broad audiences</li>
                        <li>Department stores and advertising promoted consumer culture</li>
                        <li>Public museums, libraries, and concert halls democratized cultural access</li>
                      </ul>
                    </li>
                    <li><strong>Gender and Culture</strong>: Women's roles in cultural production evolved:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Female novelists gained prominence (Austen, Brontës, Eliot, Sand)</li>
                        <li>Women remained largely excluded from formal art education</li>
                        <li>New Woman fiction challenged traditional gender roles</li>
                        <li>Women's reading practices and cultural consumption shaped markets</li>
                        <li>Feminist perspectives emerged in literature and art</li>
                      </ul>
                    </li>
                    <li><strong>National Cultures</strong>: Cultural production often served nation-building:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Folk traditions collected and sometimes invented to support national identity</li>
                        <li>Historical novels and paintings celebrated national pasts</li>
                        <li>National museums preserved cultural heritage</li>
                        <li>Composers incorporated folk melodies into classical compositions</li>
                        <li>National literatures promoted through education systems</li>
                      </ul>
                    </li>
                    <li><strong>Cultural Institutions</strong>: New organizations shaped cultural life:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Public museums and galleries expanded across Europe</li>
                        <li>Concert halls and opera houses built in major cities</li>
                        <li>Universities developed humanities and arts disciplines</li>
                        <li>Literary and artistic societies fostered creative communities</li>
                        <li>International exhibitions showcased cultural and technological achievements</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    By 1914, European cultural life had been transformed by these movements and developments. Traditional forms and subjects had been challenged by new artistic approaches. Cultural consumption had expanded beyond elite audiences. National cultures had been consciously developed and promoted. The foundations had been laid for the modernist explosion that would follow World War I, as artists and writers responded to the unprecedented disruption of European civilization.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">International Relations and the Road to War</h3>
                  <p className="mb-4">
                    The 19th century witnessed significant shifts in international relations, from the relative stability of the Concert of Europe to the alliance systems and tensions that preceded World War I:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Concert of Europe</strong> (1815-c. 1854): Post-Napoleonic system of great power cooperation:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Established at Congress of Vienna to maintain balance of power</li>
                        <li>Great powers (Britain, Russia, Austria, Prussia, later France) cooperated to prevent revolution and war</li>
                        <li>Congress system addressed international issues through diplomatic conferences</li>
                        <li>Successfully maintained peace between major powers for nearly four decades</li>
                        <li>Gradually weakened by diverging interests and nationalist pressures</li>
                      </ul>
                    </li>
                    <li><strong>Crimean War</strong> (1853-1856): Disrupted the Concert system:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Russia faced coalition of Ottoman Empire, Britain, France, and Sardinia</li>
                        <li>Ended Russian dominance in Southeastern Europe</li>
                        <li>Demonstrated importance of industrial capacity for military power</li>
                        <li>Damaged cooperation among conservative powers</li>
                        <li>Peace of Paris (1856) attempted to resolve Eastern Question</li>
                      </ul>
                    </li>
                    <li><strong>Bismarckian System</strong> (1871-1890): German Chancellor maintained complex alliance network:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Three Emperors' League (1873) linked Germany, Austria-Hungary, and Russia</li>
                        <li>Dual Alliance (1879) created formal German-Austrian alliance</li>
                        <li>Triple Alliance (1882) added Italy to the German-Austrian pact</li>
                        <li>Reinsurance Treaty (1887) maintained German-Russian understanding</li>
                        <li>Bismarck sought to isolate France and prevent anti-German coalitions</li>
                        <li>System maintained relative stability in European affairs</li>
                      </ul>
                    </li>
                    <li><strong>New Course and Alliance Formation</strong> (1890-1907): Rigid alliance blocs emerged:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Kaiser Wilhelm II dismissed Bismarck (1890) and pursued more assertive "Weltpolitik"</li>
                        <li>Reinsurance Treaty with Russia allowed to lapse, opening door for Franco-Russian Alliance (1894)</li>
                        <li>Anglo-German relations deteriorated over colonial disputes and naval rivalry</li>
                        <li>Anglo-French Entente Cordiale (1904) resolved colonial differences</li>
                        <li>Anglo-Russian Convention (1907) settled disputes in Asia</li>
                        <li>Europe divided into Triple Alliance (Germany, Austria-Hungary, Italy) and Triple Entente (Britain, France, Russia)</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="mb-4">
                    Several factors increased international tensions in the early 20th century:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Arms Race</strong>: Military competition intensified:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Anglo-German naval rivalry centered on dreadnought battleships</li>
                        <li>Continental powers expanded armies through conscription</li>
                        <li>Military planning became more rigid (e.g., Schlieffen Plan)</li>
                        <li>New technologies (machine guns, heavy artillery, early aircraft) changed warfare</li>
                        <li>Military spending increased dramatically across Europe</li>
                      </ul>
                    </li>
                    <li><strong>Imperial Rivalries</strong>: Competition for colonies created friction:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Fashoda Crisis (1898) between Britain and France over Sudan</li>
                        <li>Boer War (1899-1902) revealed international hostility toward Britain</li>
                        <li>First Moroccan Crisis (1905-1906): Germany challenged French influence</li>
                        <li>Second Moroccan Crisis (1911): German gunboat diplomacy increased tensions</li>
                        <li>Italian invasion of Ottoman Libya (1911) weakened Ottoman position in Europe</li>
                      </ul>
                    </li>
                    <li><strong>Balkan Crises</strong>: Southeastern Europe became a flashpoint:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Bosnian Crisis (1908-1909): Austria-Hungary annexed Bosnia-Herzegovina, angering Serbia and Russia</li>
                        <li>First Balkan War (1912): Balkan League defeated Ottoman Empire</li>
                        <li>Second Balkan War (1913): Bulgaria fought former allies over territorial division</li>
                        <li>Serbia emerged strengthened, increasing tensions with Austria-Hungary</li>
                        <li>Russia supported Serbian ambitions while Austria-Hungary felt threatened</li>
                      </ul>
                    </li>
                    <li><strong>Domestic Factors</strong>: Internal politics influenced foreign policy:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Nationalist pressures pushed governments toward more aggressive stances</li>
                        <li>Military leaders gained influence in policymaking</li>
                        <li>Social tensions led some leaders to view foreign adventures as distractions</li>
                        <li>Press and public opinion often favored nationalist positions</li>
                        <li>Economic competition intertwined with strategic rivalries</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    By 1914, these developments had created a dangerous international environment. The flexible diplomacy of the mid-19th century had given way to rigid alliance systems. Military planning emphasized rapid mobilization and offensive operations. Nationalist sentiment had intensified across Europe. Imperial competition had created multiple points of friction. The assassination of Archduke Franz Ferdinand in Sarajevo on June 28, 1914, would trigger a crisis that, unlike previous ones, could not be contained through diplomacy. The resulting conflict—World War I—would bring the "long 19th century" to a catastrophic end and usher in a new era in European and world history.
                  </p>
                </div>
              </div>
            )}
            
            {/* Timeline Tab */}
            {activeTab === 'timeline' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Timeline of Key Events</h2>
                <Timeline events={nationalismEvents} />
              </div>
            )}
            
            {/* Key Figures Tab */}
            {activeTab === 'figures' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Key Figures</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Otto von Bismarck (1815-1898)</h3>
                    <p className="mb-2"><strong>Role:</strong> Prussian statesman, first Chancellor of the German Empire (1871-1890)</p>
                    <p className="mb-2"><strong>Contributions:</strong> Engineered German unification through "blood and iron" policy; defeated Denmark (1864), Austria (1866), and France (1870-71); created alliance systems to isolate France; introduced world's first social insurance programs.</p>
                    <p><strong>Significance:</strong> Transformed European balance of power through German unification; pioneered state socialism as a conservative response to working-class movements; established model for realpolitik in international relations.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Giuseppe Garibaldi (1807-1882)</h3>
                    <p className="mb-2"><strong>Role:</strong> Italian revolutionary and nationalist leader</p>
                    <p className="mb-2"><strong>Contributions:</strong> Led the "Expedition of the Thousand" that conquered Sicily and Naples (1860); fought in numerous campaigns for Italian independence and unification; symbolized popular nationalism.</p>
                    <p><strong>Significance:</strong> Represented the democratic, revolutionary strand of Italian nationalism; his military successes forced the conservative Piedmontese leadership to accelerate unification; became an international symbol of nationalist and liberal causes.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Charles Darwin (1809-1882)</h3>
                    <p className="mb-2"><strong>Role:</strong> British naturalist and biologist</p>
                    <p className="mb-2"><strong>Contributions:</strong> Developed theory of evolution through natural selection; published "On the Origin of Species" (1859) and "The Descent of Man" (1871); collected extensive evidence from global voyage on HMS Beagle.</p>
                    <p><strong>Significance:</strong> Revolutionized understanding of biology and human origins; challenged traditional religious worldviews; his theories were misappropriated as "Social Darwinism" to justify imperialism, racism, and class hierarchies.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Queen Victoria (1819-1901)</h3>
                    <p className="mb-2"><strong>Role:</strong> Queen of the United Kingdom (1837-1901) and Empress of India (1876-1901)</p>
                    <p className="mb-2"><strong>Contributions:</strong> Presided over Britain's industrial, imperial, and political zenith; worked with series of prime ministers through constitutional monarchy; became symbol of era's values and British imperial power.</p>
                    <p><strong>Significance:</strong> Her 63-year reign saw Britain become world's leading industrial, imperial, and naval power; epitomized middle-class values of duty, family, and propriety; her numerous descendants occupied European thrones, creating royal network nicknamed "Grandmama of Europe."</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Karl Marx (1818-1883)</h3>
                    <p className="mb-2"><strong>Role:</strong> German philosopher, economist, and revolutionary socialist</p>
                    <p className="mb-2"><strong>Contributions:</strong> Developed Marxist theory with Friedrich Engels; wrote "The Communist Manifesto" (1848) and "Das Kapital" (1867); analyzed capitalism as system based on class exploitation.</p>
                    <p><strong>Significance:</strong> Provided most influential critique of industrial capitalism; his ideas inspired socialist and communist movements worldwide; historical materialism offered framework for understanding social and economic development.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Cecil Rhodes (1853-1902)</h3>
                    <p className="mb-2"><strong>Role:</strong> British businessman, colonial administrator, and imperialist</p>
                    <p className="mb-2"><strong>Contributions:</strong> Founded De Beers diamond company; expanded British control in southern Africa; served as Prime Minister of Cape Colony; established Rhodes Scholarship.</p>
                    <p><strong>Significance:</strong> Embodied late Victorian imperialism and its combination of economic interests, strategic considerations, and racial ideologies; his vision of British dominance "from Cape to Cairo" exemplified imperial ambitions.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Emmeline Pankhurst (1858-1928)</h3>
                    <p className="mb-2"><strong>Role:</strong> British political activist and leader of suffragette movement</p>
                    <p className="mb-2"><strong>Contributions:</strong> Founded Women's Social and Political Union (1903); advocated militant tactics for women's suffrage; organized demonstrations, property damage, and hunger strikes.</p>
                    <p><strong>Significance:</strong> Transformed women's suffrage from polite petition to militant demand; her tactics generated publicity and controversy; contributed to eventual extension of voting rights to women in Britain.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Claude Monet (1840-1926)</h3>
                    <p className="mb-2"><strong>Role:</strong> French painter and founder of Impressionism</p>
                    <p className="mb-2"><strong>Contributions:</strong> Pioneered Impressionist technique capturing fleeting effects of light and color; painted series of same subject under different conditions; subjects included urban scenes, landscapes, and water lilies.</p>
                    <p><strong>Significance:</strong> Helped revolutionize Western painting by breaking with academic traditions; his emphasis on perception and impression reflected modern urban experience; represented artistic response to industrialization and changing society.</p>
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
                    front="What were the key differences between civic and ethnic nationalism in 19th-century Europe?" 
                    back="Civic nationalism defined the nation primarily through shared citizenship, political values, and institutions. It emphasized voluntary membership and was more common in Western Europe (France, Britain). Ethnic nationalism defined the nation through shared language, culture, and ancestry. It emphasized inherited characteristics and was more common in Central and Eastern Europe (Germany, Slavic regions). Civic nationalism tended to be more inclusive and compatible with liberal values, while ethnic nationalism often led to exclusionary policies toward minorities."
                  />
                  
                  <Flashcard 
                    front="How did Bismarck achieve German unification between 1864 and 1871?" 
                    back="Bismarck achieved German unification through his 'blood and iron' policy of military victories in three wars: (1) The Danish War (1864) with Austria against Denmark over Schleswig-Holstein; (2) The Austro-Prussian War (1866) which excluded Austria from German affairs and established the North German Confederation under Prussian leadership; (3) The Franco-Prussian War (1870-71) which rallied the southern German states behind Prussia and led to the proclamation of the German Empire. Bismarck skillfully isolated each opponent diplomatically before military engagement and limited his objectives to maintain the European balance of power."
                  />
                  
                  <Flashcard 
                    front="What were the main motivations for European imperialism in the late 19th century?" 
                    back="European imperialism was driven by multiple factors: (1) Economic interests: markets for manufactured goods, sources of raw materials, investment opportunities; (2) Strategic considerations: securing trade routes, preventing rival powers from gaining advantage; (3) Nationalist prestige: colonies as symbols of national power and status; (4) 'Civilizing mission': European cultural and religious superiority complex; (5) Social Darwinism: misapplication of evolutionary theory to justify racial hierarchies; (6) Domestic politics: diverting attention from internal problems; (7) Technological advantages: military technology, medicine, communications that facilitated conquest and control."
                  />
                  
                  <Flashcard 
                    front="How did Social Darwinism distort Darwin's scientific theories?" 
                    back="Social Darwinism misappropriated Darwin's biological theory of natural selection by: (1) Applying biological concepts directly to human societies without scientific justification; (2) Claiming that competition between individuals, groups, races, and nations was natural and beneficial; (3) Arguing that social inequality reflected natural 'fitness' differences; (4) Using 'survival of the fittest' (Spencer's phrase, not Darwin's) to justify imperialism, racism, and laissez-faire economics; (5) Opposing welfare measures as interfering with natural selection; (6) Promoting eugenics to 'improve' human genetic stock. These distortions served to justify existing power structures rather than accurately represent Darwin's scientific work."
                  />
                  
                  <Flashcard 
                    front="What were the key political ideologies of the 19th century and their main principles?" 
                    back="The key 19th-century political ideologies were: (1) Conservatism: emphasized tradition, gradual change, and established institutions (monarchy, aristocracy, church); (2) Liberalism: advocated individual rights, constitutional government, civil liberties, and free markets; (3) Socialism: critiqued capitalism and proposed collective ownership of production means and economic equality; (4) Nationalism: promoted loyalty to the nation and self-determination for cultural/ethnic groups; (5) Anarchism: rejected all forms of government authority in favor of voluntary cooperation. These ideologies competed for influence across Europe, shaping political debates, party systems, and government policies."
                  />
                  
                  <Flashcard 
                    front="How did the alliance systems develop between 1871 and 1907?" 
                    back="The alliance systems developed in stages: (1) Bismarckian System (1871-1890): Three Emperors' League (1873), Dual Alliance with Austria (1879), Triple Alliance adding Italy (1882), Reinsurance Treaty with Russia (1887) - designed to isolate France; (2) New Course after Bismarck's dismissal (1890): Reinsurance Treaty lapsed, opening door for Franco-Russian Alliance (1894); (3) British diplomatic revolution: Anglo-Japanese Alliance (1902), Entente Cordiale with France (1904), Anglo-Russian Convention (1907); (4) Final blocs: Triple Alliance (Germany, Austria-Hungary, Italy) versus Triple Entente (Britain, France, Russia). This rigid system replaced the flexible diplomacy of earlier periods."
                  />
                  
                  <Flashcard 
                    front="What were the major cultural movements of the 19th century and their characteristics?" 
                    back="Major cultural movements included: (1) Romanticism (c.1800-1850): emphasized emotion, imagination, individualism, nature, and national identity; (2) Realism (c.1840-1880): depicted contemporary life and social conditions with accuracy and social criticism; (3) Impressionism (c.1870-1890): captured fleeting impressions of light and color, modern urban life; (4) Post-Impressionism and early Modernism (c.1890-1914): developed more personal styles and broke with representational traditions. These movements reflected broader social changes including industrialization, urbanization, and changing class structures."
                  />
                  
                  <Flashcard 
                    front="What factors contributed to the outbreak of World War I in 1914?" 
                    back="Factors contributing to World War I included: (1) Rigid alliance systems dividing Europe into hostile blocs; (2) Arms race, especially Anglo-German naval rivalry and continental military expansion; (3) Imperial rivalries creating multiple points of friction; (4) Nationalist tensions, particularly in the Balkans; (5) Military planning emphasizing rapid mobilization and offensive operations; (6) Domestic politics pushing leaders toward aggressive foreign policies; (7) Breakdown of the Concert of Europe system of great power cooperation; (8) Specific crisis trigger: assassination of Archduke Franz Ferdinand and Austria-Hungary's ultimatum to Serbia. These long-term and immediate causes combined to transform a regional conflict into a general European war."
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
                  <li><Link href="/practice-tests/unit7" className="text-secondary hover:text-accent">Unit 7 Practice Test</Link></li>
                  <li><Link href="/dbq-practice/unit7" className="text-secondary hover:text-accent">Nationalism DBQ Practice</Link></li>
                  <li><Link href="/short-answer/unit7" className="text-secondary hover:text-accent">Short Answer Questions</Link></li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">External Resources</h3>
                <ul className="space-y-2">
                  <li><a href="https://www.khanacademy.org/humanities/world-history/1600s-1800s/nationalism-19th-century/v/nationalism" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Khan Academy: Nationalism</a></li>
                  <li><a href="https://www.britannica.com/event/imperialism" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Britannica: Imperialism</a></li>
                  <li><a href="https://www.metmuseum.org/toah/hd/imml/hd_imml.htm" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Metropolitan Museum: Impressionism</a></li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">Video Lectures</h3>
                <ul className="space-y-2">
                  <li><a href="https://www.youtube.com/watch?v=sJ23-Pj516M" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">AP European History Unit 7: 19th-Century Perspectives</a></li>
                  <li><a href="https://www.youtube.com/watch?v=Cd2ch4XV84s" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Nationalism and Revolution 1750-1900: Crash Course</a></li>
                  <li><a href="https://www.youtube.com/watch?v=alJaltUmrGo" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Imperialism: Crash Course World History</a></li>
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
              <Link href="/units/6" className="btn btn-primary">
                Previous: Unit 6 - Industrialization and Its Effects
              </Link>
              
              <Link href="/units/8" className="btn btn-primary">
                Next: Unit 8 - 20th-Century Global Conflicts
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
