/**  @type {import('tailwindcss').Config}  */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}" ],
  theme: {
    extend: {
      colors:{
        'main-bg-color': '#121930',
        'nav-font-color':'#e7e4e4'
      }
    },
    fontFamily:{
      'oswald':['Oswald', 'sans-serif'],
      'sans':['Ubuntu Sans', 'sans-serif'],
      'mono': ["Roboto Mono", 'monospace'],

    }
  },
  plugins: [],
}
