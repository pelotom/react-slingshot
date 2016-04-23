import { INCREMENT, DECREMENT } from '../actions/actionTypes'
import { increment, decrement } from '../logic/counterOps'

const initialState = 0

export default function fuelSavingsAppState(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return increment(state)
      
    case DECREMENT:
      return decrement(state)

    default:
      return state
  }
}
