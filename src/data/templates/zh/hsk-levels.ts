import { LocalizedText } from "@/i18n/config";
import { PracticeTemplateGroup, WritingTemplate } from "@/types/writing";
import { ExampleWord } from "../example-words";
import { HSK_1_WORDS, ChineseHskWord } from "./hsk-words";

export type ChineseHskLevelDefinition = {
  id: string;
  label: LocalizedText;
  description: LocalizedText;
  words: ChineseHskWord[];
};

export const CHINESE_HSK_LEVELS: ChineseHskLevelDefinition[] = [
  {
    id: "hsk-1",
    label: {
      ko: "HSK 1급",
      en: "HSK Level 1",
    },
    description: {
      ko: "HSK 1급 단어 카드와 예시 연결을 묶습니다.",
      en: "Groups the HSK Level 1 word cards and example-word links.",
    },
    words: HSK_1_WORDS,
  },
];

function getUniqueHanCharacters(text: string) {
  return Array.from(new Set(text.match(/\p{Script=Han}/gu) ?? []));
}

function getStrokeCountsByCharacter(word: ChineseHskWord) {
  const strokeCounts = word.strokeCountText.split("+").map((value) => Number.parseInt(value, 10));
  const characters = getUniqueHanCharacters(word.word);

  return characters.map((character, index) => ({
    character,
    strokeCount: strokeCounts[index] ?? strokeCounts[strokeCounts.length - 1] ?? word.strokeCount,
  }));
}

function getRepresentativeHskCharacterTemplates(level: ChineseHskLevelDefinition) {
  const templatesByCharacter = new Map<
    string,
    {
      character: string;
      reading: string;
      meaning: string;
      category: string;
      strokeCount: number;
      strokeCountText: string;
    }
  >();

  for (const word of level.words) {
    for (const item of getStrokeCountsByCharacter(word)) {
      if (!templatesByCharacter.has(item.character)) {
        templatesByCharacter.set(item.character, {
          character: item.character,
          reading: word.reading,
          meaning: word.meaning,
          category: word.category,
          strokeCount: item.strokeCount,
          strokeCountText: String(item.strokeCount),
        });
      }
    }
  }

  return templatesByCharacter;
}

export function buildChineseHskTemplateGroups(
  languageId: "zh-hans",
  levels = CHINESE_HSK_LEVELS
): PracticeTemplateGroup[] {
  return levels.map((level) => ({
    id: level.id,
    label: level.label,
    description: level.description,
    templateIds: Array.from(getRepresentativeHskCharacterTemplates(level).keys()).map(
      (character) => `${languageId}-${level.id}-${character}`
    ),
  }));
}

export function buildChineseHskPracticeTemplates(
  languageId: "zh-hans",
  levels = CHINESE_HSK_LEVELS
): WritingTemplate[] {
  return levels.flatMap<WritingTemplate>((level) => {
    const templatesByCharacter = getRepresentativeHskCharacterTemplates(level);

    return Array.from(templatesByCharacter.values()).map((item) => ({
      id: `${languageId}-${level.id}-${item.character}`,
      languageId,
      mode: "word",
      label: {
        ko: item.reading,
        en: item.reading,
      },
      nativeLabel: item.character,
      cue: {
        ko: "HSK 단어에서 추출한 단일 한자 카드입니다. 합성어 예시는 아래에서 확인하세요.",
        en: "This is a single-character card extracted from the HSK word list. Compound examples appear below.",
      },
      description: {
        ko: `${item.category} · ${item.meaning}`,
        en: `${item.category} · ${item.meaning}`,
      },
      direction: "ltr",
      guidePathD: "M0 0",
      strokeCount: item.strokeCount,
      strokeCountText: item.strokeCountText,
      viewBox: [0, 0, 100, 100],
      gridLabel: {
        ko: "HSK 한자 카드",
        en: "HSK character card",
      },
    }));
  });
}

export function buildChineseHskExampleWordsByTemplateId(templates: WritingTemplate[], words: ChineseHskWord[]) {
  const templateIdsByNativeLabel = new Map<string, string[]>();

  for (const template of templates) {
    const templateIds = templateIdsByNativeLabel.get(template.nativeLabel) ?? [];
    templateIds.push(template.id);
    templateIdsByNativeLabel.set(template.nativeLabel, templateIds);
  }

  const exampleWordsByTemplateId: Record<string, ExampleWord[]> = {};

  for (const word of words) {
    for (const character of getUniqueHanCharacters(word.word)) {
      const templateIds = templateIdsByNativeLabel.get(character) ?? [];

      if (templateIds.length === 0) {
        continue;
      }

      for (const templateId of templateIds) {
        const existingExamples = exampleWordsByTemplateId[templateId] ?? [];
        existingExamples.push({ word: word.word, reading: word.reading, meaning: word.meaning });
        exampleWordsByTemplateId[templateId] = existingExamples;
      }
    }
  }

  return exampleWordsByTemplateId;
}
