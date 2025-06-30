import React from 'react';
import '../styles/Result.css';

// 유형별 "당신만의 여행 스팟" 장소명 데이터
const mySpot = {
  adventurer: "홍대",
  relaxer: "서촌",
  culturalist: "인사동",
  free_spirit: "연남동"
};

// 여행유형별 추천 여행지(사진+텍스트) 예시 데이터
const travelRecommendations = {
  adventurer: [
    { title: "인왕산", imageUrls: ["/adventurer1-1.jpg"], description: "서울 한복판에서 자연과 한몸! 산도 타고, 계곡물에 발 담그며 쿨하게 리프레시!" },
    { title: "청운공원 & 윤동주 문학관", imageUrls: ["/adventurer2.jpg"], description: "시인의 숨결 따라 걷다 보면, 감성 충전 만렙! 조용하지만 강렬한 힐링 스팟이에요!" },
    { title: "'놋그릇가지런히' 전통카페", imageUrls: ["/adventurer3.jpg"], description: "고즈넉한 한옥과 반짝이는 놋그릇, 여기서만 느낄 수 있는 전통美 폭발!" },
    { title: "낙산공원 & 청계천", imageUrls: ["/adventurer4-2.jpg"], description: "성곽길 따라 걷고, 청계천 물소리에 귀 기울이면 도심 속 모험 끝판왕!" },
  ],   
  relaxer: [
    { title: "학고재", imageUrls: ["/relaxer1.jpg"], description: "예술 한가득! 감성 자극 전시장에서 사색에 잠겨봐요!" },
    { title: "더 마틴", imageUrls: ["/relaxer2.jpg"], description: "느좋분좋 카페에서 커피 한잔, 나만의 여유를 제대로 만끽!" },
    { title: "서촌 그 책방", imageUrls: ["/relaxer3-2.jpg"], description: "책과 예술이 한자리에! 조용한 공간에서 나만의 세계로 푹 빠져봐." },
    { title: "에무시네마", imageUrls: ["/relaxer4.jpg"], description: "독립영화, 예술영화로 감성 폭발! 도심 속 작은 영화관에서 특별한 시간!" },
  ],
  culturalist: [
    { title: "다이나믹 메이즈", imageUrls: ["/culturalist1.jpg"], description: "미로 탈출, 머리와 몸이 다 바빠진다! 친구들과 짜릿하게 도전!" },
    { title: "한옥랑솜", imageUrls: ["/culturalist2.jpg"], description: "한옥 감성+인생샷 명소! 분위기와 맛, 둘 다 잡았다!" },
    { title: "박물관은 살아있다", imageUrls: ["/culturalist3.jpg"], description: "착시와 환상, 사진 찍는 재미가 폭발하는 체험형 박물관!" },
    { title: "인사동 쌈지길", imageUrls: ["/culturalist4.jpg"], description: "전통과 트렌드가 만나는 골목에서, 쇼핑과 산책의 즐거움이 한가득!" },
  ],
  free_spirit: [
    { title: "연남 무인공방", imageUrls: ["/free_spirit1-2.jpg"], description: "직접 만들고, 직접 즐긴다! 취미+추억, 둘 다 챙기는 원데이 클래스!" },
    { title: "언플러그드 홍대", imageUrls: ["/free_spirit2.jpg"], description: "홍대 인디밴드 라이브로 에너지 폭발! 음악과 함께 신나는 밤!" },
    { title: "팀랩 라이프 (teamLab: LIFE)", imageUrls: ["/free_spirit3.jpg"], description: "빛과 예술의 환상적인 콜라보! 몰입감 200% 미디어 아트 전시!" },
    { title: "경의선 책거리", imageUrls: ["/free_spirit4.jpg"], description: "책, 예술, 음악이 어우러진 산책길에서 감성 충전 제대로!" },
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
          
          {/* ====== 여기 추가 ====== */}
          <div className="myspot-block">
              <div className="myspot-container">
              <h3 className="myspot-title">당신만의 여행 스팟</h3>
              <div className="myspot-place">{mySpot[result.type]}</div>
            </div>
          </div>

          {/* ===================== */}

          {/* 추천 여행지: 사진+텍스트 카드 */}
          <div className="recommend-grid">
            {recommendations.map((rec, idx) => (
              <div className="recommend-card" key={idx}>
                <div className="recommend-img-wrapper">
                  {rec.imageUrls.map((imgUrl, i) => (
                   <img
                        key={i}
                        src={imgUrl}
                        alt={rec.title}
                        className="recommend-img"
                        loading="lazy"
                       />
                      ))}
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

          <div className="insta-promo-wrapper">
            <div className="insta-promo-container">
              <a
                href="https://www.instagram.com/88tour_official"
                target="_blank"
                rel="noopener noreferrer"
                className="insta-link"
              >
                <div className="insta-icon">
                  📷
                </div>
                <div className="insta-content">
                  <h4 className="insta-title">더 많은 여행 정보를 원한다면?</h4>
                  <p className="insta-text">
                    <span className="insta-id">@88tour_official</span>을 팔로우하고<br />
                    특별한 여행 소식을 받아보세요!
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* ===== 2. 이벤트 이미지 (화면 전체 너비) ===== */}
          <div className="event-image-section">
            <img
              src="/gift.png"
              alt="88투어 이벤트"
              className="event-full-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
      
export default ResultPage;
