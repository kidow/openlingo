import { WritingTemplate } from "@/types/writing";

type SegmentId =
  | "top"
  | "mid"
  | "bottom"
  | "left"
  | "right"
  | "center"
  | "leftUpper"
  | "leftLower"
  | "rightUpper"
  | "rightLower"
  | "diagDesc"
  | "diagAsc"
  | "diagTopLeftToCenter"
  | "diagTopRightToCenter"
  | "diagBottomLeftToCenter"
  | "diagBottomRightToCenter"
  | "diagMidToTopRight"
  | "diagMidToBottomRight"
  | "diagMidToBottomLeft"
  | "tail";

const SEGMENT_PATHS: Record<SegmentId, string> = {
  top: "M24 20 H76",
  mid: "M24 50 H76",
  bottom: "M24 80 H76",
  left: "M24 20 V80",
  right: "M76 20 V80",
  center: "M50 20 V80",
  leftUpper: "M24 20 V50",
  leftLower: "M24 50 V80",
  rightUpper: "M76 20 V50",
  rightLower: "M76 50 V80",
  diagDesc: "M24 20 L76 80",
  diagAsc: "M24 80 L76 20",
  diagTopLeftToCenter: "M24 20 L50 50",
  diagTopRightToCenter: "M76 20 L50 50",
  diagBottomLeftToCenter: "M24 80 L50 50",
  diagBottomRightToCenter: "M76 80 L50 50",
  diagMidToTopRight: "M24 50 L76 20",
  diagMidToBottomRight: "M24 50 L76 80",
  diagMidToBottomLeft: "M76 50 L24 80",
  tail: "M52 54 L82 84",
};

const LETTER_SEGMENTS: Record<string, SegmentId[]> = {
  A: ["left", "right", "top", "mid"],
  B: ["left", "top", "mid", "bottom", "rightUpper", "rightLower"],
  C: ["top", "bottom", "left"],
  D: ["left", "top", "bottom", "right"],
  E: ["left", "top", "mid", "bottom"],
  F: ["left", "top", "mid"],
  G: ["top", "left", "bottom", "rightLower", "mid"],
  H: ["left", "right", "mid"],
  I: ["top", "center", "bottom"],
  J: ["top", "right", "bottom", "leftLower"],
  K: ["left", "diagMidToTopRight", "diagMidToBottomRight"],
  L: ["left", "bottom"],
  M: ["left", "right", "diagTopLeftToCenter", "diagTopRightToCenter"],
  N: ["left", "right", "diagDesc"],
  O: ["top", "bottom", "left", "right"],
  P: ["left", "top", "mid", "rightUpper"],
  Q: ["top", "bottom", "left", "right", "tail"],
  R: ["left", "top", "mid", "rightUpper", "diagMidToBottomRight"],
  S: ["top", "mid", "bottom", "leftUpper", "rightLower"],
  T: ["top", "center"],
  U: ["left", "right", "bottom"],
  V: ["diagTopLeftToCenter", "diagTopRightToCenter", "center"],
  W: ["left", "right", "diagBottomLeftToCenter", "diagBottomRightToCenter"],
  X: ["diagDesc", "diagAsc"],
  Y: ["diagTopLeftToCenter", "diagTopRightToCenter", "center"],
  Z: ["top", "diagAsc", "bottom"],
};

function createPortugueseLatinTemplates(caseStyle: "uppercase" | "lowercase"): WritingTemplate[] {
  const portugueseUppercaseLetters = Object.keys(LETTER_SEGMENTS);

  return portugueseUppercaseLetters.map((letter) => {
    const lowercaseLetter = letter.toLowerCase();
    const segments = LETTER_SEGMENTS[letter];
    const idPrefix = caseStyle === "uppercase" ? "pt" : "pt-lower";
    const nativeLabel = caseStyle === "uppercase" ? letter : lowercaseLetter;
    const labelPrefix = caseStyle === "uppercase" ? "대문자" : "소문자";
    const descriptionPrefix = caseStyle === "uppercase" ? "Uppercase" : "Lowercase";
    const cue =
      caseStyle === "uppercase"
        ? {
            ko: "큰 획부터 쓰고, 짧은 보조 획은 마지막에 정리하세요.",
            en: "Draw the main long strokes first, then finish with shorter supporting strokes.",
          }
        : {
            ko: "임시 소문자 시트는 기존 대문자 획 구성을 축소 개념으로 연습하도록 맞춰져 있습니다.",
            en: "These temporary lowercase sheets reuse the uppercase stroke structure as a placeholder practice guide.",
          };
    const strokeGuides = segments.map((segmentId, index) => ({
      id: `${idPrefix}-${lowercaseLetter}-${index + 1}`,
      pathD: SEGMENT_PATHS[segmentId],
      order: index + 1,
    }));

    return {
      id: `${idPrefix}-${lowercaseLetter}`,
      languageId: "pt",
      mode: "character",
      label: {
        ko: `${labelPrefix} ${nativeLabel}`,
        en: `${descriptionPrefix} ${nativeLabel}`,
      },
      nativeLabel,
      cue,
      description: {
        ko: `포르투갈어 알파벳 ${nativeLabel} 연습용 임시 템플릿입니다.`,
        en: `Practice template for the Portuguese letter ${nativeLabel}.`,
      },
      direction: "ltr",
      guidePathD: strokeGuides.map((guide) => guide.pathD).join(" "),
      strokeGuides,
      viewBox: [0, 0, 100, 100],
      gridLabel: {
        ko: "라틴 알파벳 칸",
        en: "Latin cell",
      },
    };
  });
}

export const ptUppercaseLatinAlphabetTemplates: WritingTemplate[] = createPortugueseLatinTemplates("uppercase");
export const ptLowercaseLatinAlphabetTemplates: WritingTemplate[] = createPortugueseLatinTemplates("lowercase");

export const ptLatinAlphabetTemplates: WritingTemplate[] = [
  ...ptUppercaseLatinAlphabetTemplates,
  ...ptLowercaseLatinAlphabetTemplates,
];
