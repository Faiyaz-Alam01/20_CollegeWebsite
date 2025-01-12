/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        heroImage: "linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)),url('/hero.png')",
      },
      colors: {
        customBlue: 'rgba(0, 15, 152, 0.3)',
      },
      fontSize : {
        h1: '48px',
        h2: '36px',
        h3: '30px',
        h4: '24px',
        h5: '20px',
        h6: '16px',
      },
    },
  },
  plugins: [],
}

