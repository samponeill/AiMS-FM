import React from 'react'
import _kebabCase from 'lodash/kebabCase'
import Image from './Image'
import './Testimonials.css'
import { StaticQuery, graphql } from "gatsby"

export default function Testimonials({ className, props }) {
  return (
    <StaticQuery
      query={graphql`
        query TestimonialsQuery {
          settingsYaml {
            testimonialsHeading
            testimonials {
              client
              quote
              image
              alt
            }
          }
        }
      `}
      render={data => (
        <section className="section Section--Testimonials">
        <div className="container">
          <div className={`Testimonials ${className}`}>
            {!!data.settingsYaml.testimonials &&
              data.settingsYaml.testimonials.map((item, index) => (
                <div
                  className={`Testimonials--item `}
                  key={`bucket-item-${_kebabCase(item.heading) + '-' + index}`}
                  tabIndex={0}
                >
                  <div className="Testimonials--text">
                  <h2 className="highlight">{data.settingsYaml.testimonialsHeading}</h2>
                      <blockquote>{item.quote}</blockquote>
                      <cite className="Testimonials--client">
                        – {item.client}
                      </cite>
                  </div>
                  <div className="Testimonials--image">
                    <Image backgroundImage alt={item.image.alt ? item.image.alt : "We apologise for the missing alt text"} src={item.image} />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      )}
    />
  )
}
