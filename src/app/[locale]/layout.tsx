import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AppHeader } from "@/components/layout/app-header";
import { ExampleWordsActionProvider } from "@/components/layout/example-words-action-context";
import { AppLocale, isAppLocale, LOCALES } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

type LocaleMetadataProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleMetadataProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isAppLocale(rawLocale) ? rawLocale : LOCALES[0];
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    applicationName: "OpenLingo",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ko: "/ko",
        en: "/en",
      },
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: dictionary.metadata.appleWebAppTitle,
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: rawLocale } = await params;

  if (!isAppLocale(rawLocale)) {
    notFound();
  }

  const locale: AppLocale = rawLocale;
  const dictionary = getDictionary(locale);

  return (
    <ExampleWordsActionProvider>
      <div className="min-h-screen">
        <AppHeader locale={locale} dictionary={dictionary.header} />
        {children}
      </div>
    </ExampleWordsActionProvider>
  );
}
