import React, { PropTypes } from 'react'
const { element } = PropTypes

import { Link, IndexLink } from 'react-router'

// Global styles
import './styles/styles.scss'

import { withTypes } from './util'

export default withTypes({
  children: element
}, ({
  children
}) => {
  return (
    <div>
      <IndexLink to="/">Home</IndexLink> | <Link to="/about">About</Link>
      <br/>
      {children}
    </div>
  )
})
