/*eslint-disable no-console, no-var */
var express = require('express')
// var rewrite = require('express-urlrewrite')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var WebpackConfig = require('./webpack.config')

const appPath = WebpackConfig.appPath

var app = express()

app.use(webpackDevMiddleware(webpack(WebpackConfig), {
  publicPath: '/__build__/',
  stats: {
    colors: true
  }
}))

var fs = require('fs')
var path = require('path')

app.use(express.static(appPath))
app.use("*", function(req,res,next){
   res.sendFile(appPath + '/index.html')
})

app.listen(8083, function () {
  console.log('Server listening on http://localhost:8083, Ctrl+C to stop')
})
