"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { RefreshCw } from "lucide-react";

const PULL_ACTIVATION_ZONE = 96;
const PULL_THRESHOLD = 88;
const MAX_PULL_DISTANCE = 140;
const MIN_PULL_DISTANCE = 12;

type TouchState = {
  identifier: number;
  startX: number;
  startY: number;
  tracking: boolean;
};

type PracticeWorkspaceProps = {
  tabsBand: ReactNode;
  canvasStage: ReactNode;
  templateGrid: ReactNode;
};

export function PracticeWorkspace({ tabsBand, canvasStage, templateGrid }: PracticeWorkspaceProps) {
  const mainRef = useRef<HTMLElement | null>(null);
  const touchStateRef = useRef<TouchState | null>(null);
  const pullDistanceRef = useRef(0);
  const refreshingRef = useRef(false);
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const main = mainRef.current;

    if (!main) {
      return;
    }

    const updatePullDistance = (value: number) => {
      const nextValue = Math.max(0, Math.min(value, MAX_PULL_DISTANCE));
      pullDistanceRef.current = nextValue;
      setPullDistance(nextValue);
    };

    const clearTouchState = () => {
      touchStateRef.current = null;

      if (refreshingRef.current) {
        return;
      }

      updatePullDistance(0);
    };

    const scheduleReload = () => {
      if (refreshingRef.current) {
        return;
      }

      refreshingRef.current = true;
      setIsRefreshing(true);
      updatePullDistance(MAX_PULL_DISTANCE);

      window.setTimeout(() => {
        window.location.reload();
      }, 140);
    };

    const getTouch = (touches: TouchList, identifier: number) =>
      Array.from(touches).find((touch) => touch.identifier === identifier) ?? null;

    const handleTouchStart = (event: TouchEvent) => {
      if (refreshingRef.current || event.touches.length !== 1) {
        return;
      }

      if (main.scrollTop > 0) {
        return;
      }

      const touch = event.touches[0];
      const bounds = main.getBoundingClientRect();
      const topOffset = touch.clientY - bounds.top;

      if (topOffset > PULL_ACTIVATION_ZONE) {
        return;
      }

      touchStateRef.current = {
        identifier: touch.identifier,
        startX: touch.clientX,
        startY: touch.clientY,
        tracking: false,
      };
    };

    const handleTouchMove = (event: TouchEvent) => {
      const state = touchStateRef.current;

      if (!state || refreshingRef.current) {
        return;
      }

      const touch = getTouch(event.touches, state.identifier);

      if (!touch) {
        return;
      }

      if (main.scrollTop > 0) {
        clearTouchState();
        return;
      }

      const deltaY = touch.clientY - state.startY;
      const deltaX = Math.abs(touch.clientX - state.startX);

      if (deltaY <= 0 || deltaX > deltaY) {
        if (state.tracking) {
          event.preventDefault();
        }

        return;
      }

      if (deltaY < MIN_PULL_DISTANCE) {
        return;
      }

      state.tracking = true;
      event.preventDefault();
      updatePullDistance(deltaY);
    };

    const handleTouchEnd = () => {
      const state = touchStateRef.current;

      if (!state) {
        return;
      }

      if (pullDistanceRef.current >= PULL_THRESHOLD) {
        scheduleReload();
      } else if (!refreshingRef.current) {
        updatePullDistance(0);
      }

      touchStateRef.current = null;
    };

    main.addEventListener("touchstart", handleTouchStart, { passive: true });
    main.addEventListener("touchmove", handleTouchMove, { passive: false });
    main.addEventListener("touchend", handleTouchEnd, { passive: true });
    main.addEventListener("touchcancel", clearTouchState, { passive: true });

    return () => {
      main.removeEventListener("touchstart", handleTouchStart);
      main.removeEventListener("touchmove", handleTouchMove);
      main.removeEventListener("touchend", handleTouchEnd);
      main.removeEventListener("touchcancel", clearTouchState);
    };
  }, []);

  const refreshProgress = Math.min(pullDistance / PULL_THRESHOLD, 1);

  return (
    <main
      ref={mainRef}
      data-testid="practice-workspace"
      className="relative mx-auto h-[calc(100dvh-88px)] w-full max-w-[1600px] overflow-y-auto overscroll-y-contain"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
        <div
          className={[
            "flex h-16 w-16 items-center justify-center rounded-full border border-[color:var(--border-soft)] bg-[color:rgba(252,249,241,0.92)] shadow-[0_14px_28px_rgba(69,48,20,0.16)] backdrop-blur-sm transition-all duration-200",
            pullDistance > 0 || isRefreshing ? "scale-100 opacity-100" : "scale-90 opacity-0",
          ].join(" ")}
        >
          <RefreshCw
            className={[
              "h-7 w-7 text-[color:var(--accent)] transition-transform duration-150",
              isRefreshing ? "animate-spin" : "",
            ].join(" ")}
            style={{
              transform: isRefreshing ? undefined : `rotate(${refreshProgress * 180}deg)`,
            }}
          />
        </div>
      </div>
      <section className="bg-[linear-gradient(180deg,rgba(252,249,241,0.98),rgba(246,240,231,0.97))] pb-8">
        {tabsBand}
        <div className="grid gap-6">
          <div className="min-h-[28rem]">{canvasStage}</div>
          {templateGrid}
        </div>
      </section>
    </main>
  );
}
