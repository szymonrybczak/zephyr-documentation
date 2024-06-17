/** @type {import('tailwindcss').Config} */
const theme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./docs/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    ...theme,
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      slate: colors.slate,
      neutral: colors.neutral,
      stone: colors.stone,
      zinc: colors.zinc,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      yellow: colors.yellow,
    },
    fontWeights: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    extend: {
      colors: {

        // FIXME: this is not work yet not sure why
        background: {
          DEFAULT: "hsl(var(--rp-c-bg)/<alpha-value>)",
          dark: "#1a1a1a",
        },
        "background-soft": "hsl(var(--rp-c-bg-soft)/<alpha-value>)",
        "background-muted": "hsl(var(--rp-c-bg-mute)/<alpha-value>)",
        "divider": "hsl(var(--rp-c-divider)/<alpha-value>)",
        "divider-light": "hsl(var(--rp-c-divider-light)/<alpha-value>)",
        "text_1": "hsl(var(--rp-c-text-1)/<alpha-value>)",
        "text_2": "hsl(var(--rp-c-text-2)/<alpha-value>)",
        "text_3": "hsl(var(--rp-c-text-3)/<alpha-value>)",
        "text_4": "hsl(var(--rp-c-text-4)/<alpha-value>)",
        "text_code": "hsl(var(--rp-c-text-code)/<alpha-value>)",
        "brand": "hsl(var(--rp-c-brand)/<alpha-value>)",
        "brand-light": "hsl(var(--rp-c-brand-light)/<alpha-value>)",
        "brand-lighter": "hsl(var(--rp-c-brand-lighter)/<alpha-value>)",
        "brand-dark": "hsl(var(--rp-c-brand-dark)/<alpha-value>)",
        "brand-darker": "hsl(var(--rp-c-brand-darker)/<alpha-value>)",
        "brand-tint": "hsl(var(--rp-c-brand-tint)/<alpha-value>)",
        "gray-light-1": "hsl(var(--rp-c-gray-light-1)/<alpha-value>)",
        "gray-light-2": "hsl(var(--rp-c-gray-light-2)/<alpha-value>)"

      }
    },
  },
  plugins: [require("@tailwindcss/typography"),],
}

