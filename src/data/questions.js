export const questions = [
  {
    id: 1,
    question: "방학 때 여행을 간다면?",
    optionA: {
      text: "멀리 갈 필요 없지! 국내로 가자",
      image: "/optionA1.png"
    },
    optionB: {
      text: "여행은 chill해야지! 해외로 가자",
      image: "/optionB1.png"
    },
    category: "comfort"
  },
  {
    id: 2,
    question: "해외로 여행을 갈 때",
    optionA: "아는 만큼 보인다. 사전 조사하기",
    optionB: "맨땅에 헤딩하기",
    category: "planning"
  },
  {
    id: 3,
    question: "여행지에서 먼 거리를 이동할 때",
    optionA: "편리한 현지대중교통 이용",
    optionB: "렌터카로 자유로운 이동",
    category: "freedom"
  },
  {
    id: 4,
    question: "친구가 당장 내일 여행 떠나자고 한다면?",
    optionA: "내일...? 늦잠자고 쉬려고 했는데...",
    optionB: "너무 좋아!! 진행시켜~~",
    category: "adventure"
  },
  {
    id: 5,
    question: "여행을 누구랑 가지?",
    optionA: "동기들과 다 같이 여행",
    optionB: "나 홀로 여행",
    category: "social"
  },
  {
    id: 6,
    question: "친구랑 여행계획을 짜는데 뭔가 심상치 않다...",
    optionA: "엑셀로 1분단위 계획짜는 친구",
    optionB: "뉸뉴난나 그냥 가는거지 뭐~",
    category: "exploration"
  },
  {
    id: 7,
    question: "숙소가 애매하네...",
    optionA: "그냥 찜질방에서 자자",
    optionB: "여행까지 왔는데 풀빌라는 가야지!",
    category: "activity"
  },
  {
    id: 8,
    question: "한 달 살기 요즘 유행하네.. 나도 해볼까?",
    optionA: "제대로 즐기려면 최소 2주는 가야지!",
    optionB: "그래도 한 달은 좀.. 짧고 굵게 다녀오자!",
    category: "material"
  },
  {
    id: 9,
    question: "여행가서 친구와 싸웠을 때",
    optionA: "지금 끝장을 보자.",
    optionB: "그래도 즐겁게 여행왔는데.. 나중에 생각하자",
    category: "documentation"
  },
  {
    id: 10,
    question: "연차내고 신나게 여행을 왔는데, 직장상사에게 전화가 왔다.",
    optionA: "모른 척한다",
    optionB: "일은 일이니까 받는다",
    category: "budget"
  },
  {
    id: 11,
    question: "여행을 간다면",
    optionA: "여유.. 휴식.. 낭만.. 여행은 이거지..",
    optionB: "내 몸이 닳더라도 뽕은 뽑자",
    category: "timing"
  },
  {
    id: 12,
    question: "여행이 모두 끝나고 내 방 침대에 누워있을 때.. 드는 생각은?",
    optionA: "너무 행복하다.. 나중에 또 가야지~",
    optionB: "다녀오는거 좋은데 할게 쌓여있네..",
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
