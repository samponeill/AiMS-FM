import React, { Component } from 'react'
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'
import Logo from './Logo'
import Button from './Button'

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
      <div className={`${this.props.location.pathname === '/' ? 'Nav--Wrapper-fixed' : 'Nav--Wrapper'}` + `${this.props.inView && this.props.location.pathname === '/' ? ' Nav--Wrapper-inView' : ''}`}>
        <nav className={`Nav ${active ? 'Nav-active' : ''}`}>
          <div className="Nav--Container container">
            <Link
              to="/"
              onClick={this.handleLinkClick}
              onKeyDown={this.handleLinkKeyDown}
              tabIndex={0}
              aria-label="Navigation"
              role="button"
            >
              <Logo />
            </Link>
            <div className="Nav--Links">
              <NavLink className="NavLink" to="/">Home</NavLink>
              <NavLink className="NavLink" to="/components/">Pricing</NavLink>
              <div
                className={`Nav--Group ${
                  this.state.activeSubNav === 'posts' ? 'active' : ''
                }`}
              >
                <span
                  className={`NavLink Nav--GroupParent ${
                    this.props.location.pathname.includes('posts') ||
                    this.props.location.pathname.includes('blog') ||
                    this.props.location.pathname.includes('post-categories')
                      ? 'active'
                      : ''
                  }`}
                  onClick={() => this.toggleSubNav('posts')}
                  onKeyDown={e => this.keyToggleSubNav(e, 'posts')}
                  tabIndex={0}
                  aria-label="Navigation"
                  role="button"
                >
                  Blog
                  <div className="Nav--GroupLinks">
                    <NavLink to="/blog/" className="Nav--GroupLink">
                      About us
                    </NavLink>
                    {subNav.posts.map((link, index) => (
                      <NavLink
                        to={link.slug}
                        key={'posts-subnav-link-' + index}
                        className="Nav--GroupLink NavLink"
                      >
                        {link.title}
                      </NavLink>
                    ))}
                  </div>
                </span>
              </div>
              <NavLink className="NavLink" to="/default/">Your sector</NavLink>
              <NavLink className="button button--primary" to="/contact/">Book a demo</NavLink>
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
