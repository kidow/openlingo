import { WritingTemplate } from "@/types/writing";

export const arKafTemplate: WritingTemplate = {
  id: "ar-kaf",
  languageId: "ar",
  mode: "character",
  label: { ko: "카프", en: "Kaf" },
  nativeLabel: "ك",
  cue: {
    ko: "오른쪽 세로획에서 시작해 아래로 넓게 펼친 뒤 안쪽에 작은 표시를 추가하세요.",
    en: "Start with the right vertical, spread the base wide, then add the small inner mark.",
  },
  description: {
    ko: "아랍어 문자 'ك' (Kaf) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'ك' (Kaf).",
  },
  direction: "rtl",
  guidePathD:
    "M72 26 L72 70 C72 78, 64 82, 52 82 C40 82, 28 78, 28 70 M56 52 C52 48, 48 52, 52 56",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
