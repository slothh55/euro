'use client';

import { useState, useEffect } from 'react';

export default function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timer, setTimer] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = (timed = false) => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    
    if (timed) {
      // Set 15 seconds per question
      const totalTime = questions.length * 15;
      setTimeRemaining(totalTime);
      setTimer(setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setQuizCompleted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000));
    } else {
      setTimer(null);
      setTimeRemaining(null);
    }
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  const handleAnswerSelect = (answerIndex) => {
    if (showExplanation || quizCompleted) return;
    setSelectedAnswer(answerIndex);
  };

  const checkAnswer = () => {
    if (selectedAnswer === null || showExplanation) return;
    
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (!showExplanation) return;
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
      if (timer) clearInterval(timer);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (!quizStarted) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-2xl font-bold mb-4">AP European History Quiz</h3>
        <p className="mb-4">This quiz contains {questions.length} questions to test your knowledge of this unit.</p>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => startQuiz(false)} 
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
          >
            Start Quiz
          </button>
          <button 
            onClick={() => startQuiz(true)} 
            className="bg-secondary text-white px-6 py-2 rounded-md hover:bg-secondary-dark transition-colors"
          >
            Start Timed Quiz
          </button>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    let feedback;
    
    if (percentage >= 90) {
      feedback = "Excellent! You have a strong understanding of this unit.";
    } else if (percentage >= 80) {
      feedback = "Great job! You have a good grasp of the material.";
    } else if (percentage >= 70) {
      feedback = "Good work! You're on the right track, but review some concepts.";
    } else if (percentage >= 60) {
      feedback = "You passed, but should review this unit more thoroughly.";
    } else {
      feedback = "You need to study this unit more carefully. Focus on the key concepts.";
    }
    
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-2xl font-bold mb-4">Quiz Results</h3>
        <div className="mb-6">
          <div className="text-4xl font-bold text-center mb-2">{percentage}%</div>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div 
              className="h-4 rounded-full" 
              style={{ 
                width: `${percentage}%`,
                backgroundColor: percentage >= 70 ? '#4CAF50' : percentage >= 60 ? '#FFC107' : '#F44336'
              }}
            ></div>
          </div>
          <p className="text-center">{score} out of {questions.length} correct</p>
        </div>
        <p className="mb-4">{feedback}</p>
        <div className="flex justify-between">
          <button 
            onClick={() => startQuiz(timeRemaining !== null)} 
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
          >
            Retake Quiz
          </button>
          <button 
            onClick={() => setQuizStarted(false)} 
            className="bg-secondary text-white px-6 py-2 rounded-md hover:bg-secondary-dark transition-colors"
          >
            Back to Options
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      {timeRemaining !== null && (
        <div className="mb-4 text-right">
          <span className={`font-bold ${timeRemaining < 30 ? 'text-red-500' : ''}`}>
            Time: {formatTime(timeRemaining)}
          </span>
        </div>
      )}
      
      <div className="mb-4">
        <span className="text-sm text-gray-500">Question {currentQuestion + 1} of {questions.length}</span>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
          <div 
            className="h-2 rounded-full bg-primary" 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-4">{currentQ.question}</h3>
      
      <div className="space-y-3 mb-6">
        {currentQ.options.map((option, index) => (
          <div 
            key={index}
            onClick={() => handleAnswerSelect(index)}
            className={`p-3 border rounded-md cursor-pointer transition-colors ${
              selectedAnswer === index 
                ? showExplanation 
                  ? index === currentQ.correctAnswer 
                    ? 'bg-green-100 border-green-500' 
                    : 'bg-red-100 border-red-500'
                  : 'bg-blue-100 border-blue-500'
                : 'hover:bg-gray-50'
            }`}
          >
            <div className="flex items-start">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
                selectedAnswer === index ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}>
                {String.fromCharCode(65 + index)}
              </div>
              <div>{option}</div>
            </div>
          </div>
        ))}
      </div>
      
      {showExplanation && (
        <div className="mb-6 p-4 bg-gray-50 rounded-md border border-gray-200">
          <h4 className="font-bold mb-2">Explanation:</h4>
          <p>{currentQ.explanation}</p>
        </div>
      )}
      
      <div className="flex justify-between">
        {!showExplanation ? (
          <button 
            onClick={checkAnswer}
            disabled={selectedAnswer === null}
            className={`px-6 py-2 rounded-md ${
              selectedAnswer === null 
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-primary text-white hover:bg-primary-dark'
            } transition-colors`}
          >
            Check Answer
          </button>
        ) : (
          <button 
            onClick={nextQuestion}
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </button>
        )}
      </div>
    </div>
  );
}
