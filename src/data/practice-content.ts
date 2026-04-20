import { LanguagePack, PracticeTemplateGroup, WritingTemplate } from "@/types/writing";
import { LocalizedText } from "@/i18n/config";
import { enAlphabetTemplates } from "@/data/templates/en/alphabet";
import { applyEnglishGlyphAssets } from "@/data/templates/en/glyph-assets";
import { jaTemplates } from "@/data/templates/ja";
import { ruTemplates } from "@/data/templates/ru";
import { arTemplates } from "@/data/templates/ar";
import { deTemplateGroups, deTemplates } from "@/data/templates/de";
import { esTemplateGroups, esTemplates } from "@/data/templates/es";
import { frTemplateGroups, frTemplates } from "@/data/templates/fr";
import { ptTemplateGroups, ptTemplates } from "@/data/templates/pt";
import { itTemplateGroups, itTemplates } from "@/data/templates/it";
import { hiraganaTemplates, katakanaTemplates } from "@/data/templates/ja";
import { zhHantTemplates } from "@/data/templates/zh/zh-hant";
import { BASIC_STROKES } from "@/data/templates/zh/shared/strokes";
import { buildChineseHskPracticeTemplates, buildChineseHskTemplateGroups } from "@/data/templates/zh/hsk-levels";

type TemplateGroupInput = {
  id: string;
  label: LocalizedText;
  description?: LocalizedText;
  templateIds: string[];
};

function createTemplateGroup(input: TemplateGroupInput): PracticeTemplateGroup {
  return input;
}

function getTemplateIds(templates: WritingTemplate[]) {
  return templates.map((template) => template.id);
}

function createGroupFromTemplates(
  id: string,
  label: LocalizedText,
  templates: WritingTemplate[],
  description?: LocalizedText
) {
  return createTemplateGroup({
    id,
    label,
    description,
    templateIds: getTemplateIds(templates),
  });
}

function createGroupFromIds(id: string, label: LocalizedText, templateIds: string[], description?: LocalizedText) {
  return createTemplateGroup({
    id,
    label,
    description,
    templateIds,
  });
}

function createCaseGroups(templates: WritingTemplate[], labels: { first: LocalizedText; second: LocalizedText }) {
  const midpoint = Math.floor(templates.length / 2);

  return [
    createGroupFromTemplates("first-case", labels.first, templates.slice(0, midpoint)),
    createGroupFromTemplates("second-case", labels.second, templates.slice(midpoint)),
  ];
}

function createSplitGroups(
  templates: WritingTemplate[],
  firstCount: number,
  first: { id: string; label: LocalizedText },
  second: { id: string; label: LocalizedText }
) {
  return [
    createGroupFromTemplates(first.id, first.label, templates.slice(0, firstCount)),
    createGroupFromTemplates(second.id, second.label, templates.slice(firstCount)),
  ];
}

const enTemplates = applyEnglishGlyphAssets(enAlphabetTemplates);

const jaTemplateGroups = [
  createGroupFromTemplates("hiragana", { ko: "히라가나", en: "Hiragana" }, hiraganaTemplates),
  createGroupFromTemplates("katakana", { ko: "가타카나", en: "Katakana" }, katakanaTemplates),
];

const zhHansHskTemplates = buildChineseHskPracticeTemplates("zh-hans");
const zhHansHskTemplateGroups = buildChineseHskTemplateGroups("zh-hans");

const zhHansTemplateGroups = [
  ...zhHansHskTemplateGroups,
];

const zhHantTemplateGroups = createSplitGroups(
  zhHantTemplates,
  BASIC_STROKES.length,
  { id: "strokes", label: { ko: "기본 필획", en: "Basic strokes" } },
  { id: "characters", label: { ko: "기본문자", en: "Basic characters" } }
);

const arTemplateGroups = [
  createGroupFromIds("no-dots", { ko: "무점", en: "No dots" }, [
    "ar-alif",
    "ar-ha",
    "ar-dal",
    "ar-ra",
    "ar-zay",
    "ar-sin",
    "ar-sad",
    "ar-ta-emphatic",
    "ar-ain",
    "ar-kaf",
    "ar-lam",
    "ar-mim",
    "ar-ha-letter",
    "ar-waw",
  ]),
  createGroupFromIds("one-dot", { ko: "1점", en: "1 dot" }, [
    "ar-ba",
    "ar-jim",
    "ar-kha",
    "ar-dhal",
    "ar-dad",
    "ar-dha",
    "ar-ghain",
    "ar-fa",
    "ar-nun",
  ]),
  createGroupFromIds("two-dots", { ko: "2점", en: "2 dots" }, ["ar-ta", "ar-qaf", "ar-ya"]),
  createGroupFromIds("three-dots", { ko: "3점", en: "3 dots" }, ["ar-tha", "ar-shin"]),
];

export const languagePacks: LanguagePack[] = [
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
    templateGroups: createCaseGroups(enTemplates, {
      first: { ko: "대문자", en: "Uppercase" },
      second: { ko: "소문자", en: "Lowercase" },
    }),
    templates: enTemplates,
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
    templateGroups: jaTemplateGroups,
    templates: jaTemplates,
  },
  {
    id: "ru",
    label: {
      ko: "러시아어",
      en: "Russian",
    },
    nativeLabel: "Русский",
    direction: "ltr",
    stage: "Prototype",
    summary: {
      ko: "라틴 문자와 유사하면서도 고유한 키릴 문자로 다양한 곡선 렌더링을 점검합니다.",
      en: "Cyrillic letters share some Latin shapes but add unique curves that broaden rendering coverage.",
    },
    templateGroups: createCaseGroups(ruTemplates, {
      first: { ko: "대문자", en: "Uppercase" },
      second: { ko: "소문자", en: "Lowercase" },
    }),
    templates: ruTemplates,
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
    templateGroups: arTemplateGroups,
    templates: arTemplates,
  },
  {
    id: "de",
    label: {
      ko: "독일어",
      en: "German",
    },
    nativeLabel: "Deutsch",
    direction: "ltr",
    stage: "Prototype",
    summary: {
      ko: "라틴 알파벳에 움라우트와 에스체트를 추가하여 분음 부호 렌더링을 검증합니다.",
      en: "Extends the Latin base with Umlauts and Eszett to validate diacritic rendering support.",
    },
    templateGroups: deTemplateGroups,
    templates: deTemplates,
  },
  {
    id: "es",
    label: {
      ko: "스페인어",
      en: "Spanish",
    },
    nativeLabel: "Español",
    direction: "ltr",
    stage: "Prototype",
    summary: {
      ko: "라틴 알파벳에 에녜(Ñ)를 추가하여 물결표 분음 부호 렌더링을 검증합니다.",
      en: "Extends the Latin base with Eñe to validate tilde diacritic rendering support.",
    },
    templateGroups: esTemplateGroups,
    templates: esTemplates,
  },
  {
    id: "fr",
    label: {
      ko: "프랑스어",
      en: "French",
    },
    nativeLabel: "Français",
    direction: "ltr",
    stage: "Prototype",
    summary: {
      ko: "악상, 세디유, 합자 등 다양한 분음 부호로 렌더링 범위를 넓힙니다.",
      en: "Accents, cedilla, and ligature broaden diacritic rendering coverage beyond simple dots.",
    },
    templateGroups: frTemplateGroups,
    templates: frTemplates,
  },
  {
    id: "pt",
    label: {
      ko: "포르투갈어",
      en: "Portuguese",
    },
    nativeLabel: "Português",
    direction: "ltr",
    stage: "Prototype",
    summary: {
      ko: "악상, 세딜랴, 틸, 트레마 등 다양한 분음 부호로 라틴 문자 렌더링 범위를 넓힙니다.",
      en: "Accents, cedilla, tilde, and diaeresis broaden diacritic rendering coverage for Latin scripts.",
    },
    templateGroups: ptTemplateGroups,
    templates: ptTemplates,
  },
  {
    id: "it",
    label: {
      ko: "이탈리아어",
      en: "Italian",
    },
    nativeLabel: "Italiano",
    direction: "ltr",
    stage: "Prototype",
    summary: {
      ko: "기본 문자와 특수 문자를 대문자/소문자로 나눠 이탈리아어 문자를 연습합니다.",
      en: "Practice Italian letters in separate uppercase/lowercase groups for basic and special forms.",
    },
    templateGroups: itTemplateGroups,
    templates: itTemplates,
  },
  {
    id: "zh-hans",
    label: {
      ko: "중국어(간체)",
      en: "Chinese (Simplified)",
    },
    nativeLabel: "简体中文",
    direction: "ltr",
    stage: "Prototype",
    summary: {
      ko: "HSK 1급 한자로 중국어 연습 카드를 구성합니다.",
      en: "HSK Level 1 characters compose the simplified Chinese practice cards.",
    },
    templateGroups: zhHansTemplateGroups,
    templates: [...zhHansHskTemplates],
  },
  {
    id: "zh-hant",
    label: {
      ko: "중국어(번체)",
      en: "Chinese (Traditional)",
    },
    nativeLabel: "繁體中文",
    direction: "ltr",
    stage: "Prototype",
    summary: {
      ko: "기본 필획 8종과 기초 한자 30자로 번체자 획순 렌더링을 검증합니다.",
      en: "Eight basic strokes and 30 foundational characters validate traditional Hanzi stroke-order rendering.",
    },
    templateGroups: zhHantTemplateGroups,
    templates: zhHantTemplates,
  },
];
