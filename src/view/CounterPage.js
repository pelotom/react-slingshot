import React, { PropTypes } from 'react'
const { number, func } = PropTypes

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withTypes } from './util.js'
import * as actions from '../model/actions/counterActions'

const CounterPage = withTypes({
  increment: func.isRequired,
  decrement: func.isRequired,
  counter: number.isRequired
},
({
  increment,
  decrement,
  counter
}) => {
  return (
    <div>
      <div>
        Hello, your number is {counter}
      </div>
      <input type="button" value="Increment" onClick={increment}/>
      <input type="button" value="Decrement" onClick={decrement}/>
    </div>
  )
})

const mapStateToProps = ({ counter }) => {
  return { counter }
}
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterPage)
