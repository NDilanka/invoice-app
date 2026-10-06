export type Line = { amount: number };
export function formatTotal(lines: Line[], currency: string): string {
  const sum = lines.reduce((total, line) => total + line.amount, 0);
  return sum.toFixed(2);
}

// probe2 acquit-forks/invoice-app-00000000-0000-4000-8000-e3196759e875 2026-10-06T23:22:50.333Z
