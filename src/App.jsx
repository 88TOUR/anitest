import React, { useState } from 'react';
import MainPage from './components/MainPage';
import QuestionPage from './components/QuestionPage';
import AnimationPage from './components/AnimationPage';
import ResultPage from './components/ResultPage';
import { questions, analyzeResults } from './data/questions';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('main'); // main, question, animation, result
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const startGame = () => {
    setCurrentPage('question');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // 마지막 질문 완료 - 애니메이션 페이지로
      const gameResult = analyzeResults(newAnswers);
      setResult(gameResult);
      setCurrentPage('animation');
      
      // 3초 후 결과 페이지로 이동
      setTimeout(() => {
        setCurrentPage('result');
      }, 3000);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const restartGame = () => {
    setCurrentPage('main');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="App">
      {currentPage === 'main' && (
        <MainPage onStart={startGame} />
      )}
      
      {currentPage === 'question' && (
        <QuestionPage
          question={questions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
          onPrevious={goToPreviousQuestion}
          canGoBack={currentQuestionIndex > 0}
        />
      )}
      
      {currentPage === 'animation' && (
        <AnimationPage />
      )}
      
      {currentPage === 'result' && result && (
        <ResultPage
          result={result}
          onRestart={restartGame}
        />
      )}
    </div>
  );
}

export default App;
