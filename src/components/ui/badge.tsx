import * as React from "react";

import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-[color:var(--border-soft)] bg-[color:var(--paper-deep)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
