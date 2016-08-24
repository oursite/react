/*eslint-disable no-var */
var fs = require('fs')
var path = require('path')
var webpack = require('webpack')

const appPath = path.join(__dirname, 'app')

module.exports = {
  appPath: appPath,

  devtool: 'inline-source-map',

  entry: path.join(appPath, 'app.js'),

  output: {
    path: __dirname + '/__build__',
    filename: 'app.js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },

  resolve: {
    alias: {
        assets: path.join(appPath, '_components/assets/'),
        config: path.join(appPath, '_components/config/'),
        comp: path.join(appPath, '_components/')
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('shared.js'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]

}
