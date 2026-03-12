import { LanguagePack } from "@/types/writing";
import { koGiyeokTemplate } from "@/data/templates/ko/giyeok";
import { koNieunTemplate } from "@/data/templates/ko/nieun";
import { koDigeutTemplate } from "@/data/templates/ko/digeut";
import { koRieulTemplate } from "@/data/templates/ko/rieul";
import { koMieumTemplate } from "@/data/templates/ko/mieum";
import { koBieupTemplate } from "@/data/templates/ko/bieup";
import { koSiotTemplate } from "@/data/templates/ko/siot";
import { koIeungTemplate } from "@/data/templates/ko/ieung";
import { koJieutTemplate } from "@/data/templates/ko/jieut";
import { koChieutTemplate } from "@/data/templates/ko/chieut";

export const languagePacks: LanguagePack[] = [
  {
    id: "ko",
    label: {
      ko: "한국어",
      en: "Korean",
    },
    nativeLabel: "한국어",
    direction: "ltr",
    stage: "MVP",
    summary: {
      ko: "단어와 문장으로 확장 가능한 구조를 유지하면서 기본 자모부터 시작합니다.",
      en: "Start from foundational jamo while keeping the content model ready for words and sentences.",
    },
    templates: [
      koGiyeokTemplate,
      koNieunTemplate,
      koDigeutTemplate,
      koRieulTemplate,
      koMieumTemplate,
      koBieupTemplate,
      koSiotTemplate,
      koIeungTemplate,
      koJieutTemplate,
      koChieutTemplate,
      {
        id: "ko-a",
        languageId: "ko",
        mode: "character",
        label: {
          ko: "아",
          en: "A",
        },
        nativeLabel: "ㅏ",
        cue: {
          ko: "세로획을 먼저 쓴 다음 오른쪽 짧은 가로획을 붙여 마무리하세요.",
          en: "Draw the vertical stroke first, then add the short right bar.",
        },
        description: {
          ko: "획 순서 미리보기를 검증하기 위한 기본 모음 샘플입니다.",
          en: "Core vowel sample for stroke-order preview validation.",
        },
        direction: "ltr",
        guidePathD: "M42 22 L42 78 M42 50 H68",
        strokeGuides: [
          {
            id: "ko-a-1",
            pathD: "M42 22 L42 78",
            order: 1,
          },
          {
            id: "ko-a-2",
            pathD: "M42 50 H68",
            order: 2,
          },
        ],
        viewBox: [0, 0, 100, 100],
        gridLabel: {
          ko: "한글 연습 칸",
          en: "Hangul box",
        },
      },
    ],
  },
  {
    id: "en",
    label: {
      ko: "영어",
      en: "English",
    },
    nativeLabel: "English",
    direction: "ltr",
    stage: "Prototype",
    summary: {
      ko: "인터페이스와 저장 구조가 언어 비종속적으로 동작하는지 확인하기 위한 샘플 팩입니다.",
      en: "Included to validate that the interface and storage model are language-agnostic.",
    },
    templates: [
      {
        id: "en-a",
        languageId: "en",
        mode: "character",
        label: {
          ko: "대문자 A",
          en: "Uppercase A",
        },
        nativeLabel: "A",
        cue: {
          ko: "가운데 가로획을 넣기 전에 양쪽 대각선의 균형을 먼저 맞추세요.",
          en: "Balance both diagonal strokes before crossing the center bar.",
        },
        description: {
          ko: "다국어 레이아웃을 점검하기 위한 간단한 라틴 문자 샘플입니다.",
          en: "Simple Latin character for multi-language layout checks.",
        },
        direction: "ltr",
        guidePathD: "M24 78 L50 22 L76 78 M36 58 H64",
        strokeGuides: [
          {
            id: "en-a-1",
            pathD: "M24 78 L50 22",
            order: 1,
          },
          {
            id: "en-a-2",
            pathD: "M50 22 L76 78",
            order: 2,
          },
          {
            id: "en-a-3",
            pathD: "M36 58 H64",
            order: 3,
          },
        ],
        viewBox: [0, 0, 100, 100],
        gridLabel: {
          ko: "라틴 알파벳 칸",
          en: "Latin cell",
        },
      },
    ],
  },
  {
    id: "ja",
    label: {
      ko: "일본어",
      en: "Japanese",
    },
    nativeLabel: "日本語",
    direction: "ltr",
    stage: "Prototype",
    summary: {
      ko: "곡선이 많은 획으로 각진 한글 외의 가이드 렌더링 품질도 점검할 수 있습니다.",
      en: "Curved strokes help stress-test guide rendering beyond angular Hangul shapes.",
    },
    templates: [
      {
        id: "ja-a",
        languageId: "ja",
        mode: "character",
        label: {
          ko: "히라가나 아",
          en: "Hiragana A",
        },
        nativeLabel: "あ",
        cue: {
          ko: "안쪽 곡선을 과하게 조이지 말고 자연스럽게 이어가세요.",
          en: "Follow the curve without over-tightening the inner loop.",
        },
        description: {
          ko: "곡선 형태에 대한 프로토타입 채점기를 점검하기 위한 샘플입니다.",
          en: "Curved sample used to test the prototype scorer.",
        },
        direction: "ltr",
        guidePathD: "M28 36 C40 26, 58 26, 68 38 C76 48, 74 61, 63 70 C54 78, 40 79, 31 72 C23 66, 22 56, 27 48 C31 42, 40 38, 53 38 M52 22 V78 M41 52 H68",
        viewBox: [0, 0, 100, 100],
        gridLabel: {
          ko: "가나 연습 칸",
          en: "Kana cell",
        },
      },
    ],
  },
  {
    id: "ar",
    label: {
      ko: "아랍어",
      en: "Arabic",
    },
    nativeLabel: "العربية",
    direction: "rtl",
    stage: "Prototype",
    summary: {
      ko: "우→좌 언어를 초기에 포함해 레이아웃 결정이 좌→우에만 고정되지 않도록 합니다.",
      en: "RTL support is represented early so layout decisions do not get locked to LTR only.",
    },
    templates: [
      {
        id: "ar-ba",
        languageId: "ar",
        mode: "character",
        label: {
          ko: "바",
          en: "Ba",
        },
        nativeLabel: "ب",
        cue: {
          ko: "아랫부분 곡선을 낮게 유지하고 점은 충분히 떨어뜨려 두세요.",
          en: "Keep the bowl low and the dot clearly separated.",
        },
        description: {
          ko: "향후 방향성 지원을 초기에 드러내기 위한 우→좌 샘플입니다.",
          en: "Right-to-left sample that keeps future directionality visible in the prototype.",
        },
        direction: "rtl",
        guidePathD: "M78 55 C69 44, 57 39, 44 41 C32 43, 24 50, 24 60 C24 71, 34 78, 48 78 C60 78, 70 74, 79 67 M49 84 C51 88, 56 88, 58 84 C56 80, 51 80, 49 84",
        viewBox: [0, 0, 100, 100],
        gridLabel: {
          ko: "우→좌 가이드 칸",
          en: "RTL guide cell",
        },
      },
    ],
  },
];
