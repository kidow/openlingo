import esUppercaseA from "./uppercase/a.svg";
import esUppercaseB from "./uppercase/b.svg";
import esUppercaseC from "./uppercase/c.svg";
import esUppercaseD from "./uppercase/d.svg";
import esUppercaseE from "./uppercase/e.svg";
import esUppercaseF from "./uppercase/f.svg";
import esUppercaseG from "./uppercase/g.svg";
import esUppercaseH from "./uppercase/h.svg";
import esUppercaseI from "./uppercase/i.svg";
import esUppercaseJ from "./uppercase/j.svg";
import esUppercaseK from "./uppercase/k.svg";
import esUppercaseL from "./uppercase/l.svg";
import esUppercaseM from "./uppercase/m.svg";
import esUppercaseN from "./uppercase/n.svg";
import esUppercaseO from "./uppercase/o.svg";
import esUppercaseP from "./uppercase/p.svg";
import esUppercaseQ from "./uppercase/q.svg";
import esUppercaseR from "./uppercase/r.svg";
import esUppercaseS from "./uppercase/s.svg";
import esUppercaseT from "./uppercase/t.svg";
import esUppercaseU from "./uppercase/u.svg";
import esUppercaseV from "./uppercase/v.svg";
import esUppercaseW from "./uppercase/w.svg";
import esUppercaseX from "./uppercase/x.svg";
import esUppercaseY from "./uppercase/y.svg";
import esUppercaseZ from "./uppercase/z.svg";
import esUppercaseEnye from "./uppercase/enye.svg";
import esLowercaseA from "./lowercase/a.svg";
import esLowercaseB from "./lowercase/b.svg";
import esLowercaseC from "./lowercase/c.svg";
import esLowercaseD from "./lowercase/d.svg";
import esLowercaseE from "./lowercase/e.svg";
import esLowercaseF from "./lowercase/f.svg";
import esLowercaseG from "./lowercase/g.svg";
import esLowercaseH from "./lowercase/h.svg";
import esLowercaseI from "./lowercase/i.svg";
import esLowercaseJ from "./lowercase/j.svg";
import esLowercaseK from "./lowercase/k.svg";
import esLowercaseL from "./lowercase/l.svg";
import esLowercaseM from "./lowercase/m.svg";
import esLowercaseN from "./lowercase/n.svg";
import esLowercaseO from "./lowercase/o.svg";
import esLowercaseP from "./lowercase/p.svg";
import esLowercaseQ from "./lowercase/q.svg";
import esLowercaseR from "./lowercase/r.svg";
import esLowercaseS from "./lowercase/s.svg";
import esLowercaseT from "./lowercase/t.svg";
import esLowercaseU from "./lowercase/u.svg";
import esLowercaseV from "./lowercase/v.svg";
import esLowercaseW from "./lowercase/w.svg";
import esLowercaseX from "./lowercase/x.svg";
import esLowercaseY from "./lowercase/y.svg";
import esLowercaseZ from "./lowercase/z.svg";
import esLowercaseEnye from "./lowercase/enye.svg";

import { GlyphAsset, WritingTemplate } from "@/types/writing";

const ES_GLYPH_ASSETS: Record<string, GlyphAsset> = {
  "es-a": esUppercaseA,
  "es-b": esUppercaseB,
  "es-c": esUppercaseC,
  "es-d": esUppercaseD,
  "es-e": esUppercaseE,
  "es-f": esUppercaseF,
  "es-g": esUppercaseG,
  "es-h": esUppercaseH,
  "es-i": esUppercaseI,
  "es-j": esUppercaseJ,
  "es-k": esUppercaseK,
  "es-l": esUppercaseL,
  "es-m": esUppercaseM,
  "es-n": esUppercaseN,
  "es-o": esUppercaseO,
  "es-p": esUppercaseP,
  "es-q": esUppercaseQ,
  "es-r": esUppercaseR,
  "es-s": esUppercaseS,
  "es-t": esUppercaseT,
  "es-u": esUppercaseU,
  "es-v": esUppercaseV,
  "es-w": esUppercaseW,
  "es-x": esUppercaseX,
  "es-y": esUppercaseY,
  "es-z": esUppercaseZ,
  "es-uppercase-enye": esUppercaseEnye,
  "es-lower-a": esLowercaseA,
  "es-lower-b": esLowercaseB,
  "es-lower-c": esLowercaseC,
  "es-lower-d": esLowercaseD,
  "es-lower-e": esLowercaseE,
  "es-lower-f": esLowercaseF,
  "es-lower-g": esLowercaseG,
  "es-lower-h": esLowercaseH,
  "es-lower-i": esLowercaseI,
  "es-lower-j": esLowercaseJ,
  "es-lower-k": esLowercaseK,
  "es-lower-l": esLowercaseL,
  "es-lower-m": esLowercaseM,
  "es-lower-n": esLowercaseN,
  "es-lower-o": esLowercaseO,
  "es-lower-p": esLowercaseP,
  "es-lower-q": esLowercaseQ,
  "es-lower-r": esLowercaseR,
  "es-lower-s": esLowercaseS,
  "es-lower-t": esLowercaseT,
  "es-lower-u": esLowercaseU,
  "es-lower-v": esLowercaseV,
  "es-lower-w": esLowercaseW,
  "es-lower-x": esLowercaseX,
  "es-lower-y": esLowercaseY,
  "es-lower-z": esLowercaseZ,
  "es-lowercase-enye": esLowercaseEnye,
};

export function applySpanishGlyphAssets(templates: WritingTemplate[]): WritingTemplate[] {
  return templates.map((template) => {
    const glyphAsset = ES_GLYPH_ASSETS[template.id];

    if (!glyphAsset) {
      return template;
    }

    return {
      ...template,
      glyphAsset,
    };
  });
}
