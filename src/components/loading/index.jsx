/*
 * @Author: fenglingcong 
 * @Date: 2019-08-20 11:35:37 
 * @Last Modified by: fenglingcong
 * @Last Modified time: 2019-08-20 11:55:44
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import loading from './assets/loading.gif'
import './index.scss'

export default class Loading extends Component {
  render() {
    return (
      <View className='my-loading'>
        <Image src={loading} className='my-loading__img' />
      </View>
    )
  }
}
