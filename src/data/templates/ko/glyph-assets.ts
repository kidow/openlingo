import koA from "./a.svg";
import koAe from "./ae.svg";
import koBieup from "./bieup.svg";
import koChieut from "./chieut.svg";
import koDigeut from "./digeut.svg";
import koE from "./e.svg";
import koEo from "./eo.svg";
import koEu from "./eu.svg";
import koGiyeok from "./giyeok.svg";
import koHieut from "./hieut.svg";
import koI from "./i.svg";
import koIeung from "./ieung.svg";
import koJieut from "./jieut.svg";
import koKieuk from "./kieuk.svg";
import koMieum from "./mieum.svg";
import koNieun from "./nieun.svg";
import koO from "./o.svg";
import koOe from "./oe.svg";
import koPieup from "./pieup.svg";
import koRieul from "./rieul.svg";
import koSiot from "./siot.svg";
import koTieut from "./tieut.svg";
import koU from "./u.svg";
import koUi from "./ui.svg";
import koWa from "./wa.svg";
import koWae from "./wae.svg";
import koWe from "./we.svg";
import koWi from "./wi.svg";
import koWo from "./wo.svg";
import koYa from "./ya.svg";
import koYae from "./yae.svg";
import koYe from "./ye.svg";
import koYeo from "./yeo.svg";
import koYo from "./yo.svg";
import koYu from "./yu.svg";

import { GlyphAsset, WritingTemplate } from "@/types/writing";

const KO_GLYPH_ASSETS: Record<string, GlyphAsset> = {
  "ko-a": koA,
  "ko-ae": koAe,
  "ko-bieup": koBieup,
  "ko-chieut": koChieut,
  "ko-digeut": koDigeut,
  "ko-e": koE,
  "ko-eo": koEo,
  "ko-eu": koEu,
  "ko-giyeok": koGiyeok,
  "ko-hieut": koHieut,
  "ko-i": koI,
  "ko-ieung": koIeung,
  "ko-jieut": koJieut,
  "ko-kieuk": koKieuk,
  "ko-mieum": koMieum,
  "ko-nieun": koNieun,
  "ko-o": koO,
  "ko-oe": koOe,
  "ko-pieup": koPieup,
  "ko-rieul": koRieul,
  "ko-siot": koSiot,
  "ko-tieut": koTieut,
  "ko-u": koU,
  "ko-ui": koUi,
  "ko-wa": koWa,
  "ko-wae": koWae,
  "ko-we": koWe,
  "ko-wi": koWi,
  "ko-wo": koWo,
  "ko-ya": koYa,
  "ko-yae": koYae,
  "ko-ye": koYe,
  "ko-yeo": koYeo,
  "ko-yo": koYo,
  "ko-yu": koYu,
};

export function applyKoreanGlyphAssets(templates: WritingTemplate[]): WritingTemplate[] {
  return templates.map((template) => {
    const glyphAsset = KO_GLYPH_ASSETS[template.id];

    if (!glyphAsset) {
      return template;
    }

    return {
      ...template,
      glyphAsset,
    };
  });
}
