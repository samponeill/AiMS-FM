import React from 'react'
import _kebabCase from 'lodash/kebabCase'
import Image from './Image'
import SmallForm from './SmallForm'
import './Link.css'
import './Buckets.css'
import './Form.css'

export default class Buckets extends React.Component {
  static defaultProps = {
    items: [],
    className: ''
  }

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
    const { heading, source, className } = this.props
    return (
      <div log={console.log(this.props)} className={`Buckets ${className}`}>
        {!!source &&
          source.map((item, index) => (
            <div
              className={`Buckets--item `}
              key={`bucket-item-${_kebabCase(item.heading) + '-' + index}`}
              tabIndex={0}
            >
              <div className="Buckets--image">
                <Image backgroundImage alt={item.image.alt ? item.image.alt : "We apologise for the missing alt text"} src={item.image} />
              </div>
              <div className="Buckets--text">
                <h2 className="Buckets--heading">
                  <span>{item.heading}</span>
                </h2>
                <div className={'Buckets--desc'}>
                  {item.link && (
                    <a href={item.link} className="button--link button--link__primary">
                      {item.linkText}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
          <SmallForm className="SmallForm--buckets" />
      </div>
    )
  }
}
