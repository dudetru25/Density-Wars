var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  app: path.join(__dirname, '../client'),
  build: path.join(__dirname, '../server/public')
};

module.exports = {


  entry: {
    app: PATHS.app + '/Game.ts'
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },


  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: PATHS.src
      },
      {
        test: /\.pcss$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.js')
    extensions: ['', '.js', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo',
      hash: true,
      filename: 'index.html',
      template: PATHS.app + '/index.html',
    })
  ]
};
