import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
      sans: ['Roboto', 'Arial', 'sans-serif', 'var(--font-inter)', ...defaultTheme.fontFamily.sans],
			inter: ["sans-serif"],
      poppins: ['var(--font-poppins)'],
		},
		extend: {
			colors: {
          text: {
            primary: '#FFFFFF',
            secondary: '#0C0F19',
          },
          background: {
            primary: '#0C0F19',
            secondary: '#0C0F19',
            back1: '#FFFBF8',
            back2: '#FDD1AE',
            back3: '#FEC495',
            back4: '#FFBB7B',
            back5: '#603813',
            back6: '#4f2d0f',
            back7: '#3f2310',
            back8: '#2f1912',
            back9: '#1f100d',
          },
          forecolor: {
            primary: "#603813",
            secondary: '#0C0F19',
          },
					primarygpt: {
						light: '#f4c2d7', // 较浅的粉色，接近 logo 中的浅色部分
						DEFAULT: '#e75480', // 主色调，logo 中的粉色
						dark: '#c2185b', // 深色的粉色，提供对比
					},
					secondarygpt: {
						light: '#b3a8ff', // 较浅的紫色，接近 logo 中的紫色部分
						DEFAULT: '#8e44ad', // 主色调，logo 中的紫色
						dark: '#6a1b9a', // 深色的紫色，提供对比
					},
					accentgpt: {
						light: '#ffd54f', // 较浅的黄色，增加一些活力
						DEFAULT: '#ffeb3b', // 主色调，明亮的黄色
						dark: '#fbc02d', // 深色的黄色，提供对比
					},
					neutralgpt: {
						light: '#fafafa', // 浅灰色，背景色
						DEFAULT: '#f5f5f5', // 主色调，浅灰色
						dark: '#eeeeee', // 深灰色，分隔线
					},
				},
				fontSize: {
					metatitle: ["12px", "20px"],
					sectiontitle: ["14px", "22px"],
					regular: ["16px", "26px"],
					metatitle3: ["18px", "26px"],
					metatitle2: ["20px", "32px"],
					para2: ["22px", "35px"],
					itemtitle: ["26px", "32px"],
					itemtitle2: ["24px", "32px"],
					hero: ["44px", "58px"],
					sectiontitle3: ["44px", "55px"],
					sectiontitle2: ["40px", "52px"],
					sectiontitle4: ["34px", "48px"],
				},
				spacing: {
					4.5: "1.125rem",
					5.5: "1.375rem",
					6.5: "1.625rem",
					7.5: "1.875rem",
					8.5: "2.125rem",
					10.5: "2.625rem",
					11.5: "2.875rem",
					12.5: "3.125rem",
					13: "3.25rem",
					13.5: "3.375rem",
					14.5: "3.625rem",
					15: "3.75rem",
					15.5: "3.875rem",
					16: "4rem",
					17: "4.25rem",
					17.5: "4.375rem",
					18: "4.5rem",
					18.5: "4.625rem",
					19: "4.75rem",
					21: "5.25rem",
					21.5: "5.375rem",
					22: "5.5rem",
					22.5: "5.625rem",
					25: "6.25rem",
					27: "6.75rem",
					27.5: "6.875rem",
					29: "7.25rem",
					29.5: "7.375rem",
					30: "7.5rem",
					32.5: "8.125rem",
					35: "8.75rem",
					37.5: "9.375rem",
					40: "10rem",
					42.5: "10.625rem",
					45: "11.25rem",
					46: "11.5rem",
					47.5: "11.875rem",
					50: "12.5rem",
					55: "13.75rem",
					60: "15rem",
					65: "16.25rem",
					67: "16.75rem",
					67.5: "16.875rem",
					90: "22.5rem",
				},
				screens: {
					xl: '90rem',        // 1440px / 16
					lg: '64rem',        // 1024px / 16
					md: '48rem',        // 768px / 16
					sm: '40rem',        // 640px / 16
					xs: '23.4375rem',   // 手机尺寸 (375px / 16)
				},
				maxWidth: {
					"c-1440": "90rem",
					"c-1280": "80rem",

					"c-1024": "64rem",
					"c-992": "62rem",

					"c-768": "48rem",
					"c-736": "46rem",

					"c-375": "23.4375rem",
					"c-360": "22.5rem",
				},

				zIndex: {
					99999: "99999",
					999: "999",
					1: "1",
				},
				opacity: {
					65: ".65",
				},
				transitionProperty: { width: "width" },
				boxShadow: {
					"solid-l": "0px 10px 120px 0px rgba(45, 74, 170, 0.1)",
					"solid-2": "0px 2px 10px rgba(122, 135, 167, 0.05)",
					"solid-3": "0px 6px 90px rgba(8, 14, 40, 0.04)",
					"solid-4": "0px 6px 90px rgba(8, 14, 40, 0.1)",
					"solid-5": "0px 8px 24px rgba(45, 74, 170, 0.08)",
					"solid-6": "0px 8px 24px rgba(10, 16, 35, 0.08)",
					"solid-7": "0px 30px 50px rgba(45, 74, 170, 0.1)",
					"solid-8": "0px 12px 120px rgba(45, 74, 170, 0.06)",
					"solid-9": "0px 12px 30px rgba(45, 74, 170, 0.06)",
					"solid-10": "0px 8px 30px rgba(45, 74, 170, 0.06)",
					"solid-11": "0px 6px 20px rgba(45, 74, 170, 0.05)",
					"solid-12": "0px 2px 10px rgba(0, 0, 0, 0.05)",
					"solid-13": "0px 2px 19px rgba(0, 0, 0, 0.05)",
					pink100: '0 1px 3px 0 rgba(247, 207, 227, 0.5), 0 1px 2px 0 rgba(247, 207, 227, 0.06)',
          pink200: '0 1px 3px 0 rgba(241, 181, 211, 0.5), 0 1px 2px 0 rgba(241, 181, 211, 0.06)',
          pink300: '0 1px 3px 0 rgba(238, 141, 191, 0.5), 0 1px 2px 0 rgba(238, 141, 191, 0.06)',
          pink400: '0 1px 3px 0 rgba(233, 98, 171, 0.5), 0 1px 2px 0 rgba(233, 98, 171, 0.06)',
          pink500: '0 1px 3px 0 rgba(229, 54, 151, 0.5), 0 1px 2px 0 rgba(229, 54, 151, 0.06)',
          pink600: '0 1px 3px 0 rgba(193, 45, 128, 0.5), 0 1px 2px 0 rgba(193, 45, 128, 0.06)',
          pink700: '0 1px 3px 0 rgba(156, 36, 104, 0.5), 0 1px 2px 0 rgba(156, 36, 104, 0.06)',
          pink800: '0 1px 3px 0 rgba(119, 28, 80, 0.5), 0 1px 2px 0 rgba(119, 28, 80, 0.06)',
          pink900: '0 1px 3px 0 rgba(82, 10, 56, 0.5), 0 1px 2px 0 rgba(82, 10, 56, 0.06)',
				},
				keyframes: {
					line: {
						"0%, 100%": { transform: "translateY(100%)" },
						"50%": { transform: "translateY(0)" },
					},
				},
				borderRadius: {
					sm: '0.125rem',
					DEFAULT: '0.25rem',
					md: '0.375rem',
					lg: '0.5rem',
				},
			},
		},
		plugins: [],
	};
	export default config;
