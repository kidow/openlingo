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

const aExamples = createCaseExamples([
  { word: "apfel", reading: "아프펠", meaning: "사과" },
  { word: "auto", reading: "아우토", meaning: "자동차" },
  { word: "ameise", reading: "아마이제", meaning: "개미" },
  { word: "abend", reading: "아벤트", meaning: "저녁" },
  { word: "arm", reading: "아름", meaning: "팔" },
]);

const bExamples = createCaseExamples([
  { word: "ball", reading: "발", meaning: "공" },
  { word: "baum", reading: "바움", meaning: "나무" },
  { word: "buch", reading: "부흐", meaning: "책" },
  { word: "blume", reading: "블루메", meaning: "꽃" },
  { word: "brot", reading: "브로트", meaning: "빵" },
]);

const cExamples = createCaseExamples([
  { word: "café", reading: "카페", meaning: "카페" },
  { word: "clown", reading: "클라운", meaning: "광대" },
  { word: "computer", reading: "콤퓨터", meaning: "컴퓨터" },
  { word: "chaos", reading: "카오스", meaning: "혼돈" },
  { word: "charme", reading: "샤르메", meaning: "매력" },
]);

const dExamples = createCaseExamples([
  { word: "dach", reading: "다흐", meaning: "지붕" },
  { word: "dorf", reading: "도르프", meaning: "마을" },
  { word: "drache", reading: "드라헤", meaning: "용" },
  { word: "dose", reading: "도제", meaning: "통" },
  { word: "duft", reading: "두프트", meaning: "향기" },
]);

const eExamples = createCaseExamples([
  { word: "ente", reading: "엔테", meaning: "오리" },
  { word: "erde", reading: "에르데", meaning: "땅" },
  { word: "ecke", reading: "에케", meaning: "모서리" },
  { word: "eis", reading: "아이스", meaning: "얼음" },
  { word: "engel", reading: "엥엘", meaning: "천사" },
]);

const fExamples = createCaseExamples([
  { word: "fisch", reading: "피쉬", meaning: "물고기" },
  { word: "feld", reading: "펠트", meaning: "들판" },
  { word: "fenster", reading: "펜스터", meaning: "창문" },
  { word: "freund", reading: "프로인트", meaning: "친구" },
  { word: "feder", reading: "페더", meaning: "깃털" },
]);

const gExamples = createCaseExamples([
  { word: "garten", reading: "가르텐", meaning: "정원" },
  { word: "glas", reading: "글라스", meaning: "유리잔" },
  { word: "glück", reading: "글뤽", meaning: "행운" },
  { word: "gitarre", reading: "기타레", meaning: "기타" },
  { word: "gold", reading: "골트", meaning: "금" },
]);

const hExamples = createCaseExamples([
  { word: "haus", reading: "하우스", meaning: "집" },
  { word: "hase", reading: "하제", meaning: "토끼" },
  { word: "herz", reading: "헤르츠", meaning: "심장" },
  { word: "himmel", reading: "히멜", meaning: "하늘" },
  { word: "hut", reading: "후트", meaning: "모자" },
]);

const iExamples = createCaseExamples([
  { word: "igel", reading: "이겔", meaning: "고슴도치" },
  { word: "insel", reading: "인젤", meaning: "섬" },
  { word: "idee", reading: "이데", meaning: "아이디어" },
  { word: "instrument", reading: "인스트루멘트", meaning: "악기" },
  { word: "immer", reading: "이머", meaning: "항상" },
]);

const jExamples = createCaseExamples([
  { word: "junge", reading: "융에", meaning: "소년" },
  { word: "jacke", reading: "야케", meaning: "재킷" },
  { word: "jahr", reading: "야르", meaning: "해" },
  { word: "joghurt", reading: "요구르트", meaning: "요거트" },
  { word: "jubel", reading: "유벨", meaning: "환호" },
]);

const kExamples = createCaseExamples([
  { word: "katze", reading: "캇체", meaning: "고양이" },
  { word: "kind", reading: "킨트", meaning: "아이" },
  { word: "kuchen", reading: "쿠헨", meaning: "케이크" },
  { word: "könig", reading: "쾨니히", meaning: "왕" },
  { word: "kerze", reading: "케르체", meaning: "양초" },
]);

const lExamples = createCaseExamples([
  { word: "lampe", reading: "람페", meaning: "램프" },
  { word: "löwe", reading: "뢰베", meaning: "사자" },
  { word: "laub", reading: "라우브", meaning: "잎" },
  { word: "leder", reading: "레더", meaning: "가죽" },
  { word: "luft", reading: "루프트", meaning: "공기" },
]);

const mExamples = createCaseExamples([
  { word: "mond", reading: "몬트", meaning: "달" },
  { word: "maus", reading: "마우스", meaning: "쥐" },
  { word: "markt", reading: "마르크트", meaning: "시장" },
  { word: "mutter", reading: "무터", meaning: "어머니" },
  { word: "musik", reading: "무지크", meaning: "음악" },
]);

const nExamples = createCaseExamples([
  { word: "nase", reading: "나제", meaning: "코" },
  { word: "nebel", reading: "네벨", meaning: "안개" },
  { word: "nest", reading: "네스트", meaning: "둥지" },
  { word: "nacht", reading: "나흐트", meaning: "밤" },
  { word: "note", reading: "노테", meaning: "음표" },
]);

const oExamples = createCaseExamples([
  { word: "ofen", reading: "오펜", meaning: "오븐" },
  { word: "obst", reading: "오프스트", meaning: "과일" },
  { word: "ohr", reading: "오르", meaning: "귀" },
  { word: "orange", reading: "오랑제", meaning: "오렌지" },
  { word: "orgel", reading: "오르겔", meaning: "오르간" },
]);

const pExamples = createCaseExamples([
  { word: "pferd", reading: "페르트", meaning: "말" },
  { word: "papier", reading: "파피어", meaning: "종이" },
  { word: "park", reading: "파르크", meaning: "공원" },
  { word: "pilz", reading: "필츠", meaning: "버섯" },
  { word: "polizist", reading: "폴리치스트", meaning: "경찰" },
]);

const qExamples = createCaseExamples([
  { word: "quark", reading: "콰르크", meaning: "크림치즈" },
  { word: "quelle", reading: "퀠레", meaning: "샘" },
  { word: "quiz", reading: "퀴츠", meaning: "퀴즈" },
  { word: "quer", reading: "케어", meaning: "비스듬한" },
  { word: "quittung", reading: "퀴퉁", meaning: "영수증" },
]);

const rExamples = createCaseExamples([
  { word: "rad", reading: "라트", meaning: "바퀴" },
  { word: "rose", reading: "로제", meaning: "장미" },
  { word: "regal", reading: "레갈", meaning: "선반" },
  { word: "reise", reading: "라이제", meaning: "여행" },
  { word: "rucksack", reading: "룩삭", meaning: "배낭" },
]);

const sExamples = createCaseExamples([
  { word: "sonne", reading: "존네", meaning: "태양" },
  { word: "schule", reading: "슐레", meaning: "학교" },
  { word: "salz", reading: "잘츠", meaning: "소금" },
  { word: "see", reading: "제", meaning: "호수" },
  { word: "schaf", reading: "샤프", meaning: "양" },
]);

const tExamples = createCaseExamples([
  { word: "tisch", reading: "티쉬", meaning: "탁자" },
  { word: "tür", reading: "튀르", meaning: "문" },
  { word: "tal", reading: "탈", meaning: "계곡" },
  { word: "tiger", reading: "티거", meaning: "호랑이" },
  { word: "tulpe", reading: "툴페", meaning: "튤립" },
]);

const uExamples = createCaseExamples([
  { word: "uhr", reading: "우어", meaning: "시계" },
  { word: "ufer", reading: "우퍼", meaning: "강둑" },
  { word: "umwelt", reading: "움벨트", meaning: "환경" },
  { word: "urlaub", reading: "우어라우브", meaning: "휴가" },
  { word: "unter", reading: "운터", meaning: "아래의" },
]);

const vExamples = createCaseExamples([
  { word: "vogel", reading: "포겔", meaning: "새" },
  { word: "vase", reading: "바제", meaning: "꽃병" },
  { word: "volk", reading: "폴크", meaning: "민족" },
  { word: "vier", reading: "피어", meaning: "넷" },
  { word: "violine", reading: "비올리네", meaning: "바이올린" },
]);

const wExamples = createCaseExamples([
  { word: "wasser", reading: "바서", meaning: "물" },
  { word: "wald", reading: "발트", meaning: "숲" },
  { word: "wolke", reading: "볼케", meaning: "구름" },
  { word: "wurst", reading: "부르스트", meaning: "소시지" },
  { word: "wagen", reading: "바겐", meaning: "마차" },
]);

const xExamples = createCaseExamples([
  { word: "xylophon", reading: "크실로폰", meaning: "실로폰" },
  { word: "xenon", reading: "제논", meaning: "제논" },
  { word: "xavier", reading: "자비어", meaning: "자비에르" },
  { word: "xylofon", reading: "크실로폰", meaning: "실로폰" },
  { word: "x-bein", reading: "엑스바인", meaning: "엑스다리" },
]);

const yExamples = createCaseExamples([
  { word: "yacht", reading: "야흐트", meaning: "요트" },
  { word: "yoga", reading: "요가", meaning: "요가" },
  { word: "ypsilon", reading: "입실론", meaning: "입실론" },
  { word: "yeti", reading: "예티", meaning: "예티" },
  { word: "yak", reading: "약", meaning: "야크" },
]);

const zExamples = createCaseExamples([
  { word: "zebra", reading: "체브라", meaning: "얼룩말" },
  { word: "zelt", reading: "첼트", meaning: "텐트" },
  { word: "zunge", reading: "춘게", meaning: "혀" },
  { word: "zahl", reading: "차흘", meaning: "숫자" },
  { word: "zug", reading: "추크", meaning: "기차" },
]);

const aUmlautExamples = createCaseExamples([
  { word: "äpfel", reading: "에플", meaning: "사과들" },
  { word: "ärger", reading: "에르거", meaning: "짜증" },
  { word: "ärmel", reading: "에르멜", meaning: "소매" },
  { word: "ähre", reading: "에헤", meaning: "이삭" },
  { word: "äußerst", reading: "오이서스트", meaning: "극도로" },
]);

const oUmlautExamples = createCaseExamples([
  { word: "öl", reading: "외르", meaning: "기름" },
  { word: "öffnen", reading: "외픈", meaning: "열다" },
  { word: "ökologie", reading: "외콜로기", meaning: "생태학" },
  { word: "österreich", reading: "외스터라이히", meaning: "오스트리아" },
  { word: "öffentlich", reading: "외펜틀리히", meaning: "공공의" },
]);

const uUmlautExamples = createCaseExamples([
  { word: "über", reading: "위버", meaning: "~에 대하여" },
  { word: "übung", reading: "위붕", meaning: "연습" },
  { word: "übersicht", reading: "위버지히트", meaning: "개요" },
  { word: "überall", reading: "위버알", meaning: "어디나" },
  { word: "überzug", reading: "위버추크", meaning: "덮개" },
]);

const eszettExamples: ExampleWord[] = [
  { word: "straße", reading: "슈트라세", meaning: "거리" },
  { word: "fuß", reading: "푸스", meaning: "발" },
  { word: "groß", reading: "그로스", meaning: "큰" },
  { word: "maß", reading: "마스", meaning: "치수" },
  { word: "weiß", reading: "바이스", meaning: "흰색" },
];

export const germanExampleWordsByTemplateId: Record<string, ExampleWord[]> = {
  "de-a": aExamples.uppercase,
  "de-lower-a": aExamples.lowercase,
  "de-b": bExamples.uppercase,
  "de-lower-b": bExamples.lowercase,
  "de-c": cExamples.uppercase,
  "de-lower-c": cExamples.lowercase,
  "de-d": dExamples.uppercase,
  "de-lower-d": dExamples.lowercase,
  "de-e": eExamples.uppercase,
  "de-lower-e": eExamples.lowercase,
  "de-f": fExamples.uppercase,
  "de-lower-f": fExamples.lowercase,
  "de-g": gExamples.uppercase,
  "de-lower-g": gExamples.lowercase,
  "de-h": hExamples.uppercase,
  "de-lower-h": hExamples.lowercase,
  "de-i": iExamples.uppercase,
  "de-lower-i": iExamples.lowercase,
  "de-j": jExamples.uppercase,
  "de-lower-j": jExamples.lowercase,
  "de-k": kExamples.uppercase,
  "de-lower-k": kExamples.lowercase,
  "de-l": lExamples.uppercase,
  "de-lower-l": lExamples.lowercase,
  "de-m": mExamples.uppercase,
  "de-lower-m": mExamples.lowercase,
  "de-n": nExamples.uppercase,
  "de-lower-n": nExamples.lowercase,
  "de-o": oExamples.uppercase,
  "de-lower-o": oExamples.lowercase,
  "de-p": pExamples.uppercase,
  "de-lower-p": pExamples.lowercase,
  "de-q": qExamples.uppercase,
  "de-lower-q": qExamples.lowercase,
  "de-r": rExamples.uppercase,
  "de-lower-r": rExamples.lowercase,
  "de-s": sExamples.uppercase,
  "de-lower-s": sExamples.lowercase,
  "de-t": tExamples.uppercase,
  "de-lower-t": tExamples.lowercase,
  "de-u": uExamples.uppercase,
  "de-lower-u": uExamples.lowercase,
  "de-v": vExamples.uppercase,
  "de-lower-v": vExamples.lowercase,
  "de-w": wExamples.uppercase,
  "de-lower-w": wExamples.lowercase,
  "de-x": xExamples.uppercase,
  "de-lower-x": xExamples.lowercase,
  "de-y": yExamples.uppercase,
  "de-lower-y": yExamples.lowercase,
  "de-z": zExamples.uppercase,
  "de-lower-z": zExamples.lowercase,
  "de-uppercase-a-umlaut": aUmlautExamples.uppercase,
  "de-lowercase-a-umlaut": aUmlautExamples.lowercase,
  "de-uppercase-o-umlaut": oUmlautExamples.uppercase,
  "de-lowercase-o-umlaut": oUmlautExamples.lowercase,
  "de-uppercase-u-umlaut": uUmlautExamples.uppercase,
  "de-lowercase-u-umlaut": uUmlautExamples.lowercase,
  "de-uppercase-eszett": eszettExamples,
  "de-lowercase-eszett": eszettExamples,
};
