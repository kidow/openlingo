import ruLowercaseA from "./lowercase/a.svg";
import ruLowercaseBe from "./lowercase/be.svg";
import ruLowercaseVe from "./lowercase/ve.svg";
import ruLowercaseGe from "./lowercase/ge.svg";
import ruLowercaseDe from "./lowercase/de.svg";
import ruLowercaseYe from "./lowercase/ye.svg";
import ruLowercaseYo from "./lowercase/yo.svg";
import ruLowercaseZhe from "./lowercase/zhe.svg";
import ruLowercaseZe from "./lowercase/ze.svg";
import ruLowercaseI from "./lowercase/i.svg";
import ruLowercaseShortI from "./lowercase/short-i.svg";
import ruLowercaseKa from "./lowercase/ka.svg";
import ruLowercaseEl from "./lowercase/el.svg";
import ruLowercaseEm from "./lowercase/em.svg";
import ruLowercaseEn from "./lowercase/en.svg";
import ruLowercaseO from "./lowercase/о.svg";
import ruLowercasePe from "./lowercase/pe.svg";
import ruLowercaseEr from "./lowercase/er.svg";
import ruLowercaseEs from "./lowercase/es.svg";
import ruLowercaseTe from "./lowercase/te.svg";
import ruLowercaseU from "./lowercase/u.svg";
import ruLowercaseEf from "./lowercase/ef.svg";
import ruLowercaseKha from "./lowercase/kha.svg";
import ruLowercaseTse from "./lowercase/tse.svg";
import ruLowercaseChe from "./lowercase/che.svg";
import ruLowercaseSha from "./lowercase/sha.svg";
import ruLowercaseShcha from "./lowercase/shcha.svg";
import ruLowercaseHardSign from "./lowercase/hard-sign.svg";
import ruLowercaseYeru from "./lowercase/yeru.svg";
import ruLowercaseSoftSign from "./lowercase/soft-sign.svg";
import ruLowercaseEReversed from "./lowercase/e-reversed.svg";
import ruLowercaseYu from "./lowercase/yu.svg";
import ruLowercaseYa from "./lowercase/ya.svg";
import ruUppercaseA from "./uppercase/a.svg";
import ruUppercaseBe from "./uppercase/be.svg";
import ruUppercaseVe from "./uppercase/ve.svg";
import ruUppercaseGe from "./uppercase/ge.svg";
import ruUppercaseDe from "./uppercase/de.svg";
import ruUppercaseYe from "./uppercase/ye.svg";
import ruUppercaseYo from "./uppercase/yo.svg";
import ruUppercaseZhe from "./uppercase/zhe.svg";
import ruUppercaseZe from "./uppercase/ze.svg";
import ruUppercaseI from "./uppercase/i.svg";
import ruUppercaseShortI from "./uppercase/short-i.svg";
import ruUppercaseKa from "./uppercase/ka.svg";
import ruUppercaseEl from "./uppercase/el.svg";
import ruUppercaseEm from "./uppercase/em.svg";
import ruUppercaseEn from "./uppercase/en.svg";
import ruUppercaseO from "./uppercase/o.svg";
import ruUppercasePe from "./uppercase/pe.svg";
import ruUppercaseEr from "./uppercase/er.svg";
import ruUppercaseEs from "./uppercase/es.svg";
import ruUppercaseTe from "./uppercase/te.svg";
import ruUppercaseU from "./uppercase/u.svg";
import ruUppercaseEf from "./uppercase/ef.svg";
import ruUppercaseKha from "./uppercase/kha.svg";
import ruUppercaseTse from "./uppercase/tse.svg";
import ruUppercaseChe from "./uppercase/che.svg";
import ruUppercaseSha from "./uppercase/sha.svg";
import ruUppercaseShcha from "./uppercase/shcha.svg";
import ruUppercaseHardSign from "./uppercase/hard-sign.svg";
import ruUppercaseYeru from "./uppercase/yeru.svg";
import ruUppercaseSoftSign from "./uppercase/soft-sign.svg";
import ruUppercaseEReversed from "./uppercase/e-reversed.svg";
import ruUppercaseYu from "./uppercase/yu.svg";
import ruUppercaseYa from "./uppercase/ya.svg";

import { StrokeGuide, WritingTemplate } from "@/types/writing";

const RU_GLYPH_ASSETS = {
  "ru-lowercase-a": ruLowercaseA,
  "ru-lowercase-be": ruLowercaseBe,
  "ru-lowercase-ve": ruLowercaseVe,
  "ru-lowercase-ge": ruLowercaseGe,
  "ru-lowercase-de": ruLowercaseDe,
  "ru-lowercase-ye": ruLowercaseYe,
  "ru-lowercase-yo": ruLowercaseYo,
  "ru-lowercase-zhe": ruLowercaseZhe,
  "ru-lowercase-ze": ruLowercaseZe,
  "ru-lowercase-i": ruLowercaseI,
  "ru-lowercase-short-i": ruLowercaseShortI,
  "ru-lowercase-ka": ruLowercaseKa,
  "ru-lowercase-el": ruLowercaseEl,
  "ru-lowercase-em": ruLowercaseEm,
  "ru-lowercase-en": ruLowercaseEn,
  "ru-lowercase-o": ruLowercaseO,
  "ru-lowercase-pe": ruLowercasePe,
  "ru-lowercase-er": ruLowercaseEr,
  "ru-lowercase-es": ruLowercaseEs,
  "ru-lowercase-te": ruLowercaseTe,
  "ru-lowercase-u": ruLowercaseU,
  "ru-lowercase-ef": ruLowercaseEf,
  "ru-lowercase-kha": ruLowercaseKha,
  "ru-lowercase-tse": ruLowercaseTse,
  "ru-lowercase-che": ruLowercaseChe,
  "ru-lowercase-sha": ruLowercaseSha,
  "ru-lowercase-shcha": ruLowercaseShcha,
  "ru-lowercase-hard-sign": ruLowercaseHardSign,
  "ru-lowercase-yeru": ruLowercaseYeru,
  "ru-lowercase-soft-sign": ruLowercaseSoftSign,
  "ru-lowercase-e-reversed": ruLowercaseEReversed,
  "ru-lowercase-yu": ruLowercaseYu,
  "ru-lowercase-ya": ruLowercaseYa,
  "ru-uppercase-a": ruUppercaseA,
  "ru-uppercase-be": ruUppercaseBe,
  "ru-uppercase-ve": ruUppercaseVe,
  "ru-uppercase-ge": ruUppercaseGe,
  "ru-uppercase-de": ruUppercaseDe,
  "ru-uppercase-ye": ruUppercaseYe,
  "ru-uppercase-yo": ruUppercaseYo,
  "ru-uppercase-zhe": ruUppercaseZhe,
  "ru-uppercase-ze": ruUppercaseZe,
  "ru-uppercase-i": ruUppercaseI,
  "ru-uppercase-short-i": ruUppercaseShortI,
  "ru-uppercase-ka": ruUppercaseKa,
  "ru-uppercase-el": ruUppercaseEl,
  "ru-uppercase-em": ruUppercaseEm,
  "ru-uppercase-en": ruUppercaseEn,
  "ru-uppercase-o": ruUppercaseO,
  "ru-uppercase-pe": ruUppercasePe,
  "ru-uppercase-er": ruUppercaseEr,
  "ru-uppercase-es": ruUppercaseEs,
  "ru-uppercase-te": ruUppercaseTe,
  "ru-uppercase-u": ruUppercaseU,
  "ru-uppercase-ef": ruUppercaseEf,
  "ru-uppercase-kha": ruUppercaseKha,
  "ru-uppercase-tse": ruUppercaseTse,
  "ru-uppercase-che": ruUppercaseChe,
  "ru-uppercase-sha": ruUppercaseSha,
  "ru-uppercase-shcha": ruUppercaseShcha,
  "ru-uppercase-hard-sign": ruUppercaseHardSign,
  "ru-uppercase-yeru": ruUppercaseYeru,
  "ru-uppercase-soft-sign": ruUppercaseSoftSign,
  "ru-uppercase-e-reversed": ruUppercaseEReversed,
  "ru-uppercase-yu": ruUppercaseYu,
  "ru-uppercase-ya": ruUppercaseYa,
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

export function applyRussianGlyphAssets(templates: WritingTemplate[]): WritingTemplate[] {
  return templates.map((template) => {
    const glyphAsset = RU_GLYPH_ASSETS[template.id as keyof typeof RU_GLYPH_ASSETS];

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
