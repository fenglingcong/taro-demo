import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class Cart extends Component {
  config = {
    navigationBarTitleText: '购物车'
  }

  render () {
    return (
      <View className="cart">我是购物车</View>
    )
  }
}

export default Cart
