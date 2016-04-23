import { property, nat } from 'jsverify'

import { when, positiveInt } from '../../util/testUtil.spec'
import { increment, decrement, add, subtract } from './counterOps'

describe('increment', () => {
    property('adds one to any natural number', nat, n => increment(n) === n+1)
    property(
      'is inverse of decrement for positive integers',
      positiveInt,
      n => increment(decrement(n)) === n
    )
})

describe('decrement', () => {
    property(
      'subtracts one from any positive number',
      nat,
      n => decrement(n+1) === n
    )
    property(
      'returns zero for numbers <= 1',
      nat(1),
      n => decrement(n) === 0
    )
    property(
      'is inverse of increment',
      nat,
      n => decrement(increment(n)) === n
    )
})

describe('add', () => {
  property(
    'adds two numbers together',
    nat, nat,
    (n, m) => add(n, m) === n + m
  )
})

describe('subtract', () => {
  property(
    'returns the first number minus the second if the first number is larger',
    nat, nat,
    (n, m) => when(n >= m, subtract(n, m) === n - m)
  )
  property(
    'returns zero if the second number is larger',
    nat, nat,
    (n, m) => when(n <= m, subtract(n, m) === 0)
  )
})
