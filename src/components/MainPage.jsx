import React from 'react';
import '../styles/Main.css';

const MainPage = ({ onStart }) => {
  return (
    <div className="main-page">
      <div className="main-container">
        <div className="main-content">
          <img 
            src="/88tour_logo.jpg" 
            alt="여행 로고" 
            className="main-logo"
          />
          <h1 className="main-title">나만의 여행 성향 테스트</h1>
          <p className="main-description">
            나의 여행 유형을 통해<br />
            나만의 여행을 디자인하라!
          </p>
          <button 
            className="start-button"
            onClick={onStart}
          >
            테스트 시작하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
