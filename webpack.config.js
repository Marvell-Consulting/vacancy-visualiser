const path = require('path');

module.exports = {
  entry: './src/assets/js/index.jsx',
  output: {
    path: path.resolve(__dirname, './public/js'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};
