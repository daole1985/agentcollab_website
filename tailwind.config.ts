import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-card": "linear-gradient(180deg, #020a18 0%, #041022 100%)",
        "radial-white":
          "radial-gradient(100.01% 100% at 50.75% 0%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 100%), rgba(255,255,255,0.02)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "white-inset": "inset 0px 0px 30.5px 0px rgba(255, 255, 255, 0.06)",
      },
      colors: {
        background: "#04070d",
        foreground: "#d5dbe6",
        card: {
          DEFAULT: "#121212",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#FFFFFF",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#9aa0a6",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      scale: {
        55: "0.555",
        47: "0.478",
        70: "0.7",
        75: "0.75",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        zoomIn: {
            "0%": { opacity: "0", transform: "scale(0.95)" },
            "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%": {
            transform: "translateX(-50%) perspective(1200px) translateY(0px)",
          },
          "50%": {
            transform: "translateX(-50%) perspective(1200px) translateY(10px)",
          },
          "100%": {
            transform: "translateX(-50%) perspective(1200px) translateY(0px)",
          },
        },   
        gradient1: {
          "0%": { translate: "-30% -55%" },
          "50%": { translate: "-10% -55%" },
          "100%": { translate: "-50% -55%" },
        },
        gradient2: {
          "0%": { translate: "-50% -60%" },
          "50%": { translate: "-30% -60%" },
          "100%": { translate: "-70% -60%" },
        },
        gradient3: {
          "0%": { translate: "-50% -69%" },
          "50%": { translate: "-30% -69%" },
          "100%": { translate: "-70% -69%" },
        },
        gradient4: {
          "0%": { translate: "-40% -70%" },
          "50%": { translate: "-20% -70%" },
          "100%": { translate: "-60% -70%" },
        },     
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.3s ease-out",
        fadeInDown: "fadeInDown 0.3s ease-out",
        zoomIn: 'zoomIn 0.5s ease-out forwards',
        float: "float 4s ease-in-out infinite",
        gradient1: "gradient1 10s ease-in-out infinite alternate",
        gradient2: "gradient2 10s ease-in-out infinite alternate",
        gradient3: "gradient3 10s ease-in-out infinite alternate",
        gradient4: "gradient4 10s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
