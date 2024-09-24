/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite-react/tailwind';
const flowbitePlugin = require('flowbite/plugin');

module.exports = {
  content: [
    flowbite.content(), 
    "./src/**/*.{js,jsx,ts,tsx}",
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#22223b",
        bgDark2: "#4a4e69",
        bgDark3: "#16396e",
        bgDark4: "#0E1333",
        'custom-blue': '#1E396A',
        'custom-red': '#EE3E23',
        'custom-gray': '#7E838B',
      },
      backgroundColor: {
        '151C4A': '#151C4A',
      },
      backgroundimgColor: {
        '16396e': '#16396e',
      },
      backgrounddivColor: {
        '151C4A': '#151C4A',
      },
      underlinered: {
        'ff0000': '#ff0000',
      },
      rotate: {
        180: '180deg',
      },
      writingMode: {
        'vertical-rl': 'vertical-rl',
      },
      keyframes: {
        leftToCenter: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        rightToCenter: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideLeftToCenter: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        slideRightToCenter: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        'left-to-center': 'leftToCenter 1s forwards, slideLeftToCenter 1s ease-out forwards',
        'right-to-center': 'rightToCenter 1s forwards, slideRightToCenter 1s ease-out forwards',
      },
      // Extend the theme with custom word spacing
      spacing: {
        'word-custom': '0.1em', // Define custom spacing for word spacing
      },
    },
  },
  plugins: [
    flowbitePlugin,
    function ({ addUtilities }) {
      addUtilities({
        '.writing-mode-vertical-rl': {
          'writing-mode': 'vertical-rl',
        },
        '.word-spacing-custom': {
          'word-spacing': '0.1em', // Define custom word-spacing value
        },
      });
    },
  ],
};
