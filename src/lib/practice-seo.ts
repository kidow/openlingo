import type { Metadata } from "next";

import { getPracticeLanguageHref, getPracticeLanguagePack } from "@/lib/practice-routing";
import { getAbsoluteSiteUrl } from "@/lib/site";

const SITE_NAME = "OpenLingo";

function buildPracticeTitle(languageLabel: string) {
  return `${languageLabel} 연습 카드 | ${SITE_NAME}`;
}

function buildPracticeDescription(languageLabel: string, summary: string) {
  return `${languageLabel} 손글씨 연습을 위한 카드와 워크시트입니다. ${summary}`;
}

export function getPracticePageMetadata(languageId: string): Metadata {
  const pack = getPracticeLanguagePack(languageId);

  if (!pack) {
    return {};
  }

  const title = buildPracticeTitle(pack.label.ko);
  const description = buildPracticeDescription(pack.label.ko, pack.summary.ko);
  const canonicalUrl = getAbsoluteSiteUrl(getPracticeLanguageHref(pack.id));

  return {
    title,
    description,
    keywords: [pack.label.ko, "손글씨 연습", "연습 카드", "워크시트"],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "ko_KR",
      siteName: SITE_NAME,
      url: canonicalUrl,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
