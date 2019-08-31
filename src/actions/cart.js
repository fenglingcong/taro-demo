import { CART_INFO, CART_ADD } from '@constants/cart'
import { API_CART, API_CART_ADD } from '@constants/api'
import { createAction } from '@utils/redux'

/**
 * 购物车信息
 * @param {*} payload
 */
export const dispatchCart = payload => createAction({
  url: API_CART,
  type: CART_INFO,
  payload
})

/**
 * 添加商品到购物车
 * @param {*} payload
 */
export const dispatchAdd = payload => createAction({
  url: API_CART_ADD,
  method: 'POST',
  type: CART_ADD,
  payload
})
