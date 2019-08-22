import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import defaultAvatar from '@assets/default-avatar.png'
import './index.scss'

export default class Recommend extends Component {
  static defaultProps = {
    list: []
  }

  goItemDetail = (id) => {
    Taro.navigateTo({
      url: `/pages/item/index?itemId=${id}`
    })
  }

  render () {
    const { list } = this.props
    return (
      <View className='recommend'>
        <View className='recommend-title'>
          <Text className='recommend-title__txt'>
            为你推荐
          </Text>
        </View>
        <View className='recommend-list'>
          {list.filter(item => item.type === 1).map((item) => {
            const { id, categoryItem } = item
            return (
              <View
                key={id}
                className='recommend-list__item'
                onClick={this.goItemDetail.bind(this, id)}>
                <Image
                  className='recommend-list__item-img'
                  src={categoryItem.listPicUrl} />
                {!!categoryItem.simpleDesc &&
                !categoryItem.simpleDescClose &&
                <Text
                  className='recommend-list__item-desc'
                  numberOfLines={1}>
                  {categoryItem.simpleDesc}
                 </Text>
                }
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}
