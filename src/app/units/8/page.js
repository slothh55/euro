'use client';

import { useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Timeline from '../../../components/Timeline';
import Flashcard from '../../../components/Flashcard';
import Quiz from '../../../components/Quiz';
import Link from 'next/link';

export default function Unit8Page() {
  const [activeTab, setActiveTab] = useState('overview');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const worldWarEvents = [
    {
      year: '1914 June 28',
      title: 'Assassination of Archduke Franz Ferdinand',
      description: 'Heir to the Austro-Hungarian throne assassinated in Sarajevo by Serbian nationalist Gavrilo Princip.',
      significance: 'Triggered the July Crisis that led to the outbreak of World War I.'
    },
    {
      year: '1914 July-August',
      title: 'July Crisis and Outbreak of War',
      description: 'Austria-Hungary declared war on Serbia, triggering alliance systems across Europe.',
      significance: 'Transformed a regional conflict into a global war through alliance obligations.'
    },
    {
      year: '1914 September',
      title: 'First Battle of the Marne',
      description: 'Allied forces halted German advance toward Paris.',
      significance: 'Ended German hopes for a quick victory and led to four years of trench warfare on the Western Front.'
    },
    {
      year: '1915',
      title: 'Italy Enters the War',
      description: 'Italy joined the Allies after the secret Treaty of London promised territorial gains.',
      significance: 'Opened a new front against Austria-Hungary in the Alps.'
    },
    {
      year: '1915-1916',
      title: 'Gallipoli Campaign',
      description: 'Failed Allied attempt to capture Constantinople and secure a sea route to Russia.',
      significance: 'Resulted in over 250,000 casualties on each side and boosted Turkish nationalism.'
    },
    {
      year: '1916',
      title: 'Battle of Verdun and the Somme',
      description: 'Massive battles of attrition on the Western Front.',
      significance: 'Combined casualties exceeded one million, symbolizing the war\'s unprecedented destructiveness.'
    },
    {
      year: '1917 February',
      title: 'Russian Revolution Begins',
      description: 'Tsar Nicholas II abdicated following mass protests and military mutinies.',
      significance: 'Established a Provisional Government that continued Russia\'s participation in the war.'
    },
    {
      year: '1917 April',
      title: 'United States Enters the War',
      description: 'U.S. declared war on Germany following unrestricted submarine warfare and the Zimmermann Telegram.',
      significance: 'Brought fresh troops and resources to the Allied side, tipping the balance of power.'
    },
    {
      year: '1917 November',
      title: 'Bolshevik Revolution',
      description: 'Lenin and the Bolsheviks seized power in Russia.',
      significance: 'Led to Russia\'s withdrawal from the war and establishment of the world\'s first communist state.'
    },
    {
      year: '1918 March',
      title: 'Treaty of Brest-Litovsk',
      description: 'Russia signed a separate peace with Germany, ceding vast territories.',
      significance: 'Allowed Germany to focus on the Western Front but imposed harsh terms on Russia.'
    },
    {
      year: '1918 Spring',
      title: 'German Spring Offensive',
      description: 'Germany\'s last major offensive on the Western Front.',
      significance: 'Initial success followed by exhaustion of German forces as American troops arrived in large numbers.'
    },
    {
      year: '1918 November 11',
      title: 'Armistice',
      description: 'Germany agreed to cease hostilities and withdraw from occupied territories.',
      significance: 'Ended fighting in World War I, though a formal peace treaty would take months to negotiate.'
    },
    {
      year: '1919 June 28',
      title: 'Treaty of Versailles',
      description: 'Peace treaty signed between the Allies and Germany.',
      significance: 'Imposed harsh terms on Germany, including war guilt clause, reparations, territorial losses, and military restrictions.'
    },
    {
      year: '1922',
      title: 'Mussolini\'s March on Rome',
      description: 'Fascists seized power in Italy under Benito Mussolini.',
      significance: 'Established the first fascist regime in Europe.'
    },
    {
      year: '1929',
      title: 'Wall Street Crash',
      description: 'Stock market crash in the United States triggered global economic crisis.',
      significance: 'Led to the Great Depression, contributing to political instability and the rise of extremist movements.'
    },
    {
      year: '1933',
      title: 'Hitler Appointed Chancellor',
      description: 'Adolf Hitler became Chancellor of Germany.',
      significance: 'Began Nazi consolidation of power and transformation of Germany into a totalitarian state.'
    },
    {
      year: '1935-1936',
      title: 'Italian Invasion of Ethiopia',
      description: 'Fascist Italy conquered one of Africa\'s last independent states.',
      significance: 'Demonstrated the weakness of the League of Nations and emboldened other aggressive powers.'
    },
    {
      year: '1936-1939',
      title: 'Spanish Civil War',
      description: 'Conflict between Republican government and Nationalist rebels led by Francisco Franco.',
      significance: 'Served as a testing ground for weapons and tactics later used in World War II, with Germany and Italy supporting the Nationalists and the Soviet Union supporting the Republicans.'
    },
    {
      year: '1938 March',
      title: 'Anschluss with Austria',
      description: 'Nazi Germany annexed Austria.',
      significance: 'First major step in Hitler\'s expansionist foreign policy.'
    },
    {
      year: '1938 September',
      title: 'Munich Agreement',
      description: 'Britain and France agreed to German annexation of the Sudetenland from Czechoslovakia.',
      significance: 'Epitomized the policy of appeasement and abandoned Czechoslovakia to Nazi aggression.'
    },
    {
      year: '1939 March',
      title: 'German Occupation of Czechoslovakia',
      description: 'Germany seized the remainder of Czech lands, violating the Munich Agreement.',
      significance: 'Ended Western appeasement policy and led to guarantees for Poland.'
    },
    {
      year: '1939 August 23',
      title: 'Nazi-Soviet Pact',
      description: 'Germany and the Soviet Union signed a non-aggression pact with secret protocols dividing Eastern Europe.',
      significance: 'Removed the threat of a two-front war for Germany and paved the way for the invasion of Poland.'
    },
    {
      year: '1939 September 1',
      title: 'German Invasion of Poland',
      description: 'Germany invaded Poland using Blitzkrieg tactics.',
      significance: 'Triggered British and French declarations of war, beginning World War II in Europe.'
    },
    {
      year: '1940 May-June',
      title: 'Fall of France',
      description: 'German forces defeated and occupied France, with a collaborationist regime established in the south.',
      significance: 'Left Britain standing alone against Nazi Germany in Western Europe.'
    },
    {
      year: '1940 July-October',
      title: 'Battle of Britain',
      description: 'Air battle between the Royal Air Force and German Luftwaffe over British skies.',
      significance: 'British victory prevented German invasion and was the first major defeat for Nazi Germany.'
    },
    {
      year: '1941 June 22',
      title: 'Operation Barbarossa',
      description: 'Germany invaded the Soviet Union in the largest military operation in history.',
      significance: 'Opened the Eastern Front, which would ultimately claim the most casualties of the war.'
    },
    {
      year: '1941 December 7',
      title: 'Pearl Harbor Attack',
      description: 'Japan attacked the U.S. naval base at Pearl Harbor, Hawaii.',
      significance: 'Brought the United States into World War II against both Japan and Germany.'
    },
    {
      year: '1942-1943',
      title: 'Battle of Stalingrad',
      description: 'Massive Soviet victory against German forces in a brutal urban battle.',
      significance: 'Marked the turning point on the Eastern Front and the beginning of the Soviet counteroffensive.'
    },
    {
      year: '1944 June 6',
      title: 'D-Day Landings',
      description: 'Allied forces landed in Normandy, France, opening the Western Front.',
      significance: 'Largest amphibious invasion in history, beginning the liberation of Western Europe.'
    },
    {
      year: '1945 April 30',
      title: 'Hitler\'s Suicide',
      description: 'Adolf Hitler committed suicide in his Berlin bunker as Soviet forces approached.',
      significance: 'Symbolized the imminent defeat of Nazi Germany.'
    },
    {
      year: '1945 May 8',
      title: 'V-E Day',
      description: 'Nazi Germany surrendered unconditionally to the Allies.',
      significance: 'Ended World War II in Europe.'
    },
    {
      year: '1945 August 6 & 9',
      title: 'Atomic Bombings of Hiroshima and Nagasaki',
      description: 'United States dropped atomic bombs on two Japanese cities.',
      significance: 'Led to Japan\'s surrender and demonstrated the devastating power of nuclear weapons.'
    },
    {
      year: '1945 September 2',
      title: 'Japanese Surrender',
      description: 'Japan formally surrendered to the Allies.',
      significance: 'Ended World War II in the Pacific and the war as a whole.'
    }
  ];
  
  const quizQuestions = [
    {
      question: 'Which of the following was NOT a major cause of World War I?',
      options: [
        'Militarism and the arms race between European powers',
        'The system of alliances that divided Europe into opposing blocs',
        'Nationalist tensions, particularly in the Balkans',
        'The Great Depression and economic collapse'
      ],
      correctAnswer: 3,
      explanation: 'The Great Depression was not a cause of World War I, as it occurred a decade after the war ended, beginning with the Wall Street Crash of 1929. The main causes of World War I included militarism and the arms race between European powers, the system of alliances that divided Europe into opposing blocs (Triple Alliance and Triple Entente), imperial competition for colonies and markets, nationalist tensions (particularly in the Balkans), and the assassination of Archduke Franz Ferdinand as the immediate trigger. The Great Depression was, however, a significant factor in the lead-up to World War II, as it contributed to political instability and the rise of extremist movements like Nazism in Germany.'
    },
    {
      question: 'The Treaty of Versailles (1919) included all of the following provisions EXCEPT:',
      options: [
        'German territorial losses, including Alsace-Lorraine to France',
        'Limitations on the size and capability of the German military',
        'The "war guilt clause" making Germany accept responsibility for the war',
        'The division of Germany into occupation zones controlled by the Allies'
      ],
      correctAnswer: 3,
      explanation: 'The Treaty of Versailles did not include the division of Germany into occupation zones controlled by the Allies. This occurred after World War II, not World War I. The Treaty of Versailles did include significant German territorial losses (Alsace-Lorraine to France, parts of Prussia to Poland, all colonies), severe limitations on the German military (army limited to 100,000 men, no air force, minimal navy), the "war guilt clause" (Article 231) making Germany accept responsibility for the war, and heavy reparations payments. Germany remained a unified country after World War I, though demilitarized in the Rhineland. The division into occupation zones occurred in 1945 following Germany\'s defeat in World War II.'
    },
    {
      question: 'Which of the following best describes the policy of appeasement pursued by Britain and France in the 1930s?',
      options: [
        'A strategy of making concessions to aggressive powers to avoid war',
        'A military alliance system designed to contain Nazi Germany',
        'Economic sanctions imposed against fascist regimes',
        'Secret rearmament in violation of the Versailles Treaty'
      ],
      correctAnswer: 0,
      explanation: 'Appeasement was a strategy of making concessions to aggressive powers (particularly Nazi Germany) to avoid war. British Prime Minister Neville Chamberlain was the policy\'s primary advocate, believing that Hitler\'s demands were limited and reasonable. The Munich Agreement of 1938, which allowed Germany to annex the Sudetenland from Czechoslovakia, exemplified this approach. Appeasement was based on several factors: the trauma of World War I and desire to avoid another conflict, unpreparedness for war, sympathy for Germany\'s grievances against Versailles, and fear of communism. The policy ultimately failed as Hitler\'s ambitions proved unlimited, and his occupation of the remainder of Czechoslovakia in March 1939 demonstrated that concessions only encouraged further aggression.'
    },
    {
      question: 'The Holocaust was characterized by:',
      options: [
        'Spontaneous violence against Jews without central planning',
        'The systematic persecution and murder of European Jews by Nazi Germany',
        'Mass deportation of Jews to Palestine',
        'Forced labor programs without intentional mass killing'
      ],
      correctAnswer: 1,
      explanation: 'The Holocaust was characterized by the systematic persecution and murder of European Jews by Nazi Germany. It was not merely spontaneous violence but a state-organized genocide that evolved from persecution to mass murder. The Nazi regime implemented this through several phases: legal discrimination after 1933, escalating persecution, ghettoization following the invasion of Poland, mass shootings by Einsatzgruppen after the invasion of the Soviet Union, and finally the "Final Solution"—the systematic murder of Jews in death camps like Auschwitz-Birkenau, Treblinka, and others. Approximately six million Jews were killed, along with millions of others including Roma, disabled people, Soviet prisoners of war, Polish civilians, and political opponents. The Holocaust represents an unprecedented attempt to eliminate an entire people through industrial methods of mass murder.'
    },
    {
      question: 'Which development had the most significant impact on the outcome of World War II?',
      options: [
        'The entry of the United States into the war following Pearl Harbor',
        'The Battle of Britain preventing German invasion of the UK',
        'The Nazi-Soviet Pact allowing Germany to invade Poland',
        'The Spanish Civil War providing a testing ground for weapons'
      ],
      correctAnswer: 0,
      explanation: 'The entry of the United States into World War II following the Japanese attack on Pearl Harbor (December 7, 1941) had the most significant impact on the outcome of the war. While all the listed events were important, U.S. entry transformed the conflict by bringing enormous industrial capacity, manpower, and resources to the Allied side. American industrial production was crucial for supplying not only U.S. forces but also other Allied nations through programs like Lend-Lease. The United States produced more military equipment than all Axis powers combined. Additionally, American forces were essential in the Pacific War against Japan, the North African and Italian campaigns, and the liberation of Western Europe following D-Day. Without U.S. involvement, the Allies would have struggled to defeat both Nazi Germany and Imperial Japan.'
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Unit Header */}
        <section className="bg-unit8-color text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Unit 8: 20th-Century Global Conflicts</h1>
            <p className="text-xl mb-4">c. 1914 to c. 1945</p>
            <p className="text-lg">
              Explore the causes, events, and consequences of the two world wars that transformed Europe and the global order.
            </p>
          </div>
        </section>
        
        {/* Navigation Tabs */}
        <section className="bg-light-gray border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'overview' ? 'bg-white border-t-2 border-unit8-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('overview')}
              >
                Overview
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'key-topics' ? 'bg-white border-t-2 border-unit8-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('key-topics')}
              >
                Key Topics
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'timeline' ? 'bg-white border-t-2 border-unit8-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('timeline')}
              >
                Timeline
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'figures' ? 'bg-white border-t-2 border-unit8-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('figures')}
              >
                Key Figures
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'flashcards' ? 'bg-white border-t-2 border-unit8-color' : 'hover:bg-white'}`}
                onClick={() => handleTabChange('flashcards')}
              >
                Flashcards
              </button>
              <button 
                className={`px-4 py-3 font-medium ${activeTab === 'quiz' ? 'bg-white border-t-2 border-unit8-color' : 'hover:bg-white'}`}
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
                  The first half of the 20th century witnessed unprecedented global conflicts that fundamentally transformed Europe and the world. Two world wars, separated by just two decades, claimed tens of millions of lives, redrew national boundaries, ended empires, and shifted the center of global power away from Europe. These conflicts were not merely military struggles but total wars that mobilized entire societies, economies, and ideologies.
                </p>
                <p className="mb-4">
                  World War I (1914-1918) erupted from a complex web of alliances, imperial rivalries, nationalism, and militarism that had developed in the late 19th century. What began with the assassination of Archduke Franz Ferdinand in Sarajevo quickly escalated into a global conflict as Europe's alliance systems pulled nation after nation into the maelstrom. The war introduced industrial-scale killing with new technologies like machine guns, poison gas, tanks, and aircraft. Four years of brutal fighting, particularly the grinding trench warfare on the Western Front, resulted in unprecedented casualties and destruction.
                </p>
                <p className="mb-4">
                  The war's aftermath proved equally consequential. The Russian Empire collapsed into revolution, giving birth to the world's first communist state. The Austro-Hungarian and Ottoman Empires disintegrated, creating new nations across Central Europe and the Middle East. The Treaty of Versailles imposed harsh terms on Germany, planting seeds of resentment that would later be exploited by Adolf Hitler. The United States emerged as a global power but retreated into isolationism, while the League of Nations proved too weak to maintain international peace.
                </p>
                <p className="mb-4">
                  The interwar period (1919-1939) was marked by political instability, economic crisis, and ideological extremism. The Great Depression that began in 1929 devastated economies worldwide, undermining faith in liberal democracy and capitalism. Totalitarian regimes arose in several countries, most notably fascist Italy under Mussolini, Nazi Germany under Hitler, and the Soviet Union under Stalin. These regimes mobilized mass support through propaganda, terror, and promises of national renewal or revolutionary transformation.
                </p>
                <p className="mb-4">
                  World War II (1939-1945) emerged from this volatile context. Hitler's aggressive expansionism, initially appeased by Britain and France, led to the invasion of Poland in September 1939. The war quickly expanded as Germany conquered much of Europe, while its ally Japan pursued conquest in Asia and the Pacific. The entry of the Soviet Union (following Hitler's invasion in 1941) and the United States (after Pearl Harbor) transformed the conflict into a truly global war between the Allies and the Axis powers.
                </p>
                <p className="mb-4">
                  World War II was even more destructive than its predecessor, with civilian populations deliberately targeted through strategic bombing, occupation policies, and genocide. The Holocaust—Nazi Germany's systematic murder of six million Jews and millions of others—represented an unprecedented crime against humanity. The war ended with the defeat of the Axis powers, but at enormous cost: an estimated 70-85 million deaths worldwide, devastated cities and economies across Europe and Asia, and a fundamentally altered global order.
                </p>
                <p className="mb-4">
                  The aftermath of World War II saw Europe divided between Western and Soviet spheres of influence, setting the stage for the Cold War. European colonial empires began to unravel as independence movements gained strength. International institutions like the United Nations were established to prevent future conflicts. The development and use of atomic weapons introduced the specter of nuclear annihilation. These legacies of the 20th century's global conflicts continue to shape our world today.
                </p>
                
                <h3 className="text-2xl font-bold mt-8 mb-4">Key Developments</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Outbreak and course of World War I (1914-1918)</li>
                  <li>Russian Revolutions of 1917 and the establishment of the Soviet Union</li>
                  <li>Paris Peace Conference and the Treaty of Versailles (1919)</li>
                  <li>Rise of fascism in Italy and Nazism in Germany</li>
                  <li>Great Depression and its global economic and political impacts</li>
                  <li>Outbreak and course of World War II (1939-1945)</li>
                  <li>The Holocaust and other war crimes</li>
                  <li>Technological developments in warfare</li>
                  <li>Social and cultural impacts of total war</li>
                  <li>Postwar settlements and the emergence of the Cold War</li>
                </ul>
              </div>
            )}
            
            {/* Key Topics Tab */}
            {activeTab === 'key-topics' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Key Topics</h2>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">World War I: Causes and Outbreak</h3>
                  <p className="mb-4">
                    World War I emerged from a complex interplay of long-term and immediate causes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Alliance Systems</strong>: Europe was divided into two opposing blocs:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Triple Alliance (later Central Powers): Germany, Austria-Hungary, and Italy (though Italy joined the Allies in 1915)</li>
                        <li>Triple Entente (later Allied Powers): Britain, France, and Russia</li>
                        <li>These alliances, intended to maintain balance of power, instead created a situation where a local conflict could rapidly escalate</li>
                      </ul>
                    </li>
                    <li><strong>Militarism and Arms Race</strong>: European powers engaged in competitive military buildups:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Anglo-German naval rivalry centered on dreadnought battleships</li>
                        <li>Continental powers expanded armies through conscription</li>
                        <li>Military planning became rigid and offensive-oriented (e.g., Germany's Schlieffen Plan)</li>
                        <li>Military leaders gained influence in policymaking</li>
                      </ul>
                    </li>
                    <li><strong>Imperialism</strong>: Competition for colonies created tensions:
                      <ul className="list-disc pl-6 mt-2">
                        <li>European powers sought markets, resources, and prestige through colonial acquisitions</li>
                        <li>Moroccan Crises (1905, 1911) between Germany and France</li>
                        <li>Balkan Wars (1912-1913) reduced Ottoman territory and increased tensions</li>
                      </ul>
                    </li>
                    <li><strong>Nationalism</strong>: National rivalries and aspirations intensified:
                      <ul className="list-disc pl-6 mt-2">
                        <li>French desire to recover Alsace-Lorraine, lost to Germany in 1871</li>
                        <li>Pan-Slavism and Russian support for Balkan Slavs against Austria-Hungary</li>
                        <li>South Slavic nationalism threatening Austro-Hungarian Empire</li>
                        <li>Nationalist press and public opinion often favored aggressive policies</li>
                      </ul>
                    </li>
                    <li><strong>July Crisis (1914)</strong>: The assassination triggered a chain reaction:
                      <ul className="list-disc pl-6 mt-2">
                        <li>June 28: Archduke Franz Ferdinand assassinated in Sarajevo by Serbian nationalist Gavrilo Princip</li>
                        <li>July 23: Austria-Hungary issued ultimatum to Serbia</li>
                        <li>July 28: Austria-Hungary declared war on Serbia after receiving unsatisfactory response</li>
                        <li>July 30: Russia began mobilization to support Serbia</li>
                        <li>August 1: Germany declared war on Russia</li>
                        <li>August 3: Germany declared war on France and invaded Belgium</li>
                        <li>August 4: Britain declared war on Germany in response to violation of Belgian neutrality</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    The rapid escalation from a local assassination to a continental war demonstrated how the alliance systems, military planning, and nationalist tensions had created a highly volatile international situation. What many expected to be a short, decisive conflict would instead become a prolonged global struggle with unprecedented casualties and far-reaching consequences.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">World War I: Course of the Conflict</h3>
                  <p className="mb-4">
                    World War I developed into a global conflict fought across multiple fronts with new technologies and strategies:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Western Front</strong>: The main theater of war in France and Belgium:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Initial German advance through Belgium halted at the First Battle of the Marne (September 1914)</li>
                        <li>Trench warfare developed as both sides dug in, creating a static front line from the Swiss border to the North Sea</li>
                        <li>Major battles of attrition included Verdun and the Somme (1916), with hundreds of thousands of casualties for minimal territorial gains</li>
                        <li>New weapons included machine guns, poison gas, tanks, and aircraft</li>
                        <li>American entry in 1917 brought fresh troops and resources to the Allied side</li>
                        <li>Final Allied offensive in 1918 forced Germany to seek armistice</li>
                      </ul>
                    </li>
                    <li><strong>Eastern Front</strong>: Fighting between Russia and the Central Powers:
                      <ul className="list-disc pl-6 mt-2">
                        <li>More mobile warfare across larger territories than the Western Front</li>
                        <li>Russian initial advances into East Prussia repelled at Tannenberg (1914)</li>
                        <li>Central Powers gradually pushed back Russian forces</li>
                        <li>Russian Revolution (1917) led to Russia's withdrawal from the war</li>
                        <li>Treaty of Brest-Litovsk (March 1918) imposed harsh terms on Russia</li>
                      </ul>
                    </li>
                    <li><strong>Other Theaters</strong>: The war expanded globally:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Italian Front: Italy fought Austria-Hungary in the Alps after joining the Allies (1915)</li>
                        <li>Gallipoli Campaign (1915-1916): Failed Allied attempt to knock Ottoman Empire out of the war</li>
                        <li>Middle Eastern Campaigns: British advances against Ottoman forces in Palestine and Mesopotamia</li>
                        <li>African Campaigns: Allied forces captured German colonies</li>
                        <li>Naval War: British blockade of Germany, German submarine warfare, Battle of Jutland (1916)</li>
                      </ul>
                    </li>
                    <li><strong>Total War</strong>: The conflict mobilized entire societies:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Economic mobilization: Industries converted to war production</li>
                        <li>Government control expanded over economies and daily life</li>
                        <li>Women entered workforce in unprecedented numbers</li>
                        <li>Propaganda campaigns maintained morale and demonized enemies</li>
                        <li>Rationing and shortages affected civilian populations</li>
                      </ul>
                    </li>
                    <li><strong>End of the War</strong>: Germany's collapse led to armistice:
                      <ul className="list-disc pl-6 mt-2">
                        <li>German Spring Offensive (1918) achieved initial success but exhausted German forces</li>
                        <li>Allied counteroffensive with American reinforcements pushed Germans back</li>
                        <li>German allies (Bulgaria, Ottoman Empire, Austria-Hungary) surrendered</li>
                        <li>German naval mutiny and domestic unrest undermined war effort</li>
                        <li>Kaiser Wilhelm II abdicated as revolution threatened</li>
                        <li>Armistice signed on November 11, 1918, ending hostilities</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    The war's unprecedented scale and destructiveness shocked contemporaries. Approximately 9-10 million military personnel and 6-7 million civilians died. Millions more were wounded, including many with permanent disabilities. The economic costs were equally staggering, with massive government debts and destroyed infrastructure. Beyond these immediate impacts, the war fundamentally altered European society, politics, and culture, setting the stage for further upheavals in the interwar period.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Russian Revolution and Soviet Communism</h3>
                  <p className="mb-4">
                    The Russian Revolution transformed one of Europe's oldest monarchies into the world's first communist state:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Background</strong>: Russia faced multiple challenges before the revolution:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Autocratic tsarist system resistant to meaningful reform</li>
                        <li>Industrialization created urban working class with poor conditions</li>
                        <li>Peasant majority remained impoverished with limited land ownership</li>
                        <li>1905 Revolution forced limited concessions (October Manifesto, Duma)</li>
                        <li>World War I exposed military weaknesses and exacerbated economic problems</li>
                      </ul>
                    </li>
                    <li><strong>February Revolution (March 1917)</strong>: The first stage overthrew the monarchy:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Began with strikes and demonstrations in Petrograd (St. Petersburg)</li>
                        <li>Military units sided with protesters rather than suppressing them</li>
                        <li>Tsar Nicholas II abdicated, ending the 300-year Romanov dynasty</li>
                        <li>Provisional Government formed, sharing power with the Petrograd Soviet</li>
                        <li>Decision to continue the war proved fatally unpopular</li>
                      </ul>
                    </li>
                    <li><strong>Bolshevik Revolution (November 1917)</strong>: Lenin seized power:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Vladimir Lenin returned from exile with German assistance</li>
                        <li>Bolsheviks gained support with slogans of "Peace, Land, Bread" and "All Power to the Soviets"</li>
                        <li>Failed July Days uprising followed by Kornilov Affair increased Bolshevik support</li>
                        <li>October Revolution (November 7 by Western calendar) overthrew Provisional Government</li>
                        <li>Bolsheviks immediately sought peace with Germany and distributed land to peasants</li>
                      </ul>
                    </li>
                    <li><strong>Civil War (1918-1922)</strong>: Bolsheviks fought to maintain power:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Red Army (Bolsheviks) versus White forces (anti-Bolshevik coalition)</li>
                        <li>Foreign intervention by Allied powers supported White forces</li>
                        <li>"War Communism" imposed harsh economic measures to support Red Army</li>
                        <li>Red Terror targeted class enemies and counter-revolutionaries</li>
                        <li>Bolshevik victory by 1922 consolidated communist control</li>
                      </ul>
                    </li>
                    <li><strong>Formation of the Soviet Union</strong>: A new state emerged:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Union of Soviet Socialist Republics (USSR) formally established in 1922</li>
                        <li>New Economic Policy (1921) temporarily allowed limited market elements</li>
                        <li>Lenin's death (1924) led to power struggle won by Joseph Stalin</li>
                        <li>Stalin's "Socialism in One Country" replaced world revolution emphasis</li>
                        <li>Five-Year Plans and collectivization transformed economy</li>
                        <li>Great Purges (1936-1938) eliminated real and perceived opponents</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    The Russian Revolution represented a radical break with the past and established a new type of state based on Marxist-Leninist ideology. The Soviet Union became a totalitarian system under Stalin, with the Communist Party controlling all aspects of political, economic, and social life. The revolution's impact extended far beyond Russia's borders, inspiring communist movements worldwide and creating an ideological challenge to Western liberal democracy and capitalism. The Soviet Union would emerge from World War II as a superpower, setting the stage for the Cold War division of Europe.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Peace Settlements and the Interwar Order</h3>
                  <p className="mb-4">
                    The Paris Peace Conference of 1919 and subsequent treaties attempted to create a new international order:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Paris Peace Conference</strong>: Allied leaders gathered to shape the postwar world:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Dominated by the "Big Four": Woodrow Wilson (US), David Lloyd George (UK), Georges Clemenceau (France), and Vittorio Orlando (Italy)</li>
                        <li>Germany and other defeated powers excluded from negotiations</li>
                        <li>Wilson's Fourteen Points proposed open diplomacy, self-determination, and a League of Nations</li>
                        <li>France prioritized security against future German aggression</li>
                        <li>Britain sought balance of power and preservation of empire</li>
                      </ul>
                    </li>
                    <li><strong>Treaty of Versailles</strong>: The peace with Germany imposed harsh terms:
                      <ul className="list-disc pl-6 mt-2">
                        <li>War Guilt Clause (Article 231) assigned responsibility to Germany</li>
                        <li>Reparations set at 132 billion gold marks (later reduced)</li>
                        <li>Territorial losses: Alsace-Lorraine to France, West Prussia and Posen to Poland, all colonies</li>
                        <li>Military restrictions: army limited to 100,000 men, no air force, minimal navy, Rhineland demilitarized</li>
                        <li>Created conditions for German resentment later exploited by Hitler</li>
                      </ul>
                    </li>
                    <li><strong>Other Peace Treaties</strong>: Separate agreements with other defeated powers:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Treaty of Saint-Germain (1919) with Austria</li>
                        <li>Treaty of Trianon (1920) with Hungary</li>
                        <li>Treaty of Neuilly (1919) with Bulgaria</li>
                        <li>Treaty of Sèvres (1920) with Ottoman Empire, later replaced by Treaty of Lausanne (1923) with Turkey</li>
                        <li>These treaties dismantled the Austro-Hungarian and Ottoman Empires</li>
                      </ul>
                    </li>
                    <li><strong>New States and Boundaries</strong>: Europe's map was redrawn:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Independent Poland restored with access to the sea (Polish Corridor)</li>
                        <li>Czechoslovakia created from former Austrian territories</li>
                        <li>Yugoslavia formed as Kingdom of Serbs, Croats, and Slovenes</li>
                        <li>Baltic states (Estonia, Latvia, Lithuania) gained independence</li>
                        <li>Finland separated from Russia</li>
                        <li>New boundaries often created ethnic minorities within nation-states</li>
                      </ul>
                    </li>
                    <li><strong>League of Nations</strong>: New international organization established:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Founded to prevent future wars through collective security</li>
                        <li>Covenant included in all peace treaties</li>
                        <li>Permanent Court of International Justice established</li>
                        <li>Mandate system placed former German and Ottoman colonies under supervision</li>
                        <li>Weakened by absence of United States (Senate rejected membership)</li>
                        <li>Lacked independent military force to enforce decisions</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    The peace settlements created a fragile international order that would be severely tested in the coming decades. The principle of national self-determination, while applied in many cases, created new problems with ethnic minorities. Economic instability, particularly after the Great Depression, undermined political stability. The League of Nations proved too weak to address major challenges, especially as revisionist powers like Germany, Italy, and Japan began to challenge the status quo. By the 1930s, the postwar settlement was unraveling, setting the stage for another global conflict.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">The Great Depression and Political Extremism</h3>
                  <p className="mb-4">
                    The global economic crisis that began in 1929 had profound political consequences:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Origins of the Depression</strong>: Multiple factors contributed to the economic collapse:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Structural weaknesses in the international economy after World War I</li>
                        <li>Overproduction in agriculture and industry leading to falling prices</li>
                        <li>Stock market speculation and crash on Wall Street (October 1929)</li>
                        <li>Banking crises and collapse of credit</li>
                        <li>Protectionist policies (e.g., Smoot-Hawley Tariff) worsened international trade</li>
                        <li>Gold standard constraints limited monetary policy responses</li>
                      </ul>
                    </li>
                    <li><strong>Global Impact</strong>: The Depression affected countries worldwide:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Industrial production fell by approximately 40% across Western nations</li>
                        <li>International trade declined by more than 60%</li>
                        <li>Unemployment reached 25-30% in many countries</li>
                        <li>Germany particularly affected due to dependence on American loans</li>
                        <li>Agricultural prices collapsed, devastating rural economies</li>
                        <li>Social distress manifested in poverty, malnutrition, and homelessness</li>
                      </ul>
                    </li>
                    <li><strong>Political Responses</strong>: Governments adopted various approaches:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Initial orthodox responses (balanced budgets, deflation) deepened the crisis</li>
                        <li>Britain abandoned gold standard (1931) and pursued moderate interventions</li>
                        <li>France maintained gold standard longer, prolonging economic difficulties</li>
                        <li>United States implemented New Deal under Franklin Roosevelt</li>
                        <li>Scandinavian countries developed early welfare state measures</li>
                        <li>Authoritarian regimes in Germany and Italy pursued rearmament and public works</li>
                      </ul>
                    </li>
                    <li><strong>Rise of Fascism</strong>: Economic crisis fueled extremist movements:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Fascism offered nationalist alternative to both capitalism and communism</li>
                        <li>Mussolini had already established fascist regime in Italy (1922)</li>
                        <li>Nazi Party gained support in Germany as unemployment soared</li>
                        <li>Hitler appointed Chancellor in January 1933</li>
                        <li>Nazis quickly eliminated opposition and established totalitarian state</li>
                        <li>Fascist and authoritarian regimes emerged across Europe (Spain, Portugal, Austria, etc.)</li>
                      </ul>
                    </li>
                    <li><strong>Democratic Challenges</strong>: Established democracies faced pressures:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Coalition governments in many countries proved unstable</li>
                        <li>Extremist parties (both right and left) gained support</li>
                        <li>France experienced political polarization and riots</li>
                        <li>Britain maintained parliamentary democracy despite economic difficulties</li>
                        <li>United States expanded federal government role while preserving democratic institutions</li>
                        <li>Popular Front governments in France and Spain attempted to unite democratic forces</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    The Great Depression represented a fundamental challenge to liberal democracy and market capitalism. The economic crisis undermined faith in existing institutions and created openings for radical alternatives. While some democracies adapted through greater state intervention in the economy, others succumbed to authoritarian solutions. The Nazi regime in Germany, in particular, emerged directly from the economic and political crisis, with Hitler promising national renewal and economic recovery. The Depression thus contributed significantly to the international tensions that would lead to World War II.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Fascism and Totalitarianism</h3>
                  <p className="mb-4">
                    Totalitarian regimes emerged as a new form of dictatorship in the interwar period:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Fascist Italy</strong>: The first fascist regime established by Mussolini:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Benito Mussolini founded Fascist movement after World War I</li>
                        <li>March on Rome (1922) led to Mussolini's appointment as Prime Minister</li>
                        <li>Gradually eliminated democratic institutions and opposition</li>
                        <li>Corporate state organized economy into employer-worker syndicates</li>
                        <li>Emphasized nationalism, militarism, and the cult of the leader (Il Duce)</li>
                        <li>Less systematically repressive than Nazi Germany or Stalinist Soviet Union</li>
                      </ul>
                    </li>
                    <li><strong>Nazi Germany</strong>: Hitler established the most destructive totalitarian regime:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Adolf Hitler appointed Chancellor in January 1933</li>
                        <li>Reichstag Fire used to suspend civil liberties</li>
                        <li>Enabling Act (March 1933) gave Hitler dictatorial powers</li>
                        <li>One-party state established with all opposition banned</li>
                        <li>Gleichschaltung (coordination) brought all institutions under Nazi control</li>
                        <li>Racial ideology central to Nazi worldview, with antisemitism as core element</li>
                        <li>Persecution of Jews intensified from discrimination to genocide</li>
                        <li>Extensive propaganda and mass rallies mobilized popular support</li>
                      </ul>
                    </li>
                    <li><strong>Stalinist Soviet Union</strong>: Communist totalitarianism under Stalin:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Joseph Stalin consolidated power after Lenin's death</li>
                        <li>Five-Year Plans forced rapid industrialization</li>
                        <li>Collectivization of agriculture led to millions of deaths, particularly in Ukraine (Holodomor)</li>
                        <li>Great Purges (1936-1938) eliminated real and perceived opponents</li>
                        <li>Gulag system of labor camps imprisoned millions</li>
                        <li>Socialist Realism imposed as official artistic doctrine</li>
                        <li>Cult of personality presented Stalin as infallible leader</li>
                      </ul>
                    </li>
                    <li><strong>Common Features of Totalitarianism</strong>: Despite ideological differences, shared characteristics:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Single-party rule with charismatic leader</li>
                        <li>Official ideology claiming to represent historical truth</li>
                        <li>State control or direction of economy</li>
                        <li>Monopoly on mass communication and propaganda</li>
                        <li>Terror and surveillance to eliminate opposition</li>
                        <li>Mobilization of population through mass organizations</li>
                        <li>Rejection of individual rights in favor of collective goals</li>
                      </ul>
                    </li>
                    <li><strong>Other Authoritarian Regimes</strong>: Less totalitarian dictatorships also emerged:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Francisco Franco established dictatorship in Spain after Civil War (1936-1939)</li>
                        <li>António Salazar's Estado Novo in Portugal</li>
                        <li>Miklós Horthy's regime in Hungary</li>
                        <li>Military and royal dictatorships in Eastern Europe</li>
                        <li>These regimes were typically conservative, nationalist, and anti-communist</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    Totalitarian regimes represented a new phenomenon in European politics, using modern technology and mass mobilization to achieve unprecedented control over society. They rejected liberal democracy, individual rights, and international cooperation in favor of national or class-based collectivism. The ideological conflict between fascism, communism, and democracy would shape the politics of the 20th century, with World War II representing both a military struggle and an ideological contest. The Holocaust and other mass atrocities demonstrated the human cost of totalitarian rule, while the defeat of Nazi Germany and its allies in 1945 discredited fascism but left communism as a continuing alternative to Western liberal democracy.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">World War II: Causes and Outbreak</h3>
                  <p className="mb-4">
                    World War II emerged from the unresolved issues of World War I and the crises of the interwar period:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Treaty of Versailles Grievances</strong>: Germany sought to overturn the postwar settlement:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Territorial losses, particularly in the east, fueled revanchism</li>
                        <li>Military restrictions prevented Germany from defending its interests</li>
                        <li>War guilt clause and reparations created sense of injustice</li>
                        <li>Hitler exploited these grievances to gain popular support</li>
                      </ul>
                    </li>
                    <li><strong>Failure of Collective Security</strong>: International institutions proved ineffective:
                      <ul className="list-disc pl-6 mt-2">
                        <li>League of Nations lacked enforcement mechanisms</li>
                        <li>United States retreated into isolationism</li>
                        <li>Disarmament efforts failed to reduce military capabilities</li>
                        <li>Japan invaded Manchuria (1931) with minimal international response</li>
                        <li>Italy invaded Ethiopia (1935) despite League of Nations condemnation</li>
                      </ul>
                    </li>
                    <li><strong>Nazi Aggression</strong>: Hitler pursued expansionist foreign policy:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Rearmament began secretly, then openly after 1935</li>
                        <li>Remilitarization of Rhineland (1936) violated Versailles and Locarno Treaties</li>
                        <li>Anschluss with Austria (March 1938) incorporated Austria into Third Reich</li>
                        <li>Munich Agreement (September 1938) ceded Sudetenland from Czechoslovakia to Germany</li>
                        <li>Occupation of remainder of Czech lands (March 1939) violated Munich Agreement</li>
                        <li>Nazi-Soviet Pact (August 1939) included secret protocols dividing Eastern Europe</li>
                      </ul>
                    </li>
                    <li><strong>Policy of Appeasement</strong>: Western powers sought to avoid war:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Britain and France reluctant to risk another devastating conflict</li>
                        <li>Military unpreparedness limited options</li>
                        <li>Some sympathy for German grievances against Versailles</li>
                        <li>Fear of communism led some to see Nazi Germany as bulwark against Soviet Union</li>
                        <li>Munich Agreement represented peak of appeasement policy</li>
                        <li>Policy shifted after Prague occupation, with guarantees to Poland</li>
                      </ul>
                    </li>
                    <li><strong>Outbreak of War</strong>: German invasion of Poland triggered global conflict:
                      <ul className="list-disc pl-6 mt-2">
                        <li>September 1, 1939: Germany invaded Poland using Blitzkrieg tactics</li>
                        <li>September 3: Britain and France declared war on Germany</li>
                        <li>September 17: Soviet Union invaded eastern Poland</li>
                        <li>Poland quickly defeated and partitioned between Germany and Soviet Union</li>
                        <li>"Phony War" followed in Western Europe with limited military operations</li>
                        <li>April 1940: Germany invaded Denmark and Norway</li>
                        <li>May-June 1940: Germany conquered Netherlands, Belgium, and France</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    The outbreak of World War II represented the failure of the post-World War I international order. The Versailles settlement had created grievances without providing mechanisms to address them peacefully. Economic crisis undermined political stability and empowered extremist movements. The League of Nations proved unable to prevent aggression by revisionist powers. Appeasement, while motivated by understandable desire to avoid another war, ultimately encouraged Hitler to make increasingly ambitious demands. By September 1939, the combination of Nazi aggression and Western guarantees to Poland made war inevitable. What began as a European conflict would soon expand to become a truly global war with the entry of the Soviet Union and the United States.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">World War II: Course of the Conflict</h3>
                  <p className="mb-4">
                    World War II was fought across multiple theaters with unprecedented scale and destructiveness:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>European Theater (1939-1942)</strong>: Initial Axis dominance:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Blitzkrieg tactics brought rapid German victories in Poland, Scandinavia, and Western Europe</li>
                        <li>Battle of Britain (1940) prevented German invasion of UK</li>
                        <li>North African campaign pitted German and Italian forces against British</li>
                        <li>Operation Barbarossa (June 1941): Germany invaded Soviet Union</li>
                        <li>Initial German successes in Russia followed by Soviet resistance at Moscow</li>
                        <li>United States entered war after Pearl Harbor (December 1941)</li>
                      </ul>
                    </li>
                    <li><strong>European Theater (1942-1945)</strong>: Allied counteroffensives:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Battle of Stalingrad (1942-1943) marked turning point on Eastern Front</li>
                        <li>Allied victory in North Africa followed by invasion of Sicily and Italy</li>
                        <li>Strategic bombing campaign against German cities and industry</li>
                        <li>D-Day landings (June 6, 1944) opened Western Front in France</li>
                        <li>Soviet offensives pushed toward Germany from the east</li>
                        <li>Germany surrounded, Hitler committed suicide (April 30, 1945)</li>
                        <li>German unconditional surrender (May 7-8, 1945)</li>
                      </ul>
                    </li>
                    <li><strong>Pacific Theater</strong>: War between Japan and the Allies:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Japan attacked Pearl Harbor and invaded European colonies in Southeast Asia</li>
                        <li>Initial Japanese victories established "Greater East Asia Co-Prosperity Sphere"</li>
                        <li>Battle of Midway (June 1942) turned tide in favor of United States</li>
                        <li>"Island hopping" strategy gradually recaptured Pacific territories</li>
                        <li>Atomic bombings of Hiroshima and Nagasaki (August 1945)</li>
                        <li>Japanese surrender (September 2, 1945) ended the war</li>
                      </ul>
                    </li>
                    <li><strong>Total War and Civilian Impact</strong>: War affected entire populations:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Strategic bombing targeted cities and civilian infrastructure</li>
                        <li>Occupation policies exploited conquered territories for resources and labor</li>
                        <li>Resistance movements fought against occupation in many countries</li>
                        <li>Forced labor brought millions of workers to Germany</li>
                        <li>Rationing and economic controls affected daily life</li>
                        <li>Women mobilized for war production and auxiliary services</li>
                      </ul>
                    </li>
                    <li><strong>The Holocaust</strong>: Nazi Germany's genocide against European Jews:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Persecution escalated from discrimination to mass murder</li>
                        <li>Einsatzgruppen (mobile killing units) conducted mass shootings in occupied Soviet territories</li>
                        <li>Wannsee Conference (January 1942) coordinated "Final Solution"</li>
                        <li>Death camps established primarily in occupied Poland</li>
                        <li>Approximately six million Jews murdered, along with Roma, disabled people, and others</li>
                        <li>Represented unprecedented industrialized genocide</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    World War II was the deadliest conflict in human history, with total casualties estimated at 70-85 million people. Military deaths reached approximately 21-25 million, while civilian deaths—from bombing, occupation policies, genocide, disease, and famine—reached 50-55 million. The war transformed the global order, ending European dominance in world affairs and establishing the United States and Soviet Union as superpowers. It discredited fascism and imperialism while strengthening both democratic and communist ideologies. The development and use of atomic weapons introduced the threat of nuclear annihilation. These consequences would shape international relations throughout the Cold War and beyond.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Postwar Settlements and the Cold War</h3>
                  <p className="mb-4">
                    The aftermath of World War II established a new international order dominated by superpower competition:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Wartime Conferences</strong>: Allied leaders planned the postwar world:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Tehran Conference (1943): Initial discussions on postwar Europe</li>
                        <li>Yalta Conference (February 1945): Agreements on Germany, Poland, and United Nations</li>
                        <li>Potsdam Conference (July-August 1945): Final decisions on Germany and Eastern Europe</li>
                        <li>Growing tensions between Western Allies and Soviet Union evident</li>
                      </ul>
                    </li>
                    <li><strong>Occupation of Germany</strong>: Defeated Germany divided:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Four occupation zones controlled by US, USSR, Britain, and France</li>
                        <li>Berlin similarly divided despite location within Soviet zone</li>
                        <li>Denazification and demilitarization policies implemented</li>
                        <li>Nuremberg Trials prosecuted Nazi leaders for war crimes</li>
                        <li>Western zones gradually merged economically and politically</li>
                        <li>Division hardened into separate German states by 1949</li>
                      </ul>
                    </li>
                    <li><strong>Soviet Control of Eastern Europe</strong>: Communist regimes established:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Red Army presence enabled Soviet influence</li>
                        <li>Coalition governments gradually replaced by communist monopolies</li>
                        <li>Non-communist politicians eliminated or marginalized</li>
                        <li>Stalinist economic and political models imposed</li>
                        <li>Yugoslavia under Tito maintained independence from Moscow</li>
                        <li>Western powers unable or unwilling to prevent Soviet domination</li>
                      </ul>
                    </li>
                    <li><strong>Cold War Emergence</strong>: Former allies became adversaries:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Ideological conflict between communism and liberal democracy</li>
                        <li>Truman Doctrine (1947) pledged support for nations resisting communism</li>
                        <li>Marshall Plan provided economic aid to Western Europe</li>
                        <li>Berlin Blockade (1948-1949) and Airlift marked first major crisis</li>
                        <li>NATO (1949) and Warsaw Pact (1955) formalized military alliances</li>
                        <li>Nuclear arms race intensified with Soviet atomic bomb (1949)</li>
                      </ul>
                    </li>
                    <li><strong>New International Institutions</strong>: Frameworks for cooperation established:
                      <ul className="list-disc pl-6 mt-2">
                        <li>United Nations founded to maintain international peace and security</li>
                        <li>Bretton Woods system created International Monetary Fund and World Bank</li>
                        <li>General Agreement on Tariffs and Trade promoted international commerce</li>
                        <li>Universal Declaration of Human Rights established standards</li>
                        <li>European integration began with Coal and Steel Community (1951)</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    The postwar settlement created a divided Europe that would remain the central front of the Cold War for over four decades. The Iron Curtain, as Winston Churchill described it, separated Soviet-dominated Eastern Europe from the democratic West. Germany's division symbolized the broader European and global division between competing ideological systems. While avoiding direct military confrontation between the superpowers, the Cold War would be fought through proxy conflicts, arms races, and ideological competition worldwide. The legacy of World War II—including the Holocaust, the use of atomic weapons, and the discrediting of fascism—profoundly shaped political and cultural developments in postwar Europe. The war's unprecedented destruction also created opportunities for economic reconstruction and integration that would transform Western Europe into a zone of unprecedented prosperity and cooperation.
                  </p>
                </div>
              </div>
            )}
            
            {/* Timeline Tab */}
            {activeTab === 'timeline' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Timeline of Key Events</h2>
                <Timeline events={worldWarEvents} />
              </div>
            )}
            
            {/* Key Figures Tab */}
            {activeTab === 'figures' && (
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Key Figures</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Woodrow Wilson (1856-1924)</h3>
                    <p className="mb-2"><strong>Role:</strong> President of the United States (1913-1921)</p>
                    <p className="mb-2"><strong>Contributions:</strong> Led U.S. entry into World War I; proposed Fourteen Points as basis for peace; advocated for League of Nations; championed national self-determination.</p>
                    <p><strong>Significance:</strong> Attempted to create a new international order based on collective security and democratic principles; his vision partially implemented at Paris Peace Conference but undermined by U.S. Senate's rejection of League membership.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Vladimir Lenin (1870-1924)</h3>
                    <p className="mb-2"><strong>Role:</strong> Leader of Bolshevik Revolution and first head of Soviet government</p>
                    <p className="mb-2"><strong>Contributions:</strong> Developed theory of vanguard party; led October Revolution in 1917; established first communist state; implemented War Communism during Civil War; introduced New Economic Policy.</p>
                    <p><strong>Significance:</strong> Created world's first socialist state based on Marxist principles; established one-party dictatorship model later adopted by other communist regimes; his embalmed body became symbol of Soviet regime.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Adolf Hitler (1889-1945)</h3>
                    <p className="mb-2"><strong>Role:</strong> Leader of Nazi Party and dictator of Germany (1933-1945)</p>
                    <p className="mb-2"><strong>Contributions:</strong> Developed Nazi ideology combining extreme nationalism, antisemitism, and anti-communism; transformed Germany into totalitarian state; pursued aggressive foreign policy leading to World War II; ordered Holocaust.</p>
                    <p><strong>Significance:</strong> Responsible for most destructive war in history and unprecedented genocide; his defeat discredited fascism and extreme nationalism; became historical symbol of evil and totalitarianism.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Joseph Stalin (1878-1953)</h3>
                    <p className="mb-2"><strong>Role:</strong> Leader of Soviet Union (1924-1953)</p>
                    <p className="mb-2"><strong>Contributions:</strong> Consolidated power after Lenin's death; implemented Five-Year Plans and collectivization; conducted Great Purges; led Soviet Union during World War II; established communist regimes in Eastern Europe.</p>
                    <p><strong>Significance:</strong> Transformed Soviet Union into industrial and military superpower; created repressive totalitarian system; emerged from World War II as leader of expanded communist bloc; his policies shaped Cold War division of Europe.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Winston Churchill (1874-1965)</h3>
                    <p className="mb-2"><strong>Role:</strong> Prime Minister of United Kingdom (1940-1945, 1951-1955)</p>
                    <p className="mb-2"><strong>Contributions:</strong> Led Britain through darkest period of World War II; forged alliance with U.S. and Soviet Union; advocated for continued resistance to Nazi Germany; warned of Soviet expansion in "Iron Curtain" speech.</p>
                    <p><strong>Significance:</strong> Symbolized British resistance during Battle of Britain; helped shape Allied strategy and postwar planning; recognized early threat of Cold War division; championed European unity while maintaining British independence.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Benito Mussolini (1883-1945)</h3>
                    <p className="mb-2"><strong>Role:</strong> Founder of Fascism and dictator of Italy (1922-1943)</p>
                    <p className="mb-2"><strong>Contributions:</strong> Created first fascist movement and regime; developed corporate state model; pursued aggressive foreign policy including invasion of Ethiopia; allied with Nazi Germany in World War II.</p>
                    <p><strong>Significance:</strong> Established fascism as political model later adapted by others; his failures in World War II led to Allied invasion of Italy and his eventual execution by partisans; demonstrated limitations of fascist mobilization compared to other totalitarian systems.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Franklin D. Roosevelt (1882-1945)</h3>
                    <p className="mb-2"><strong>Role:</strong> President of the United States (1933-1945)</p>
                    <p className="mb-2"><strong>Contributions:</strong> Implemented New Deal to address Great Depression; led U.S. through most of World War II; established wartime alliance with Britain and Soviet Union; helped plan postwar international order.</p>
                    <p><strong>Significance:</strong> Transformed role of federal government in American society; mobilized U.S. industrial might as "arsenal of democracy"; shaped United Nations and Bretton Woods institutions; his death before war's end affected postwar developments.</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="text-xl font-bold mb-2">Charles de Gaulle (1890-1970)</h3>
                    <p className="mb-2"><strong>Role:</strong> Leader of Free French during World War II; later President of France (1959-1969)</p>
                    <p className="mb-2"><strong>Contributions:</strong> Refused to accept French surrender in 1940; established government-in-exile; maintained French sovereignty and great power status; later created Fifth Republic and pursued independent foreign policy.</p>
                    <p><strong>Significance:</strong> Symbolized French resistance and national pride during occupation; ensured France's position among victorious powers despite early defeat; his postwar policies emphasized French independence within Western alliance.</p>
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
                    front="What were the main causes of World War I?" 
                    back="The main causes of World War I included: (1) Alliance systems that divided Europe into opposing blocs (Triple Alliance vs. Triple Entente); (2) Militarism and arms races, particularly naval competition between Britain and Germany; (3) Imperial rivalries for colonies and markets; (4) Nationalism, including pan-Slavism and irredentist movements; (5) The assassination of Archduke Franz Ferdinand in Sarajevo as the immediate trigger. These factors created a situation where a local conflict rapidly escalated into a global war through alliance obligations and military mobilization plans."
                  />
                  
                  <Flashcard 
                    front="How did the Treaty of Versailles affect Germany?" 
                    back="The Treaty of Versailles (1919) imposed harsh terms on Germany: (1) War Guilt Clause (Article 231) assigned responsibility for the war; (2) Reparations initially set at 132 billion gold marks; (3) Territorial losses including Alsace-Lorraine to France, parts of Prussia to Poland, and all colonies; (4) Military restrictions limiting the army to 100,000 men, prohibiting an air force, and severely limiting the navy; (5) Rhineland demilitarization. These provisions created economic hardship and national humiliation that fueled resentment, undermined the Weimar Republic, and provided propaganda material for Hitler and the Nazi Party."
                  />
                  
                  <Flashcard 
                    front="What were the key features of totalitarianism in the interwar period?" 
                    back="Key features of totalitarianism included: (1) Single-party rule with a charismatic leader (Hitler, Stalin, Mussolini); (2) Official ideology claiming to represent historical truth (Nazism, Marxism-Leninism, Fascism); (3) State control or direction of the economy; (4) Monopoly on mass communication and extensive propaganda; (5) Terror and surveillance to eliminate opposition; (6) Mobilization of the population through mass organizations; (7) Rejection of individual rights in favor of collective goals. These features were most fully developed in Nazi Germany and the Stalinist Soviet Union, with Fascist Italy representing a less thoroughly totalitarian system."
                  />
                  
                  <Flashcard 
                    front="How did the Great Depression contribute to the rise of extremist movements?" 
                    back="The Great Depression contributed to extremism by: (1) Creating mass unemployment and economic insecurity that undermined faith in existing institutions; (2) Discrediting liberal capitalism and democratic governments that seemed unable to address the crisis; (3) Making radical solutions appealing to desperate populations; (4) Providing opportunities for extremist parties to gain support through promises of economic recovery and national renewal; (5) Particularly benefiting the Nazi Party in Germany, where economic collapse was especially severe due to dependence on American loans; (6) Intensifying class conflict that strengthened both far-right and communist movements; (7) Weakening international cooperation and encouraging nationalist economic policies."
                  />
                  
                  <Flashcard 
                    front="What was the policy of appeasement and why did it fail?" 
                    back="Appeasement was the policy of making concessions to aggressive powers (particularly Nazi Germany) to avoid war. Pursued primarily by Britain under Neville Chamberlain, it was based on: (1) The trauma of World War I and desire to avoid another conflict; (2) Military unpreparedness; (3) Some sympathy for Germany's grievances against Versailles; (4) Fear of communism. The policy failed because: (1) Hitler's ambitions were unlimited rather than specific and reasonable; (2) Each concession encouraged further demands rather than satisfaction; (3) It allowed Germany time to rearm; (4) The Munich Agreement sacrificed Czechoslovakia's defenses; (5) Hitler's occupation of the remainder of Czechoslovakia in March 1939 demonstrated that agreements would not be honored."
                  />
                  
                  <Flashcard 
                    front="How did the Russian Revolutions of 1917 transform Russia and impact Europe?" 
                    back="The Russian Revolutions transformed Russia by: (1) Overthrowing the 300-year Romanov dynasty (February Revolution); (2) Establishing the world's first communist state under Bolshevik leadership (October Revolution); (3) Leading to civil war and the creation of the Soviet Union; (4) Implementing state ownership of industry and collectivization of agriculture; (5) Creating a one-party dictatorship that evolved into Stalinist totalitarianism. The impact on Europe included: (1) Russia's withdrawal from World War I, allowing Germany to focus on the Western Front; (2) Inspiring communist movements and revolutions across Europe; (3) Creating fear of communism that strengthened right-wing movements; (4) Establishing an ideological challenge to liberal democracy and capitalism; (5) Setting the stage for the Cold War division of Europe after World War II."
                  />
                  
                  <Flashcard 
                    front="What were the major turning points of World War II?" 
                    back="Major turning points of World War II included: (1) Battle of Britain (1940) - prevented German invasion of UK and ensured Britain's continued resistance; (2) Operation Barbarossa (1941) - German invasion of Soviet Union opened Eastern Front where most casualties would occur; (3) Pearl Harbor (December 1941) - brought United States into the war, adding enormous industrial capacity to Allied side; (4) Battle of Stalingrad (1942-43) - Soviet victory marked turning point on Eastern Front; (5) Battle of Midway (1942) - U.S. victory over Japanese navy in Pacific; (6) North African Campaign (1942-43) - Allied victory secured Mediterranean; (7) D-Day landings (June 1944) - opened Western Front in France; (8) Atomic bombings of Hiroshima and Nagasaki (August 1945) - led to Japanese surrender and introduced nuclear warfare."
                  />
                  
                  <Flashcard 
                    front="How did World War II lead to the Cold War?" 
                    back="World War II led to the Cold War through: (1) The power vacuum in Europe created by Germany's defeat; (2) The emergence of the United States and Soviet Union as superpowers with competing ideologies; (3) Soviet occupation of Eastern Europe, justified as security buffer but seen by West as expansionism; (4) Disagreements at wartime conferences (Yalta, Potsdam) over Germany's future and self-determination in liberated areas; (5) Western alarm at communist takeovers in Eastern Europe; (6) Soviet concerns about Western intentions and capitalist encirclement; (7) The development of nuclear weapons, beginning with the U.S. atomic bomb; (8) The division of Germany into occupation zones that hardened into separate states; (9) Economic competition between Marshall Plan and Comecon; (10) Formation of opposing military alliances (NATO and Warsaw Pact)."
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
                  <li><Link href="/practice-tests/unit8" className="text-secondary hover:text-accent">Unit 8 Practice Test</Link></li>
                  <li><Link href="/dbq-practice/unit8" className="text-secondary hover:text-accent">World War II DBQ Practice</Link></li>
                  <li><Link href="/short-answer/unit8" className="text-secondary hover:text-accent">Short Answer Questions</Link></li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">External Resources</h3>
                <ul className="space-y-2">
                  <li><a href="https://www.khanacademy.org/humanities/world-history/euro-hist/world-war-i-tutorial/v/alliances-leading-to-world-war-i" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Khan Academy: World War I</a></li>
                  <li><a href="https://encyclopedia.ushmm.org/content/en/article/introduction-to-the-holocaust" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">USHMM: Introduction to the Holocaust</a></li>
                  <li><a href="https://www.iwm.org.uk/history/the-road-to-world-war-two" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Imperial War Museum: Road to World War II</a></li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">Video Lectures</h3>
                <ul className="space-y-2">
                  <li><a href="https://www.youtube.com/watch?v=Cd2ch4XV84s" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Crash Course: World War I</a></li>
                  <li><a href="https://www.youtube.com/watch?v=Q78COTwT7nE" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">Crash Course: World War II</a></li>
                  <li><a href="https://www.youtube.com/watch?v=sJ23-Pj516M" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent">AP European History Unit 8: 20th-Century Global Conflicts</a></li>
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
              <Link href="/units/7" className="btn btn-primary">
                Previous: Unit 7 - 19th-Century Perspectives and Political Developments
              </Link>
              
              <Link href="/units/9" className="btn btn-primary">
                Next: Unit 9 - Cold War and Contemporary Europe
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
