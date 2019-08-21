import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import arrowRight from './assets/arrow-right.png'
import './index.scss'

export default class HomeTitle extends Component {
  static defaultProps = {
    title: '',
    link: ''
  }

  render () {
    const { title, link } = this.props
    return (
      <View className='com-home-title'>
        <Text className='com-home-title__txt'>{title}</Text>
        <View className='com-home-title__content'>
          {this.props.children}
        </View>
        {!!link &&
          <View className='com-home-title__link'>
            <Text className='com-home-title__link-txt'>更多</Text>
            <Image className='com-home-title__link-img' src={arrowRight} />
          </View>
        }
      </View>
    )
  }
}
