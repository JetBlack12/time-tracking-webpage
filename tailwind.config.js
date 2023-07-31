/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        RubikLight: "RubikLight",
        RubikMedium: "RubikMedium",
        RubikRegular: "RubikRegular",
      },
      colors:{
        'blue':'hsl(246, 80%, 60%)',
        'light-red':'hsl(15, 100%, 70%)',
        'soft-blue':'hsl(195, 74%, 62%)',
        'light-red-t':'hsl(348, 100%, 68%)',
        'lime-green':'hsl(145, 58%, 55%)',
        'violet':'hsl(43, 84%, 65%)',
        'soft-orange':'hsl(264, 64%, 52%)',
        'very-dark-blue':'hsl(226, 43%, 10%)',
        'dark-blue':'hsl(235, 46%, 20%)',
        'des-blue':'hsl(235, 45%, 61%)',
        'pale-blue':'hsl(236, 100%, 87%)',
      } 
    }
  },
  plugins: []
};

