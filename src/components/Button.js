import React, { Component } from 'react'

import './Button.css'

class Button extends Component {

  render() {
    const { data, type } = this.props
    return (
        <a className="button button--primary" href={data.link}>{data.text}</a>
    )
  }
}
export default Button
