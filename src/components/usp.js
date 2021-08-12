import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Marked from 'react-markdown'
import PropTypes from 'prop-types'
import Image from './Image'

import './usp.css'

const USP = ({
  className = '',
  ...props
}) => ( 
  <>
  <section className="section usp">
    <div className="container">
      <div className="usp--text">
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
      <div className="usp--image-wrapper">
        <Image className="usp--image" src="/images/usp-1.jpg" alt=""></Image>
      </div>
    </div>
  </section>
  <section className="section usp">
    <div className="container">
      <div className="usp--text">
        <h2 className="usp--header highlight">Contractor management</h2>
        <ul className="usp--list">
          <li>Improve the service performance and value from your supply chain</li>
          <li>More first-time fixes from your call-outs</li>
          <li>Contractors receive your job instantly so they’re better prepared to respond quickly</li>
        </ul>
      </div>
      <div className="usp--image-wrapper">
        <Image className="usp--image" src="/images/usp-2.jpg" alt=""></Image>
      </div>
    </div>
  </section>
  <section className="section usp">
    <div className="container">
      <div className="usp--text">
        <h2 className="usp--header highlight">Easily manage compliance obligations</h2>
        <p className="usp--intro">Reduce risk with our intuitive system</p>
        <ul className="usp--list">
          <li>All compliance test certificates are electronically uploaded by the contractor into the portal and instantly accessible</li>
          <li>All validity checks of contractors’ insurance cover are fully automated</li>
          <li>Full audit trails and asset history, giving a high level of accountability and compliance</li>
        </ul>
      </div>
      <div className="usp--image-wrapper">
        <Image className="usp--image" src="/images/usp-3.jpg" alt=""></Image>
      </div>
    </div>
  </section>
  <section className="section usp">
    <div className="container">
      <div className="usp--text">
        <h2 className="usp--header highlight">Real-time reporting</h2>
        <p className="usp--intro">Our cloud-based platform is available any time, anywhere</p>
        <ul className="usp--list">
          <li>Instant reporting across the entire multi-site estate or detail down to single site level</li>
          <li>All reporting information available in real-time and on any device</li>
          <li>Enables you to easily reconcile repair expenditure, without the need to query the finance department</li>
        </ul>
      </div>
      <div className="usp--image-wrapper">
        <Image className="usp--image" src="/images/usp-4.jpg" alt=""></Image>
      </div>
    </div>
  </section>
  <section className="section usp">
    <div className="container">
      <div className="usp--text">
        <h2 className="usp--header highlight">Mobile optimised</h2>
        <p className="usp--intro">Access what you need on any device with our mobile-optimised software</p>
        <ul className="usp--list">
          <li>Mobile job allocation</li>
          <li>Authorisation features</li>
          <li>Mobile job approval and sign off</li>
        </ul>
      </div>
      <div className="usp--image-wrapper">
        <Image className="usp--image" src="/images/usp-5.jpg" alt=""></Image>
      </div>
    </div>
  </section>
  </>
)

export default USP;

  
