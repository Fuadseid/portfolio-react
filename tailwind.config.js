
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: {
        custom: "30% 70% 64% 30% / 30% 30% 70% 70%",
      },
      keyframes: {
        floating: {
          "0% , 100%": {
            transform: "translateX(0px) translateY(0)",
          },
          "50%": {
            transform: "translateX(10px) translateY(8px)",
          },
        },
        navanime:{
        "0%":{
          transform:"translateY(-100%)",
        },
        "100%":{
          transform:"translateY(0%)",
        },
      }
      },
      
      animation: {
        floating: "floating 4s ease-in-out infinite",
        navanime: "navanime 4s fade-in  "
      },

    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
