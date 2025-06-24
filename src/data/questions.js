export const questions = [
  {
    id: 1,
    question: "여행 중 숙소를 선택한다면?",
    optionA: "럭셔리 호텔에서 편안한 휴식하기",
    optionB: "현지 게스트하우스 체험하기",
    category: "comfort"
  },
  {
    id: 2,
    question: "여행 계획을 세울 때 당신의 스타일은?",
    optionA: "나는 파워 J! 철저한 계획적 여행",
    optionB: "가서 정하면 돼~ 즉흥적 여행",
    category: "planning"
  },
  {
    id: 3,
    question: "여행지에서 먼 거리를 이동할 때..",
    optionA: "편리한 현지대중교통 이용",
    optionB: "렌터카로 자유로운 이동",
    category: "freedom"
  },
  {
    id: 4,
    question: "여행지에서의 식사",
    optionA: "여기까지 온거 현지 음식 먹어야지!",
    optionB: "입맛에 안맞으면 어떡해.. 프랜차이즈 먹자!",
    category: "adventure"
  },
  {
    id: 5,
    question: "당신의 여행은..",
    optionA: "혼자만의 조용한 시간",
    optionB: "친구들과 함께하는 즐거운 시간",
    category: "social"
  },
  {
    id: 6,
    question: "여행 코스 짤 때 선택 기준은?",
    optionA: "유명한 관광지와 랜드마크",
    optionB: "현지인만 아는 숨겨진 명소",
    category: "exploration"
  },
  {
    id: 7,
    question: "여행지에서의 활동 성향은?",
    optionA: "스포츠와 액티비티 체험",
    optionB: "카페에서 여유로운 휴식",
    category: "activity"
  },
  {
    id: 8,
    question: "여행 중 쇼핑에 대한 생각은?",
    optionA: "내가 열심히 알바 뛴 것은 이 날을 위해.. 기념품 flex",
    optionB: "여행은 가성비지! 경험이 최고의 기념품이야",
    category: "material"
  },
  {
    id: 9,
    question: "여행 사진찍을 때 성향은?",
    optionA: "인증샷으로 추억 남기기",
    optionB: "눈으로 보고 마음에 담기",
    category: "documentation"
  },
  {
    id: 10,
    question: "여행 예산에 대한 접근법은?",
    optionA: "여행은 가성비가 최고",
    optionB: "돈 쓰려고 가는 것이 여행",
    category: "budget"
  },
  {
    id: 11,
    question: "선호하는 여행 시간대는?",
    optionA: "이른 아침 일출과 함께",
    optionB: "늦은 밤 야경과 함께",
    category: "timing"
  },
  {
    id: 12,
    question: "문화 체험 방식은?",
    optionA: "박물관과 역사 유적지 탐방",
    optionB: "현지 축제와 이벤트 참여",
    category: "culture"
  }
];

export const travelTypes = {
  adventurer: {
    name: "모험가형 여행자",
    description: "새로운 경험과 도전을 추구하는 당신! 미지의 세계를 탐험하는 것을 즐기며, 계획보다는 즉흥적인 여행을 선호합니다.",
    recommendations: [
      "모험가형 여행 추천 코스 1",
      "모험가형 여행 추천 코스 2",
      "모험가형 여행 추천 코스 3",
      "모험가형 여행 추천 코스 4"
    ],
    color: "#FF6B6B"
  },
  relaxer: {
    name: "휴양형 여행자",
    description: "편안한 휴식과 재충전을 원하는 당신! 스트레스 없는 여유로운 여행을 통해 일상의 피로를 풀고 싶어합니다.",
    recommendations: [
      "휴양형 여행 추천 코스 1",
      "휴양형 여행 추천 코스 2",
      "휴양형 여행 추천 코스 3",
      "휴양형 여행 추천 코스 4"
    ],
    color: "#4ECDC4"
  },
  culturalist: {
    name: "문화 탐방형 여행자",
    description: "역사와 문화에 깊은 관심을 가진 당신! 그 지역의 전통과 역사를 이해하고 체험하는 것을 중요하게 생각합니다.",
    recommendations: [
      "문화 탐방형 여행 추천 코스 1",
      "문화 탐방형 여행 추천 코스 2",
      "문화 탐방형 여행 추천 코스 3",
      "문화 탐방형 여행 추천 코스 4"
    ],
    color: "#45B7D1"
  },
  free_spirit: {
    name: "자유여행형 여행자",
    description: "자유롭고 유연한 여행을 즐기는 당신! 정해진 계획보다는 그 순간의 감정과 직감을 따라 움직이는 것을 좋아합니다.",
    recommendations: [
      "자유여행형 여행 추천 코스 1",
      "자유여행형 여행 추천 코스 2",
      "자유여행형 여행 추천 코스 3",
      "자유여행형 여행 추천 코스 4"
    ],
    color: "#96CEB4"
  }
};

export const analyzeResults = (answers) => {
  const scores = {
    adventurer: 0,
    relaxer: 0,
    culturalist: 0,
    free_spirit: 0
  };

  answers.forEach((answer, index) => {
    const question = questions[index];
    
    // 각 질문의 카테고리와 선택에 따라 점수 부여
    if (answer === 'A') {
      switch (question.category) {
        case 'comfort':
          scores.relaxer += 1;
          break;
        case 'planning':
          scores.culturalist += 1;
          break;
        case 'freedom':
          scores.relaxer += 1;
          break;
        case 'adventure':
          scores.adventurer += 1;
          break;
        case 'social':
          scores.free_spirit += 1;
          break;
        case 'exploration':
          scores.culturalist += 1;
          break;
        case 'activity':
          scores.adventurer += 1;
          break;
        case 'material':
          scores.relaxer += 1;
          break;
        case 'documentation':
          scores.culturalist += 1;
          break;
        case 'budget':
          scores.free_spirit += 1;
          break;
        case 'timing':
          scores.adventurer += 1;
          break;
        case 'culture':
          scores.culturalist += 1;
          break;
      }
    } else { // answer === 'B'
      switch (question.category) {
        case 'comfort':
          scores.adventurer += 1;
          break;
        case 'planning':
          scores.free_spirit += 1;
          break;
        case 'freedom':
          scores.adventurer += 1;
          break;
        case 'adventure':
          scores.relaxer += 1;
          break;
        case 'social':
          scores.relaxer += 1;
          break;
        case 'exploration':
          scores.adventurer += 1;
          break;
        case 'activity':
          scores.relaxer += 1;
          break;
        case 'material':
          scores.free_spirit += 1;
          break;
        case 'documentation':
          scores.free_spirit += 1;
          break;
        case 'budget':
          scores.relaxer += 1;
          break;
        case 'timing':
          scores.culturalist += 1;
          break;
        case 'culture':
          scores.free_spirit += 1;
          break;
      }
    }
  });

  // 가장 높은 점수의 여행 타입 찾기
  const maxScore = Math.max(...Object.values(scores));
  const resultType = Object.keys(scores).find(key => scores[key] === maxScore);
  
  return {
    type: resultType,
    scores: scores,
    ...travelTypes[resultType]
  };
};
