import frUppercaseA from "./uppercase/a.svg";
import frUppercaseB from "./uppercase/b.svg";
import frUppercaseC from "./uppercase/c.svg";
import frUppercaseD from "./uppercase/d.svg";
import frUppercaseE from "./uppercase/e.svg";
import frUppercaseF from "./uppercase/f.svg";
import frUppercaseG from "./uppercase/g.svg";
import frUppercaseH from "./uppercase/h.svg";
import frUppercaseI from "./uppercase/i.svg";
import frUppercaseJ from "./uppercase/j.svg";
import frUppercaseK from "./uppercase/k.svg";
import frUppercaseL from "./uppercase/l.svg";
import frUppercaseM from "./uppercase/m.svg";
import frUppercaseN from "./uppercase/n.svg";
import frUppercaseO from "./uppercase/o.svg";
import frUppercaseP from "./uppercase/p.svg";
import frUppercaseQ from "./uppercase/q.svg";
import frUppercaseR from "./uppercase/r.svg";
import frUppercaseS from "./uppercase/s.svg";
import frUppercaseT from "./uppercase/t.svg";
import frUppercaseU from "./uppercase/u.svg";
import frUppercaseV from "./uppercase/v.svg";
import frUppercaseW from "./uppercase/w.svg";
import frUppercaseX from "./uppercase/x.svg";
import frUppercaseY from "./uppercase/y.svg";
import frUppercaseZ from "./uppercase/z.svg";
import frUppercaseAGrave from "./uppercase/a-grave.svg";
import frUppercaseACircumflex from "./uppercase/a-circumflex.svg";
import frUppercaseCCedilla from "./uppercase/c-cedilla.svg";
import frUppercaseEAcute from "./uppercase/e-acute.svg";
import frUppercaseEGrave from "./uppercase/e-grave.svg";
import frUppercaseECircumflex from "./uppercase/e-circumflex.svg";
import frUppercaseEDiaeresis from "./uppercase/e-diaeresis.svg";
import frUppercaseICircumflex from "./uppercase/i-circumflex.svg";
import frUppercaseIDiaeresis from "./uppercase/i-diaeresis.svg";
import frUppercaseOCircumflex from "./uppercase/o-circumflex.svg";
import frUppercaseUGrave from "./uppercase/u-grave.svg";
import frUppercaseUCircumflex from "./uppercase/u-circumflex.svg";
import frUppercaseUDiaeresis from "./uppercase/u-diaeresis.svg";
import frUppercaseOeLigature from "./uppercase/oe-ligature.svg";
import frLowercaseA from "./lowercase/a.svg";
import frLowercaseB from "./lowercase/b.svg";
import frLowercaseC from "./lowercase/c.svg";
import frLowercaseD from "./lowercase/d.svg";
import frLowercaseE from "./lowercase/e.svg";
import frLowercaseF from "./lowercase/f.svg";
import frLowercaseG from "./lowercase/g.svg";
import frLowercaseH from "./lowercase/h.svg";
import frLowercaseI from "./lowercase/i.svg";
import frLowercaseJ from "./lowercase/j.svg";
import frLowercaseK from "./lowercase/k.svg";
import frLowercaseL from "./lowercase/l.svg";
import frLowercaseM from "./lowercase/m.svg";
import frLowercaseN from "./lowercase/n.svg";
import frLowercaseO from "./lowercase/o.svg";
import frLowercaseP from "./lowercase/p.svg";
import frLowercaseQ from "./lowercase/q.svg";
import frLowercaseR from "./lowercase/r.svg";
import frLowercaseS from "./lowercase/s.svg";
import frLowercaseT from "./lowercase/t.svg";
import frLowercaseU from "./lowercase/u.svg";
import frLowercaseV from "./lowercase/v.svg";
import frLowercaseW from "./lowercase/w.svg";
import frLowercaseX from "./lowercase/x.svg";
import frLowercaseY from "./lowercase/y.svg";
import frLowercaseZ from "./lowercase/z.svg";
import frLowercaseAGrave from "./lowercase/a-grave.svg";
import frLowercaseACircumflex from "./lowercase/a-circumflex.svg";
import frLowercaseCCedilla from "./lowercase/c-cedilla.svg";
import frLowercaseEAcute from "./lowercase/e-acute.svg";
import frLowercaseEGrave from "./lowercase/e-grave.svg";
import frLowercaseECircumflex from "./lowercase/e-circumflex.svg";
import frLowercaseEDiaeresis from "./lowercase/e-diaeresis.svg";
import frLowercaseICircumflex from "./lowercase/i-circumflex.svg";
import frLowercaseIDiaeresis from "./lowercase/i-diaeresis.svg";
import frLowercaseOCircumflex from "./lowercase/o-circumflex.svg";
import frLowercaseUGrave from "./lowercase/u-grave.svg";
import frLowercaseUCircumflex from "./lowercase/u-circumflex.svg";
import frLowercaseUDiaeresis from "./lowercase/u-diaeresis.svg";
import frLowercaseOeLigature from "./lowercase/oe-ligature.svg";

import { GlyphAsset, WritingTemplate } from "@/types/writing";

const FR_GLYPH_ASSETS: Record<string, GlyphAsset> = {
  "fr-a": frUppercaseA,
  "fr-b": frUppercaseB,
  "fr-c": frUppercaseC,
  "fr-d": frUppercaseD,
  "fr-e": frUppercaseE,
  "fr-f": frUppercaseF,
  "fr-g": frUppercaseG,
  "fr-h": frUppercaseH,
  "fr-i": frUppercaseI,
  "fr-j": frUppercaseJ,
  "fr-k": frUppercaseK,
  "fr-l": frUppercaseL,
  "fr-m": frUppercaseM,
  "fr-n": frUppercaseN,
  "fr-o": frUppercaseO,
  "fr-p": frUppercaseP,
  "fr-q": frUppercaseQ,
  "fr-r": frUppercaseR,
  "fr-s": frUppercaseS,
  "fr-t": frUppercaseT,
  "fr-u": frUppercaseU,
  "fr-v": frUppercaseV,
  "fr-w": frUppercaseW,
  "fr-x": frUppercaseX,
  "fr-y": frUppercaseY,
  "fr-z": frUppercaseZ,
  "fr-uppercase-a-grave": frUppercaseAGrave,
  "fr-uppercase-a-circumflex": frUppercaseACircumflex,
  "fr-uppercase-c-cedilla": frUppercaseCCedilla,
  "fr-uppercase-e-acute": frUppercaseEAcute,
  "fr-uppercase-e-grave": frUppercaseEGrave,
  "fr-uppercase-e-circumflex": frUppercaseECircumflex,
  "fr-uppercase-e-diaeresis": frUppercaseEDiaeresis,
  "fr-uppercase-i-circumflex": frUppercaseICircumflex,
  "fr-uppercase-i-diaeresis": frUppercaseIDiaeresis,
  "fr-uppercase-o-circumflex": frUppercaseOCircumflex,
  "fr-uppercase-u-grave": frUppercaseUGrave,
  "fr-uppercase-u-circumflex": frUppercaseUCircumflex,
  "fr-uppercase-u-diaeresis": frUppercaseUDiaeresis,
  "fr-uppercase-oe-ligature": frUppercaseOeLigature,
  "fr-lower-a": frLowercaseA,
  "fr-lower-b": frLowercaseB,
  "fr-lower-c": frLowercaseC,
  "fr-lower-d": frLowercaseD,
  "fr-lower-e": frLowercaseE,
  "fr-lower-f": frLowercaseF,
  "fr-lower-g": frLowercaseG,
  "fr-lower-h": frLowercaseH,
  "fr-lower-i": frLowercaseI,
  "fr-lower-j": frLowercaseJ,
  "fr-lower-k": frLowercaseK,
  "fr-lower-l": frLowercaseL,
  "fr-lower-m": frLowercaseM,
  "fr-lower-n": frLowercaseN,
  "fr-lower-o": frLowercaseO,
  "fr-lower-p": frLowercaseP,
  "fr-lower-q": frLowercaseQ,
  "fr-lower-r": frLowercaseR,
  "fr-lower-s": frLowercaseS,
  "fr-lower-t": frLowercaseT,
  "fr-lower-u": frLowercaseU,
  "fr-lower-v": frLowercaseV,
  "fr-lower-w": frLowercaseW,
  "fr-lower-x": frLowercaseX,
  "fr-lower-y": frLowercaseY,
  "fr-lower-z": frLowercaseZ,
  "fr-lowercase-a-grave": frLowercaseAGrave,
  "fr-lowercase-a-circumflex": frLowercaseACircumflex,
  "fr-lowercase-c-cedilla": frLowercaseCCedilla,
  "fr-lowercase-e-acute": frLowercaseEAcute,
  "fr-lowercase-e-grave": frLowercaseEGrave,
  "fr-lowercase-e-circumflex": frLowercaseECircumflex,
  "fr-lowercase-e-diaeresis": frLowercaseEDiaeresis,
  "fr-lowercase-i-circumflex": frLowercaseICircumflex,
  "fr-lowercase-i-diaeresis": frLowercaseIDiaeresis,
  "fr-lowercase-o-circumflex": frLowercaseOCircumflex,
  "fr-lowercase-u-grave": frLowercaseUGrave,
  "fr-lowercase-u-circumflex": frLowercaseUCircumflex,
  "fr-lowercase-u-diaeresis": frLowercaseUDiaeresis,
  "fr-lowercase-oe-ligature": frLowercaseOeLigature,
};

export function applyFrenchGlyphAssets(templates: WritingTemplate[]): WritingTemplate[] {
  return templates.map((template) => {
    const glyphAsset = FR_GLYPH_ASSETS[template.id];

    if (!glyphAsset) {
      return template;
    }

    return {
      ...template,
      glyphAsset,
    };
  });
}
