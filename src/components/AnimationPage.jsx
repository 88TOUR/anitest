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
          <div className="smoke-trail"></div>
          <img src="/myplane.png" alt="비행기" className="airplane-img" />
        </div>
        
        {/* 로딩 텍스트 */}
        <div className="loading-text">
          <span>여행지를 찾고 있어요</span>
          <span className="loading-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
         </span>
        </div>
      </div>
    </div>
  );
};

export default AnimationPage;
