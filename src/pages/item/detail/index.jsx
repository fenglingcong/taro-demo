import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

export default class Detail extends Component {
  static defaultProps = {
    html: ''
  }

  render() {
    const { html } = this.props

    const imgList = []
    const reg = /<img.*?src="(.*?)".*?\/>/g
    let res = null
    while (res = reg.exec(html)) {
      imgList.push(res[1])
    }

    return (
      <View className='item-detail'>
        {imgList.map((item, index) => (
          <Image
            key={index}
            className='item-detail__img'
            src={item}
            mode='widthFix'
          />
        ))}
      </View>
    )
  }
}
