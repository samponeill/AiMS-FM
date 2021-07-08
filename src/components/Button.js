import React, { Component, Fragment } from 'react'

import './Button.css'

class Button extends Component {

  render() {
    return (
        <a className="button--primary" href="" log={console.log(this.props.children)}>{this.props.children}</a>
    )
  }
}
export default Button
