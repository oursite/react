/*eslint-disable no-unused-vars */
import React from 'comp/Base'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import stubbedCourses from 'config/COURSES'

const rootRoute = {
  component: 'div',


  
  childRoutes: [ {
    path: '/',
    component: require('comp/App'),
    //indexRoute: { component: Dashboard },
    //<Redirect> couldn't be use here，we would fulfill it in onEnter hook.
    //onEnter: ({ params }, replace) => replace(`/messages/${params.id}`), 
    childRoutes: [
      require('./Calendar'),
      require('./Course'),
      require('./Grades'),
      require('./Messages'),
      require('./Profile'),
      require('./Myself')
    ]
  } ]
}

render(
  <Router history={browserHistory} routes={rootRoute} />,
  document.getElementById('example')
)
