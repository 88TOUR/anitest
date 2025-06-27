import React from 'react';
import '../styles/Main.css';

const MainPage = ({ onStart }) => (
  <div className="main-page">
    {/* 구름 여러 개 */}
    <div className="cloud cloud1"></div>
    <div className="cloud cloud2"></div>
    <div className="cloud cloud3"></div>
    <div className="cloud cloud4"></div>
    {/* 비행기 */}
    <div className="airplane"></div>

    {/* 중앙 컨텐츠 */}
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
      <button className="start-button" onClick={onStart}>
        테스트 시작하기 ✈️
      </button>
    </div>
  </div>
);

export default MainPage;
