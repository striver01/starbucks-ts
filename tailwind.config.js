module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          Primary: {
            600: "#1e3932",
            500: "#008248",
            400: "#d4e9e2",
            300: "#f1f8f6",
            200: "#f3f1e7",
            100: "#000000",
            50: "#f7f7f7",
            "gold": "#cba258"
          }
        },
        height: {
          9.5: "38px",
        },
        width: {
          9.5: "38px",
        },
        padding: {
          2.25: "9px",
          4.5: "18px",
          1.75: "7px",
          "2/10": "7%",
        },
        fontSize: {
          xxl: "14px",
          xxxl: "15px",
          "2xxl": "28px",
          "mlg": "19px"
        },
        fontFamily: {
          "chose": 'SoDoSans, "Helvetica Neue", "Helvetica", Arial, sans-serif'
        },
        backgroundImage: {
          hero1: "url('./hero1.webp')",
          gs1: "url('./gs1.webp')",
          gs2: "url('./gs2.webp')",
          gs3: "url('./gs3.webp')",
          Fun1: "url('./Fun1.webp')",
          Fun2: "url('./Fun2.webp')",
          Fun3: "url('./Fun3.webp')",
          card1: "url('./Card1.png')",
          card2: "url('./Card2.png')",
          card3: "url('./Card3.png')",
          card4: "url('./Card4.png')",
          card5: "url('./Card5.png')"
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
  }
  