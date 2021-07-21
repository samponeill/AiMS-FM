import React from 'react'
import ChevronDown from 'react-feather/dist/icons/chevron-down'
import _kebabCase from 'lodash/kebabCase'
import './Link.css'
import './Buckets.css'

export default class Accordion extends React.Component {
  static defaultProps = {
    items: [],
    className: ''
  }

  // use state to auto close but has issues mobile view. onClick={() => this.handleClick(index)}
  // state = {
  //   activeItem: null
  // }
  //
  // handleClick = index => {
  //   this.setState({
  //     activeItem: this.state.activeItem === index ? null : index
  //   })
  // }

  toggleAccordion(e) {
    e.target.classList.toggle('active')
  }

  handleKeyDown = ev => {
    if (ev.keyCode === 13 && !ev.target.classList.contains('active')) {
      // enter to open
      this.toggleAccordion(ev)
    } else if (ev.keyCode === 27 && ev.target.classList.contains('active')) {
      // escape to close
      this.toggleAccordion(ev)
    }
  }

  render() {
    const { heading, items, className } = this.props
    return (
      <div className={`Buckets ${className}`}>
        {!!items &&
          items.map((item, index) => (
            <div
              className={`Buckets--item `}
              key={`bucket-item-${_kebabCase(item.heading) + '-' + index}`}
              onClick={this.toggleAccordion.bind(this)}
              onKeyDown={this.handleKeyDown}
              tabIndex={0}
            >
              <h2 className="flex">
                <span>{item.heading}</span>
              </h2>
              <div className={'description'}>
                {item.linkText} <br />
                {item.link && (
                  <a href={item.link} className="button--link">
                    {item.linkTitle}
                  </a>
                )}
              </div>
            </div>
          ))}
      </div>
    )
  }
}
