import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { Popup, Loading } from '@components'
import * as actions from '@actions/item'
import { dispatchAdd } from '@actions/cart'
import { getWindowHeight } from '@utils/style'
import Gallery from './gallery'
import Detail from './detail'
import InfoBase from './info-base'
import InfoParam from './info-param'
import Spec from './spec'
import Footer from './footer'
import './index.scss'

@connect(state => state.item, { ...actions, dispatchAdd })
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
    const { itemInfo } = this.props
    const { skuSpecList = [] } = itemInfo
    const { visible, selected } = this.state
    const isSelected = visible && !!selected.id && itemInfo.skuMap[selected.id]
    const isSingleSpec =  skuSpecList.every(spec => spec.skuSpecValueList.length === 1)

    if (isSelected || isSingleSpec) {
      const selectedItem = isSelected ? selected : {
        id: skuSpecList.map(spec => spec.skuSpecValueList[0].id).join(';'),
        cnt: 1
      }
      const skuItem = itemInfo.skuMap[selectedItem.id] || {}
      const payload = {
        skuId: skuItem.id,
        cnt: selectedItem.cnt
      }
      this.props.dispatchAdd(payload).then(() => {
        Taro.showToast({
          title: '加入购物车成功',
          icon: 'none'
        })
      })
      if (isSelected) {
        this.toggleVisible()
      }
      return
    }

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
    { tranaform: [{ translateY: Taro.pxTransform(-100) }] } :
    { transform: `translateY(${Taro.pxTransform(-100)})` }

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
          <Detail html={itemDetail.detailHtml} />
        </ScrollView>

        <Popup
          visible={this.state.visible}
          onClose={this.toggleVisible}
          compStyle={popupStyle}
        >
          <Spec
            data={itemInfo}
            selected={this.state.selected}
            onSelect={this.handleSelect}
          />
        </Popup>

        <View className='item__footer'>
          <Footer onAdd={this.handleAdd} />
        </View>
      </View>
    )
  }
}

export default  Item
