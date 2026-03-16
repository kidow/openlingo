import { WritingTemplate } from "@/types/writing";
import { BASIC_STROKES, SharedStrokeData } from "../shared/strokes";
import { BASIC_CHARACTERS, SharedCharacterData } from "../shared/characters";

function createStrokeTemplate(data: SharedStrokeData): WritingTemplate {
  return {
    id: `zh-hant-stroke-${data.idSuffix}`,
    languageId: "zh-hant",
    mode: "character",
    label: data.label.hant,
    nativeLabel: data.nativeLabel,
    cue: data.cue.hant,
    description: data.description.hant,
    direction: "ltr",
    guidePathD: data.guidePathD,
    strokeGuides: data.strokeGuides.map((sg) => ({
      id: `zh-hant-stroke-${data.idSuffix}-${sg.order}`,
      pathD: sg.pathD,
      order: sg.order,
    })),
    viewBox: [0, 0, 100, 100],
    gridLabel: { ko: "한자 연습 칸", en: "Hanzi cell" },
  };
}

function createCharacterTemplate(data: SharedCharacterData): WritingTemplate {
  return {
    id: `zh-hant-${data.idSuffix}`,
    languageId: "zh-hant",
    mode: "character",
    label: data.label.hant,
    nativeLabel: data.nativeLabel,
    cue: data.cue.hant,
    description: data.description.hant,
    direction: "ltr",
    guidePathD: data.guidePathD,
    strokeGuides: data.strokeGuides.map((sg) => ({
      id: `zh-hant-${data.idSuffix}-${sg.order}`,
      pathD: sg.pathD,
      order: sg.order,
    })),
    viewBox: [0, 0, 100, 100],
    gridLabel: { ko: "한자 연습 칸", en: "Hanzi cell" },
  };
}

export const zhHantTemplates: WritingTemplate[] = [
  ...BASIC_STROKES.map(createStrokeTemplate),
  ...BASIC_CHARACTERS.map(createCharacterTemplate),
];
