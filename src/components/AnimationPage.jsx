import React from 'react';
import '../styles/Animation.css';

const AnimationPage = () => {
  return (
    <div className="animation-page">
      <div className="sky-background">
        {/* 구름들 */}
        <div className="clouds cloud1"></div>
        <div className="clouds cloud2"></div>
        <div className="clouds cloud3"></div>
        
        {/* 비행기 */}
        <div className="airplane">
          <div className="airplane-body"></div>
          <div className="airplane-wing"></div>
          <div className="airplane-tail"></div>
          <div className="airplane-smoke"></div>
        </div>
        
        {/* 로딩 텍스트 */}
        <div className="loading-text">
          <h2>여행지를 찾고 있어요...</h2>
          <div className="loading-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationPage;
