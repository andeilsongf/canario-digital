module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange:  {
          100: '#F27121',
          200: '#FF4E50'
        },

        white: '#FFFFFF',
        gray: '#A6A6A6',
        black: '#000000'
       

      },

      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
        "playfair": ["Playfair Display", "serif"]
      }
    },
  },
  plugins: [],
}