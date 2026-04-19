import ptUppercaseA from "./uppercase/a.svg";
import ptUppercaseB from "./uppercase/b.svg";
import ptUppercaseC from "./uppercase/c.svg";
import ptUppercaseD from "./uppercase/d.svg";
import ptUppercaseE from "./uppercase/e.svg";
import ptUppercaseF from "./uppercase/f.svg";
import ptUppercaseG from "./uppercase/g.svg";
import ptUppercaseH from "./uppercase/h.svg";
import ptUppercaseI from "./uppercase/i.svg";
import ptUppercaseJ from "./uppercase/j.svg";
import ptUppercaseK from "./uppercase/k.svg";
import ptUppercaseL from "./uppercase/l.svg";
import ptUppercaseM from "./uppercase/m.svg";
import ptUppercaseN from "./uppercase/n.svg";
import ptUppercaseO from "./uppercase/o.svg";
import ptUppercaseP from "./uppercase/p.svg";
import ptUppercaseQ from "./uppercase/q.svg";
import ptUppercaseR from "./uppercase/r.svg";
import ptUppercaseS from "./uppercase/s.svg";
import ptUppercaseT from "./uppercase/t.svg";
import ptUppercaseU from "./uppercase/u.svg";
import ptUppercaseV from "./uppercase/v.svg";
import ptUppercaseW from "./uppercase/w.svg";
import ptUppercaseX from "./uppercase/x.svg";
import ptUppercaseY from "./uppercase/y.svg";
import ptUppercaseZ from "./uppercase/z.svg";
import ptUppercaseAGrave from "./uppercase/a-grave.svg";
import ptUppercaseAAcute from "./uppercase/a-acute.svg";
import ptUppercaseACircumflex from "./uppercase/a-circumflex.svg";
import ptUppercaseATilde from "./uppercase/a-tilde.svg";
import ptUppercaseCCedilla from "./uppercase/c-cedilla.svg";
import ptUppercaseEAcute from "./uppercase/e-acute.svg";
import ptUppercaseECircumflex from "./uppercase/e-circumflex.svg";
import ptUppercaseIAcute from "./uppercase/i-acute.svg";
import ptUppercaseOAcute from "./uppercase/o-acute.svg";
import ptUppercaseOCircumflex from "./uppercase/o-circumflex.svg";
import ptUppercaseOTilde from "./uppercase/o-tilde.svg";
import ptUppercaseUAcute from "./uppercase/u-acute.svg";
import ptUppercaseUDiaeresis from "./uppercase/u-diaeresis.svg";
import ptLowercaseA from "./lowercase/a.svg";
import ptLowercaseB from "./lowercase/b.svg";
import ptLowercaseC from "./lowercase/c.svg";
import ptLowercaseD from "./lowercase/d.svg";
import ptLowercaseE from "./lowercase/e.svg";
import ptLowercaseF from "./lowercase/f.svg";
import ptLowercaseG from "./lowercase/g.svg";
import ptLowercaseH from "./lowercase/h.svg";
import ptLowercaseI from "./lowercase/i.svg";
import ptLowercaseJ from "./lowercase/j.svg";
import ptLowercaseK from "./lowercase/k.svg";
import ptLowercaseL from "./lowercase/l.svg";
import ptLowercaseM from "./lowercase/m.svg";
import ptLowercaseN from "./lowercase/n.svg";
import ptLowercaseO from "./lowercase/o.svg";
import ptLowercaseP from "./lowercase/p.svg";
import ptLowercaseQ from "./lowercase/q.svg";
import ptLowercaseR from "./lowercase/r.svg";
import ptLowercaseS from "./lowercase/s.svg";
import ptLowercaseT from "./lowercase/t.svg";
import ptLowercaseU from "./lowercase/u.svg";
import ptLowercaseV from "./lowercase/v.svg";
import ptLowercaseW from "./lowercase/w.svg";
import ptLowercaseX from "./lowercase/x.svg";
import ptLowercaseY from "./lowercase/y.svg";
import ptLowercaseZ from "./lowercase/z.svg";
import ptLowercaseAGrave from "./lowercase/a-grave.svg";
import ptLowercaseAAcute from "./lowercase/a-acute.svg";
import ptLowercaseACircumflex from "./lowercase/a-circumflex.svg";
import ptLowercaseATilde from "./lowercase/a-tilde.svg";
import ptLowercaseCCedilla from "./lowercase/c-cedilla.svg";
import ptLowercaseEAcute from "./lowercase/e-acute.svg";
import ptLowercaseECircumflex from "./lowercase/e-circumflex.svg";
import ptLowercaseIAcute from "./lowercase/i-acute.svg";
import ptLowercaseOAcute from "./lowercase/o-acute.svg";
import ptLowercaseOCircumflex from "./lowercase/o-circumflex.svg";
import ptLowercaseOTilde from "./lowercase/o-tilde.svg";
import ptLowercaseUAcute from "./lowercase/u-acute.svg";
import ptLowercaseUDiaeresis from "./lowercase/u-diaeresis.svg";

import { GlyphAsset, WritingTemplate } from "@/types/writing";

const PT_GLYPH_ASSETS: Record<string, GlyphAsset> = {
  "pt-a": ptUppercaseA,
  "pt-b": ptUppercaseB,
  "pt-c": ptUppercaseC,
  "pt-d": ptUppercaseD,
  "pt-e": ptUppercaseE,
  "pt-f": ptUppercaseF,
  "pt-g": ptUppercaseG,
  "pt-h": ptUppercaseH,
  "pt-i": ptUppercaseI,
  "pt-j": ptUppercaseJ,
  "pt-k": ptUppercaseK,
  "pt-l": ptUppercaseL,
  "pt-m": ptUppercaseM,
  "pt-n": ptUppercaseN,
  "pt-o": ptUppercaseO,
  "pt-p": ptUppercaseP,
  "pt-q": ptUppercaseQ,
  "pt-r": ptUppercaseR,
  "pt-s": ptUppercaseS,
  "pt-t": ptUppercaseT,
  "pt-u": ptUppercaseU,
  "pt-v": ptUppercaseV,
  "pt-w": ptUppercaseW,
  "pt-x": ptUppercaseX,
  "pt-y": ptUppercaseY,
  "pt-z": ptUppercaseZ,
  "pt-uppercase-a-grave": ptUppercaseAGrave,
  "pt-uppercase-a-acute": ptUppercaseAAcute,
  "pt-uppercase-a-circumflex": ptUppercaseACircumflex,
  "pt-uppercase-a-tilde": ptUppercaseATilde,
  "pt-uppercase-c-cedilla": ptUppercaseCCedilla,
  "pt-uppercase-e-acute": ptUppercaseEAcute,
  "pt-uppercase-e-circumflex": ptUppercaseECircumflex,
  "pt-uppercase-i-acute": ptUppercaseIAcute,
  "pt-uppercase-o-acute": ptUppercaseOAcute,
  "pt-uppercase-o-circumflex": ptUppercaseOCircumflex,
  "pt-uppercase-o-tilde": ptUppercaseOTilde,
  "pt-uppercase-u-acute": ptUppercaseUAcute,
  "pt-uppercase-u-diaeresis": ptUppercaseUDiaeresis,
  "pt-lower-a": ptLowercaseA,
  "pt-lower-b": ptLowercaseB,
  "pt-lower-c": ptLowercaseC,
  "pt-lower-d": ptLowercaseD,
  "pt-lower-e": ptLowercaseE,
  "pt-lower-f": ptLowercaseF,
  "pt-lower-g": ptLowercaseG,
  "pt-lower-h": ptLowercaseH,
  "pt-lower-i": ptLowercaseI,
  "pt-lower-j": ptLowercaseJ,
  "pt-lower-k": ptLowercaseK,
  "pt-lower-l": ptLowercaseL,
  "pt-lower-m": ptLowercaseM,
  "pt-lower-n": ptLowercaseN,
  "pt-lower-o": ptLowercaseO,
  "pt-lower-p": ptLowercaseP,
  "pt-lower-q": ptLowercaseQ,
  "pt-lower-r": ptLowercaseR,
  "pt-lower-s": ptLowercaseS,
  "pt-lower-t": ptLowercaseT,
  "pt-lower-u": ptLowercaseU,
  "pt-lower-v": ptLowercaseV,
  "pt-lower-w": ptLowercaseW,
  "pt-lower-x": ptLowercaseX,
  "pt-lower-y": ptLowercaseY,
  "pt-lower-z": ptLowercaseZ,
  "pt-lowercase-a-grave": ptLowercaseAGrave,
  "pt-lowercase-a-acute": ptLowercaseAAcute,
  "pt-lowercase-a-circumflex": ptLowercaseACircumflex,
  "pt-lowercase-a-tilde": ptLowercaseATilde,
  "pt-lowercase-c-cedilla": ptLowercaseCCedilla,
  "pt-lowercase-e-acute": ptLowercaseEAcute,
  "pt-lowercase-e-circumflex": ptLowercaseECircumflex,
  "pt-lowercase-i-acute": ptLowercaseIAcute,
  "pt-lowercase-o-acute": ptLowercaseOAcute,
  "pt-lowercase-o-circumflex": ptLowercaseOCircumflex,
  "pt-lowercase-o-tilde": ptLowercaseOTilde,
  "pt-lowercase-u-acute": ptLowercaseUAcute,
  "pt-lowercase-u-diaeresis": ptLowercaseUDiaeresis,
};

export function applyPortugueseGlyphAssets(templates: WritingTemplate[]): WritingTemplate[] {
  return templates.map((template) => {
    const glyphAsset = PT_GLYPH_ASSETS[template.id];

    if (!glyphAsset) {
      return template;
    }

    return {
      ...template,
      glyphAsset,
    };
  });
}
