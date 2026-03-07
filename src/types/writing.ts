export type PracticeMode = "character" | "word" | "sentence";

export type WritingDirection = "ltr" | "rtl";

export type StrokePoint = {
  x: number;
  y: number;
  t: number;
};

export type Stroke = {
  id: string;
  points: StrokePoint[];
};

export type WritingTemplate = {
  id: string;
  languageId: string;
  mode: PracticeMode;
  label: string;
  nativeLabel: string;
  cue: string;
  description: string;
  direction: WritingDirection;
  guidePathD: string;
  viewBox: [number, number, number, number];
  gridLabel: string;
};

export type LanguagePack = {
  id: string;
  label: string;
  nativeLabel: string;
  direction: WritingDirection;
  stage: "MVP" | "Prototype";
  summary: string;
  templates: WritingTemplate[];
};

