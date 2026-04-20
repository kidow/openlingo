import { getLocalizedText } from "@/i18n/config";
import { WritingTemplate } from "@/types/writing";

const JAPANESE_LABEL_PREFIXES = ["히라가나 ", "가타카나 ", "Hiragana ", "Katakana "];

function stripJapaneseLabelPrefix(label: string) {
  for (const prefix of JAPANESE_LABEL_PREFIXES) {
    if (label.startsWith(prefix)) {
      return label.slice(prefix.length);
    }
  }

  return label;
}

function stripJapaneseLabelRomanization(label: string) {
  return label.replace(/\s*\([A-Za-z]+\)$/, "");
}

export function getPracticeTemplateDisplayLabel(template: WritingTemplate) {
  const localizedLabel = getLocalizedText(template.label);

  if (template.languageId !== "ja") {
    return localizedLabel;
  }

  return stripJapaneseLabelRomanization(stripJapaneseLabelPrefix(localizedLabel));
}
