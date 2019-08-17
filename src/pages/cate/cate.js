import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class Cate extends Component {
  config = {
    navigationBarTitleText: '分类'
  }

  render () {
    return (
      <View className="cate">我是分类</View>
    )
  }
}

export default Cate
