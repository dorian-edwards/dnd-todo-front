/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      // Primary Colors
      'bright-blue': 'hsl(220, 98%, 61%)',
      white: '#FFF',
      // Check Background Colors
      'sky-blue-corolla': 'hsl(192, 100%, 67%)',
      'medium-orchid': 'hsl(280, 87%, 65%)',
      // Natural
      transparent: 'transparent',
      // Light Theme
      'v-lght-gry': 'hsl(0, 0%, 98%)',
      'v-lght-gry-blue': 'hsl(236, 33%, 92%)',
      'lght-gry-blue': 'hsl(233, 11%, 84%)',
      'dk-gry-blue': 'hsl(236, 9%, 61%)',
      'v-dk-gry-blue': 'hsl(235, 19%, 35%)',
      // Dark Theme
      'v-dk-blue': 'hsl(235, 21%, 11%)',
      'v-dk-desat-blue': 'hsl(235, 24%, 19%)',
      'lght-gry-blue-dm': 'hsl(234, 39%, 85%)',
      'lght-gry-blue-hov': 'hsl(236, 33%, 92%)',
      'dk-gry-blue-dm': 'hsl(234, 11%, 52%)',
      'v-dk-gry-blue-dm1': 'hsl(233, 14%, 35%)',
      'v-dk-gry-blue-dm2': 'hsl(237, 14%, 26%)',
      independence: 'hsla(235, 16%, 43%, 1)',
    },
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],
    },
    fontWeight: {
      medium: '400',
      bold: '700',
    },
    screens: {
      tablet: '768px',
    },
    extend: {
      backgroundImage: {
        'lght-desk': 'url(./assets/bg-desktop-light.jpg)',
        'drk-desk': 'url(./assets/bg-desktop-dark.jpg)',
        'lght-mobile': 'url(./assets/bg-mobile-light.jpg)',
        'drk-mobile': 'url(./assets/bg-mobile-dark.jpg)',
        light: 'url(./assets/icon-sun.svg)',
        dark: 'url(./assets/icon-moon.svg)',
        cross: 'url(./assets/icon-cross.svg)',
        check: 'url(./assets/icon-check.svg)',
        rnbw: 'linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)',
        'rnbw-complete':
          'url(./assets/icon-check.svg), linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)',
      },
      boxShadow: {
        reg: '0px 35px 50px -15px rgba(194, 195, 214, 0.5)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
