import React, { Component, Fragment } from 'react'

import './Link.css'

class Button extends Component {

  render() {
    return (
        <a className="button--link" log={console.log(this.props.data)} href={''}>{this.props.data.text}</a>
    )
  }
}
export default Button
