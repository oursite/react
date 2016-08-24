import React, { Component } from 'react'
import { Link } from 'react-router'

class Myself extends Component {
  render() {
    const events = [
      { id: 0, title: 'essay due' }
    ]

    return (
      <div>
        <h2>Welcome to my world !</h2>
        <ul>
          {events.map(event => (
            <li key={event.id}>{event.title}</li>
          ))}
        </ul>
        <li><Link to={`/myself/view`}>view</Link></li>
        <li><Link to={`/myself/add`}>add</Link></li>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

module.exports = Myself
