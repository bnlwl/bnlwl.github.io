import type {Config} from 'tailwindcss'

const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '4px 4px 2px rgb(0 0 0 / 0.25)',
        'y-sm': '0 4px 2px rgb(0 0 0 / 0.25)',
        'x-sm': '4px 0 2px rgb(0 0 0 / 0.25)',
        lg: '6px 6px 4px rgb(0 0 0 / 0.25)',
        'y-lg': '0 6px 4px rgb(0 0 0 / 0.25)',
        'x-lg': '6px 0 4px rgb(0 0 0 / 0.25)',
      },
    },
  },
  plugins: [
    plugin(function ({matchUtilities, theme}: { matchUtilities: Function, theme: Function }) {
      matchUtilities(
        {
          'text-shadow': (value: string) => ({
            textShadow: value,
          }),
        },
        {values: theme('textShadow')}
      )
    })
  ],
}
export default config
