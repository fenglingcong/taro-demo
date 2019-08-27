import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class InfoParam extends Component {
  static defaultProps = {
    list: []
  }

  render() {
    const { list } = this.props
    return (
      <View className='info-param'>
        <View className='info-param__title'>
          <Text className='info-param__title-txt'>商品参数</Text>
        </View>
        {list.map((item, index) => (
          <View key={index} className='info-param__item'>
            <Text className='info-param__item-name'>{item.attrName}</Text>
            <Text className='info-param__item-value'>{item.attrValue}</Text>
          </View>
        ))}
      </View>   
    )
  }
}
