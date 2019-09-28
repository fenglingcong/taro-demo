import Taro, { Component } from '@tarojs/taro'
import { ButtonItem } from '@components'

export default class Auth extends Component {
  agreeAuth = () => {
    Taro.getUserInfo().then((res) => {
      const { errMsg, userInfo } = res
      if (errMsg === 'getUserInfo:ok') {
        Taro.showToast({
          title: `微信昵称：${userInfo.nickName}，暂不支持`,
          icon: 'none'
        })
      } else {
        Taro.showToast({
          title: '授权失败',
          icon: 'none'
        })
      }
    })
  }

  render() {
    return (
      <ButtonItem
        type='primary'
        text='微信登录'
        openType='getUserInfo'
        onGetUserInfo={this.agreeAuth}
      />
    )
  }
}
