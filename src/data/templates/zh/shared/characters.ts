export type SharedCharacterData = {
  idSuffix: string;
  nativeLabel: string;
  guidePathD: string;
  strokeGuides: { pathD: string; order: number }[];
  label: { hans: { ko: string; en: string }; hant: { ko: string; en: string } };
  cue: { hans: { ko: string; en: string }; hant: { ko: string; en: string } };
  description: { hans: { ko: string; en: string }; hant: { ko: string; en: string } };
};

export const BASIC_CHARACTERS: SharedCharacterData[] = [
  /* ── Numbers ── */
  {
    idSuffix: "yi",
    nativeLabel: "一",
    guidePathD: "M15 50 H85",
    strokeGuides: [{ pathD: "M15 50 H85", order: 1 }],
    label: {
      hans: { ko: "일 (一)", en: "One (一)" },
      hant: { ko: "일 (一)", en: "One (一)" },
    },
    cue: {
      hans: { ko: "왼쪽에서 오른쪽으로 한 획을 긋습니다.", en: "Draw one horizontal stroke from left to right." },
      hant: { ko: "왼쪽에서 오른쪽으로 한 획을 긋습니다.", en: "Draw one horizontal stroke from left to right." },
    },
    description: {
      hans: { ko: "숫자 1을 뜻하는 한자 '一(yī)' 연습용 템플릿입니다.", en: "Practice template for '一' (yī, one)." },
      hant: { ko: "숫자 1을 뜻하는 한자 '一(yī)' 연습용 템플릿입니다.", en: "Practice template for '一' (yī, one)." },
    },
  },
  {
    idSuffix: "er",
    nativeLabel: "二",
    guidePathD: "M20 35 H80 M20 65 H80",
    strokeGuides: [
      { pathD: "M20 35 H80", order: 1 },
      { pathD: "M20 65 H80", order: 2 },
    ],
    label: {
      hans: { ko: "이 (二)", en: "Two (二)" },
      hant: { ko: "이 (二)", en: "Two (二)" },
    },
    cue: {
      hans: { ko: "위쪽 가로획을 먼저 긋고, 아래쪽 가로획을 긋습니다.", en: "Draw the top horizontal stroke first, then the bottom one." },
      hant: { ko: "위쪽 가로획을 먼저 긋고, 아래쪽 가로획을 긋습니다.", en: "Draw the top horizontal stroke first, then the bottom one." },
    },
    description: {
      hans: { ko: "숫자 2를 뜻하는 한자 '二(èr)' 연습용 템플릿입니다.", en: "Practice template for '二' (èr, two)." },
      hant: { ko: "숫자 2를 뜻하는 한자 '二(èr)' 연습용 템플릿입니다.", en: "Practice template for '二' (èr, two)." },
    },
  },
  {
    idSuffix: "san",
    nativeLabel: "三",
    guidePathD: "M20 25 H80 M20 50 H80 M20 75 H80",
    strokeGuides: [
      { pathD: "M20 25 H80", order: 1 },
      { pathD: "M20 50 H80", order: 2 },
      { pathD: "M20 75 H80", order: 3 },
    ],
    label: {
      hans: { ko: "삼 (三)", en: "Three (三)" },
      hant: { ko: "삼 (三)", en: "Three (三)" },
    },
    cue: {
      hans: { ko: "위에서 아래로 세 개의 가로획을 차례로 긋습니다.", en: "Draw three horizontal strokes from top to bottom." },
      hant: { ko: "위에서 아래로 세 개의 가로획을 차례로 긋습니다.", en: "Draw three horizontal strokes from top to bottom." },
    },
    description: {
      hans: { ko: "숫자 3을 뜻하는 한자 '三(sān)' 연습용 템플릿입니다.", en: "Practice template for '三' (sān, three)." },
      hant: { ko: "숫자 3을 뜻하는 한자 '三(sān)' 연습용 템플릿입니다.", en: "Practice template for '三' (sān, three)." },
    },
  },
  {
    idSuffix: "si",
    nativeLabel: "四",
    guidePathD: "M25 20 V80 M75 20 V80 M25 20 H75 M25 80 H75 M40 35 V60 M60 35 C60 55, 50 65, 40 70",
    strokeGuides: [
      { pathD: "M25 20 V80", order: 1 },
      { pathD: "M25 20 H75 V80", order: 2 },
      { pathD: "M25 80 H75", order: 3 },
      { pathD: "M40 35 V60", order: 4 },
      { pathD: "M60 35 C60 55, 50 65, 40 70", order: 5 },
    ],
    label: {
      hans: { ko: "사 (四)", en: "Four (四)" },
      hant: { ko: "사 (四)", en: "Four (四)" },
    },
    cue: {
      hans: { ko: "바깥 틀을 먼저 그리고, 안쪽 획을 채웁니다.", en: "Draw the outer frame first, then fill in the inner strokes." },
      hant: { ko: "바깥 틀을 먼저 그리고, 안쪽 획을 채웁니다.", en: "Draw the outer frame first, then fill in the inner strokes." },
    },
    description: {
      hans: { ko: "숫자 4를 뜻하는 한자 '四(sì)' 연습용 템플릿입니다.", en: "Practice template for '四' (sì, four)." },
      hant: { ko: "숫자 4를 뜻하는 한자 '四(sì)' 연습용 템플릿입니다.", en: "Practice template for '四' (sì, four)." },
    },
  },
  {
    idSuffix: "wu",
    nativeLabel: "五",
    guidePathD: "M20 20 H80 M35 20 V50 M25 50 H75 V80 M20 80 H80",
    strokeGuides: [
      { pathD: "M20 20 H80", order: 1 },
      { pathD: "M35 20 V50", order: 2 },
      { pathD: "M25 50 H75", order: 3 },
      { pathD: "M75 50 V80", order: 4 },
    ],
    label: {
      hans: { ko: "오 (五)", en: "Five (五)" },
      hant: { ko: "오 (五)", en: "Five (五)" },
    },
    cue: {
      hans: { ko: "위 가로획, 세로획, 아래 가로획 순서로 씁니다.", en: "Draw top horizontal, vertical, then bottom horizontal strokes." },
      hant: { ko: "위 가로획, 세로획, 아래 가로획 순서로 씁니다.", en: "Draw top horizontal, vertical, then bottom horizontal strokes." },
    },
    description: {
      hans: { ko: "숫자 5를 뜻하는 한자 '五(wǔ)' 연습용 템플릿입니다.", en: "Practice template for '五' (wǔ, five)." },
      hant: { ko: "숫자 5를 뜻하는 한자 '五(wǔ)' 연습용 템플릿입니다.", en: "Practice template for '五' (wǔ, five)." },
    },
  },
  {
    idSuffix: "liu",
    nativeLabel: "六",
    guidePathD: "M50 15 C52 20, 54 25, 52 30 M20 40 H80 M45 45 C35 60, 20 75, 15 80 M55 45 C65 60, 75 70, 80 80",
    strokeGuides: [
      { pathD: "M50 15 C52 20, 54 25, 52 30", order: 1 },
      { pathD: "M20 40 H80", order: 2 },
      { pathD: "M45 45 C35 60, 20 75, 15 80", order: 3 },
      { pathD: "M55 45 C65 60, 75 70, 80 80", order: 4 },
    ],
    label: {
      hans: { ko: "육 (六)", en: "Six (六)" },
      hant: { ko: "육 (六)", en: "Six (六)" },
    },
    cue: {
      hans: { ko: "점, 가로획, 왼쪽 삐침, 오른쪽 파임 순서입니다.", en: "Dot, horizontal, left-falling, then right-falling strokes." },
      hant: { ko: "점, 가로획, 왼쪽 삐침, 오른쪽 파임 순서입니다.", en: "Dot, horizontal, left-falling, then right-falling strokes." },
    },
    description: {
      hans: { ko: "숫자 6을 뜻하는 한자 '六(liù)' 연습용 템플릿입니다.", en: "Practice template for '六' (liù, six)." },
      hant: { ko: "숫자 6을 뜻하는 한자 '六(liù)' 연습용 템플릿입니다.", en: "Practice template for '六' (liù, six)." },
    },
  },
  {
    idSuffix: "qi",
    nativeLabel: "七",
    guidePathD: "M20 40 H80 M55 20 V80",
    strokeGuides: [
      { pathD: "M20 40 H80", order: 1 },
      { pathD: "M55 20 V80", order: 2 },
    ],
    label: {
      hans: { ko: "칠 (七)", en: "Seven (七)" },
      hant: { ko: "칠 (七)", en: "Seven (七)" },
    },
    cue: {
      hans: { ko: "가로획을 먼저 긋고 세로획으로 관통합니다.", en: "Draw the horizontal stroke first, then the vertical crossing stroke." },
      hant: { ko: "가로획을 먼저 긋고 세로획으로 관통합니다.", en: "Draw the horizontal stroke first, then the vertical crossing stroke." },
    },
    description: {
      hans: { ko: "숫자 7을 뜻하는 한자 '七(qī)' 연습용 템플릿입니다.", en: "Practice template for '七' (qī, seven)." },
      hant: { ko: "숫자 7을 뜻하는 한자 '七(qī)' 연습용 템플릿입니다.", en: "Practice template for '七' (qī, seven)." },
    },
  },
  {
    idSuffix: "ba",
    nativeLabel: "八",
    guidePathD: "M45 25 C35 45, 20 65, 15 80 M55 25 C65 45, 75 65, 85 80",
    strokeGuides: [
      { pathD: "M45 25 C35 45, 20 65, 15 80", order: 1 },
      { pathD: "M55 25 C65 45, 75 65, 85 80", order: 2 },
    ],
    label: {
      hans: { ko: "팔 (八)", en: "Eight (八)" },
      hant: { ko: "팔 (八)", en: "Eight (八)" },
    },
    cue: {
      hans: { ko: "왼쪽 삐침을 먼저, 오른쪽 파임을 나중에 씁니다.", en: "Draw the left-falling stroke first, then the right-falling stroke." },
      hant: { ko: "왼쪽 삐침을 먼저, 오른쪽 파임을 나중에 씁니다.", en: "Draw the left-falling stroke first, then the right-falling stroke." },
    },
    description: {
      hans: { ko: "숫자 8을 뜻하는 한자 '八(bā)' 연습용 템플릿입니다.", en: "Practice template for '八' (bā, eight)." },
      hant: { ko: "숫자 8을 뜻하는 한자 '八(bā)' 연습용 템플릿입니다.", en: "Practice template for '八' (bā, eight)." },
    },
  },
  {
    idSuffix: "jiu",
    nativeLabel: "九",
    guidePathD: "M45 20 C35 40, 25 55, 20 70 M45 20 H70 V50 C70 65, 60 75, 80 85",
    strokeGuides: [
      { pathD: "M45 20 C35 40, 25 55, 20 70", order: 1 },
      { pathD: "M45 20 H70 V50 C70 65, 60 75, 80 85", order: 2 },
    ],
    label: {
      hans: { ko: "구 (九)", en: "Nine (九)" },
      hant: { ko: "구 (九)", en: "Nine (九)" },
    },
    cue: {
      hans: { ko: "삐침을 먼저 긋고, 가로-꺾음-파임 순서로 이어 씁니다.", en: "Left-falling stroke first, then horizontal-turn-right-falling." },
      hant: { ko: "삐침을 먼저 긋고, 가로-꺾음-파임 순서로 이어 씁니다.", en: "Left-falling stroke first, then horizontal-turn-right-falling." },
    },
    description: {
      hans: { ko: "숫자 9를 뜻하는 한자 '九(jiǔ)' 연습용 템플릿입니다.", en: "Practice template for '九' (jiǔ, nine)." },
      hant: { ko: "숫자 9를 뜻하는 한자 '九(jiǔ)' 연습용 템플릿입니다.", en: "Practice template for '九' (jiǔ, nine)." },
    },
  },
  {
    idSuffix: "shi",
    nativeLabel: "十",
    guidePathD: "M15 50 H85 M50 20 V80",
    strokeGuides: [
      { pathD: "M15 50 H85", order: 1 },
      { pathD: "M50 20 V80", order: 2 },
    ],
    label: {
      hans: { ko: "십 (十)", en: "Ten (十)" },
      hant: { ko: "십 (十)", en: "Ten (十)" },
    },
    cue: {
      hans: { ko: "가로획을 먼저 긋고 세로획을 내립니다.", en: "Draw the horizontal stroke first, then the vertical stroke." },
      hant: { ko: "가로획을 먼저 긋고 세로획을 내립니다.", en: "Draw the horizontal stroke first, then the vertical stroke." },
    },
    description: {
      hans: { ko: "숫자 10을 뜻하는 한자 '十(shí)' 연습용 템플릿입니다.", en: "Practice template for '十' (shí, ten)." },
      hant: { ko: "숫자 10을 뜻하는 한자 '十(shí)' 연습용 템플릿입니다.", en: "Practice template for '十' (shí, ten)." },
    },
  },
  /* ── People / Size / Direction ── */
  {
    idSuffix: "ren",
    nativeLabel: "人",
    guidePathD: "M50 20 C40 45, 25 65, 15 80 M50 20 C60 45, 70 60, 85 80",
    strokeGuides: [
      { pathD: "M50 20 C40 45, 25 65, 15 80", order: 1 },
      { pathD: "M50 20 C60 45, 70 60, 85 80", order: 2 },
    ],
    label: {
      hans: { ko: "인 (人)", en: "Person (人)" },
      hant: { ko: "인 (人)", en: "Person (人)" },
    },
    cue: {
      hans: { ko: "삐침을 먼저 쓰고, 파임을 씁니다.", en: "Left-falling stroke first, then right-falling stroke." },
      hant: { ko: "삐침을 먼저 쓰고, 파임을 씁니다.", en: "Left-falling stroke first, then right-falling stroke." },
    },
    description: {
      hans: { ko: "'사람'을 뜻하는 한자 '人(rén)' 연습용 템플릿입니다.", en: "Practice template for '人' (rén, person)." },
      hant: { ko: "'사람'을 뜻하는 한자 '人(rén)' 연습용 템플릿입니다.", en: "Practice template for '人' (rén, person)." },
    },
  },
  {
    idSuffix: "da",
    nativeLabel: "大",
    guidePathD: "M15 40 H85 M50 15 V80 M50 40 C35 55, 18 70, 12 82 M50 40 C65 55, 82 70, 88 82",
    strokeGuides: [
      { pathD: "M15 40 H85", order: 1 },
      { pathD: "M50 40 C35 55, 18 70, 12 82", order: 2 },
      { pathD: "M50 40 C65 55, 82 70, 88 82", order: 3 },
    ],
    label: {
      hans: { ko: "대 (大)", en: "Big (大)" },
      hant: { ko: "대 (大)", en: "Big (大)" },
    },
    cue: {
      hans: { ko: "가로획, 삐침, 파임 순서로 씁니다.", en: "Horizontal, left-falling, then right-falling strokes." },
      hant: { ko: "가로획, 삐침, 파임 순서로 씁니다.", en: "Horizontal, left-falling, then right-falling strokes." },
    },
    description: {
      hans: { ko: "'크다'를 뜻하는 한자 '大(dà)' 연습용 템플릿입니다.", en: "Practice template for '大' (dà, big)." },
      hant: { ko: "'크다'를 뜻하는 한자 '大(dà)' 연습용 템플릿입니다.", en: "Practice template for '大' (dà, big)." },
    },
  },
  {
    idSuffix: "xiao",
    nativeLabel: "小",
    guidePathD: "M50 15 V75 M30 35 C25 50, 20 60, 15 70 M70 35 C75 50, 80 60, 85 70",
    strokeGuides: [
      { pathD: "M50 15 V75", order: 1 },
      { pathD: "M30 35 C25 50, 20 60, 15 70", order: 2 },
      { pathD: "M70 35 C75 50, 80 60, 85 70", order: 3 },
    ],
    label: {
      hans: { ko: "소 (小)", en: "Small (小)" },
      hant: { ko: "소 (小)", en: "Small (小)" },
    },
    cue: {
      hans: { ko: "세로획을 먼저 내리고, 왼쪽·오른쪽 점을 씁니다.", en: "Vertical stroke first, then left and right dots." },
      hant: { ko: "세로획을 먼저 내리고, 왼쪽·오른쪽 점을 씁니다.", en: "Vertical stroke first, then left and right dots." },
    },
    description: {
      hans: { ko: "'작다'를 뜻하는 한자 '小(xiǎo)' 연습용 템플릿입니다.", en: "Practice template for '小' (xiǎo, small)." },
      hant: { ko: "'작다'를 뜻하는 한자 '小(xiǎo)' 연습용 템플릿입니다.", en: "Practice template for '小' (xiǎo, small)." },
    },
  },
  {
    idSuffix: "shang",
    nativeLabel: "上",
    guidePathD: "M50 25 V75 M30 50 H70 M20 75 H80",
    strokeGuides: [
      { pathD: "M50 25 V75", order: 1 },
      { pathD: "M30 50 H70", order: 2 },
      { pathD: "M20 75 H80", order: 3 },
    ],
    label: {
      hans: { ko: "상 (上)", en: "Up (上)" },
      hant: { ko: "상 (上)", en: "Up (上)" },
    },
    cue: {
      hans: { ko: "세로획, 짧은 가로획, 긴 가로획 순서입니다.", en: "Vertical, short horizontal, then long horizontal." },
      hant: { ko: "세로획, 짧은 가로획, 긴 가로획 순서입니다.", en: "Vertical, short horizontal, then long horizontal." },
    },
    description: {
      hans: { ko: "'위'를 뜻하는 한자 '上(shàng)' 연습용 템플릿입니다.", en: "Practice template for '上' (shàng, up)." },
      hant: { ko: "'위'를 뜻하는 한자 '上(shàng)' 연습용 템플릿입니다.", en: "Practice template for '上' (shàng, up)." },
    },
  },
  {
    idSuffix: "xia",
    nativeLabel: "下",
    guidePathD: "M20 25 H80 M50 25 V75 M30 50 H50",
    strokeGuides: [
      { pathD: "M20 25 H80", order: 1 },
      { pathD: "M50 25 V75", order: 2 },
      { pathD: "M30 50 H50", order: 3 },
    ],
    label: {
      hans: { ko: "하 (下)", en: "Down (下)" },
      hant: { ko: "하 (下)", en: "Down (下)" },
    },
    cue: {
      hans: { ko: "긴 가로획, 세로획, 짧은 점 순서입니다.", en: "Long horizontal, vertical, then short dot." },
      hant: { ko: "긴 가로획, 세로획, 짧은 점 순서입니다.", en: "Long horizontal, vertical, then short dot." },
    },
    description: {
      hans: { ko: "'아래'를 뜻하는 한자 '下(xià)' 연습용 템플릿입니다.", en: "Practice template for '下' (xià, down)." },
      hant: { ko: "'아래'를 뜻하는 한자 '下(xià)' 연습용 템플릿입니다.", en: "Practice template for '下' (xià, down)." },
    },
  },
  {
    idSuffix: "zuo",
    nativeLabel: "左",
    guidePathD: "M50 15 C40 30, 25 45, 15 55 M20 40 H80 M45 40 V80 M30 60 H65 M35 80 H60",
    strokeGuides: [
      { pathD: "M50 15 C40 30, 25 45, 15 55", order: 1 },
      { pathD: "M20 40 H80", order: 2 },
      { pathD: "M45 40 V80", order: 3 },
      { pathD: "M30 60 H65", order: 4 },
      { pathD: "M35 80 H60", order: 5 },
    ],
    label: {
      hans: { ko: "좌 (左)", en: "Left (左)" },
      hant: { ko: "좌 (左)", en: "Left (左)" },
    },
    cue: {
      hans: { ko: "삐침부터 시작해 가로·세로·가로 순서로 씁니다.", en: "Start with the left-falling stroke, then horizontal-vertical-horizontal." },
      hant: { ko: "삐침부터 시작해 가로·세로·가로 순서로 씁니다.", en: "Start with the left-falling stroke, then horizontal-vertical-horizontal." },
    },
    description: {
      hans: { ko: "'왼쪽'을 뜻하는 한자 '左(zuǒ)' 연습용 템플릿입니다.", en: "Practice template for '左' (zuǒ, left)." },
      hant: { ko: "'왼쪽'을 뜻하는 한자 '左(zuǒ)' 연습용 템플릿입니다.", en: "Practice template for '左' (zuǒ, left)." },
    },
  },
  {
    idSuffix: "you",
    nativeLabel: "右",
    guidePathD: "M50 15 C60 30, 75 45, 85 55 M20 40 H80 M35 40 V80 M30 60 H65",
    strokeGuides: [
      { pathD: "M50 15 C60 30, 75 45, 85 55", order: 1 },
      { pathD: "M20 40 H80", order: 2 },
      { pathD: "M35 40 V80", order: 3 },
      { pathD: "M30 60 H65", order: 4 },
    ],
    label: {
      hans: { ko: "우 (右)", en: "Right (右)" },
      hant: { ko: "우 (右)", en: "Right (右)" },
    },
    cue: {
      hans: { ko: "가로획, 삐침, 입 구(口) 순서로 씁니다.", en: "Horizontal, left-falling, then the mouth radical." },
      hant: { ko: "가로획, 삐침, 입 구(口) 순서로 씁니다.", en: "Horizontal, left-falling, then the mouth radical." },
    },
    description: {
      hans: { ko: "'오른쪽'을 뜻하는 한자 '右(yòu)' 연습용 템플릿입니다.", en: "Practice template for '右' (yòu, right)." },
      hant: { ko: "'오른쪽'을 뜻하는 한자 '右(yòu)' 연습용 템플릿입니다.", en: "Practice template for '右' (yòu, right)." },
    },
  },
  {
    idSuffix: "zhong",
    nativeLabel: "中",
    guidePathD: "M25 25 V75 M75 25 V75 M25 25 H75 M25 75 H75 M50 15 V85",
    strokeGuides: [
      { pathD: "M25 25 V75", order: 1 },
      { pathD: "M25 25 H75 V75", order: 2 },
      { pathD: "M25 75 H75", order: 3 },
      { pathD: "M50 15 V85", order: 4 },
    ],
    label: {
      hans: { ko: "중 (中)", en: "Middle (中)" },
      hant: { ko: "중 (中)", en: "Middle (中)" },
    },
    cue: {
      hans: { ko: "바깥 네모를 먼저 그리고, 세로획으로 관통합니다.", en: "Draw the outer rectangle first, then the vertical stroke through the center." },
      hant: { ko: "바깥 네모를 먼저 그리고, 세로획으로 관통합니다.", en: "Draw the outer rectangle first, then the vertical stroke through the center." },
    },
    description: {
      hans: { ko: "'가운데'를 뜻하는 한자 '中(zhōng)' 연습용 템플릿입니다.", en: "Practice template for '中' (zhōng, middle)." },
      hant: { ko: "'가운데'를 뜻하는 한자 '中(zhōng)' 연습용 템플릿입니다.", en: "Practice template for '中' (zhōng, middle)." },
    },
  },
  /* ── Nature ── */
  {
    idSuffix: "kou",
    nativeLabel: "口",
    guidePathD: "M25 25 V75 M75 25 V75 M25 25 H75 M25 75 H75",
    strokeGuides: [
      { pathD: "M25 25 V75", order: 1 },
      { pathD: "M25 25 H75 V75", order: 2 },
      { pathD: "M25 75 H75", order: 3 },
    ],
    label: {
      hans: { ko: "구 (口)", en: "Mouth (口)" },
      hant: { ko: "구 (口)", en: "Mouth (口)" },
    },
    cue: {
      hans: { ko: "왼쪽 세로, 위 가로+오른쪽 세로, 아래 가로 순서입니다.", en: "Left vertical, top horizontal + right vertical, then bottom horizontal." },
      hant: { ko: "왼쪽 세로, 위 가로+오른쪽 세로, 아래 가로 순서입니다.", en: "Left vertical, top horizontal + right vertical, then bottom horizontal." },
    },
    description: {
      hans: { ko: "'입'을 뜻하는 한자 '口(kǒu)' 연습용 템플릿입니다.", en: "Practice template for '口' (kǒu, mouth)." },
      hant: { ko: "'입'을 뜻하는 한자 '口(kǒu)' 연습용 템플릿입니다.", en: "Practice template for '口' (kǒu, mouth)." },
    },
  },
  {
    idSuffix: "ri",
    nativeLabel: "日",
    guidePathD: "M30 20 V80 M70 20 V80 M30 20 H70 M30 50 H70 M30 80 H70",
    strokeGuides: [
      { pathD: "M30 20 V80", order: 1 },
      { pathD: "M30 20 H70 V80", order: 2 },
      { pathD: "M30 50 H70", order: 3 },
      { pathD: "M30 80 H70", order: 4 },
    ],
    label: {
      hans: { ko: "일 (日)", en: "Sun/Day (日)" },
      hant: { ko: "일 (日)", en: "Sun/Day (日)" },
    },
    cue: {
      hans: { ko: "바깥 틀을 그리고 가운데 가로획을 넣습니다.", en: "Draw the frame, then add the middle horizontal bar." },
      hant: { ko: "바깥 틀을 그리고 가운데 가로획을 넣습니다.", en: "Draw the frame, then add the middle horizontal bar." },
    },
    description: {
      hans: { ko: "'해/날'을 뜻하는 한자 '日(rì)' 연습용 템플릿입니다.", en: "Practice template for '日' (rì, sun/day)." },
      hant: { ko: "'해/날'을 뜻하는 한자 '日(rì)' 연습용 템플릿입니다.", en: "Practice template for '日' (rì, sun/day)." },
    },
  },
  {
    idSuffix: "yue",
    nativeLabel: "月",
    guidePathD: "M35 15 C30 20, 28 40, 28 80 M65 15 V80 M35 15 H65 M28 80 H65 M35 40 H60 M35 60 H60",
    strokeGuides: [
      { pathD: "M35 15 C30 20, 28 40, 28 80", order: 1 },
      { pathD: "M35 15 H65 V80", order: 2 },
      { pathD: "M28 80 H65", order: 3 },
      { pathD: "M35 40 H60", order: 4 },
      { pathD: "M35 60 H60", order: 5 },
    ],
    label: {
      hans: { ko: "월 (月)", en: "Moon/Month (月)" },
      hant: { ko: "월 (月)", en: "Moon/Month (月)" },
    },
    cue: {
      hans: { ko: "바깥 틀을 그린 뒤 안쪽 두 가로획을 넣습니다.", en: "Draw the outer frame, then add two inner horizontal bars." },
      hant: { ko: "바깥 틀을 그린 뒤 안쪽 두 가로획을 넣습니다.", en: "Draw the outer frame, then add two inner horizontal bars." },
    },
    description: {
      hans: { ko: "'달/월'을 뜻하는 한자 '月(yuè)' 연습용 템플릿입니다.", en: "Practice template for '月' (yuè, moon/month)." },
      hant: { ko: "'달/월'을 뜻하는 한자 '月(yuè)' 연습용 템플릿입니다.", en: "Practice template for '月' (yuè, moon/month)." },
    },
  },
  {
    idSuffix: "shui",
    nativeLabel: "水",
    guidePathD: "M50 15 V85 M50 40 C35 50, 15 60, 10 75 M50 40 C65 50, 85 60, 90 75 M50 55 C40 65, 25 75, 18 82 M50 55 C60 65, 75 75, 82 82",
    strokeGuides: [
      { pathD: "M50 15 V85", order: 1 },
      { pathD: "M50 40 C35 50, 15 60, 10 75", order: 2 },
      { pathD: "M50 55 C40 65, 25 75, 18 82", order: 3 },
      { pathD: "M50 55 C60 65, 75 75, 82 82", order: 4 },
    ],
    label: {
      hans: { ko: "수 (水)", en: "Water (水)" },
      hant: { ko: "수 (水)", en: "Water (水)" },
    },
    cue: {
      hans: { ko: "중앙 세로획을 먼저 쓰고, 양쪽 갈래를 씁니다.", en: "Center vertical first, then the branching strokes on each side." },
      hant: { ko: "중앙 세로획을 먼저 쓰고, 양쪽 갈래를 씁니다.", en: "Center vertical first, then the branching strokes on each side." },
    },
    description: {
      hans: { ko: "'물'을 뜻하는 한자 '水(shuǐ)' 연습용 템플릿입니다.", en: "Practice template for '水' (shuǐ, water)." },
      hant: { ko: "'물'을 뜻하는 한자 '水(shuǐ)' 연습용 템플릿입니다.", en: "Practice template for '水' (shuǐ, water)." },
    },
  },
  {
    idSuffix: "huo",
    nativeLabel: "火",
    guidePathD: "M35 40 C30 55, 20 65, 15 75 M65 40 C70 50, 78 55, 82 58 M50 20 C40 40, 25 60, 15 80 M50 20 C60 40, 75 60, 85 80",
    strokeGuides: [
      { pathD: "M35 40 C30 55, 20 65, 15 75", order: 1 },
      { pathD: "M65 40 C70 50, 78 55, 82 58", order: 2 },
      { pathD: "M50 20 C40 40, 25 60, 15 80", order: 3 },
      { pathD: "M50 20 C60 40, 75 60, 85 80", order: 4 },
    ],
    label: {
      hans: { ko: "화 (火)", en: "Fire (火)" },
      hant: { ko: "화 (火)", en: "Fire (火)" },
    },
    cue: {
      hans: { ko: "왼쪽 점, 오른쪽 점, 삐침, 파임 순서입니다.", en: "Left dot, right dot, left-falling, then right-falling." },
      hant: { ko: "왼쪽 점, 오른쪽 점, 삐침, 파임 순서입니다.", en: "Left dot, right dot, left-falling, then right-falling." },
    },
    description: {
      hans: { ko: "'불'을 뜻하는 한자 '火(huǒ)' 연습용 템플릿입니다.", en: "Practice template for '火' (huǒ, fire)." },
      hant: { ko: "'불'을 뜻하는 한자 '火(huǒ)' 연습용 템플릿입니다.", en: "Practice template for '火' (huǒ, fire)." },
    },
  },
  {
    idSuffix: "shan",
    nativeLabel: "山",
    guidePathD: "M50 15 V80 M20 40 V80 M80 40 V80 M20 80 H80",
    strokeGuides: [
      { pathD: "M50 15 V80", order: 1 },
      { pathD: "M20 40 V80", order: 2 },
      { pathD: "M80 40 V80", order: 3 },
    ],
    label: {
      hans: { ko: "산 (山)", en: "Mountain (山)" },
      hant: { ko: "산 (山)", en: "Mountain (山)" },
    },
    cue: {
      hans: { ko: "가운데 세로획을 먼저 쓰고, 왼쪽·오른쪽 세로획을 씁니다.", en: "Center vertical first, then left and right verticals." },
      hant: { ko: "가운데 세로획을 먼저 쓰고, 왼쪽·오른쪽 세로획을 씁니다.", en: "Center vertical first, then left and right verticals." },
    },
    description: {
      hans: { ko: "'산'을 뜻하는 한자 '山(shān)' 연습용 템플릿입니다.", en: "Practice template for '山' (shān, mountain)." },
      hant: { ko: "'산'을 뜻하는 한자 '山(shān)' 연습용 템플릿입니다.", en: "Practice template for '山' (shān, mountain)." },
    },
  },
  {
    idSuffix: "mu",
    nativeLabel: "木",
    guidePathD: "M15 45 H85 M50 15 V85 M50 45 C35 60, 18 72, 12 82 M50 45 C65 60, 82 72, 88 82",
    strokeGuides: [
      { pathD: "M15 45 H85", order: 1 },
      { pathD: "M50 15 V85", order: 2 },
      { pathD: "M50 45 C35 60, 18 72, 12 82", order: 3 },
      { pathD: "M50 45 C65 60, 82 72, 88 82", order: 4 },
    ],
    label: {
      hans: { ko: "목 (木)", en: "Tree/Wood (木)" },
      hant: { ko: "목 (木)", en: "Tree/Wood (木)" },
    },
    cue: {
      hans: { ko: "가로획, 세로획, 왼쪽 삐침, 오른쪽 파임 순서입니다.", en: "Horizontal, vertical, left-falling, then right-falling." },
      hant: { ko: "가로획, 세로획, 왼쪽 삐침, 오른쪽 파임 순서입니다.", en: "Horizontal, vertical, left-falling, then right-falling." },
    },
    description: {
      hans: { ko: "'나무'를 뜻하는 한자 '木(mù)' 연습용 템플릿입니다.", en: "Practice template for '木' (mù, tree/wood)." },
      hant: { ko: "'나무'를 뜻하는 한자 '木(mù)' 연습용 템플릿입니다.", en: "Practice template for '木' (mù, tree/wood)." },
    },
  },
  {
    idSuffix: "tu",
    nativeLabel: "土",
    guidePathD: "M15 50 H85 M50 20 V80 M20 80 H80",
    strokeGuides: [
      { pathD: "M15 50 H85", order: 1 },
      { pathD: "M50 20 V80", order: 2 },
      { pathD: "M20 80 H80", order: 3 },
    ],
    label: {
      hans: { ko: "토 (土)", en: "Earth/Soil (土)" },
      hant: { ko: "토 (土)", en: "Earth/Soil (土)" },
    },
    cue: {
      hans: { ko: "짧은 가로획, 세로획, 긴 가로획 순서입니다.", en: "Short horizontal, vertical, then long horizontal." },
      hant: { ko: "짧은 가로획, 세로획, 긴 가로획 순서입니다.", en: "Short horizontal, vertical, then long horizontal." },
    },
    description: {
      hans: { ko: "'흙'을 뜻하는 한자 '土(tǔ)' 연습용 템플릿입니다.", en: "Practice template for '土' (tǔ, earth/soil)." },
      hant: { ko: "'흙'을 뜻하는 한자 '土(tǔ)' 연습용 템플릿입니다.", en: "Practice template for '土' (tǔ, earth/soil)." },
    },
  },
  /* ── Other basics ── */
  {
    idSuffix: "tian",
    nativeLabel: "天",
    guidePathD: "M20 25 H80 M15 50 H85 M50 25 C35 55, 15 72, 10 85 M50 25 C65 55, 85 72, 90 85",
    strokeGuides: [
      { pathD: "M20 25 H80", order: 1 },
      { pathD: "M15 50 H85", order: 2 },
      { pathD: "M50 25 C35 55, 15 72, 10 85", order: 3 },
      { pathD: "M50 25 C65 55, 85 72, 90 85", order: 4 },
    ],
    label: {
      hans: { ko: "천 (天)", en: "Sky/Heaven (天)" },
      hant: { ko: "천 (天)", en: "Sky/Heaven (天)" },
    },
    cue: {
      hans: { ko: "짧은 가로, 긴 가로, 삐침, 파임 순서입니다.", en: "Short horizontal, long horizontal, left-falling, right-falling." },
      hant: { ko: "짧은 가로, 긴 가로, 삐침, 파임 순서입니다.", en: "Short horizontal, long horizontal, left-falling, right-falling." },
    },
    description: {
      hans: { ko: "'하늘'을 뜻하는 한자 '天(tiān)' 연습용 템플릿입니다.", en: "Practice template for '天' (tiān, sky/heaven)." },
      hant: { ko: "'하늘'을 뜻하는 한자 '天(tiān)' 연습용 템플릿입니다.", en: "Practice template for '天' (tiān, sky/heaven)." },
    },
  },
  {
    idSuffix: "di",
    nativeLabel: "地",
    guidePathD: "M15 50 H30 M30 20 V80 M30 20 H55 M30 50 H55 M30 80 H55 M55 20 V80 M55 50 C65 55, 80 60, 85 70",
    strokeGuides: [
      { pathD: "M15 50 H30", order: 1 },
      { pathD: "M30 20 V80", order: 2 },
      { pathD: "M30 20 H55 V80", order: 3 },
      { pathD: "M30 50 H55", order: 4 },
      { pathD: "M30 80 H55", order: 5 },
      { pathD: "M55 50 C65 55, 80 60, 85 70", order: 6 },
    ],
    label: {
      hans: { ko: "지 (地)", en: "Ground/Earth (地)" },
      hant: { ko: "지 (地)", en: "Ground/Earth (地)" },
    },
    cue: {
      hans: { ko: "토(土) 변을 먼저 쓰고, 오른쪽 也를 씁니다.", en: "Write the earth radical first, then the right component." },
      hant: { ko: "토(土) 변을 먼저 쓰고, 오른쪽 也를 씁니다.", en: "Write the earth radical first, then the right component." },
    },
    description: {
      hans: { ko: "'땅'을 뜻하는 한자 '地(dì)' 연습용 템플릿입니다.", en: "Practice template for '地' (dì, ground/earth)." },
      hant: { ko: "'땅'을 뜻하는 한자 '地(dì)' 연습용 템플릿입니다.", en: "Practice template for '地' (dì, ground/earth)." },
    },
  },
  {
    idSuffix: "nv",
    nativeLabel: "女",
    guidePathD: "M65 20 C50 35, 30 50, 20 65 M20 45 H80 M50 45 V82",
    strokeGuides: [
      { pathD: "M65 20 C50 35, 30 50, 20 65", order: 1 },
      { pathD: "M20 45 H80", order: 2 },
      { pathD: "M50 45 V82", order: 3 },
    ],
    label: {
      hans: { ko: "녀 (女)", en: "Woman (女)" },
      hant: { ko: "녀 (女)", en: "Woman (女)" },
    },
    cue: {
      hans: { ko: "삐침-꺾음, 가로획, 삐침 순서입니다.", en: "Left-falling turn, horizontal, then left-falling." },
      hant: { ko: "삐침-꺾음, 가로획, 삐침 순서입니다.", en: "Left-falling turn, horizontal, then left-falling." },
    },
    description: {
      hans: { ko: "'여자'를 뜻하는 한자 '女(nǚ)' 연습용 템플릿입니다.", en: "Practice template for '女' (nǚ, woman)." },
      hant: { ko: "'여자'를 뜻하는 한자 '女(nǚ)' 연습용 템플릿입니다.", en: "Practice template for '女' (nǚ, woman)." },
    },
  },
  {
    idSuffix: "zi",
    nativeLabel: "子",
    guidePathD: "M25 25 H70 C70 25, 55 45, 30 55 M50 15 V85 M20 85 H80",
    strokeGuides: [
      { pathD: "M25 25 H70 C70 25, 55 45, 30 55", order: 1 },
      { pathD: "M50 15 V85", order: 2 },
      { pathD: "M20 85 H80", order: 3 },
    ],
    label: {
      hans: { ko: "자 (子)", en: "Child (子)" },
      hant: { ko: "자 (子)", en: "Child (子)" },
    },
    cue: {
      hans: { ko: "가로-꺾음-구부림, 세로획, 가로획 순서입니다.", en: "Horizontal-turn-hook, vertical, then horizontal." },
      hant: { ko: "가로-꺾음-구부림, 세로획, 가로획 순서입니다.", en: "Horizontal-turn-hook, vertical, then horizontal." },
    },
    description: {
      hans: { ko: "'아이'를 뜻하는 한자 '子(zǐ)' 연습용 템플릿입니다.", en: "Practice template for '子' (zǐ, child)." },
      hant: { ko: "'아이'를 뜻하는 한자 '子(zǐ)' 연습용 템플릿입니다.", en: "Practice template for '子' (zǐ, child)." },
    },
  },
];
