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