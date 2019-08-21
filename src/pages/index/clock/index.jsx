import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

class Clock extends Component {
  constructor (props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({
      date: new Date()
    });
  }

  render () {
    return (
      <View className='clock-wrap'>
        {this.state.date.toLocaleTimeString()}
      </View>
    )
  }
}

export default Clock
