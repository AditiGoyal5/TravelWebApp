/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}', // Scan Vue files for Tailwind classes
    './public/index.html', // Scan index.html for Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

