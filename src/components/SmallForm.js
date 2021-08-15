import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Marked from 'react-markdown'
import PropTypes from 'prop-types'
import Image from './Image'

import './SmallForm.css'

const Form = ({
  ...props
}) => ( 
  <>
    <form className={`SmallForm ${props.className ? props.className : ''}`} name="contact" method="POST" data-netlify="true">
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
            <textarea rows="5" name="message"></textarea>
        </p>
        <div className="SmallForm--button-wrapper">
            <button className="button--primary" type="submit">Book a demo</button>   
        </div>
    </form>
  </>
)

export default Form;

  
