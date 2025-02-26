import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'lineGrow': 'lineGrow 3s linear infinite',
        'scanMove': 'scanMove 2s linear infinite',
        'particleFloat': 'particleFloat 2s infinite',
      },
      keyframes: {
        lineGrow: {
          '0%': { transform: 'scaleX(0)', opacity: '0' },
          '50%': { transform: 'scaleX(1)', opacity: '1' },
          '100%': { transform: 'scaleX(0)', opacity: '0' },
        },
        scanMove: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        particleFloat: {
          '0%': { transform: 'translate(0, 0)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translate(calc(var(--x, 0) * 30px), calc(var(--y, 0) * 30px))', opacity: '0' },
        },
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, rgba(0, 255, 170, 0.1) 0%, rgba(0, 162, 255, 0.05) 50%, transparent 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
