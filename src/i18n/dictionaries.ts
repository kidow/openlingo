import { AppLocale } from "@/i18n/config";
import { LanguagePackStage, WritingDirection } from "@/types/writing";

type CopyBlock = {
  label: string;
  description: string;
};

export type AppDictionary = {
  metadata: {
    title: string;
    description: string;
    appleWebAppTitle: string;
  };
  header: {
    homeLabel: string;
    localeLabel: string;
    wordmark: string;
    locales: Record<AppLocale, string>;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
  };
  sections: {
    languagePacksTitle: string;
    practiceCardsTitle: string;
    worksheetEyebrow: string;
    worksheetScoringNote: string;
    scoreTitle: string;
    scoreDescription: string;
    sessionNotesTitle: string;
    sessionNotesDescription: string;
    strokePreviewTitle: string;
    strokePreviewDescription: string;
    strokePreviewIdle: string;
    strokePreviewPlaying: string;
  };
  buttons: {
    undoStroke: string;
    clearPage: string;
    replayStrokePreview: string;
    toggleStrokeAutoplay: string;
  };
  common: {
    on: string;
    off: string;
  };
  notes: {
    multilingual: string;
    touchInput: string;
    currentStrokeCount: string;
  };
  score: {
    tones: {
      ready: CopyBlock;
      strong: CopyBlock;
      good: CopyBlock;
      practice: CopyBlock;
    };
    status: {
      waiting: string;
      pending: string;
      ready: string;
    };
  };
  directions: {
    short: Record<WritingDirection, string>;
    ready: Record<WritingDirection, string>;
  };
  stages: Record<LanguagePackStage, string>;
};

const dictionaries: Record<AppLocale, AppDictionary> = {
  ko: {
    metadata: {
      title: "OpenLingo 프로토타입",
      description: "다국어 확장을 고려한 아이패드 중심 손글씨 연습 프로토타입입니다.",
      appleWebAppTitle: "OpenLingo",
    },
    header: {
      homeLabel: "OpenLingo 홈으로 이동",
      localeLabel: "인터페이스 언어",
      wordmark: "OpenLingo",
      locales: {
        ko: "한국어",
        en: "English",
      },
    },
    hero: {
      badge: "OpenLingo 프로토타입",
      title: "아이패드 중심 손글씨 연습을 위한 학습지형 워크스페이스.",
      description: "첫 버전은 의도적으로 범위를 좁혔습니다. 큰 연습지 한 장, 다국어 확장 가능한 템플릿 데이터, 그리고 최소한의 모션만 제공합니다.",
    },
    sections: {
      languagePacksTitle: "연습 언어 팩",
      practiceCardsTitle: "연습 카드",
      worksheetEyebrow: "워크시트",
      worksheetScoringNote: "채점기는 대략적인 경로 유사도 추정을 사용해, 정적인 목업이 아니라 실제 연습 루프처럼 느껴지도록 구성했습니다.",
      scoreTitle: "점수",
      scoreDescription: "펜을 떼고 약 0.5초 뒤에 프로토타입 채점이 실행됩니다.",
      sessionNotesTitle: "세션 노트",
      sessionNotesDescription: "프로토타입은 학습지 중심의 단순한 흐름을 유지합니다.",
      strokePreviewTitle: "획 미리보기",
      strokePreviewDescription: "문자를 쓰기 전에 획 순서와 진행 방향을 확인하세요.",
      strokePreviewIdle: "다시 보기를 눌러 재생하세요",
      strokePreviewPlaying: "현재 {order}획 재생 중",
    },
    buttons: {
      undoStroke: "획 되돌리기",
      clearPage: "지우기",
      replayStrokePreview: "다시 보기",
      toggleStrokeAutoplay: "자동 재생",
    },
    common: {
      on: "켜짐",
      off: "꺼짐",
    },
    notes: {
      multilingual: "한국어가 MVP이지만, 구조는 좌→우와 우→좌 언어 모두를 염두에 두고 설계되어 있습니다.",
      touchInput: "터치 입력",
      currentStrokeCount: "현재 획 수",
    },
    score: {
      tones: {
        ready: {
          label: "준비되면 바로 써보세요",
          description: "펜을 떼면 프로토타입이 형태 유사도를 추정합니다.",
        },
        strong: {
          label: "형태가 안정적입니다",
          description: "바깥 윤곽이 충분히 가깝습니다. 한 번 더 반복해도 좋고 다음 카드로 넘어가도 됩니다.",
        },
        good: {
          label: "거의 맞아요",
          description: "시작점과 칸 안 비율을 조금 더 안정적으로 맞추면 더 좋아집니다.",
        },
        practice: {
          label: "몸풀기 단계입니다",
          description: "먼저 옅게 따라 쓴 뒤, 모서리와 곡선의 속도를 더 천천히 조절해 보세요.",
        },
      },
      status: {
        waiting: "잉크 대기 중",
        pending: "분석 중…",
        ready: "업데이트됨",
      },
    },
    directions: {
      short: {
        ltr: "좌→우",
        rtl: "우→좌",
      },
      ready: {
        ltr: "좌→우 준비됨",
        rtl: "우→좌 준비됨",
      },
    },
    stages: {
      MVP: "MVP",
      Prototype: "프로토타입",
    },
  },
  en: {
    metadata: {
      title: "OpenLingo Prototype",
      description: "iPad-first handwriting practice prototype with multilingual-ready worksheet data.",
      appleWebAppTitle: "OpenLingo",
    },
    header: {
      homeLabel: "Go to OpenLingo home",
      localeLabel: "Interface language",
      wordmark: "OpenLingo",
      locales: {
        ko: "한국어",
        en: "English",
      },
    },
    hero: {
      badge: "OpenLingo prototype",
      title: "A paper-like handwriting workspace for iPad-first practice.",
      description: "The first build stays deliberately narrow: one oversized worksheet, multilingual-ready template data, and minimal motion.",
    },
    sections: {
      languagePacksTitle: "Language packs",
      practiceCardsTitle: "Practice cards",
      worksheetEyebrow: "Worksheet",
      worksheetScoringNote: "The scorer uses a rough path-similarity estimate so the interaction feels like a real practice loop, not a static mock.",
      scoreTitle: "Score",
      scoreDescription: "Prototype scoring runs about half a second after pen lift.",
      sessionNotesTitle: "Session notes",
      sessionNotesDescription: "The prototype keeps the UI minimal and worksheet-led.",
      strokePreviewTitle: "Stroke preview",
      strokePreviewDescription: "Check the stroke order and direction before writing.",
      strokePreviewIdle: "Press replay to preview",
      strokePreviewPlaying: "Playing stroke {order}",
    },
    buttons: {
      undoStroke: "Undo stroke",
      clearPage: "Clear page",
      replayStrokePreview: "Replay",
      toggleStrokeAutoplay: "Autoplay",
    },
    common: {
      on: "On",
      off: "Off",
    },
    notes: {
      multilingual: "Multi-language structure is already visible through LTR and RTL packs, even though Korean remains the MVP content focus.",
      touchInput: "Touch input",
      currentStrokeCount: "Current stroke count",
    },
    score: {
      tones: {
        ready: {
          label: "Ready when you are",
          description: "Lift the pen and the prototype will estimate shape similarity.",
        },
        strong: {
          label: "Confident shape",
          description: "The outer form is close enough to move on or repeat once more for consistency.",
        },
        good: {
          label: "Nearly there",
          description: "Try stabilizing the starting point and keeping the proportions inside the guide box.",
        },
        practice: {
          label: "Warm-up pass",
          description: "Use the guide as tracing paper first, then rewrite with slower corner control.",
        },
      },
      status: {
        waiting: "Waiting for ink",
        pending: "Analyzing…",
        ready: "Updated",
      },
    },
    directions: {
      short: {
        ltr: "LTR",
        rtl: "RTL",
      },
      ready: {
        ltr: "Left-to-right ready",
        rtl: "Right-to-left ready",
      },
    },
    stages: {
      MVP: "MVP",
      Prototype: "Prototype",
    },
  },
};

export function getDictionary(locale: AppLocale) {
  return dictionaries[locale];
}

