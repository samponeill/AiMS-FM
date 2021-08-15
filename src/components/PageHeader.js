import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Button from './Button'
import Link from './Link'
import Content from './Content'
import './PageHeader.css'

const PageHeader = ({
  title,
  subtitle,
  button,
  brochure,
  backgroundImage,
  large,
  className = ''
}) => {
  if (large) className += ' PageHeader-large'
  return (
    <div className={`PageHeader relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="large"
          src={backgroundImage}
          alt={title}
          size="cover"
        />
      )}
      <div className="container relative">
        <div className="PaheHeader--Headercontainer">
          <h1 className="PageHeader--Title highlight">{title}</h1>
          {subtitle && (
            <Content className="PageHeader--Subtitle" src={subtitle} />
          )}
          <div className="PageHeader--Buttonwrap">
            {button ? 
            <Button type="button" data={button} />
            : ""}
            {brochure ? 
            <Link type="link" data={brochure} />
            : ""}
          </div>
        </div>
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
