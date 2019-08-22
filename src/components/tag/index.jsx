import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'
import './index.scss'

export default class Tag extends Component {
  static defaultProps = {
    tagStyle: '',
    textStyle: ''
  }

  getCls = (base) => {
    const { size } = this.props
    return classNames(
      base,
      size && `${base}--size-${size}`
    )
  }

  render () {
    const { tagStyle, textStyle, text } = this.props
    return (
      <View
        className={this.getCls('tag')}
        style={tagStyle}
      >
        <Text
          className={this.getCls('tag-txt')}
          style={textStyle}
        >
          {text}
        </Text>
      </View>
    )
  }
}
