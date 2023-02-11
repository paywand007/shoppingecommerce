/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sanity-ecommerce/**/*.{js,ts,jsx,tsx',
 
  ],
  theme: {
    extend: {
      width: {
        500: '500px',
        300: '300px',
      },
      spacing: {
        '600px': '600px',
        '530px': '530px',
        '560px': '560px',
      },
      screens: {
        small: { min: '360px', max: '650px' },
        medium: { min: '651px', max: '1023px' },
        large: { min: '1024px', max: '1279px' },
      },
      colors: {
        'primary-blue': '#DDDDDD',
      },
    },
  },
  plugins: [],
  fontSize: {
    '2xl': [
      '1.5rem',
      {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      },
    ],
    '3xl': [
      '5rem',
      {
        lineHeight: '4rem',
        letterSpacing: '-0.02em',
        fontWeight: '900',
      },
    ],
  },
}

