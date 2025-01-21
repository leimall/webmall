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
        brand: {
          primary: {
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
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#0C0F19',
          three: '#603813',
        },
        background: {
          primary: '#0C0F19',
          back0: '#FdFdFd',
          back5: '#603813',
        },
      },
    },
  },
  plugins: [],
};

export default config;
