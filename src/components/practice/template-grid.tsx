"use client";

import { ChangeEvent, useState } from "react";
import { BookOpenText, Search } from "lucide-react";

import { AppDictionary } from "@/i18n/dictionaries";
import { getLocalizedText } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { TemplateGlyphMark } from "@/components/practice/template-glyph";
import { languagePacks } from "@/data/practice-content";
import { WritingTemplate } from "@/types/writing";

type TemplateGridProps = {
  dictionary: AppDictionary;
  selectedLanguage: (typeof languagePacks)[number];
  selectedTemplateId: string;
  onSelectTemplate: (templateId: string) => void;
};

type ChineseStrokeBucket = {
  id: string;
  label: string;
  matches: (strokeCount: number) => boolean;
};

function isChineseBasicStrokeTemplate(templateId: string) {
  return templateId.includes("-stroke-");
}

function getChineseTemplateStrokeCount(template: WritingTemplate) {
  return template.strokeCount ?? template.strokeGuides?.length ?? 0;
}

function getChineseStrokeBuckets(): ChineseStrokeBucket[] {
  return [
    {
      id: "all",
      label: "전체 획수",
      matches: () => true,
    },
    {
      id: "1-2",
      label: "1-2획",
      matches: (strokeCount) => strokeCount >= 1 && strokeCount <= 2,
    },
    {
      id: "3-4",
      label: "3-4획",
      matches: (strokeCount) => strokeCount >= 3 && strokeCount <= 4,
    },
    {
      id: "5-8",
      label: "5-8획",
      matches: (strokeCount) => strokeCount >= 5 && strokeCount <= 8,
    },
    {
      id: "9+",
      label: "9획+",
      matches: (strokeCount) => strokeCount >= 9,
    },
  ];
}

export function TemplateGrid({
  dictionary,
  selectedLanguage,
  selectedTemplateId,
  onSelectTemplate,
}: TemplateGridProps) {
  const templatesById = new Map(selectedLanguage.templates.map((template) => [template.id, template]));
  const isChineseSimplifiedPack = selectedLanguage.id === "zh-hans";
  const isChineseTraditionalPack = selectedLanguage.id === "zh-hant";
  const usePrintedCardGlyphs = selectedLanguage.id === "ru";
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState(() =>
    selectedLanguage.id === "zh-hans" ? selectedLanguage.templateGroups[0]?.id ?? "all" : "all"
  );
  const [selectedStrokeBucketId, setSelectedStrokeBucketId] = useState("all");

  const templateGroups = selectedLanguage.templateGroups.length
    ? selectedLanguage.templateGroups
    : [
        {
          id: "all",
          label: {
            ko: "전체",
            en: "All",
          },
          templateIds: selectedLanguage.templates.map((template) => template.id),
        },
    ];

  const chineseCategories = templateGroups.map((group) => ({
    id: group.id,
    label: getLocalizedText(group.label),
    count: group.displayCount ?? group.templateIds.length,
  }));

  const chineseStrokeBuckets = getChineseStrokeBuckets();
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const chineseStrokeBucket =
    chineseStrokeBuckets.find((bucket) => bucket.id === selectedStrokeBucketId) ?? chineseStrokeBuckets[0];
  const selectedChineseCategory = templateGroups.find((group) => group.id === selectedCategoryId);
  const selectedChineseCategoryCount = selectedChineseCategory?.displayCount ?? selectedChineseCategory?.templateIds.length;
  const showChineseStrokeBuckets = isChineseTraditionalPack && selectedCategoryId !== "strokes";

  function getChineseCategoryTemplateIds() {
    if (selectedCategoryId === "all") {
      return selectedLanguage.templates.map((item) => item.id);
    }

    return selectedLanguage.templateGroups.find((group) => group.id === selectedCategoryId)?.templateIds ?? [];
  }

  const filteredChineseTemplates = isChineseSimplifiedPack
    ? selectedLanguage.templates.filter((template) => getChineseCategoryTemplateIds().includes(template.id))
    : isChineseTraditionalPack
      ? selectedLanguage.templates.filter((template) => {
          const chineseCategoryTemplateIds =
            selectedCategoryId === "all"
              ? selectedLanguage.templates
                  .filter((item) => !isChineseBasicStrokeTemplate(item.id))
                  .map((item) => item.id)
              : selectedLanguage.templateGroups.find((group) => group.id === selectedCategoryId)?.templateIds ?? [];
          if (!chineseCategoryTemplateIds.includes(template.id)) {
            return false;
          }

          if (selectedStrokeBucketId !== "all" && isChineseBasicStrokeTemplate(template.id)) {
            return false;
          }

          if (showChineseStrokeBuckets) {
            const strokeCount = getChineseTemplateStrokeCount(template);
            if (!chineseStrokeBucket.matches(strokeCount)) {
              return false;
            }
          }

          if (!normalizedQuery) {
            return true;
          }

          const searchableText = [
            getLocalizedText(template.label),
            template.nativeLabel,
            getLocalizedText(template.description),
          ]
            .join(" ")
            .toLowerCase();

          return searchableText.includes(normalizedQuery);
        })
      : selectedLanguage.templates;

  function renderTemplateCard(template: WritingTemplate) {
    const active = template.id === selectedTemplateId;

    return (
      <button
        key={`worksheet-${template.id}`}
        type="button"
        onClick={() => onSelectTemplate(template.id)}
        className={cn(
          "inline-flex w-fit flex-none flex-col border px-3 py-3 text-left transition-colors sm:px-4",
          template.mode === "word" ? "items-center text-center" : "items-start",
          active
            ? "border-[color:var(--border-strong)] bg-[color:var(--paper-deep)]"
            : "border-[color:var(--border-soft)] bg-white/40 hover:bg-[color:var(--paper-strong)]"
        )}
      >
        <TemplateGlyphMark
          template={template}
          label={`${getLocalizedText(template.label)} glyph`}
          testId={`worksheet-template-card-glyph-${template.id}`}
          className="h-10 w-10"
          renderMode={usePrintedCardGlyphs ? "printed" : "glyph"}
        />
        <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
          {getLocalizedText(template.label)}
        </div>
      </button>
    );
  }

  return (
    <section
      data-testid="template-grid"
      aria-label={dictionary.sections.practiceCardsTitle}
      className="border-x-0 border-b-0 border-t border-[color:var(--border-soft)] bg-[color:var(--paper)]/64 p-4 md:p-5"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-[color:var(--foreground)]">
            <BookOpenText className="size-4" />
            {dictionary.sections.practiceCardsTitle}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge className="rounded-none">
            {isChineseSimplifiedPack && selectedChineseCategoryCount ? selectedChineseCategoryCount : selectedLanguage.templates.length}
          </Badge>
        </div>
      </div>

      {isChineseSimplifiedPack ? (
        <div className="mt-4 grid gap-4">
          <div className="flex flex-wrap gap-2">
            {chineseCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedCategoryId(category.id)}
                className={cn(
                  "border px-3 py-1.5 text-xs uppercase tracking-[0.16em] transition-colors",
                  selectedCategoryId === category.id
                    ? "border-[color:var(--border-strong)] bg-[color:var(--paper-deep)]"
                    : "border-[color:var(--border-soft)] bg-white/40 hover:bg-[color:var(--paper-strong)]"
                )}
              >
                {category.label} · {category.count}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-start gap-3">{filteredChineseTemplates.map(renderTemplateCard)}</div>
        </div>
      ) : isChineseTraditionalPack ? (
        <div className="mt-4 grid gap-4">
          <label className="grid gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
              검색
            </span>
            <div className="flex items-center gap-2 border border-[color:var(--border-soft)] bg-white/60 px-3 py-2">
              <Search className="size-4 shrink-0 text-[color:var(--muted-foreground)]" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value)}
                placeholder="한자, 필획, 설명 검색"
                className="w-full bg-transparent text-sm outline-none placeholder:text-[color:var(--muted-foreground)]"
              />
            </div>
          </label>

          <div className="grid gap-3">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedCategoryId("all")}
                className={cn(
                  "border px-3 py-1.5 text-xs uppercase tracking-[0.16em] transition-colors",
                  selectedCategoryId === "all"
                    ? "border-[color:var(--border-strong)] bg-[color:var(--paper-deep)]"
                    : "border-[color:var(--border-soft)] bg-white/40 hover:bg-[color:var(--paper-strong)]"
                )}
              >
                전체
              </button>
              {chineseCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategoryId(category.id)}
                  className={cn(
                    "border px-3 py-1.5 text-xs uppercase tracking-[0.16em] transition-colors",
                    selectedCategoryId === category.id
                      ? "border-[color:var(--border-strong)] bg-[color:var(--paper-deep)]"
                      : "border-[color:var(--border-soft)] bg-white/40 hover:bg-[color:var(--paper-strong)]"
                  )}
                >
                  {category.label} · {category.count}
                </button>
              ))}
            </div>

            {showChineseStrokeBuckets ? (
              <div className="flex flex-wrap gap-2">
                {chineseStrokeBuckets.map((bucket) => (
                  <button
                    key={bucket.id}
                    type="button"
                    onClick={() => setSelectedStrokeBucketId(bucket.id)}
                    className={cn(
                      "border px-3 py-1.5 text-xs uppercase tracking-[0.16em] transition-colors",
                      selectedStrokeBucketId === bucket.id
                        ? "border-[color:var(--border-strong)] bg-[color:var(--paper-deep)]"
                        : "border-[color:var(--border-soft)] bg-white/40 hover:bg-[color:var(--paper-strong)]"
                    )}
                  >
                    {bucket.label}
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div className="flex flex-wrap items-start gap-3">{filteredChineseTemplates.map(renderTemplateCard)}</div>
        </div>
      ) : (
        <div className="mt-4 grid gap-5">
          {templateGroups.map((group) => {
            const groupedTemplates = group.templateIds
              .map((templateId) => templatesById.get(templateId))
              .filter((template): template is (typeof selectedLanguage.templates)[number] => Boolean(template));

            if (groupedTemplates.length === 0) {
              return null;
            }

            return (
              <section key={group.id} className="grid gap-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium text-[color:var(--foreground)]">
                      {getLocalizedText(group.label)}
                    </div>
                    {group.description ? (
                      <div className="text-xs text-[color:var(--muted-foreground)]">
                        {getLocalizedText(group.description)}
                      </div>
                    ) : null}
                  </div>
                  <Badge className="rounded-none">{groupedTemplates.length}</Badge>
                </div>

                <div className="flex flex-wrap items-start gap-3">{groupedTemplates.map(renderTemplateCard)}</div>
              </section>
            );
          })}
        </div>
      )}
    </section>
  );
}
