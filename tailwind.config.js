import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        fuchsia: {
          DEFAULT: "hsl(var(--fuchsia))",
          light: "hsl(var(--fuchsia-light))",
          dark: "hsl(var(--fuchsia-dark))",
        },
        "rose-gold": {
          DEFAULT: "hsl(var(--rose-gold))",
          light: "hsl(var(--rose-gold-light))",
          medium: "hsl(var(--rose-gold-medium))",
          dark: "hsl(var(--rose-gold-dark))",
          deep: "hsl(var(--rose-gold-deep))",
        },
        "pink-soft": "hsl(var(--pink-soft))",
        "pink-medium": "hsl(var(--pink-medium))",
        "sidebar-background": "hsl(var(--sidebar-background))",
        "sidebar-foreground": "hsl(var(--sidebar-foreground))",
        "sidebar-primary": "hsl(var(--sidebar-primary))",
        "sidebar-primary-foreground": "hsl(var(--sidebar-primary-foreground))",
        "sidebar-accent": "hsl(var(--sidebar-accent))",
        "sidebar-accent-foreground": "hsl(var(--sidebar-accent-foreground))",
        "sidebar-border": "hsl(var(--sidebar-border))",
        "sidebar-ring": "hsl(var(--sidebar-ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        premium: "var(--shadow-premium)",
        glow: "var(--shadow-glow)",
        soft: "var(--shadow-soft)",
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-rose": "var(--gradient-rose)",
        "gradient-hero": "var(--gradient-hero)",
        "gradient-soft": "var(--gradient-soft)",
        "gradient-fuchsia": "var(--gradient-fuchsia)",
        "gradient-metallic": "var(--gradient-metallic)",
      },
      fontFamily: {
        script: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    function({ addUtilities, theme }) {
      const colors = theme('colors');
      addUtilities({
        '.border-border': {
          'border-color': colors.border,
        },
        '.bg-background': {
          'background-color': colors.background,
        },
        '.text-foreground': {
          color: colors.foreground,
        },
        '.bg-card': {
          'background-color': colors.card,
        },
        '.text-card-foreground': {
          color: colors.card?.foreground || colors.card,
        },
        '.text-muted-foreground': {
          color: colors.muted?.foreground || colors.muted,
        },
        '.border-input': {
          'border-color': colors.input,
        },
        '.border-rose-gold': {
          'border-color': colors['rose-gold'],
        },
        '.text-rose-gold': {
          color: colors['rose-gold'],
        },
        '.bg-rose-gold': {
          'background-color': colors['rose-gold'],
        },
        '.text-fuchsia': {
          color: colors.fuchsia?.DEFAULT || colors.fuchsia,
        },
      });
    },
  ],
};
