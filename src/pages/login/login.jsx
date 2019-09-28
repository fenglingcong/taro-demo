import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/user'
import { ButtonItem } from '@components'

import Auth from './auth'
import './login.scss'

@connect(state => state.user, actions)
class UserLogin extends Component {
  config = {
    navigationBarTitleText: '登录'
  }

  handleClick = (type) => {
    if (type !== 'email') {
      Taro.showToast({
        title: '此功能待实现',
        icon: 'none'
      })
      return
    }

    Taro.navigateTo({
      url: '/pages/login-email/login-email'
    })
  }

  render() {
    const BUTTON = {
      marginTop: Taro.pxTransform(30)
    }

    return (
      <View className='user-login'>
        <Auth />
        <ButtonItem
          plain
          text='邮箱账号登录'
          compStyle={BUTTON}
          onClick={this.handleClick.bind(this, 'email')}
        />
        <ButtonItem
          plain
          text='手机号登录'
          compStyle={BUTTON}
          onClick={this.handleClick.bind(this, 'phone')}
        />
        <View className='user-login__reg'>
          <Text className='user-login__reg-txt'>手机号快捷注册</Text>
        </View>
      </View>
    )
  }
}

export default UserLogin
