import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Counter } from '@components'
import './index.scss'

export default class Spec extends Component {
  state = {
    cnt: 1
  }

  handleUpdate = (cnt) => {
    this.setState({ cnt })
  }

  render () {
    return (
      <View>
        <Counter
          num={this.state.cnt}
          onChange={this.handleUpdate}
        />
        我是spec
      </View>
    )
  }
}
