// Currency.ts
type CurrencySettings = {
  symbol?: string;
  separator?: string;
  decimal?: string;
  errorOnInvalid?: boolean;
  precision?: number;
  pattern?: string;
  negativePattern?: string;
  fromCents?: boolean;
  increment?: number;
  useVedic?: boolean;
};

const defaults: Required<CurrencySettings> = {
  symbol: '$',
  separator: ',',
  decimal: '.',
  errorOnInvalid: false,
  precision: 2,
  pattern: '!#',
  negativePattern: '-!#',
  fromCents: false,
  increment: 0.01,
  useVedic: false
};

const round = (v: number) => Math.round(v);
const pow = (p: number) => Math.pow(10, p);
const rounding = (value: number, increment: number) => round(value / increment) * increment;

const groupRegex = /(\d)(?=(\d{3})+\b)/g;
const vedicRegex = /(\d)(?=(\d\d)+\d\b)/g;

export default class Currency {
  intValue: number;
  value: number;
  private _settings: Required<CurrencySettings>;
  private _precision: number;

  constructor(value: number | string | Currency, opts: CurrencySettings = {}) {
    const settings = { ...defaults, ...opts };
    this._settings = settings;
    this._precision = pow(settings.precision);
    this.intValue = Currency.parse(value, settings);
    this.value = this.intValue / this._precision;
  }

  static parse(value: number | string | Currency, settings: Required<CurrencySettings>, useRounding = true): number {
    const { decimal, errorOnInvalid, precision: decimals, fromCents } = settings;
    const precision = pow(decimals);

    if (typeof value === 'number') return fromCents ? value * precision : value;
    if (value instanceof Currency && fromCents) return value.intValue;

    let v = 0;
    if (typeof value === 'string') {
      const regex = new RegExp(`[^-\\d${decimal}]`, 'g');
      v = parseFloat(value.replace(/\((.*)\)/, '-$1').replace(regex, '').replace(decimal, '.'));
    } else if (errorOnInvalid) {
      throw new Error('Invalid Input');
    }

    return fromCents ? v : useRounding ? round(v * precision) : v * precision;
  }

  private static format(value: Currency, settings: Required<CurrencySettings>): string {
    const { pattern, negativePattern, symbol, separator, decimal, useVedic } = settings;
    const regex = useVedic ? vedicRegex : groupRegex;
    const split = value.value.toFixed(settings.precision).split('.');
    const dollars = split[0].replace(regex, `$1${separator}`);
    const cents = split[1] ? decimal + split[1] : '';
    return (value.value >= 0 ? pattern : negativePattern).replace('!', symbol).replace('#', dollars + cents);
  }

  add(number: number | string | Currency): Currency {
    return new Currency(this.intValue + Currency.parse(number, this._settings), this._settings);
  }

  subtract(number: number | string | Currency): Currency {
    return new Currency(this.intValue - Currency.parse(number, this._settings), this._settings);
  }

  multiply(number: number): Currency {
    return new Currency(this.intValue * number, this._settings);
  }

  divide(number: number): Currency {
    return new Currency(this.intValue / number, this._settings);
  }

  distribute(count: number): Currency[] {
    const distribution: Currency[] = [];
    const split = Math[this.intValue >= 0 ? 'floor' : 'ceil'](this.intValue / count);
    let remainder = Math.abs(this.intValue - split * count);

    for (let i = 0; i < count; i++) {
      const item = new Currency(split / this._precision, this._settings);
      distribution.push(remainder-- > 0 ? item.add(1 / this._precision) : item);
    }

    return distribution;
  }

  dollars(): number {
    return Math.floor(this.value);
  }

  cents(): number {
    return Math.floor(this.intValue % this._precision);
  }

  format(useCustomFormat?: (currency: Currency, settings: Required<CurrencySettings>) => string): string {
    return useCustomFormat ? useCustomFormat(this, this._settings) : Currency.format(this, this._settings);
  }

  toString(): string {
    return rounding(this.intValue / this._precision, this._settings.increment).toFixed(this._settings.precision);
  }

  toJSON(): number {
    return this.value;
  }
}
