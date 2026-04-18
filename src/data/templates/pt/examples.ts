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
    ...createExampleMap(`pt-${letter}`, examples.uppercase),
    ...createExampleMap(`pt-lower-${letter}`, examples.lowercase),
  };
}

const aExamples = createCaseExamples([
  { word: "amigo", reading: "아미고", meaning: "친구" },
  { word: "abelha", reading: "아벨야", meaning: "벌" },
  { word: "areia", reading: "아레이아", meaning: "모래" },
  { word: "anel", reading: "아넬", meaning: "반지" },
  { word: "abraço", reading: "아브라수", meaning: "포옹" },
]);

const bExamples = createCaseExamples([
  { word: "barco", reading: "바르코", meaning: "배" },
  { word: "bola", reading: "보라", meaning: "공" },
  { word: "boca", reading: "보카", meaning: "입" },
  { word: "banana", reading: "바나나", meaning: "바나나" },
  { word: "borboleta", reading: "보르보레타", meaning: "나비" },
]);

const cExamples = createCaseExamples([
  { word: "casa", reading: "카자", meaning: "집" },
  { word: "carro", reading: "카호", meaning: "자동차" },
  { word: "caderno", reading: "카데르누", meaning: "공책" },
  { word: "cavalo", reading: "카발루", meaning: "말" },
  { word: "chave", reading: "샤베", meaning: "열쇠" },
]);

const dExamples = createCaseExamples([
  { word: "dado", reading: "다두", meaning: "주사위" },
  { word: "dedo", reading: "데두", meaning: "손가락" },
  { word: "dia", reading: "지아", meaning: "날" },
  { word: "doce", reading: "도세", meaning: "달콤한" },
  { word: "depois", reading: "데포이스", meaning: "나중에" },
]);

const eExamples = createCaseExamples([
  { word: "elefante", reading: "엘레판치", meaning: "코끼리" },
  { word: "escola", reading: "이스코라", meaning: "학교" },
  { word: "estrela", reading: "에스트렐라", meaning: "별" },
  { word: "energia", reading: "에네르지아", meaning: "에너지" },
  { word: "entrada", reading: "엔트라다", meaning: "입구" },
]);

const fExamples = createCaseExamples([
  { word: "família", reading: "파밀리아", meaning: "가족" },
  { word: "fogo", reading: "포구", meaning: "불" },
  { word: "fruta", reading: "프루타", meaning: "과일" },
  { word: "flor", reading: "플로르", meaning: "꽃" },
  { word: "festa", reading: "페스타", meaning: "축제" },
]);

const gExamples = createCaseExamples([
  { word: "gato", reading: "가투", meaning: "고양이" },
  { word: "gorro", reading: "고호", meaning: "모자" },
  { word: "galinha", reading: "가리냐", meaning: "닭" },
  { word: "garoto", reading: "가로투", meaning: "소년" },
  { word: "girafa", reading: "지라파", meaning: "기린" },
]);

const hExamples = createCaseExamples([
  { word: "hotel", reading: "오텔", meaning: "호텔" },
  { word: "humano", reading: "우마누", meaning: "인간의" },
  { word: "hino", reading: "이누", meaning: "찬가" },
  { word: "horta", reading: "오르타", meaning: "채소밭" },
  { word: "horário", reading: "오라리우", meaning: "시간표" },
]);

const iExamples = createCaseExamples([
  { word: "ilha", reading: "일랴", meaning: "섬" },
  { word: "imagem", reading: "이마징", meaning: "이미지" },
  { word: "igual", reading: "이구아우", meaning: "같은" },
  { word: "igreja", reading: "이그레이자", meaning: "교회" },
  { word: "inverno", reading: "인베르누", meaning: "겨울" },
]);

const jExamples = createCaseExamples([
  { word: "janela", reading: "자넬라", meaning: "창문" },
  { word: "jardim", reading: "자르징", meaning: "정원" },
  { word: "jantar", reading: "잔타르", meaning: "저녁식사" },
  { word: "jornal", reading: "조르나우", meaning: "신문" },
  { word: "jovem", reading: "조벵", meaning: "젊은" },
]);

const kExamples = createCaseExamples([
  { word: "kiwi", reading: "키위", meaning: "키위" },
  { word: "kilo", reading: "킬루", meaning: "킬로" },
  { word: "ketchup", reading: "케쳅", meaning: "케첩" },
  { word: "karaokê", reading: "카라오케", meaning: "노래방" },
  { word: "kitesurf", reading: "키트서프", meaning: "카이트서핑" },
]);

const lExamples = createCaseExamples([
  { word: "livro", reading: "리브루", meaning: "책" },
  { word: "leite", reading: "레이치", meaning: "우유" },
  { word: "lua", reading: "루아", meaning: "달" },
  { word: "laranja", reading: "라란자", meaning: "오렌지" },
  { word: "lago", reading: "라구", meaning: "호수" },
]);

const mExamples = createCaseExamples([
  { word: "mesa", reading: "메자", meaning: "탁자" },
  { word: "menino", reading: "메니누", meaning: "소년" },
  { word: "mundo", reading: "문두", meaning: "세계" },
  { word: "mala", reading: "말라", meaning: "가방" },
  { word: "morango", reading: "모랑구", meaning: "딸기" },
]);

const nExamples = createCaseExamples([
  { word: "nariz", reading: "나리스", meaning: "코" },
  { word: "noite", reading: "노이치", meaning: "밤" },
  { word: "nuvem", reading: "누벵", meaning: "구름" },
  { word: "navio", reading: "나비우", meaning: "배" },
  { word: "nota", reading: "노타", meaning: "메모" },
]);

const oExamples = createCaseExamples([
  { word: "ovo", reading: "오부", meaning: "달걀" },
  { word: "olho", reading: "올유", meaning: "눈" },
  { word: "ouro", reading: "오루", meaning: "금" },
  { word: "onda", reading: "온다", meaning: "파도" },
  { word: "ombro", reading: "옴브루", meaning: "어깨" },
]);

const pExamples = createCaseExamples([
  { word: "pato", reading: "파투", meaning: "오리" },
  { word: "porta", reading: "포르타", meaning: "문" },
  { word: "peixe", reading: "페이셰", meaning: "물고기" },
  { word: "piano", reading: "피아누", meaning: "피아노" },
  { word: "pedra", reading: "페드라", meaning: "돌" },
]);

const qExamples = createCaseExamples([
  { word: "queijo", reading: "케이주", meaning: "치즈" },
  { word: "quarto", reading: "콰르투", meaning: "방" },
  { word: "quente", reading: "켄치", meaning: "뜨거운" },
  { word: "quieto", reading: "키에투", meaning: "조용한" },
  { word: "querer", reading: "케레르", meaning: "원하다" },
]);

const rExamples = createCaseExamples([
  { word: "rato", reading: "하투", meaning: "쥐" },
  { word: "rua", reading: "후아", meaning: "거리" },
  { word: "rosa", reading: "호자", meaning: "장미" },
  { word: "relógio", reading: "헤로지우", meaning: "시계" },
  { word: "raiz", reading: "하이스", meaning: "뿌리" },
]);

const sExamples = createCaseExamples([
  { word: "sapo", reading: "사푸", meaning: "개구리" },
  { word: "sol", reading: "솔", meaning: "태양" },
  { word: "sopa", reading: "소파", meaning: "수프" },
  { word: "sorriso", reading: "소히수", meaning: "웃음" },
  { word: "sapato", reading: "사파투", meaning: "신발" },
]);

const tExamples = createCaseExamples([
  { word: "teto", reading: "테투", meaning: "천장" },
  { word: "tampa", reading: "탐파", meaning: "뚜껑" },
  { word: "tigre", reading: "치그레", meaning: "호랑이" },
  { word: "tomate", reading: "토마치", meaning: "토마토" },
  { word: "trem", reading: "트렝", meaning: "기차" },
]);

const uExamples = createCaseExamples([
  { word: "uva", reading: "우바", meaning: "포도" },
  { word: "urso", reading: "우르수", meaning: "곰" },
  { word: "universo", reading: "우니베르수", meaning: "우주" },
  { word: "unidade", reading: "우니다지", meaning: "단위" },
  { word: "uso", reading: "우수", meaning: "사용" },
]);

const vExamples = createCaseExamples([
  { word: "vaca", reading: "바카", meaning: "소" },
  { word: "vela", reading: "벨라", meaning: "초" },
  { word: "vento", reading: "벤투", meaning: "바람" },
  { word: "vidro", reading: "비드루", meaning: "유리" },
  { word: "viagem", reading: "비아젱", meaning: "여행" },
]);

const wExamples = createCaseExamples([
  { word: "web", reading: "웹", meaning: "웹" },
  { word: "watt", reading: "와트", meaning: "와트" },
  { word: "whisky", reading: "위스키", meaning: "위스키" },
  { word: "windsurf", reading: "윈드서프", meaning: "윈드서핑" },
  { word: "western", reading: "웨스턴", meaning: "서부극" },
]);

const xExamples = createCaseExamples([
  { word: "xadrez", reading: "샤드레즈", meaning: "체스" },
  { word: "xarope", reading: "사로피", meaning: "시럽" },
  { word: "xilofone", reading: "실로포니", meaning: "실로폰" },
  { word: "táxi", reading: "타시", meaning: "택시" },
  { word: "exame", reading: "이자미", meaning: "시험" },
]);

const yExamples = createCaseExamples([
  { word: "yoga", reading: "요가", meaning: "요가" },
  { word: "yeti", reading: "예치", meaning: "설인" },
  { word: "yak", reading: "약", meaning: "야크" },
  { word: "yogurte", reading: "요구르치", meaning: "요거트" },
  { word: "youtube", reading: "유튜브", meaning: "유튜브" },
]);

const zExamples = createCaseExamples([
  { word: "zebra", reading: "제브라", meaning: "얼룩말" },
  { word: "zero", reading: "제루", meaning: "영" },
  { word: "zíper", reading: "지페르", meaning: "지퍼" },
  { word: "zona", reading: "조나", meaning: "구역" },
  { word: "zumbido", reading: "줌비두", meaning: "윙윙거림" },
]);

const aGraveExamples = createCaseExamples([
  { word: "à noite", reading: "아 노이치", meaning: "밤에" },
  { word: "à mesa", reading: "아 메자", meaning: "탁자에서" },
  { word: "à porta", reading: "아 포르타", meaning: "문가에" },
  { word: "à direita", reading: "아 지레이터", meaning: "오른쪽에" },
  { word: "à vontade", reading: "아 봉타지", meaning: "마음껏" },
]);

const aAcuteExamples = createCaseExamples([
  { word: "água", reading: "아과", meaning: "물" },
  { word: "águia", reading: "아기아", meaning: "독수리" },
  { word: "ácido", reading: "아시두", meaning: "산성의" },
  { word: "máximo", reading: "마시무", meaning: "최대의" },
  { word: "rápido", reading: "하피두", meaning: "빠른" },
]);

const aCircumflexExamples = createCaseExamples([
  { word: "âncora", reading: "앙코라", meaning: "닻" },
  { word: "câmara", reading: "카마라", meaning: "방" },
  { word: "ânimo", reading: "아니무", meaning: "기분" },
  { word: "ângulo", reading: "앙굴루", meaning: "각도" },
  { word: "âmbar", reading: "앙바르", meaning: "호박" },
]);

const aTildeExamples = createCaseExamples([
  { word: "mão", reading: "망", meaning: "손" },
  { word: "irmã", reading: "이르망", meaning: "자매" },
  { word: "coração", reading: "코라상", meaning: "심장" },
  { word: "pão", reading: "파웅", meaning: "빵" },
  { word: "amanhã", reading: "아마냔", meaning: "내일" },
]);

const cCedillaExamples = createCaseExamples([
  { word: "açaí", reading: "아사이", meaning: "아사이" },
  { word: "caça", reading: "카사", meaning: "사냥" },
  { word: "cabeça", reading: "카베사", meaning: "머리" },
  { word: "coração", reading: "코라상", meaning: "심장" },
  { word: "lição", reading: "리상", meaning: "수업" },
]);

const eAcuteExamples = createCaseExamples([
  { word: "café", reading: "카페", meaning: "커피" },
  { word: "pé", reading: "페", meaning: "발" },
  { word: "até", reading: "아테", meaning: "~까지" },
  { word: "bebé", reading: "베베", meaning: "아기" },
  { word: "sé", reading: "세", meaning: "주교좌성당" },
]);

const eCircumflexExamples = createCaseExamples([
  { word: "você", reading: "보세", meaning: "당신" },
  { word: "bebê", reading: "베베", meaning: "아기" },
  { word: "mês", reading: "메스", meaning: "달" },
  { word: "pêssego", reading: "페세구", meaning: "복숭아" },
  { word: "vê", reading: "베", meaning: "보다" },
]);

const iAcuteExamples = createCaseExamples([
  { word: "saída", reading: "사이다", meaning: "출구" },
  { word: "país", reading: "파이스", meaning: "나라" },
  { word: "índice", reading: "인지세", meaning: "지수" },
  { word: "ícone", reading: "이코네", meaning: "아이콘" },
  { word: "lírio", reading: "리리우", meaning: "백합" },
]);

const oAcuteExamples = createCaseExamples([
  { word: "avó", reading: "아보", meaning: "할머니" },
  { word: "só", reading: "소", meaning: "혼자" },
  { word: "óculos", reading: "오쿨루스", meaning: "안경" },
  { word: "pó", reading: "포", meaning: "먼지" },
  { word: "próximo", reading: "프로시무", meaning: "다음의" },
]);

const oCircumflexExamples = createCaseExamples([
  { word: "avô", reading: "아보", meaning: "할아버지" },
  { word: "pôr", reading: "포르", meaning: "놓다" },
  { word: "fôlego", reading: "폴레구", meaning: "호흡" },
  { word: "cômodo", reading: "코모두", meaning: "편안한" },
  { word: "vôlei", reading: "볼레이", meaning: "배구" },
]);

const oTildeExamples = createCaseExamples([
  { word: "põe", reading: "퐁", meaning: "놓다" },
  { word: "põem", reading: "퐁", meaning: "놓는다" },
  { word: "compõe", reading: "콩포이", meaning: "구성하다" },
  { word: "dispõe", reading: "지스퐁", meaning: "배치하다" },
  { word: "supõe", reading: "수퐁", meaning: "가정하다" },
]);

const uAcuteExamples = createCaseExamples([
  { word: "útil", reading: "우칠", meaning: "유용한" },
  { word: "saúde", reading: "사우지", meaning: "건강" },
  { word: "júri", reading: "주리", meaning: "배심원단" },
  { word: "público", reading: "풀리쿠", meaning: "대중" },
  { word: "cúmulo", reading: "쿠물루", meaning: "최고점" },
]);

export const portugueseExampleWordsByTemplateId: Record<string, ExampleWord[]> = {
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
  ...createExampleMap("pt-uppercase-a-grave", aGraveExamples.uppercase),
  ...createExampleMap("pt-lowercase-a-grave", aGraveExamples.lowercase),
  ...createExampleMap("pt-uppercase-a-acute", aAcuteExamples.uppercase),
  ...createExampleMap("pt-lowercase-a-acute", aAcuteExamples.lowercase),
  ...createExampleMap("pt-uppercase-a-circumflex", aCircumflexExamples.uppercase),
  ...createExampleMap("pt-lowercase-a-circumflex", aCircumflexExamples.lowercase),
  ...createExampleMap("pt-uppercase-a-tilde", aTildeExamples.uppercase),
  ...createExampleMap("pt-lowercase-a-tilde", aTildeExamples.lowercase),
  ...createExampleMap("pt-uppercase-c-cedilla", cCedillaExamples.uppercase),
  ...createExampleMap("pt-lowercase-c-cedilla", cCedillaExamples.lowercase),
  ...createExampleMap("pt-uppercase-e-acute", eAcuteExamples.uppercase),
  ...createExampleMap("pt-lowercase-e-acute", eAcuteExamples.lowercase),
  ...createExampleMap("pt-uppercase-e-circumflex", eCircumflexExamples.uppercase),
  ...createExampleMap("pt-lowercase-e-circumflex", eCircumflexExamples.lowercase),
  ...createExampleMap("pt-uppercase-i-acute", iAcuteExamples.uppercase),
  ...createExampleMap("pt-lowercase-i-acute", iAcuteExamples.lowercase),
  ...createExampleMap("pt-uppercase-o-acute", oAcuteExamples.uppercase),
  ...createExampleMap("pt-lowercase-o-acute", oAcuteExamples.lowercase),
  ...createExampleMap("pt-uppercase-o-circumflex", oCircumflexExamples.uppercase),
  ...createExampleMap("pt-lowercase-o-circumflex", oCircumflexExamples.lowercase),
  ...createExampleMap("pt-uppercase-o-tilde", oTildeExamples.uppercase),
  ...createExampleMap("pt-lowercase-o-tilde", oTildeExamples.lowercase),
  ...createExampleMap("pt-uppercase-u-acute", uAcuteExamples.uppercase),
  ...createExampleMap("pt-lowercase-u-acute", uAcuteExamples.lowercase),
};
