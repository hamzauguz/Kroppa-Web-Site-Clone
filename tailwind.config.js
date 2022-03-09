module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        backdrop: '#121212',
        primary: '#1db954',
        active: '#282828',
        link: '#b3b3b3',
        footer: '#3f255b',
        header: '#202155',
        saddle: '8b4513',
        hoverT: '#be547a',
        textfooter: '#fff',
        footertextcolor: '#bb4769',
        botcolor: '#404040',
        line: '#ccc',
        backgroundyoutube: '#f1f1f1',
      },
    },
    screens: {
      sm: { max: '639px' },
      tablet: '640px',
      xl: { min: '640px', max: '900px' },
      lg: { max: '1223px' },
      bg: { min: '1224px' },
    },
  },
  plugins: [],
}
