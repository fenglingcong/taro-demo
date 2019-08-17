import Taro, { Component } from '@tarojs/taro'
import { View } from  '@tarojs/components'

class User extends Component {
  config = {
    navigationBarTitleText: '中心'
  }

  render () {
    return (
      <View className="user">用户中心</View>
    )
  }
}

export default User
