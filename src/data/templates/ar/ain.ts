import { WritingTemplate } from "@/types/writing";

export const arAinTemplate: WritingTemplate = {
  id: "ar-ain",
  languageId: "ar",
  mode: "character",
  label: { ko: "아인", en: "Ain" },
  nativeLabel: "ع",
  cue: {
    ko: "눈 모양의 고리를 그리고 아래로 꼬리를 빼세요.",
    en: "Draw an eye-shaped loop, then extend a tail downward.",
  },
  description: {
    ko: "아랍어 문자 'ع' (Ain) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'ع' (Ain).",
  },
  direction: "rtl",
  guidePathD:
    "M66 30 C58 24, 46 28, 44 38 C42 48, 48 54, 56 54 C56 62, 48 72, 38 76 C30 80, 24 82, 22 82",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
