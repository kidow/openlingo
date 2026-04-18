import deUppercaseA from "./uppercase/a.svg";
import deUppercaseB from "./uppercase/b.svg";
import deUppercaseC from "./uppercase/c.svg";
import deUppercaseD from "./uppercase/d.svg";
import deUppercaseE from "./uppercase/e.svg";
import deUppercaseF from "./uppercase/f.svg";
import deUppercaseG from "./uppercase/g.svg";
import deUppercaseH from "./uppercase/h.svg";
import deUppercaseI from "./uppercase/i.svg";
import deUppercaseJ from "./uppercase/j.svg";
import deUppercaseK from "./uppercase/k.svg";
import deUppercaseL from "./uppercase/l.svg";
import deUppercaseM from "./uppercase/m.svg";
import deUppercaseN from "./uppercase/n.svg";
import deUppercaseO from "./uppercase/o.svg";
import deUppercaseOUmlaut from "./uppercase/o-umlaut.svg";
import deUppercaseP from "./uppercase/p.svg";
import deUppercaseQ from "./uppercase/q.svg";
import deUppercaseR from "./uppercase/r.svg";
import deUppercaseS from "./uppercase/s.svg";
import deUppercaseT from "./uppercase/t.svg";
import deUppercaseU from "./uppercase/u.svg";
import deUppercaseUUmlaut from "./uppercase/u-umlaut.svg";
import deUppercaseV from "./uppercase/v.svg";
import deUppercaseW from "./uppercase/w.svg";
import deUppercaseX from "./uppercase/x.svg";
import deUppercaseY from "./uppercase/y.svg";
import deUppercaseZ from "./uppercase/z.svg";
import deUppercaseAUmlaut from "./uppercase/a-umlaut.svg";
import deUppercaseEszett from "./uppercase/eszett.svg";
import deLowercaseA from "./lowercase/a.svg";
import deLowercaseB from "./lowercase/b.svg";
import deLowercaseC from "./lowercase/c.svg";
import deLowercaseD from "./lowercase/d.svg";
import deLowercaseE from "./lowercase/e.svg";
import deLowercaseF from "./lowercase/f.svg";
import deLowercaseG from "./lowercase/g.svg";
import deLowercaseH from "./lowercase/h.svg";
import deLowercaseI from "./lowercase/i.svg";
import deLowercaseJ from "./lowercase/j.svg";
import deLowercaseK from "./lowercase/k.svg";
import deLowercaseL from "./lowercase/l.svg";
import deLowercaseM from "./lowercase/m.svg";
import deLowercaseN from "./lowercase/n.svg";
import deLowercaseO from "./lowercase/o.svg";
import deLowercaseOUmlaut from "./lowercase/o-umlaut.svg";
import deLowercaseP from "./lowercase/p.svg";
import deLowercaseQ from "./lowercase/q.svg";
import deLowercaseR from "./lowercase/r.svg";
import deLowercaseS from "./lowercase/s.svg";
import deLowercaseT from "./lowercase/t.svg";
import deLowercaseU from "./lowercase/u.svg";
import deLowercaseUUmlaut from "./lowercase/u-umlaut.svg";
import deLowercaseV from "./lowercase/v.svg";
import deLowercaseW from "./lowercase/w.svg";
import deLowercaseX from "./lowercase/x.svg";
import deLowercaseY from "./lowercase/y.svg";
import deLowercaseZ from "./lowercase/z.svg";
import deLowercaseAUmlaut from "./lowercase/a-umlaut.svg";
import deLowercaseEszett from "./lowercase/eszett.svg";

import { GlyphAsset, WritingTemplate } from "@/types/writing";

const DE_GLYPH_ASSETS: Record<string, GlyphAsset> = {
  "de-a": deUppercaseA,
  "de-b": deUppercaseB,
  "de-c": deUppercaseC,
  "de-d": deUppercaseD,
  "de-e": deUppercaseE,
  "de-f": deUppercaseF,
  "de-g": deUppercaseG,
  "de-h": deUppercaseH,
  "de-i": deUppercaseI,
  "de-j": deUppercaseJ,
  "de-k": deUppercaseK,
  "de-l": deUppercaseL,
  "de-m": deUppercaseM,
  "de-n": deUppercaseN,
  "de-o": deUppercaseO,
  "de-o-umlaut": deUppercaseOUmlaut,
  "de-p": deUppercaseP,
  "de-q": deUppercaseQ,
  "de-r": deUppercaseR,
  "de-s": deUppercaseS,
  "de-t": deUppercaseT,
  "de-u": deUppercaseU,
  "de-u-umlaut": deUppercaseUUmlaut,
  "de-v": deUppercaseV,
  "de-w": deUppercaseW,
  "de-x": deUppercaseX,
  "de-y": deUppercaseY,
  "de-z": deUppercaseZ,
  "de-uppercase-a-umlaut": deUppercaseAUmlaut,
  "de-uppercase-eszett": deUppercaseEszett,
  "de-lower-a": deLowercaseA,
  "de-lower-b": deLowercaseB,
  "de-lower-c": deLowercaseC,
  "de-lower-d": deLowercaseD,
  "de-lower-e": deLowercaseE,
  "de-lower-f": deLowercaseF,
  "de-lower-g": deLowercaseG,
  "de-lower-h": deLowercaseH,
  "de-lower-i": deLowercaseI,
  "de-lower-j": deLowercaseJ,
  "de-lower-k": deLowercaseK,
  "de-lower-l": deLowercaseL,
  "de-lower-m": deLowercaseM,
  "de-lower-n": deLowercaseN,
  "de-lower-o": deLowercaseO,
  "de-lower-o-umlaut": deLowercaseOUmlaut,
  "de-lower-p": deLowercaseP,
  "de-lower-q": deLowercaseQ,
  "de-lower-r": deLowercaseR,
  "de-lower-s": deLowercaseS,
  "de-lower-t": deLowercaseT,
  "de-lower-u": deLowercaseU,
  "de-lower-u-umlaut": deLowercaseUUmlaut,
  "de-lower-v": deLowercaseV,
  "de-lower-w": deLowercaseW,
  "de-lower-x": deLowercaseX,
  "de-lower-y": deLowercaseY,
  "de-lower-z": deLowercaseZ,
  "de-lower-a-umlaut": deLowercaseAUmlaut,
  "de-lower-eszett": deLowercaseEszett,
};

export function applyGermanGlyphAssets(templates: WritingTemplate[]): WritingTemplate[] {
  return templates.map((template) => {
    const glyphAsset = DE_GLYPH_ASSETS[template.id];

    if (!glyphAsset) {
      return template;
    }

    return {
      ...template,
      glyphAsset,
    };
  });
}
