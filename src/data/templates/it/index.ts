import { PracticeTemplateGroup, WritingTemplate } from "@/types/writing";
import {
  ptLowercaseLatinAlphabetTemplates,
  ptUppercaseLatinAlphabetTemplates,
} from "@/data/templates/pt/alphabet";
import { ptUppercaseAGraveTemplate } from "@/data/templates/pt/uppercase-a-grave";
import { ptLowercaseAGraveTemplate } from "@/data/templates/pt/lowercase-a-grave";
import { ptUppercaseOAcuteTemplate } from "@/data/templates/pt/uppercase-o-acute";
import { ptLowercaseOAcuteTemplate } from "@/data/templates/pt/lowercase-o-acute";
import { frUppercaseEGraveTemplate } from "@/data/templates/fr/uppercase-e-grave";
import { frLowercaseEGraveTemplate } from "@/data/templates/fr/lowercase-e-grave";
import { frUppercaseEAcuteTemplate } from "@/data/templates/fr/uppercase-e-acute";
import { frLowercaseEAcuteTemplate } from "@/data/templates/fr/lowercase-e-acute";
import { frUppercaseUGraveTemplate } from "@/data/templates/fr/uppercase-u-grave";
import { frLowercaseUGraveTemplate } from "@/data/templates/fr/lowercase-u-grave";

const ITALIAN_GRID_LABEL = {
  ko: "이탈리아 문자 연습 칸",
  en: "Italian cell",
};

const GRAVE_UPPER = "M54 14 L42 6";
const GRAVE_LOWER = "M54 26 L42 18";
const ITALIAN_FOREIGN_LETTERS = new Set(["it-j", "it-k", "it-w", "it-x", "it-y", "it-lower-j", "it-lower-k", "it-lower-w", "it-lower-x", "it-lower-y"]);

const ptAlphabetTemplates = [...ptUppercaseLatinAlphabetTemplates, ...ptLowercaseLatinAlphabetTemplates];
const ptBaseTemplateMap = new Map(ptAlphabetTemplates.map((template) => [template.id, template]));

function getBaseTemplate(id: string) {
  const template = ptBaseTemplateMap.get(id);

  if (!template) {
    throw new Error(`Missing base template: ${id}`);
  }

  return template;
}

function rekeyStrokeGuides(template: WritingTemplate, nextId: string) {
  return template.strokeGuides?.map((guide, index) => ({
    ...guide,
    id: `${nextId}-${index + 1}`,
    order: index + 1,
  }));
}

function cloneBaseLatinTemplate(template: WritingTemplate): WritingTemplate {
  const isLowercase = template.id.startsWith("pt-lower");
  const nextId = template.id.replace(/^pt/, "it");
  const nativeLabel = isLowercase ? template.nativeLabel.toLowerCase() : template.nativeLabel.toUpperCase();

  return {
    ...template,
    id: nextId,
    languageId: "it",
    label: {
      ko: `${isLowercase ? "소문자" : "대문자"} ${nativeLabel}`,
      en: `${isLowercase ? "Lowercase" : "Uppercase"} ${nativeLabel}`,
    },
    description: {
      ko: `이탈리아어 알파벳 ${nativeLabel} 연습용 임시 템플릿입니다.`,
      en: `Practice template for the Italian letter ${nativeLabel}.`,
    },
    gridLabel: ITALIAN_GRID_LABEL,
    strokeGuides: rekeyStrokeGuides(template, nextId),
  };
}

function cloneAccentTemplate(
  template: WritingTemplate,
  options: {
    nextId: string;
    nativeLabel: string;
    labelKo: string;
    labelEn: string;
    descriptionKo: string;
    descriptionEn: string;
    gridLabel?: typeof ITALIAN_GRID_LABEL;
  }
): WritingTemplate {
  return {
    ...template,
    id: options.nextId,
    languageId: "it",
    nativeLabel: options.nativeLabel,
    label: {
      ko: options.labelKo,
      en: options.labelEn,
    },
    description: {
      ko: options.descriptionKo,
      en: options.descriptionEn,
    },
    gridLabel: options.gridLabel ?? ITALIAN_GRID_LABEL,
    strokeGuides: rekeyStrokeGuides(template, options.nextId),
  };
}

function createItalianAccentFromBase(
  baseTemplate: WritingTemplate,
  options: {
    nextId: string;
    nativeLabel: string;
    labelKo: string;
    labelEn: string;
    descriptionKo: string;
    descriptionEn: string;
    cueKo: string;
    cueEn: string;
    accentPathD: string;
  }
): WritingTemplate {
  const strokeGuides = rekeyStrokeGuides(baseTemplate, options.nextId) ?? [];

  return {
    ...baseTemplate,
    id: options.nextId,
    languageId: "it",
    nativeLabel: options.nativeLabel,
    label: {
      ko: options.labelKo,
      en: options.labelEn,
    },
    cue: {
      ko: options.cueKo,
      en: options.cueEn,
    },
    description: {
      ko: options.descriptionKo,
      en: options.descriptionEn,
    },
    gridLabel: ITALIAN_GRID_LABEL,
    guidePathD: `${baseTemplate.guidePathD} ${options.accentPathD}`,
    strokeGuides: [
      ...strokeGuides,
      {
        id: `${options.nextId}-${strokeGuides.length + 1}`,
        pathD: options.accentPathD,
        order: strokeGuides.length + 1,
      },
    ],
  };
}

const itUppercaseBaseTemplates = ptUppercaseLatinAlphabetTemplates.map(cloneBaseLatinTemplate);
const itLowercaseBaseTemplates = ptLowercaseLatinAlphabetTemplates.map(cloneBaseLatinTemplate);
const itUppercaseBasicTemplates = itUppercaseBaseTemplates.filter((template) => !ITALIAN_FOREIGN_LETTERS.has(template.id));
const itLowercaseBasicTemplates = itLowercaseBaseTemplates.filter((template) => !ITALIAN_FOREIGN_LETTERS.has(template.id));
const itUppercaseForeignTemplates = itUppercaseBaseTemplates.filter((template) => ITALIAN_FOREIGN_LETTERS.has(template.id));
const itLowercaseForeignTemplates = itLowercaseBaseTemplates.filter((template) => ITALIAN_FOREIGN_LETTERS.has(template.id));

const itUppercaseAccentTemplates = [
  cloneAccentTemplate(ptUppercaseAGraveTemplate, {
    nextId: "it-uppercase-a-grave",
    nativeLabel: "À",
    labelKo: "대문자 A 악상그라브",
    labelEn: "Uppercase A-Grave",
    descriptionKo: "이탈리아어 문자 'À' (악상그라브) 연습용 템플릿입니다.",
    descriptionEn: "Practice template for the Italian letter 'À' (A-grave).",
  }),
  cloneAccentTemplate(frUppercaseEGraveTemplate, {
    nextId: "it-uppercase-e-grave",
    nativeLabel: "È",
    labelKo: "대문자 E 악상그라브",
    labelEn: "Uppercase E-Grave",
    descriptionKo: "이탈리아어 문자 'È' (악상그라브) 연습용 템플릿입니다.",
    descriptionEn: "Practice template for the Italian letter 'È' (E-grave).",
  }),
  cloneAccentTemplate(frUppercaseEAcuteTemplate, {
    nextId: "it-uppercase-e-acute",
    nativeLabel: "É",
    labelKo: "대문자 E 악상테귀",
    labelEn: "Uppercase E-Acute",
    descriptionKo: "이탈리아어 문자 'É' (악상테귀) 연습용 템플릿입니다.",
    descriptionEn: "Practice template for the Italian letter 'É' (E-acute).",
  }),
  createItalianAccentFromBase(getBaseTemplate("pt-i"), {
    nextId: "it-uppercase-i-grave",
    nativeLabel: "Ì",
    labelKo: "대문자 I 악상그라브",
    labelEn: "Uppercase I-Grave",
    descriptionKo: "이탈리아어 문자 'Ì' (악상그라브) 연습용 템플릿입니다.",
    descriptionEn: "Practice template for the Italian letter 'Ì' (I-grave).",
    cueKo: "I를 먼저 쓰고, 위에 왼쪽 위로 향하는 짧은 사선을 그으세요.",
    cueEn: "Write a standard I, then add a grave accent (`) above.",
    accentPathD: GRAVE_UPPER,
  }),
  createItalianAccentFromBase(getBaseTemplate("pt-o"), {
    nextId: "it-uppercase-o-grave",
    nativeLabel: "Ò",
    labelKo: "대문자 O 악상그라브",
    labelEn: "Uppercase O-Grave",
    descriptionKo: "이탈리아어 문자 'Ò' (악상그라브) 연습용 템플릿입니다.",
    descriptionEn: "Practice template for the Italian letter 'Ò' (O-grave).",
    cueKo: "O를 먼저 쓰고, 위에 왼쪽 위로 향하는 짧은 사선을 그으세요.",
    cueEn: "Write a standard O, then add a grave accent (`) above.",
    accentPathD: GRAVE_UPPER,
  }),
  cloneAccentTemplate(ptUppercaseOAcuteTemplate, {
    nextId: "it-uppercase-o-acute",
    nativeLabel: "Ó",
    labelKo: "대문자 O 악상테귀",
    labelEn: "Uppercase O-Acute",
    descriptionKo: "이탈리아어 문자 'Ó' (악상테귀) 연습용 템플릿입니다.",
    descriptionEn: "Practice template for the Italian letter 'Ó' (O-acute).",
  }),
  cloneAccentTemplate(frUppercaseUGraveTemplate, {
    nextId: "it-uppercase-u-grave",
    nativeLabel: "Ù",
    labelKo: "대문자 U 악상그라브",
    labelEn: "Uppercase U-Grave",
    descriptionKo: "이탈리아어 문자 'Ù' (악상그라브) 연습용 템플릿입니다.",
    descriptionEn: "Practice template for the Italian letter 'Ù' (U-grave).",
  }),
];

const itLowercaseAccentTemplates = [
  cloneAccentTemplate(ptLowercaseAGraveTemplate, {
    nextId: "it-lowercase-a-grave",
    nativeLabel: "à",
    labelKo: "소문자 a 악상그라브",
    labelEn: "Lowercase A-Grave",
    descriptionKo: "이탈리아어 문자 'à' (소문자 악상그라브) 연습용 템플릿입니다.",
    descriptionEn: "Practice template for the Italian letter 'à' (lowercase a-grave).",
  }),
  cloneAccentTemplate(frLowercaseEGraveTemplate, {
    nextId: "it-lowercase-e-grave",
    nativeLabel: "è",
    labelKo: "소문자 e 악상그라브",
    labelEn: "Lowercase E-Grave",
    descriptionKo: "이탈리아어 문자 'è' (소문자 악상그라브) 연습용 템플릿입니다.",
    descriptionEn: "Practice template for the Italian letter 'è' (lowercase e-grave).",
  }),
  cloneAccentTemplate(frLowercaseEAcuteTemplate, {
    nextId: "it-lowercase-e-acute",
    nativeLabel: "é",
    labelKo: "소문자 e 악상테귀",
    labelEn: "Lowercase E-Acute",
    descriptionKo: "이탈리아어 문자 'é' (소문자 악상테귀) 연습용 템플릿입니다.",
    descriptionEn: "Practice template for the Italian letter 'é' (lowercase e-acute).",
  }),
  createItalianAccentFromBase(getBaseTemplate("pt-lower-i"), {
    nextId: "it-lowercase-i-grave",
    nativeLabel: "ì",
    labelKo: "소문자 i 악상그라브",
    labelEn: "Lowercase I-Grave",
    descriptionKo: "이탈리아어 문자 'ì' (소문자 악상그라브) 연습용 템플릿입니다.",
    descriptionEn: "Practice template for the Italian letter 'ì' (lowercase i-grave).",
    cueKo: "i를 먼저 쓰고, 위에 왼쪽 위로 향하는 짧은 사선을 그으세요.",
    cueEn: "Write a lowercase i, then add a grave accent (`) above.",
    accentPathD: GRAVE_LOWER,
  }),
  createItalianAccentFromBase(getBaseTemplate("pt-lower-o"), {
    nextId: "it-lowercase-o-grave",
    nativeLabel: "ò",
    labelKo: "소문자 o 악상그라브",
    labelEn: "Lowercase O-Grave",
    descriptionKo: "이탈리아어 문자 'ò' (소문자 악상그라브) 연습용 템플릿입니다.",
    descriptionEn: "Practice template for the Italian letter 'ò' (lowercase o-grave).",
    cueKo: "o를 먼저 쓰고, 위에 왼쪽 위로 향하는 짧은 사선을 그으세요.",
    cueEn: "Write a lowercase o, then add a grave accent (`) above.",
    accentPathD: GRAVE_LOWER,
  }),
  cloneAccentTemplate(ptLowercaseOAcuteTemplate, {
    nextId: "it-lowercase-o-acute",
    nativeLabel: "ó",
    labelKo: "소문자 o 악상테귀",
    labelEn: "Lowercase O-Acute",
    descriptionKo: "이탈리아어 문자 'ó' (소문자 악상테귀) 연습용 템플릿입니다.",
    descriptionEn: "Practice template for the Italian letter 'ó' (lowercase o-acute).",
  }),
  cloneAccentTemplate(frLowercaseUGraveTemplate, {
    nextId: "it-lowercase-u-grave",
    nativeLabel: "ù",
    labelKo: "소문자 u 악상그라브",
    labelEn: "Lowercase U-Grave",
    descriptionKo: "이탈리아어 문자 'ù' (소문자 악상그라브) 연습용 템플릿입니다.",
    descriptionEn: "Practice template for the Italian letter 'ù' (lowercase u-grave).",
  }),
];

export const itTemplates: WritingTemplate[] = [
  ...itUppercaseBasicTemplates,
  ...itUppercaseAccentTemplates,
  ...itLowercaseBasicTemplates,
  ...itLowercaseAccentTemplates,
  ...itUppercaseForeignTemplates,
  ...itLowercaseForeignTemplates,
];

function createGroupFromTemplates(id: string, label: { ko: string; en: string }, templates: WritingTemplate[], description?: { ko: string; en: string }): PracticeTemplateGroup {
  return {
    id,
    label,
    description,
    templateIds: templates.map((template) => template.id),
  };
}

export const itTemplateGroups: PracticeTemplateGroup[] = [
  createGroupFromTemplates(
    "basic-uppercase",
    { ko: "기본 문자 - 대문자", en: "Basic letters - Uppercase" },
    itUppercaseBasicTemplates,
    {
      ko: "이탈리아어 표준 알파벳의 대문자를 연습합니다.",
      en: "Practice uppercase standard Italian letters.",
    }
  ),
  createGroupFromTemplates(
    "basic-lowercase",
    { ko: "기본 문자 - 소문자", en: "Basic letters - Lowercase" },
    itLowercaseBasicTemplates,
    {
      ko: "이탈리아어 표준 알파벳의 소문자를 연습합니다.",
      en: "Practice lowercase standard Italian letters.",
    }
  ),
  createGroupFromTemplates(
    "special-uppercase",
    { ko: "특수 문자 - 대문자", en: "Special letters - Uppercase" },
    [...itUppercaseForeignTemplates, ...itUppercaseAccentTemplates],
    {
      ko: "외래 문자와 악센트 문자의 대문자를 따로 연습합니다.",
      en: "Practice uppercase foreign letters and accented letters separately.",
    }
  ),
  createGroupFromTemplates(
    "special-lowercase",
    { ko: "특수 문자 - 소문자", en: "Special letters - Lowercase" },
    [...itLowercaseForeignTemplates, ...itLowercaseAccentTemplates],
    {
      ko: "외래 문자와 악센트 문자의 소문자를 따로 연습합니다.",
      en: "Practice lowercase foreign letters and accented letters separately.",
    }
  ),
];
