import itUppercaseA from "./uppercase/a.svg";
import itUppercaseB from "./uppercase/b.svg";
import itUppercaseC from "./uppercase/c.svg";
import itUppercaseD from "./uppercase/d.svg";
import itUppercaseE from "./uppercase/e.svg";
import itUppercaseF from "./uppercase/f.svg";
import itUppercaseG from "./uppercase/g.svg";
import itUppercaseH from "./uppercase/h.svg";
import itUppercaseI from "./uppercase/i.svg";
import itUppercaseJ from "./uppercase/j.svg";
import itUppercaseK from "./uppercase/k.svg";
import itUppercaseL from "./uppercase/l.svg";
import itUppercaseM from "./uppercase/m.svg";
import itUppercaseN from "./uppercase/n.svg";
import itUppercaseO from "./uppercase/o.svg";
import itUppercaseOAcute from "./uppercase/o-acute.svg";
import itUppercaseOGrave from "./uppercase/o-grave.svg";
import itUppercaseP from "./uppercase/p.svg";
import itUppercaseQ from "./uppercase/q.svg";
import itUppercaseR from "./uppercase/r.svg";
import itUppercaseS from "./uppercase/s.svg";
import itUppercaseT from "./uppercase/t.svg";
import itUppercaseU from "./uppercase/u.svg";
import itUppercaseUGrave from "./uppercase/u-grave.svg";
import itUppercaseV from "./uppercase/v.svg";
import itUppercaseW from "./uppercase/w.svg";
import itUppercaseX from "./uppercase/x.svg";
import itUppercaseY from "./uppercase/y.svg";
import itUppercaseZ from "./uppercase/z.svg";
import itUppercaseAGrave from "./uppercase/a-grave.svg";
import itUppercaseEAcute from "./uppercase/e-acute.svg";
import itUppercaseEGrave from "./uppercase/e-grave.svg";
import itUppercaseIGrave from "./uppercase/i-grave.svg";
import itLowercaseA from "./lowercase/a.svg";
import itLowercaseB from "./lowercase/b.svg";
import itLowercaseC from "./lowercase/c.svg";
import itLowercaseD from "./lowercase/d.svg";
import itLowercaseE from "./lowercase/e.svg";
import itLowercaseF from "./lowercase/f.svg";
import itLowercaseG from "./lowercase/g.svg";
import itLowercaseH from "./lowercase/h.svg";
import itLowercaseI from "./lowercase/i.svg";
import itLowercaseJ from "./lowercase/j.svg";
import itLowercaseK from "./lowercase/k.svg";
import itLowercaseL from "./lowercase/l.svg";
import itLowercaseM from "./lowercase/m.svg";
import itLowercaseN from "./lowercase/n.svg";
import itLowercaseO from "./lowercase/o.svg";
import itLowercaseOAcute from "./lowercase/o-acute.svg";
import itLowercaseOGrave from "./lowercase/o-grave.svg";
import itLowercaseP from "./lowercase/p.svg";
import itLowercaseQ from "./lowercase/q.svg";
import itLowercaseR from "./lowercase/r.svg";
import itLowercaseS from "./lowercase/s.svg";
import itLowercaseT from "./lowercase/t.svg";
import itLowercaseU from "./lowercase/u.svg";
import itLowercaseUGrave from "./lowercase/u-grave.svg";
import itLowercaseV from "./lowercase/v.svg";
import itLowercaseW from "./lowercase/w.svg";
import itLowercaseX from "./lowercase/x.svg";
import itLowercaseY from "./lowercase/y.svg";
import itLowercaseZ from "./lowercase/z.svg";
import itLowercaseAGrave from "./lowercase/a-grave.svg";
import itLowercaseEAcute from "./lowercase/e-acute.svg";
import itLowercaseEGrave from "./lowercase/e-grave.svg";
import itLowercaseIGrave from "./lowercase/i-grave.svg";

import { GlyphAsset, WritingTemplate } from "@/types/writing";

const IT_GLYPH_ASSETS: Record<string, GlyphAsset> = {
  "it-a": itUppercaseA,
  "it-b": itUppercaseB,
  "it-c": itUppercaseC,
  "it-d": itUppercaseD,
  "it-e": itUppercaseE,
  "it-f": itUppercaseF,
  "it-g": itUppercaseG,
  "it-h": itUppercaseH,
  "it-i": itUppercaseI,
  "it-j": itUppercaseJ,
  "it-k": itUppercaseK,
  "it-l": itUppercaseL,
  "it-m": itUppercaseM,
  "it-n": itUppercaseN,
  "it-o": itUppercaseO,
  "it-o-acute": itUppercaseOAcute,
  "it-o-grave": itUppercaseOGrave,
  "it-p": itUppercaseP,
  "it-q": itUppercaseQ,
  "it-r": itUppercaseR,
  "it-s": itUppercaseS,
  "it-t": itUppercaseT,
  "it-u": itUppercaseU,
  "it-u-grave": itUppercaseUGrave,
  "it-v": itUppercaseV,
  "it-w": itUppercaseW,
  "it-x": itUppercaseX,
  "it-y": itUppercaseY,
  "it-z": itUppercaseZ,
  "it-uppercase-a-grave": itUppercaseAGrave,
  "it-uppercase-e-acute": itUppercaseEAcute,
  "it-uppercase-e-grave": itUppercaseEGrave,
  "it-uppercase-i-grave": itUppercaseIGrave,
  "it-lower-a": itLowercaseA,
  "it-lower-b": itLowercaseB,
  "it-lower-c": itLowercaseC,
  "it-lower-d": itLowercaseD,
  "it-lower-e": itLowercaseE,
  "it-lower-f": itLowercaseF,
  "it-lower-g": itLowercaseG,
  "it-lower-h": itLowercaseH,
  "it-lower-i": itLowercaseI,
  "it-lower-j": itLowercaseJ,
  "it-lower-k": itLowercaseK,
  "it-lower-l": itLowercaseL,
  "it-lower-m": itLowercaseM,
  "it-lower-n": itLowercaseN,
  "it-lower-o": itLowercaseO,
  "it-lower-o-acute": itLowercaseOAcute,
  "it-lower-o-grave": itLowercaseOGrave,
  "it-lower-p": itLowercaseP,
  "it-lower-q": itLowercaseQ,
  "it-lower-r": itLowercaseR,
  "it-lower-s": itLowercaseS,
  "it-lower-t": itLowercaseT,
  "it-lower-u": itLowercaseU,
  "it-lower-u-grave": itLowercaseUGrave,
  "it-lower-v": itLowercaseV,
  "it-lower-w": itLowercaseW,
  "it-lower-x": itLowercaseX,
  "it-lower-y": itLowercaseY,
  "it-lower-z": itLowercaseZ,
  "it-lowercase-a-grave": itLowercaseAGrave,
  "it-lowercase-e-acute": itLowercaseEAcute,
  "it-lowercase-e-grave": itLowercaseEGrave,
  "it-lowercase-i-grave": itLowercaseIGrave,
};

export function applyItalianGlyphAssets(templates: WritingTemplate[]): WritingTemplate[] {
  return templates.map((template) => {
    const glyphAsset = IT_GLYPH_ASSETS[template.id];

    if (!glyphAsset) {
      return template;
    }

    return {
      ...template,
      glyphAsset,
    };
  });
}
