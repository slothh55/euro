/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        background: 'var(--background)',
        'light-gray': 'var(--light-gray)',
        'dark-gray': 'var(--dark-gray)',
        'unit1-color': 'var(--unit1-color)',
        'unit2-color': 'var(--unit2-color)',
        'unit3-color': 'var(--unit3-color)',
        'unit4-color': 'var(--unit4-color)',
        'unit5-color': 'var(--unit5-color)',
        'unit6-color': 'var(--unit6-color)',
        'unit7-color': 'var(--unit7-color)',
        'unit8-color': 'var(--unit8-color)',
        'unit9-color': 'var(--unit9-color)',
      },
      fontFamily: {
        primary: 'var(--font-primary)',
        secondary: 'var(--font-secondary)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
        xxl: 'var(--spacing-xxl)',
      },
    },
  },
  plugins: [],
}
