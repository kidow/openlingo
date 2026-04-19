import { ExampleWord } from "../example-words";

type ChineseExampleSet = ExampleWord[];
type ChineseExampleSuffixMap = Record<string, ChineseExampleSet>;

function createExampleMap(prefix: "zh-hans" | "zh-hant", examplesBySuffix: ChineseExampleSuffixMap) {
  return Object.fromEntries(
    Object.entries(examplesBySuffix).map(([suffix, examples]) => [`${prefix}-${suffix}`, examples])
  ) as Record<string, ExampleWord[]>;
}

function createVariantExamples(
  baseExamplesBySuffix: ChineseExampleSuffixMap,
  wordOverridesBySuffix: Record<string, string[]>
) {
  return Object.fromEntries(
    Object.entries(baseExamplesBySuffix).map(([suffix, examples]) => {
      const overrides = wordOverridesBySuffix[suffix];

      if (!overrides) {
        return [suffix, examples];
      }

      return [
        suffix,
        examples.map((example, index) => {
          const overrideWord = overrides[index];

          return overrideWord ? { ...example, word: overrideWord } : example;
        }),
      ];
    })
  ) as ChineseExampleSuffixMap;
}

const simplifiedExamplesBySuffix: ChineseExampleSuffixMap = {
  yi: [
    { word: "一人", reading: "yī rén", meaning: "한 사람" },
    { word: "一天", reading: "yī tiān", meaning: "하루" },
  ],
  er: [
    { word: "二月", reading: "èr yuè", meaning: "2월" },
    { word: "二人", reading: "èr rén", meaning: "두 사람" },
  ],
  san: [
    { word: "三天", reading: "sān tiān", meaning: "사흘" },
    { word: "三人", reading: "sān rén", meaning: "세 사람" },
  ],
  si: [
    { word: "四月", reading: "sì yuè", meaning: "4월" },
    { word: "四人", reading: "sì rén", meaning: "네 사람" },
  ],
  wu: [
    { word: "五个", reading: "wǔ gè", meaning: "다섯 개" },
    { word: "五天", reading: "wǔ tiān", meaning: "닷새" },
  ],
  liu: [
    { word: "六月", reading: "liù yuè", meaning: "6월" },
    { word: "六人", reading: "liù rén", meaning: "여섯 사람" },
  ],
  qi: [
    { word: "七月", reading: "qī yuè", meaning: "7월" },
    { word: "七天", reading: "qī tiān", meaning: "이레" },
  ],
  ba: [
    { word: "八月", reading: "bā yuè", meaning: "8월" },
    { word: "八个", reading: "bā gè", meaning: "여덟 개" },
  ],
  jiu: [
    { word: "九月", reading: "jiǔ yuè", meaning: "9월" },
    { word: "九天", reading: "jiǔ tiān", meaning: "아흐레" },
  ],
  shi: [
    { word: "十月", reading: "shí yuè", meaning: "10월" },
    { word: "十个", reading: "shí gè", meaning: "열 개" },
  ],
  ren: [
    { word: "人民", reading: "rén mín", meaning: "인민" },
    { word: "人口", reading: "rén kǒu", meaning: "인구" },
  ],
  da: [
    { word: "大学", reading: "dà xué", meaning: "대학교" },
    { word: "大家", reading: "dà jiā", meaning: "모두, 여러분" },
  ],
  xiao: [
    { word: "小心", reading: "xiǎo xīn", meaning: "조심하다" },
    { word: "小学", reading: "xiǎo xué", meaning: "초등학교" },
  ],
  shang: [
    { word: "上学", reading: "shàng xué", meaning: "학교에 가다" },
    { word: "上班", reading: "shàng bān", meaning: "출근하다" },
  ],
  xia: [
    { word: "下午", reading: "xià wǔ", meaning: "오후" },
    { word: "下雨", reading: "xià yǔ", meaning: "비가 오다" },
  ],
  zuo: [
    { word: "左边", reading: "zuǒ biān", meaning: "왼쪽" },
    { word: "左手", reading: "zuǒ shǒu", meaning: "왼손" },
  ],
  you: [
    { word: "右边", reading: "yòu biān", meaning: "오른쪽" },
    { word: "右手", reading: "yòu shǒu", meaning: "오른손" },
  ],
  zhong: [
    { word: "中国", reading: "zhōng guó", meaning: "중국" },
    { word: "中心", reading: "zhōng xīn", meaning: "중심" },
  ],
  kou: [
    { word: "口水", reading: "kǒu shuǐ", meaning: "침" },
    { word: "开口", reading: "kāi kǒu", meaning: "입을 열다" },
  ],
  ri: [
    { word: "日出", reading: "rì chū", meaning: "일출" },
    { word: "日期", reading: "rì qī", meaning: "날짜" },
  ],
  yue: [
    { word: "月亮", reading: "yuè liàng", meaning: "달" },
    { word: "月份", reading: "yuè fèn", meaning: "월, 달" },
  ],
  shui: [
    { word: "水果", reading: "shuǐ guǒ", meaning: "과일" },
    { word: "水平", reading: "shuǐ píng", meaning: "수준" },
  ],
  huo: [
    { word: "火车", reading: "huǒ chē", meaning: "기차" },
    { word: "火山", reading: "huǒ shān", meaning: "화산" },
  ],
  shan: [
    { word: "山水", reading: "shān shuǐ", meaning: "산수, 산과 물" },
    { word: "山上", reading: "shān shàng", meaning: "산 위" },
  ],
  mu: [
    { word: "木头", reading: "mù tou", meaning: "나무 토막" },
    { word: "树木", reading: "shù mù", meaning: "수목" },
  ],
  tu: [
    { word: "土地", reading: "tǔ dì", meaning: "땅" },
    { word: "土豆", reading: "tǔ dòu", meaning: "감자" },
  ],
  tian: [
    { word: "天气", reading: "tiān qì", meaning: "날씨" },
    { word: "天空", reading: "tiān kōng", meaning: "하늘" },
  ],
  di: [
    { word: "地方", reading: "dì fāng", meaning: "장소" },
    { word: "地图", reading: "dì tú", meaning: "지도" },
  ],
  nv: [
    { word: "女人", reading: "nǚ rén", meaning: "여자" },
    { word: "女儿", reading: "nǚ ér", meaning: "딸" },
  ],
  zi: [
    { word: "孩子", reading: "hái zi", meaning: "아이" },
    { word: "儿子", reading: "ér zi", meaning: "아들" },
  ],
};

const traditionalWordOverridesBySuffix: Record<string, string[]> = {
  da: ["大學", "大家"],
  xiao: ["小心", "小學"],
  shang: ["上學", "上班"],
  zuo: ["左邊", "左手"],
  you: ["右邊", "右手"],
  zhong: ["中國", "中心"],
  kou: ["口水", "開口"],
  huo: ["火車", "火山"],
  mu: ["木頭", "樹木"],
  tian: ["天氣", "天空"],
  di: ["地方", "地圖"],
  nv: ["女人", "女兒"],
  zi: ["孩子", "兒子"],
};

const traditionalExamplesBySuffix = createVariantExamples(simplifiedExamplesBySuffix, traditionalWordOverridesBySuffix);

export const chineseExampleWordsByTemplateId: Record<string, ExampleWord[]> = {
  ...createExampleMap("zh-hans", simplifiedExamplesBySuffix),
  ...createExampleMap("zh-hant", traditionalExamplesBySuffix),
};
