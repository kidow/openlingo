import { ExampleWord } from "../example-words";

type BaseExampleSet = ExampleWord;

function capitalizeWord(word: string) {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
}

function createCaseExamples(baseExamples: BaseExampleSet[]) {
  return {
    uppercase: baseExamples.map((item) => ({
      ...item,
      word: capitalizeWord(item.word),
    })),
    lowercase: baseExamples,
  };
}

const aExamples = createCaseExamples([
  { word: "арбуз", reading: "아르부즈", meaning: "수박" },
  { word: "автобус", reading: "아프트부스", meaning: "버스" },
  { word: "адрес", reading: "아드레스", meaning: "주소" },
  { word: "аптека", reading: "압체카", meaning: "약국" },
  { word: "ананас", reading: "아나나스", meaning: "파인애플" },
]);

const beExamples = createCaseExamples([
  { word: "бабушка", reading: "바부슈카", meaning: "할머니" },
  { word: "банан", reading: "바난", meaning: "바나나" },
  { word: "берёза", reading: "베료자", meaning: "자작나무" },
  { word: "билет", reading: "빌렛", meaning: "표" },
  { word: "бумага", reading: "부마가", meaning: "종이" },
]);

const veExamples = createCaseExamples([
  { word: "вода", reading: "보다", meaning: "물" },
  { word: "весна", reading: "베스나", meaning: "봄" },
  { word: "волк", reading: "볼크", meaning: "늑대" },
  { word: "ветер", reading: "베테르", meaning: "바람" },
  { word: "вокзал", reading: "복잘", meaning: "역" },
]);

const geExamples = createCaseExamples([
  { word: "город", reading: "고로드", meaning: "도시" },
  { word: "гора", reading: "고라", meaning: "산" },
  { word: "гриб", reading: "그립", meaning: "버섯" },
  { word: "газета", reading: "가제타", meaning: "신문" },
  { word: "гитара", reading: "기타라", meaning: "기타" },
]);

const deExamples = createCaseExamples([
  { word: "дом", reading: "돔", meaning: "집" },
  { word: "дерево", reading: "데레바", meaning: "나무" },
  { word: "дождь", reading: "도시트", meaning: "비" },
  { word: "дорога", reading: "도로가", meaning: "길" },
  { word: "друг", reading: "드루그", meaning: "친구" },
]);

const yeExamples = createCaseExamples([
  { word: "еда", reading: "예다", meaning: "음식" },
  { word: "если", reading: "예슬리", meaning: "만약" },
  { word: "ехать", reading: "예하트", meaning: "가다" },
  { word: "енот", reading: "예놋", meaning: "너구리" },
  { word: "ежедневно", reading: "예즈데브나", meaning: "매일" },
]);

const yoExamples = createCaseExamples([
  { word: "ёлка", reading: "욜카", meaning: "전나무" },
  { word: "ёж", reading: "요시", meaning: "고슴도치" },
  { word: "ёжик", reading: "요지크", meaning: "작은 고슴도치" },
  { word: "ёмкость", reading: "욤코스트", meaning: "용기, 용량" },
  { word: "ёлочка", reading: "요로치카", meaning: "작은 전나무" },
]);

const zheExamples = createCaseExamples([
  { word: "жук", reading: "주크", meaning: "벌레" },
  { word: "жара", reading: "자라", meaning: "더위" },
  { word: "жизнь", reading: "지즌", meaning: "삶" },
  { word: "железо", reading: "젤레자", meaning: "철" },
  { word: "журнал", reading: "주르날", meaning: "잡지" },
]);

const zeExamples = createCaseExamples([
  { word: "заяц", reading: "자이츠", meaning: "토끼" },
  { word: "зима", reading: "지마", meaning: "겨울" },
  { word: "звонок", reading: "즈바녹", meaning: "전화" },
  { word: "звезда", reading: "즈베즈다", meaning: "별" },
  { word: "золото", reading: "졸라타", meaning: "금" },
]);

const iExamples = createCaseExamples([
  { word: "игра", reading: "이그라", meaning: "놀이" },
  { word: "ирис", reading: "이리스", meaning: "붓꽃" },
  { word: "имя", reading: "임야", meaning: "이름" },
  { word: "история", reading: "이스토리아", meaning: "역사" },
  { word: "идея", reading: "이데야", meaning: "아이디어" },
]);

const shortIExamples = createCaseExamples([
  { word: "йога", reading: "요가", meaning: "요가" },
  { word: "йод", reading: "요드", meaning: "요오드" },
  { word: "йогурт", reading: "요구르트", meaning: "요거트" },
  { word: "йота", reading: "요타", meaning: "아주 작은 양" },
  { word: "йог", reading: "요그", meaning: "요기" },
]);

const kaExamples = createCaseExamples([
  { word: "кот", reading: "코트", meaning: "고양이" },
  { word: "книга", reading: "크니가", meaning: "책" },
  { word: "камень", reading: "카멘", meaning: "돌" },
  { word: "корова", reading: "코로바", meaning: "소" },
  { word: "круг", reading: "크루그", meaning: "원" },
]);

const elExamples = createCaseExamples([
  { word: "лампа", reading: "람파", meaning: "전등" },
  { word: "лес", reading: "레스", meaning: "숲" },
  { word: "лодка", reading: "로트카", meaning: "배" },
  { word: "луч", reading: "루치", meaning: "빛줄기" },
  { word: "лист", reading: "리스트", meaning: "잎" },
]);

const emExamples = createCaseExamples([
  { word: "мама", reading: "마마", meaning: "엄마" },
  { word: "мир", reading: "미르", meaning: "세계" },
  { word: "море", reading: "모레", meaning: "바다" },
  { word: "мост", reading: "모스트", meaning: "다리" },
  { word: "музыка", reading: "무지카", meaning: "음악" },
]);

const enExamples = createCaseExamples([
  { word: "нос", reading: "노스", meaning: "코" },
  { word: "небо", reading: "네바", meaning: "하늘" },
  { word: "нога", reading: "노가", meaning: "다리" },
  { word: "ночь", reading: "노치", meaning: "밤" },
  { word: "нитка", reading: "니트카", meaning: "실" },
]);

const oExamples = createCaseExamples([
  { word: "окно", reading: "옥노", meaning: "창문" },
  { word: "огонь", reading: "아곤", meaning: "불" },
  { word: "облако", reading: "오블라카", meaning: "구름" },
  { word: "осень", reading: "오센", meaning: "가을" },
  { word: "овощи", reading: "오보시", meaning: "채소" },
]);

const peExamples = createCaseExamples([
  { word: "папа", reading: "파파", meaning: "아빠" },
  { word: "парк", reading: "파르크", meaning: "공원" },
  { word: "письмо", reading: "피스모", meaning: "편지" },
  { word: "птица", reading: "프티차", meaning: "새" },
  { word: "пирог", reading: "피로그", meaning: "파이" },
]);

const erExamples = createCaseExamples([
  { word: "река", reading: "레카", meaning: "강" },
  { word: "рыба", reading: "리바", meaning: "물고기" },
  { word: "рука", reading: "루카", meaning: "손" },
  { word: "роман", reading: "로만", meaning: "소설" },
  { word: "роза", reading: "로자", meaning: "장미" },
]);

const esExamples = createCaseExamples([
  { word: "солнце", reading: "솔른체", meaning: "태양" },
  { word: "собака", reading: "소바카", meaning: "개" },
  { word: "сыр", reading: "시르", meaning: "치즈" },
  { word: "стол", reading: "스톨", meaning: "책상" },
  { word: "снег", reading: "스녹", meaning: "눈" },
]);

const teExamples = createCaseExamples([
  { word: "трава", reading: "트라바", meaning: "풀" },
  { word: "тетрадь", reading: "테트라드", meaning: "공책" },
  { word: "туча", reading: "투차", meaning: "구름" },
  { word: "телефон", reading: "텔레폰", meaning: "전화기" },
  { word: "торт", reading: "토르트", meaning: "케이크" },
]);

const uExamples = createCaseExamples([
  { word: "утро", reading: "우트로", meaning: "아침" },
  { word: "улица", reading: "울리차", meaning: "거리" },
  { word: "ухо", reading: "우호", meaning: "귀" },
  { word: "ужин", reading: "우진", meaning: "저녁식사" },
  { word: "улыбка", reading: "울륍카", meaning: "미소" },
]);

const efExamples = createCaseExamples([
  { word: "флаг", reading: "플라그", meaning: "깃발" },
  { word: "фрукт", reading: "프룩트", meaning: "과일" },
  { word: "фильм", reading: "필름", meaning: "영화" },
  { word: "форма", reading: "포르마", meaning: "형태" },
  { word: "фонарь", reading: "포나르", meaning: "등불" },
]);

const khaExamples = createCaseExamples([
  { word: "хлеб", reading: "흘렙", meaning: "빵" },
  { word: "холод", reading: "홀로드", meaning: "추위" },
  { word: "хижина", reading: "히지나", meaning: "오두막" },
  { word: "храм", reading: "흐람", meaning: "사원" },
  { word: "хвост", reading: "흐보스트", meaning: "꼬리" },
]);

const tseExamples = createCaseExamples([
  { word: "цирк", reading: "치르크", meaning: "서커스" },
  { word: "цветок", reading: "츠베톡", meaning: "꽃" },
  { word: "цифра", reading: "치프라", meaning: "숫자" },
  { word: "цена", reading: "체나", meaning: "가격" },
  { word: "цыплёнок", reading: "츠플료녹", meaning: "병아리" },
]);

const cheExamples = createCaseExamples([
  { word: "чай", reading: "차이", meaning: "차" },
  { word: "часы", reading: "차시", meaning: "시계" },
  { word: "человек", reading: "첼로벡", meaning: "사람" },
  { word: "чистый", reading: "치스트이", meaning: "깨끗한" },
  { word: "чемодан", reading: "체모단", meaning: "가방" },
]);

const shaExamples = createCaseExamples([
  { word: "шар", reading: "샤르", meaning: "공" },
  { word: "школа", reading: "슈콜라", meaning: "학교" },
  { word: "шум", reading: "슈므", meaning: "소음" },
  { word: "шапка", reading: "샤프카", meaning: "모자" },
  { word: "шуба", reading: "슈바", meaning: "모피코트" },
]);

const shchaExamples = createCaseExamples([
  { word: "щука", reading: "슈카", meaning: "파이크" },
  { word: "щётка", reading: "쇼트카", meaning: "솔" },
  { word: "щенок", reading: "셰녹", meaning: "강아지" },
  { word: "щека", reading: "셰카", meaning: "뺨" },
  { word: "щель", reading: "셸", meaning: "틈" },
]);

const hardSignExamples = createCaseExamples([
  { word: "подъезд", reading: "포드예스트", meaning: "현관, 출입구" },
  { word: "объём", reading: "오브욤", meaning: "부피, 용량" },
  { word: "объявление", reading: "압야블레니예", meaning: "공지, 광고" },
  { word: "съёмка", reading: "스욤카", meaning: "촬영" },
  { word: "разъезд", reading: "라즈예즈트", meaning: "갈림길, 분기" },
]);

const yeruExamples = createCaseExamples([
  { word: "сыр", reading: "시르", meaning: "치즈" },
  { word: "сын", reading: "신", meaning: "아들" },
  { word: "дым", reading: "듬", meaning: "연기" },
  { word: "рыба", reading: "리바", meaning: "물고기" },
  { word: "бык", reading: "빅", meaning: "황소" },
]);

const softSignExamples = createCaseExamples([
  { word: "мальчик", reading: "말치크", meaning: "소년" },
  { word: "день", reading: "덴", meaning: "하루" },
  { word: "конь", reading: "콘", meaning: "말" },
  { word: "семья", reading: "셈야", meaning: "가족" },
  { word: "бельё", reading: "벨요", meaning: "세탁물" },
]);

const eReversedExamples = createCaseExamples([
  { word: "этаж", reading: "에타시", meaning: "층" },
  { word: "экран", reading: "에크란", meaning: "화면" },
  { word: "экзамен", reading: "엑자멘", meaning: "시험" },
  { word: "это", reading: "에타", meaning: "이것" },
  { word: "эхо", reading: "에호", meaning: "메아리" },
]);

const yuExamples = createCaseExamples([
  { word: "юг", reading: "유그", meaning: "남쪽" },
  { word: "юбка", reading: "유브카", meaning: "치마" },
  { word: "юла", reading: "율라", meaning: "팽이" },
  { word: "юнга", reading: "융가", meaning: "선원" },
  { word: "юмор", reading: "유모르", meaning: "유머" },
]);

const yaExamples = createCaseExamples([
  { word: "яблоко", reading: "얍로코", meaning: "사과" },
  { word: "язык", reading: "야즉", meaning: "언어" },
  { word: "яма", reading: "야마", meaning: "구덩이" },
  { word: "ягода", reading: "야고다", meaning: "열매" },
  { word: "ясно", reading: "야스노", meaning: "분명한" },
]);

export const russianExampleWordsByTemplateId: Record<string, ExampleWord[]> = {
  "ru-uppercase-a": aExamples.uppercase,
  "ru-lowercase-a": aExamples.lowercase,
  "ru-uppercase-be": beExamples.uppercase,
  "ru-lowercase-be": beExamples.lowercase,
  "ru-uppercase-ve": veExamples.uppercase,
  "ru-lowercase-ve": veExamples.lowercase,
  "ru-uppercase-ge": geExamples.uppercase,
  "ru-lowercase-ge": geExamples.lowercase,
  "ru-uppercase-de": deExamples.uppercase,
  "ru-lowercase-de": deExamples.lowercase,
  "ru-uppercase-ye": yeExamples.uppercase,
  "ru-lowercase-ye": yeExamples.lowercase,
  "ru-uppercase-yo": yoExamples.uppercase,
  "ru-lowercase-yo": yoExamples.lowercase,
  "ru-uppercase-zhe": zheExamples.uppercase,
  "ru-lowercase-zhe": zheExamples.lowercase,
  "ru-uppercase-ze": zeExamples.uppercase,
  "ru-lowercase-ze": zeExamples.lowercase,
  "ru-uppercase-i": iExamples.uppercase,
  "ru-lowercase-i": iExamples.lowercase,
  "ru-uppercase-short-i": shortIExamples.uppercase,
  "ru-lowercase-short-i": shortIExamples.lowercase,
  "ru-uppercase-ka": kaExamples.uppercase,
  "ru-lowercase-ka": kaExamples.lowercase,
  "ru-uppercase-el": elExamples.uppercase,
  "ru-lowercase-el": elExamples.lowercase,
  "ru-uppercase-em": emExamples.uppercase,
  "ru-lowercase-em": emExamples.lowercase,
  "ru-uppercase-en": enExamples.uppercase,
  "ru-lowercase-en": enExamples.lowercase,
  "ru-uppercase-o": oExamples.uppercase,
  "ru-lowercase-o": oExamples.lowercase,
  "ru-uppercase-pe": peExamples.uppercase,
  "ru-lowercase-pe": peExamples.lowercase,
  "ru-uppercase-er": erExamples.uppercase,
  "ru-lowercase-er": erExamples.lowercase,
  "ru-uppercase-es": esExamples.uppercase,
  "ru-lowercase-es": esExamples.lowercase,
  "ru-uppercase-te": teExamples.uppercase,
  "ru-lowercase-te": teExamples.lowercase,
  "ru-uppercase-u": uExamples.uppercase,
  "ru-lowercase-u": uExamples.lowercase,
  "ru-uppercase-ef": efExamples.uppercase,
  "ru-lowercase-ef": efExamples.lowercase,
  "ru-uppercase-kha": khaExamples.uppercase,
  "ru-lowercase-kha": khaExamples.lowercase,
  "ru-uppercase-tse": tseExamples.uppercase,
  "ru-lowercase-tse": tseExamples.lowercase,
  "ru-uppercase-che": cheExamples.uppercase,
  "ru-lowercase-che": cheExamples.lowercase,
  "ru-uppercase-sha": shaExamples.uppercase,
  "ru-lowercase-sha": shaExamples.lowercase,
  "ru-uppercase-shcha": shchaExamples.uppercase,
  "ru-lowercase-shcha": shchaExamples.lowercase,
  "ru-uppercase-hard-sign": hardSignExamples.uppercase,
  "ru-lowercase-hard-sign": hardSignExamples.lowercase,
  "ru-uppercase-yeru": yeruExamples.uppercase,
  "ru-lowercase-yeru": yeruExamples.lowercase,
  "ru-uppercase-soft-sign": softSignExamples.uppercase,
  "ru-lowercase-soft-sign": softSignExamples.lowercase,
  "ru-uppercase-e-reversed": eReversedExamples.uppercase,
  "ru-lowercase-e-reversed": eReversedExamples.lowercase,
  "ru-uppercase-yu": yuExamples.uppercase,
  "ru-lowercase-yu": yuExamples.lowercase,
  "ru-uppercase-ya": yaExamples.uppercase,
  "ru-lowercase-ya": yaExamples.lowercase,
};
