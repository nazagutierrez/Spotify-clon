import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        "secondary" : "#121212",
        "default-color": "#535353"
      },
      width: {
        "aside" : "30%"
      },
      textColor: {
        "aside-color" : "rgb(209 213 219 / 0.8)"
      },
      maxHeight: {
        "home": "57.2rem"
      }
    },
  },
  plugins: [],
}
export default config
