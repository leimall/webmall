// app/theme-config.ts（客户端组件）
'use client';
import { ThemeConfig } from 'antd';

export const ecomTheme: ThemeConfig = {
  token: {
    // 基础主题变量
    colorPrimary: '#603813',    // 主色调 (咖啡棕)
    colorInfo: '#603813',       // 信息色与主色一致
    borderRadius: 6,            // 中等圆角
    
    // 文字色系
    colorText: '#2d3436',       // 主文本色 (深灰)
    colorTextSecondary: '#636e72', // 次级文本
    
    // 边框
    colorBorder: '#ced4da',      // 默认边框色 (浅灰)
    colorBorderSecondary: '#e9ecef', // 次级边框
  },
  components: {
    Button: {
      /* 主按钮样式 */
      colorPrimary: '#603813',            // 主色
      colorPrimaryHover: '#7a4d1e',       // Hover加深
      colorPrimaryActive: '#4a2c0e',      // Active状态
      // colorPrimaryBorder: 'transparent',  // 移除边框
      colorBgContainerDisabled: '#e9ecef',// 禁用状态背景
      
      /* 默认按钮样式 */
      defaultBg: '#ffffff',
      defaultColor: '#2d3436',
      defaultBorderColor: '#ced4da',
      defaultHoverColor: '#603813',       // Hover文字色
      defaultHoverBorderColor: '#7a4d1e', // Hover边框色
      
      /* 危险按钮 */
      colorError: '#dc3545',              // 标准红色
      colorErrorHover: '#bb2d3b',
      colorErrorActive: '#b02a37',
      
      /* 文本按钮 */
      colorTextDisabled: '#adb5bd',        // 禁用文字
      colorLink: '#603813',               // 链接按钮颜色
      colorLinkHover: '#7a4d1e',
      
      /* 尺寸控制 */
      controlHeight: 36,                  // 中等高度
      paddingInline: 20,                  // 水平内边距
    },
    // 可继续配置其他组件...
  }

};