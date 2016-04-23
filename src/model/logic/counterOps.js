const { max } = Math

export const increment = x => x + 1
export const decrement = x => max(0, x - 1)
export const add = (x, y) => x === 0 ? y : add(decrement(x), increment(y))
export const subtract = (x, y) => y === 0 ? x : subtract(decrement(x), decrement(y))
