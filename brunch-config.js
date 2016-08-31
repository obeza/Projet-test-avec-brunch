module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {joinTo: 'style.css'}
  },

  plugins: {
    babel: {presets: ['es2015']}
  }
};
