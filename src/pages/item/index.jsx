import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { Popup, Loading } from '@components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/item'
import { getWindowHeight } from '@utils/style'
import Gallery from './gallery'
import Detail from './detail'
import InfoBase from './info-base'
import InfoParam from './info-param'
import Spec from './spec'
import Footer from './footer'
import './index.scss'

@connect(state => state.item, { ...actions })
class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
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

  config = {
    navigationBarTitleText: '商品详情'
  }

  handleSelect = (selected) => {
    this.setState({ selected })
  }

  handleAdd = () => {
    const { visible, selected } = this.state
    if (!visible) {
      this.setState({ visible: true })
    } else {
      Taro.showToast({
        title: '请选择规格',
        icon: 'none'
      })
    }
  }

  toggleVisible = () => {
    this.setState({
      visible: !this.state.visible,
      selected: {}
    })
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
    const height = getWindowHeight(false)
    // 适配RN统一处理
    const popupStyle = process.env.TARO_ENV === 'rn' ?
    { trandform: [{ translateY: Taro.pxTransform(-100) }] } :
    { trandform: `translateY(${Taro.pxTransform(-100)})` }

    if (!this.state.loaded) {
      return <Loading loaded />
    }

    return (
      <View className='item'>
        <ScrollView
          scrollY
          className='item__wrap'
          style={{ height }}
        >
          {gallery.length && <Gallery list={gallery} />}
          <InfoBase data={itemInfo} />
          <InfoParam list={itemInfo.attrList} />
          <Spec />
          <Detail html={itemDetail.detailHtml} />
        </ScrollView>

        <Popup
          visible={this.state.visible}
          onClose={this.toggleVisible}
          compStyle={popupStyle}
        >
          哇哈哈哈
        </Popup>

        <View className='item__footer'>
          <Footer onAdd={this.handleAdd} />
        </View>
      </View>
    )
  }
}

export default  Item
