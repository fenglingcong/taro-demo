/*
 * @Author: fenglingcong 
 * @Date: 2019-08-17 20:58:52 
 * @Last Modified by: fenglingcong
 * @Last Modified time: 2019-08-17 21:18:29
 * 对跳转的统一处理 webview huo 微信小程序
 */
import Taro from '@tarojs/taro'
import { all } from 'when';

const PAGE_WEBVIEW = ''

function jump(options) {
  const { url, title = '', payload = {}, method = 'navigateTo' } = options
  
  if (/^https?:\/\//.test(url)) {
    Taro[method]({
      url: urlStringify(PAGE_WEBVIEW, { url, title })
    })
  } else if (/^\/pages\//.test(url)) {
    // H5 不支持 switchTab 暂时hack
    if (process.env.TARO_ENV === 'h5' && method === 'switchTab') {
      Taro.navigateBack({ delta: Taro.getCurrentPages().length - 1 })
      setTimeout(() => { Taro.redirectTo({ url })}, 100)
      return
    }
    
    Taro[method]({
      url: urlStringify(url, payload)
    })
  }
}

function urlStringify(url, payload, encode = true) {
  const arr = Object.keys(payload).map(key =>
    `${key}=${encode ? encodeURIComponent(payload[key]) : payload[key]}`
  )

  return arr.length ? `${url}?${arr.join('&')}` : url
}

export default jump
