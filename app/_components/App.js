/*globals COURSES:true */
import React, { Component } from './Base'
import Dashboard from './Dashboard'
import GlobalNav from './GlobalNav'
import Http from './Http'
let list = Http.getInfo('Basicservice/Cache/getSeriesListByBrandId/?brand_id=61', function(res1,res2){
        
      })
// let list2 = Http.get('Basicservice/Cache/getSeriesListByBrandId/?brand_id=61')
// console.log(list2)

class App extends Component {
  render() {
    return (
      <div>
        <GlobalNav />
        <div style={{ padding: 20 }}>
          {this.props.children || <Dashboard courses={COURSES} />}
        </div>
      </div>
    )
  }
}

module.exports = App
