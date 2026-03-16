export type SharedStrokeData = {
  idSuffix: string;
  nativeLabel: string;
  guidePathD: string;
  strokeGuides: { pathD: string; order: number }[];
  label: { hans: { ko: string; en: string }; hant: { ko: string; en: string } };
  cue: { hans: { ko: string; en: string }; hant: { ko: string; en: string } };
  description: { hans: { ko: string; en: string }; hant: { ko: string; en: string } };
};

export const BASIC_STROKES: SharedStrokeData[] = [
  {
    idSuffix: "heng",
    nativeLabel: "横",
    guidePathD: "M20 50 H80",
    strokeGuides: [{ pathD: "M20 50 H80", order: 1 }],
    label: {
      hans: { ko: "횡획 (横)", en: "Horizontal Stroke (横)" },
      hant: { ko: "횡획 (橫)", en: "Horizontal Stroke (橫)" },
    },
    cue: {
      hans: { ko: "왼쪽에서 오른쪽으로 수평 직선을 긋습니다.", en: "Draw a horizontal line from left to right." },
      hant: { ko: "왼쪽에서 오른쪽으로 수평 직선을 긋습니다.", en: "Draw a horizontal line from left to right." },
    },
    description: {
      hans: { ko: "중국어 기본 필획 '横(héng)' 연습용 템플릿입니다.", en: "Practice template for the basic Chinese stroke '横' (héng, horizontal)." },
      hant: { ko: "중국어 기본 필획 '橫(héng)' 연습용 템플릿입니다.", en: "Practice template for the basic Chinese stroke '橫' (héng, horizontal)." },
    },
  },
  {
    idSuffix: "shu",
    nativeLabel: "竖",
    guidePathD: "M50 20 V80",
    strokeGuides: [{ pathD: "M50 20 V80", order: 1 }],
    label: {
      hans: { ko: "수획 (竖)", en: "Vertical Stroke (竖)" },
      hant: { ko: "수획 (豎)", en: "Vertical Stroke (豎)" },
    },
    cue: {
      hans: { ko: "위에서 아래로 수직 직선을 긋습니다.", en: "Draw a vertical line from top to bottom." },
      hant: { ko: "위에서 아래로 수직 직선을 긋습니다.", en: "Draw a vertical line from top to bottom." },
    },
    description: {
      hans: { ko: "중국어 기본 필획 '竖(shù)' 연습용 템플릿입니다.", en: "Practice template for the basic Chinese stroke '竖' (shù, vertical)." },
      hant: { ko: "중국어 기본 필획 '豎(shù)' 연습용 템플릿입니다.", en: "Practice template for the basic Chinese stroke '豎' (shù, vertical)." },
    },
  },
  {
    idSuffix: "pie",
    nativeLabel: "撇",
    guidePathD: "M70 20 C60 40, 40 60, 20 75",
    strokeGuides: [{ pathD: "M70 20 C60 40, 40 60, 20 75", order: 1 }],
    label: {
      hans: { ko: "별획 (撇)", en: "Left-falling Stroke (撇)" },
      hant: { ko: "별획 (撇)", en: "Left-falling Stroke (撇)" },
    },
    cue: {
      hans: { ko: "오른쪽 위에서 왼쪽 아래로 부드럽게 내려 긋습니다.", en: "Sweep from upper right to lower left in a smooth curve." },
      hant: { ko: "오른쪽 위에서 왼쪽 아래로 부드럽게 내려 긋습니다.", en: "Sweep from upper right to lower left in a smooth curve." },
    },
    description: {
      hans: { ko: "중국어 기본 필획 '撇(piě)' 연습용 템플릿입니다.", en: "Practice template for the basic Chinese stroke '撇' (piě, left-falling)." },
      hant: { ko: "중국어 기본 필획 '撇(piě)' 연습용 템플릿입니다.", en: "Practice template for the basic Chinese stroke '撇' (piě, left-falling)." },
    },
  },
  {
    idSuffix: "na",
    nativeLabel: "捺",
    guidePathD: "M30 20 C40 40, 60 60, 80 75",
    strokeGuides: [{ pathD: "M30 20 C40 40, 60 60, 80 75", order: 1 }],
    label: {
      hans: { ko: "날획 (捺)", en: "Right-falling Stroke (捺)" },
      hant: { ko: "날획 (捺)", en: "Right-falling Stroke (捺)" },
    },
    cue: {
      hans: { ko: "왼쪽 위에서 오른쪽 아래로 눌러 긋습니다.", en: "Press from upper left to lower right with increasing weight." },
      hant: { ko: "왼쪽 위에서 오른쪽 아래로 눌러 긋습니다.", en: "Press from upper left to lower right with increasing weight." },
    },
    description: {
      hans: { ko: "중국어 기본 필획 '捺(nà)' 연습용 템플릿입니다.", en: "Practice template for the basic Chinese stroke '捺' (nà, right-falling)." },
      hant: { ko: "중국어 기본 필획 '捺(nà)' 연습용 템플릿입니다.", en: "Practice template for the basic Chinese stroke '捺' (nà, right-falling)." },
    },
  },
  {
    idSuffix: "dian",
    nativeLabel: "点",
    guidePathD: "M48 30 C50 35, 54 42, 52 48",
    strokeGuides: [{ pathD: "M48 30 C50 35, 54 42, 52 48", order: 1 }],
    label: {
      hans: { ko: "점획 (点)", en: "Dot Stroke (点)" },
      hant: { ko: "점획 (點)", en: "Dot Stroke (點)" },
    },
    cue: {
      hans: { ko: "짧게 눌러 오른쪽 아래로 찍습니다.", en: "Press down briefly toward lower right to form a dot." },
      hant: { ko: "짧게 눌러 오른쪽 아래로 찍습니다.", en: "Press down briefly toward lower right to form a dot." },
    },
    description: {
      hans: { ko: "중국어 기본 필획 '点(diǎn)' 연습용 템플릿입니다.", en: "Practice template for the basic Chinese stroke '点' (diǎn, dot)." },
      hant: { ko: "중국어 기본 필획 '點(diǎn)' 연습용 템플릿입니다.", en: "Practice template for the basic Chinese stroke '點' (diǎn, dot)." },
    },
  },
  {
    idSuffix: "ti",
    nativeLabel: "提",
    guidePathD: "M30 70 L70 40",
    strokeGuides: [{ pathD: "M30 70 L70 40", order: 1 }],
    label: {
      hans: { ko: "제획 (提)", en: "Rising Stroke (提)" },
      hant: { ko: "제획 (提)", en: "Rising Stroke (提)" },
    },
    cue: {
      hans: { ko: "왼쪽 아래에서 오른쪽 위로 올려 긋습니다.", en: "Lift from lower left to upper right." },
      hant: { ko: "왼쪽 아래에서 오른쪽 위로 올려 긋습니다.", en: "Lift from lower left to upper right." },
    },
    description: {
      hans: { ko: "중국어 기본 필획 '提(tí)' 연습용 템플릿입니다.", en: "Practice template for the basic Chinese stroke '提' (tí, rising)." },
      hant: { ko: "중국어 기본 필획 '提(tí)' 연습용 템플릿입니다.", en: "Practice template for the basic Chinese stroke '提' (tí, rising)." },
    },
  },
  {
    idSuffix: "zhe",
    nativeLabel: "折",
    guidePathD: "M25 30 H65 V70",
    strokeGuides: [{ pathD: "M25 30 H65 V70", order: 1 }],
    label: {
      hans: { ko: "절획 (折)", en: "Turning Stroke (折)" },
      hant: { ko: "절획 (折)", en: "Turning Stroke (折)" },
    },
    cue: {
      hans: { ko: "가로로 긋다가 꺾어 아래로 내립니다.", en: "Draw horizontally then turn downward at the corner." },
      hant: { ko: "가로로 긋다가 꺾어 아래로 내립니다.", en: "Draw horizontally then turn downward at the corner." },
    },
    description: {
      hans: { ko: "중국어 기본 필획 '折(zhé)' 연습용 템플릿입니다.", en: "Practice template for the basic Chinese stroke '折' (zhé, turning)." },
      hant: { ko: "중국어 기본 필획 '折(zhé)' 연습용 템플릿입니다.", en: "Practice template for the basic Chinese stroke '折' (zhé, turning)." },
    },
  },
  {
    idSuffix: "gou",
    nativeLabel: "钩",
    guidePathD: "M50 20 V65 C50 70, 45 72, 38 65",
    strokeGuides: [{ pathD: "M50 20 V65 C50 70, 45 72, 38 65", order: 1 }],
    label: {
      hans: { ko: "구획 (钩)", en: "Hook Stroke (钩)" },
      hant: { ko: "구획 (鉤)", en: "Hook Stroke (鉤)" },
    },
    cue: {
      hans: { ko: "세로로 내리다 끝에서 왼쪽으로 갈고리를 올립니다.", en: "Draw down vertically then hook upward to the left at the end." },
      hant: { ko: "세로로 내리다 끝에서 왼쪽으로 갈고리를 올립니다.", en: "Draw down vertically then hook upward to the left at the end." },
    },
    description: {
      hans: { ko: "중국어 기본 필획 '钩(gōu)' 연습용 템플릿입니다.", en: "Practice template for the basic Chinese stroke '钩' (gōu, hook)." },
      hant: { ko: "중국어 기본 필획 '鉤(gōu)' 연습용 템플릿입니다.", en: "Practice template for the basic Chinese stroke '鉤' (gōu, hook)." },
    },
  },
];
