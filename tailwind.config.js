/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Add your custom colors here
      colors: {
        green: {
          DEFAULT: '#38FF62', // text-green or bg-green
          hover: '#2AE052',   // text-green-hover or bg-green-hover
        },
        background: '#F2F2F2',
        primary: '#232323',
        secondary: 'rgba(35, 35, 35, 0.7)',
        border: '#232323',
        border_light: 'rgba(35, 35, 35, 0.1)',
        dark_light: '#0e79e4',
      },
      // Add your custom fonts here
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Inter", "sans-serif"],
        mono: ["Courier New", "monospace"],
        serif:["Times New Roman"]
      },
    },
  },
  plugins: [],
}

