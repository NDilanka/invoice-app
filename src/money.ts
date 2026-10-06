export type Line = { amount: number };
export function formatTotal(lines: Line[], currency: string): string {
  const sum = lines.reduce((total, line) => total + line.amount, 0);
  return sum.toFixed(2);
}

// probe3 job_00000000-0000-4000-8000-30c7b0e363be 2026-10-06T23:26:02.838Z
