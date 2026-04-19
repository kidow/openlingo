import * as React from "react";

import { cn } from "@/lib/utils";
import { slugifyText } from "@/lib/notes-headings";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  children?: React.ReactNode;
};

function getTextFromChildren(children: React.ReactNode): string {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }

  if (Array.isArray(children)) {
    return children.map(getTextFromChildren).join("");
  }

  if (React.isValidElement<{ children?: React.ReactNode }>(children)) {
    return getTextFromChildren(children.props.children);
  }

  return "";
}

function createHeading(level: 2 | 3 | 4) {
  const Tag = `h${level}` as const;
  const baseClassName =
    level === 2
      ? "mt-10 scroll-mt-28 border-t border-[color:var(--border-soft)] pt-8 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[color:var(--foreground)] first:mt-0 first:border-t-0 first:pt-0"
      : level === 3
        ? "mt-8 scroll-mt-28 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[color:var(--foreground)]"
        : "mt-6 scroll-mt-28 font-semibold text-[color:var(--foreground)]";

  return function Heading({ children, className, ...props }: HeadingProps) {
    const id = slugifyText(getTextFromChildren(children));

    return (
      <Tag id={id} className={cn(baseClassName, className)} {...props}>
        {children}
      </Tag>
    );
  };
}

export const mdxComponents = {
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  p: function Paragraph({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return <p className={cn("text-[15px] leading-8 text-[color:var(--foreground)]", className)} {...props} />;
  },
  ul: function UnorderedList({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
    return <ul className={cn("list-disc space-y-2 pl-6 text-[15px] leading-8", className)} {...props} />;
  },
  ol: function OrderedList({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) {
    return <ol className={cn("list-decimal space-y-2 pl-6 text-[15px] leading-8", className)} {...props} />;
  },
  li: function ListItem({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) {
    return <li className={cn("pl-1", className)} {...props} />;
  },
  a: function Anchor({
    className,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
      <a
        className={cn(
          "font-medium text-[color:var(--foreground)] underline decoration-[color:var(--accent)] decoration-2 underline-offset-4 transition-colors hover:text-[color:var(--accent-strong)]",
          className
        )}
        {...props}
      />
    );
  },
  blockquote: function Blockquote({
    className,
    ...props
  }: React.BlockquoteHTMLAttributes<HTMLElement>) {
    return (
      <blockquote
        className={cn(
          "border-s-4 border-[color:var(--accent)] bg-[color:var(--paper-strong)] px-5 py-4 text-[15px] leading-8 text-[color:var(--muted-foreground)]",
          className
        )}
        {...props}
      />
    );
  },
  table: function Table({ className, ...props }: React.TableHTMLAttributes<HTMLTableElement>) {
    return (
      <div className="my-6 overflow-x-auto">
        <table className={cn("w-full border-collapse text-left text-sm", className)} {...props} />
      </div>
    );
  },
  th: function TableHeader({ className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) {
    return <th className={cn("border-b border-[color:var(--border-soft)] px-3 py-2 text-left", className)} {...props} />;
  },
  td: function TableCell({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
    return <td className={cn("border-b border-[color:var(--border-soft)] px-3 py-2 align-top", className)} {...props} />;
  },
  code: function InlineCode({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
      <code
        className={cn(
          "rounded-md bg-[color:var(--paper-deep)] px-1.5 py-0.5 font-[family-name:var(--font-mono)] text-[0.9em] text-[color:var(--foreground)]",
          className
        )}
        {...props}
      />
    );
  },
  pre: function Preformatted({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) {
    return (
      <pre
        className={cn(
          "overflow-x-auto rounded-[24px] border border-[color:var(--border-soft)] bg-[color:var(--paper-deep)] p-5 text-sm leading-7",
          className
        )}
        {...props}
      />
    );
  },
  hr: function Divider({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) {
    return <hr className={cn("my-10 border-[color:var(--border-soft)]", className)} {...props} />;
  },
};
