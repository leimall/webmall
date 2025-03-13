import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", ...defaultTheme.fontFamily.sans],
      notasans: ["NotoSans", ...defaultTheme.fontFamily.sans],
      sans: [...defaultTheme.fontFamily.sans, "Roboto", "Arial"],
    },
    extend: {
      colors: {
        text: {
          primary: '#fff',
          secondary: '#0C0F19',
          three: '#603813',
          gray: '#eeeeee',
        },
        primary: {
          main: '#fd5545',
          light: '#ff7766',
          50: '#f2e5e7',
          100: '#d9b3b7',
          200: '#bf8086',
          300: '#a64d56',
          400: '#8d1a25',
          500: '#603813',
          600: '#49290e',
          700: '#321b0a',
          800: '#1b0c05',
          900: '#050100',
        },

        background: {
          primary: '#0C0F19',
          secondary: '#0C0F19',
          back: '#eee',
          back0:'#FdFdFd',
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
        bg: {
          10: '#FDFCFBFF',
          50: '#FFF9F7FF',
          100: '#fbeeea',
          200: '#f8e2da',
          300: '#f5d6cb',
          400: '#f3cabc',
          500: '#f0bfae', // 原始背景色
          600: '#c19a8b',
          700: '#927367',
          800: '#634d44',
          900: '#342620',
        },
        
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
    },
  },
  plugins: [],
};

export default config;
