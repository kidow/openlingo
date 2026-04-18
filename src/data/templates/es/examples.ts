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
  { word: "avión", reading: "아비온", meaning: "비행기" },
  { word: "abeja", reading: "아베하", meaning: "벌" },
  { word: "agua", reading: "아과", meaning: "물" },
  { word: "árbol", reading: "아르볼", meaning: "나무" },
  { word: "amigo", reading: "아미고", meaning: "친구" },
]);

const bExamples = createCaseExamples([
  { word: "barco", reading: "바르코", meaning: "배" },
  { word: "balón", reading: "발론", meaning: "공" },
  { word: "bebé", reading: "베베", meaning: "아기" },
  { word: "beso", reading: "베소", meaning: "입맞춤" },
  { word: "boca", reading: "보카", meaning: "입" },
]);

const cExamples = createCaseExamples([
  { word: "casa", reading: "카사", meaning: "집" },
  { word: "coche", reading: "코체", meaning: "자동차" },
  { word: "cine", reading: "시네", meaning: "영화관" },
  { word: "color", reading: "콜로르", meaning: "색" },
  { word: "corazón", reading: "코라손", meaning: "심장" },
]);

const dExamples = createCaseExamples([
  { word: "dado", reading: "다도", meaning: "주사위" },
  { word: "dedo", reading: "데도", meaning: "손가락" },
  { word: "día", reading: "디아", meaning: "날" },
  { word: "dulce", reading: "둘세", meaning: "단것" },
  { word: "dinosaurio", reading: "디노사우리오", meaning: "공룡" },
]);

const eExamples = createCaseExamples([
  { word: "elefante", reading: "엘레판테", meaning: "코끼리" },
  { word: "escuela", reading: "에스쿠엘라", meaning: "학교" },
  { word: "estrella", reading: "에스트레야", meaning: "별" },
  { word: "espejo", reading: "에스페호", meaning: "거울" },
  { word: "enero", reading: "에네로", meaning: "1월" },
]);

const fExamples = createCaseExamples([
  { word: "fruta", reading: "프루타", meaning: "과일" },
  { word: "familia", reading: "파밀리아", meaning: "가족" },
  { word: "fuego", reading: "푸에고", meaning: "불" },
  { word: "flor", reading: "플로르", meaning: "꽃" },
  { word: "famoso", reading: "파모소", meaning: "유명한" },
]);

const gExamples = createCaseExamples([
  { word: "gato", reading: "가토", meaning: "고양이" },
  { word: "gorro", reading: "고로", meaning: "모자" },
  { word: "grande", reading: "그란데", meaning: "큰" },
  { word: "gusano", reading: "구사노", meaning: "벌레" },
  { word: "guitarra", reading: "기타라", meaning: "기타" },
]);

const hExamples = createCaseExamples([
  { word: "hola", reading: "올라", meaning: "안녕" },
  { word: "huevo", reading: "우에보", meaning: "달걀" },
  { word: "hotel", reading: "오텔", meaning: "호텔" },
  { word: "historia", reading: "이스토리아", meaning: "역사" },
  { word: "hacha", reading: "아차", meaning: "도끼" },
]);

const iExamples = createCaseExamples([
  { word: "isla", reading: "이스라", meaning: "섬" },
  { word: "iguana", reading: "이과나", meaning: "이구아나" },
  { word: "imagen", reading: "이마헨", meaning: "이미지" },
  { word: "invierno", reading: "인비에르노", meaning: "겨울" },
  { word: "idea", reading: "이데아", meaning: "아이디어" },
]);

const jExamples = createCaseExamples([
  { word: "jamón", reading: "하몬", meaning: "햄" },
  { word: "juguete", reading: "후게테", meaning: "장난감" },
  { word: "jarra", reading: "하라", meaning: "주전자" },
  { word: "jabón", reading: "하본", meaning: "비누" },
  { word: "jirafa", reading: "히라파", meaning: "기린" },
]);

const kExamples = createCaseExamples([
  { word: "koala", reading: "코알라", meaning: "코알라" },
  { word: "kilo", reading: "킬로", meaning: "킬로" },
  { word: "kiwi", reading: "키위", meaning: "키위" },
  { word: "kiosco", reading: "키오스코", meaning: "가판대" },
  { word: "kárate", reading: "카라테", meaning: "가라테" },
]);

const lExamples = createCaseExamples([
  { word: "libro", reading: "리브로", meaning: "책" },
  { word: "luna", reading: "루나", meaning: "달" },
  { word: "leche", reading: "레체", meaning: "우유" },
  { word: "lápiz", reading: "라피스", meaning: "연필" },
  { word: "león", reading: "레온", meaning: "사자" },
]);

const mExamples = createCaseExamples([
  { word: "mano", reading: "마노", meaning: "손" },
  { word: "mesa", reading: "메사", meaning: "탁자" },
  { word: "mamá", reading: "마마", meaning: "엄마" },
  { word: "mar", reading: "마르", meaning: "바다" },
  { word: "montaña", reading: "몬타냐", meaning: "산" },
]);

const nExamples = createCaseExamples([
  { word: "noche", reading: "노체", meaning: "밤" },
  { word: "niña", reading: "니냐", meaning: "소녀" },
  { word: "nido", reading: "니도", meaning: "둥지" },
  { word: "naranja", reading: "나란하", meaning: "오렌지" },
  { word: "nariz", reading: "나리스", meaning: "코" },
]);

const enyeExamples = createCaseExamples([
  { word: "ñandú", reading: "냔두", meaning: "남미 타조" },
  { word: "ñoqui", reading: "뇨키", meaning: "뇨키" },
  { word: "ñu", reading: "뉴", meaning: "누" },
  { word: "ñame", reading: "냐메", meaning: "얌" },
  { word: "ñoño", reading: "뇨뇨", meaning: "유치한" },
]);

const oExamples = createCaseExamples([
  { word: "oso", reading: "오소", meaning: "곰" },
  { word: "ola", reading: "올라", meaning: "파도" },
  { word: "oreja", reading: "오레하", meaning: "귀" },
  { word: "otoño", reading: "오토뇨", meaning: "가을" },
  { word: "ojo", reading: "오호", meaning: "눈" },
]);

const pExamples = createCaseExamples([
  { word: "pato", reading: "파토", meaning: "오리" },
  { word: "pelota", reading: "펠로타", meaning: "공" },
  { word: "pan", reading: "판", meaning: "빵" },
  { word: "piano", reading: "피아노", meaning: "피아노" },
  { word: "puerta", reading: "푸에르타", meaning: "문" },
]);

const qExamples = createCaseExamples([
  { word: "queso", reading: "케소", meaning: "치즈" },
  { word: "quiosco", reading: "키오스코", meaning: "가판대" },
  { word: "quince", reading: "킨세", meaning: "15" },
  { word: "querer", reading: "케레르", meaning: "원하다" },
  { word: "quemar", reading: "케마르", meaning: "태우다" },
]);

const rExamples = createCaseExamples([
  { word: "rosa", reading: "로사", meaning: "장미" },
  { word: "río", reading: "리오", meaning: "강" },
  { word: "ratón", reading: "라톤", meaning: "쥐" },
  { word: "ropa", reading: "로파", meaning: "옷" },
  { word: "reloj", reading: "렐로흐", meaning: "시계" },
]);

const sExamples = createCaseExamples([
  { word: "sol", reading: "솔", meaning: "태양" },
  { word: "silla", reading: "실야", meaning: "의자" },
  { word: "sopa", reading: "소파", meaning: "수프" },
  { word: "serpiente", reading: "세르피엔테", meaning: "뱀" },
  { word: "sonido", reading: "소니도", meaning: "소리" },
]);

const tExamples = createCaseExamples([
  { word: "taza", reading: "타사", meaning: "컵" },
  { word: "tren", reading: "트렌", meaning: "기차" },
  { word: "tierra", reading: "티에라", meaning: "땅" },
  { word: "torre", reading: "토레", meaning: "탑" },
  { word: "tigre", reading: "티그레", meaning: "호랑이" },
]);

const uExamples = createCaseExamples([
  { word: "uva", reading: "우바", meaning: "포도" },
  { word: "uno", reading: "우노", meaning: "하나" },
  { word: "urna", reading: "우르나", meaning: "항아리" },
  { word: "unicornio", reading: "우니코르니오", meaning: "유니콘" },
  { word: "universidad", reading: "우니베르시다드", meaning: "대학교" },
]);

const vExamples = createCaseExamples([
  { word: "vaca", reading: "바카", meaning: "소" },
  { word: "vela", reading: "벨라", meaning: "초" },
  { word: "verano", reading: "베라노", meaning: "여름" },
  { word: "ventana", reading: "벤타나", meaning: "창문" },
  { word: "vaso", reading: "바소", meaning: "컵" },
]);

const wExamples = createCaseExamples([
  { word: "waffle", reading: "와플", meaning: "와플" },
  { word: "wifi", reading: "와이파이", meaning: "와이파이" },
  { word: "whisky", reading: "위스키", meaning: "위스키" },
  { word: "waterpolo", reading: "바테르폴로", meaning: "수구" },
  { word: "western", reading: "웨스턴", meaning: "서부극" },
]);

const xExamples = createCaseExamples([
  { word: "xilófono", reading: "실로포노", meaning: "실로폰" },
  { word: "xenón", reading: "세논", meaning: "제논" },
  { word: "xilema", reading: "힐레마", meaning: "물관" },
  { word: "xilografía", reading: "실로그라피아", meaning: "목판화" },
  { word: "xero", reading: "제로", meaning: "제로" },
]);

const yExamples = createCaseExamples([
  { word: "yate", reading: "야테", meaning: "요트" },
  { word: "yogur", reading: "요구르", meaning: "요거트" },
  { word: "yeso", reading: "예소", meaning: "석고" },
  { word: "yema", reading: "예마", meaning: "노른자" },
  { word: "yodo", reading: "요도", meaning: "요오드" },
]);

const zExamples = createCaseExamples([
  { word: "zapato", reading: "사파토", meaning: "신발" },
  { word: "zorro", reading: "소로", meaning: "여우" },
  { word: "zanahoria", reading: "사나오리아", meaning: "당근" },
  { word: "zumo", reading: "수모", meaning: "주스" },
  { word: "zafiro", reading: "사피로", meaning: "사파이어" },
]);

export const spanishExampleWordsByTemplateId: Record<string, ExampleWord[]> = {
  "es-a": aExamples.uppercase,
  "es-lower-a": aExamples.lowercase,
  "es-b": bExamples.uppercase,
  "es-lower-b": bExamples.lowercase,
  "es-c": cExamples.uppercase,
  "es-lower-c": cExamples.lowercase,
  "es-d": dExamples.uppercase,
  "es-lower-d": dExamples.lowercase,
  "es-e": eExamples.uppercase,
  "es-lower-e": eExamples.lowercase,
  "es-f": fExamples.uppercase,
  "es-lower-f": fExamples.lowercase,
  "es-g": gExamples.uppercase,
  "es-lower-g": gExamples.lowercase,
  "es-h": hExamples.uppercase,
  "es-lower-h": hExamples.lowercase,
  "es-i": iExamples.uppercase,
  "es-lower-i": iExamples.lowercase,
  "es-j": jExamples.uppercase,
  "es-lower-j": jExamples.lowercase,
  "es-k": kExamples.uppercase,
  "es-lower-k": kExamples.lowercase,
  "es-l": lExamples.uppercase,
  "es-lower-l": lExamples.lowercase,
  "es-m": mExamples.uppercase,
  "es-lower-m": mExamples.lowercase,
  "es-n": nExamples.uppercase,
  "es-lower-n": nExamples.lowercase,
  "es-uppercase-enye": enyeExamples.uppercase,
  "es-lowercase-enye": enyeExamples.lowercase,
  "es-o": oExamples.uppercase,
  "es-lower-o": oExamples.lowercase,
  "es-p": pExamples.uppercase,
  "es-lower-p": pExamples.lowercase,
  "es-q": qExamples.uppercase,
  "es-lower-q": qExamples.lowercase,
  "es-r": rExamples.uppercase,
  "es-lower-r": rExamples.lowercase,
  "es-s": sExamples.uppercase,
  "es-lower-s": sExamples.lowercase,
  "es-t": tExamples.uppercase,
  "es-lower-t": tExamples.lowercase,
  "es-u": uExamples.uppercase,
  "es-lower-u": uExamples.lowercase,
  "es-v": vExamples.uppercase,
  "es-lower-v": vExamples.lowercase,
  "es-w": wExamples.uppercase,
  "es-lower-w": wExamples.lowercase,
  "es-x": xExamples.uppercase,
  "es-lower-x": xExamples.lowercase,
  "es-y": yExamples.uppercase,
  "es-lower-y": yExamples.lowercase,
  "es-z": zExamples.uppercase,
  "es-lower-z": zExamples.lowercase,
};
