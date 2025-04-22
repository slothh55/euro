'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AIEssayGrader() {
  const [essayType, setEssayType] = useState('dbq'); // 'dbq', 'leq', 'saq'
  const [essayPrompt, setEssayPrompt] = useState('');
  const [studentResponse, setStudentResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [showPromptLibrary, setShowPromptLibrary] = useState(false);
  
  // Sample prompts for each essay type
  const promptLibrary = {
    dbq: [
      {
        title: "Renaissance and Reformation",
        prompt: "Analyze the cultural and intellectual developments in Europe from 1450 to 1600 that challenged traditional medieval thought and fostered the growth of a new worldview.",
        documents: [
          { title: "Excerpt from Pico della Mirandola's 'Oration on the Dignity of Man'", year: 1486 },
          { title: "Excerpt from Erasmus's 'In Praise of Folly'", year: 1511 },
          { title: "Excerpt from Luther's '95 Theses'", year: 1517 },
          { title: "Excerpt from Machiavelli's 'The Prince'", year: 1532 },
          { title: "Painting: School of Athens by Raphael", year: 1511 },
          { title: "Excerpt from Castiglione's 'The Book of the Courtier'", year: 1528 },
          { title: "Excerpt from Calvin's 'Institutes of the Christian Religion'", year: 1536 }
        ]
      },
      {
        title: "Absolutism and Constitutionalism",
        prompt: "Analyze the political, social, and economic factors that contributed to the development of absolutism in some European states and constitutionalism in others during the period 1648-1715.",
        documents: [
          { title: "Excerpt from Thomas Hobbes's 'Leviathan'", year: 1651 },
          { title: "Excerpt from Louis XIV's memoirs", year: 1670 },
          { title: "Painting: Louis XIV by Hyacinthe Rigaud", year: 1701 },
          { title: "Excerpt from John Locke's 'Second Treatise on Government'", year: 1689 },
          { title: "Excerpt from the English Bill of Rights", year: 1689 },
          { title: "Excerpt from Jean-Baptiste Colbert's letter to Louis XIV", year: 1670 },
          { title: "Map of Europe after the Peace of Utrecht", year: 1713 }
        ]
      },
      {
        title: "French Revolution",
        prompt: "Analyze the factors that contributed to the outbreak of the French Revolution in 1789 and evaluate the extent to which the revolution transformed French society.",
        documents: [
          { title: "Excerpt from Abbé Sieyès's 'What Is the Third Estate?'", year: 1789 },
          { title: "Caricature of the Three Estates", year: 1789 },
          { title: "Excerpt from the Declaration of the Rights of Man and Citizen", year: 1789 },
          { title: "Excerpt from Edmund Burke's 'Reflections on the Revolution in France'", year: 1790 },
          { title: "Painting: The Tennis Court Oath by Jacques-Louis David", year: 1791 },
          { title: "Excerpt from Robespierre's speech on revolutionary government", year: 1793 },
          { title: "Excerpt from the Law of 22 Prairial", year: 1794 }
        ]
      }
    ],
    leq: [
      {
        title: "Scientific Revolution",
        prompt: "Analyze the ways in which the Scientific Revolution and Enlightenment ideas impacted European society from 1600 to 1800.",
        options: [
          "Focus your essay on the Scientific Revolution (c. 1600-1700).",
          "Focus your essay on the Enlightenment (c. 1700-1800)."
        ]
      },
      {
        title: "Industrial Revolution",
        prompt: "Analyze the social and economic consequences of the Industrial Revolution in Europe from 1750 to 1900.",
        options: [
          "Focus your essay on the social consequences of the Industrial Revolution.",
          "Focus your essay on the economic consequences of the Industrial Revolution."
        ]
      },
      {
        title: "Nationalism and Nation-States",
        prompt: "Analyze the factors that promoted the development of nationalism and the formation of nation-states in Europe during the period 1815 to 1914.",
        options: [
          "Focus your essay on the role of cultural and intellectual movements in promoting nationalism.",
          "Focus your essay on the role of political and economic factors in promoting nationalism."
        ]
      }
    ],
    saq: [
      {
        title: "World War I",
        prompt: "Answer parts A, B, and C.",
        subquestions: [
          "Identify and explain ONE cause of World War I.",
          "Explain ONE way in which the war changed European society.",
          "Explain ONE way in which the Treaty of Versailles contributed to European instability in the interwar period."
        ]
      },
      {
        title: "Cold War",
        prompt: "Answer parts A, B, and C.",
        subquestions: [
          "Identify and explain ONE cause of the Cold War in Europe.",
          "Explain ONE way in which the Cold War affected Eastern European politics and society.",
          "Explain ONE reason for the collapse of communism in Eastern Europe in 1989."
        ]
      },
      {
        title: "European Integration",
        prompt: "Answer parts A, B, and C.",
        subquestions: [
          "Identify and explain ONE economic motivation for European integration after World War II.",
          "Explain ONE challenge faced by the European Union since its formation.",
          "Explain ONE way in which European integration has affected national sovereignty."
        ]
      }
    ]
  };

  // Select a prompt from the library
  const selectPrompt = (type, index) => {
    setEssayType(type);
    setEssayPrompt(promptLibrary[type][index]);
    setShowPromptLibrary(false);
  };

  // Submit essay for grading
  const submitForGrading = () => {
    if (studentResponse.trim().length < 200) {
      alert('Your response is too short. Please write a more detailed essay.');
      return;
    }
    
    setLoading(true);
    
    // Simulate AI grading with a timeout
    setTimeout(() => {
      // Generate feedback based on essay type
      if (essayType === 'dbq') {
        const scores = {
          thesis: Math.floor(Math.random() * 2), // 0-1 points
          context: Math.floor(Math.random() * 2), // 0-1 points
          evidence: Math.floor(Math.random() * 4), // 0-3 points
          analysis: Math.floor(Math.random() * 3), // 0-2 points
          complexity: Math.floor(Math.random() * 2), // 0-1 points
        };
        
        const totalScore = scores.thesis + scores.context + scores.evidence + scores.analysis + scores.complexity;
        
        setFeedback({
          type: 'dbq',
          scores,
          totalScore,
          maxScore: 7,
          feedbackText: generateDBQFeedback(scores),
          strengths: generateStrengths(scores, 'dbq'),
          improvements: generateImprovements(scores, 'dbq')
        });
      } else if (essayType === 'leq') {
        const scores = {
          thesis: Math.floor(Math.random() * 2), // 0-1 points
          context: Math.floor(Math.random() * 2), // 0-1 points
          evidence: Math.floor(Math.random() * 3), // 0-2 points
          analysis: Math.floor(Math.random() * 3), // 0-2 points
          complexity: Math.floor(Math.random() * 2), // 0-1 points
        };
        
        const totalScore = scores.thesis + scores.context + scores.evidence + scores.analysis + scores.complexity;
        
        setFeedback({
          type: 'leq',
          scores,
          totalScore,
          maxScore: 6,
          feedbackText: generateLEQFeedback(scores),
          strengths: generateStrengths(scores, 'leq'),
          improvements: generateImprovements(scores, 'leq')
        });
      } else if (essayType === 'saq') {
        const subquestions = essayPrompt.subquestions.length;
        const scores = Array(subquestions).fill(0).map(() => Math.floor(Math.random() * 2)); // 0-1 points per subquestion
        const totalScore = scores.reduce((sum, score) => sum + score, 0);
        
        setFeedback({
          type: 'saq',
          scores,
          totalScore,
          maxScore: subquestions,
          feedbackDetails: generateSAQFeedback(scores),
          strengths: generateStrengths(scores, 'saq'),
          improvements: generateImprovements(scores, 'saq')
        });
      }
      
      setLoading(false);
    }, 3000);
  };

  // Generate DBQ feedback based on scores
  const generateDBQFeedback = (scores) => {
    return {
      thesis: scores.thesis === 1 
        ? "Your thesis is clear and responds to all parts of the prompt." 
        : "Your thesis needs improvement. Make sure it directly responds to all parts of the prompt and takes a clear position.",
      
      context: scores.context === 1 
        ? "You've provided relevant historical context that situates your argument." 
        : "Your essay would benefit from more historical context to situate your argument.",
      
      evidence: [
        "Your use of document evidence is limited. Try to incorporate more documents and explain their relevance.",
        "You've used some document evidence, but could incorporate more documents or explain their relevance more clearly.",
        "You've used document evidence effectively, but could strengthen your argument with more thorough analysis.",
        "Excellent use of document evidence. You've incorporated multiple documents and explained their relevance to your argument."
      ][scores.evidence],
      
      analysis: [
        "Your analysis of the documents is limited. Focus on explaining how each document supports your argument.",
        "Your analysis shows some understanding of the documents, but could be more thorough.",
        "Strong analysis of the documents and how they support your argument."
      ][scores.analysis],
      
      complexity: scores.complexity === 1 
        ? "Your essay demonstrates complexity by acknowledging contradictions, nuance, or multiple perspectives." 
        : "Your essay would benefit from acknowledging contradictions, nuance, or multiple perspectives to demonstrate complexity of thought."
    };
  };

  // Generate LEQ feedback based on scores
  const generateLEQFeedback = (scores) => {
    return {
      thesis: scores.thesis === 1 
        ? "Your thesis is clear and responds to all parts of the prompt." 
        : "Your thesis needs improvement. Make sure it directly responds to all parts of the prompt and takes a clear position.",
      
      context: scores.context === 1 
        ? "You've provided relevant historical context that situates your argument." 
        : "Your essay would benefit from more historical context to situate your argument.",
      
      evidence: [
        "Your use of evidence is limited. Try to incorporate more specific historical examples.",
        "You've used some evidence, but could provide more specific historical examples.",
        "Excellent use of specific historical evidence to support your argument."
      ][scores.evidence],
      
      analysis: [
        "Your analysis is limited. Focus on explaining how your evidence supports your argument.",
        "Your analysis shows some understanding, but could be more thorough.",
        "Strong analysis that clearly connects evidence to your thesis."
      ][scores.analysis],
      
      complexity: scores.complexity === 1 
        ? "Your essay demonstrates complexity by acknowledging contradictions, nuance, or multiple perspectives." 
        : "Your essay would benefit from acknowledging contradictions, nuance, or multiple perspectives to demonstrate complexity of thought."
    };
  };

  // Generate SAQ feedback based on scores
  const generateSAQFeedback = (scores) => {
    return scores.map((score, index) => ({
      score,
      feedback: score === 1 
        ? "Your response correctly addresses the question with specific historical evidence." 
        : "Your response needs improvement. Be more specific and include relevant historical evidence."
    }));
  };

  // Generate strengths based on scores and essay type
  const generateStrengths = (scores, type) => {
    const strengths = [
      "You've structured your essay with clear paragraphs.",
      "Your writing is generally clear and focused on the prompt.",
    ];
    
    if (type === 'dbq' || type === 'leq') {
      if (scores.thesis === 1) strengths.push("Your thesis statement is well-formulated.");
      if (scores.context === 1) strengths.push("You've effectively established historical context.");
      if (type === 'dbq' && scores.evidence >= 2) strengths.push("You've incorporated multiple documents as evidence.");
      if (type === 'leq' && scores.evidence >= 1) strengths.push("You've incorporated specific historical evidence.");
      if (scores.analysis >= 1) strengths.push("You've attempted to analyze your evidence rather than just describing it.");
      if (scores.complexity === 1) strengths.push("Your essay demonstrates complexity of thought.");
    } else if (type === 'saq') {
      if (scores.some(s => s === 1)) strengths.push("Some of your responses include specific historical evidence.");
      strengths.push("You've attempted to answer all parts of the question.");
    }
    
    return strengths;
  };

  // Generate improvements based on scores and essay type
  const generateImprovements = (scores, type) => {
    const improvements = [];
    
    if (type === 'dbq' || type === 'leq') {
      if (scores.thesis === 0) improvements.push("Develop a clearer thesis that responds to all parts of the prompt.");
      if (scores.context === 0) improvements.push("Add more historical context to situate your argument.");
      
      if (type === 'dbq') {
        if (scores.evidence < 3) improvements.push("Incorporate more documents as evidence and explain their relevance.");
      } else {
        if (scores.evidence < 2) improvements.push("Incorporate more specific historical examples as evidence.");
      }
      
      if (scores.analysis < 2) improvements.push("Strengthen your analysis by explaining how your evidence supports your argument.");
      if (scores.complexity === 0) improvements.push("Acknowledge contradictions or multiple perspectives to demonstrate complexity.");
    } else if (type === 'saq') {
      if (scores.some(s => s === 0)) improvements.push("Be more specific in your responses and include relevant historical evidence.");
      improvements.push("Make clearer connections between your evidence and the question prompt.");
      improvements.push("Consider addressing multiple perspectives or factors when appropriate.");
    }
    
    return improvements;
  };

  // Reset the grader
  const resetGrader = () => {
    setStudentResponse('');
    setFeedback(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">AI Essay Grader</h2>
      
      {!feedback ? (
        <>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Essay Type:</h3>
              <button 
                onClick={() => setShowPromptLibrary(!showPromptLibrary)}
                className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              >
                {showPromptLibrary ? 'Hide Prompt Library' : 'Browse Prompt Library'}
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
              <button
                onClick={() => setEssayType('dbq')}
                className={`p-4 rounded-lg border ${
                  essayType === 'dbq' ? 'bg-primary text-white border-primary' : 'bg-white hover:bg-gray-50 border-gray-200'
                }`}
              >
                <div className="font-bold mb-1">Document-Based Question</div>
                <div className="text-sm">7-point rubric</div>
              </button>
              
              <button
                onClick={() => setEssayType('leq')}
                className={`p-4 rounded-lg border ${
                  essayType === 'leq' ? 'bg-primary text-white border-primary' : 'bg-white hover:bg-gray-50 border-gray-200'
                }`}
              >
                <div className="font-bold mb-1">Long Essay Question</div>
                <div className="text-sm">6-point rubric</div>
              </button>
              
              <button
                onClick={() => setEssayType('saq')}
                className={`p-4 rounded-lg border ${
                  essayType === 'saq' ? 'bg-primary text-white border-primary' : 'bg-white hover:bg-gray-50 border-gray-200'
                }`}
              >
                <div className="font-bold mb-1">Short-Answer Question</div>
                <div className="text-sm">3-point rubric</div>
              </button>
            </div>
            
            {showPromptLibrary && (
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Prompt Library:</h3>
                <div className="space-y-4">
                  {promptLibrary[essayType].map((prompt, index) => (
                    <div 
                      key={index}
                      className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                      onClick={() => selectPrompt(essayType, index)}
                    >
                      <h4 className="font-medium mb-2">{prompt.title}</h4>
                      <p className="text-sm text-gray-700 mb-2">{prompt.prompt}</p>
                      
                      {essayType === 'dbq' && (
                        <div>
                          <div className="text-sm font-medium mb-1">Documents:</div>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {prompt.documents.slice(0, 3).map((doc, docIndex) => (
                              <li key={docIndex}>{doc.title} ({doc.year})</li>
                            ))}
                            {prompt.documents.length > 3 && (
                              <li>+ {prompt.documents.length - 3} more documents</li>
                            )}
                          </ul>
                        </div>
                      )}
                      
                      {essayType === 'leq' && prompt.options && (
                        <div>
                          <div className="text-sm font-medium mb-1">Options:</div>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {prompt.options.map((option, optIndex) => (
                              <li key={optIndex}>{option}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {essayType === 'saq' && prompt.subquestions && (
                        <div>
                          <div className="text-sm font-medium mb-1">Subquestions:</div>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {prompt.subquestions.map((question, qIndex) => (
                              <li key={qIndex}>{String.fromCharCode(97 + qIndex)}) {question}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {essayPrompt && (
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Prompt:</h3>
                <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
                  <h4 className="font-medium mb-2">{essayPrompt.title}</h4>
                  <p className="mb-3">{essayPrompt.prompt}</p>
                  
                  {essayType === 'dbq' && (
                    <div>
                      <h5 className="font-medium text-sm mb-2">Documents:</h5>
                      <div className="space-y-2">
                        {essayPrompt.documents.map((doc, index) => (
                          <div key={index} className="p-2 bg-white rounded border border-gray-200">
                            <div className="font-medium text-sm">Document {index + 1}: {doc.title}</div>
                            <div className="text-xs text-gray-500">{doc.year}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {essayType === 'leq' && essayPrompt.options && (
                    <div>
                      <h5 className="font-medium text-sm mb-2">Choose one of the following options:</h5>
                      <div className="space-y-2">
                        {essayPrompt.options.map((option, index) => (
                          <div key={index} className="p-2 bg-white rounded border border-gray-200">
                            <div className="text-sm">Option {index + 1}: {option}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {essayType === 'saq' && essayPrompt.subquestions && (
                    <div>
                      <h5 className="font-medium text-sm mb-2">Answer all parts:</h5>
                      <div className="space-y-2">
                        {essayPrompt.subquestions.map((question, index) => (
                          <div key={index} className="p-2 bg-white rounded border border-gray-200">
                            <div className="text-sm">{String.fromCharCode(97 + index)}) {question}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Your Essay:</h3>
              <textarea 
                value={studentResponse}
                onChange={(e) => setStudentResponse(e.target.value)}
                placeholder={`Write your ${
                  essayType === 'dbq' ? 'document-based essay' : 
                  essayType === 'leq' ? 'long essay' : 
                  'short-answer responses'
                } here...`}
                className="w-full h-64 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-y"
              />
            </div>
            
            <div className="flex justify-between">
              <button 
                onClick={resetGrader}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
              >
                Reset
              </button>
              <button 
                onClick={submitForGrading}
                disabled={!essayPrompt || studentResponse.trim().length < 200}
                className={`px-6 py-2 rounded-md ${
                  !essayPrompt || studentResponse.trim().length < 200
                    ? 'bg-gray-300 cursor-not-allowed' 
                    : 'bg-primary text-white hover:bg-primary-dark'
                } transition-colors`}
              >
                Submit for Grading
              </button>
            </div>
          </div>
        </>
      ) : (
        <div>
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></div>
              <p>Our AI is grading your essay...</p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">
                  Your Score: {feedback.totalScore}/{feedback.maxScore}
                </h3>
                
                {(feedback.type === 'dbq' || feedback.type === 'leq') && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-6">
                      <div className="bg-gray-50 p-3 rounded-md text-center">
                        <div className="text-sm text-gray-500">Thesis</div>
                        <div className="text-xl font-bold">{feedback.scores.thesis}/1</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md text-center">
                        <div className="text-sm text-gray-500">Context</div>
                        <div className="text-xl font-bold">{feedback.scores.context}/1</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md text-center">
                        <div className="text-sm text-gray-500">Evidence</div>
                        <div className="text-xl font-bold">{feedback.scores.evidence}/{feedback.type === 'dbq' ? 3 : 2}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md text-center">
                        <div className="text-sm text-gray-500">Analysis</div>
                        <div className="text-xl font-bold">{feedback.scores.analysis}/2</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md text-center">
                        <div className="text-sm text-gray-500">Complexity</div>
                        <div className="text-xl font-bold">{feedback.scores.complexity}/1</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Detailed Feedback:</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-gray-50 rounded-md">
                          <div className="font-medium">Thesis:</div>
                          <p>{feedback.feedbackText.thesis}</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-md">
                          <div className="font-medium">Context:</div>
                          <p>{feedback.feedbackText.context}</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-md">
                          <div className="font-medium">Evidence:</div>
                          <p>{feedback.feedbackText.evidence}</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-md">
                          <div className="font-medium">Analysis:</div>
                          <p>{feedback.feedbackText.analysis}</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-md">
                          <div className="font-medium">Complexity:</div>
                          <p>{feedback.feedbackText.complexity}</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                
                {feedback.type === 'saq' && (
                  <div className="mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                      {feedback.scores.map((score, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-md text-center">
                          <div className="text-sm text-gray-500">Part {String.fromCharCode(97 + index)}</div>
                          <div className="text-xl font-bold">{score}/1</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Detailed Feedback:</h4>
                      <div className="space-y-4">
                        {feedback.feedbackDetails.map((detail, index) => (
                          <div key={index} className="p-4 bg-gray-50 rounded-md">
                            <div className="font-medium mb-2">Part {String.fromCharCode(97 + index)}:</div>
                            <div className={`p-3 rounded border ${detail.score === 1 ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                              {detail.feedback}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-green-600">Strengths:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {feedback.strengths.map((strength, index) => (
                        <li key={index}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-red-600">Areas for Improvement:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {feedback.improvements.map((improvement, index) => (
                        <li key={index}>{improvement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-md mb-6">
                  <h4 className="font-semibold mb-2">AI Grader Tips:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Remember to clearly state your thesis at the beginning of your essay.</li>
                    <li>Provide relevant historical context to situate your argument.</li>
                    <li>Use specific evidence to support your claims.</li>
                    <li>Analyze your evidence by explaining how it supports your argument.</li>
                    <li>Consider multiple perspectives or contradictions to demonstrate complexity.</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex justify-between">
                <button 
                  onClick={() => setFeedback(null)}
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                >
                  View Essay
                </button>
                <button 
                  onClick={resetGrader}
                  className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                >
                  Try Again
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
