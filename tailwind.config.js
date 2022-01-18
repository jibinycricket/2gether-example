const pxToRem = (px, base = 10) => `${px / base}rem`;

const colors = {
  'purple':'#361b40',
  'red':'#d72e35',
  'blue':'#004e94',
  'white':'#FFFFFF',
  'error':'#ff5f54',
  'black':'#000000',
  'grey':'#333333'
};

const spacing = {
  px: '1px',
  '0': '0',
  '3': pxToRem(3),
  '5': pxToRem(5),
  '10': pxToRem(10),
  '15': pxToRem(15),
  '20': pxToRem(20),
  '25': pxToRem(25),
  '30': pxToRem(30),
  '35': pxToRem(35),
  '40': pxToRem(40),
  '45': pxToRem(45),
  '50': pxToRem(50),
  '55': pxToRem(55),
  '60': pxToRem(60),
  '65': pxToRem(65),
  '70': pxToRem(70),
  '75': pxToRem(75),
  '80': pxToRem(80),
  '85': pxToRem(85),
  '90': pxToRem(90),
  '95': pxToRem(95),
  '100': pxToRem(100),
  '120': pxToRem(120),
  '150': pxToRem(150)
};

module.exports = {
  purge: [
    './src/**/*.{vue}',
  ],
  theme: {
    screens: {
      'sm': '520px',
      'md': '769px',
      'lg': '1025px',
      'xl': '1480px',
      'xxl': '1600px'
    },
    colors,
    spacing,
    backgroundColor: theme => theme('colors'),
    borderColor: theme => ({
      ...theme('colors'),
      default: theme('colors.gray.300', 'currentColor'),
    }),
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexGrow: {
      '0': '0',
      default: '1',
    },
    flexShrink: {
      '0': '0',
      default: '1',
    },
    fontFamily: {
      'heading': [
        'Oswald',
      ],
      'serif': [
        'Source Serif Pro',
      ],
      'sans': [
        'Work Sans',
      ]
    },
    fontSize: {
      'xxs':pxToRem(10),
      'xs':pxToRem(12),
      'sm': pxToRem(14),
      'base': pxToRem(16),
      'md':pxToRem(18),
      'lg': pxToRem(20),
      'xl': pxToRem(24),
      '2xl': pxToRem(36),
      '3xl': pxToRem(55),
      '4xl': pxToRem(78)
    },
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      half: '50%',
      screen: '100vh',
    }),
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    padding: theme => theme('spacing'),
    textColor: theme => theme('colors'),
    width: {
      'auto':'auto',
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '5/6': '83.33333%',
      'full': '100%',
      'screen': '100vw',
    },
    zIndex: {
      auto: 'auto',
      '0': 0,
      '1':1,
      '2':2,
      '3':3,
      '4':4,
      '5':5,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
    }
  },
  variants: {
    extend: {
      
      
      alignItems: ['responsive'],
      
      
      
      backgroundColor: ['responsive','hover'],
      
      
      
      
      borderColor: ['responsive'],
      
      borderStyle: ['responsive'],
      borderWidth: ['responsive'],
      
      
      
      display: ['responsive'],
      
      flex: ['responsive'],
      flexDirection: ['responsive'],
      
      
      flexWrap: ['responsive'],
      
      
      fontFamily: [],
      fontSize: ['responsive'],
      
      fontStyle: [],
      fontWeight: [],
      height: ['responsive'],
      
      justifyContent: ['responsive'],
      letterSpacing: [],
      lineHeight: ['responsive'],
      
      
      margin: ['responsive'],
      
      
      
      
      objectFit: [],
      
      opacity: [],
      
      
      
      padding: ['responsive'],
      placeholderColor: [],
      
      position: ['responsive'],
      
      
      
      
      textAlign: ['responsive'],
      textColor: ['hover','focus','responsive'],
      textDecoration: [],
      
      
      verticalAlign: [],
      
      
      width: ['responsive'],
      
      zIndex: [],
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    }
  },
  plugins: []
}
