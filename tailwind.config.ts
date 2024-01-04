module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    screens: {
      // Match Tailwind breakpoints to MUI breakpoints
      'sm': '600px',
      'md': '900px',
      'lg': '1200px',
      'xl': '1536px',
      '2xl': '1820px',
    }
  },
  plugins: [],
}
