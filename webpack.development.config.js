const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StrictModePlugin = require('babel-plugin-transform-strict-mode');

module.exports = {
  devtool: 'source-map',
  entry: ['babel-polyfill', './src/index.js'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: ["src/awsCustomPack.js", /node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'stage-0'],
            plugins: [
              StrictModePlugin
            ]
          }
        }
      },
      {
        test: /\.(jpg|png)$/,
        use: ['url-loader?mimetype=image/png']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};