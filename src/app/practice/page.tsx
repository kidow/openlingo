import { redirect } from "next/navigation";

import { getDefaultPracticeLanguageHref } from "@/lib/practice-routing";

export default function PracticeIndexPage() {
  redirect(getDefaultPracticeLanguageHref());
}
