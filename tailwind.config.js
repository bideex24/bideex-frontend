/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00294d',
        secondary: '#FF435B',
        mobile: '#FFA500',
        electronic: '#3F51B5',
        vehicles: '#800080',
        property: '#795548',
        home: '#9C27B0',
        pets: '#A52A2A',
        women: '#FFC0CB',
        men: '#607D8B',
        sports: '#FF5722',
        business: '#673AB7',
        edu: ' #2196F3',
        essentiels: '#4B0082',
        agriculture: '#4CAF50',
        services: '#009688',
        job: '#3E2723',
        overseas: '#1E88E5',
        addbtnearning: "#00a99d",
        addbtnjob: "#c1272d",
        addbtnrent: "#009245",

      },
    },
      // primary: "#00294d",
      // secondary: "#FF435B",
      // "accent": "#37cdbe",
      // "neutral": "#3d4451",
      // "base-100": "#ffffff", 
  },
  plugins: [
    require('daisyui'),
  ],
}

