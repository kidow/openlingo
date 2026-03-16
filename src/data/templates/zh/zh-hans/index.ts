import { WritingTemplate } from "@/types/writing";
import { BASIC_STROKES, SharedStrokeData } from "../shared/strokes";
import { BASIC_CHARACTERS, SharedCharacterData } from "../shared/characters";

function createStrokeTemplate(data: SharedStrokeData): WritingTemplate {
  return {
    id: `zh-hans-stroke-${data.idSuffix}`,
    languageId: "zh-hans",
    mode: "character",
    label: data.label.hans,
    nativeLabel: data.nativeLabel,
    cue: data.cue.hans,
    description: data.description.hans,
    direction: "ltr",
    guidePathD: data.guidePathD,
    strokeGuides: data.strokeGuides.map((sg) => ({
      id: `zh-hans-stroke-${data.idSuffix}-${sg.order}`,
      pathD: sg.pathD,
      order: sg.order,
    })),
    viewBox: [0, 0, 100, 100],
    gridLabel: { ko: "한자 연습 칸", en: "Hanzi cell" },
  };
}

function createCharacterTemplate(data: SharedCharacterData): WritingTemplate {
  return {
    id: `zh-hans-${data.idSuffix}`,
    languageId: "zh-hans",
    mode: "character",
    label: data.label.hans,
    nativeLabel: data.nativeLabel,
    cue: data.cue.hans,
    description: data.description.hans,
    direction: "ltr",
    guidePathD: data.guidePathD,
    strokeGuides: data.strokeGuides.map((sg) => ({
      id: `zh-hans-${data.idSuffix}-${sg.order}`,
      pathD: sg.pathD,
      order: sg.order,
    })),
    viewBox: [0, 0, 100, 100],
    gridLabel: { ko: "한자 연습 칸", en: "Hanzi cell" },
  };
}

export const zhHansTemplates: WritingTemplate[] = [
  ...BASIC_STROKES.map(createStrokeTemplate),
  ...BASIC_CHARACTERS.map(createCharacterTemplate),
];
