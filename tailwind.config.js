module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'mobile-app': "url('https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png')",
        
       }),
      spacing: {
        '0.1': '0.063rem'
      },
      colors: {
        'brand-color': '#4c3398',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7',
        'brand-yellow' : '#ffd300',
        'facebook-text' : 'rgb(60, 90, 153)'
      } 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
