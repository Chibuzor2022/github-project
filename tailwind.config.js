module.exports = {
  content: ["./src/**/*.{jsx,js,html}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  
  daisyui:{
  themes: ['dark']
}
}