import React from 'react'

import './MidForm.css'

export default ({
  name = 'Simple Form',
  subject = '', // optional subject of the notification email
  action = ''
}) => (
  <section className="section CTA">
        <div className="container">
          <div className="CTA--grid">
            <div className="CTA--usp">
              <h2 className="usp--header highlight">Fully customisable</h2>
              <p className="usp--intro">Our system can be tuned to suit a comprehensive range of user requirements, including:</p>
              <ul className="usp--list">
                <li>Facilities management</li>
                <li>Clients</li>
                <li>Helpdesk</li>
                <li>Contractors</li>
                <li>Engineers</li>
              </ul>
            </div>
            <div className="CTA--form">
              <h2>
                Let our product experts demonstrate
                the power of AIMS and find out which 
                plan is right for you              
              </h2>
              <form
                className='Form'
                name={name}
                action={action}
                data-netlify=''
                data-netlify-honeypot='_gotcha'
              >
                <label htmlFor="name" className='Form--Label'>
                  Name
                </label>
                  <input
                    className='Form--Input'
                    type='text'
                    placeholder='Name'
                    name='name'
                    required
                  />
                <label htmlFor="email" className='Form--Label'>
                  Email
                </label>
                  <input
                    className='Form--Input'
                    type='email'
                    placeholder='Email'
                    name='email'
                    required
                  />
                <label htmlFor="type" className='Form--Label'>
                  Type of Enquiry
                </label>
                <select
                  className='Form--Input Form--Select'
                  name='type'
                  defaultValue='Type of Enquiry'
                  required
                >
                  <option disabled hidden>
                  </option>
                  <option>Book a demo</option>
                  <option>Bespoke package</option>
                  <option>Report a bug</option>
                  <option>Something else</option>
                </select>
                <label htmlFor="message" className='Form--Label'>
                  Message
                </label>
                  <textarea
                    className='Form--Input Form--Textarea'
                    placeholder='Message'
                    name='message'
                    rows='10'
                    required
                  />
                <input type='text' name='_gotcha' style={{ display: 'none' }} />
                {!!subject && <input type='hidden' name='subject' value={subject} />}
                <input type='hidden' name='form-name' value={name} />
                <input
                  className='button button--primary Form--SubmitButton'
                  type='submit'
                  value='Submit'
                />
              </form>              
            </div>
          </div>
        </div>
      </section>
)
