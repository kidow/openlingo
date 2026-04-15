import hiraganaA from "./a.svg";
import hiraganaI from "./i.svg";
import hiraganaU from "./u.svg";
import hiraganaE from "./e.svg";
import hiraganaO from "./o.svg";
import hiraganaKa from "./ka.svg";
import hiraganaKi from "./ki.svg";
import hiraganaKu from "./ku.svg";
import hiraganaKe from "./ke.svg";
import hiraganaKo from "./ko.svg";
import hiraganaSa from "./sa.svg";
import hiraganaShi from "./shi.svg";
import hiraganaSu from "./su.svg";
import hiraganaSe from "./se.svg";
import hiraganaSo from "./so.svg";
import hiraganaTa from "./ta.svg";
import hiraganaChi from "./chi.svg";
import hiraganaTsu from "./tsu.svg";
import hiraganaTe from "./te.svg";
import hiraganaTo from "./to.svg";
import hiraganaNa from "./na.svg";
import hiraganaNi from "./ni.svg";
import hiraganaNu from "./nu.svg";
import hiraganaNe from "./ne.svg";
import hiraganaNo from "./no.svg";
import hiraganaHa from "./ha.svg";
import hiraganaHi from "./hi.svg";
import hiraganaFu from "./fu.svg";
import hiraganaHe from "./he.svg";
import hiraganaHo from "./ho.svg";
import hiraganaMa from "./ma.svg";
import hiraganaMi from "./mi.svg";
import hiraganaMu from "./mu.svg";
import hiraganaMe from "./me.svg";
import hiraganaMo from "./mo.svg";
import hiraganaYa from "./ya.svg";
import hiraganaYu from "./yu.svg";
import hiraganaYo from "./yo.svg";
import hiraganaRa from "./ra.svg";
import hiraganaRi from "./ri.svg";
import hiraganaRu from "./ru.svg";
import hiraganaRe from "./re.svg";
import hiraganaRo from "./ro.svg";
import hiraganaWa from "./wa.svg";
import hiraganaWo from "./wo.svg";
import hiraganaN from "./n.svg";

import { StrokeGuide, WritingTemplate } from "@/types/writing";

const HIRAGANA_GLYPH_ASSETS = {
  "ja-hiragana-a": hiraganaA,
  "ja-hiragana-i": hiraganaI,
  "ja-hiragana-u": hiraganaU,
  "ja-hiragana-e": hiraganaE,
  "ja-hiragana-o": hiraganaO,
  "ja-hiragana-ka": hiraganaKa,
  "ja-hiragana-ki": hiraganaKi,
  "ja-hiragana-ku": hiraganaKu,
  "ja-hiragana-ke": hiraganaKe,
  "ja-hiragana-ko": hiraganaKo,
  "ja-hiragana-sa": hiraganaSa,
  "ja-hiragana-shi": hiraganaShi,
  "ja-hiragana-su": hiraganaSu,
  "ja-hiragana-se": hiraganaSe,
  "ja-hiragana-so": hiraganaSo,
  "ja-hiragana-ta": hiraganaTa,
  "ja-hiragana-chi": hiraganaChi,
  "ja-hiragana-tsu": hiraganaTsu,
  "ja-hiragana-te": hiraganaTe,
  "ja-hiragana-to": hiraganaTo,
  "ja-hiragana-na": hiraganaNa,
  "ja-hiragana-ni": hiraganaNi,
  "ja-hiragana-nu": hiraganaNu,
  "ja-hiragana-ne": hiraganaNe,
  "ja-hiragana-no": hiraganaNo,
  "ja-hiragana-ha": hiraganaHa,
  "ja-hiragana-hi": hiraganaHi,
  "ja-hiragana-fu": hiraganaFu,
  "ja-hiragana-he": hiraganaHe,
  "ja-hiragana-ho": hiraganaHo,
  "ja-hiragana-ma": hiraganaMa,
  "ja-hiragana-mi": hiraganaMi,
  "ja-hiragana-mu": hiraganaMu,
  "ja-hiragana-me": hiraganaMe,
  "ja-hiragana-mo": hiraganaMo,
  "ja-hiragana-ya": hiraganaYa,
  "ja-hiragana-yu": hiraganaYu,
  "ja-hiragana-yo": hiraganaYo,
  "ja-hiragana-ra": hiraganaRa,
  "ja-hiragana-ri": hiraganaRi,
  "ja-hiragana-ru": hiraganaRu,
  "ja-hiragana-re": hiraganaRe,
  "ja-hiragana-ro": hiraganaRo,
  "ja-hiragana-wa": hiraganaWa,
  "ja-hiragana-wo": hiraganaWo,
  "ja-hiragana-n": hiraganaN,
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

export function applyHiraganaGlyphAssets(templates: WritingTemplate[]): WritingTemplate[] {
  return templates.map((template) => {
    const glyphAsset = HIRAGANA_GLYPH_ASSETS[template.id as keyof typeof HIRAGANA_GLYPH_ASSETS];

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
