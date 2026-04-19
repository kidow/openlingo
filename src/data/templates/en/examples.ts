import { ExampleWord } from "../example-words";

type CaseExampleSet = {
  uppercase: ExampleWord[];
  lowercase: ExampleWord[];
};

function capitalizeWord(word: string) {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
}

function createCaseExamples(baseExamples: ExampleWord[]): CaseExampleSet {
  return {
    uppercase: baseExamples.map((item) => ({
      ...item,
      word: capitalizeWord(item.word),
    })),
    lowercase: baseExamples,
  };
}

function createExampleMap(templateId: string, examples: ExampleWord[]) {
  return { [templateId]: examples };
}

function createCaseExampleMap(letter: string, examples: CaseExampleSet) {
  return {
    ...createExampleMap(`en-${letter}`, examples.uppercase),
    ...createExampleMap(`en-lower-${letter}`, examples.lowercase),
  };
}

const aExamples = createCaseExamples([
  { word: "apple", reading: "애플", meaning: "사과" },
  { word: "ant", reading: "앤트", meaning: "개미" },
  { word: "airplane", reading: "에어플레인", meaning: "비행기" },
  { word: "animal", reading: "애니멀", meaning: "동물" },
  { word: "arrow", reading: "애로우", meaning: "화살" },
]);

const bExamples = createCaseExamples([
  { word: "ball", reading: "볼", meaning: "공" },
  { word: "book", reading: "북", meaning: "책" },
  { word: "bird", reading: "버드", meaning: "새" },
  { word: "butter", reading: "버터", meaning: "버터" },
  { word: "boat", reading: "보트", meaning: "배" },
]);

const cExamples = createCaseExamples([
  { word: "cat", reading: "캣", meaning: "고양이" },
  { word: "car", reading: "카", meaning: "자동차" },
  { word: "cake", reading: "케이크", meaning: "케이크" },
  { word: "cloud", reading: "클라우드", meaning: "구름" },
  { word: "cup", reading: "컵", meaning: "컵" },
]);

const dExamples = createCaseExamples([
  { word: "dog", reading: "독", meaning: "개" },
  { word: "door", reading: "도어", meaning: "문" },
  { word: "duck", reading: "덕", meaning: "오리" },
  { word: "desk", reading: "데스크", meaning: "책상" },
  { word: "day", reading: "데이", meaning: "하루" },
]);

const eExamples = createCaseExamples([
  { word: "egg", reading: "에그", meaning: "달걀" },
  { word: "ear", reading: "이어", meaning: "귀" },
  { word: "elephant", reading: "엘리펀트", meaning: "코끼리" },
  { word: "engine", reading: "엔진", meaning: "엔진" },
  { word: "eye", reading: "아이", meaning: "눈" },
]);

const fExamples = createCaseExamples([
  { word: "fish", reading: "피시", meaning: "물고기" },
  { word: "fire", reading: "파이어", meaning: "불" },
  { word: "fox", reading: "폭스", meaning: "여우" },
  { word: "flower", reading: "플라워", meaning: "꽃" },
  { word: "fork", reading: "포크", meaning: "포크" },
]);

const gExamples = createCaseExamples([
  { word: "goat", reading: "고트", meaning: "염소" },
  { word: "girl", reading: "걸", meaning: "소녀" },
  { word: "glass", reading: "글래스", meaning: "유리" },
  { word: "grape", reading: "그레이프", meaning: "포도" },
  { word: "green", reading: "그린", meaning: "초록색" },
]);

const hExamples = createCaseExamples([
  { word: "hat", reading: "햇", meaning: "모자" },
  { word: "hand", reading: "핸드", meaning: "손" },
  { word: "house", reading: "하우스", meaning: "집" },
  { word: "horse", reading: "호스", meaning: "말" },
  { word: "hill", reading: "힐", meaning: "언덕" },
]);

const iExamples = createCaseExamples([
  { word: "ice", reading: "아이스", meaning: "얼음" },
  { word: "ink", reading: "잉크", meaning: "잉크" },
  { word: "island", reading: "아일랜드", meaning: "섬" },
  { word: "insect", reading: "인섹트", meaning: "곤충" },
  { word: "idea", reading: "아이디어", meaning: "생각" },
]);

const jExamples = createCaseExamples([
  { word: "jam", reading: "잼", meaning: "잼" },
  { word: "jacket", reading: "재킷", meaning: "재킷" },
  { word: "juice", reading: "주스", meaning: "주스" },
  { word: "jelly", reading: "젤리", meaning: "젤리" },
  { word: "jungle", reading: "정글", meaning: "정글" },
]);

const kExamples = createCaseExamples([
  { word: "kite", reading: "카이트", meaning: "연" },
  { word: "king", reading: "킹", meaning: "왕" },
  { word: "key", reading: "키", meaning: "열쇠" },
  { word: "kitten", reading: "키튼", meaning: "새끼 고양이" },
  { word: "kettle", reading: "케틀", meaning: "주전자" },
]);

const lExamples = createCaseExamples([
  { word: "lion", reading: "라이언", meaning: "사자" },
  { word: "leaf", reading: "리프", meaning: "잎" },
  { word: "lamp", reading: "램프", meaning: "램프" },
  { word: "lake", reading: "레이크", meaning: "호수" },
  { word: "leg", reading: "레그", meaning: "다리" },
]);

const mExamples = createCaseExamples([
  { word: "moon", reading: "문", meaning: "달" },
  { word: "mouse", reading: "마우스", meaning: "쥐" },
  { word: "milk", reading: "밀크", meaning: "우유" },
  { word: "music", reading: "뮤직", meaning: "음악" },
  { word: "map", reading: "맵", meaning: "지도" },
]);

const nExamples = createCaseExamples([
  { word: "nose", reading: "노즈", meaning: "코" },
  { word: "nest", reading: "네스트", meaning: "둥지" },
  { word: "name", reading: "네임", meaning: "이름" },
  { word: "noodle", reading: "누들", meaning: "면" },
  { word: "night", reading: "나이트", meaning: "밤" },
]);

const oExamples = createCaseExamples([
  { word: "owl", reading: "아울", meaning: "올빼미" },
  { word: "orange", reading: "오렌지", meaning: "오렌지" },
  { word: "ocean", reading: "오션", meaning: "바다" },
  { word: "onion", reading: "어니언", meaning: "양파" },
  { word: "oil", reading: "오일", meaning: "기름" },
]);

const pExamples = createCaseExamples([
  { word: "pen", reading: "펜", meaning: "펜" },
  { word: "pig", reading: "피그", meaning: "돼지" },
  { word: "plane", reading: "플레인", meaning: "비행기" },
  { word: "paper", reading: "페이퍼", meaning: "종이" },
  { word: "pear", reading: "페어", meaning: "배" },
]);

const qExamples = createCaseExamples([
  { word: "queen", reading: "퀸", meaning: "여왕" },
  { word: "quiet", reading: "콰이어트", meaning: "조용한" },
  { word: "quilt", reading: "퀼트", meaning: "이불" },
  { word: "quick", reading: "퀵", meaning: "빠른" },
  { word: "question", reading: "퀘스천", meaning: "질문" },
]);

const rExamples = createCaseExamples([
  { word: "red", reading: "레드", meaning: "빨간색" },
  { word: "rabbit", reading: "래빗", meaning: "토끼" },
  { word: "rain", reading: "레인", meaning: "비" },
  { word: "river", reading: "리버", meaning: "강" },
  { word: "ring", reading: "링", meaning: "반지" },
]);

const sExamples = createCaseExamples([
  { word: "sun", reading: "선", meaning: "태양" },
  { word: "star", reading: "스타", meaning: "별" },
  { word: "snake", reading: "스네이크", meaning: "뱀" },
  { word: "spoon", reading: "스푼", meaning: "숟가락" },
  { word: "school", reading: "스쿨", meaning: "학교" },
]);

const tExamples = createCaseExamples([
  { word: "tree", reading: "트리", meaning: "나무" },
  { word: "train", reading: "트레인", meaning: "기차" },
  { word: "table", reading: "테이블", meaning: "탁자" },
  { word: "tiger", reading: "타이거", meaning: "호랑이" },
  { word: "turtle", reading: "터틀", meaning: "거북이" },
]);

const uExamples = createCaseExamples([
  { word: "umbrella", reading: "엄브렐라", meaning: "우산" },
  { word: "uniform", reading: "유니폼", meaning: "유니폼" },
  { word: "unicorn", reading: "유니콘", meaning: "유니콘" },
  { word: "uncle", reading: "엉클", meaning: "삼촌" },
  { word: "under", reading: "언더", meaning: "아래" },
]);

const vExamples = createCaseExamples([
  { word: "van", reading: "밴", meaning: "밴" },
  { word: "vase", reading: "베이스", meaning: "꽃병" },
  { word: "violet", reading: "바이올렛", meaning: "보라색" },
  { word: "village", reading: "빌리지", meaning: "마을" },
  { word: "violin", reading: "바이올린", meaning: "바이올린" },
]);

const wExamples = createCaseExamples([
  { word: "water", reading: "워터", meaning: "물" },
  { word: "wheel", reading: "휠", meaning: "바퀴" },
  { word: "window", reading: "윈도우", meaning: "창문" },
  { word: "watch", reading: "워치", meaning: "시계" },
  { word: "whale", reading: "웨일", meaning: "고래" },
]);

const xExamples = createCaseExamples([
  { word: "xylophone", reading: "자일로폰", meaning: "실로폰" },
  { word: "x-ray", reading: "엑스레이", meaning: "엑스레이" },
  { word: "xerox", reading: "제록스", meaning: "복사기" },
  { word: "xenon", reading: "제논", meaning: "제논" },
  { word: "xylitol", reading: "자일리톨", meaning: "자일리톨" },
]);

const yExamples = createCaseExamples([
  { word: "yarn", reading: "얀", meaning: "실" },
  { word: "yellow", reading: "옐로우", meaning: "노란색" },
  { word: "yacht", reading: "야트", meaning: "요트" },
  { word: "yogurt", reading: "요거트", meaning: "요거트" },
  { word: "yak", reading: "야크", meaning: "야크" },
]);

const zExamples = createCaseExamples([
  { word: "zebra", reading: "지브라", meaning: "얼룩말" },
  { word: "zoo", reading: "주", meaning: "동물원" },
  { word: "zip", reading: "집", meaning: "지퍼" },
  { word: "zero", reading: "제로", meaning: "영" },
  { word: "zone", reading: "존", meaning: "구역" },
]);

export const englishExampleWordsByTemplateId: Record<string, ExampleWord[]> = {
  ...createCaseExampleMap("a", aExamples),
  ...createCaseExampleMap("b", bExamples),
  ...createCaseExampleMap("c", cExamples),
  ...createCaseExampleMap("d", dExamples),
  ...createCaseExampleMap("e", eExamples),
  ...createCaseExampleMap("f", fExamples),
  ...createCaseExampleMap("g", gExamples),
  ...createCaseExampleMap("h", hExamples),
  ...createCaseExampleMap("i", iExamples),
  ...createCaseExampleMap("j", jExamples),
  ...createCaseExampleMap("k", kExamples),
  ...createCaseExampleMap("l", lExamples),
  ...createCaseExampleMap("m", mExamples),
  ...createCaseExampleMap("n", nExamples),
  ...createCaseExampleMap("o", oExamples),
  ...createCaseExampleMap("p", pExamples),
  ...createCaseExampleMap("q", qExamples),
  ...createCaseExampleMap("r", rExamples),
  ...createCaseExampleMap("s", sExamples),
  ...createCaseExampleMap("t", tExamples),
  ...createCaseExampleMap("u", uExamples),
  ...createCaseExampleMap("v", vExamples),
  ...createCaseExampleMap("w", wExamples),
  ...createCaseExampleMap("x", xExamples),
  ...createCaseExampleMap("y", yExamples),
  ...createCaseExampleMap("z", zExamples),
};
