import katakanaA from "./a.svg";
import katakanaI from "./i.svg";
import katakanaU from "./u.svg";
import katakanaE from "./e.svg";
import katakanaO from "./o.svg";
import katakanaKa from "./ka.svg";
import katakanaKi from "./ki.svg";
import katakanaKu from "./ku.svg";
import katakanaKe from "./ke.svg";
import katakanaKo from "./ko.svg";
import katakanaSa from "./sa.svg";
import katakanaShi from "./shi.svg";
import katakanaSu from "./su.svg";
import katakanaSe from "./se.svg";
import katakanaSo from "./so.svg";
import katakanaTa from "./ta.svg";
import katakanaChi from "./chi.svg";
import katakanaTsu from "./tsu.svg";
import katakanaTe from "./te.svg";
import katakanaTo from "./to.svg";
import katakanaNa from "./na.svg";
import katakanaNi from "./ni.svg";
import katakanaNu from "./nu.svg";
import katakanaNe from "./ne.svg";
import katakanaNo from "./no.svg";
import katakanaHa from "./ha.svg";
import katakanaHi from "./hi.svg";
import katakanaFu from "./fu.svg";
import katakanaHe from "./he.svg";
import katakanaHo from "./ho.svg";
import katakanaMa from "./ma.svg";
import katakanaMi from "./mi.svg";
import katakanaMu from "./mu.svg";
import katakanaMe from "./me.svg";
import katakanaMo from "./mo.svg";
import katakanaYa from "./ya.svg";
import katakanaYu from "./yu.svg";
import katakanaYo from "./yo.svg";
import katakanaRa from "./ra.svg";
import katakanaRi from "./ri.svg";
import katakanaRu from "./ru.svg";
import katakanaRe from "./re.svg";
import katakanaRo from "./ro.svg";
import katakanaWa from "./wa.svg";
import katakanaWo from "./wo.svg";
import katakanaN from "./n.svg";

import { StrokeGuide, WritingTemplate } from "@/types/writing";

const KATAKANA_GLYPH_ASSETS = {
  "ja-katakana-a": katakanaA,
  "ja-katakana-i": katakanaI,
  "ja-katakana-u": katakanaU,
  "ja-katakana-e": katakanaE,
  "ja-katakana-o": katakanaO,
  "ja-katakana-ka": katakanaKa,
  "ja-katakana-ki": katakanaKi,
  "ja-katakana-ku": katakanaKu,
  "ja-katakana-ke": katakanaKe,
  "ja-katakana-ko": katakanaKo,
  "ja-katakana-sa": katakanaSa,
  "ja-katakana-shi": katakanaShi,
  "ja-katakana-su": katakanaSu,
  "ja-katakana-se": katakanaSe,
  "ja-katakana-so": katakanaSo,
  "ja-katakana-ta": katakanaTa,
  "ja-katakana-chi": katakanaChi,
  "ja-katakana-tsu": katakanaTsu,
  "ja-katakana-te": katakanaTe,
  "ja-katakana-to": katakanaTo,
  "ja-katakana-na": katakanaNa,
  "ja-katakana-ni": katakanaNi,
  "ja-katakana-nu": katakanaNu,
  "ja-katakana-ne": katakanaNe,
  "ja-katakana-no": katakanaNo,
  "ja-katakana-ha": katakanaHa,
  "ja-katakana-hi": katakanaHi,
  "ja-katakana-fu": katakanaFu,
  "ja-katakana-he": katakanaHe,
  "ja-katakana-ho": katakanaHo,
  "ja-katakana-ma": katakanaMa,
  "ja-katakana-mi": katakanaMi,
  "ja-katakana-mu": katakanaMu,
  "ja-katakana-me": katakanaMe,
  "ja-katakana-mo": katakanaMo,
  "ja-katakana-ya": katakanaYa,
  "ja-katakana-yu": katakanaYu,
  "ja-katakana-yo": katakanaYo,
  "ja-katakana-ra": katakanaRa,
  "ja-katakana-ri": katakanaRi,
  "ja-katakana-ru": katakanaRu,
  "ja-katakana-re": katakanaRe,
  "ja-katakana-ro": katakanaRo,
  "ja-katakana-wa": katakanaWa,
  "ja-katakana-wo": katakanaWo,
  "ja-katakana-n": katakanaN,
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

export function applyKatakanaGlyphAssets(templates: WritingTemplate[]): WritingTemplate[] {
  return templates.map((template) => {
    const glyphAsset = KATAKANA_GLYPH_ASSETS[template.id as keyof typeof KATAKANA_GLYPH_ASSETS];

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
