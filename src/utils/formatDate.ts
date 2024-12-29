import dayjs from "dayjs";

/**
 * 格式化日期时间
 * @param isoString - ISO 8601 格式的时间戳
 * @param format - 格式化字符串 (默认: "YYYY-MM-DD HH:mm:ss")
 * @returns 格式化后的日期字符串
 */
export const formatDate = (isoString: string, format: string = "HH:mm MMM/DD/YYYY"): string => {
  if (!isoString) {
    console.warn("无效的时间戳输入");
    return "";
  }
  return dayjs(isoString).format(format);
};