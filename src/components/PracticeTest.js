'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PracticeTest({ unitNumber, test }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(test.questions.length).fill(null));
  const [testCompleted, setTestCompleted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(test.timeLimit * 60); // in seconds
  const [timerActive, setTimerActive] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);

  // Start the test timer
  const startTimer = () => {
    if (timerActive) return;
    
    setTimerActive(true);
    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setTimerActive(false);
          setTestCompleted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    setTimerInterval(interval);
  };

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Handle answer selection
  const handleAnswerSelect = (answerIndex) => {
    if (testCompleted) return;
    
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  // Navigate to next question
  const nextQuestion = () => {
    if (currentQuestion < test.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Navigate to previous question
  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Jump to a specific question
  const jumpToQuestion = (index) => {
    setCurrentQuestion(index);
  };

  // Submit the test for grading
  const submitTest = () => {
    // Check if all questions are answered
    const unansweredCount = selectedAnswers.filter(answer => answer === null).length;
    
    if (unansweredCount > 0) {
      const confirmSubmit = confirm(`You have ${unansweredCount} unanswered question${unansweredCount > 1 ? 's' : ''}. Are you sure you want to submit?`);
      if (!confirmSubmit) return;
    }
    
    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerActive(false);
    }
    
    setTestCompleted(true);
    setShowResults(true);
  };

  // Calculate test results
  const calculateResults = () => {
    let correctCount = 0;
    
    test.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    
    const score = Math.round((correctCount / test.questions.length) * 100);
    
    return {
      totalQuestions: test.questions.length,
      correctAnswers: correctCount,
      score: score,
      letterGrade: score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F',
      apScore: score >= 85 ? 5 : score >= 70 ? 4 : score >= 55 ? 3 : score >= 45 ? 2 : 1
    };
  };

  // Reset the test
  const resetTest = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(Array(test.questions.length).fill(null));
    setTestCompleted(false);
    setShowResults(false);
    setTimeRemaining(test.timeLimit * 60);
    setTimerActive(false);
    if (timerInterval) clearInterval(timerInterval);
  };

  // Start the test
  const startTest = () => {
    startTimer();
  };

  // If showing results screen
  if (showResults) {
    const results = calculateResults();
    
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Test Results</h2>
        
        <div className="mb-8">
          <div className="text-center mb-4">
            <div className="text-5xl font-bold mb-2">{results.score}%</div>
            <div className="flex justify-center gap-4">
              <div className="px-4 py-2 bg-gray-100 rounded-md">
                <div className="text-sm text-gray-500">Letter Grade</div>
                <div className="text-2xl font-bold">{results.letterGrade}</div>
              </div>
              <div className="px-4 py-2 bg-gray-100 rounded-md">
                <div className="text-sm text-gray-500">AP Score</div>
                <div className="text-2xl font-bold">{results.apScore}</div>
              </div>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div 
              className="h-4 rounded-full" 
              style={{ 
                width: `${results.score}%`,
                backgroundColor: results.score >= 70 ? '#4CAF50' : results.score >= 60 ? '#FFC107' : '#F44336'
              }}
            ></div>
          </div>
          
          <div className="text-center mb-6">
            <div className="text-lg">You answered {results.correctAnswers} out of {results.totalQuestions} questions correctly.</div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Question Review</h3>
          <div className="space-y-6">
            {test.questions.map((question, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">Question {index + 1}</h4>
                  <div className={`px-2 py-1 rounded-full text-sm ${
                    selectedAnswers[index] === question.correctAnswer
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {selectedAnswers[index] === question.correctAnswer ? 'Correct' : 'Incorrect'}
                  </div>
                </div>
                
                <p className="mb-3">{question.question}</p>
                
                <div className="space-y-2 mb-4">
                  {question.options.map((option, optionIndex) => (
                    <div 
                      key={optionIndex}
                      className={`p-2 rounded-md ${
                        optionIndex === question.correctAnswer
                          ? 'bg-green-100 border border-green-300'
                          : optionIndex === selectedAnswers[index]
                            ? 'bg-red-100 border border-red-300'
                            : 'bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <div className="flex items-start">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
                          optionIndex === question.correctAnswer
                            ? 'bg-green-500 text-white'
                            : optionIndex === selectedAnswers[index]
                              ? 'bg-red-500 text-white'
                              : 'bg-gray-200'
                        }`}>
                          {String.fromCharCode(65 + optionIndex)}
                        </div>
                        <div>{option}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {question.explanation && (
                  <div className="p-3 bg-blue-50 rounded-md border border-blue-200">
                    <div className="font-medium mb-1">Explanation:</div>
                    <p>{question.explanation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between">
          <Link 
            href={`/units/${unitNumber}`}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
          >
            Back to Unit
          </Link>
          <button 
            onClick={resetTest}
            className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            Take Test Again
          </button>
        </div>
      </div>
    );
  }

  // If test not started yet
  if (!timerActive && !testCompleted) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold">{test.title}</h2>
          <Link href={`/units/${unitNumber}`} className="text-primary hover:text-primary-dark">
            Back to Unit {unitNumber}
          </Link>
        </div>
        
        <div className="mb-6">
          <p className="mb-4">{test.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-gray-50 rounded-md border border-gray-200 text-center">
              <div className="text-sm text-gray-500 mb-1">Questions</div>
              <div className="text-2xl font-bold">{test.questions.length}</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-md border border-gray-200 text-center">
              <div className="text-sm text-gray-500 mb-1">Time Limit</div>
              <div className="text-2xl font-bold">{test.timeLimit} min</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-md border border-gray-200 text-center">
              <div className="text-sm text-gray-500 mb-1">Difficulty</div>
              <div className="text-2xl font-bold capitalize">{test.difficulty}</div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Topics Covered:</h3>
            <div className="flex flex-wrap gap-2">
              {test.topics.map((topic, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {topic}
                </span>
              ))}
            </div>
          </div>
          
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Instructions:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>You have {test.timeLimit} minutes to complete this test.</li>
              <li>There are {test.questions.length} multiple-choice questions.</li>
              <li>You can navigate between questions using the navigation buttons.</li>
              <li>Your progress is saved as you go.</li>
              <li>You can submit the test at any time, but unanswered questions will be marked as incorrect.</li>
            </ul>
          </div>
        </div>
        
        <div className="flex justify-between">
          <Link 
            href={`/units/${unitNumber}`}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
          >
            Back to Unit
          </Link>
          <button 
            onClick={startTest}
            className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            Start Test
          </button>
        </div>
      </div>
    );
  }

  // During the test
  const currentQ = test.questions[currentQuestion];
  const answeredCount = selectedAnswers.filter(answer => answer !== null).length;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{test.title}</h2>
        <div className={`font-mono text-lg ${timeRemaining < 300 ? 'text-red-500 font-bold' : ''}`}>
          {formatTime(timeRemaining)}
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-500 mb-1">
          <div>Question {currentQuestion + 1} of {test.questions.length}</div>
          <div>{answeredCount} of {test.questions.length} answered</div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="h-2 rounded-full bg-primary" 
            style={{ width: `${((currentQuestion + 1) / test.questions.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-4">{currentQ.question}</h3>
        
        <div className="space-y-3">
          {currentQ.options.map((option, index) => (
            <div 
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`p-3 border rounded-md cursor-pointer transition-colors ${
                selectedAnswers[currentQuestion] === index 
                  ? 'bg-blue-50 border-blue-300' 
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
                  selectedAnswers[currentQuestion] === index ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}>
                  {String.fromCharCode(65 + index)}
                </div>
                <div>{option}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between mb-6">
        <button 
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className={`px-4 py-2 rounded-md ${
            currentQuestion === 0 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-gray-200 hover:bg-gray-300'
          } transition-colors`}
        >
          Previous
        </button>
        <button 
          onClick={nextQuestion}
          disabled={currentQuestion === test.questions.length - 1}
          className={`px-4 py-2 rounded-md ${
            currentQuestion === test.questions.length - 1 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-gray-200 hover:bg-gray-300'
          } transition-colors`}
        >
          Next
        </button>
      </div>
      
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Question Navigator:</h3>
        <div className="flex flex-wrap gap-2">
          {test.questions.map((_, index) => (
            <button
              key={index}
              onClick={() => jumpToQuestion(index)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                index === currentQuestion
                  ? 'bg-primary text-white'
                  : selectedAnswers[index] !== null
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between">
        <div></div>
        <button 
          onClick={submitTest}
          className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
        >
          Submit Test
        </button>
      </div>
    </div>
  );
}
