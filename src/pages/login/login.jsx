import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './login.scss'

class Login extends Component {
  config = {
    navigationBarTitleTtext: '登录'
  }

  render() {
    return (
      <View>
        <Text>登录哈</Text>
      </View>
    )
  }
}

export default Login;
