import { combineReducers } from 'redux'
import home from './home'
import item from './item'
import user from './user'

export default combineReducers({
  home,
  item,
  user
})
