var webpackMerge = require('webpack-merge');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require("webpack");
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  /*devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('public'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')  ,
    new webpack.DefinePlugin({
      DEVMODE: JSON.stringify("runing development")
    })
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }*/
});
