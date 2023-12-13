import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "main" : "#121212",
        "default-color": "#535353"
      },
      width: {
        "aside" : "30%"
      },
      textColor: {
        "aside-color" : "rgb(209 213 219 / 0.8)",
        "darker-white" : "rgb(230 230 230)"
      },
      maxHeight: {
        "home": "53rem",
      },
      minHeight: {
        "home": "53rem",
      }
    },
  },
  plugins: [],
}
export default config
