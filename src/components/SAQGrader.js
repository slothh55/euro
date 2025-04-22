'use client';

import { useState } from 'react';

export default function SAQGrader({ prompt, subquestions }) {
  const [studentResponses, setStudentResponses] = useState(Array(subquestions.length).fill(''));
  const [feedback, setFeedback] = useState(null);
  const [showRubric, setShowRubric] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [timerActive, setTimerActive] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);

  const startTimer = (minutes = 20) => {
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

  const handleResponseChange = (index, value) => {
    const newResponses = [...studentResponses];
    newResponses[index] = value;
    setStudentResponses(newResponses);
  };

  const submitForGrading = () => {
    // Check if all responses have at least some content
    const hasAllResponses = studentResponses.every(response => response.trim().length > 0);
    if (!hasAllResponses) {
      alert('Please answer all parts of the question before submitting.');
      return;
    }
    
    setLoading(true);
    stopTimer();
    
    // Simulate AI grading with a timeout
    setTimeout(() => {
      const scores = studentResponses.map(() => Math.floor(Math.random() * 2) + 0); // 0-1 points per response
      const totalScore = scores.reduce((sum, score) => sum + score, 0);
      
      // Generate feedback based on scores
      const feedbackDetails = studentResponses.map((response, index) => {
        const score = scores[index];
        return {
          score,
          feedback: score === 1 
            ? "Your response correctly addresses the question with specific historical evidence." 
            : "Your response needs improvement. Be more specific and include relevant historical evidence."
        };
      });
      
      setFeedback({
        scores,
        totalScore,
        maxScore: subquestions.length,
        feedbackDetails,
        strengths: [
          "You've attempted to answer all parts of the question.",
          scores.some(s => s === 1) ? "Some of your responses include specific historical evidence." : null,
        ].filter(Boolean),
        improvements: [
          scores.some(s => s === 0) ? "Be more specific in your responses and include relevant historical evidence." : null,
          "Make clearer connections between your evidence and the question prompt.",
          "Consider addressing multiple perspectives or factors when appropriate."
        ].filter(Boolean)
      });
      
      setLoading(false);
    }, 2000);
  };

  const resetGrader = () => {
    setStudentResponses(Array(subquestions.length).fill(''));
    setFeedback(null);
    resetTimer();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Short-Answer Question (SAQ)</h2>
      
      {!feedback ? (
        <>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">Prompt:</h3>
              <button 
                onClick={() => setShowRubric(!showRubric)}
                className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              >
                {showRubric ? 'Hide Rubric' : 'View Rubric'}
              </button>
            </div>
            <div className="p-4 bg-gray-50 rounded-md border border-gray-200 mb-4">
              {prompt}
            </div>
            
            {showRubric && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">SAQ Rubric:</h3>
                <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>1 point</strong> for each part of the question that is correctly addressed with specific historical evidence.</li>
                    <li><strong>0 points</strong> for responses that are vague, incorrect, or lack specific historical evidence.</li>
                  </ul>
                  <div className="mt-2 text-sm text-gray-500">Total possible points: {subquestions.length}</div>
                </div>
              </div>
            )}
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Your Responses:</h3>
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
                  Start Timer (20 min)
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              {subquestions.map((question, index) => (
                <div key={index} className="border border-gray-200 rounded-md p-4">
                  <h4 className="font-medium mb-2">{String.fromCharCode(97 + index)}) {question}</h4>
                  <textarea 
                    value={studentResponses[index]}
                    onChange={(e) => handleResponseChange(index, e.target.value)}
                    placeholder={`Write your answer to part ${String.fromCharCode(97 + index)} here...`}
                    className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-y"
                  />
                </div>
              ))}
            </div>
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
              disabled={!studentResponses.every(response => response.trim().length > 0)}
              className={`px-6 py-2 rounded-md ${
                !studentResponses.every(response => response.trim().length > 0)
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
              <p>Grading your responses...</p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Your Score: {feedback.totalScore}/{feedback.maxScore}</h3>
                
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
                        <div className="mb-2">Your response:</div>
                        <div className="p-3 bg-white rounded border border-gray-200 mb-3">
                          {studentResponses[index]}
                        </div>
                        <div className="mb-2">Feedback:</div>
                        <div className={`p-3 rounded border ${detail.score === 1 ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                          {detail.feedback}
                        </div>
                      </div>
                    ))}
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
                    setShowRubric(false);
                  }}
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                >
                  View Responses
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
