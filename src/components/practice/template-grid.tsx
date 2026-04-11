"use client";

import { BookOpenText } from "lucide-react";

import { AppDictionary } from "@/i18n/dictionaries";
import { AppLocale, getLocalizedText } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { TemplateGlyphMark } from "@/components/practice/template-glyph";
import { languagePacks } from "@/data/practice-content";

type TemplateGridProps = {
  locale: AppLocale;
  dictionary: AppDictionary;
  selectedLanguage: (typeof languagePacks)[number];
  selectedTemplateId: string;
  selectedTemplateCue: string;
  onSelectTemplate: (templateId: string) => void;
};

export function TemplateGrid({
  locale,
  dictionary,
  selectedLanguage,
  selectedTemplateId,
  selectedTemplateCue,
  onSelectTemplate,
}: TemplateGridProps) {
  return (
    <section
      data-testid="template-grid"
      aria-label={dictionary.sections.practiceCardsTitle}
      className="rounded-[28px] border border-[color:var(--border-soft)] bg-[color:var(--paper)]/72 p-4 md:p-5"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-[color:var(--foreground)]">
            <BookOpenText className="size-4" />
            {dictionary.sections.practiceCardsTitle}
          </div>
          <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">{selectedTemplateCue}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge>{selectedLanguage.templates.length}</Badge>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {selectedLanguage.templates.map((template) => {
          const active = template.id === selectedTemplateId;

          return (
            <button
              key={`worksheet-${template.id}`}
              type="button"
              onClick={() => onSelectTemplate(template.id)}
              className={cn(
                "rounded-[22px] border px-4 py-3 text-left transition-colors",
                active
                  ? "border-[color:var(--border-strong)] bg-[color:var(--paper-deep)]"
                  : "border-[color:var(--border-soft)] bg-white/40 hover:bg-[color:var(--paper-strong)]"
              )}
            >
              <TemplateGlyphMark
                template={template}
                label={`${getLocalizedText(template.label, locale)} glyph`}
                testId={`worksheet-template-card-glyph-${template.id}`}
                className="h-10 w-10"
              />
              <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                {getLocalizedText(template.label, locale)}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
