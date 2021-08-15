import React, { Component } from 'react'
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'
import Logo from './Logo'

import './Nav.css'
import './Button.css'

export class Navigation extends Component {
  state = {
    active: false,
    activeSubNav: false,
    currentPath: false,
    inView: this.props.inView
  }

  componentDidMount = () =>
    this.setState({ currentPath: this.props.location.pathname })

  handleMenuToggle = () => this.setState({ active: !this.state.active })

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle()
  // keyboard events
  handleLinkKeyDown = ev => {
    if (ev.keyCode === 13) {
      this.state.active && this.handleMenuToggle()
    }
  }

  toggleSubNav = subNav =>
    this.setState({
      activeSubNav: this.state.activeSubNav === subNav ? false : subNav
    })
  keyToggleSubNav = (e, subNav) => {
    // key o is for open so you can enter key to open
    if (e.keyCode === 79 || e.keyCode === 27) {
      this.toggleSubNav(subNav)
    }
  }
  render() {
    const { active } = this.state,
      { subNav } = this.props,
      NavLink = ({ to, className, children, ...props }) => (
        <Link
          to={to}
          className={`NavLink ${
            to === this.state.currentPath ? 'active' : ''
          } ${className}`}
          onClick={this.handleLinkClick}
          onKeyDown={this.handleLinkKeyDown}
          tabIndex={0}
          aria-label="Navigation"
          role="button"
          {...props}
        >
          {children}
        </Link>
      )

    return (
      <div className={`${this.props.location.pathname === '/' ? 'Nav--Wrapper-fixed' : 'Nav--Wrapper'}` + `${this.props.inView && this.props.location.pathname === '/' && window.innerWidth >= 900 ? ' Nav--Wrapper-inView' : ''}`}>
        <nav className={`Nav ${active ? 'Nav-active' : ''}`}>
          <div className="Nav--Container container fab-four fab-four__nav">
            <Link
              to="/"
              onClick={this.handleLinkClick}
              onKeyDown={this.handleLinkKeyDown}
              tabIndex={0}
              aria-label="Navigation"
              role="button"
              className="Logo--Link"
            >
              <Logo />
            </Link>
            <div className="fab-four fab-four__links">
              <div className="Nav--Links">
                <NavLink className="NavLink" to="/">Home</NavLink>
                <NavLink className="NavLink" to="/pricing/">Pricing</NavLink>
                <NavLink className="NavLink" to="/your-sector/">Your sector</NavLink>
                <NavLink className="NavLink" to="/about-us/">About us</NavLink>
              </div>
              <div className="Nav--Links">
                {/* <NavLink className="NavLink__strong" to="/contact/">Login</NavLink> */}
                <NavLink className="button button--primary" to="/contact/">Book a demo</NavLink>
              </div>
            </div>            
            <button
              className="Button-blank Nav--MenuButton"
              onClick={this.handleMenuToggle}
              tabIndex={0}
              aria-label="Navigation"
            >
              {active ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </div>
    )
  }
}

export default ({ subNav, ref, inView }) => (
  <Location>{route => <Navigation inView={inView} subNav={subNav} {...route} />}</Location>
)
