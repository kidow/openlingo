"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { speakText } from "@/lib/speech-synthesis";
import { resolveSelectionSpeechLanguageTag } from "@/lib/selection-speech";

function isEditableElement(target: EventTarget | null) {
  if (!(target instanceof Element)) {
    return false;
  }

  if (target.closest("input, textarea, select, [contenteditable='true']")) {
    return true;
  }

  return target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || (target instanceof HTMLElement && target.isContentEditable);
}

function getSelectedText() {
  if (typeof window === "undefined") {
    return "";
  }

  const selection = window.getSelection();

  if (!selection || selection.isCollapsed) {
    return "";
  }

  return selection.toString();
}

export function SelectionPronunciationShortcut() {
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!event.metaKey && !event.ctrlKey) {
        return;
      }

      if (event.key.toLowerCase() !== "x" || event.altKey) {
        return;
      }

      if (isEditableElement(event.target)) {
        return;
      }

      const selectedText = getSelectedText();
      const languageTag = resolveSelectionSpeechLanguageTag(selectedText, pathname);

      if (!languageTag) {
        return;
      }

      const didSpeak = speakText(selectedText, languageTag);

      if (didSpeak) {
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pathname]);

  return null;
}

