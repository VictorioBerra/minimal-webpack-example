const path = require('path');

module.exports = {
  entry: './main.js', // string | object | array
  // Here the application starts executing
  // and webpack starts bundling

  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js'
  },

  module: {
    // configuration regarding modules

    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]

  },
};