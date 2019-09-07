import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ButtonItem, Loading } from '@components'

class Cart extends Component {
  state = {
    loading: false,
    login: false
  }

  config = {
    navigationBarTitleText: '购物车'
  }
  
  render () {
    if (this.state.loading) {
      return <Loading loaded />
    }

    if (!this.state.login) {
      return (
        <View className='cart cart--not-login'>
          <ButtonItem
            type='primary'
            text='登录'
            onClick={this.toLogin}
            compStyle={{
              background: '#b59f7b',
              borderRadius: Taro.pxTransform(4)
            }}
          />
        </View>
      )
    }

    return (
      <View className='cart'>我是购物车</View>
    )
  }
}

export default Cart
