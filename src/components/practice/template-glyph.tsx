import { WritingTemplate } from "@/types/writing";
import { cn } from "@/lib/utils";

const DEFAULT_GLYPH_PLACEMENT = {
  x: 18,
  y: 18,
  width: 64,
  height: 64,
};

function getGlyphTransform(template: WritingTemplate) {
  const glyph = template.glyph;

  if (!glyph) {
    return null;
  }

  const placement = glyph.placement ?? DEFAULT_GLYPH_PLACEMENT;
  const [minX, minY, viewBoxWidth, viewBoxHeight] = glyph.viewBox;
  const scale = Math.min(placement.width / viewBoxWidth, placement.height / viewBoxHeight);
  const renderedWidth = viewBoxWidth * scale;
  const renderedHeight = viewBoxHeight * scale;
  const translateX = placement.x + (placement.width - renderedWidth) / 2 - minX * scale;
  const translateY = placement.y + (placement.height - renderedHeight) / 2 - minY * scale;

  return `translate(${translateX} ${translateY}) scale(${scale})`;
}

type TemplateGlyphLayerProps = {
  template: WritingTemplate;
  fill: string;
  maskId?: string;
  opacity?: number;
  testId?: string;
};

export function TemplateGlyphLayer({
  template,
  fill,
  maskId,
  opacity = 1,
  testId,
}: TemplateGlyphLayerProps) {
  if (!template.glyph) {
    return null;
  }

  const transform = getGlyphTransform(template);

  if (!transform) {
    return null;
  }

  return (
    <g data-testid={testId} mask={maskId ? `url(#${maskId})` : undefined} opacity={opacity}>
      <g transform={transform}>
        {template.glyph.paths.map((path, index) => (
          <path
            key={`${template.id}-glyph-path-${index}`}
            d={path.d}
            fill={fill}
            fillRule={path.fillRule}
            clipRule={path.clipRule}
          />
        ))}
      </g>
    </g>
  );
}

type TemplateGlyphMarkProps = {
  template: WritingTemplate;
  label: string;
  className?: string;
  testId?: string;
};

export function TemplateGlyphMark({ template, label, className, testId }: TemplateGlyphMarkProps) {
  if (!template.glyph) {
    return (
      <div
        data-testid={testId}
        aria-label={label}
        className={cn("font-[family-name:var(--font-display)] text-2xl text-[color:var(--foreground)]", className)}
      >
        {template.nativeLabel}
      </div>
    );
  }

  return (
    <svg
      data-testid={testId}
      role="img"
      aria-label={label}
      viewBox="0 0 100 100"
      className={cn("text-[color:var(--foreground)]", className)}
    >
      <TemplateGlyphLayer template={template} fill="currentColor" />
    </svg>
  );
}
