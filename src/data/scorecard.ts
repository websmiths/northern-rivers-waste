// Claim scorecard model.
//
// IMPORTANT — editorial stance: every axis scores THE CLAIM AND ITS LANGUAGE,
// never the author's honesty, character or intent. Each score must be defensible
// from the evidence set out in the breakdown body. This keeps the site fair and
// non-defamatory on a hostile read. See /about.

export type ScoreLevel = 'good' | 'mixed' | 'poor';
export type ScoreAxisKey = 'accuracy' | 'relevance' | 'framing' | 'evidence';
export type Scorecard = Record<ScoreAxisKey, ScoreLevel>;

export interface AxisDef {
  key: ScoreAxisKey;
  label: string;
  /** What the axis measures — shown as the "how we score" note. */
  blurb: string;
  /** One-word rating shown for each level. */
  levels: Record<ScoreLevel, string>;
}

export const SCORE_AXES: AxisDef[] = [
  {
    key: 'accuracy',
    label: 'Accuracy',
    blurb: 'Is the statement factually correct?',
    levels: { good: 'Accurate', mixed: 'Part-true', poor: 'Inaccurate' },
  },
  {
    key: 'relevance',
    label: 'Relevance',
    blurb: 'Does it address the real question, or redirect away from it?',
    levels: { good: 'On point', mixed: 'Partial', poor: 'Misdirection' },
  },
  {
    key: 'framing',
    label: 'Framing',
    blurb: 'Is the wording measured, or loaded?',
    levels: { good: 'Measured', mixed: 'Leaning', poor: 'Loaded' },
  },
  {
    key: 'evidence',
    label: 'Evidence',
    blurb: 'Is the claim backed by evidence?',
    levels: { good: 'Backed', mixed: 'Thin', poor: 'Unbacked' },
  },
];

export interface AxisAggregate {
  axis: AxisDef;
  counts: Record<ScoreLevel, number>;
  /** Most common level (ties resolve to the worse level). */
  dominant: ScoreLevel;
  total: number;
}

// Per-axis distribution across a set of scored claims. Ties resolve to the
// worse level so a summary never flatters a post.
export function aggregateScores(cards: Scorecard[]): AxisAggregate[] {
  return SCORE_AXES.map((axis) => {
    const counts: Record<ScoreLevel, number> = { good: 0, mixed: 0, poor: 0 };
    for (const c of cards) counts[c[axis.key]]++;
    const order: ScoreLevel[] = ['poor', 'mixed', 'good'];
    let dominant: ScoreLevel = 'good';
    let max = -1;
    for (const lvl of order) {
      if (counts[lvl] > max) {
        max = counts[lvl];
        dominant = lvl;
      }
    }
    return { axis, counts, dominant, total: cards.length };
  });
}
