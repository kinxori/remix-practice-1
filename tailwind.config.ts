import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      ms: "601px",
      bs: "781px",
    },
  },
  plugins: [],
} satisfies Config;
