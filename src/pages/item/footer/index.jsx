import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { ButtonItem } from '@components'
import jump from '@utils/jump'
import homeIcon from './assets/home.png'
import serviceIcon from './assets/service.png'
import cartIcon from './assets/cart.png'
import './index.scss'

const NAV_LIST = [{
  key: 'home',
  img: homeIcon,
  url: '/pages/home/home'
}, {
  key: 'service',
  img: serviceIcon,
}, {
  key: 'cart',
  img: cartIcon,
  url: '/pages/cart/cart'
}]

export default class Footer extends Component {
  static defaultProps = {
    onAdd: () => {}
  }

  render() {
    return (
      <View>
        <ButtonItem
          type='primary'
          text='加入购物车'
          onClick={this.props.onAdd}
          compStyle={{
            width: Taro.pxTransform(235),
            height: Taro.pxTransform(100)
          }}
        />
      </View>
    )
  }
}
