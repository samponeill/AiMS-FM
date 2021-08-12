import React from 'react'
import './Footer.css'

export default () => (
  <div>
    {/* <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/thrivegoldcoast/">@thrivegoldcoast</a>
    </h2> */}
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © {new Date().getFullYear()} AiMS FM 05485011. All Rights Reserved.
        </span>
      </div>
    </footer>
  </div>
)
