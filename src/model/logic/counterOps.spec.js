import { expect } from 'chai'
import { increment, decrement } from './counterOps'

describe('Increment', () => {
  it('adds one to any number', () => {
    expect(increment(0)).to.equal(1)
    expect(increment(1)).to.equal(2)
    expect(increment(2)).to.equal(3)
  })
})

describe('Decrement', () => {
  it('subtracts one from any number larger than zero, otherwise leaves it as is', () => {
    expect(decrement(5)).to.equal(4)
    expect(decrement(0)).to.equal(0)
  })
})
