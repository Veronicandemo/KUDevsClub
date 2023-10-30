/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      width: {
        '40-r': '40rem',
        '35-r': '35rem',
        '30-r': '30rem',
      },
      height: {
        '40-r': '40rem',
        '35-r': '35rem',
        '30-r': '30rem',
      },
      boxShadow: {
        '5xl': '20px 20px 50px rgba(0, 0, 0, 0.5)',
      },
    },
  },

  plugins: [],
}
