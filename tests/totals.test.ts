import { it, expect } from 'vitest';
import { formatTotal } from '../src/money';
describeTotals();
function describeTotals() {
  it('formats USD case 1', () => {
    expect(formatTotal([{ amount: 1.25 }], 'USD')).toBe('1.25');
  });
  it('formats USD case 2', () => {
    expect(formatTotal([{ amount: 2.5 }], 'USD')).toBe('2.50');
  });
  it('formats USD case 3', () => {
    expect(formatTotal([{ amount: 3.75 }], 'USD')).toBe('3.75');
  });
  it('formats USD case 4', () => {
    expect(formatTotal([{ amount: 5 }], 'USD')).toBe('5.00');
  });
  it('formats USD case 5', () => {
    expect(formatTotal([{ amount: 6.25 }], 'USD')).toBe('6.25');
  });
  it('formats USD case 6', () => {
    expect(formatTotal([{ amount: 7.5 }], 'USD')).toBe('7.50');
  });
  it('formats USD case 7', () => {
    expect(formatTotal([{ amount: 8.75 }], 'USD')).toBe('8.75');
  });
  it('formats USD case 8', () => {
    expect(formatTotal([{ amount: 10 }], 'USD')).toBe('10.00');
  });
  it('formats USD case 9', () => {
    expect(formatTotal([{ amount: 11.25 }], 'USD')).toBe('11.25');
  });
  it('formats USD case 10', () => {
    expect(formatTotal([{ amount: 12.5 }], 'USD')).toBe('12.50');
  });
  it('formats USD case 11', () => {
    expect(formatTotal([{ amount: 13.75 }], 'USD')).toBe('13.75');
  });
  it('formats USD case 12', () => {
    expect(formatTotal([{ amount: 15 }], 'USD')).toBe('15.00');
  });
  it('formats USD case 13', () => {
    expect(formatTotal([{ amount: 16.25 }], 'USD')).toBe('16.25');
  });
  it('formats USD case 14', () => {
    expect(formatTotal([{ amount: 17.5 }], 'USD')).toBe('17.50');
  });
  it('formats USD case 15', () => {
    expect(formatTotal([{ amount: 18.75 }], 'USD')).toBe('18.75');
  });
  it('formats USD case 16', () => {
    expect(formatTotal([{ amount: 20 }], 'USD')).toBe('20.00');
  });
  it('formats USD case 17', () => {
    expect(formatTotal([{ amount: 21.25 }], 'USD')).toBe('21.25');
  });
  it('formats USD case 18', () => {
    expect(formatTotal([{ amount: 22.5 }], 'USD')).toBe('22.50');
  });
  it('formats USD case 19', () => {
    expect(formatTotal([{ amount: 23.75 }], 'USD')).toBe('23.75');
  });
  it('formats USD case 20', () => {
    expect(formatTotal([{ amount: 25 }], 'USD')).toBe('25.00');
  });
  it('formats USD case 21', () => {
    expect(formatTotal([{ amount: 26.25 }], 'USD')).toBe('26.25');
  });
  it('formats USD case 22', () => {
    expect(formatTotal([{ amount: 27.5 }], 'USD')).toBe('27.50');
  });
  it('formats USD case 23', () => {
    expect(formatTotal([{ amount: 28.75 }], 'USD')).toBe('28.75');
  });
  it('formats USD case 24', () => {
    expect(formatTotal([{ amount: 30 }], 'USD')).toBe('30.00');
  });
  it('formats USD case 25', () => {
    expect(formatTotal([{ amount: 31.25 }], 'USD')).toBe('31.25');
  });
  it('formats USD case 26', () => {
    expect(formatTotal([{ amount: 32.5 }], 'USD')).toBe('32.50');
  });
  it('formats USD case 27', () => {
    expect(formatTotal([{ amount: 33.75 }], 'USD')).toBe('33.75');
  });
  it('formats USD case 28', () => {
    expect(formatTotal([{ amount: 35 }], 'USD')).toBe('35.00');
  });
  it('formats USD case 29', () => {
    expect(formatTotal([{ amount: 36.25 }], 'USD')).toBe('36.25');
  });
  it('formats USD case 30', () => {
    expect(formatTotal([{ amount: 37.5 }], 'USD')).toBe('37.50');
  });
  it('formats USD case 31', () => {
    expect(formatTotal([{ amount: 38.75 }], 'USD')).toBe('38.75');
  });
  it('formats USD case 32', () => {
    expect(formatTotal([{ amount: 40 }], 'USD')).toBe('40.00');
  });
  it('formats USD case 33', () => {
    expect(formatTotal([{ amount: 41.25 }], 'USD')).toBe('41.25');
  });
  it('formats USD case 34', () => {
    expect(formatTotal([{ amount: 42.5 }], 'USD')).toBe('42.50');
  });
  it('formats USD case 35', () => {
    expect(formatTotal([{ amount: 43.75 }], 'USD')).toBe('43.75');
  });
  it('formats USD case 36', () => {
    expect(formatTotal([{ amount: 45 }], 'USD')).toBe('45.00');
  });
  it('formats USD case 37', () => {
    expect(formatTotal([{ amount: 46.25 }], 'USD')).toBe('46.25');
  });
  it('formats USD case 38', () => {
    expect(formatTotal([{ amount: 47.5 }], 'USD')).toBe('47.50');
  });
  it('formats USD case 39', () => {
    expect(formatTotal([{ amount: 48.75 }], 'USD')).toBe('48.75');
  });
  it('formats USD case 40', () => {
    expect(formatTotal([{ amount: 50 }], 'USD')).toBe('50.00');
  });
  it('formats USD case 41', () => {
    expect(formatTotal([{ amount: 51.25 }], 'USD')).toBe('51.25');
  });
  it('formats USD case 42', () => {
    expect(formatTotal([{ amount: 52.5 }], 'USD')).toBe('52.50');
  });
  it('formats USD case 43', () => {
    expect(formatTotal([{ amount: 53.75 }], 'USD')).toBe('53.75');
  });
  it('formats USD case 44', () => {
    expect(formatTotal([{ amount: 55 }], 'USD')).toBe('55.00');
  });
  it('formats USD case 45', () => {
    expect(formatTotal([{ amount: 56.25 }], 'USD')).toBe('56.25');
  });
  it('formats USD case 46', () => {
    expect(formatTotal([{ amount: 57.5 }], 'USD')).toBe('57.50');
  });
  it('formats USD case 47', () => {
    expect(formatTotal([{ amount: 58.75 }], 'USD')).toBe('58.75');
  });
  it('formats KWD totals with 3 decimals', () => {
    expect(formatTotal([{ amount: 10.125 }], 'KWD')).toBe('10.125');
  });
}
