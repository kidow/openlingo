export type JapaneseExampleWord = {
  word: string;
  reading: string;
  meaning: string;
};

const hiraganaExampleWordsByTemplateId: Record<string, JapaneseExampleWord[]> = {
  "ja-hiragana-a": [
    { word: "あい", reading: "아이", meaning: "사랑" },
    { word: "あさ", reading: "아사", meaning: "아침" },
    { word: "あめ", reading: "아메", meaning: "비" },
    { word: "あか", reading: "아카", meaning: "빨간색" },
    { word: "あお", reading: "아오", meaning: "파란색" },
  ],
  "ja-hiragana-i": [
    { word: "いぬ", reading: "이누", meaning: "개" },
    { word: "いえ", reading: "이에", meaning: "집" },
    { word: "いし", reading: "이시", meaning: "돌" },
    { word: "いす", reading: "이스", meaning: "의자" },
    { word: "いろ", reading: "이로", meaning: "색" },
  ],
  "ja-hiragana-u": [
    { word: "うみ", reading: "우미", meaning: "바다" },
    { word: "うた", reading: "우타", meaning: "노래" },
    { word: "うえ", reading: "우에", meaning: "위" },
    { word: "うし", reading: "우시", meaning: "소" },
    { word: "うま", reading: "우마", meaning: "말" },
  ],
  "ja-hiragana-e": [
    { word: "えき", reading: "에키", meaning: "역" },
    { word: "えだ", reading: "에다", meaning: "가지" },
    { word: "えんぴつ", reading: "엔피츠", meaning: "연필" },
    { word: "えほん", reading: "에혼", meaning: "그림책" },
    { word: "えがお", reading: "에가오", meaning: "웃는 얼굴" },
  ],
  "ja-hiragana-o": [
    { word: "おに", reading: "오니", meaning: "도깨비" },
    { word: "おかね", reading: "오카네", meaning: "돈" },
    { word: "おと", reading: "오토", meaning: "소리" },
    { word: "おちゃ", reading: "오챠", meaning: "차" },
    { word: "おさけ", reading: "오사케", meaning: "술" },
  ],
  "ja-hiragana-ka": [
    { word: "かさ", reading: "카사", meaning: "우산" },
    { word: "かみ", reading: "카미", meaning: "종이" },
    { word: "かぜ", reading: "카제", meaning: "바람" },
    { word: "かお", reading: "카오", meaning: "얼굴" },
    { word: "かぎ", reading: "카기", meaning: "열쇠" },
  ],
  "ja-hiragana-ki": [
    { word: "きつね", reading: "키츠네", meaning: "여우" },
    { word: "きく", reading: "키쿠", meaning: "국화" },
    { word: "きり", reading: "키리", meaning: "안개" },
    { word: "きもの", reading: "키모노", meaning: "기모노" },
    { word: "きもち", reading: "키모치", meaning: "기분" },
  ],
  "ja-hiragana-ku": [
    { word: "くも", reading: "쿠모", meaning: "구름" },
    { word: "くち", reading: "쿠치", meaning: "입" },
    { word: "くつ", reading: "쿠츠", meaning: "신발" },
    { word: "くるま", reading: "쿠루마", meaning: "차" },
    { word: "くま", reading: "쿠마", meaning: "곰" },
  ],
  "ja-hiragana-ke": [
    { word: "けしき", reading: "케시키", meaning: "풍경" },
    { word: "けむり", reading: "케무리", meaning: "연기" },
    { word: "けさ", reading: "케사", meaning: "아침" },
    { word: "けいと", reading: "케이토", meaning: "털실" },
    { word: "けん", reading: "켄", meaning: "펜, 권" },
  ],
  "ja-hiragana-ko": [
    { word: "こえ", reading: "코에", meaning: "목소리" },
    { word: "こども", reading: "코도모", meaning: "아이" },
    { word: "こま", reading: "코마", meaning: "팽이" },
    { word: "こめ", reading: "코메", meaning: "쌀" },
    { word: "こころ", reading: "코코로", meaning: "마음" },
  ],
  "ja-hiragana-sa": [
    { word: "さかな", reading: "사카나", meaning: "물고기" },
    { word: "さくら", reading: "사쿠라", meaning: "벚꽃" },
    { word: "さとう", reading: "사토우", meaning: "설탕" },
    { word: "さる", reading: "사루", meaning: "원숭이" },
    { word: "さんぽ", reading: "산포", meaning: "산책" },
  ],
  "ja-hiragana-shi": [
    { word: "しお", reading: "시오", meaning: "소금" },
    { word: "しろ", reading: "시로", meaning: "하얀색" },
    { word: "しま", reading: "시마", meaning: "섬" },
    { word: "しずか", reading: "시즈카", meaning: "조용한" },
    { word: "しゃしん", reading: "샤신", meaning: "사진" },
  ],
  "ja-hiragana-su": [
    { word: "すし", reading: "스시", meaning: "초밥" },
    { word: "すな", reading: "스나", meaning: "모래" },
    { word: "すいか", reading: "스이카", meaning: "수박" },
    { word: "すず", reading: "스즈", meaning: "방울" },
    { word: "すき", reading: "스키", meaning: "좋아함" },
  ],
  "ja-hiragana-se": [
    { word: "せんせい", reading: "센세이", meaning: "선생님" },
    { word: "せかい", reading: "세카이", meaning: "세계" },
    { word: "せいかつ", reading: "세이카츠", meaning: "생활" },
    { word: "せみ", reading: "세미", meaning: "매미" },
    { word: "せっけん", reading: "셋켄", meaning: "비누" },
  ],
  "ja-hiragana-so": [
    { word: "そら", reading: "소라", meaning: "하늘" },
    { word: "そと", reading: "소토", meaning: "밖" },
    { word: "そうじ", reading: "소우지", meaning: "청소" },
    { word: "そば", reading: "소바", meaning: "메밀국수" },
    { word: "そこ", reading: "소코", meaning: "거기" },
  ],
  "ja-hiragana-ta": [
    { word: "たね", reading: "타네", meaning: "씨앗" },
    { word: "たき", reading: "타키", meaning: "폭포" },
    { word: "たべもの", reading: "타베모노", meaning: "음식" },
    { word: "たいよう", reading: "타이요우", meaning: "태양" },
    { word: "たまご", reading: "타마고", meaning: "달걀" },
  ],
  "ja-hiragana-chi": [
    { word: "ちず", reading: "치즈", meaning: "지도" },
    { word: "ちかてつ", reading: "치카테츠", meaning: "지하철" },
    { word: "ちいさい", reading: "치이사이", meaning: "작은" },
    { word: "ちから", reading: "치카라", meaning: "힘" },
    { word: "ちょう", reading: "초우", meaning: "나비" },
  ],
  "ja-hiragana-tsu": [
    { word: "つき", reading: "츠키", meaning: "달" },
    { word: "つゆ", reading: "츠유", meaning: "장마" },
    { word: "つくえ", reading: "츠쿠에", meaning: "책상" },
    { word: "つの", reading: "츠노", meaning: "뿔" },
    { word: "つめ", reading: "츠메", meaning: "손톱" },
  ],
  "ja-hiragana-te": [
    { word: "てがみ", reading: "테가미", meaning: "편지" },
    { word: "て", reading: "테", meaning: "손" },
    { word: "てんき", reading: "텐키", meaning: "날씨" },
    { word: "てんし", reading: "텐시", meaning: "천사" },
    { word: "てんとうむし", reading: "텐토우무시", meaning: "무당벌레" },
  ],
  "ja-hiragana-to": [
    { word: "とり", reading: "토리", meaning: "새" },
    { word: "ともだち", reading: "토모다치", meaning: "친구" },
    { word: "とけい", reading: "토케이", meaning: "시계" },
    { word: "としょかん", reading: "토쇼칸", meaning: "도서관" },
    { word: "とまと", reading: "토마토", meaning: "토마토" },
  ],
  "ja-hiragana-na": [
    { word: "なつ", reading: "나츠", meaning: "여름" },
    { word: "なまえ", reading: "나마에", meaning: "이름" },
    { word: "ながい", reading: "나가이", meaning: "긴" },
    { word: "なか", reading: "나카", meaning: "안" },
    { word: "なみ", reading: "나미", meaning: "파도" },
  ],
  "ja-hiragana-ni": [
    { word: "にんじん", reading: "닌진", meaning: "당근" },
    { word: "にわ", reading: "니와", meaning: "정원" },
    { word: "にく", reading: "니쿠", meaning: "고기" },
    { word: "にほん", reading: "니혼", meaning: "일본" },
    { word: "にじ", reading: "니지", meaning: "무지개" },
  ],
  "ja-hiragana-nu": [
    { word: "ぬの", reading: "누노", meaning: "천" },
    { word: "ぬりえ", reading: "누리에", meaning: "색칠 그림" },
    { word: "ぬいぐるみ", reading: "누이구루미", meaning: "봉제 인형" },
    { word: "ぬま", reading: "누마", meaning: "늪" },
    { word: "ぬか", reading: "누카", meaning: "겨" },
  ],
  "ja-hiragana-ne": [
    { word: "ねこ", reading: "네코", meaning: "고양이" },
    { word: "ねむい", reading: "네무이", meaning: "졸린" },
    { word: "ねつ", reading: "네츠", meaning: "열" },
    { word: "ねがい", reading: "네가이", meaning: "소원" },
    { word: "ねずみ", reading: "네즈미", meaning: "쥐" },
  ],
  "ja-hiragana-no": [
    { word: "のり", reading: "노리", meaning: "김" },
    { word: "のう", reading: "노우", meaning: "뇌" },
    { word: "のはら", reading: "노하라", meaning: "들판" },
    { word: "のど", reading: "노도", meaning: "목" },
    { word: "のこぎり", reading: "노코기리", meaning: "톱" },
  ],
  "ja-hiragana-ha": [
    { word: "はな", reading: "하나", meaning: "꽃" },
    { word: "はし", reading: "하시", meaning: "다리" },
    { word: "はる", reading: "하루", meaning: "봄" },
    { word: "はし", reading: "하시", meaning: "젓가락" },
    { word: "はこ", reading: "하코", meaning: "상자" },
  ],
  "ja-hiragana-hi": [
    { word: "ひと", reading: "히토", meaning: "사람" },
    { word: "ひかり", reading: "히카리", meaning: "빛" },
    { word: "ひる", reading: "히루", meaning: "낮" },
    { word: "ひこうき", reading: "히코우키", meaning: "비행기" },
    { word: "ひまわり", reading: "히마와리", meaning: "해바라기" },
  ],
  "ja-hiragana-fu": [
    { word: "ふね", reading: "후네", meaning: "배" },
    { word: "ふゆ", reading: "후유", meaning: "겨울" },
    { word: "ふく", reading: "후쿠", meaning: "옷" },
    { word: "ふうせん", reading: "후우센", meaning: "풍선" },
    { word: "ふとん", reading: "후톤", meaning: "이불" },
  ],
  "ja-hiragana-he": [
    { word: "へや", reading: "헤야", meaning: "방" },
    { word: "へいわ", reading: "헤이와", meaning: "평화" },
    { word: "へび", reading: "헤비", meaning: "뱀" },
    { word: "へんしん", reading: "헨신", meaning: "변신" },
    { word: "へいき", reading: "헤이키", meaning: "괜찮음" },
  ],
  "ja-hiragana-ho": [
    { word: "ほん", reading: "혼", meaning: "책" },
    { word: "ほし", reading: "호시", meaning: "별" },
    { word: "ほね", reading: "호네", meaning: "뼈" },
    { word: "ほうき", reading: "호우키", meaning: "빗자루" },
    { word: "ほたる", reading: "호타루", meaning: "반딧불이" },
  ],
  "ja-hiragana-ma": [
    { word: "まど", reading: "마도", meaning: "창문" },
    { word: "まち", reading: "마치", meaning: "거리" },
    { word: "まえ", reading: "마에", meaning: "앞" },
    { word: "まめ", reading: "마메", meaning: "콩" },
    { word: "まる", reading: "마루", meaning: "둥근 것" },
  ],
  "ja-hiragana-mi": [
    { word: "みみ", reading: "미미", meaning: "귀" },
    { word: "みず", reading: "미즈", meaning: "물" },
    { word: "みち", reading: "미치", meaning: "길" },
    { word: "みかん", reading: "미칸", meaning: "귤" },
    { word: "みどり", reading: "미도리", meaning: "초록색" },
  ],
  "ja-hiragana-mu": [
    { word: "むし", reading: "무시", meaning: "벌레" },
    { word: "むら", reading: "무라", meaning: "마을" },
    { word: "むぎ", reading: "무기", meaning: "보리" },
    { word: "むね", reading: "무네", meaning: "가슴" },
    { word: "むかし", reading: "무카시", meaning: "옛날" },
  ],
  "ja-hiragana-me": [
    { word: "め", reading: "메", meaning: "눈" },
    { word: "めがね", reading: "메가네", meaning: "안경" },
    { word: "めだま", reading: "메다마", meaning: "눈알" },
    { word: "めざまし", reading: "메자마시", meaning: "알람" },
    { word: "めいろ", reading: "메이로", meaning: "미로" },
  ],
  "ja-hiragana-mo": [
    { word: "もり", reading: "모리", meaning: "숲" },
    { word: "もも", reading: "모모", meaning: "복숭아" },
    { word: "もの", reading: "모노", meaning: "물건" },
    { word: "もん", reading: "몬", meaning: "문" },
    { word: "もうふ", reading: "모우후", meaning: "담요" },
  ],
  "ja-hiragana-ya": [
    { word: "やま", reading: "야마", meaning: "산" },
    { word: "やね", reading: "야네", meaning: "지붕" },
    { word: "やさい", reading: "야사이", meaning: "채소" },
    { word: "やくそく", reading: "야쿠소쿠", meaning: "약속" },
    { word: "やすい", reading: "야스이", meaning: "싼" },
  ],
  "ja-hiragana-yu": [
    { word: "ゆき", reading: "유키", meaning: "눈" },
    { word: "ゆび", reading: "유비", meaning: "손가락" },
    { word: "ゆめ", reading: "유메", meaning: "꿈" },
    { word: "ゆうびん", reading: "유우빈", meaning: "우편" },
    { word: "ゆれ", reading: "유레", meaning: "흔들림" },
  ],
  "ja-hiragana-yo": [
    { word: "よる", reading: "요루", meaning: "밤" },
    { word: "ようび", reading: "요우비", meaning: "요일" },
    { word: "よこ", reading: "요코", meaning: "옆" },
    { word: "よてい", reading: "요테이", meaning: "예정" },
    { word: "よるごはん", reading: "요루고한", meaning: "저녁밥" },
  ],
  "ja-hiragana-ra": [
    { word: "らいおん", reading: "라이온", meaning: "사자" },
    { word: "らく", reading: "라쿠", meaning: "편안함" },
    { word: "らん", reading: "란", meaning: "난초" },
    { word: "らっぱ", reading: "랏파", meaning: "나팔" },
    { word: "らいげつ", reading: "라이게츠", meaning: "다음 달" },
  ],
  "ja-hiragana-ri": [
    { word: "りんご", reading: "링고", meaning: "사과" },
    { word: "りす", reading: "리스", meaning: "다람쥐" },
    { word: "りょこう", reading: "료코우", meaning: "여행" },
    { word: "りゆう", reading: "리유우", meaning: "이유" },
    { word: "りっぱ", reading: "릿파", meaning: "훌륭한" },
  ],
  "ja-hiragana-ru": [
    { word: "るす", reading: "루스", meaning: "부재중" },
    { word: "るい", reading: "루이", meaning: "종류" },
    { word: "るびー", reading: "루비이", meaning: "루비" },
    { word: "るーる", reading: "루루", meaning: "규칙" },
    { word: "るすばん", reading: "루스반", meaning: "집 지킴" },
  ],
  "ja-hiragana-re": [
    { word: "れもん", reading: "레몬", meaning: "레몬" },
    { word: "れきし", reading: "레키시", meaning: "역사" },
    { word: "れんしゅう", reading: "렌슈우", meaning: "연습" },
    { word: "れいぞうこ", reading: "레이조우코", meaning: "냉장고" },
    { word: "れつ", reading: "레츠", meaning: "열" },
  ],
  "ja-hiragana-ro": [
    { word: "ろうそく", reading: "로우소쿠", meaning: "양초" },
    { word: "ろく", reading: "로쿠", meaning: "여섯" },
    { word: "ろじ", reading: "로지", meaning: "골목" },
    { word: "ろうか", reading: "로우카", meaning: "복도" },
    { word: "ろっく", reading: "롯쿠", meaning: "잠금" },
  ],
  "ja-hiragana-wa": [
    { word: "わたし", reading: "와타시", meaning: "나" },
    { word: "わかる", reading: "와카루", meaning: "알다" },
    { word: "わたあめ", reading: "와타아메", meaning: "솜사탕" },
    { word: "わらう", reading: "와라우", meaning: "웃다" },
    { word: "わん", reading: "완", meaning: "강아지 소리" },
  ],
  "ja-hiragana-n": [
    { word: "ん", reading: "응", meaning: "받침음" },
    { word: "あん", reading: "안", meaning: "팥소" },
    { word: "ごはん", reading: "고한", meaning: "밥" },
    { word: "みんな", reading: "민나", meaning: "모두" },
    { word: "ほん", reading: "혼", meaning: "책" },
  ],
};

function hiraganaToKatakana(text: string) {
  return Array.from(text)
    .map((character) => {
      const codePoint = character.codePointAt(0);

      if (!codePoint || codePoint < 0x3041 || codePoint > 0x3096) {
        return character;
      }

      return String.fromCodePoint(codePoint + 0x60);
    })
    .join("");
}

const katakanaExampleWordsByTemplateId: Record<string, JapaneseExampleWord[]> = Object.fromEntries(
  Object.entries(hiraganaExampleWordsByTemplateId).map(([templateId, words]) => [
    templateId.replace("ja-hiragana-", "ja-katakana-"),
    words.map((item) => ({
      ...item,
      word: hiraganaToKatakana(item.word),
    })),
  ])
);

export const japaneseExampleWordsByTemplateId: Record<string, JapaneseExampleWord[]> = {
  ...hiraganaExampleWordsByTemplateId,
  ...katakanaExampleWordsByTemplateId,
};
