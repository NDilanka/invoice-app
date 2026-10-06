export type Line = { amount: number };
export function formatTotal(lines: Line[], currency: string): string {
  const sum = lines.reduce((total, line) => total + line.amount, 0);
  return sum.toFixed(2);
}

// live publish probe job_00000000-0000-4000-8000-ddb82d2bc875 2026-10-06T23:20:32.534Z
