import { LanguagePack } from "@/types/writing";
import { koGiyeokTemplate } from "@/data/templates/ko/giyeok";
import { koNieunTemplate } from "@/data/templates/ko/nieun";
import { koDigeutTemplate } from "@/data/templates/ko/digeut";
import { koRieulTemplate } from "@/data/templates/ko/rieul";
import { koMieumTemplate } from "@/data/templates/ko/mieum";
import { koBieupTemplate } from "@/data/templates/ko/bieup";
import { koSiotTemplate } from "@/data/templates/ko/siot";
import { koIeungTemplate } from "@/data/templates/ko/ieung";
import { koJieutTemplate } from "@/data/templates/ko/jieut";
import { koChieutTemplate } from "@/data/templates/ko/chieut";
import { koKieukTemplate } from "@/data/templates/ko/kieuk";
import { koTieutTemplate } from "@/data/templates/ko/tieut";
import { koPieupTemplate } from "@/data/templates/ko/pieup";
import { koHieutTemplate } from "@/data/templates/ko/hieut";
import { koAeTemplate } from "@/data/templates/ko/ae";
import { koEoTemplate } from "@/data/templates/ko/eo";
import { koETemplate } from "@/data/templates/ko/e";
import { koOTemplate } from "@/data/templates/ko/o";
import { koOeTemplate } from "@/data/templates/ko/oe";
import { koUTemplate } from "@/data/templates/ko/u";
import { koWiTemplate } from "@/data/templates/ko/wi";
import { koEuTemplate } from "@/data/templates/ko/eu";
import { koITemplate } from "@/data/templates/ko/i";
import { koYaTemplate } from "@/data/templates/ko/ya";
import { koYaeTemplate } from "@/data/templates/ko/yae";
import { koYeoTemplate } from "@/data/templates/ko/yeo";
import { koYeTemplate } from "@/data/templates/ko/ye";
import { koWaTemplate } from "@/data/templates/ko/wa";
import { koWaeTemplate } from "@/data/templates/ko/wae";
import { koYoTemplate } from "@/data/templates/ko/yo";
import { koWoTemplate } from "@/data/templates/ko/wo";
import { koWeTemplate } from "@/data/templates/ko/we";
import { koYuTemplate } from "@/data/templates/ko/yu";
import { koUiTemplate } from "@/data/templates/ko/ui";
import { enAlphabetTemplates } from "@/data/templates/en/alphabet";
import { jaTemplates } from "@/data/templates/ja";
import { ruTemplates } from "@/data/templates/ru";
import { arTemplates } from "@/data/templates/ar";
import { deTemplates } from "@/data/templates/de";

export const languagePacks: LanguagePack[] = [
  {
    id: "ko",
    label: {
      ko: "한국어",
      en: "Korean",
    },
    nativeLabel: "한국어",
    direction: "ltr",
    stage: "MVP",
    summary: {
      ko: "단어와 문장으로 확장 가능한 구조를 유지하면서 기본 자모부터 시작합니다.",
      en: "Start from foundational jamo while keeping the content model ready for words and sentences.",
    },
    templates: [
      koGiyeokTemplate,
      koNieunTemplate,
      koDigeutTemplate,
      koRieulTemplate,
      koMieumTemplate,
      koBieupTemplate,
      koSiotTemplate,
      koIeungTemplate,
      koJieutTemplate,
      koChieutTemplate,
      koKieukTemplate,
      koTieutTemplate,
      koPieupTemplate,
      koHieutTemplate,
      {
        id: "ko-a",
        languageId: "ko",
        mode: "character",
        label: {
          ko: "아",
          en: "A",
        },
        nativeLabel: "ㅏ",
        cue: {
          ko: "세로획을 먼저 쓴 다음 오른쪽 짧은 가로획을 붙여 마무리하세요.",
          en: "Draw the vertical stroke first, then add the short right bar.",
        },
        description: {
          ko: "획 순서 미리보기를 검증하기 위한 기본 모음 샘플입니다.",
          en: "Core vowel sample for stroke-order preview validation.",
        },
        direction: "ltr",
        guidePathD: "M42 22 L42 78 M42 50 H68",
        strokeGuides: [
          {
            id: "ko-a-1",
            pathD: "M42 22 L42 78",
            order: 1,
          },
          {
            id: "ko-a-2",
            pathD: "M42 50 H68",
            order: 2,
          },
        ],
        viewBox: [0, 0, 100, 100],
        gridLabel: {
          ko: "한글 연습 칸",
          en: "Hangul box",
        },
      },
      koAeTemplate,
      koEoTemplate,
      koETemplate,
      koOTemplate,
      koOeTemplate,
      koUTemplate,
      koWiTemplate,
      koEuTemplate,
      koITemplate,
      koYaTemplate,
      koYaeTemplate,
      koYeoTemplate,
      koYeTemplate,
      koWaTemplate,
      koWaeTemplate,
      koYoTemplate,
      koWoTemplate,
      koWeTemplate,
      koYuTemplate,
      koUiTemplate,
    ],
  },
  {
    id: "en",
    label: {
      ko: "영어",
      en: "English",
    },
    nativeLabel: "English",
    direction: "ltr",
    stage: "Prototype",
    summary: {
      ko: "인터페이스와 저장 구조가 언어 비종속적으로 동작하는지 확인하기 위한 샘플 팩입니다.",
      en: "Included to validate that the interface and storage model are language-agnostic.",
    },
    templates: enAlphabetTemplates,
  },
  {
    id: "ja",
    label: {
      ko: "일본어",
      en: "Japanese",
    },
    nativeLabel: "日本語",
    direction: "ltr",
    stage: "Prototype",
    summary: {
      ko: "곡선이 많은 획으로 각진 한글 외의 가이드 렌더링 품질도 점검할 수 있습니다.",
      en: "Curved strokes help stress-test guide rendering beyond angular Hangul shapes.",
    },
    templates: jaTemplates,
  },
  {
    id: "ru",
    label: {
      ko: "러시아어",
      en: "Russian",
    },
    nativeLabel: "Русский",
    direction: "ltr",
    stage: "Prototype",
    summary: {
      ko: "라틴 문자와 유사하면서도 고유한 키릴 문자로 다양한 곡선 렌더링을 점검합니다.",
      en: "Cyrillic letters share some Latin shapes but add unique curves that broaden rendering coverage.",
    },
    templates: ruTemplates,
  },
  {
    id: "ar",
    label: {
      ko: "아랍어",
      en: "Arabic",
    },
    nativeLabel: "العربية",
    direction: "rtl",
    stage: "Prototype",
    summary: {
      ko: "우→좌 언어를 초기에 포함해 레이아웃 결정이 좌→우에만 고정되지 않도록 합니다.",
      en: "RTL support is represented early so layout decisions do not get locked to LTR only.",
    },
    templates: arTemplates,
  },
  {
    id: "de",
    label: {
      ko: "독일어",
      en: "German",
    },
    nativeLabel: "Deutsch",
    direction: "ltr",
    stage: "Prototype",
    summary: {
      ko: "라틴 알파벳에 움라우트와 에스체트를 추가하여 분음 부호 렌더링을 검증합니다.",
      en: "Extends the Latin base with Umlauts and Eszett to validate diacritic rendering support.",
    },
    templates: deTemplates,
  },
];
