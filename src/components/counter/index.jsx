import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import classNames from 'classnames'
import minusIcon from './assets/minus.png'
import minusDisabledIcon from './assets/minus-disabled.png'
import plusIcon from './assets/plus.png'
import './index.scss'

export default class Counter extends Component {
  static defaultProps = {
    num: 0,
    compStyle: '',
    optStyle: '',
    numStyle: '',
    onChange: () => {}
  }

  handleMinus = () => {
    if (this.props.num > 1) {
      this.props.onChange(this.props.num - 1)
    }
  }

  handlePlus = () => {
    this.props.onChange(this.props.num + 1)
  }

  render () {
    const { num, compStyle, numStyle } = this.props
    const isMinusDidabled = num <= 1

    return (
      <View className='counter' style={compStyle}>
        <View
          className={classNames('counter-minus', isMinusDidabled && 'counter-minus--disabled')}
          onClick={this.handleMinus}
        >
          <Image
            className='counter-minus__img'
            src={isMinusDidabled ? minusDisabledIcon : minusIcon}
          />
        </View>
        <View
          className='counter-num'
          style={numStyle}
        >
          <Text className='counter-num__txt'>{num}</Text>
        </View>
        <View
          className='counter-plus'
          onClick={this.handlePlus}
        >
          <Image
            className='counter-plus__img'
            src={plusIcon}
          />
        </View>
      </View>
    )
  }
}
