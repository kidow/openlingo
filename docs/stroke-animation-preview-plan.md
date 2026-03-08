# 문자별 획 애니메이션 미리보기 구현 계획

## 목적

사용자가 연습을 시작하기 전에 각 문자의 획 순서와 진행 방향을 시각적으로 이해할 수 있도록 문자별 드로잉 미리보기를 제공한다.

예시:
- `A`는 3개의 stroke로 나누어 실제 필기 순서대로 재생한다.
- `ㄱ`은 세로획 후 가로획 순서로 재생한다.
- `ㅏ`는 세로획 후 오른쪽 짧은 가로획 순서로 재생한다.

핵심 목표:
- 현재 워크시트 UI 안에 자연스럽게 들어간다.
- 언어별 문자 세트를 같은 구조로 관리한다.
- 단순한 전체 path 페이드가 아니라 stroke 단위 재생을 지원한다.
- 모바일과 아이패드에서도 안정적으로 동작한다.
- React 리렌더 비용을 최소화한다.

## 현재 구조 기준 진단

현재 앱은 [`WritingTemplate`](/C:/dev/kidow/openlingo/src/types/writing.ts)에 `guidePathD`만 저장하고 있고, 실제 렌더링도 하나의 path를 기준으로 동작한다. 이 구조는 "문자 모양을 보여주기"에는 충분하지만, "몇 획인지"와 "어떤 순서로 그리는지"를 표현하기에는 정보가 부족하다.

README에도 이미 `strokePaths?: string[]` 확장 아이디어가 적혀 있으므로, 이번 기능은 그 방향을 구체화하는 것이 가장 자연스럽다.

결론:
- `guidePathD` 하나만으로는 정확한 획 순서 애니메이션을 만들기 어렵다.
- stroke 단위 path 배열을 데이터로 먼저 분리해야 한다.
- 애니메이션 엔진은 `motion`보다 브라우저 기본 애니메이션 계층을 우선하는 편이 성능상 유리하다.

## 애니메이션 방식 비교

### 1. SVG + Web Animations API

권장안이다.

구현 방식:
- 각 stroke를 개별 `<path>`로 렌더링한다.
- `getTotalLength()`로 path 길이를 구한다.
- `stroke-dasharray`와 `stroke-dashoffset`을 이용해 stroke가 그려지는 효과를 만든다.
- 재생 제어는 `element.animate()`로 수행한다.

장점:
- 애니메이션 중 React state를 계속 갱신할 필요가 없다.
- 브라우저가 DOM 레벨에서 애니메이션을 처리하므로 오버헤드가 적다.
- replay, pause, speed 변경, 순차 재생 제어가 쉽다.
- SVG path 기반 데이터와 직접 맞물린다.

단점:
- 시퀀싱과 상태 관리를 직접 설계해야 한다.
- 추상화가 적어서 초기에 약간 더 수작업이 필요하다.

### 2. SVG + CSS keyframes

대안으로 가능하다.

장점:
- 매우 가볍다.
- 단순한 자동 재생만 있으면 구현이 쉽다.

단점:
- stroke별 순차 제어와 replay 제어가 불편하다.
- 사용자 상호작용에 따른 세밀한 제어가 WAAPI보다 떨어진다.

### 3. Canvas + requestAnimationFrame

이론상 빠르지만 이번 요구에는 1순위가 아니다.

장점:
- 대량 드로잉에는 강하다.

단점:
- 현재 데이터가 SVG path 중심이라 변환 비용이 든다.
- 접근성과 디버깅이 SVG보다 불리하다.
- 정적 가이드와 애니메이션 stroke를 함께 다루기 번거롭다.

### 4. motion / Framer Motion

개발 속도는 빠를 수 있지만 성능 우선 기준에서는 후순위다.

장점:
- 선언적으로 작성하기 쉽다.
- 기존 React 컴포넌트 흐름에 붙이기 편하다.

단점:
- 추상화 비용이 추가된다.
- 이 기능처럼 단일 SVG stroke 재생에는 브라우저 기본 API보다 이점이 크지 않다.

## 최종 권장안

첫 구현은 `SVG + Web Animations API + stroke-dashoffset` 조합으로 간다.

이유:
- 성능이 가장 안정적이다.
- React 리렌더를 최소화할 수 있다.
- 문자별 stroke 순차 재생에 필요한 제어를 충분히 제공한다.
- 현재 `guidePathD`/SVG 중심 구조와 가장 잘 맞는다.

## 권장 구현 방향

### 1. 데이터 모델 확장

현재 `WritingTemplate`에 아래 개념을 추가한다.

```ts
export type StrokeGuide = {
  id: string;
  pathD: string;
  order: number;
  durationMs?: number;
  holdMs?: number;
};

export type WritingTemplate = {
  id: string;
  languageId: string;
  mode: PracticeMode;
  label: LocalizedText;
  nativeLabel: string;
  cue: LocalizedText;
  description: LocalizedText;
  direction: WritingDirection;
  guidePathD: string;
  strokeGuides?: StrokeGuide[];
  viewBox: [number, number, number, number];
  gridLabel: LocalizedText;
};
```

설계 의도:
- `guidePathD`는 정적 가이드 표시용으로 유지한다.
- `strokeGuides`는 미리보기 애니메이션 전용 데이터다.
- `order`는 데이터 검증과 정렬 안정성을 위해 명시적으로 둔다.
- `durationMs`와 `holdMs`는 길이 기반 기본 애니메이션 시간을 미세 조정하기 위한 선택 필드다.

### 2. 문자 데이터 저장 방식

언어별 문자 세트는 기존 `languagePacks` 안에 계속 둘 수 있지만, 실제로는 파일을 분리하는 편이 낫다.

권장 구조:

```text
src/data/writing/
  ko-jamo.ts
  en-latin.ts
  ja-kana.ts
  ar-basic.ts
  index.ts
```

이유:
- 한글 자모 전체와 영문 알파벳 전체가 들어오면 파일 크기가 빠르게 커진다.
- stroke 데이터는 사람이 직접 검수해야 하므로 언어별 분리가 유지보수에 유리하다.
- 이후 일본어, 아랍어, 숫자, 단어 카드 등으로 확장하기 쉽다.

초기 범위 제안:
- 한글: `ㄱ-ㅎ`, `ㅏ-ㅣ`
- 영어: `a-z` 또는 제품 방향에 맞춘 `A-Z`
- 일본어/아랍어는 현재 프로토타입 템플릿 유지

주의:
- 영문은 대문자와 소문자의 stroke order가 크게 다를 수 있다.
- 사용 시나리오가 확정되기 전에는 `A-Z`와 `a-z`를 분리 가능한 구조로 두는 편이 안전하다.

### 3. 애니메이션 컴포넌트 분리

새 컴포넌트 예시:

```text
src/components/practice/stroke-preview.tsx
```

책임:
- 특정 `WritingTemplate`의 `strokeGuides`를 받아 순차 애니메이션 렌더링
- autoplay, replay, pause, speed 제어
- reduced motion 대응
- 선택된 템플릿이 바뀌면 애니메이션 리셋

권장 props:

```ts
type StrokePreviewProps = {
  template: WritingTemplate;
  autoplay?: boolean;
  loop?: boolean;
  speed?: number;
  className?: string;
};
```

## WAAPI 기반 구현 방식

### 1. 렌더링 전략

각 stroke를 별도 `<path>`로 렌더링하고, 각 path 길이에 맞춰 `strokeDashoffset`을 줄여 나간다.

초기 상태:

```ts
path.style.strokeDasharray = `${length}`;
path.style.strokeDashoffset = `${length}`;
path.style.opacity = "0.35";
```

재생 예시:

```ts
const animation = path.animate(
  [
    { strokeDashoffset: String(length), opacity: 0.35 },
    { strokeDashoffset: "0", opacity: 1 },
  ],
  {
    duration: durationMs,
    easing: "ease-in-out",
    fill: "forwards",
  }
);

await animation.finished;
```

권장 연출:
- 아직 그려지지 않은 전체 가이드는 연한 색으로 먼저 깔아둔다.
- 현재 재생 중인 stroke는 진한 색으로 그려진다.
- 이전 stroke는 완료 상태로 남긴다.
- 필요하면 시작점에 작은 점을 추가하되 첫 버전에는 생략 가능하다.

### 2. 순차 실행 방식

권장 방식은 imperative player다.

예시 구조:
- `svgRef`
- `pathRefs`
- `animationsRef`
- `playTokenRef`

흐름:
1. `strokeGuides`를 순서대로 정렬한다.
2. 각 path 길이를 계산해 초기 스타일을 세팅한다.
3. 첫 stroke부터 `animate()`를 호출한다.
4. `animation.finished`를 기다린 뒤 다음 stroke로 넘어간다.
5. replay 시 기존 animation을 cancel하고 초기 상태로 리셋한다.

이 방식이 좋은 이유:
- React state를 프레임마다 갱신하지 않는다.
- pause/replay/speed 변경을 DOM 레벨에서 제어할 수 있다.
- iPad 포함 모바일 브라우저에서 예측 가능하게 동작한다.

### 3. duration 계산

기본 duration은 path 길이 기반으로 계산하는 편이 자연스럽다.

권장 규칙:
- `durationMs = clamp(length * factor, minDuration, maxDuration)`
- `stroke.durationMs`가 있으면 그 값을 우선한다.
- stroke 사이 `holdMs` 기본값은 짧게 둔다.

예시:
- 짧은 stroke: 320ms
- 중간 stroke: 480ms
- 긴 stroke: 680ms
- stroke 간 hold: 120ms

## UI 배치 제안

### 1. 현재 워크시트 내부 배치

가장 자연스러운 위치는 현재 연습 캔버스 우측 정보 패널 또는 캔버스 상단 보조 영역이다.

권장 배치:
- 기본: 점수 카드 위에 `획 미리보기` 카드 추가
- 모바일: 캔버스 위 또는 아래에 접을 수 있는 패널로 표시

카드 구성 예시:
- 제목: `획 미리보기`
- 설명: `이 문자를 쓰는 순서를 먼저 확인하세요.`
- 미리보기 SVG
- `다시 보기` 버튼
- `자동 재생` 토글
- `0.75x / 1x / 1.25x` 속도 선택

### 2. 사용자 경험 원칙

- 사용자가 실제로 그리는 캔버스와 미리보기 캔버스는 분리한다.
- 미리보기는 입력 이벤트를 받지 않는다.
- 사용자가 직접 쓰기 시작하면 autoplay를 멈추거나 흐리게 처리한다.
- reduced motion 환경에서는 자동 반복을 끄고 정적 stroke 번호만 보여준다.

## 언어별 데이터 구축 계획

### 1. 한글

범위:
- 자음: `ㄱ-ㅎ`
- 모음: `ㅏ-ㅣ`

권장 방식:
- 자모 단위 템플릿을 별도 파일로 관리한다.
- 각 자모에 대해 `guidePathD`와 `strokeGuides`를 함께 저장한다.
- 복합 자모와 완성형 음절은 후속 단계로 미룬다.

이유:
- 완성형 음절까지 바로 가면 데이터 양과 stroke order 검수 비용이 급격히 증가한다.
- 현재 제품 목표와도 자모 단위 연습이 더 잘 맞는다.

### 2. 영어

범위 후보:
- 소문자 `a-z`
- 대문자 `A-Z`

권장안:
- 첫 버전에서는 하나만 선택한다.
- 현재 예시가 `A`이고 기존 카드도 대문자 예시가 있으므로 UI 일관성만 보면 `A-Z`가 조금 더 자연스럽다.
- 다만 사용자가 요청한 범위가 `a-z`라면 문서와 데이터 구조는 소문자 중심으로 시작하고, 대문자는 별도 세트로 확장 가능하게 설계한다.

### 3. 기타 언어

일본어/아랍어는 지금처럼 일부 샘플 문자만 유지하되, 데이터 구조는 동일하게 맞춘다.

의도:
- 초기에는 한글/영어를 먼저 완성한다.
- 다른 언어는 구조 검증용으로 유지한다.
- 이후 stroke order 소스가 확보되면 같은 포맷으로 확장한다.

## 구현 단계 제안

### Phase 1. 데이터 구조 준비
- `WritingTemplate`에 `strokeGuides` 추가
- 기존 템플릿에 최소 3-5개 샘플 문자만 우선 입력
- `guidePathD`와 `strokeGuides` 일치 여부 검증 유틸 추가

완료 기준:
- `A`, `ㄱ`, `ㅏ` 정도가 stroke 단위로 분리되어 있음

### Phase 2. 미리보기 컴포넌트 구현
- `StrokePreview` 컴포넌트 추가
- WAAPI 기반 stroke 순차 재생 구현
- replay/autoplay/speed UI 추가

완료 기준:
- 템플릿 변경 시 애니메이션이 정상 리셋됨
- 모바일과 데스크톱 모두 레이아웃이 깨지지 않음

### Phase 3. 워크시트 연결
- `PrototypePracticeSheet`에 미리보기 카드 삽입
- 사용자가 실제 그리기 시작하면 autoplay 정지
- reduced motion 분기 추가

완료 기준:
- 연습 흐름을 방해하지 않으면서 참조용으로 동작함

### Phase 4. 문자 세트 확장
- 한글 자모 전체 추가
- 영어 알파벳 세트 추가
- 데이터 생성/검수 규칙 문서화

완료 기준:
- 언어별 기본 문자 세트가 실제 서비스 가능한 수준으로 채워짐

## 기술적 리스크와 대응

### 1. `guidePathD`와 `strokeGuides` 불일치

리스크:
- 정적 가이드와 애니메이션 stroke가 서로 다른 모양이면 UX가 바로 무너진다.

대응:
- 개발용 검증 함수로 stroke들을 합친 path와 guide를 비교하거나, 최소한 사람이 시각 검수할 수 있는 내부 테스트 화면을 만든다.

### 2. stroke 데이터 수작업 비용

리스크:
- 자모와 알파벳 전체를 손으로 작성하면 시간이 많이 든다.

대응:
- 우선 핵심 문자만 수작업으로 검수한다.
- 이후 SVG 편집기 또는 간단한 내부 변환 스크립트로 생산성을 높인다.

### 3. 애니메이션 중 리렌더 비용

리스크:
- React state를 프레임 단위로 갱신하면 저사양 모바일에서 불필요한 비용이 발생한다.

대응:
- 재생 제어는 `ref`와 WAAPI로 처리한다.
- 애니메이션 중에는 `setState`를 최소화한다.
- 현재 선택된 템플릿만 재생한다.

### 4. 모바일 성능

리스크:
- stroke 수가 많아지면 저사양 모바일에서 잔상이 생길 수 있다.

대응:
- 문자당 stroke 수가 많은 언어는 초기 범위를 제한한다.
- 미리보기 SVG 크기를 고정하고 불필요한 재렌더를 줄인다.
- path 길이 계산은 mount 또는 템플릿 변경 시 1회만 수행한다.

## 구현 시 세부 원칙

- 미리보기용 SVG와 실제 입력용 SVG를 분리한다.
- 사용자 입력 stroke 데이터와 애니메이션 stroke 데이터를 섞지 않는다.
- `strokeGuides`가 없는 템플릿은 정적 가이드만 표시하고 미리보기 카드는 숨기거나 비활성화한다.
- 애니메이션 중 DOM 스타일만 갱신하고 React state 갱신은 제어 UI에 한정한다.
- 접근성을 위해 `다시 보기` 버튼과 현재 재생 중 획 번호를 텍스트로 제공한다.

## 추천 산출물

개발 착수 시 실제 작업 단위는 아래처럼 자르는 것이 좋다.

1. 타입 확장과 샘플 데이터 추가
2. `StrokePreview` 컴포넌트 구현
3. WAAPI 플레이어 유틸 구현
4. 워크시트에 미리보기 카드 연결
5. 한글 자모 데이터 입력
6. 영어 알파벳 데이터 입력
7. 검수용 내부 페이지 또는 토글 추가

## 추가로 확인하면 좋은 사항

지금 문서만으로 바로 시작은 가능하지만, 아래 항목이 정해지면 구현 속도가 더 빨라진다.

- 영어는 `a-z`로 먼저 갈지, `A-Z`로 먼저 갈지
- 한글은 자모까지만 할지, 완성형 음절까지 확장할지
- stroke order의 기준을 어떤 학습 자료에 맞출지
- autoplay를 기본값으로 켤지 여부

## 최종 권장안 요약

- `WritingTemplate`에 `strokeGuides`를 추가한다.
- `A`, `ㄱ`, `ㅏ`를 샘플로 먼저 만든다.
- `motion` 대신 `SVG + Web Animations API`로 stroke를 순차 재생한다.
- 워크시트 우측 패널에 `획 미리보기` 카드를 추가한다.
- 이후 한글 자모 전체와 영어 알파벳 전체로 확장한다.

이 순서가 가장 작은 변경으로 시작하면서도, 나중에 언어별 문자 세트 전체로 확장할 수 있는 구조를 보장한다.
