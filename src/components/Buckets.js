import React from 'react'
import _kebabCase from 'lodash/kebabCase'
import Image from './Image'
import SmallForm from './SmallForm'
import './Link.css'
import './Buckets.css'
import './Form.css'
import { StaticQuery, graphql } from "gatsby"

export default function Buckets({ className, props }) {
  return (
    <StaticQuery
      query={graphql`
        query BucketsQuery {
          settingsYaml {
            bucketsHeading
            buckets {
              heading
              link
              linkText
              image
            }
          }
        }
      `}
      render={data => (
        <section className="section section__dark Section--buckets">
        <div className="container">
        <h2 className="highlight">{data.settingsYaml.bucketsHeading}</h2>
          <div className={`Buckets ${className}`}>
            {!!data.settingsYaml.buckets &&
              data.settingsYaml.buckets.map((item, index) => (
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
        </div>
      </section>
      )}
    />
  )
}
