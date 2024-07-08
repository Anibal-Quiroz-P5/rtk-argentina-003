import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config = {
  darkMode: ["class"],
  content: [
    ".src/app/prueba/page.ts",
    "src/app/page.tsx",
    "src/app/components/Hero.tsx",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/moreInfo/agrimensura/page.tsx",
    "./src/app/moreInfo/layout.tsx",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/lib/**/*.js",
    "./public/**/*.html",
    flowbite.content(),
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'custom-orange-start': '#FF9142',
        'custom-orange-end': '#FF361B',
        'custom-green-start': '#002E1E',
        'custom-green-end': '#6D2700',
      },
      width: {
        '80p': '100%', // Definimos una clase para 80%
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      spacing: {
        "42": "16px",
        "650": "650px",
        
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif', 'inter'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
