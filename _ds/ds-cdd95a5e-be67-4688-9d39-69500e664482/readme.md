# 종로유학원 Design System

전 세계 유학을 돕는 **종로유학원**(Jongno Study Abroad)의 디자인 시스템입니다.
Airbnb-스러운 따뜻한 환대 톤에 **신뢰·전문성**과 **밝은 활기**를 더한, 한국어 우선(Korean-first) 시스템입니다.

> **한 줄 정체성** — 38년 노하우로 상담부터 출국·현지 정착까지 함께하는, 대한민국 유학 1번지.

---

## 1. 브랜드 컨텍스트

- **브랜드명**: 종로유학원 (Jongno Study Abroad)
- **업종**: 유학·어학연수 컨설팅 (consumer / education)
- **핵심 가치**: 신뢰, 전문성, 환대, 활기
- **시그니처**: 로고의 빨간 **“1” 마크**(유학 1번지) + Vermilion `#E73C28` 액센트 + 큰 라운드 사진 카드
- **테마**: Light(기본) + Dark 지원

### 사용된 소스
- 업로드 로고: `uploads/로고 고화질2.png`(화이트 배경용), `uploads/업스케일링 로고.png`(고화질 컬러)
- 가공 결과: `assets/logo-color.png`, `assets/logo-white.png`, `assets/mark-red.png`
- 브랜드 방향: 사용자 제공 브리프 (Airbnb 미감 차용, 종로유학원 브랜드에 적용한 **오리지널** 시스템 — Airbnb 복제 아님)

> ⚠️ 폰트: Airbnb Cereal은 상용 비공개 폰트라 사용 불가. Latin은 **Inter**, 한글은 **Noto Sans KR**로 대체했습니다. 라이선스 보유 시 교체 가능.

---

## 2. CONTENT FUNDAMENTALS — 콘텐츠/카피 원칙

**언어**: 한국어 우선. 숫자·고유명사·프로그램명에 영문 혼용 (예: Co-op, F-1, Foundation).

**톤**: 신뢰감 있고 전문적이되, 따뜻하고 격려하는 어조. 학생/학부모가 “막막함”을 “해볼 만함”으로 느끼게.

**인칭**: 사용자에게 **“~하세요 / ~드릴게요”** 정중한 권유체. 회사는 “함께합니다”로 동행을 강조. 차갑거나 명령조 금지.

**케이싱**: 한글은 자연스러운 문장형. 영문 약어는 대문자(F-1, PDF, Co-op). 과한 대문자/느낌표 남발 금지.

**카피 예시**
- 헤드라인: “세계로 향하는 가장 확실한 첫 걸음”
- 서브: “38년 노하우의 1:1 맞춤 컨설팅으로 상담부터 출국, 현지 정착까지 함께합니다.”
- CTA: “무료 상담 신청”, “1:1 무료 상담 예약하기”, “프로그램 둘러보기”
- 안심 문구: “상담은 100% 무료이며, 부담 없이 진행됩니다.”
- 격려: “처음이어도 괜찮아요”, “오늘 상담하면, 내년엔 그곳에 있어요”

**이모지**: UI 카테고리/국가 아이콘에 한해 절제 사용(🎓 ✈️ 💬 🇺🇸). 본문·헤드라인엔 사용 금지.

**숫자 활용**: 신뢰 지표는 구체적으로 (38년, 120,000+ 합격생, 32개국, 98% 비자 승인율). 의미 없는 통계 나열 금지.

---

## 3. VISUAL FOUNDATIONS — 비주얼 파운데이션

### 컬러
- **Primary — Jongno Vermilion `#E73C28`** (로고 “1” 마크에서 추출). 브랜드 액션·CTA·강조에만. 본문 링크/파괴적 액션에 분산 금지.
- **Ink `#3E393D` → `#2A2629`**: 워드마크 charcoal 기반 따뜻한 잉크. 본문 텍스트.
- **Accent Sky `#2188D9`**: 신뢰·글로벌 보조. 정보성 요소.
- **Warm Gold `#F5A623`**: 별점·수상·에너지 하이라이트.
- **Neutral**: 차가운 회색이 아닌 **warm-gray** 스케일(살짝 따뜻함)로 환대 톤 유지.
- **Semantic**: success/warning/error/info 각 bg+fg 페어.
- Dark 테마: `[data-theme="dark"]`로 surface/text/border 재정의.

### 타이포
- Latin **Inter** + 한글 **Noto Sans KR**. 한 패밀리 변수(`--font-sans`)로 통합.
- 위계: Display 56 / H1 34 / H2 26 / H3 20 / Body 15 / Caption 13. 헤드라인은 700~900 굵게, `letter-spacing` 음수로 단단하게.
- 본문 line-height 1.55로 한글 가독성 확보.

### 스페이싱 & 레이아웃
- 4px 베이스 8-그리드. `--space-xs(4)` ~ `--space-5xl(96)`.
- 컨테이너 max 1200px, 좌우 패딩 24px(모바일)/80px(데스크탑).

### 코너 & 카드
- 라운드 성향. 카드/사진 `--radius-lg(16px)`, 모달/검색바 `--radius-xl(24px)`, 칩/버튼 pill `--radius-full`.
- 카드: 흰 표면 + **soft warm-neutral 그림자**(`--shadow-md`) 또는 1px 보더(outlined). 컬러 좌측 보더 액센트 카드 **금지**.
- 사진 카드가 주인공 — 사진 위 채도 높은 overlay 금지, 어두운 gradient로 텍스트 가독성만 확보.

### 그림자/엘리베이션
- `rgba(42,38,41,*)` 따뜻한 잉크 기반 5단계(xs~xl). 푸르스름한 그림자 금지.
- 포커스: `--shadow-focus` (vermilion 30% ring).

### 모션
- duration 120/220/420ms, `--ease-out`(부드러운 감속), `--ease-spring`(살짝 통통).
- 호버: 살짝 떠오름(translateY -2px) + 보더 컬러 강조 또는 그림자 추가. 프레스: scale(0.97).
- 무한 루프 장식 애니메이션 지양.

### 이미지 톤
- 따뜻하고 밝은 실사 여행/캠퍼스 사진. 큰 라운드 카드에 담아 환대 톤.
- 데모에는 `picsum.photos` 시드 플레이스홀더 사용 — 실제 사진으로 교체 필요.

---

## 4. ICONOGRAPHY — 아이콘

- **시스템 아이콘**: 현재 데모는 **이모지**를 카테고리/국가/단계 표식으로 절제 사용(🎓 ✈️ 💬 🇺🇸 ✓). 빠른 프로토타입엔 적합.
- **권장(프로덕션)**: **Lucide** 또는 **Phosphor** 아웃라인 세트, stroke 2px, round join — 브랜드의 humanist/round 성향과 일치. CDN 링크 권장.
- **로고/심볼**: `assets/`의 PNG를 그대로 사용. 비율 변형·회전 금지. 어두운 배경엔 `logo-white.png`.
- **SVG 직접 드로잉 금지** — 라이브러리 아이콘 또는 제공 에셋만 사용.

---

## 5. 파일 인덱스 (매니페스트)

### 루트
- `styles.css` — 글로벌 진입점(@import 목록). 소비 프로젝트는 이 파일만 링크.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`(radius/shadow/motion/layout 포함), `base.css`.
- `assets/` — `logo-color.png`, `logo-white.png`, `mark-red.png`.

### 컴포넌트 (`components/`) — `window.Ds_cdd95a`
- `core/` — **Button**, **Badge**, **Card**, **Avatar**
- `forms/` — **Input**, **Select**
- `cards/` — **ListingCard** (시그니처 프로그램/목적지 카드)
- `navigation/` — **SearchBar** (시그니처 pill 검색바)

### 가이드라인 카드 (`guidelines/`) — Design System 탭
- Brand: 로고, 심볼 / Colors: primary, neutral, semantic / Type: scale, weights / Spacing: spacing, radius·elevation

### UI 킷 (`ui_kits/`)
- `marketing/` — 마케팅 홈페이지 (hero, 카테고리, 프로그램 그리드, 진행과정, 통계, 후기, CTA, 푸터, 상담 모달)
- `booking/` — 무료 상담 예약 4단계 플로우 (관심분야 → 일정 → 정보 → 완료)
- `mobile/` — 모바일 앱 (홈·탐색·상담·마이 4탭, 폰 프레임)

---

## 6. 사용법

소비 프로젝트에서 `styles.css`를 링크하고, `_ds_bundle.js`를 로드한 뒤 `window.Ds_cdd95a`에서 컴포넌트를 꺼내 씁니다.

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, ListingCard } = window.Ds_cdd95a;
</script>
```
