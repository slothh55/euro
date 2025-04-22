'use client';

import { useState } from 'react';

export default function HistoricalSourceAnalyzer({ source }) {
  const [analysis, setAnalysis] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [showGuidelines, setShowGuidelines] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitAnalysis = () => {
    if (analysis.trim().length < 100) {
      alert('Please write a more detailed analysis before submitting.');
      return;
    }
    
    setLoading(true);
    
    // Simulate AI feedback with a timeout
    setTimeout(() => {
      const scores = {
        sourcing: Math.floor(Math.random() * 3) + 1, // 1-3 points
        contextualization: Math.floor(Math.random() * 3) + 1, // 1-3 points
        interpretation: Math.floor(Math.random() * 3) + 1, // 1-3 points
        connection: Math.floor(Math.random() * 3) + 1, // 1-3 points
      };
      
      const totalScore = scores.sourcing + scores.contextualization + scores.interpretation + scores.connection;
      const maxScore = 12;
      const percentage = Math.round((totalScore / maxScore) * 100);
      
      // Generate feedback based on scores
      const feedbackText = {
        sourcing: [
          "Your analysis needs to better identify the source's author, audience, purpose, and historical context.",
          "You've made some attempt to identify the source's origin, but could provide more detail about author, audience, and purpose.",
          "Good job identifying the source's author, audience, purpose, and historical context."
        ][scores.sourcing - 1],
        
        contextualization: [
          "Your analysis needs to better place the source within its broader historical context.",
          "You've made some attempt to contextualize the source, but could provide more specific historical details.",
          "Excellent job placing the source within its broader historical context with specific details."
        ][scores.contextualization - 1],
        
        interpretation: [
          "Your analysis needs to better interpret the content and meaning of the source.",
          "You've made some attempt to interpret the source, but could dig deeper into its meaning and significance.",
          "Strong interpretation of the source's content, meaning, and historical significance."
        ][scores.interpretation - 1],
        
        connection: [
          "Your analysis needs to better connect this source to broader historical themes or developments.",
          "You've made some connections to broader historical themes, but could develop these connections more fully.",
          "Excellent connections between this source and broader historical themes and developments."
        ][scores.connection - 1]
      };
      
      setFeedback({
        scores,
        totalScore,
        maxScore,
        percentage,
        feedbackText,
        strengths: [
          scores.sourcing >= 2 ? "You've attempted to identify key aspects of the source's origin." : null,
          scores.contextualization >= 2 ? "You've made some effort to place the source in historical context." : null,
          scores.interpretation >= 2 ? "You've attempted to interpret the source's meaning." : null,
          scores.connection >= 2 ? "You've tried to connect the source to broader historical themes." : null,
        ].filter(Boolean),
        improvements: [
          scores.sourcing < 3 ? "Identify the author, audience, purpose, and historical context more clearly." : null,
          scores.contextualization < 3 ? "Provide more specific historical details to contextualize the source." : null,
          scores.interpretation < 3 ? "Dig deeper into the source's meaning and significance." : null,
          scores.connection < 3 ? "Develop stronger connections to broader historical themes and developments." : null,
        ].filter(Boolean)
      });
      
      setLoading(false);
    }, 2000);
  };

  const resetAnalyzer = () => {
    setAnalysis('');
    setFeedback(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Historical Source Analysis</h2>
      
      {!feedback ? (
        <>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">Source:</h3>
              <button 
                onClick={() => setShowGuidelines(!showGuidelines)}
                className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              >
                {showGuidelines ? 'Hide Guidelines' : 'View Guidelines'}
              </button>
            </div>
            <div className="p-4 bg-gray-50 rounded-md border border-gray-200 mb-4">
              <h4 className="font-bold mb-1">{source.title}</h4>
              <div className="text-sm text-gray-500 mb-3">{source.attribution}</div>
              <div className="mb-4">{source.content}</div>
              {source.image && (
                <div className="mt-2">
                  <img 
                    src={source.image} 
                    alt={source.title} 
                    className="max-w-full h-auto rounded-md border border-gray-200"
                  />
                </div>
              )}
            </div>
            
            {showGuidelines && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Analysis Guidelines:</h3>
                <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
                  <p className="mb-3">When analyzing a historical source, consider the following aspects:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Sourcing:</strong> Identify the author, audience, purpose, and historical context of the source.</li>
                    <li><strong>Contextualization:</strong> Place the source within its broader historical context.</li>
                    <li><strong>Interpretation:</strong> Analyze the content and meaning of the source.</li>
                    <li><strong>Connection:</strong> Connect the source to broader historical themes or developments.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Your Analysis:</h3>
            <textarea 
              value={analysis}
              onChange={(e) => setAnalysis(e.target.value)}
              placeholder="Write your analysis of this historical source..."
              className="w-full h-64 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-y"
            />
          </div>
          
          <div className="flex justify-between">
            <button 
              onClick={resetAnalyzer}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
            >
              Reset
            </button>
            <button 
              onClick={submitAnalysis}
              disabled={analysis.trim().length < 100}
              className={`px-6 py-2 rounded-md ${
                analysis.trim().length < 100 
                  ? 'bg-gray-300 cursor-not-allowed' 
                  : 'bg-primary text-white hover:bg-primary-dark'
              } transition-colors`}
            >
              Submit Analysis
            </button>
          </div>
        </>
      ) : (
        <div>
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></div>
              <p>Analyzing your response...</p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Analysis Score: {feedback.totalScore}/{feedback.maxScore} ({feedback.percentage}%)</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
                  <div className="bg-gray-50 p-3 rounded-md text-center">
                    <div className="text-sm text-gray-500">Sourcing</div>
                    <div className="text-xl font-bold">{feedback.scores.sourcing}/3</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md text-center">
                    <div className="text-sm text-gray-500">Contextualization</div>
                    <div className="text-xl font-bold">{feedback.scores.contextualization}/3</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md text-center">
                    <div className="text-sm text-gray-500">Interpretation</div>
                    <div className="text-xl font-bold">{feedback.scores.interpretation}/3</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md text-center">
                    <div className="text-sm text-gray-500">Connection</div>
                    <div className="text-xl font-bold">{feedback.scores.connection}/3</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Detailed Feedback:</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-md">
                      <div className="font-medium">Sourcing:</div>
                      <p>{feedback.feedbackText.sourcing}</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-md">
                      <div className="font-medium">Contextualization:</div>
                      <p>{feedback.feedbackText.contextualization}</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-md">
                      <div className="font-medium">Interpretation:</div>
                      <p>{feedback.feedbackText.interpretation}</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-md">
                      <div className="font-medium">Connection:</div>
                      <p>{feedback.feedbackText.connection}</p>
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
                  onClick={() => setFeedback(null)}
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                >
                  View Analysis
                </button>
                <button 
                  onClick={resetAnalyzer}
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
