var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  app: path.join(__dirname, '../client'),
  build: path.join(__dirname, '../public')
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
        test: /\.js?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'client'),
        ],
        exclude: /node_modules/

      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.css/,
        loader: "style!css"
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
