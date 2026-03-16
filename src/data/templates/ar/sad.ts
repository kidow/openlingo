import { WritingTemplate } from "@/types/writing";

export const arSadTemplate: WritingTemplate = {
  id: "ar-sad",
  languageId: "ar",
  mode: "character",
  label: { ko: "사드", en: "Sad" },
  nativeLabel: "ص",
  cue: {
    ko: "오른쪽에 둥근 고리를 그리고 왼쪽으로 꼬리를 빼세요.",
    en: "Draw a round loop on the right, then extend a tail to the left.",
  },
  description: {
    ko: "아랍어 문자 'ص' (Sad) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'ص' (Sad).",
  },
  direction: "rtl",
  guidePathD:
    "M78 50 C78 38, 68 32, 58 32 C48 32, 40 38, 40 50 C40 62, 48 68, 58 68 C68 68, 78 62, 78 50 M40 58 C32 66, 24 74, 20 78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
