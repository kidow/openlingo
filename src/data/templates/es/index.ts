import { WritingTemplate } from "@/types/writing";
import { esLatinAlphabetTemplates } from "./alphabet";
import { esUppercaseEnyeTemplate } from "./uppercase-enye";
import { esLowercaseEnyeTemplate } from "./lowercase-enye";

/* Standard Latin A–Z (uppercase + lowercase) */
/* Eñe: Ñ/ñ */
export const esTemplates: WritingTemplate[] = [
  ...esLatinAlphabetTemplates,
  esUppercaseEnyeTemplate,
  esLowercaseEnyeTemplate,
];
