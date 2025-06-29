import React from 'react';
import '../styles/Main.css';

const MainPage = ({ onStart }) => (
  <div className="main-page">
    {/* 구름 여러 개 (이미지로 변경) */}
    <div className="cloud cloud1">
      <img src="/cloud1.png" alt="구름1" className="cloud-img" />
    </div>
    <div className="cloud cloud2">
      <img src="/cloud2.png" alt="구름2" className="cloud-img" />
    </div>
    <div className="cloud cloud4">
      <img src="/cloud4.png" alt="구름4" className="cloud-img" />
    </div>

    {/* 중앙 컨텐츠 */}
    <div className="main-content">
      <img 
        src="/88tour_logo_colored.png" 
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
