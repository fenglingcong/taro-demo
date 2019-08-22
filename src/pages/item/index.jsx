import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

export default class Item extends Component {
  config = {
    navigationBarTitleText: '商品详情'
  }

  render () {
    return (
      <View>
        我是详情页
      </View>
    )
  }
}
