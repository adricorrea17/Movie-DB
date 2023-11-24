/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#940B92",
        "secondary": "#DA0C81",
        "accent": "#E95793",
        "dark": "#320b4f",
        "dark2": "#1d072e",
      },
    },
    screens: {
      sm: '600px',
      md: '728px',
      lg: '984px',
      xl: '1380px',
      '2xl': '1380px',
    },
  },
  plugins: [],
}
