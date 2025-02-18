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
