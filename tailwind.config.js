/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    '*.html',
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './assets/*.js'
  ],
  corePlugins: {
    container: false
  },
  theme: {
    screens: {
      'sm': '600px',
      'md': '990px',
      'lg': '1440px',
      'xl': '1800px',
      'xxl': "2000px"
    },
    extend: {
      colors: {
        'rp-blue': '#111926',
      },
    }
  }
}