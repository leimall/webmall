// 定义 cn 函数，接收多个参数，参数类型可以是字符串、null、undefined 或布尔值
function cn(...inputs: (string | null | undefined | boolean)[]): string {
  const classNames: string[] = [];

  // 遍历输入的参数
  for (const input of inputs) {
      if (!input) continue; // 如果参数为 null、undefined 或 false，则跳过

      if (typeof input === 'string') {
          // 如果参数是字符串，将其按空格分割成多个类名，并添加到 classNames 数组中
          const parts = input.split(' ');
          for (const part of parts) {
              if (part) {
                  classNames.push(part);
              }
          }
      }
  }

  // 将 classNames 数组中的类名用空格连接成一个字符串并返回
  return classNames.join(' ');
}

export { cn };

/**
 * 格式化数字为 k/M/B/T 等单位（如 1300 → 1.3k）
 * @param num 原始数字（支持正负整数/浮点数）
 * @param decimal 保留小数位数（默认 1 位）
 * @returns 格式化后的字符串（如 "1.3k", "2M", "999"）
 */
export function formatNumberWithUnit(num: number, decimal: number = 1): string {
  // 定义单位映射（按从大到小排序）
  const units: Array<{ value: number; symbol: string }> = [
    { value: 1e12, symbol: 'T' }, // 万亿
    { value: 1e9, symbol: 'B' },  // 十亿
    { value: 1e6, symbol: 'M' },  // 百万
    { value: 1e3, symbol: 'k' },  // 千
  ];

  // 处理 0 的特殊情况
  if (num === 0) return '0';

  // 处理负数（递归调用正数部分，最后添加负号）
  if (num < 0) return `-${formatNumberWithUnit(-num, decimal)}`;

  // 查找匹配的单位（找到第一个大于等于当前数值的单位）
  const matchedUnit = units.find(unit => num >= unit.value) || { value: 1, symbol: '' };

  // 计算缩放后的值（原始数值 / 单位基准值）
  const scaledValue = num / matchedUnit.value;

  // 格式化小数（保留指定位数，并去除末尾多余的 0）
  const formattedValue = scaledValue
    .toFixed(decimal)          // 保留指定小数位（如 1.30 → "1.30"）
    .replace(/\.?0+$/, '');    // 去除末尾的 0（如 "1.30" → "1.3"，"2.0" → "2"）

  return `${formattedValue}${matchedUnit.symbol}`;
}