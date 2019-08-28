import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Counter } from '@components'
import './index.scss'

export default class Spec extends Component {
  render () {
    return (
      <View>
        <Counter />
        我是spec
      </View>
    )
  }
}
