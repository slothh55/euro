'use client';

import { useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Timeline from '../../../components/Timeline';
import Flashcard from '../../../components/Flashcard';
import Quiz from '../../../components/Quiz';
import Link from 'next/link';

export default function Unit9Page() {
  const [activeTab, setActiveTab] = useState('overview');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const coldWarEvents = [
    {
      year: '1945',
      title: 'End of World War II',
      description: 'Germany surrendered in May, and Japan surrendered in September following atomic bombings.',
      significance: 'Marked the beginning of the Cold War between the United States and the Soviet Union.'
    },
    {
      year: '1947',
      title: 'Truman Doctrine and Marshall Plan',
      description: 'U.S. President Truman pledged support for nations resisting communism; Marshall Plan provided economic aid to Western Europe.',
      significance: 'Formalized U.S. policy of containment and helped rebuild Western European economies.'
    },
    {
      year: '1948-1949',
      title: 'Berlin Blockade and Airlift',
      description: 'Soviet Union blocked access to West Berlin; Western allies responded with a massive airlift.',
      significance: 'First major Cold War crisis in Europe; demonstrated Western resolve to maintain presence in Berlin.'
    },
    {
      year: '1949',
      title: 'Formation of NATO and Division of Germany',
      description: 'North Atlantic Treaty Organization established; Germany formally divided into Federal Republic (West) and Democratic Republic (East).',
      significance: 'Created Western military alliance against Soviet threat; institutionalized German division.'
    },
    {
      year: '1955',
      title: 'Warsaw Pact Formed',
      description: 'Military alliance of Soviet Union and Eastern European satellite states.',
      significance: 'Formalized the division of Europe into two opposing military blocs.'
    },
    {
      year: '1956',
      title: 'Hungarian Revolution',
      description: 'Anti-Soviet uprising in Hungary brutally suppressed by Soviet forces.',
      significance: 'Demonstrated Soviet determination to maintain control over Eastern Europe and limits of de-Stalinization.'
    },
    {
      year: '1957',
      title: 'Treaty of Rome',
      description: 'Established the European Economic Community (EEC), the precursor to the European Union.',
      significance: 'Began process of European integration that would transform the continent.'
    },
    {
      year: '1961',
      title: 'Berlin Wall Construction',
      description: 'East Germany built wall to prevent emigration to West Berlin.',
      significance: 'Physical symbol of the Iron Curtain dividing Europe; stopped flow of refugees from East to West.'
    },
    {
      year: '1962',
      title: 'Cuban Missile Crisis',
      description: 'Confrontation between U.S. and Soviet Union over Soviet nuclear missiles in Cuba.',
      significance: 'Brought world to brink of nuclear war; led to improved communication between superpowers.'
    },
    {
      year: '1968',
      title: 'Prague Spring and Soviet Invasion',
      description: 'Czechoslovak reform movement crushed by Warsaw Pact invasion.',
      significance: 'Ended hopes for "socialism with a human face"; established Brezhnev Doctrine of limited sovereignty.'
    },
    {
      year: '1975',
      title: 'Helsinki Accords',
      description: 'Agreement signed by 35 nations addressing European security, economic cooperation, and human rights.',
      significance: 'Recognized post-WWII borders; provided framework for human rights advocacy in Eastern bloc.'
    },
    {
      year: '1979',
      title: 'Soviet Invasion of Afghanistan',
      description: 'USSR intervened to support communist government against Islamic insurgents.',
      significance: 'Marked beginning of Soviet military quagmire; led to renewed Cold War tensions.'
    },
    {
      year: '1980-1981',
      title: 'Solidarity Movement in Poland',
      description: 'Independent trade union led by Lech Walesa challenged communist authority.',
      significance: 'First successful mass opposition movement in Eastern bloc; survived despite martial law.'
    },
    {
      year: '1985',
      title: 'Gorbachev Becomes Soviet Leader',
      description: 'Mikhail Gorbachev introduced reforms of glasnost (openness) and perestroika (restructuring).',
      significance: 'Began process that would ultimately lead to end of Cold War and collapse of Soviet system.'
    },
    {
      year: '1989',
      title: 'Revolutions in Eastern Europe',
      description: 'Communist regimes fell in Poland, Hungary, East Germany, Czechoslovakia, Bulgaria, and Romania.',
      significance: 'Peaceful revolutions (except in Romania) ended Soviet domination of Eastern Europe.'
    },
    {
      year: '1989 November 9',
      title: 'Fall of the Berlin Wall',
      description: 'East German authorities opened border crossings to West Berlin.',
      significance: 'Symbolic end of division of Europe; led to German reunification.'
    },
    {
      year: '1990',
      title: 'German Reunification',
      description: 'East and West Germany formally reunited as a single nation.',
      significance: 'Ended division of Germany; created most populous and economically powerful nation in EU.'
    },
    {
      year: '1991',
      title: 'Dissolution of the Soviet Union',
      description: 'USSR officially dissolved into 15 independent republics.',
      significance: 'Marked the end of the Cold War and the bipolar world order.'
    },
    {
      year: '1992',
      title: 'Maastricht Treaty',
      description: 'Created the European Union and laid groundwork for the euro currency.',
      significance: 'Transformed European Community into more integrated political and economic union.'
    },
    {
      year: '1993',
      title: 'Velvet Divorce',
      description: 'Czechoslovakia peacefully split into Czech Republic and Slovakia.',
      significance: 'Demonstrated possibility of peaceful national separation in post-communist era.'
    },
    {
      year: '1991-1995',
      title: 'Yugoslav Wars',
      description: 'Series of ethnic conflicts following breakup of Yugoslavia.',
      significance: 'Worst violence in Europe since WWII; included genocide and ethnic cleansing.'
    },
    {
      year: '1999',
      title: 'Introduction of the Euro',
      description: 'New common currency launched for financial transactions.',
      significance: 'Major step in European economic integration; physical euro notes and coins followed in 2002.'
    },
    {
      year: '2004',
      title: 'EU Eastern Enlargement',
      description: 'Ten new members joined EU, mostly former communist states.',
      significance: 'Largest single expansion of EU; helped consolidate democratic transitions.'
    },
    {
      year: '2008-2009',
      title: 'Global Financial Crisis',
      description: 'Worldwide economic downturn severely affected European economies.',
      significance: 'Led to eurozone debt crisis and austerity measures in many countries.'
    },
    {
      year: '2015',
      title: 'European Migrant Crisis',
      description: 'Over one million refugees and migrants arrived in Europe.',
      significance: 'Challenged EU border policies and solidarity; fueled rise of nationalist movements.'
    },
    {
      year: '2016',
      title: 'Brexit Referendum',
      description: 'United Kingdom voted to leave the European Union.',
      significance: 'First major reversal in European integration; UK formally left EU in 2020.'
    },
    {
      year: '2020-2022',
      title: 'COVID-19 Pandemic',
      description: 'Global pandemic severely affected European economies and societies.',
      significance: 'Led to unprecedented EU recovery fund and joint vaccine procurement.'
    },
    {
      year: '2022',
      title: 'Russian Invasion of Ukraine',
      description: 'Russia launched full-scale invasion of neighboring Ukraine.',
      significance: 'Largest conventional military attack in Europe since WWII; prompted unified Western response and sanctions.'
    }
  ];
  
  const quizQuestions = [
    {
      question: 'Which of the following best describes the policy of containment during the Cold War?',
      options: [
        'A strategy to isolate the United States from international affairs',
        'An effort to prevent the spread of communism beyond areas already under Soviet control',
        'A plan to contain nuclear weapons within designated test sites',
        'An economic policy to restrict trade between Eastern and Western Europe'
      ],
      correctAnswer: 1,
      explanation: 'Containment was the primary U.S. strategy during the Cold War, articulated by diplomat George Kennan and implemented through policies like the Truman Doctrine and the Marshall Plan. Rather than attempting to roll back existing communist regimes, containment sought to prevent the further spread of Soviet influence and communist ideology to new areas. The policy was based on the belief that over time, the inherent contradictions and weaknesses of the Soviet system would lead to its eventual collapse if its expansion could be prevented. Containment took various forms, including military alliances (NATO), economic aid to vulnerable countries, propaganda efforts, and support for anti-communist forces in contested areas. This strategy shaped U.S. foreign policy throughout the Cold War period.'
    },
    {
      question: 'The European Union evolved from which of the following organizations?',
      options: [
        'North Atlantic Treaty Organization (NATO)',
        'Warsaw Pact',
        'European Coal and Steel Community (ECSC)',
        'United Nations Economic Commission for Europe'
      ],
      correctAnswer: 2,
      explanation: 'The European Union evolved from the European Coal and Steel Community (ECSC), which was established by the Treaty of Paris in 1951. The ECSC, founded by France, West Germany, Italy, Belgium, the Netherlands, and Luxembourg, created a common market for coal and steel among these six countries. This was a strategic choice, as these industries were essential for warfare, and placing them under supranational authority would make war between France and Germany "not merely unthinkable, but materially impossible." The success of the ECSC led to the Treaty of Rome in 1957, which established the European Economic Community (EEC) and the European Atomic Energy Community (Euratom). These organizations later merged and evolved through various treaties (Single European Act, Maastricht, Amsterdam, Nice, Lisbon) into the modern European Union, expanding both in membership and in the scope of integration.'
    },
    {
      question: 'Which event is most closely associated with the end of the Cold War in Europe?',
      options: [
        'The Cuban Missile Crisis',
        'The Helsinki Accords',
        'The Fall of the Berlin Wall',
        'The formation of NATO'
      ],
      correctAnswer: 2,
      explanation: 'The Fall of the Berlin Wall on November 9, 1989, is most closely associated with the end of the Cold War in Europe. The Berlin Wall had stood since 1961 as the most visible symbol of the Iron Curtain dividing communist Eastern Europe from democratic Western Europe. When East German authorities announced that citizens could cross freely into West Berlin, crowds gathered at the wall and began dismantling it, creating iconic images that symbolized the collapse of communist control. The fall of the Berlin Wall was part of a broader wave of peaceful revolutions across Eastern Europe in 1989, as communist regimes in Poland, Hungary, Czechoslovakia, Bulgaria, and Romania also collapsed. These events were made possible by Mikhail Gorbachev\'s reforms in the Soviet Union and his decision not to use military force to maintain Soviet control over its satellite states. The fall of the Berlin Wall led directly to German reunification in 1990 and preceded the dissolution of the Soviet Union in 1991, which marked the official end of the Cold War.'
    },
    {
      question: 'The policy of détente in the 1970s was characterized by:',
      options: [
        'Increased military confrontation between NATO and the Warsaw Pact',
        'The construction of the Berlin Wall',
        'A relaxation of tensions and increased cooperation between the superpowers',
        'The rapid expansion of nuclear arsenals'
      ],
      correctAnswer: 2,
      explanation: 'Détente in the 1970s was characterized by a relaxation of tensions and increased cooperation between the superpowers. After the dangerous confrontations of the early Cold War, including the Cuban Missile Crisis, both the United States and Soviet Union recognized the need to establish a more stable relationship to reduce the risk of nuclear war. Key elements of détente included: (1) Arms control agreements such as the Strategic Arms Limitation Talks (SALT I and II) and the Anti-Ballistic Missile Treaty; (2) Increased diplomatic engagement, including U.S. President Nixon\'s visits to China and the Soviet Union; (3) The Helsinki Accords of 1975, which addressed European security, economic cooperation, and human rights; (4) Expanded trade and cultural exchanges between East and West. Détente represented a pragmatic acceptance of the existing geopolitical situation rather than a fundamental resolution of Cold War differences. The policy faced criticism from hardliners on both sides and eventually broke down following the Soviet invasion of Afghanistan in 1979, leading to a renewal of Cold War tensions in the early 1980s.'
    },
    {
      question: 'Which of the following was NOT a factor in the collapse of communist regimes in Eastern Europe in 1989?',
      options: [
        'Economic stagnation and consumer goods shortages',
        'Gorbachev\'s policies of glasnost and perestroika',
        'Direct military intervention by NATO forces',
        'Growing civil society and dissident movements'
      ],
      correctAnswer: 2,
      explanation: 'Direct military intervention by NATO forces was NOT a factor in the collapse of communist regimes in Eastern Europe in 1989. In fact, the revolutions of 1989 were remarkable for their largely peaceful nature (with the exception of Romania). The actual factors that contributed to the collapse included: (1) Economic stagnation and consumer goods shortages that undermined the legitimacy of communist governments; (2) Mikhail Gorbachev\'s policies of glasnost (openness) and perestroika (restructuring), which reduced Soviet control over Eastern Europe and signaled that the USSR would not use military force to maintain communist regimes; (3) Growing civil society and dissident movements like Solidarity in Poland and Charter 77 in Czechoslovakia that challenged one-party rule; (4) The demonstration effect, as successful opposition in one country inspired movements in others; (5) The long-term impact of the Helsinki Accords, which had legitimized human rights advocacy. NATO maintained its defensive posture during these events and did not directly intervene militarily in the internal affairs of Warsaw Pact countries during their democratic transitions.'
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Unit Header */}
        <section className="bg-unit9-color text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Unit 9: Cold War and Contemporary Europe</h1>
            <p className="text-xl mb-4">c. 1945 to the Present</p>
            <p className="text-lg">
              Explore the division and reunification of Europe, the Cold War, the fall of communism, European integration, and the challenges of the contemporary era.
            </p>
          </div>
        </section>
        
        {/* Navigation Tabs */}
        <section className="bg-light-gray border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'overview' ? 'bg-white border-t-2 border-unit9-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('overview')}
              >
                Overview
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'key-topics' ? 'bg-white border-t-2 border-unit9-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('key-topics')}
              >
                Key Topics
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'timeline' ? 'bg-white border-t-2 border-unit9-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('timeline')}
              >
                Timeline
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'figures' ? 'bg-white border-t-2 border-unit9-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('figures')}
              >
                Key Figures
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'flashcards' ? 'bg-white border-t-2 border-unit9-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('flashcards')}
              >
                Flashcards
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'quiz' ? 'bg-white border-t-2 border-unit9-color' : 'hover:bg-white'}`}
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
                  The period from 1945 to the present has been one of dramatic transformation for Europe. From the ashes of World War II, a continent divided by the Iron Curtain emerged, with competing political, economic, and social systems in East and West. The Cold War dominated international relations for over four decades, as the United States and Soviet Union engaged in ideological, economic, and occasionally military competition without direct confrontation. This bipolar world order shaped every aspect of European life, from high politics to popular culture.
                </p>
                <p className="mb-4">
                  In Western Europe, the postwar era saw unprecedented economic growth during the "Thirty Glorious Years" (1945-1975), the development of welfare states, and the gradual process of European integration. The European Coal and Steel Community, established in 1951, evolved through various stages into the European Union, creating a unique supranational organization that now encompasses most of the continent. Democratic systems consolidated in countries like West Germany, Italy, and later Spain, Portugal, and Greece, which transitioned from authoritarian rule.
                </p>
                <p className="mb-4">
                  Eastern Europe followed a different trajectory under Soviet domination. Communist regimes established one-party states with centrally planned economies, suppressed political dissent, and participated in the Warsaw Pact military alliance. Despite attempts at reform in countries like Hungary and Czechoslovakia, Soviet control remained firm until the late 1980s, when Mikhail Gorbachev's policies of glasnost and perestroika created space for change. The revolutions of 1989 swept away communist regimes across Eastern Europe, symbolized by the fall of the Berlin Wall, and led to the dissolution of the Soviet Union itself in 1991.
                </p>
                <p className="mb-4">
                  The post-Cold War era brought both opportunities and challenges. Former communist states embarked on difficult transitions to democracy and market economies, with varying degrees of success. Many eventually joined NATO and the European Union, healing the division of the continent. European integration deepened with the Maastricht Treaty, the introduction of the euro, and expansion to 28 member states (later reduced to 27 after Brexit). However, the continent also faced new challenges, including ethnic conflicts in the former Yugoslavia, economic crises, rising nationalism, terrorism, and debates over immigration and multiculturalism.
                </p>
                <p className="mb-4">
                  Technological developments transformed daily life, work, and communication. The digital revolution, globalization, and environmental concerns created new opportunities and problems. Social changes were equally profound, with evolving gender roles, family structures, and religious practices. The feminist movement, LGBTQ+ rights, and environmental activism reshaped European societies. Decolonization completed the dismantling of European empires, while migration both within and to Europe created more diverse populations.
                </p>
                <p className="mb-4">
                  In the 21st century, Europe faces multiple challenges: maintaining economic competitiveness in a globalized world, addressing climate change, managing migration, countering terrorism, and preserving democratic values against populist and authoritarian tendencies. The COVID-19 pandemic tested European solidarity and healthcare systems, while Russia's invasion of Ukraine in 2022 created the largest security crisis since World War II. These developments have forced Europeans to reconsider their place in a rapidly changing world order, balancing traditional alliances with new geopolitical realities.
                </p>
                <p className="mb-4">
                  Throughout these transformations, Europeans have grappled with questions of identity, memory, and values. How to remember the Holocaust and other 20th-century atrocities, how to reconcile national identities with European integration, and how to balance individual freedom with social cohesion remain ongoing challenges. The history of contemporary Europe demonstrates both the remarkable resilience and adaptability of European societies and the persistent tensions and divisions that continue to shape the continent's development.
                </p>
                
                <h3 className="text-2xl font-bold mt-8 mb-4">Key Developments</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Division of Europe during the Cold War (1945-1991)</li>
                  <li>Economic recovery and prosperity in Western Europe</li>
                  <li>European integration from ECSC to EU</li>
                  <li>Decolonization and post-colonial relationships</li>
                  <li>Fall of communism and democratic transitions in Eastern Europe</li>
                  <li>German reunification and its consequences</li>
                  <li>Ethnic conflicts in the Balkans</li>
                  <li>Introduction of the euro and economic challenges</li>
                  <li>Migration and changing demographics</li>
                  <li>Technological developments and globalization</li>
                  <li>Rise of populism and challenges to liberal democracy</li>
                  <li>Environmental concerns and climate change policies</li>
                </ul>
              </div>
            )}
            
            {/* Key Topics Tab */}
            {activeTab === 'key-topics' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Key Topics</h2>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">The Cold War Division of Europe</h3>
                  <p className="mb-4">
                    The Cold War fundamentally reshaped Europe's political, economic, and cultural landscape:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Origins and Early Tensions</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Wartime conferences (Yalta, Potsdam) set stage for postwar disagreements</li>
                        <li>Soviet control of Eastern Europe versus Western democratic vision</li>
                        <li>Churchill's "Iron Curtain" speech (1946) articulated the division</li>
                        <li>Truman Doctrine (1947) pledged U.S. support against communist expansion</li>
                        <li>Marshall Plan provided economic aid to Western Europe</li>
                      </ul>
                    </li>
                    <li><strong>Military Alliances</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>NATO (1949) created Western military alliance with U.S. leadership</li>
                        <li>Warsaw Pact (1955) formalized Soviet military control of Eastern Europe</li>
                        <li>Nuclear deterrence and massive retaliation strategies</li>
                        <li>Arms race and development of intercontinental ballistic missiles</li>
                        <li>Military bases and troop deployments throughout Europe</li>
                      </ul>
                    </li>
                    <li><strong>The German Question</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Division into occupation zones evolved into separate states</li>
                        <li>Berlin Blockade (1948-1949) demonstrated Soviet pressure and Western resolve</li>
                        <li>Federal Republic (West Germany) integrated into Western alliance system</li>
                        <li>German Democratic Republic (East Germany) became Soviet satellite</li>
                        <li>Berlin Wall (1961) physically divided city and symbolized European division</li>
                      </ul>
                    </li>
                    <li><strong>Crises and Confrontations</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Hungarian Revolution (1956) crushed by Soviet military intervention</li>
                        <li>Cuban Missile Crisis (1962) brought world to brink of nuclear war</li>
                        <li>Prague Spring (1968) suppressed by Warsaw Pact invasion</li>
                        <li>Brezhnev Doctrine asserted Soviet right to intervene in socialist countries</li>
                        <li>Periods of tension alternated with détente and arms control efforts</li>
                      </ul>
                    </li>
                    <li><strong>Ideological Competition</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Capitalism versus communism as competing economic and political systems</li>
                        <li>Propaganda efforts on both sides, including Radio Free Europe and Voice of America</li>
                        <li>Cultural diplomacy through exhibitions, performances, and exchanges</li>
                        <li>Competition in sports, science, and technology (Space Race)</li>
                        <li>Espionage and intelligence operations throughout Europe</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    The Cold War division of Europe created two distinct political, economic, and social systems that developed in parallel for over four decades. This division affected every aspect of European life, from high politics to everyday experiences. The Iron Curtain was not merely a physical border but a psychological and ideological barrier that shaped identities and worldviews. Despite limited interactions through trade, cultural exchanges, and diplomatic initiatives like the Helsinki Process, Europe remained fundamentally divided until the revolutionary changes of 1989-1991.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Western European Recovery and Integration</h3>
                  <p className="mb-4">
                    Western Europe experienced remarkable economic recovery and political integration after World War II:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Economic Reconstruction</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Marshall Plan provided crucial American aid for rebuilding</li>
                        <li>Currency reforms stabilized economies (e.g., West German reform of 1948)</li>
                        <li>"Economic miracle" (Wirtschaftswunder) in West Germany</li>
                        <li>Modernization of industry and infrastructure</li>
                        <li>"Thirty Glorious Years" of sustained growth (1945-1975)</li>
                      </ul>
                    </li>
                    <li><strong>European Integration Process</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Schuman Plan led to European Coal and Steel Community (1951)</li>
                        <li>Treaty of Rome (1957) established European Economic Community (EEC)</li>
                        <li>Customs union eliminated tariffs between member states</li>
                        <li>Common Agricultural Policy supported farming sector</li>
                        <li>Expansion from original six members to include UK, Ireland, Denmark (1973)</li>
                        <li>Single European Act (1986) created single market</li>
                        <li>Maastricht Treaty (1992) established European Union</li>
                      </ul>
                    </li>
                    <li><strong>Welfare State Development</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>National Health Service in Britain (1948)</li>
                        <li>Expansion of social insurance systems</li>
                        <li>Public housing programs addressed postwar shortages</li>
                        <li>Educational opportunities broadened</li>
                        <li>Different models: Scandinavian, Continental, Mediterranean, Anglo-Saxon</li>
                      </ul>
                    </li>
                    <li><strong>Political Stabilization</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Christian Democratic and Social Democratic parties dominated</li>
                        <li>Democratic institutions consolidated in West Germany and Italy</li>
                        <li>Franco-German reconciliation became foundation of European project</li>
                        <li>Southern European transitions to democracy (Greece, Portugal, Spain in 1970s)</li>
                        <li>Consensus on mixed economy and social market approach</li>
                      </ul>
                    </li>
                    <li><strong>Social and Cultural Transformation</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Rising living standards and consumer society</li>
                        <li>Urbanization and suburban development</li>
                        <li>Mass tourism and increased mobility</li>
                        <li>Youth culture and social movements of 1960s</li>
                        <li>Secularization and changing religious practices</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    Western European recovery and integration represented one of the most successful periods of economic growth and political cooperation in European history. The combination of American support, visionary leadership, and pragmatic policies transformed a war-torn region into a zone of prosperity and stability. The European integration project, while primarily economic in its early phases, had profound political implications, creating institutions and practices that transcended traditional national sovereignty. This process was not without tensions and setbacks, including de Gaulle's assertion of French independence, Britain's ambivalent relationship with the continent, and periodic economic challenges. Nevertheless, by the end of the Cold War, Western Europe had developed a unique model combining market economics, democratic politics, social welfare, and supranational cooperation.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Eastern Europe Under Communist Rule</h3>
                  <p className="mb-4">
                    Communist regimes in Eastern Europe created distinctive political, economic, and social systems:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Establishment of Communist Control</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Soviet military presence enabled communist takeovers</li>
                        <li>"Salami tactics" gradually eliminated non-communist political forces</li>
                        <li>Show trials purged potential opposition (e.g., Slánský trial in Czechoslovakia)</li>
                        <li>One-party states established on Soviet model</li>
                        <li>Varying degrees of indigenous support versus Soviet imposition</li>
                      </ul>
                    </li>
                    <li><strong>Economic Transformation</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Nationalization of industry, banking, and commerce</li>
                        <li>Collectivization of agriculture (with resistance in many areas)</li>
                        <li>Central planning through Five-Year Plans</li>
                        <li>Council for Mutual Economic Assistance (Comecon) coordinated bloc economies</li>
                        <li>Initial industrialization successes followed by stagnation and inefficiency</li>
                        <li>Consumer goods shortages and queuing culture</li>
                      </ul>
                    </li>
                    <li><strong>Political Repression and Control</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Secret police networks (Stasi, Securitate, etc.) monitored population</li>
                        <li>Censorship of media and cultural expression</li>
                        <li>Restrictions on travel, especially to Western countries</li>
                        <li>Religious persecution, particularly of Catholic Church in Poland</li>
                        <li>Propaganda and ideological education in schools and workplaces</li>
                      </ul>
                    </li>
                    <li><strong>Resistance and Reform Attempts</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>East German uprising (1953) suppressed by Soviet tanks</li>
                        <li>Hungarian Revolution (1956) crushed after initial success</li>
                        <li>Prague Spring (1968) ended by Warsaw Pact invasion</li>
                        <li>Polish crises (1956, 1970, 1980-81) led to limited concessions</li>
                        <li>Solidarity movement in Poland challenged communist monopoly</li>
                        <li>Dissident movements (Charter 77, Helsinki groups) advocated human rights</li>
                      </ul>
                    </li>
                    <li><strong>Daily Life and Society</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Full employment but low productivity and hidden unemployment</li>
                        <li>Extensive social services (education, healthcare, childcare)</li>
                        <li>Housing shortages and standardized apartment blocks</li>
                        <li>Second economy (informal, black market) supplemented official system</li>
                        <li>Private spaces for authentic expression versus public conformity</li>
                        <li>Environmental degradation from heavy industry</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    Communist rule in Eastern Europe created societies that differed significantly from their Western counterparts, despite shared European cultural heritage. The Soviet model was adapted to local conditions with varying degrees of orthodoxy and national specificity. Poland maintained private agriculture, Yugoslavia pursued an independent path with worker self-management, Hungary implemented market-oriented reforms (New Economic Mechanism), while Romania and Albania followed more isolationist and Stalinist approaches. Despite material improvements from pre-war conditions in many areas, Eastern European economies increasingly fell behind the West in living standards and technological development. The contradiction between official ideology of workers' power and the reality of party control, combined with economic difficulties and national resentments against Soviet domination, created the conditions for the system's eventual collapse when Soviet support was withdrawn.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">The Revolutions of 1989 and the End of the Cold War</h3>
                  <p className="mb-4">
                    The peaceful revolutions of 1989 transformed Europe and ended the Cold War division:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Background Factors</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Economic stagnation in Eastern bloc undermined regime legitimacy</li>
                        <li>Gorbachev's reforms (glasnost and perestroika) created space for change</li>
                        <li>Abandonment of Brezhnev Doctrine removed threat of Soviet intervention</li>
                        <li>Helsinki Process legitimized human rights advocacy</li>
                        <li>Growing civil society and dissident movements</li>
                        <li>Western cultural and media influence penetrated Iron Curtain</li>
                      </ul>
                    </li>
                    <li><strong>Revolutionary Wave</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Poland: Solidarity legalized, semi-free elections (June 1989) led to non-communist government</li>
                        <li>Hungary: Reform communists opened border with Austria, multiparty system established</li>
                        <li>East Germany: Mass protests led to Berlin Wall opening (November 9, 1989)</li>
                        <li>Czechoslovakia: Velvet Revolution peacefully removed communist regime</li>
                        <li>Bulgaria: Palace coup replaced hardline leader with reformist faction</li>
                        <li>Romania: Violent overthrow and execution of Ceaușescu (December 1989)</li>
                      </ul>
                    </li>
                    <li><strong>German Reunification</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Mass exodus from East Germany accelerated collapse</li>
                        <li>Currency union (July 1990) integrated economies</li>
                        <li>Two-Plus-Four Treaty secured international approval</li>
                        <li>Formal reunification (October 3, 1990) ended division</li>
                        <li>Economic challenges of integrating East German economy</li>
                        <li>Psychological divisions persisted despite political unity</li>
                      </ul>
                    </li>
                    <li><strong>Soviet Dissolution</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Baltic states led independence movements</li>
                        <li>Failed coup against Gorbachev (August 1991) accelerated collapse</li>
                        <li>Boris Yeltsin emerged as Russian leader</li>
                        <li>Commonwealth of Independent States replaced USSR</li>
                        <li>Soviet Union officially dissolved (December 25, 1991)</li>
                        <li>Nuclear weapons control became immediate concern</li>
                      </ul>
                    </li>
                    <li><strong>International Implications</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>End of bipolar world order</li>
                        <li>United States emerged as sole superpower</li>
                        <li>Warsaw Pact dissolved, NATO's purpose questioned then redefined</li>
                        <li>Conventional Forces in Europe Treaty reduced military deployments</li>
                        <li>European integration accelerated with Maastricht Treaty</li>
                        <li>Fukuyama's "End of History" thesis suggested liberal democratic triumph</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    The revolutions of 1989 represented a remarkable historical moment when peaceful popular movements overcame entrenched authoritarian systems with minimal violence (Romania being the exception). The speed and comprehensiveness of these changes surprised even participants, as decades-old political structures collapsed within months. The end of the Cold War removed the defining framework of international relations that had shaped European politics for over four decades. While initially celebrated as a triumph of democracy and freedom, the post-communist transitions proved more complex and difficult than many anticipated. Economic "shock therapy," social dislocations, nationalist resurgence, and the challenges of building democratic institutions created new problems even as old ones were resolved. Nevertheless, the events of 1989-1991 fundamentally transformed Europe's political landscape and created opportunities for a more united continent.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Post-Communist Transitions and European Expansion</h3>
                  <p className="mb-4">
                    Former communist states underwent complex transitions while European integration expanded eastward:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Economic Transformation</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>"Shock therapy" versus gradual approaches to market transition</li>
                        <li>Privatization of state enterprises (voucher schemes, management buyouts, foreign investment)</li>
                        <li>Currency stabilization and banking reforms</li>
                        <li>Initial economic contraction followed by recovery at different rates</li>
                        <li>Rising inequality and unemployment during transition</li>
                        <li>Foreign direct investment reshaped industrial landscape</li>
                      </ul>
                    </li>
                    <li><strong>Political Democratization</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>New constitutions established democratic frameworks</li>
                        <li>Multiparty elections became regular practice</li>
                        <li>Civil society organizations developed</li>
                        <li>Media freedom expanded but faced new pressures</li>
                        <li>Lustration debates over handling communist-era officials</li>
                        <li>Varying trajectories from liberal democracy to illiberal models</li>
                      </ul>
                    </li>
                    <li><strong>NATO Enlargement</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Partnership for Peace program prepared candidates</li>
                        <li>First eastern expansion (1999): Poland, Hungary, Czech Republic</li>
                        <li>Baltic states and others joined in 2004</li>
                        <li>Russian opposition to NATO expansion grew over time</li>
                        <li>Security guarantees provided reassurance against Russian pressure</li>
                        <li>Military modernization to meet NATO standards</li>
                      </ul>
                    </li>
                    <li><strong>European Union Expansion</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Copenhagen criteria established democratic, economic, and legal standards for membership</li>
                        <li>Association agreements preceded full membership</li>
                        <li>Major eastern enlargement (2004): Estonia, Latvia, Lithuania, Poland, Czech Republic, Slovakia, Hungary, Slovenia</li>
                        <li>Romania and Bulgaria joined in 2007, Croatia in 2013</li>
                        <li>EU funds supported infrastructure development and institutional reforms</li>
                        <li>Adoption of EU legal framework (acquis communautaire)</li>
                      </ul>
                    </li>
                    <li><strong>Social and Cultural Changes</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Opening to Western cultural influences</li>
                        <li>Increased mobility and migration, especially of younger generations</li>
                        <li>Reassessment of historical narratives and national identities</li>
                        <li>Religious revival in some areas after communist-era restrictions</li>
                        <li>Demographic challenges including population decline</li>
                        <li>Nostalgia for certain aspects of communist era among some groups</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    The post-communist transitions in Central and Eastern Europe represented an unprecedented historical process of simultaneous political, economic, and social transformation. Countries had to build democratic institutions, market economies, and new international relationships while managing the social costs of these changes. The prospect of NATO and EU membership provided powerful incentives for reform and anchored these countries to Western institutions. However, the transition process was neither uniform nor linear. Some countries like Poland and the Baltic states achieved relatively successful economic transformations, while others struggled with corruption, weak institutions, and economic difficulties. The initial enthusiasm for Western liberal models has been tempered in some countries by the rise of nationalist and illiberal tendencies, creating tensions within the EU. Nevertheless, the expansion of European institutions eastward has helped to overcome the Cold War division of the continent and create a more integrated European space, though not without new challenges and divisions.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">European Integration: Deepening and Challenges</h3>
                  <p className="mb-4">
                    European integration deepened significantly after the Cold War but also faced serious challenges:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Maastricht Treaty and the European Union</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Transformed European Community into European Union (1993)</li>
                        <li>Created three-pillar structure (European Communities, Common Foreign and Security Policy, Justice and Home Affairs)</li>
                        <li>Established European citizenship</li>
                        <li>Set criteria for Economic and Monetary Union</li>
                        <li>Expanded EU competences beyond economic matters</li>
                        <li>Introduced principle of subsidiarity</li>
                      </ul>
                    </li>
                    <li><strong>Economic and Monetary Union</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Convergence criteria established fiscal and monetary standards</li>
                        <li>European Central Bank created to manage monetary policy</li>
                        <li>Euro introduced for financial transactions (1999) and as physical currency (2002)</li>
                        <li>Stability and Growth Pact aimed to enforce fiscal discipline</li>
                        <li>Single market completed with free movement of goods, services, capital, and people</li>
                        <li>Economic benefits from reduced transaction costs and price transparency</li>
                      </ul>
                    </li>
                    <li><strong>Institutional Development</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Amsterdam Treaty (1997) and Nice Treaty (2001) reformed institutions</li>
                        <li>Lisbon Treaty (2009) streamlined decision-making</li>
                        <li>European Parliament gained increased powers</li>
                        <li>Qualified majority voting expanded to more policy areas</li>
                        <li>High Representative position strengthened foreign policy coordination</li>
                        <li>Charter of Fundamental Rights became legally binding</li>
                      </ul>
                    </li>
                    <li><strong>Eurozone Crisis</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Global financial crisis (2008) exposed structural weaknesses</li>
                        <li>Sovereign debt crisis affected Greece, Ireland, Portugal, Spain, and Cyprus</li>
                        <li>European Stability Mechanism created as permanent bailout fund</li>
                        <li>Austerity measures imposed as condition for financial assistance</li>
                        <li>Banking Union established to supervise financial institutions</li>
                        <li>Tensions between creditor and debtor nations strained solidarity</li>
                      </ul>
                    </li>
                    <li><strong>Brexit and Euroscepticism</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>United Kingdom referendum (2016) voted to leave EU</li>
                        <li>Complex withdrawal negotiations followed</li>
                        <li>UK formally left EU (January 2020) with transition period</li>
                        <li>Trade and Cooperation Agreement established new relationship</li>
                        <li>Eurosceptic parties gained support in many member states</li>
                        <li>Debates over sovereignty, immigration, and EU powers intensified</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    European integration since the 1990s has been characterized by both ambitious deepening of cooperation and recurring crises that tested the Union's resilience. The creation of the euro represented an unprecedented experiment in monetary integration without full fiscal or political union. While successful in many respects, this incomplete architecture contributed to the severity of the eurozone crisis, which revealed tensions between national democratic processes and European-level decision-making. The EU has repeatedly demonstrated adaptability in response to challenges, creating new mechanisms and institutions to address problems. However, it has also faced growing legitimacy questions, with citizens in many countries feeling disconnected from Brussels-based institutions. The rise of Euroscepticism culminated in Brexit, the first case of a member state leaving the Union. Despite these challenges, the EU remains the world's most advanced experiment in supranational governance, balancing national sovereignty with pooled authority in an increasing number of policy areas. The tension between deepening integration and maintaining democratic legitimacy continues to shape the European project.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Migration and Changing European Demographics</h3>
                  <p className="mb-4">
                    Migration has transformed European societies and created new challenges:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Post-War Migration Patterns</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Guest worker programs brought laborers from Southern Europe and Turkey to Northern Europe</li>
                        <li>Post-colonial migration from former empires to Britain, France, Netherlands, etc.</li>
                        <li>Family reunification followed initial labor migration</li>
                        <li>Permanent settlement occurred despite original temporary intentions</li>
                        <li>Ethnic enclaves developed in major cities</li>
                        <li>East-West migration limited during Cold War by Iron Curtain</li>
                      </ul>
                    </li>
                    <li><strong>Post-Cold War Mobility</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Fall of Iron Curtain enabled East-West movement</li>
                        <li>EU enlargement granted freedom of movement to new member states</li>
                        <li>Large-scale migration from Poland, Romania, and other Eastern countries to Western Europe</li>
                        <li>Brain drain affected sending countries</li>
                        <li>Remittances provided economic benefits to origin countries</li>
                        <li>Schengen Agreement eliminated internal border controls</li>
                      </ul>
                    </li>
                    <li><strong>Refugee Crises</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Yugoslav Wars created refugee flows in 1990s</li>
                        <li>Middle Eastern and African conflicts drove migration across Mediterranean</li>
                        <li>2015 refugee crisis saw over one million arrivals</li>
                        <li>Dublin Regulation placed burden on entry countries (Greece, Italy)</li>
                        <li>EU-Turkey agreement attempted to manage flows</li>
                        <li>Humanitarian concerns versus security and integration challenges</li>
                      </ul>
                    </li>
                    <li><strong>Integration Debates</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Different national models: multiculturalism, assimilation, integration</li>
                        <li>Religious accommodation, particularly regarding Islam</li>
                        <li>Language acquisition and educational policies</li>
                        <li>Labor market participation and economic integration</li>
                        <li>Citizenship laws and naturalization requirements</li>
                        <li>Second and third generation experiences</li>
                      </ul>
                    </li>
                    <li><strong>Demographic Challenges</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Aging populations across Europe</li>
                        <li>Low fertility rates below replacement level</li>
                        <li>Migration as partial solution to demographic decline</li>
                        <li>Pressure on pension and healthcare systems</li>
                        <li>Regional disparities with rural depopulation</li>
                        <li>Changing family structures and household composition</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    Migration has fundamentally transformed European societies, creating more diverse populations and challenging traditional conceptions of national identity. What began as temporary labor recruitment in the post-war economic boom evolved into permanent settlement and the formation of new multicultural communities. The end of the Cold War and EU enlargement created new migration patterns within Europe, while conflicts and economic disparities beyond Europe's borders drove immigration from the Middle East, Africa, and Asia. These developments have generated complex political debates about integration, national identity, and the sustainability of welfare states. The 2015 refugee crisis highlighted divisions between and within European countries regarding responsibility-sharing and border control. At the same time, Europe faces significant demographic challenges with aging populations and low birth rates, making some level of immigration economically necessary. Managing migration in ways that balance humanitarian obligations, economic needs, security concerns, and social cohesion remains one of the most significant challenges facing contemporary European societies.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Contemporary Challenges and European Identity</h3>
                  <p className="mb-4">
                    Europe faces multiple challenges that test its values and identity:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Democratic Backsliding</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Illiberal democracy trends in Hungary and Poland</li>
                        <li>Challenges to judicial independence and media freedom</li>
                        <li>EU Article 7 procedures against rule of law violations</li>
                        <li>Tension between national sovereignty and European values</li>
                        <li>Conditionality mechanisms linking EU funds to rule of law</li>
                        <li>Rise of populist movements questioning liberal consensus</li>
                      </ul>
                    </li>
                    <li><strong>Security Challenges</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Terrorism threats from various extremist ideologies</li>
                        <li>Russian assertiveness and hybrid warfare</li>
                        <li>Cybersecurity vulnerabilities</li>
                        <li>Energy security and dependence on external suppliers</li>
                        <li>NATO's evolving role and European defense initiatives</li>
                        <li>Russian invasion of Ukraine (2022) as fundamental security crisis</li>
                      </ul>
                    </li>
                    <li><strong>Economic Competitiveness</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Globalization pressures on traditional industries</li>
                        <li>Digital transformation and technological change</li>
                        <li>Productivity gaps with United States and emerging Asian economies</li>
                        <li>Green transition costs and opportunities</li>
                        <li>Regional disparities within Europe</li>
                        <li>COVID-19 economic impact and recovery plans</li>
                      </ul>
                    </li>
                    <li><strong>Climate Change and Environmental Issues</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>European Green Deal aims for carbon neutrality by 2050</li>
                        <li>Renewable energy transition</li>
                        <li>Biodiversity loss and conservation efforts</li>
                        <li>Circular economy initiatives</li>
                        <li>Climate adaptation for extreme weather events</li>
                        <li>European leadership in international climate negotiations</li>
                      </ul>
                    </li>
                    <li><strong>European Identity and Values</strong>:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Multiple layers of identity: local, national, European</li>
                        <li>Shared values: democracy, human rights, rule of law</li>
                        <li>Historical memory and commemoration practices</li>
                        <li>Cultural heritage and contemporary cultural expression</li>
                        <li>Educational exchanges (Erasmus program) building European consciousness</li>
                        <li>Debates over Europe's Christian heritage versus secular values</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    Contemporary Europe faces a complex set of challenges that test its resilience, values, and identity. The post-Cold War optimism about the triumph of liberal democracy has given way to more sober assessments as populist movements, external pressures, and internal divisions have emerged. The Russian invasion of Ukraine in 2022 has forced a fundamental reassessment of European security assumptions and energy policies, while also reinforcing solidarity around core values. The climate crisis requires transformative economic and social changes that will reshape European societies in the coming decades. Digital transformation presents both opportunities for innovation and challenges to privacy and democratic discourse. Throughout these challenges, questions of European identity remain central: What does it mean to be European in the 21st century? How can diverse national traditions coexist with shared values? How should Europe position itself in a multipolar world? The answers to these questions will shape Europe's future development and its role in global affairs.
                  </p>
                </div>
              </div>
            )}
            
            {/* Timeline Tab */}
            {activeTab === 'timeline' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Timeline of Key Events</h2>
                <Timeline events={coldWarEvents} />
              </div>
            )}
            
            {/* Key Figures Tab */}
            {activeTab === 'figures' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Key Figures</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Konrad Adenauer (1876-1967)</h3>
                    <p className="mb-2"><strong>Role:</strong> First Chancellor of West Germany (1949-1963)</p>
                    <p className="mb-2"><strong>Contributions:</strong> Led post-war reconstruction of West Germany; pursued Western integration and reconciliation with France; established democratic institutions; oversaw "economic miracle."</p>
                    <p><strong>Significance:</strong> Transformed defeated Germany into stable democracy and economic powerhouse; laid foundations for European integration; established principle of Western orientation (Westbindung) in German foreign policy.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Jean Monnet (1888-1979)</h3>
                    <p className="mb-2"><strong>Role:</strong> Architect of European integration</p>
                    <p className="mb-2"><strong>Contributions:</strong> Developed Schuman Plan leading to European Coal and Steel Community; helped create European Economic Community; pioneered method of integration through concrete economic projects.</p>
                    <p><strong>Significance:</strong> Provided intellectual framework for European integration; advocated supranational institutions over traditional intergovernmental cooperation; his incremental, pragmatic approach shaped development of EU.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Mikhail Gorbachev (b. 1931)</h3>
                    <p className="mb-2"><strong>Role:</strong> General Secretary of Communist Party of Soviet Union (1985-1991)</p>
                    <p className="mb-2"><strong>Contributions:</strong> Introduced reforms of glasnost (openness) and perestroika (restructuring); pursued arms control with West; refused to use force to maintain Soviet control in Eastern Europe.</p>
                    <p><strong>Significance:</strong> Created conditions for peaceful end of Cold War and democratic revolutions in Eastern Europe; attempted to reform rather than preserve Soviet system; received Nobel Peace Prize for role in reducing international tensions.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Margaret Thatcher (1925-2013)</h3>
                    <p className="mb-2"><strong>Role:</strong> Prime Minister of United Kingdom (1979-1990)</p>
                    <p className="mb-2"><strong>Contributions:</strong> Implemented market-oriented economic reforms; privatized state industries; reduced trade union power; advocated strong anti-communist stance while supporting Gorbachev's reforms.</p>
                    <p><strong>Significance:</strong> Transformed British economy and politics; challenged European integration while supporting single market; "Thatcherism" influenced economic policies across Europe; first female British Prime Minister.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Lech Wałęsa (b. 1943)</h3>
                    <p className="mb-2"><strong>Role:</strong> Leader of Solidarity trade union; President of Poland (1990-1995)</p>
                    <p className="mb-2"><strong>Contributions:</strong> Led Gdańsk shipyard strikes (1980); built Solidarity into mass movement challenging communist rule; negotiated peaceful transition to democracy through Round Table talks.</p>
                    <p><strong>Significance:</strong> Symbol of peaceful resistance to communism; demonstrated power of civil society against authoritarian state; helped initiate wave of democratic transitions across Eastern Europe; received Nobel Peace Prize (1983).</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Helmut Kohl (1930-2017)</h3>
                    <p className="mb-2"><strong>Role:</strong> Chancellor of West Germany/Germany (1982-1998)</p>
                    <p className="mb-2"><strong>Contributions:</strong> Seized opportunity to achieve German reunification after fall of Berlin Wall; negotiated Two-Plus-Four Treaty securing international approval; deepened European integration through Maastricht Treaty.</p>
                    <p><strong>Significance:</strong> "Chancellor of Unity" who ended Germany's post-war division; strengthened Franco-German partnership as engine of European integration; oversaw introduction of euro; longest-serving German Chancellor since Bismarck.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Václav Havel (1936-2011)</h3>
                    <p className="mb-2"><strong>Role:</strong> Dissident playwright; President of Czechoslovakia (1989-1992) and Czech Republic (1993-2003)</p>
                    <p className="mb-2"><strong>Contributions:</strong> Led Charter 77 human rights movement; articulated moral critique of communist system; guided peaceful transition to democracy during Velvet Revolution.</p>
                    <p><strong>Significance:</strong> Intellectual who became political leader; embodied "living in truth" against communist lies; championed civil society, human rights, and European integration; symbol of post-communist democratic transformation.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Jacques Delors (b. 1925)</h3>
                    <p className="mb-2"><strong>Role:</strong> President of European Commission (1985-1995)</p>
                    <p className="mb-2"><strong>Contributions:</strong> Revitalized European integration through Single European Act; prepared Economic and Monetary Union; expanded EU social dimension; managed first steps of post-Cold War adaptation.</p>
                    <p><strong>Significance:</strong> Most influential Commission President; transformed European Community into more integrated European Union; balanced market liberalization with social protection; laid groundwork for euro currency.</p>
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
                    front="What were the key features of the Cold War division of Europe?" 
                    back="The Cold War division of Europe was characterized by: (1) Political division between democratic Western Europe and communist Eastern Europe; (2) Military alliances of NATO and Warsaw Pact; (3) Economic separation between market economies and centrally planned systems; (4) Ideological competition between capitalism and communism; (5) Physical barriers like the Berlin Wall and heavily guarded borders; (6) Limited communication and travel between blocs; (7) Proxy conflicts and espionage; (8) Nuclear deterrence and arms race. This division, often called the Iron Curtain, shaped European politics, economics, culture, and daily life from 1945 until 1989-1991."
                  />
                  
                  <Flashcard 
                    front="How did the Marshall Plan contribute to Western European recovery?" 
                    back="The Marshall Plan (European Recovery Program, 1948-1952) contributed to Western European recovery by: (1) Providing approximately $13 billion in American economic assistance; (2) Financing essential imports and capital equipment; (3) Encouraging European economic cooperation through the Organization for European Economic Cooperation; (4) Restoring industrial and agricultural production to pre-war levels; (5) Stabilizing currencies and controlling inflation; (6) Creating conditions for the 'economic miracle' of the 1950s and 1960s; (7) Strengthening democratic governments against communist influence; (8) Laying groundwork for European integration. The Marshall Plan represented both economic assistance and strategic investment in creating a prosperous, stable Western Europe aligned with the United States."
                  />
                  
                  <Flashcard 
                    front="What were the main stages of European integration?" 
                    back="The main stages of European integration include: (1) European Coal and Steel Community (1951) - integrated coal and steel industries of six founding members; (2) European Economic Community and Euratom (1957) - created common market and atomic energy cooperation; (3) Merger Treaty (1967) - combined institutions of three communities; (4) Single European Act (1986) - created single market with free movement of goods, services, capital, and people; (5) Maastricht Treaty (1992) - established European Union with economic, political, and security dimensions; (6) Amsterdam and Nice Treaties (1997, 2001) - reformed institutions for enlargement; (7) Introduction of euro currency (1999/2002); (8) Lisbon Treaty (2009) - streamlined decision-making and strengthened EU institutions; (9) Multiple enlargements expanding from 6 to 28 (later 27) member states."
                  />
                  
                  <Flashcard 
                    front="How did communist regimes control Eastern European societies?" 
                    back="Communist regimes controlled Eastern European societies through: (1) One-party political systems eliminating opposition; (2) Secret police networks monitoring population (Stasi, Securitate, etc.); (3) Censorship of media, literature, and arts; (4) Ideological education in schools and workplaces; (5) Control of economic resources through state ownership and central planning; (6) Restrictions on travel, especially to Western countries; (7) Suppression of religious institutions and independent civil society; (8) Mass organizations (youth groups, trade unions) under party control; (9) Propaganda promoting regime achievements and socialist values; (10) Military force when necessary to suppress uprisings (Hungary 1956, Czechoslovakia 1968). These mechanisms created systems of comprehensive control, though their effectiveness varied across countries and time periods."
                  />
                  
                  <Flashcard 
                    front="What factors led to the revolutions of 1989 in Eastern Europe?" 
                    back="Factors that led to the 1989 revolutions included: (1) Economic stagnation and consumer goods shortages undermining regime legitimacy; (2) Gorbachev's reforms in the Soviet Union (glasnost and perestroika) creating space for change; (3) Abandonment of the Brezhnev Doctrine removing the threat of Soviet military intervention; (4) Growing civil society and dissident movements (Solidarity in Poland, Charter 77 in Czechoslovakia); (5) Helsinki Process legitimizing human rights advocacy; (6) Western cultural and media influence penetrating the Iron Curtain; (7) The demonstration effect as successful opposition in one country inspired others; (8) Loss of confidence among communist elites in their own system; (9) Desire for Western living standards and political freedoms; (10) Nationalist resentment against Soviet domination in many countries."
                  />
                  
                  <Flashcard 
                    front="What challenges did post-communist countries face in their transitions?" 
                    back="Post-communist countries faced numerous transition challenges: (1) Creating functioning market economies from centrally planned systems; (2) Privatizing state-owned enterprises while preventing corruption and asset-stripping; (3) Building democratic institutions without democratic traditions; (4) Developing independent media and civil society; (5) Managing inflation and currency stabilization; (6) Addressing unemployment from industrial restructuring; (7) Creating legal frameworks for property rights and business; (8) Dealing with the legacy of secret police files and former officials; (9) Reorienting foreign trade from Comecon to global markets; (10) Adapting to NATO and EU membership requirements; (11) Managing rising inequality and social dislocation; (12) Reconciling with difficult historical legacies. These challenges created a 'triple transition' (political, economic, and social) that proved more complex than initially anticipated."
                  />
                  
                  <Flashcard 
                    front="How has migration transformed European societies since 1945?" 
                    back="Migration has transformed European societies since 1945 through: (1) Post-war guest worker programs bringing laborers from Southern Europe and Turkey to Northern Europe; (2) Post-colonial migration from former empires to Britain, France, Netherlands, etc.; (3) Refugee movements following conflicts (Yugoslavia, Middle East, Africa); (4) East-West migration after the fall of the Iron Curtain; (5) Intra-EU mobility following enlargement and freedom of movement; (6) Creation of multicultural communities in major cities; (7) Religious diversification, particularly growth of Muslim populations; (8) Development of integration policies and debates about national identity; (9) Political controversies over immigration control and asylum; (10) Demographic impact offsetting low birth rates in aging societies; (11) Economic contributions through labor, entrepreneurship, and innovation; (12) Cultural influences in food, music, literature, and arts."
                  />
                  
                  <Flashcard 
                    front="What are the main challenges facing the European Union today?" 
                    back="Main challenges facing the EU today include: (1) Democratic backsliding and rule of law concerns in some member states; (2) Economic divergence between northern and southern economies; (3) Migration management and burden-sharing; (4) Security threats including terrorism and cyber attacks; (5) Relations with Russia, particularly following invasion of Ukraine; (6) Energy security and transition to renewable sources; (7) Climate change mitigation and adaptation; (8) Digital transformation and technological competitiveness; (9) Aging populations and welfare state sustainability; (10) Euroscepticism and nationalist movements; (11) Institutional reform to improve efficiency and democratic legitimacy; (12) Defining EU's global role in a multipolar world; (13) Recovery from COVID-19 pandemic; (14) Managing relationship with post-Brexit UK; (15) Balancing further integration with respect for national sovereignty."
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
                  <li><Link href="/practice-tests/unit9" className="text-secondary hover:text-accent">Unit 9 Practice Test</Link></li>
                  <li><Link href="/dbq-practice/unit9" className="text-secondary hover:text-accent">Cold War DBQ Practice</Link></li>
                  <li><Link href="/short-answer/unit9" className="text-secondary hover:text-accent">Short Answer Questions</Link></li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">External Resources</h3>
                <ul className="space-y-2">
                  <li><a href="https://www.nato.int/cps/en/natohq/declassified_139339.htm" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">NATO: History of the Cold War</a></li>
                  <li><a href="https://europa.eu/european-union/about-eu/history_en" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">European Union: History and Timeline</a></li>
                  <li><a href="https://www.wilsoncenter.org/program/cold-war-international-history-project" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Wilson Center: Cold War International History Project</a></li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">Video Lectures</h3>
                <ul className="space-y-2">
                  <li><a href="https://www.youtube.com/watch?v=EsBz-qxI7Go" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">The Cold War, Explained</a></li>
                  <li><a href="https://www.youtube.com/watch?v=xzWL2XPe2KU" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">The European Union Explained</a></li>
                  <li><a href="https://www.youtube.com/watch?v=JU4rcFKBOcE" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">The Fall of the Berlin Wall</a></li>
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
              <Link href="/units/8" className="btn btn-primary">
                Previous: Unit 8 - 20th-Century Global Conflicts
              </Link>
              
              <Link href="/practice" className="btn btn-primary">
                Next: Practice Materials
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
