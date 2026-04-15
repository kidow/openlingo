import { WritingTemplate } from "@/types/writing";
import { applyHiraganaGlyphAssets } from "./hiragana/glyph-assets";

// あ行 (vowels)
import { jaHiraganaATemplate } from "./hiragana/a";
import { jaHiraganaITemplate } from "./hiragana/i";
import { jaHiraganaUTemplate } from "./hiragana/u";
import { jaHiraganaETemplate } from "./hiragana/e";
import { jaHiraganaOTemplate } from "./hiragana/o";
// か行
import { jaHiraganaKaTemplate } from "./hiragana/ka";
import { jaHiraganaKiTemplate } from "./hiragana/ki";
import { jaHiraganaKuTemplate } from "./hiragana/ku";
import { jaHiraganaKeTemplate } from "./hiragana/ke";
import { jaHiraganaKoTemplate } from "./hiragana/ko";
// さ行
import { jaHiraganaSaTemplate } from "./hiragana/sa";
import { jaHiraganaShiTemplate } from "./hiragana/shi";
import { jaHiraganaSuTemplate } from "./hiragana/su";
import { jaHiraganaSeTemplate } from "./hiragana/se";
import { jaHiraganaSoTemplate } from "./hiragana/so";
// た行
import { jaHiraganaTaTemplate } from "./hiragana/ta";
import { jaHiraganaChiTemplate } from "./hiragana/chi";
import { jaHiraganaTsuTemplate } from "./hiragana/tsu";
import { jaHiraganaTeTemplate } from "./hiragana/te";
import { jaHiraganaToTemplate } from "./hiragana/to";
// な行
import { jaHiraganaNaTemplate } from "./hiragana/na";
import { jaHiraganaNiTemplate } from "./hiragana/ni";
import { jaHiraganaNuTemplate } from "./hiragana/nu";
import { jaHiraganaNeTemplate } from "./hiragana/ne";
import { jaHiraganaNoTemplate } from "./hiragana/no";
// は行
import { jaHiraganaHaTemplate } from "./hiragana/ha";
import { jaHiraganaHiTemplate } from "./hiragana/hi";
import { jaHiraganaFuTemplate } from "./hiragana/fu";
import { jaHiraganaHeTemplate } from "./hiragana/he";
import { jaHiraganaHoTemplate } from "./hiragana/ho";
// ま行
import { jaHiraganaMaTemplate } from "./hiragana/ma";
import { jaHiraganaMiTemplate } from "./hiragana/mi";
import { jaHiraganaMuTemplate } from "./hiragana/mu";
import { jaHiraganaMeTemplate } from "./hiragana/me";
import { jaHiraganaMoTemplate } from "./hiragana/mo";
// や行
import { jaHiraganaYaTemplate } from "./hiragana/ya";
import { jaHiraganaYuTemplate } from "./hiragana/yu";
import { jaHiraganaYoTemplate } from "./hiragana/yo";
// ら行
import { jaHiraganaRaTemplate } from "./hiragana/ra";
import { jaHiraganaRiTemplate } from "./hiragana/ri";
import { jaHiraganaRuTemplate } from "./hiragana/ru";
import { jaHiraganaReTemplate } from "./hiragana/re";
import { jaHiraganaRoTemplate } from "./hiragana/ro";
// わ行
import { jaHiraganaWaTemplate } from "./hiragana/wa";
import { jaHiraganaWoTemplate } from "./hiragana/wo";
// ん
import { jaHiraganaNTemplate } from "./hiragana/n";

// ア行 (vowels)
import { jaKatakanaATemplate } from "./katakana/a";
import { jaKatakanaITemplate } from "./katakana/i";
import { jaKatakanaUTemplate } from "./katakana/u";
import { jaKatakanaETemplate } from "./katakana/e";
import { jaKatakanaOTemplate } from "./katakana/o";
// カ行
import { jaKatakanaKaTemplate } from "./katakana/ka";
import { jaKatakanaKiTemplate } from "./katakana/ki";
import { jaKatakanaKuTemplate } from "./katakana/ku";
import { jaKatakanaKeTemplate } from "./katakana/ke";
import { jaKatakanaKoTemplate } from "./katakana/ko";
// サ行
import { jaKatakanaSaTemplate } from "./katakana/sa";
import { jaKatakanaShiTemplate } from "./katakana/shi";
import { jaKatakanaSuTemplate } from "./katakana/su";
import { jaKatakanaSeTemplate } from "./katakana/se";
import { jaKatakanaSoTemplate } from "./katakana/so";
// タ行
import { jaKatakanaTaTemplate } from "./katakana/ta";
import { jaKatakanaChiTemplate } from "./katakana/chi";
import { jaKatakanaTsuTemplate } from "./katakana/tsu";
import { jaKatakanaTeTemplate } from "./katakana/te";
import { jaKatakanaToTemplate } from "./katakana/to";
// ナ行
import { jaKatakanaNaTemplate } from "./katakana/na";
import { jaKatakanaNiTemplate } from "./katakana/ni";
import { jaKatakanaNuTemplate } from "./katakana/nu";
import { jaKatakanaNeTemplate } from "./katakana/ne";
import { jaKatakanaNoTemplate } from "./katakana/no";
// ハ行
import { jaKatakanaHaTemplate } from "./katakana/ha";
import { jaKatakanaHiTemplate } from "./katakana/hi";
import { jaKatakanaFuTemplate } from "./katakana/fu";
import { jaKatakanaHeTemplate } from "./katakana/he";
import { jaKatakanaHoTemplate } from "./katakana/ho";
// マ行
import { jaKatakanaMaTemplate } from "./katakana/ma";
import { jaKatakanaMiTemplate } from "./katakana/mi";
import { jaKatakanaMuTemplate } from "./katakana/mu";
import { jaKatakanaMeTemplate } from "./katakana/me";
import { jaKatakanaMoTemplate } from "./katakana/mo";
// ヤ行
import { jaKatakanaYaTemplate } from "./katakana/ya";
import { jaKatakanaYuTemplate } from "./katakana/yu";
import { jaKatakanaYoTemplate } from "./katakana/yo";
// ラ行
import { jaKatakanaRaTemplate } from "./katakana/ra";
import { jaKatakanaRiTemplate } from "./katakana/ri";
import { jaKatakanaRuTemplate } from "./katakana/ru";
import { jaKatakanaReTemplate } from "./katakana/re";
import { jaKatakanaRoTemplate } from "./katakana/ro";
// ワ行
import { jaKatakanaWaTemplate } from "./katakana/wa";
import { jaKatakanaWoTemplate } from "./katakana/wo";
// ン
import { jaKatakanaNTemplate } from "./katakana/n";

const hiraganaBaseTemplates: WritingTemplate[] = [
  // あ行
  jaHiraganaATemplate,
  jaHiraganaITemplate,
  jaHiraganaUTemplate,
  jaHiraganaETemplate,
  jaHiraganaOTemplate,
  // か行
  jaHiraganaKaTemplate,
  jaHiraganaKiTemplate,
  jaHiraganaKuTemplate,
  jaHiraganaKeTemplate,
  jaHiraganaKoTemplate,
  // さ行
  jaHiraganaSaTemplate,
  jaHiraganaShiTemplate,
  jaHiraganaSuTemplate,
  jaHiraganaSeTemplate,
  jaHiraganaSoTemplate,
  // た行
  jaHiraganaTaTemplate,
  jaHiraganaChiTemplate,
  jaHiraganaTsuTemplate,
  jaHiraganaTeTemplate,
  jaHiraganaToTemplate,
  // な行
  jaHiraganaNaTemplate,
  jaHiraganaNiTemplate,
  jaHiraganaNuTemplate,
  jaHiraganaNeTemplate,
  jaHiraganaNoTemplate,
  // は行
  jaHiraganaHaTemplate,
  jaHiraganaHiTemplate,
  jaHiraganaFuTemplate,
  jaHiraganaHeTemplate,
  jaHiraganaHoTemplate,
  // ま行
  jaHiraganaMaTemplate,
  jaHiraganaMiTemplate,
  jaHiraganaMuTemplate,
  jaHiraganaMeTemplate,
  jaHiraganaMoTemplate,
  // や行
  jaHiraganaYaTemplate,
  jaHiraganaYuTemplate,
  jaHiraganaYoTemplate,
  // ら行
  jaHiraganaRaTemplate,
  jaHiraganaRiTemplate,
  jaHiraganaRuTemplate,
  jaHiraganaReTemplate,
  jaHiraganaRoTemplate,
  // わ行
  jaHiraganaWaTemplate,
  jaHiraganaWoTemplate,
  // ん
  jaHiraganaNTemplate,
];

export const hiraganaTemplates: WritingTemplate[] = applyHiraganaGlyphAssets(hiraganaBaseTemplates);

export const katakanaTemplates: WritingTemplate[] = [
  // ア行
  jaKatakanaATemplate,
  jaKatakanaITemplate,
  jaKatakanaUTemplate,
  jaKatakanaETemplate,
  jaKatakanaOTemplate,
  // カ行
  jaKatakanaKaTemplate,
  jaKatakanaKiTemplate,
  jaKatakanaKuTemplate,
  jaKatakanaKeTemplate,
  jaKatakanaKoTemplate,
  // サ行
  jaKatakanaSaTemplate,
  jaKatakanaShiTemplate,
  jaKatakanaSuTemplate,
  jaKatakanaSeTemplate,
  jaKatakanaSoTemplate,
  // タ行
  jaKatakanaTaTemplate,
  jaKatakanaChiTemplate,
  jaKatakanaTsuTemplate,
  jaKatakanaTeTemplate,
  jaKatakanaToTemplate,
  // ナ行
  jaKatakanaNaTemplate,
  jaKatakanaNiTemplate,
  jaKatakanaNuTemplate,
  jaKatakanaNeTemplate,
  jaKatakanaNoTemplate,
  // ハ行
  jaKatakanaHaTemplate,
  jaKatakanaHiTemplate,
  jaKatakanaFuTemplate,
  jaKatakanaHeTemplate,
  jaKatakanaHoTemplate,
  // マ行
  jaKatakanaMaTemplate,
  jaKatakanaMiTemplate,
  jaKatakanaMuTemplate,
  jaKatakanaMeTemplate,
  jaKatakanaMoTemplate,
  // ヤ行
  jaKatakanaYaTemplate,
  jaKatakanaYuTemplate,
  jaKatakanaYoTemplate,
  // ラ行
  jaKatakanaRaTemplate,
  jaKatakanaRiTemplate,
  jaKatakanaRuTemplate,
  jaKatakanaReTemplate,
  jaKatakanaRoTemplate,
  // ワ行
  jaKatakanaWaTemplate,
  jaKatakanaWoTemplate,
  // ン
  jaKatakanaNTemplate,
];

export const jaTemplates: WritingTemplate[] = [
  ...hiraganaTemplates,
  ...katakanaTemplates,
];
