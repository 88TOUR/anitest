export const questions = [
  {
    id: 1,
    question: "여행 중 숙소를 선택한다면?",
    optionA: "럭셔리 호텔에서 편안한 휴식",
    optionB: "현지 게스트하우스에서 문화 체험",
    category: "comfort"
  },
  {
    id: 2,
    question: "여행 계획을 세울 때 당신의 스타일은?",
    optionA: "상세한 일정표와 예약 완료",
    optionB: "대략적인 계획으로 즉흥적 여행",
    category: "planning"
  },
  {
    id: 3,
    question: "여행지에서 이동 수단은?",
    optionA: "편리한 대중교통 이용",
    optionB: "렌터카로 자유로운 여행",
    category: "freedom"
  },
  {
    id: 4,
    question: "현지 음식에 대한 당신의 자세는?",
    optionA: "새로운 현지 음식에 도전",
    optionB: "익숙하고 안전한 음식 선택",
    category: "adventure"
  },
  {
    id: 5,
    question: "여행 동반자에 대한 선호는?",
    optionA: "혼자만의 조용한 시간",
    optionB: "친구들과 함께하는 즐거운 시간",
    category: "social"
  },
  {
    id: 6,
    question: "관광지 선택 기준은?",
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
    optionA: "기념품 쇼핑은 필수",
    optionB: "경험이 최고의 기념품",
    category: "material"
  },
  {
    id: 9,
    question: "여행 사진에 대한 당신의 스타일은?",
    optionA: "인증샷으로 추억 남기기",
    optionB: "눈으로 보고 마음에 담기",
    category: "documentation"
  },
  {
    id: 10,
    question: "여행 예산에 대한 접근법은?",
    optionA: "알뜰하게 절약하며 여행",
    optionB: "여행에는 투자를 아끼지 않기",
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
      "배낭여행으로 동남아시아 탐험",
      "히말라야 트레킹 도전",
      "아프리카 사파리 체험",
      "남미 잉카 트레일 하이킹"
    ],
    color: "#FF6B6B"
  },
  relaxer: {
    name: "휴양형 여행자",
    description: "편안한 휴식과 재충전을 원하는 당신! 스트레스 없는 여유로운 여행을 통해 일상의 피로를 풀고 싶어합니다.",
    recommendations: [
      "몰디브 리조트에서 해변 휴양",
      "제주도 펜션에서 힐링 여행",
      "온천 여행으로 몸과 마음 치유",
      "크루즈 여행으로 럭셔리 휴식"
    ],
    color: "#4ECDC4"
  },
  culturalist: {
    name: "문화 탐방형 여행자",
    description: "역사와 문화에 깊은 관심을 가진 당신! 그 지역의 전통과 역사를 이해하고 체험하는 것을 중요하게 생각합니다.",
    recommendations: [
      "유럽 박물관 투어",
      "일본 교토 문화 체험",
      "이집트 피라미드 탐방",
      "페루 마추픽추 역사 여행"
    ],
    color: "#45B7D1"
  },
  free_spirit: {
    name: "자유여행형 여행자",
    description: "자유롭고 유연한 여행을 즐기는 당신! 정해진 계획보다는 그 순간의 감정과 직감을 따라 움직이는 것을 좋아합니다.",
    recommendations: [
      "유럽 기차 여행 (유레일패스)",
      "호주 로드트립",
      "인도 배낭여행",
      "캐나다 캠핑카 여행"
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
