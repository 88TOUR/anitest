import React, { useState } from 'react';
import '../styles/Question.css';

const QuestionPage = ({ 
  question, 
  questionNumber, 
  totalQuestions, 
  onAnswer, 
  onPrevious, 
  canGoBack 
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      onAnswer(selectedOption);
    }
  };

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
            <span className="progress-current">{questionNumber}</span>
            <span className="progress-total"> / {totalQuestions}</span>
          </span>
        </div>

        {/* 질문 내용 */}
         <div className="question-content">
          <h2 className="question-title">{question.question}</h2>
          
          <div className="options">
            <button 
              className={`option-button option-a ${selectedOption === 'A' ? 'selected' : ''}`}
              onClick={() => handleOptionSelect('A')}
            >
              <img
                src={question.optionA.image}
                alt="선택지 A 이미지"
                className="option-img"
              />
              <span className="option-text">{question.optionA.text}</span>
            </button>
            
            <button 
              className={`option-button option-b ${selectedOption === 'B' ? 'selected' : ''}`}
              onClick={() => handleOptionSelect('B')}
            >
              <img
                src={question.optionB.image}
                alt="선택지 B 이미지"
                className="option-img"
              />
              <span className="option-text">{question.optionB.text}</span>
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
          <button 
            className={`nav-button next-button ${!selectedOption ? 'disabled' : ''}`}
            onClick={handleNext}
            disabled={!selectedOption}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
