import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['lexend', ...defaultTheme.fontFamily.sans],
        'poppins-bold': 'poppins-bold',
        'poppins': 'poppins',
        'lexend': 'lexend',
        'poppins-medium': 'poppins-medium',
        'manjari-bold': 'manjari-bold',
        'manjari': 'manjari',
        'urbanist': 'urbanist',
      },
      colors:{
        'primary-50': 'hsla(226, 87%, 69%, 1)',
        'primary-100': 'hsla(219, 89%, 66%, 1)',
        'primary-150': 'hsla(211, 91%, 65%, 1)',
        'primary-200': 'hsla(270, 82%, 56%, 1)',
        'black-200': 'hsla(231, 76%, 10%, 1)',
        'dark-100': 'hsla(0, 0%, 0%, 0.63)',
        'dark-200': 'hsla(231, 19%, 20%, 1)',
        'dark-300': 'hsla(233, 20%, 16%, 1)',
        'shade-gray-100': 'hsla(224, 30%, 73%, 1)',
        'dark-green-100': 'hsla(124, 55%, 24%, 1)',
        'deep-blue-100': 'hsla(212, 100%, 14%, 1)',
        'shade-gray-200': 'hsla(225, 85%, 92%, 1)',
        'light-pink-100': 'hsla(13, 65%, 62%, 1)',
        'white-100': 'hsla(29, 100%, 98%, 1)',
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    // themeRoot: ":root", // The element that receives theme color CSS variables
  },
}