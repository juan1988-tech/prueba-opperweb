const deaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content:{
    enabled: true,
    content:[
      './public/**/*.html',
      './src/**/*.{js,jsx,ts,tsx,vue}'
    ]
  },
  theme:{
    screens: {
      'xs':'320px',
      ...deaultTheme.screens,
    },
    colors:{
      'purple-delay':'#CA38ED',
      'black':"#000",
      'white':"#fff",
      'background-input':"rgba(255, 255, 255, .47)",
      'pink-text':'#E487FB',
      'purple-dark-font':'#3E1149',
      'background-delay': 'linear-gradient(180deg, #CA38ED -30.11%, #000000 100%)',
      'button-character': '#C4C4C4',
      'button-inclicked-character':'#7E6784',
      'background-form-gray':'rgba(255, 255, 255, 0.47)',
    },
    
    backgroundImage:{
      'line-back': `url('../assets/logos/line-back.svg')`,
      'facebook-item': `url('../assets/logos/facebook-logo.svg')`,
      ...deaultTheme.backgroundImage,
    },
    height:{
      'height-cellphones':'812px',
      'height-input':'60px',
      'height-social':'51px',
      'height-login':"22px",
      'height-desktop':"100%",
    ...deaultTheme.height,
    },
    width:{
      'width-social':'51px',
      'width-full':'100vw',
    ...deaultTheme.width,  
    },
    fontFamily:{
      'Poppins':'Poppins, sans-serif',
      'roboto': 'Roboto, sans-serif',
      'archivo': 'Archivo, sans-serif'
    }
  },  
  plugins:[]
}