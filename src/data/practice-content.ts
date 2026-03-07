import { LanguagePack } from "@/types/writing";

export const languagePacks: LanguagePack[] = [
  {
    id: "ko",
    label: "Korean",
    nativeLabel: "한국어",
    direction: "ltr",
    stage: "MVP",
    summary: "Start from foundational jamo while keeping the content model ready for words and sentences.",
    templates: [
      {
        id: "ko-giyeok",
        languageId: "ko",
        mode: "character",
        label: "Giyeok",
        nativeLabel: "ㄱ",
        cue: "Square corner with a steady downstroke.",
        description: "Prototype starter for the Korean MVP set.",
        direction: "ltr",
        guidePathD: "M30 24 L30 76 L72 76",
        viewBox: [0, 0, 100, 100],
        gridLabel: "Hangul box",
      },
      {
        id: "ko-nieun",
        languageId: "ko",
        mode: "character",
        label: "Nieun",
        nativeLabel: "ㄴ",
        cue: "Keep the base wide and the vertical stroke firm.",
        description: "A second Hangul shape to test template switching.",
        direction: "ltr",
        guidePathD: "M30 24 L30 76 L70 76",
        viewBox: [0, 0, 100, 100],
        gridLabel: "Hangul box",
      }
    ],
  },
  {
    id: "en",
    label: "English",
    nativeLabel: "English",
    direction: "ltr",
    stage: "Prototype",
    summary: "Included to validate that the interface and storage model are language-agnostic.",
    templates: [
      {
        id: "en-a",
        languageId: "en",
        mode: "character",
        label: "Uppercase A",
        nativeLabel: "A",
        cue: "Balance both diagonal strokes before crossing the center bar.",
        description: "Simple Latin character for multi-language layout checks.",
        direction: "ltr",
        guidePathD: "M24 78 L50 22 L76 78 M36 58 H64",
        viewBox: [0, 0, 100, 100],
        gridLabel: "Latin cell",
      }
    ],
  },
  {
    id: "ja",
    label: "Japanese",
    nativeLabel: "日本語",
    direction: "ltr",
    stage: "Prototype",
    summary: "Curved strokes help stress-test guide rendering beyond angular Hangul shapes.",
    templates: [
      {
        id: "ja-a",
        languageId: "ja",
        mode: "character",
        label: "Hiragana A",
        nativeLabel: "あ",
        cue: "Follow the curve without over-tightening the inner loop.",
        description: "Curved sample used to test the prototype scorer.",
        direction: "ltr",
        guidePathD: "M28 36 C40 26, 58 26, 68 38 C76 48, 74 61, 63 70 C54 78, 40 79, 31 72 C23 66, 22 56, 27 48 C31 42, 40 38, 53 38 M52 22 V78 M41 52 H68",
        viewBox: [0, 0, 100, 100],
        gridLabel: "Kana cell",
      }
    ],
  },
  {
    id: "ar",
    label: "Arabic",
    nativeLabel: "العربية",
    direction: "rtl",
    stage: "Prototype",
    summary: "RTL support is represented early so layout decisions do not get locked to LTR only.",
    templates: [
      {
        id: "ar-ba",
        languageId: "ar",
        mode: "character",
        label: "Ba",
        nativeLabel: "ب",
        cue: "Keep the bowl low and the dot clearly separated.",
        description: "Right-to-left sample that keeps future directionality visible in the prototype.",
        direction: "rtl",
        guidePathD: "M78 55 C69 44, 57 39, 44 41 C32 43, 24 50, 24 60 C24 71, 34 78, 48 78 C60 78, 70 74, 79 67 M49 84 C51 88, 56 88, 58 84 C56 80, 51 80, 49 84",
        viewBox: [0, 0, 100, 100],
        gridLabel: "RTL guide cell",
      }
    ],
  }
];

