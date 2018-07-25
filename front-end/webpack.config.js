const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],
  module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          },
          {
            test: path.join(__dirname, '.'),
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader'
            }
          }
        ]
    },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
};
