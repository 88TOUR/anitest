import React from 'react';
import '../styles/Question.css';

const QuestionPage = ({ 
  question, 
  questionNumber, 
  totalQuestions, 
  onAnswer, 
  onPrevious, 
  canGoBack 
}) => {
  return (
    <div className="question-page">
      <div className="question-container">
        {/* 진행 상황 표시 */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            ></div>
          </div>
          <span className="progress-text">
            {questionNumber} / {totalQuestions}
          </span>
        </div>

        {/* 질문 내용 */}
        <div className="question-content">
          <h2 className="question-title">{question.question}</h2>
          
          <div className="options">
            <button 
              className="option-button option-a"
              onClick={() => onAnswer('A')}
            >
              <span className="option-label">A</span>
              <span className="option-text">{question.optionA}</span>
            </button>
            
            <button 
              className="option-button option-b"
              onClick={() => onAnswer('B')}
            >
              <span className="option-label">B</span>
              <span className="option-text">{question.optionB}</span>
            </button>
          </div>
        </div>

        {/* 네비게이션 */}
        <div className="navigation">
          {canGoBack && (
            <button className="nav-button back-button" onClick={onPrevious}>
              이전 질문
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
