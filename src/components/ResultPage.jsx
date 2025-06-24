import React from 'react';
import '../styles/Result.css';

const ResultPage = ({ result, onRestart }) => {
  return (
    <div className="result-page">
      <div className="result-container">
        <div className="result-content">
          <div className="result-header">
            <h1 className="result-title">{result.name}</h1>
            <div 
              className="result-icon"
              style={{ backgroundColor: result.color }}
            >
              ✈️
            </div>
          </div>
          
          <p className="result-description">{result.description}</p>
          
          <div className="recommendations">
            <h3>추천 여행지</h3>
            <ul className="recommendation-list">
              {result.recommendations.map((recommendation, index) => (
                <li key={index} className="recommendation-item">
                  {recommendation}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="score-breakdown">
            <h3>성향 분석</h3>
            <div className="scores">
              {Object.entries(result.scores).map(([type, score]) => (
                <div key={type} className="score-item">
                  <span className="score-label">
                    {type === 'adventurer' && '모험가형'}
                    {type === 'relaxer' && '휴양형'}
                    {type === 'culturalist' && '문화탐방형'}
                    {type === 'free_spirit' && '자유여행형'}
                  </span>
                  <div className="score-bar">
                    <div 
                      className="score-fill"
                      style={{ 
                        width: `${(score / 12) * 100}%`,
                        backgroundColor: type === result.type ? result.color : '#e0e0e0'
                      }}
                    ></div>
                  </div>
                  <span className="score-value">{Math.round((score / 12) * 100)}%</span>
                </div>
              ))}
            </div>
          </div>
          
          <button className="restart-button" onClick={onRestart}>
            다시 하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
