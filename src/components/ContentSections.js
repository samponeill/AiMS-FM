import React from 'react'
import _kebabCase from 'lodash/kebabCase'
import PropTypes from 'prop-types'
import Image from './Image'
import Content from './Content'

import './ContentSections.css'

export default class ContentSections extends React.Component {
    render() {
        const { items, className } = this.props
        return (
          <>
          {!!items &&
          <section log={console.log(items)} className={`section ContentSections--section ${className}`}>
            <div className="">
                {!!items &&
                items.map((item, index) => (
                    <div
                    className={`ContentSections--item `}
                    key={`ContentSections-item-${_kebabCase(item.title) + '-' + index}`}
                    >
                    <div className="ContentSections--content">
                        <Content source={item.content} />
                    </div>
                    <Image className="ContentSections--image" src={item.image} alt={item.alt} />
                    </div>
                ))}
            </div>
          </section>
          }
          </>
        )
      }
    }