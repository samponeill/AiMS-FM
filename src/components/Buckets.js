import React from 'react'
import _kebabCase from 'lodash/kebabCase'
import Image from './Image'
import './Link.css'
import './Buckets.css'
import './Form.css'

export default class Accordion extends React.Component {
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
          <form className="Buckets--form" name="contact" method="POST" data-netlify="true">
            <h2>Get in touch to book a demo</h2>
            <p>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </p>
            <p>
              <label htmlFor="message">Message</label>
              <textarea name="message"></textarea>
            </p>
            <div className="Buckets--button-wrapper">
              <button className="button--primary" type="submit">Book a demo</button>   
            </div>
          </form>
      </div>
    )
  }
}
