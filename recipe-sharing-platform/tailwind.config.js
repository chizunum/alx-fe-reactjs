/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                // ✅ this is the entry for Vite
    "./src/**/*.{js,jsx,ts,tsx}",  // ✅ this scans all React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
