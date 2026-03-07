import { Stroke, StrokePoint, WritingTemplate } from "@/types/writing";

const SAMPLE_COUNT = 96;

type NormalizedBounds = {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
};

function getBounds(points: StrokePoint[]): NormalizedBounds {
  const seed = points[0];

  return points.reduce(
    (bounds, point) => ({
      minX: Math.min(bounds.minX, point.x),
      maxX: Math.max(bounds.maxX, point.x),
      minY: Math.min(bounds.minY, point.y),
      maxY: Math.max(bounds.maxY, point.y),
    }),
    {
      minX: seed.x,
      maxX: seed.x,
      minY: seed.y,
      maxY: seed.y,
    }
  );
}

function polylineLength(points: StrokePoint[]) {
  let total = 0;

  for (let index = 1; index < points.length; index += 1) {
    const previous = points[index - 1];
    const current = points[index];
    total += Math.hypot(current.x - previous.x, current.y - previous.y);
  }

  return total;
}

function resamplePolyline(points: StrokePoint[], sampleCount: number) {
  if (points.length === 0) {
    return [];
  }

  if (points.length === 1) {
    return Array.from({ length: sampleCount }, () => points[0]);
  }

  const totalLength = polylineLength(points);

  if (totalLength === 0) {
    return Array.from({ length: sampleCount }, () => points[0]);
  }

  const interval = totalLength / (sampleCount - 1);
  const sampled: StrokePoint[] = [points[0]];
  let distanceAccumulator = 0;
  let segmentStart = points[0];

  for (let index = 1; index < points.length; index += 1) {
    const segmentEnd = points[index];
    let segmentLength = Math.hypot(segmentEnd.x - segmentStart.x, segmentEnd.y - segmentStart.y);

    if (segmentLength === 0) {
      continue;
    }

    while (distanceAccumulator + segmentLength >= interval) {
      const ratio = (interval - distanceAccumulator) / segmentLength;
      const nextPoint = {
        x: segmentStart.x + ratio * (segmentEnd.x - segmentStart.x),
        y: segmentStart.y + ratio * (segmentEnd.y - segmentStart.y),
        t: segmentEnd.t,
      };

      sampled.push(nextPoint);
      segmentStart = nextPoint;
      segmentLength = Math.hypot(segmentEnd.x - segmentStart.x, segmentEnd.y - segmentStart.y);
      distanceAccumulator = 0;
    }

    distanceAccumulator += segmentLength;
    segmentStart = segmentEnd;
  }

  while (sampled.length < sampleCount) {
    sampled.push(points[points.length - 1]);
  }

  return sampled;
}

function normalizePoints(points: StrokePoint[]) {
  const bounds = getBounds(points);
  const width = Math.max(bounds.maxX - bounds.minX, 1);
  const height = Math.max(bounds.maxY - bounds.minY, 1);
  const scale = Math.max(width, height);
  const centerX = bounds.minX + width / 2;
  const centerY = bounds.minY + height / 2;

  return points.map((point) => ({
    ...point,
    x: (point.x - centerX) / scale,
    y: (point.y - centerY) / scale,
  }));
}

function getNearestDistance(point: StrokePoint, targets: StrokePoint[]) {
  let best = Number.POSITIVE_INFINITY;

  for (const target of targets) {
    const distance = Math.hypot(point.x - target.x, point.y - target.y);

    if (distance < best) {
      best = distance;
    }
  }

  return best;
}

function averageNearestDistance(source: StrokePoint[], targets: StrokePoint[]) {
  let total = 0;

  for (const point of source) {
    total += getNearestDistance(point, targets);
  }

  return total / source.length;
}

function strokesToPoints(strokes: Stroke[]) {
  return strokes.flatMap((stroke) => stroke.points);
}

function sampleTemplatePath(template: WritingTemplate) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", template.guidePathD);

  const totalLength = path.getTotalLength();

  return Array.from({ length: SAMPLE_COUNT }, (_, index) => {
    const point = path.getPointAtLength((totalLength * index) / (SAMPLE_COUNT - 1));

    return {
      x: point.x,
      y: point.y,
      t: index,
    };
  });
}

export function calculatePrototypeSimilarity(template: WritingTemplate, strokes: Stroke[]) {
  const inputPoints = strokesToPoints(strokes);

  if (inputPoints.length < 8) {
    return null;
  }

  const normalizedInput = normalizePoints(resamplePolyline(inputPoints, SAMPLE_COUNT));
  const normalizedTemplate = normalizePoints(sampleTemplatePath(template));
  const bidirectionalDistance =
    (averageNearestDistance(normalizedInput, normalizedTemplate) +
      averageNearestDistance(normalizedTemplate, normalizedInput)) /
    2;

  const score = Math.max(0, Math.min(100, Math.round(100 - bidirectionalDistance * 220)));

  return score;
}
