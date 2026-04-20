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
    ...createExampleMap(`it-${letter}`, examples.uppercase),
    ...createExampleMap(`it-lower-${letter}`, examples.lowercase),
  };
}

const aExamples = createCaseExamples([
  { word: "amico", reading: "아미코", meaning: "친구" },
  { word: "acqua", reading: "아콰", meaning: "물" },
  { word: "anima", reading: "아니마", meaning: "영혼" },
  { word: "aprire", reading: "아프리레", meaning: "열다" },
  { word: "agosto", reading: "아고스토", meaning: "8월" },
]);

const bExamples = createCaseExamples([
  { word: "bambino", reading: "밤비노", meaning: "아이" },
  { word: "bello", reading: "벨로", meaning: "아름다운" },
  { word: "borsa", reading: "보르사", meaning: "가방" },
  { word: "ballo", reading: "발로", meaning: "춤" },
  { word: "biblioteca", reading: "비블리오테카", meaning: "도서관" },
]);

const cExamples = createCaseExamples([
  { word: "casa", reading: "카자", meaning: "집" },
  { word: "cielo", reading: "치엘로", meaning: "하늘" },
  { word: "cuore", reading: "쿠오레", meaning: "마음" },
  { word: "cucina", reading: "쿠치나", meaning: "부엌" },
  { word: "cane", reading: "카네", meaning: "개" },
]);

const dExamples = createCaseExamples([
  { word: "donna", reading: "돈나", meaning: "여자" },
  { word: "domani", reading: "도마니", meaning: "내일" },
  { word: "dado", reading: "다도", meaning: "주사위" },
  { word: "dentro", reading: "덴트로", meaning: "안에" },
  { word: "davvero", reading: "다베로", meaning: "정말로" },
]);

const eExamples = createCaseExamples([
  { word: "estate", reading: "에스타테", meaning: "여름" },
  { word: "esempio", reading: "에셈피오", meaning: "예시" },
  { word: "elefante", reading: "엘레판테", meaning: "코끼리" },
  { word: "energia", reading: "에네르지아", meaning: "에너지" },
  { word: "esame", reading: "에자메", meaning: "시험" },
]);

const fExamples = createCaseExamples([
  { word: "famiglia", reading: "파밀리아", meaning: "가족" },
  { word: "forno", reading: "포르노", meaning: "오븐" },
  { word: "festa", reading: "페스타", meaning: "축제" },
  { word: "fiore", reading: "피오레", meaning: "꽃" },
  { word: "freddo", reading: "프레도", meaning: "추운" },
]);

const gExamples = createCaseExamples([
  { word: "gatto", reading: "갓토", meaning: "고양이" },
  { word: "giorno", reading: "조르노", meaning: "날" },
  { word: "gelato", reading: "젤라토", meaning: "아이스크림" },
  { word: "grande", reading: "그란데", meaning: "큰" },
  { word: "giardino", reading: "자르디노", meaning: "정원" },
]);

const hExamples = createCaseExamples([
  { word: "hotel", reading: "호텔", meaning: "호텔" },
  { word: "hobby", reading: "오비", meaning: "취미" },
  { word: "hacker", reading: "해커", meaning: "해커" },
  { word: "hardware", reading: "하드웨어", meaning: "하드웨어" },
  { word: "handicap", reading: "핸디캡", meaning: "장애" },
]);

const iExamples = createCaseExamples([
  { word: "idea", reading: "이데아", meaning: "생각" },
  { word: "isola", reading: "이졸라", meaning: "섬" },
  { word: "inverno", reading: "인베르노", meaning: "겨울" },
  { word: "italiano", reading: "이탈리아노", meaning: "이탈리아어" },
  { word: "immagine", reading: "이미나지네", meaning: "이미지" },
]);

const jExamples = createCaseExamples([
  { word: "jazz", reading: "잣츠", meaning: "재즈" },
  { word: "judo", reading: "주도", meaning: "유도" },
  { word: "jeep", reading: "지프", meaning: "지프" },
  { word: "jeans", reading: "진스", meaning: "청바지" },
  { word: "juta", reading: "유타", meaning: "황마" },
]);

const kExamples = createCaseExamples([
  { word: "kiwi", reading: "키위", meaning: "키위" },
  { word: "ketchup", reading: "케첩", meaning: "케첩" },
  { word: "karate", reading: "카라테", meaning: "가라테" },
  { word: "koala", reading: "코알라", meaning: "코알라" },
  { word: "kilo", reading: "킬로", meaning: "킬로" },
]);

const lExamples = createCaseExamples([
  { word: "libro", reading: "리브로", meaning: "책" },
  { word: "luna", reading: "루나", meaning: "달" },
  { word: "lavoro", reading: "라보로", meaning: "일" },
  { word: "luce", reading: "루체", meaning: "빛" },
  { word: "latte", reading: "라테", meaning: "우유" },
]);

const mExamples = createCaseExamples([
  { word: "mare", reading: "마레", meaning: "바다" },
  { word: "mano", reading: "마노", meaning: "손" },
  { word: "madre", reading: "마드레", meaning: "어머니" },
  { word: "musica", reading: "무지카", meaning: "음악" },
  { word: "mondo", reading: "몬도", meaning: "세계" },
]);

const nExamples = createCaseExamples([
  { word: "notte", reading: "노떼", meaning: "밤" },
  { word: "nave", reading: "나베", meaning: "배" },
  { word: "natura", reading: "나투라", meaning: "자연" },
  { word: "nuovo", reading: "누오보", meaning: "새로운" },
  { word: "nido", reading: "니도", meaning: "둥지" },
]);

const oExamples = createCaseExamples([
  { word: "oggi", reading: "오지", meaning: "오늘" },
  { word: "oro", reading: "오로", meaning: "금" },
  { word: "occhi", reading: "오키", meaning: "눈" },
  { word: "ottobre", reading: "오토브레", meaning: "10월" },
  { word: "onda", reading: "온다", meaning: "파도" },
]);

const pExamples = createCaseExamples([
  { word: "pane", reading: "파네", meaning: "빵" },
  { word: "porta", reading: "포르타", meaning: "문" },
  { word: "piano", reading: "피아노", meaning: "천천히, 평평한" },
  { word: "pesce", reading: "페셰", meaning: "물고기" },
  { word: "parola", reading: "파롤라", meaning: "단어" },
]);

const qExamples = createCaseExamples([
  { word: "quadro", reading: "콰드로", meaning: "그림" },
  { word: "quanto", reading: "콴토", meaning: "얼마나" },
  { word: "questo", reading: "퀘스토", meaning: "이것" },
  { word: "qui", reading: "쿠이", meaning: "여기" },
  { word: "quarzo", reading: "콰르초", meaning: "석영" },
]);

const rExamples = createCaseExamples([
  { word: "rosa", reading: "로자", meaning: "장미" },
  { word: "ragazzo", reading: "라가쪼", meaning: "소년" },
  { word: "ricordo", reading: "리코르도", meaning: "기억" },
  { word: "rondine", reading: "론디네", meaning: "제비" },
  { word: "rispetto", reading: "리스페토", meaning: "존중" },
]);

const sExamples = createCaseExamples([
  { word: "sole", reading: "솔레", meaning: "태양" },
  { word: "scuola", reading: "스쿠올라", meaning: "학교" },
  { word: "sapore", reading: "사포레", meaning: "맛" },
  { word: "strada", reading: "스트라다", meaning: "길" },
  { word: "sorriso", reading: "소리소", meaning: "미소" },
]);

const tExamples = createCaseExamples([
  { word: "tavolo", reading: "타볼로", meaning: "탁자" },
  { word: "treno", reading: "트레노", meaning: "기차" },
  { word: "teatro", reading: "테아트로", meaning: "극장" },
  { word: "tempo", reading: "템포", meaning: "시간" },
  { word: "terra", reading: "테라", meaning: "땅" },
]);

const uExamples = createCaseExamples([
  { word: "uva", reading: "우바", meaning: "포도" },
  { word: "uno", reading: "우노", meaning: "하나" },
  { word: "uscita", reading: "우시타", meaning: "출구" },
  { word: "urgente", reading: "우르젠테", meaning: "긴급한" },
  { word: "utile", reading: "우틸레", meaning: "유용한" },
]);

const vExamples = createCaseExamples([
  { word: "vento", reading: "벤토", meaning: "바람" },
  { word: "vita", reading: "비타", meaning: "삶" },
  { word: "viaggio", reading: "비아조", meaning: "여행" },
  { word: "vero", reading: "베로", meaning: "진짜" },
  { word: "voce", reading: "보체", meaning: "목소리" },
]);

const wExamples = createCaseExamples([
  { word: "web", reading: "웹", meaning: "웹" },
  { word: "whisky", reading: "위스키", meaning: "위스키" },
  { word: "watt", reading: "왓", meaning: "와트" },
  { word: "weekend", reading: "위켄드", meaning: "주말" },
  { word: "wellness", reading: "웰니스", meaning: "웰니스" },
]);

const xExamples = createCaseExamples([
  { word: "xilofono", reading: "실로포노", meaning: "실로폰" },
  { word: "xeno", reading: "제노", meaning: "이상한" },
  { word: "xenon", reading: "제논", meaning: "제논" },
  { word: "xenofobia", reading: "제노포비아", meaning: "외국인 혐오" },
  { word: "xilografia", reading: "실로그라피아", meaning: "목판화" },
]);

const yExamples = createCaseExamples([
  { word: "yoga", reading: "요가", meaning: "요가" },
  { word: "yogurt", reading: "요구르트", meaning: "요구르트" },
  { word: "yacht", reading: "요트", meaning: "요트" },
  { word: "yo-yo", reading: "요요", meaning: "요요" },
  { word: "yak", reading: "약", meaning: "야크" },
]);

const zExamples = createCaseExamples([
  { word: "zebra", reading: "제브라", meaning: "얼룩말" },
  { word: "zucchero", reading: "주케로", meaning: "설탕" },
  { word: "zero", reading: "제로", meaning: "0" },
  { word: "zaino", reading: "자이노", meaning: "배낭" },
  { word: "zanzara", reading: "잔자라", meaning: "모기" },
]);

const aGraveExamples = createCaseExamples([
  { word: "città", reading: "치타", meaning: "도시" },
  { word: "libertà", reading: "리베르타", meaning: "자유" },
  { word: "università", reading: "우니베르시타", meaning: "대학교" },
  { word: "realtà", reading: "레알타", meaning: "현실" },
  { word: "qualità", reading: "콸리타", meaning: "품질" },
]);

const eGraveExamples = createCaseExamples([
  { word: "caffè", reading: "카페", meaning: "커피" },
  { word: "tè", reading: "테", meaning: "차" },
  { word: "cioè", reading: "치오에", meaning: "즉" },
  { word: "dov'è", reading: "도베", meaning: "어디에" },
  { word: "com'è", reading: "코메", meaning: "어떤가" },
]);

const eAcuteExamples = createCaseExamples([
  { word: "perché", reading: "페르케", meaning: "왜, 왜냐하면" },
  { word: "né", reading: "네", meaning: "아니, 그리고도 아님" },
  { word: "poiché", reading: "포이케", meaning: "왜냐하면" },
  { word: "benché", reading: "벤케", meaning: "비록" },
  { word: "sicché", reading: "시케", meaning: "그래서" },
]);

const iGraveExamples = createCaseExamples([
  { word: "lì", reading: "리", meaning: "저기" },
  { word: "sì", reading: "시", meaning: "예" },
  { word: "così", reading: "코지", meaning: "그렇게" },
  { word: "partì", reading: "파르티", meaning: "떠났다" },
  { word: "finì", reading: "피니", meaning: "끝났다" },
]);

const oGraveExamples = createCaseExamples([
  { word: "però", reading: "페로", meaning: "그러나" },
  { word: "andrò", reading: "안드로", meaning: "나는 갈 것이다" },
  { word: "farò", reading: "파로", meaning: "나는 할 것이다" },
  { word: "sarò", reading: "사로", meaning: "나는 될 것이다" },
  { word: "dirò", reading: "디오", meaning: "나는 말할 것이다" },
]);

const oAcuteExamples = createCaseExamples([
  { word: "órbita", reading: "오르비타", meaning: "궤도" },
  { word: "ópera", reading: "오페라", meaning: "오페라" },
  { word: "córso", reading: "코르소", meaning: "코르소 거리" },
  { word: "bótta", reading: "보타", meaning: "타격" },
  { word: "sólo", reading: "솔로", meaning: "오직" },
]);

const uGraveExamples = createCaseExamples([
  { word: "più", reading: "피우", meaning: "더" },
  { word: "giù", reading: "쥬", meaning: "아래로" },
  { word: "virtù", reading: "비르투", meaning: "미덕" },
  { word: "laggiù", reading: "라쥬", meaning: "저 아래" },
  { word: "lassù", reading: "라쑤", meaning: "저 위" },
]);

export const italianExampleWordsByTemplateId: Record<string, ExampleWord[]> = {
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
  ...createExampleMap("it-uppercase-a-grave", aGraveExamples.uppercase),
  ...createExampleMap("it-lowercase-a-grave", aGraveExamples.lowercase),
  ...createExampleMap("it-uppercase-e-grave", eGraveExamples.uppercase),
  ...createExampleMap("it-lowercase-e-grave", eGraveExamples.lowercase),
  ...createExampleMap("it-uppercase-e-acute", eAcuteExamples.uppercase),
  ...createExampleMap("it-lowercase-e-acute", eAcuteExamples.lowercase),
  ...createExampleMap("it-uppercase-i-grave", iGraveExamples.uppercase),
  ...createExampleMap("it-lowercase-i-grave", iGraveExamples.lowercase),
  ...createExampleMap("it-uppercase-o-grave", oGraveExamples.uppercase),
  ...createExampleMap("it-lowercase-o-grave", oGraveExamples.lowercase),
  ...createExampleMap("it-uppercase-o-acute", oAcuteExamples.uppercase),
  ...createExampleMap("it-lowercase-o-acute", oAcuteExamples.lowercase),
  ...createExampleMap("it-uppercase-u-grave", uGraveExamples.uppercase),
  ...createExampleMap("it-lowercase-u-grave", uGraveExamples.lowercase),
};
