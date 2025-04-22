'use client';

import { useState } from 'react';

export default function DBQGrader({ prompt, documents }) {
  const [studentResponse, setStudentResponse] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [showDocuments, setShowDocuments] = useState(false);
  const [showRubric, setShowRubric] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [timerActive, setTimerActive] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);

  const startTimer = (minutes = 60) => {
    if (timerActive) return;
    
    const seconds = minutes * 60;
    setTimeRemaining(seconds);
    setTimerActive(true);
    
    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setTimerActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    setTimerInterval(interval);
  };

  const stopTimer = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
    }
    setTimerActive(false);
  };

  const resetTimer = () => {
    stopTimer();
    setTimeRemaining(null);
  };

  const formatTime = (seconds) => {
    if (!seconds) return '--:--';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const submitForGrading = () => {
    if (studentResponse.trim().length < 100) {
      alert('Your response is too short. Please write a more detailed response.');
      return;
    }
    
    setLoading(true);
    stopTimer();
    
    // Simulate AI grading with a timeout
    setTimeout(() => {
      const score = {
        thesis: Math.floor(Math.random() * 2) + 0, // 0-1 points
        context: Math.floor(Math.random() * 2) + 0, // 0-1 points
        evidence: Math.floor(Math.random() * 3) + 0, // 0-3 points
        analysis: Math.floor(Math.random() * 2) + 0, // 0-2 points
        complexity: Math.floor(Math.random() * 1) + 0, // 0-1 points
      };
      
      const totalScore = score.thesis + score.context + score.evidence + score.analysis + score.complexity;
      
      // Generate feedback based on scores
      const feedbackText = {
        thesis: score.thesis === 1 
          ? "Your thesis is clear and responds to all parts of the prompt." 
          : "Your thesis needs improvement. Make sure it directly responds to all parts of the prompt and takes a clear position.",
        
        context: score.context === 1 
          ? "You've provided relevant historical context that situates your argument." 
          : "Your essay would benefit from more historical context to situate your argument.",
        
        evidence: [
          "Your use of document evidence is limited. Try to incorporate more documents and explain their relevance.",
          "You've used some document evidence, but could incorporate more documents or explain their relevance more clearly.",
          "You've used document evidence effectively, but could strengthen your argument with more thorough analysis.",
          "Excellent use of document evidence. You've incorporated multiple documents and explained their relevance to your argument."
        ][score.evidence],
        
        analysis: [
          "Your analysis of the documents is limited. Focus on explaining how each document supports your argument.",
          "Your analysis shows some understanding of the documents, but could be more thorough.",
          "Strong analysis of the documents and how they support your argument."
        ][score.analysis],
        
        complexity: score.complexity === 1 
          ? "Your essay demonstrates complexity by acknowledging contradictions, nuance, or multiple perspectives." 
          : "Your essay would benefit from acknowledging contradictions, nuance, or multiple perspectives to demonstrate complexity of thought."
      };
      
      setFeedback({
        score,
        totalScore,
        feedbackText,
        strengths: [
          "You've structured your essay with clear paragraphs.",
          "Your writing is generally clear and focused on the prompt.",
          score.thesis === 1 ? "Your thesis statement is well-formulated." : null,
          score.evidence >= 2 ? "You've incorporated multiple documents as evidence." : null,
          score.analysis >= 1 ? "You've attempted to analyze the documents rather than just summarizing them." : null,
        ].filter(Boolean),
        improvements: [
          score.thesis === 0 ? "Develop a clearer thesis that responds to all parts of the prompt." : null,
          score.context === 0 ? "Add more historical context to situate your argument." : null,
          score.evidence < 2 ? "Incorporate more documents as evidence and explain their relevance." : null,
          score.analysis < 1 ? "Analyze the documents rather than just summarizing them." : null,
          score.complexity === 0 ? "Acknowledge contradictions or multiple perspectives to demonstrate complexity." : null,
        ].filter(Boolean)
      });
      
      setLoading(false);
    }, 3000);
  };

  const resetGrader = () => {
    setStudentResponse('');
    setFeedback(null);
    resetTimer();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Document-Based Question (DBQ)</h2>
      
      {!feedback ? (
        <>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">Prompt:</h3>
              <div className="flex gap-2">
                <button 
                  onClick={() => setShowDocuments(!showDocuments)}
                  className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                >
                  {showDocuments ? 'Hide Documents' : 'View Documents'}
                </button>
                <button 
                  onClick={() => setShowRubric(!showRubric)}
                  className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                >
                  {showRubric ? 'Hide Rubric' : 'View Rubric'}
                </button>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-md border border-gray-200 mb-4">
              {prompt}
            </div>
            
            {showDocuments && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Documents:</h3>
                <div className="space-y-4">
                  {documents.map((doc, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-md border border-gray-200">
                      <h4 className="font-bold mb-1">Document {index + 1}: {doc.title}</h4>
                      <div className="text-sm text-gray-500 mb-2">{doc.source}</div>
                      <p>{doc.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {showRubric && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">DBQ Rubric:</h3>
                <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Thesis (1 point):</strong> Presents a thesis that makes a historically defensible claim and responds to all parts of the prompt.</li>
                    <li><strong>Context (1 point):</strong> Provides relevant historical context to situate the argument.</li>
                    <li><strong>Evidence (3 points):</strong> Uses the documents effectively to support the argument.</li>
                    <li><strong>Analysis (2 points):</strong> Analyzes the documents by explaining their significance to the argument.</li>
                    <li><strong>Complexity (1 point):</strong> Demonstrates complexity by acknowledging contradictions, nuance, or multiple perspectives.</li>
                  </ul>
                  <div className="mt-2 text-sm text-gray-500">Total possible points: 7</div>
                </div>
              </div>
            )}
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Your Response:</h3>
              <div className="flex items-center gap-2">
                {timeRemaining !== null ? (
                  <div className={`font-mono ${timeRemaining < 300 ? 'text-red-500' : ''}`}>
                    {formatTime(timeRemaining)}
                  </div>
                ) : null}
                <button 
                  onClick={() => startTimer()}
                  disabled={timerActive}
                  className={`text-sm px-3 py-1 rounded-md transition-colors ${
                    timerActive 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                  }`}
                >
                  Start Timer (60 min)
                </button>
              </div>
            </div>
            <textarea 
              value={studentResponse}
              onChange={(e) => setStudentResponse(e.target.value)}
              placeholder="Write your DBQ response here..."
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
              disabled={studentResponse.trim().length < 100}
              className={`px-6 py-2 rounded-md ${
                studentResponse.trim().length < 100 
                  ? 'bg-gray-300 cursor-not-allowed' 
                  : 'bg-primary text-white hover:bg-primary-dark'
              } transition-colors`}
            >
              Submit for Grading
            </button>
          </div>
        </>
      ) : (
        <div>
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></div>
              <p>Grading your response...</p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Your Score: {feedback.totalScore}/7</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-6">
                  <div className="bg-gray-50 p-3 rounded-md text-center">
                    <div className="text-sm text-gray-500">Thesis</div>
                    <div className="text-xl font-bold">{feedback.score.thesis}/1</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md text-center">
                    <div className="text-sm text-gray-500">Context</div>
                    <div className="text-xl font-bold">{feedback.score.context}/1</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md text-center">
                    <div className="text-sm text-gray-500">Evidence</div>
                    <div className="text-xl font-bold">{feedback.score.evidence}/3</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md text-center">
                    <div className="text-sm text-gray-500">Analysis</div>
                    <div className="text-xl font-bold">{feedback.score.analysis}/2</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md text-center">
                    <div className="text-sm text-gray-500">Complexity</div>
                    <div className="text-xl font-bold">{feedback.score.complexity}/1</div>
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
              </div>
              
              <div className="flex justify-between">
                <button 
                  onClick={() => {
                    setFeedback(null);
                    setShowDocuments(false);
                    setShowRubric(false);
                  }}
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                >
                  View Response
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
