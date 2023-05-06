/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor:{
        'off-white':'#f0f2f4',
        'grey': '#3D4355',
        'pink': '#ee516d',
        'brown': '#e5dac1',
        'ocean': '#b9e2dc',
        'grey-1': '#586987'
      },
      textColor: {
        'primary': '#4D525C',
        'dark':'#2f415e',
        'sun':'#d36633',
        'grey': '#3D4355'
      },
    },
  },
  plugins: [],
}
