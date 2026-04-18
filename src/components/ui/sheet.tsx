"use client";

import * as React from "react";
import { Drawer } from "vaul";

import { cn } from "@/lib/utils";

const Sheet = Drawer.Root;
const SheetTrigger = Drawer.Trigger;
const SheetClose = Drawer.Close;
const SheetTitle = Drawer.Title;
const SheetDescription = Drawer.Description;

const SheetPortal = ({ children }: { children: React.ReactNode }) => <Drawer.Portal>{children}</Drawer.Portal>;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof Drawer.Overlay>,
  React.ComponentPropsWithoutRef<typeof Drawer.Overlay>
>(({ className, ...props }, ref) => (
  <Drawer.Overlay ref={ref} className={cn("fixed inset-0 z-50 bg-black/45 backdrop-blur-[1px]", className)} {...props} />
));

SheetOverlay.displayName = Drawer.Overlay.displayName;

const SheetContent = React.forwardRef<
  React.ElementRef<typeof Drawer.Content>,
  React.ComponentPropsWithoutRef<typeof Drawer.Content>
>(({ className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <Drawer.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mx-auto flex max-h-[88dvh] w-full max-w-4xl flex-col rounded-t-[32px] border border-[color:var(--border-soft)] bg-[color:var(--paper)] outline-none shadow-[0_-24px_60px_rgba(88,63,30,0.22)]",
        className
      )}
      {...props}
    >
      <div className="flex justify-center pt-3">
        <div className="h-1.5 w-14 rounded-full bg-[color:var(--border-soft)]" />
      </div>
      {children}
    </Drawer.Content>
  </SheetPortal>
));

SheetContent.displayName = Drawer.Content.displayName;

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-1.5 px-5 pt-4 md:px-6", className)} {...props} />
);

SheetHeader.displayName = "SheetHeader";

const SheetBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("min-h-0 flex-1 overflow-y-auto px-5 pb-5 pt-4 md:px-6", className)} {...props} />
);

SheetBody.displayName = "SheetBody";

export {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};
