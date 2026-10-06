// F3 live lane 9: keep the subject inside module load long enough for a scoped container kill.
// This is below the subject's 10-second deadline and changes no returned values.
await new Promise<void>((resolve) => setTimeout(resolve, 8_000));

export type Line = { amount: number };
export function decimalsFor(currency: string): number {
  return new Intl.NumberFormat("en", { style: "currency", currency })
    .resolvedOptions().maximumFractionDigits ?? 2;
}
export function formatTotal(lines: Line[], currency: string): string {
  const sum = lines.reduce((total, line) => total + line.amount, 0);
  return sum.toFixed(decimalsFor(currency));
}
