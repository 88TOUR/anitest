import React from 'react';
import '../styles/Result.css';

// 여행유형별 추천 여행지(사진+텍스트) 예시 데이터
const travelRecommendations = {
  adventurer: [
    { title: "그랜드 캐니언", imageUrl: "/adventurer1.jpg", description: "웅장한 자연과 함께하는 하이킹" },
    { title: "마추픽추", imageUrl: "/adventurer2.jpg", description: "잉카 문명의 신비를 찾아서" },
    { title: "아프리카 사파리", imageUrl: "/adventurer3.jpg", description: "야생동물과 함께하는 모험" },
    { title: "알프스 트레킹", imageUrl: "/adventurer4.jpg", description: "유럽의 대자연을 만끽하는 트레킹" },
  ],
  relaxer: [
    { title: "몰디브", imageUrl: "/relaxer1.jpg", description: "에메랄드빛 바다에서의 완벽한 휴식" },
    { title: "발리", imageUrl: "/relaxer2.jpg", description: "힐링이 가득한 스파와 해변" },
    { title: "하와이", imageUrl: "/relaxer3.jpg", description: "파도 소리와 함께하는 여유로운 시간" },
    { title: "제주도", imageUrl: "/relaxer4.jpg", description: "국내 최고의 자연 휴양지" },
  ],
  culturalist: [
    { title: "로마", imageUrl: "/culturalist1.jpg", description: "고대 유적과 예술의 도시" },
    { title: "교토", imageUrl: "/culturalist2.jpg", description: "전통과 현대가 공존하는 일본의 문화 수도" },
    { title: "파리", imageUrl: "/culturalist3.jpg", description: "미술관과 카페가 어우러진 낭만의 도시" },
    { title: "경주", imageUrl: "/culturalist4.jpg", description: "천년 고도의 역사와 문화" },
  ],
  free_spirit: [
    { title: "호주 로드트립", imageUrl: "/free_spirit1.jpg", description: "끝없는 자유와 드라이브" },
    { title: "뉴질랜드 캠핑", imageUrl: "/free_spirit2.jpg", description: "대자연 속에서의 자유로운 캠핑" },
    { title: "스페인 바르셀로나", imageUrl: "/free_spirit3.jpg", description: "거리 예술과 자유로운 분위기" },
    { title: "태국 방콕", imageUrl: "/free_spirit4.jpg", description: "자유로운 여행자들의 천국" },
  ]
};

const ResultPage = ({ result, onRestart }) => {
  const recommendations = travelRecommendations[result.type] || [];
  const totalScore = Object.values(result.scores).reduce((sum, v) => sum + v, 0);
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
          
          {/* 추천 여행지: 사진+텍스트 카드 */}
          <div className="recommend-grid">
            {recommendations.map((rec, idx) => (
              <div className="recommend-card" key={idx}>
                <div className="recommend-img-wrapper">
                  <img
                    src={rec.imageUrl}
                    alt={rec.title}
                    className="recommend-img"
                    loading="lazy"
                  />
                </div>
                <div className="recommend-info">
                  <h3>{rec.title}</h3>
                  <p>{rec.description}</p>
                </div>
              </div>
            ))}
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
                        width: `${(score / totalScore) * 100}%`,
                        backgroundColor: type === result.type ? result.color : '#e0e0e0'
                      }}
                    ></div>
                  </div>
                  <span className="score-value">{Math.round((score / totalScore) * 100)}%</span>
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
