/*
 * @Author: fenglingcong 
 * @Date: 2019-08-19 11:15:37 
 * @Last Modified by: fenglingcong
 * @Last Modified time: 2019-08-19 11:20:13
 * 适当封装Redux 简化调用
 */

 import fetch from './request'

 export function createAction(options) {
   const { url, payload, method, fetchOptions, cb, type } = options
   return (dispatch) => {
     return fetch({ url, payload, method, ...fetchOptions })
     .then((res) => {
       dispatch({ type, payload: cb ? cb(res) : res})
       return res
     })
   }
 }
 