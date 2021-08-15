import React from 'react'
import SmallForm from './SmallForm'
import './Footer.css'

export default () => (
  <>
    {/* <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/thrivegoldcoast/">@thrivegoldcoast</a>
    </h2> */}
    <footer className="footer">
      <div className="Footer--grid container">
        <div>
          <h2>Browse</h2>
          <ul>
            <li><a href="">Facilities management companies</a></li>
            <li><a href="">Maintenance industry providers</a></li>
            <li><a href="">Property Landlords</a></li>
            <li><a href="">About us</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Book a demo</a></li>
          </ul>
        </div>
        <div>
          <h2>Contact us</h2>
          <address>
            <p>
              <a href="https://maps.google.com/?q=Willow Park Wash Road Basildon Essex SS15 4AZ">
                Willow Park<br />
                Wash Road<br />
                Basildon<br />
                Essex<br />
                SS15 4AZ<br />
              </a>
            </p>
            <p><a href="tel:08449670099">0844 967 0099</a></p>
            <p><a href="mailto:info@aimsfm.com">info@aimsfm.com</a></p>
          </address>
        </div>
      <SmallForm></SmallForm>
      </div>
      <div className="container">
        <span>
          © {new Date().getFullYear()} AiMS FM 05485011. All Rights Reserved.
        </span>
      </div>
    </footer>
  </>
)
