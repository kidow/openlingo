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
  { word: "ami", reading: "아미", meaning: "친구" },
  { word: "avion", reading: "아비옹", meaning: "비행기" },
  { word: "arbre", reading: "아르브르", meaning: "나무" },
  { word: "adresse", reading: "아드레스", meaning: "주소" },
  { word: "animal", reading: "아니말", meaning: "동물" },
]);

const bExamples = createCaseExamples([
  { word: "bateau", reading: "바토", meaning: "배" },
  { word: "bonjour", reading: "봉주르", meaning: "안녕하세요" },
  { word: "banane", reading: "바난", meaning: "바나나" },
  { word: "bouteille", reading: "부테이유", meaning: "병" },
  { word: "beurre", reading: "버르", meaning: "버터" },
]);

const cExamples = createCaseExamples([
  { word: "café", reading: "카페", meaning: "커피" },
  { word: "chat", reading: "샤", meaning: "고양이" },
  { word: "cadeau", reading: "카도", meaning: "선물" },
  { word: "ciel", reading: "시엘", meaning: "하늘" },
  { word: "chanson", reading: "상송", meaning: "노래" },
]);

const dExamples = createCaseExamples([
  { word: "danse", reading: "당스", meaning: "춤" },
  { word: "drapeau", reading: "드라포", meaning: "깃발" },
  { word: "douce", reading: "두스", meaning: "부드러운" },
  { word: "dent", reading: "당", meaning: "이" },
  { word: "début", reading: "데뷔", meaning: "시작" },
]);

const eExamples = createCaseExamples([
  { word: "école", reading: "에콜", meaning: "학교" },
  { word: "élève", reading: "엘레브", meaning: "학생" },
  { word: "étoile", reading: "에투알", meaning: "별" },
  { word: "énergie", reading: "에너지", meaning: "에너지" },
  { word: "écureuil", reading: "에퀴르유", meaning: "다람쥐" },
]);

const fExamples = createCaseExamples([
  { word: "fleur", reading: "플뢰르", meaning: "꽃" },
  { word: "fromage", reading: "프호마주", meaning: "치즈" },
  { word: "forêt", reading: "포레", meaning: "숲" },
  { word: "fenêtre", reading: "프네트르", meaning: "창문" },
  { word: "famille", reading: "파미유", meaning: "가족" },
]);

const gExamples = createCaseExamples([
  { word: "gare", reading: "가르", meaning: "역" },
  { word: "gâteau", reading: "가토", meaning: "케이크" },
  { word: "guitare", reading: "기타르", meaning: "기타" },
  { word: "glace", reading: "글라스", meaning: "얼음, 아이스크림" },
  { word: "grand", reading: "그랑", meaning: "큰" },
]);

const hExamples = createCaseExamples([
  { word: "hiver", reading: "이베르", meaning: "겨울" },
  { word: "hôtel", reading: "오텔", meaning: "호텔" },
  { word: "heure", reading: "외르", meaning: "시간" },
  { word: "haricot", reading: "아리코", meaning: "강낭콩" },
  { word: "histoire", reading: "이스투아르", meaning: "이야기" },
]);

const iExamples = createCaseExamples([
  { word: "idée", reading: "이데", meaning: "생각" },
  { word: "image", reading: "이마주", meaning: "그림" },
  { word: "île", reading: "일", meaning: "섬" },
  { word: "insecte", reading: "앙섹트", meaning: "곤충" },
  { word: "instant", reading: "앵스탕", meaning: "순간" },
]);

const jExamples = createCaseExamples([
  { word: "jardin", reading: "자르댕", meaning: "정원" },
  { word: "jouet", reading: "주에", meaning: "장난감" },
  { word: "jour", reading: "주르", meaning: "하루" },
  { word: "jupe", reading: "쥐프", meaning: "치마" },
  { word: "jaune", reading: "존", meaning: "노란색" },
]);

const kExamples = createCaseExamples([
  { word: "kiwi", reading: "키위", meaning: "키위" },
  { word: "kilo", reading: "킬로", meaning: "킬로" },
  { word: "kayak", reading: "카약", meaning: "카약" },
  { word: "karaté", reading: "카라테", meaning: "가라테" },
  { word: "kiosque", reading: "키오스크", meaning: "키오스크, 매점" },
]);

const lExamples = createCaseExamples([
  { word: "lune", reading: "륀", meaning: "달" },
  { word: "livre", reading: "리브르", meaning: "책" },
  { word: "lampe", reading: "랑프", meaning: "램프" },
  { word: "lait", reading: "레", meaning: "우유" },
  { word: "liberté", reading: "리베르테", meaning: "자유" },
]);

const mExamples = createCaseExamples([
  { word: "maison", reading: "메종", meaning: "집" },
  { word: "mère", reading: "메르", meaning: "엄마" },
  { word: "montagne", reading: "몽타뉴", meaning: "산" },
  { word: "miel", reading: "미엘", meaning: "꿀" },
  { word: "marche", reading: "마르슈", meaning: "시장, 걷기" },
]);

const nExamples = createCaseExamples([
  { word: "nuit", reading: "뉘", meaning: "밤" },
  { word: "neige", reading: "네주", meaning: "눈" },
  { word: "navire", reading: "나비르", meaning: "배" },
  { word: "nuage", reading: "뉘아주", meaning: "구름" },
  { word: "nid", reading: "니", meaning: "둥지" },
]);

const oExamples = createCaseExamples([
  { word: "orange", reading: "오랑주", meaning: "오렌지" },
  { word: "oiseau", reading: "와조", meaning: "새" },
  { word: "océan", reading: "오세앙", meaning: "대양" },
  { word: "ombre", reading: "옹브르", meaning: "그림자" },
  { word: "objet", reading: "오브제", meaning: "물건" },
]);

const pExamples = createCaseExamples([
  { word: "pomme", reading: "폼", meaning: "사과" },
  { word: "pluie", reading: "플뤼", meaning: "비" },
  { word: "porte", reading: "포르트", meaning: "문" },
  { word: "poisson", reading: "푸아송", meaning: "물고기" },
  { word: "parc", reading: "파르크", meaning: "공원" },
]);

const qExamples = createCaseExamples([
  { word: "quatre", reading: "카트르", meaning: "넷" },
  { word: "question", reading: "케스티옹", meaning: "질문" },
  { word: "queue", reading: "크외", meaning: "꼬리" },
  { word: "quinze", reading: "캥즈", meaning: "열다섯" },
  { word: "quiche", reading: "키슈", meaning: "키슈" },
]);

const rExamples = createCaseExamples([
  { word: "rose", reading: "로즈", meaning: "장미" },
  { word: "rue", reading: "뤼", meaning: "거리" },
  { word: "rivière", reading: "리비에르", meaning: "강" },
  { word: "robot", reading: "로보", meaning: "로봇" },
  { word: "radis", reading: "라디", meaning: "무" },
]);

const sExamples = createCaseExamples([
  { word: "soleil", reading: "솔레이", meaning: "태양" },
  { word: "souris", reading: "수리", meaning: "쥐" },
  { word: "salade", reading: "살라드", meaning: "샐러드" },
  { word: "serpent", reading: "세르팡", meaning: "뱀" },
  { word: "sac", reading: "삭", meaning: "가방" },
]);

const tExamples = createCaseExamples([
  { word: "table", reading: "타블", meaning: "탁자" },
  { word: "train", reading: "트랭", meaning: "기차" },
  { word: "terre", reading: "테르", meaning: "땅" },
  { word: "tulipe", reading: "튀리프", meaning: "튤립" },
  { word: "tasse", reading: "타스", meaning: "컵" },
]);

const uExamples = createCaseExamples([
  { word: "utile", reading: "위틸", meaning: "유용한" },
  { word: "univers", reading: "위니베르", meaning: "우주" },
  { word: "usine", reading: "위진", meaning: "공장" },
  { word: "urne", reading: "위른", meaning: "항아리" },
  { word: "urgent", reading: "위르장", meaning: "긴급한" },
]);

const vExamples = createCaseExamples([
  { word: "ville", reading: "빌", meaning: "도시" },
  { word: "vache", reading: "바슈", meaning: "소" },
  { word: "voiture", reading: "부아튀르", meaning: "자동차" },
  { word: "vent", reading: "방", meaning: "바람" },
  { word: "vase", reading: "바즈", meaning: "꽃병" },
]);

const wExamples = createCaseExamples([
  { word: "wagon", reading: "와곤", meaning: "열차 칸" },
  { word: "web", reading: "웹", meaning: "웹" },
  { word: "week-end", reading: "위켄드", meaning: "주말" },
  { word: "whisky", reading: "위스키", meaning: "위스키" },
  { word: "watt", reading: "와트", meaning: "와트" },
]);

const xExamples = createCaseExamples([
  { word: "xylophone", reading: "실로폰", meaning: "실로폰" },
  { word: "xénon", reading: "제논", meaning: "제논" },
  { word: "xérox", reading: "제로크스", meaning: "제록스" },
  { word: "xylème", reading: "질렘", meaning: "목부" },
  { word: "xénophobe", reading: "제노포브", meaning: "외국인 혐오의" },
]);

const yExamples = createCaseExamples([
  { word: "yaourt", reading: "야우르트", meaning: "요거트" },
  { word: "yoga", reading: "요가", meaning: "요가" },
  { word: "yacht", reading: "얏트", meaning: "요트" },
  { word: "yeux", reading: "외", meaning: "눈" },
  { word: "yéti", reading: "예티", meaning: "설인" },
]);

const zExamples = createCaseExamples([
  { word: "zèbre", reading: "제브르", meaning: "얼룩말" },
  { word: "zéro", reading: "제로", meaning: "영" },
  { word: "zeste", reading: "제스트", meaning: "껍질" },
  { word: "zigzag", reading: "지그자그", meaning: "지그재그" },
  { word: "zoo", reading: "주", meaning: "동물원" },
]);

const aGraveExamples = createCaseExamples([
  { word: "à", reading: "아", meaning: "에, ~에서" },
  { word: "à table", reading: "아 타블", meaning: "식탁에" },
  { word: "à côté", reading: "아 코테", meaning: "옆에" },
  { word: "à bientôt", reading: "아 비앙토", meaning: "곧 봐요" },
  { word: "à la maison", reading: "아 라 메종", meaning: "집에서" },
]);

const aCircumflexExamples = createCaseExamples([
  { word: "âge", reading: "아주", meaning: "나이" },
  { word: "âme", reading: "암", meaning: "영혼" },
  { word: "âne", reading: "안", meaning: "당나귀" },
  { word: "âcre", reading: "아크르", meaning: "매운, 신랄한" },
  { word: "âgé", reading: "아제", meaning: "나이 든" },
]);

const cCedillaExamples = createCaseExamples([
  { word: "ça", reading: "사", meaning: "이것, 저것" },
  { word: "çà", reading: "사", meaning: "여기, 저기" },
  { word: "garçon", reading: "가르송", meaning: "소년" },
  { word: "français", reading: "프랑세", meaning: "프랑스어" },
  { word: "leçon", reading: "르송", meaning: "교훈" },
]);

const eAcuteExamples = createCaseExamples([
  { word: "école", reading: "에콜", meaning: "학교" },
  { word: "élève", reading: "엘레브", meaning: "학생" },
  { word: "étoile", reading: "에투알", meaning: "별" },
  { word: "énergie", reading: "에너지", meaning: "에너지" },
  { word: "écureuil", reading: "에퀴르유", meaning: "다람쥐" },
]);

const eGraveExamples = createCaseExamples([
  { word: "ère", reading: "에르", meaning: "시대" },
  { word: "père", reading: "페르", meaning: "아버지" },
  { word: "mère", reading: "메르", meaning: "어머니" },
  { word: "très", reading: "트레", meaning: "매우" },
  { word: "crème", reading: "크렘", meaning: "크림" },
]);

const eCircumflexExamples = createCaseExamples([
  { word: "être", reading: "에트르", meaning: "이다, 존재하다" },
  { word: "fête", reading: "페트", meaning: "축제" },
  { word: "crêpe", reading: "크렙", meaning: "크레프" },
  { word: "forêt", reading: "포레", meaning: "숲" },
  { word: "tête", reading: "텟", meaning: "머리" },
]);

const eDiaeresisExamples = createCaseExamples([
  { word: "Noël", reading: "노엘", meaning: "크리스마스" },
  { word: "Citroën", reading: "시트로엔", meaning: "시트로엥" },
  { word: "Chloë", reading: "클로에", meaning: "클로에" },
  { word: "Zoë", reading: "조에", meaning: "조에" },
  { word: "Anaël", reading: "아나엘", meaning: "아나엘" },
]);

const iCircumflexExamples = createCaseExamples([
  { word: "île", reading: "일", meaning: "섬" },
  { word: "îlot", reading: "일로", meaning: "작은 섬" },
  { word: "îles", reading: "일", meaning: "섬들" },
  { word: "îlien", reading: "일리앙", meaning: "섬의" },
  { word: "îlet", reading: "일레", meaning: "작은 섬" },
]);

const iDiaeresisExamples = createCaseExamples([
  { word: "naïf", reading: "나이프", meaning: "순진한" },
  { word: "naïve", reading: "나이브", meaning: "순진한" },
  { word: "maïs", reading: "마이스", meaning: "옥수수" },
  { word: "aïe", reading: "아이", meaning: "아야" },
  { word: "coïncider", reading: "코앙시데", meaning: "일치하다" },
]);

const oCircumflexExamples = createCaseExamples([
  { word: "ôter", reading: "오테", meaning: "벗기다, 제거하다" },
  { word: "ôde", reading: "오드", meaning: "송가" },
  { word: "rôle", reading: "롤", meaning: "역할" },
  { word: "côte", reading: "코트", meaning: "해안" },
  { word: "dôme", reading: "돔", meaning: "돔" },
]);

const uGraveExamples = createCaseExamples([
  { word: "où", reading: "우", meaning: "어디에" },
  { word: "là où", reading: "라 우", meaning: "그곳에" },
  { word: "d'où", reading: "두", meaning: "어디서" },
  { word: "par où", reading: "파르 우", meaning: "어디로" },
  { word: "jusqu'où", reading: "쥐스쿠 우", meaning: "어디까지" },
]);

const uCircumflexExamples = createCaseExamples([
  { word: "sûr", reading: "쉬르", meaning: "확실한" },
  { word: "mûr", reading: "뮈르", meaning: "익은" },
  { word: "dû", reading: "뒤", meaning: "빚진" },
  { word: "goût", reading: "구", meaning: "맛" },
  { word: "bûche", reading: "뷔슈", meaning: "장작" },
]);

const uDiaeresisExamples = createCaseExamples([
  { word: "aiguë", reading: "에귀", meaning: "날카로운" },
  { word: "ambiguë", reading: "앙비귀", meaning: "모호한" },
  { word: "contiguë", reading: "콩티귀", meaning: "인접한" },
  { word: "exiguë", reading: "에그지귀", meaning: "매우 좁은" },
  { word: "aigüe", reading: "에귀", meaning: "날카로운" },
]);

const oeLigatureExamples = createCaseExamples([
  { word: "œil", reading: "외유", meaning: "눈" },
  { word: "œuf", reading: "외프", meaning: "달걀" },
  { word: "œuvre", reading: "외브르", meaning: "작품" },
  { word: "cœur", reading: "커르", meaning: "심장" },
  { word: "sœur", reading: "쇠르", meaning: "자매" },
]);

export const frenchExampleWordsByTemplateId: Record<string, ExampleWord[]> = {
  "fr-a": aExamples.uppercase,
  "fr-lower-a": aExamples.lowercase,
  "fr-b": bExamples.uppercase,
  "fr-lower-b": bExamples.lowercase,
  "fr-c": cExamples.uppercase,
  "fr-lower-c": cExamples.lowercase,
  "fr-d": dExamples.uppercase,
  "fr-lower-d": dExamples.lowercase,
  "fr-e": eExamples.uppercase,
  "fr-lower-e": eExamples.lowercase,
  "fr-f": fExamples.uppercase,
  "fr-lower-f": fExamples.lowercase,
  "fr-g": gExamples.uppercase,
  "fr-lower-g": gExamples.lowercase,
  "fr-h": hExamples.uppercase,
  "fr-lower-h": hExamples.lowercase,
  "fr-i": iExamples.uppercase,
  "fr-lower-i": iExamples.lowercase,
  "fr-j": jExamples.uppercase,
  "fr-lower-j": jExamples.lowercase,
  "fr-k": kExamples.uppercase,
  "fr-lower-k": kExamples.lowercase,
  "fr-l": lExamples.uppercase,
  "fr-lower-l": lExamples.lowercase,
  "fr-m": mExamples.uppercase,
  "fr-lower-m": mExamples.lowercase,
  "fr-n": nExamples.uppercase,
  "fr-lower-n": nExamples.lowercase,
  "fr-o": oExamples.uppercase,
  "fr-lower-o": oExamples.lowercase,
  "fr-p": pExamples.uppercase,
  "fr-lower-p": pExamples.lowercase,
  "fr-q": qExamples.uppercase,
  "fr-lower-q": qExamples.lowercase,
  "fr-r": rExamples.uppercase,
  "fr-lower-r": rExamples.lowercase,
  "fr-s": sExamples.uppercase,
  "fr-lower-s": sExamples.lowercase,
  "fr-t": tExamples.uppercase,
  "fr-lower-t": tExamples.lowercase,
  "fr-u": uExamples.uppercase,
  "fr-lower-u": uExamples.lowercase,
  "fr-v": vExamples.uppercase,
  "fr-lower-v": vExamples.lowercase,
  "fr-w": wExamples.uppercase,
  "fr-lower-w": wExamples.lowercase,
  "fr-x": xExamples.uppercase,
  "fr-lower-x": xExamples.lowercase,
  "fr-y": yExamples.uppercase,
  "fr-lower-y": yExamples.lowercase,
  "fr-z": zExamples.uppercase,
  "fr-lower-z": zExamples.lowercase,
  "fr-uppercase-a-grave": aGraveExamples.uppercase,
  "fr-lowercase-a-grave": aGraveExamples.lowercase,
  "fr-uppercase-a-circumflex": aCircumflexExamples.uppercase,
  "fr-lowercase-a-circumflex": aCircumflexExamples.lowercase,
  "fr-uppercase-c-cedilla": cCedillaExamples.uppercase,
  "fr-lowercase-c-cedilla": cCedillaExamples.lowercase,
  "fr-uppercase-e-acute": eAcuteExamples.uppercase,
  "fr-lowercase-e-acute": eAcuteExamples.lowercase,
  "fr-uppercase-e-grave": eGraveExamples.uppercase,
  "fr-lowercase-e-grave": eGraveExamples.lowercase,
  "fr-uppercase-e-circumflex": eCircumflexExamples.uppercase,
  "fr-lowercase-e-circumflex": eCircumflexExamples.lowercase,
  "fr-uppercase-e-diaeresis": eDiaeresisExamples.uppercase,
  "fr-lowercase-e-diaeresis": eDiaeresisExamples.lowercase,
  "fr-uppercase-i-circumflex": iCircumflexExamples.uppercase,
  "fr-lowercase-i-circumflex": iCircumflexExamples.lowercase,
  "fr-uppercase-i-diaeresis": iDiaeresisExamples.uppercase,
  "fr-lowercase-i-diaeresis": iDiaeresisExamples.lowercase,
  "fr-uppercase-o-circumflex": oCircumflexExamples.uppercase,
  "fr-lowercase-o-circumflex": oCircumflexExamples.lowercase,
  "fr-uppercase-u-grave": uGraveExamples.uppercase,
  "fr-lowercase-u-grave": uGraveExamples.lowercase,
  "fr-uppercase-u-circumflex": uCircumflexExamples.uppercase,
  "fr-lowercase-u-circumflex": uCircumflexExamples.lowercase,
  "fr-uppercase-u-diaeresis": uDiaeresisExamples.uppercase,
  "fr-lowercase-u-diaeresis": uDiaeresisExamples.lowercase,
  "fr-uppercase-oe-ligature": oeLigatureExamples.uppercase,
  "fr-lowercase-oe-ligature": oeLigatureExamples.lowercase,
};
