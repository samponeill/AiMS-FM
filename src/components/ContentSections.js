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
          <section log={console.log(items)} className={`section ContentSections--section ${className}`}>
            <div className="ContentSections--grid">
                {!!items &&
                items.map((item, index) => (
                    <div
                    className={`ContentSections--item `}
                    key={`ContentSections-item-${_kebabCase(item.title) + '-' + index}`}
                    >
                    <Content source={item.content} />
                    <Image src={item.image} alt={item.alt} />
                    </div>
                ))}
            </div>
          </section> 
        )
      }
    }