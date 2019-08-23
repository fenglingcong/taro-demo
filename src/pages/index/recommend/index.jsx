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

                  <Text
                    className='recommend-list__item-name'
                    numberOfLines={1}>
                      {categoryItem.name}
                  </Text>

                  <View className='recommend-list__item-price-wrap'>
                    <Text className='recommend-list__item-price'>
                      ￥{categoryItem.activityPrice || categoryItem.retailPrice}
                    </Text>
                    {!!categoryItem.activityPrice &&
                      <Text className='recommend-list__item-price--origin'>
                        ￥{categoryItem.retailPrice}
                      </Text>
                    }
                  </View>

                  {!!(categoryItem.comments &&
                    categoryItem.comments[0] &&
                    categoryItem.comments[0].content) &&
                    <View className='recommend-list__item-comment'>
                      <Image               className='recommend-list__item-comment-img'
                      src={categoryItem.comments[0].frontUserAvatar || defaultAvatar}
                      />
                      <Text
                        className='recommend-list__item-comment-txt'
                        numberOfLines={2}>
                        {categoryItem.comments[0].content}
                      </Text>
                    </View>
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
