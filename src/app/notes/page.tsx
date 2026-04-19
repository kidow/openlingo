import { redirect } from "next/navigation";

import { getDefaultNotesHref } from "@/lib/notes-routing";

export default function NotesPage() {
  redirect(getDefaultNotesHref());
}
