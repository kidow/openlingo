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
      className="mx-auto min-h-[calc(100vh-88px)] w-full max-w-[1600px]"
    >
      <section className="bg-[linear-gradient(180deg,rgba(252,249,241,0.98),rgba(246,240,231,0.97))]">
        {tabsBand}
        <div className="grid gap-6">
          <div className="min-h-[28rem]">{canvasStage}</div>
          {templateGrid}
        </div>
      </section>
    </main>
  );
}
