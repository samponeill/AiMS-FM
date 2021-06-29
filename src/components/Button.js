import React, { Component, Fragment } from 'react'

import './Button.css'

class Button extends Component {

  render() {
      const { children } = this.props;
    return (
        <button>{children}</button>
    )
  }
}
export default Button
