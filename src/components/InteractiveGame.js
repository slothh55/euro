'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function InteractiveGame({ unitNumber, game }) {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [timerInterval, setTimerInterval] = useState(null);
  const [gameResults, setGameResults] = useState(null);

  // Start the game
  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setCurrentLevel(0);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    
    // Start timer if game has time limit
    if (game.timeLimit) {
      setTimeRemaining(game.timeLimit);
      const interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            endGame();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      setTimerInterval(interval);
    }
  };

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Handle answer selection
  const handleAnswerSelect = (answerIndex) => {
    if (showFeedback) return;
    setSelectedAnswer(answerIndex);
  };

  // Check answer
  const checkAnswer = () => {
    if (selectedAnswer === null || showFeedback) return;
    
    const currentQ = game.levels[currentLevel].questions[currentQuestion];
    const correct = selectedAnswer === currentQ.correctAnswer;
    
    setIsCorrect(correct);
    setShowFeedback(true);
    
    if (correct) {
      // Add points based on game type
      if (game.type === 'timeline') {
        setScore(score + 100);
      } else if (game.type === 'matching') {
        setScore(score + 50);
      } else {
        setScore(score + 10);
      }
    }
  };

  // Move to next question
  const nextQuestion = () => {
    if (!showFeedback) return;
    
    setSelectedAnswer(null);
    setShowFeedback(false);
    
    const currentLevelQuestions = game.levels[currentLevel].questions.length;
    
    if (currentQuestion < currentLevelQuestions - 1) {
      // Move to next question in current level
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentLevel < game.levels.length - 1) {
      // Move to next level
      setCurrentLevel(currentLevel + 1);
      setCurrentQuestion(0);
    } else {
      // Game completed
      endGame();
    }
  };

  // End the game
  const endGame = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
    }
    
    // Calculate results
    const totalQuestions = game.levels.reduce((sum, level) => sum + level.questions.length, 0);
    const maxScore = game.type === 'timeline' ? totalQuestions * 100 : 
                    game.type === 'matching' ? totalQuestions * 50 : 
                    totalQuestions * 10;
    
    const percentage = Math.round((score / maxScore) * 100);
    
    setGameResults({
      score,
      maxScore,
      percentage,
      totalQuestions,
      timeTaken: game.timeLimit ? game.timeLimit - timeRemaining : null,
      rank: percentage >= 90 ? 'History Master' :
            percentage >= 80 ? 'History Expert' :
            percentage >= 70 ? 'History Scholar' :
            percentage >= 60 ? 'History Enthusiast' :
            'History Novice'
    });
    
    setGameCompleted(true);
  };

  // Reset the game
  const resetGame = () => {
    setGameStarted(false);
    setGameCompleted(false);
    setCurrentLevel(0);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setTimeRemaining(null);
    setGameResults(null);
    if (timerInterval) clearInterval(timerInterval);
  };

  // Render game intro screen
  if (!gameStarted) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold">{game.title}</h2>
          <Link href={`/units/${unitNumber}`} className="text-primary hover:text-primary-dark">
            Back to Unit {unitNumber}
          </Link>
        </div>
        
        <div className="mb-6">
          <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
            {game.image && (
              <img 
                src={game.image} 
                alt={game.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          
          <p className="mb-4">{game.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-gray-50 rounded-md border border-gray-200 text-center">
              <div className="text-sm text-gray-500 mb-1">Game Type</div>
              <div className="text-lg font-bold capitalize">{game.type}</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-md border border-gray-200 text-center">
              <div className="text-sm text-gray-500 mb-1">Difficulty</div>
              <div className="text-lg font-bold capitalize">{game.difficulty}</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-md border border-gray-200 text-center">
              <div className="text-sm text-gray-500 mb-1">Time Limit</div>
              <div className="text-lg font-bold">{game.timeLimit ? `${Math.floor(game.timeLimit / 60)} minutes` : 'None'}</div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-semibold mb-2">How to Play:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {game.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Topics Covered:</h3>
            <div className="flex flex-wrap gap-2">
              {game.topics.map((topic, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {topic}
                </span>
              ))}
            </div>
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
            onClick={startGame}
            className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            Start Game
          </button>
        </div>
      </div>
    );
  }

  // Render game results screen
  if (gameCompleted) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Game Results</h2>
        
        <div className="mb-8">
          <div className="text-center mb-6">
            <div className="text-5xl font-bold mb-2">{gameResults.score}</div>
            <div className="text-lg text-gray-500">points</div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div 
              className="h-4 rounded-full" 
              style={{ 
                width: `${gameResults.percentage}%`,
                backgroundColor: gameResults.percentage >= 70 ? '#4CAF50' : gameResults.percentage >= 60 ? '#FFC107' : '#F44336'
              }}
            ></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-gray-50 rounded-md border border-gray-200 text-center">
              <div className="text-sm text-gray-500 mb-1">Percentage</div>
              <div className="text-2xl font-bold">{gameResults.percentage}%</div>
            </div>
            {gameResults.timeTaken && (
              <div className="p-4 bg-gray-50 rounded-md border border-gray-200 text-center">
                <div className="text-sm text-gray-500 mb-1">Time Taken</div>
                <div className="text-2xl font-bold">{formatTime(gameResults.timeTaken)}</div>
              </div>
            )}
            <div className="p-4 bg-gray-50 rounded-md border border-gray-200 text-center">
              <div className="text-sm text-gray-500 mb-1">Rank</div>
              <div className="text-2xl font-bold">{gameResults.rank}</div>
            </div>
          </div>
          
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-md mb-6">
            <h3 className="font-semibold mb-2">Learning Outcome:</h3>
            <p>
              {gameResults.percentage >= 80 
                ? "Excellent work! You've demonstrated a strong understanding of the historical concepts covered in this game."
                : gameResults.percentage >= 60
                ? "Good job! You've shown a solid grasp of many historical concepts, but there's still room for improvement."
                : "You've made a good start, but consider reviewing the topics covered in this game to strengthen your understanding."}
            </p>
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
            onClick={resetGame}
            className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  // Render game play screen
  const currentLevelData = game.levels[currentLevel];
  const currentQ = currentLevelData.questions[currentQuestion];
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{game.title}</h2>
        <div className="flex items-center gap-4">
          <div className="text-lg font-bold">Score: {score}</div>
          {timeRemaining && (
            <div className={`font-mono text-lg ${timeRemaining < 60 ? 'text-red-500 font-bold' : ''}`}>
              {formatTime(timeRemaining)}
            </div>
          )}
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-500 mb-1">
          <div>Level {currentLevel + 1}: {currentLevelData.name}</div>
          <div>Question {currentQuestion + 1} of {currentLevelData.questions.length}</div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="h-2 rounded-full bg-primary" 
            style={{ width: `${((currentQuestion + 1) / currentLevelData.questions.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-4">{currentQ.question}</h3>
        
        {game.type === 'timeline' && currentQ.image && (
          <div className="mb-4">
            <img 
              src={currentQ.image} 
              alt="Timeline event"
              className="max-w-full h-auto rounded-md border border-gray-200"
            />
          </div>
        )}
        
        <div className="space-y-3">
          {currentQ.options.map((option, index) => (
            <div 
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`p-3 border rounded-md cursor-pointer transition-colors ${
                selectedAnswer === index 
                  ? showFeedback
                    ? index === currentQ.correctAnswer
                      ? 'bg-green-100 border-green-500'
                      : 'bg-red-100 border-red-500'
                    : 'bg-blue-50 border-blue-300'
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
                  selectedAnswer === index 
                    ? showFeedback
                      ? index === currentQ.correctAnswer
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                      : 'bg-blue-500 text-white'
                    : 'bg-gray-200'
                }`}>
                  {game.type === 'timeline' 
                    ? index + 1 
                    : String.fromCharCode(65 + index)}
                </div>
                <div>{option}</div>
              </div>
            </div>
          ))}
        </div>
        
        {showFeedback && (
          <div className={`mt-4 p-4 rounded-md ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <div className="font-medium mb-1">{isCorrect ? 'Correct!' : 'Incorrect!'}</div>
            <p>{currentQ.explanation}</p>
          </div>
        )}
      </div>
      
      <div className="flex justify-between">
        <button 
          onClick={() => {
            if (confirm('Are you sure you want to quit? Your progress will be lost.')) {
              resetGame();
            }
          }}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
        >
          Quit Game
        </button>
        
        {!showFeedback ? (
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
            className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            {currentQuestion < currentLevelData.questions.length - 1 || currentLevel < game.levels.length - 1 
              ? 'Next Question' 
              : 'Finish Game'}
          </button>
        )}
      </div>
    </div>
  );
}
