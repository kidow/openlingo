import arAin from "./ain.svg";
import arAlif from "./alif.svg";
import arBa from "./ba.svg";
import arDad from "./dad.svg";
import arDal from "./dal.svg";
import arDha from "./dha.svg";
import arDhal from "./dhal.svg";
import arFa from "./fa.svg";
import arGhain from "./ghain.svg";
import arHa from "./ha.svg";
import arHaLetter from "./ha-letter.svg";
import arJim from "./jim.svg";
import arKaf from "./kaf.svg";
import arKha from "./kha.svg";
import arLam from "./lam.svg";
import arMim from "./mim.svg";
import arNun from "./nun.svg";
import arQaf from "./qaf.svg";
import arRa from "./ra.svg";
import arSad from "./sad.svg";
import arShin from "./shin.svg";
import arSin from "./sin.svg";
import arTa from "./ta.svg";
import arTaEmphatic from "./ta-emphatic.svg";
import arTha from "./tha.svg";
import arWaw from "./waw.svg";
import arYa from "./ya.svg";
import arZay from "./zay.svg";

import { StrokeGuide, WritingTemplate } from "@/types/writing";

const AR_GLYPH_ASSETS = {
  "ar-ain": arAin,
  "ar-alif": arAlif,
  "ar-ba": arBa,
  "ar-dad": arDad,
  "ar-dal": arDal,
  "ar-dha": arDha,
  "ar-dhal": arDhal,
  "ar-fa": arFa,
  "ar-ghain": arGhain,
  "ar-ha": arHa,
  "ar-ha-letter": arHaLetter,
  "ar-jim": arJim,
  "ar-kaf": arKaf,
  "ar-kha": arKha,
  "ar-lam": arLam,
  "ar-mim": arMim,
  "ar-nun": arNun,
  "ar-qaf": arQaf,
  "ar-ra": arRa,
  "ar-sad": arSad,
  "ar-shin": arShin,
  "ar-sin": arSin,
  "ar-ta": arTa,
  "ar-ta-emphatic": arTaEmphatic,
  "ar-tha": arTha,
  "ar-waw": arWaw,
  "ar-ya": arYa,
  "ar-zay": arZay,
} as const;

function buildStrokeGuides(template: WritingTemplate): StrokeGuide[] {
  const segments = template.guidePathD
    .replace(/\s+/g, " ")
    .trim()
    .split(/(?=M)/)
    .map((segment) => segment.trim())
    .filter(Boolean);

  return segments.map((pathD: string, index: number) => ({
    id: `${template.id}-${index + 1}`,
    pathD,
    order: index + 1,
  }));
}

export function applyArabicGlyphAssets(templates: WritingTemplate[]): WritingTemplate[] {
  return templates.map((template) => {
    const glyphAsset = AR_GLYPH_ASSETS[template.id as keyof typeof AR_GLYPH_ASSETS];

    if (!glyphAsset) {
      return template;
    }

    return {
      ...template,
      glyphAsset,
      strokeGuides: buildStrokeGuides(template),
    };
  });
}
