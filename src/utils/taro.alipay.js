/*
 * @Author: fenglingcong 
 * @Date: 2019-08-17 20:33:05 
 * @Last Modified by: fenglingcong
 * @Last Modified time: 2019-08-17 20:56:42
 * 原生支付宝小程序的API调用不够方便
 * 改造支持 promise 调用
 */

 const TaroAlipay = {}
 const aliList = ['getAuthCode', 'getAuthUserInfo']

aliList.forEach((api) => {
  TaroAlipay[api] = (options = {}) => {
    return new Promise((resolve, reject) => {
      const { success, fail } = options
      const args = {
        ...options,
        success: (res) => {
          success && success(res)
          resolve(res)
        },
        fail: (err) => {
          fail && fail(err)
          reject(err)
        }
      }
    })
  }
})

export default TaroAlipay

