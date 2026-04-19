import enUppercaseA from "./uppercase/a.svg";
import enUppercaseB from "./uppercase/b.svg";
import enUppercaseC from "./uppercase/c.svg";
import enUppercaseD from "./uppercase/d.svg";
import enUppercaseE from "./uppercase/e.svg";
import enUppercaseF from "./uppercase/f.svg";
import enUppercaseG from "./uppercase/g.svg";
import enUppercaseH from "./uppercase/h.svg";
import enUppercaseI from "./uppercase/i.svg";
import enUppercaseJ from "./uppercase/j.svg";
import enUppercaseK from "./uppercase/k.svg";
import enUppercaseL from "./uppercase/l.svg";
import enUppercaseM from "./uppercase/m.svg";
import enUppercaseN from "./uppercase/n.svg";
import enUppercaseO from "./uppercase/o.svg";
import enUppercaseP from "./uppercase/p.svg";
import enUppercaseQ from "./uppercase/q.svg";
import enUppercaseR from "./uppercase/r.svg";
import enUppercaseS from "./uppercase/s.svg";
import enUppercaseT from "./uppercase/t.svg";
import enUppercaseU from "./uppercase/u.svg";
import enUppercaseV from "./uppercase/v.svg";
import enUppercaseW from "./uppercase/w.svg";
import enUppercaseX from "./uppercase/x.svg";
import enUppercaseY from "./uppercase/y.svg";
import enUppercaseZ from "./uppercase/z.svg";
import enLowercaseA from "./lowercase/a.svg";
import enLowercaseB from "./lowercase/b.svg";
import enLowercaseC from "./lowercase/c.svg";
import enLowercaseD from "./lowercase/d.svg";
import enLowercaseE from "./lowercase/e.svg";
import enLowercaseF from "./lowercase/f.svg";
import enLowercaseG from "./lowercase/g.svg";
import enLowercaseH from "./lowercase/h.svg";
import enLowercaseI from "./lowercase/i.svg";
import enLowercaseJ from "./lowercase/j.svg";
import enLowercaseK from "./lowercase/k.svg";
import enLowercaseL from "./lowercase/l.svg";
import enLowercaseM from "./lowercase/m.svg";
import enLowercaseN from "./lowercase/n.svg";
import enLowercaseO from "./lowercase/o.svg";
import enLowercaseP from "./lowercase/p.svg";
import enLowercaseQ from "./lowercase/q.svg";
import enLowercaseR from "./lowercase/r.svg";
import enLowercaseS from "./lowercase/s.svg";
import enLowercaseT from "./lowercase/t.svg";
import enLowercaseU from "./lowercase/u.svg";
import enLowercaseV from "./lowercase/v.svg";
import enLowercaseW from "./lowercase/w.svg";
import enLowercaseX from "./lowercase/x.svg";
import enLowercaseY from "./lowercase/y.svg";
import enLowercaseZ from "./lowercase/z.svg";

import { GlyphAsset, WritingTemplate } from "@/types/writing";

const EN_GLYPH_ASSETS: Record<string, GlyphAsset> = {
  "en-a": enUppercaseA,
  "en-b": enUppercaseB,
  "en-c": enUppercaseC,
  "en-d": enUppercaseD,
  "en-e": enUppercaseE,
  "en-f": enUppercaseF,
  "en-g": enUppercaseG,
  "en-h": enUppercaseH,
  "en-i": enUppercaseI,
  "en-j": enUppercaseJ,
  "en-k": enUppercaseK,
  "en-l": enUppercaseL,
  "en-m": enUppercaseM,
  "en-n": enUppercaseN,
  "en-o": enUppercaseO,
  "en-p": enUppercaseP,
  "en-q": enUppercaseQ,
  "en-r": enUppercaseR,
  "en-s": enUppercaseS,
  "en-t": enUppercaseT,
  "en-u": enUppercaseU,
  "en-v": enUppercaseV,
  "en-w": enUppercaseW,
  "en-x": enUppercaseX,
  "en-y": enUppercaseY,
  "en-z": enUppercaseZ,
  "en-lower-a": enLowercaseA,
  "en-lower-b": enLowercaseB,
  "en-lower-c": enLowercaseC,
  "en-lower-d": enLowercaseD,
  "en-lower-e": enLowercaseE,
  "en-lower-f": enLowercaseF,
  "en-lower-g": enLowercaseG,
  "en-lower-h": enLowercaseH,
  "en-lower-i": enLowercaseI,
  "en-lower-j": enLowercaseJ,
  "en-lower-k": enLowercaseK,
  "en-lower-l": enLowercaseL,
  "en-lower-m": enLowercaseM,
  "en-lower-n": enLowercaseN,
  "en-lower-o": enLowercaseO,
  "en-lower-p": enLowercaseP,
  "en-lower-q": enLowercaseQ,
  "en-lower-r": enLowercaseR,
  "en-lower-s": enLowercaseS,
  "en-lower-t": enLowercaseT,
  "en-lower-u": enLowercaseU,
  "en-lower-v": enLowercaseV,
  "en-lower-w": enLowercaseW,
  "en-lower-x": enLowercaseX,
  "en-lower-y": enLowercaseY,
  "en-lower-z": enLowercaseZ,
};

export function applyEnglishGlyphAssets(templates: WritingTemplate[]): WritingTemplate[] {
  return templates.map((template) => {
    const glyphAsset = EN_GLYPH_ASSETS[template.id];

    if (!glyphAsset) {
      return template;
    }

    return {
      ...template,
      glyphAsset,
    };
  });
}
