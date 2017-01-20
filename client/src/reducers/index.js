import { combineReducers } from 'redux'
import counter from './counter'
import event from './event'

export default combineReducers({
  counter,
  event,
})
