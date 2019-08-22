import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { Tag } from '@components'
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
                <View
                  className='recommend-list__item-info'>
                  {!!categoryItem.limitedTag &&
                    <Tag text={categoryItem.limitedTag} />
                  }
                </View>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}
