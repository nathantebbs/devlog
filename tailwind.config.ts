import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        highlight: '#7DD3FC',
        background: '#000000',
        primaryText: '#FFFFFF',
        secondaryText: '#B3B3B3',
        accent: '#FF5733',
        link: '#4A90E2',
        border: '#333333',
        hover: '#5BA7D1',
      },
    },
  },
  plugins: [],
} satisfies Config;
