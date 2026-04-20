import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { getDefaultPracticeLanguageHref } from "@/lib/practice-routing";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function PracticeIndexPage() {
  redirect(getDefaultPracticeLanguageHref());
}
