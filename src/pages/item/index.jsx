import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'
import { connect } from '@tarojs/redux';
import * as actions from '@actions/item'
import Gallery from './gallery'

@connect(state => state.item, { ...actions })
export default class Item extends Component {
  config = {
    navigationBarTitleText: '商品详情'
  }

  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      selected: {}
    }
    this.itemId = parseInt(this.$router.params.itemId)
  }

  componentDidMount() {
    this.props.dispatchItem({ itemId: this.itemId }).then((res) => {
      console.log(res)
      this.setState({ loaded: true })
    })
  }

  handleSelect = (selected) => {
    this.setState({ selected })
  }

  render () {
    const { itemInfo } = this.props
    const { itemDetail = {} } = itemInfo
    const gallery = [
      itemInfo.listPicUrl,
      itemDetail.picUrl1,
      itemDetail.picUrl2,
      itemDetail.picUrl3,
      itemDetail.picUrl4,
    ]
    console.log(this.props)
    return (
      <View>
        我是详情页
        {gallery.length > 0 && <Gallery list={gallery} />}
        {JSON.stringify(itemInfo)}
      </View>
    )
  }
}
