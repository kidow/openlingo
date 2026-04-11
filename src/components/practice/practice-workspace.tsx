import { ReactNode } from "react";

type PracticeWorkspaceProps = {
  tabsBand: ReactNode;
  canvasStage: ReactNode;
  templateGrid: ReactNode;
};

export function PracticeWorkspace({ tabsBand, canvasStage, templateGrid }: PracticeWorkspaceProps) {
  return (
    <main
      data-testid="practice-workspace"
      className="mx-auto min-h-[calc(100vh-88px)] w-full max-w-[1600px] px-4 py-6 md:px-6 lg:px-8"
    >
      <section className="overflow-hidden rounded-[32px] border border-[color:var(--border-strong)] bg-[linear-gradient(180deg,rgba(252,249,241,0.98),rgba(246,240,231,0.97))] shadow-[0_24px_70px_rgba(88,63,30,0.08)]">
        {tabsBand}
        <div className="grid gap-6 p-4 md:p-6 lg:p-8">
          <div className="min-h-[28rem]">{canvasStage}</div>
          {templateGrid}
        </div>
      </section>
    </main>
  );
}
