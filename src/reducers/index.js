import { combineReducers } from 'redux'
import counter from './counter'
import home from './home'
import item from './item'

export default combineReducers({
  counter,
  home,
  item
})
