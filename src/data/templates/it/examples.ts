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
]);

const bExamples = createCaseExamples([
  { word: "bambino", reading: "밤비노", meaning: "아이" },
  { word: "bello", reading: "벨로", meaning: "아름다운" },
]);

const cExamples = createCaseExamples([
  { word: "casa", reading: "카자", meaning: "집" },
  { word: "cielo", reading: "치엘로", meaning: "하늘" },
]);

const dExamples = createCaseExamples([
  { word: "donna", reading: "돈나", meaning: "여자" },
  { word: "domani", reading: "도마니", meaning: "내일" },
]);

const eExamples = createCaseExamples([
  { word: "estate", reading: "에스타테", meaning: "여름" },
  { word: "esempio", reading: "에셈피오", meaning: "예시" },
]);

const fExamples = createCaseExamples([
  { word: "famiglia", reading: "파밀리아", meaning: "가족" },
  { word: "forno", reading: "포르노", meaning: "오븐" },
]);

const gExamples = createCaseExamples([
  { word: "gatto", reading: "갓토", meaning: "고양이" },
  { word: "giorno", reading: "조르노", meaning: "날" },
]);

const hExamples = createCaseExamples([
  { word: "hotel", reading: "호텔", meaning: "호텔" },
  { word: "hobby", reading: "오비", meaning: "취미" },
]);

const iExamples = createCaseExamples([
  { word: "idea", reading: "이데아", meaning: "생각" },
  { word: "isola", reading: "이졸라", meaning: "섬" },
]);

const jExamples = createCaseExamples([
  { word: "jazz", reading: "잣츠", meaning: "재즈" },
  { word: "judo", reading: "주도", meaning: "유도" },
]);

const kExamples = createCaseExamples([
  { word: "kiwi", reading: "키위", meaning: "키위" },
  { word: "ketchup", reading: "케첩", meaning: "케첩" },
]);

const lExamples = createCaseExamples([
  { word: "libro", reading: "리브로", meaning: "책" },
  { word: "luna", reading: "루나", meaning: "달" },
]);

const mExamples = createCaseExamples([
  { word: "mare", reading: "마레", meaning: "바다" },
  { word: "mano", reading: "마노", meaning: "손" },
]);

const nExamples = createCaseExamples([
  { word: "notte", reading: "노떼", meaning: "밤" },
  { word: "nave", reading: "나베", meaning: "배" },
]);

const oExamples = createCaseExamples([
  { word: "oggi", reading: "오지", meaning: "오늘" },
  { word: "oro", reading: "오로", meaning: "금" },
]);

const pExamples = createCaseExamples([
  { word: "pane", reading: "파네", meaning: "빵" },
  { word: "porta", reading: "포르타", meaning: "문" },
]);

const qExamples = createCaseExamples([
  { word: "quadro", reading: "콰드로", meaning: "그림" },
  { word: "quanto", reading: "콴토", meaning: "얼마나" },
]);

const rExamples = createCaseExamples([
  { word: "rosa", reading: "로자", meaning: "장미" },
  { word: "ragazzo", reading: "라가쪼", meaning: "소년" },
]);

const sExamples = createCaseExamples([
  { word: "sole", reading: "솔레", meaning: "태양" },
  { word: "scuola", reading: "스쿠올라", meaning: "학교" },
]);

const tExamples = createCaseExamples([
  { word: "tavolo", reading: "타볼로", meaning: "탁자" },
  { word: "treno", reading: "트레노", meaning: "기차" },
]);

const uExamples = createCaseExamples([
  { word: "uva", reading: "우바", meaning: "포도" },
  { word: "uno", reading: "우노", meaning: "하나" },
]);

const vExamples = createCaseExamples([
  { word: "vento", reading: "벤토", meaning: "바람" },
  { word: "vita", reading: "비타", meaning: "삶" },
]);

const wExamples = createCaseExamples([
  { word: "web", reading: "웹", meaning: "웹" },
  { word: "whisky", reading: "위스키", meaning: "위스키" },
]);

const xExamples = createCaseExamples([
  { word: "xilofono", reading: "실로포노", meaning: "실로폰" },
  { word: "xeno", reading: "제노", meaning: "이상한" },
]);

const yExamples = createCaseExamples([
  { word: "yoga", reading: "요가", meaning: "요가" },
  { word: "yogurt", reading: "요구르트", meaning: "요구르트" },
]);

const zExamples = createCaseExamples([
  { word: "zebra", reading: "제브라", meaning: "얼룩말" },
  { word: "zucchero", reading: "주케로", meaning: "설탕" },
]);

const aGraveExamples = createCaseExamples([
  { word: "città", reading: "치타", meaning: "도시" },
  { word: "libertà", reading: "리베르타", meaning: "자유" },
]);

const eGraveExamples = createCaseExamples([
  { word: "caffè", reading: "카페", meaning: "커피" },
  { word: "tè", reading: "테", meaning: "차" },
]);

const eAcuteExamples = createCaseExamples([
  { word: "perché", reading: "페르케", meaning: "왜, 왜냐하면" },
  { word: "né", reading: "네", meaning: "아니, 그리고도 아님" },
]);

const iGraveExamples = createCaseExamples([
  { word: "lì", reading: "리", meaning: "저기" },
  { word: "sì", reading: "시", meaning: "예" },
]);

const oGraveExamples = createCaseExamples([
  { word: "però", reading: "페로", meaning: "그러나" },
  { word: "andrò", reading: "안드로", meaning: "나는 갈 것이다" },
]);

const uGraveExamples = createCaseExamples([
  { word: "più", reading: "피우", meaning: "더" },
  { word: "giù", reading: "쥬", meaning: "아래로" },
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
  ...createExampleMap("it-uppercase-u-grave", uGraveExamples.uppercase),
  ...createExampleMap("it-lowercase-u-grave", uGraveExamples.lowercase),
};
