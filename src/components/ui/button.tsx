"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-[color:var(--background)]",
  {
    variants: {
      variant: {
        default:
          "bg-[color:var(--accent)] text-[color:var(--accent-foreground)] shadow-[0_8px_24px_rgba(88,63,30,0.12)] hover:bg-[color:var(--accent-strong)]",
        ghost:
          "border border-[color:var(--border-soft)] bg-[color:var(--paper)] text-[color:var(--foreground)] hover:bg-[color:var(--paper-strong)]",
        subtle:
          "bg-[color:var(--paper-strong)] text-[color:var(--muted-foreground)] hover:bg-[color:var(--paper-deep)]",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-6 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

