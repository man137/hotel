module.exports = {
  theme: {
    extend: {
      '@layer components': {
        'cus': { top: '-110%' },
        // Add any other custom classes here.
      },
      left: {
        'custom': '45%',
      },
      fontWeight: {
        'extralightest': 100,
      },
      colors: {
        custom: '#2B4360',
        light: '#0000004b',
        next: '#E4E7EB',
      },
      height: {
        custom: '60%',
        
      },
      width: {
      
        'custom': '65%',
        home: '71%',
        homes:`75%`,
        car: `19%`,
        bike: `17%`,
        new: '38%',
        ones: `95%`,
        one: `23%`,
        him: `40%`
      },
      top:{
custom: `130%`,
gas: `-130`

      },
    },
  },
  variants: {},
  plugins: [
    // Include the @apply plugin
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
