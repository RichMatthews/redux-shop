const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js'
  },
  resolve: {
    root: [
      path.resolve('./client')
    ]
  },
  devServer: {
    inline: true,
    port: 3333
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
