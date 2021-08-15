import React from 'react'
import Image from './Image'
import './ClientLogos.css'

export default class ClientLogos extends React.Component {

  render() {
    return (
      <section className="Logos--section section">
        <div className={`Logos ${this.props.className}`}>
          <h2 className="highlight highlight--center">Trusted by</h2>
          <div className="Logos--grid">
              <Image alt="Aspirations logo" src="/images/logos/aspirations.jpg" />
              <Image alt="Aspire logo" src="/images/logos/aspire.png" />
              <Image alt="Berbere logo" src="/images/logos/berbere.jpg" />
              <Image alt="BSML logo" src="/images/logos/bsml.png" />
              <Image alt="Smokevent logo" src="/images/logos/smokevent.jpg" />
              <Image alt="ST Installations logo" src="/images/logos/st-installations.png" />
          </div>
        </div>
      </section>
    )
  }
}
