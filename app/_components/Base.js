import React, {Component} from 'react'

let Base = function(){}

Base.prototype = React;

Base.prototype.constructor = function(){
  console.log('login')
}

module.exports = new Base
