import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        background: "#ffffff",
        foreground: "#000000",
        accent: "#929292",
      },
      fontFamily: {
        display: ["Special Elite", "sans-serif"],
        primary: ["Geist Mono", "monospace"],
      },
      height: {
        "screen-minus-header": "calc(100dvh - 4rem)",
      },
      maxHeight: {
        "screen-minus-header": "calc(100dvh - 4rem)",
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
        "carousel-scroll": {
          to: { transform: "translateY(calc(-50% - 0.5rem))" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(({ addUtilities }) => {
      addUtilities({
        ".underline-animated": {
          backgroundImage: "linear-gradient(to right,black,black)",
          backgroundSize: "0% 1.5px",
          backgroundPosition:
            "var(--tw-underline-animated-direction, bottom left)",
          backgroundRepeat: "no-repeat",
          transitionProperty: "background-size",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "150ms",
        },
        ".underline-animated:hover": {
          backgroundSize: "100% 1.5px",
        },
        ".underline-animated-l": {
          "--tw-underline-animated-direction": "bottom left",
        },
        ".underline-animated-r": {
          "--tw-underline-animated-direction": "bottom right",
        },
      })
    }),
  ],
}

export default config
