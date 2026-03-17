import { LocalizedText } from "@/i18n/config";

export type PracticeMode = "character" | "word" | "sentence";

export type WritingDirection = "ltr" | "rtl";

export type LanguagePackStage = "MVP" | "Prototype";

export type StrokePoint = {
  x: number;
  y: number;
  t: number;
};

export type Stroke = {
  id: string;
  points: StrokePoint[];
};

export type StrokeGuide = {
  id: string;
  pathD: string;
  order: number;
  durationMs?: number;
  holdMs?: number;
};

export type TemplateGlyphPath = {
  d: string;
  fillRule?: "nonzero" | "evenodd";
  clipRule?: "nonzero" | "evenodd";
};

export type TemplateGlyphPlacement = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type TemplateGlyph = {
  viewBox: [number, number, number, number];
  paths: TemplateGlyphPath[];
  placement?: TemplateGlyphPlacement;
  maskStrokeWidth?: number;
};

export type WritingTemplate = {
  id: string;
  languageId: string;
  mode: PracticeMode;
  label: LocalizedText;
  nativeLabel: string;
  cue: LocalizedText;
  description: LocalizedText;
  direction: WritingDirection;
  guidePathD: string;
  strokeGuides?: StrokeGuide[];
  glyph?: TemplateGlyph;
  viewBox: [number, number, number, number];
  gridLabel: LocalizedText;
};

export type LanguagePack = {
  id: string;
  label: LocalizedText;
  nativeLabel: string;
  direction: WritingDirection;
  stage: LanguagePackStage;
  summary: LocalizedText;
  templates: WritingTemplate[];
};
