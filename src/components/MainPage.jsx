import React from 'react';
import '../styles/Main.css';

const MainPage = ({ onStart }) => {
  return (
    <div className="main-page">
      <div className="main-container">
        <div className="main-content">
          <img 
            src="/airplane-logo.png" 
            alt="여행 로고" 
            className="main-logo"
          />
          <h1 className="main-title">여행 성향 파악 게임</h1>
          <p className="main-description">
            12개의 질문을 통해<br />
            당신만의 여행 스타일을 찾아보세요!
          </p>
          <button 
            className="start-button"
            onClick={onStart}
          >
            게임 시작하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
