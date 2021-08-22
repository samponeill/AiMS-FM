import React, { Component } from 'react'

import './Tooltip.css'

export class Tooltip extends Component {
  state = {
    active: false,
  }

  componentDidMount = () =>
    this.setState({ active: false })
  
  // Only close nav if it is open
  handleButtonClick = () => {
      this.setState({ active: !this.state.active });
      console.log(this.state.active);
    }
    // keyboard events
    handleButtonKeyDown = ev => {
      if (ev.keyCode === 13) {
        this.setState({ active: !this.state.active });
      }
    }
    handleButtonKeyDown = ev => {
      if (ev.keyCode === 27) {
        this.setState({ active: false });
      }
    }

  render() {
    const { active } = this.state;
    const { children } = this.props;
    return (
        <span class="tooltip-container">  
            <button aria-label="More information" onClick={this.handleButtonClick} onKeyDown={this.handleButtonKeyDown} type="button" aria-label="more info" data-toggletip-content={children}>i</button>
            <span className={active ?  'active' : 'inactive'} role="status">{children}</span>
        </span>  
    )
  }
}

export default Tooltip;