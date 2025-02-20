/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: "var(--font-outfit)",
      },
      backgroundImage: {
        'hero-image': "url('/images/hero.png')", 
        "excellence-bg" : "url('/images/excellence.png')",
        'bg-focus' : "linear-gradient(90deg, rgb(218, 191, 124) 6.68%, rgb(228, 208, 160) 79.14%)",
        'about-bg' : "url('/images/aboutBg.png')"
      },
      colors: {
        primary: "#B68B35",
        secondary: "#3D3D3D",
        bgColor: '#F9F6ED',
        heroBg: '#0098B50D',
        btnBg: '#002D45',
        heading: '#088196',
        headingBg: '#012D45',
        navBg:'#E0D8CB',
        navBorder:'#9F937F',
        cardBorder: "#CDA452",
        faqBg: '#F6F6F6',
        campusBg: "linear-gradient(359.9deg, rgba(255, 255, 255, 0.95) 11.7%, rgba(255, 255, 255, 0.5415) 20.79%, rgba(255, 255, 255, 0) 29.68%)"
      },
    },
  },
  plugins: [],
};
