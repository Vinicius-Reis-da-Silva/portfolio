/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      green: colors.green,
      'prussian': {
        '50': '#f4f6fa',
        '100': '#e6e9f3',
        '200': '#d2d8eb',
        '300': '#b3bedd',
        '400': '#8f9dcb',
        '500': '#7480bd',
        '600': '#626aaf',
        '700': '#56599f',
        '800': '#4a4c83',
        '900': '#42446e',
        '950': '#2a2a41',
      },
      'storm-dust': {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#666666',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#262626',
      },    
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif', ...defaultTheme.fontFamily.sans],
        'DM': ['DM Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}

