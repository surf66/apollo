const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

var envArg = process.argv.find(arg => arg.includes('--env=')) || 'dev';
var isProduction = envArg.split('--env=')[1] === 'prod';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: [
    'babel-polyfill',
    './client/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/bundle.js'
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2017', 'react']
          }
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{ from: './client/index.html', to: '' }])
  ]
};