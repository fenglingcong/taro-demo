import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as actions from '../../actions/home'
import './index.scss'
import { getWindowHeight } from '@utils/style'
import { Loading } from '@components'
import Clock from './clock'
import SearchInput from './search'
import Banner from './banner'
import Policy from './policy'
import Pin from './pin'
import Recommend from './recommend'

const RECOMMEND_SIZE = 20

@connect(state => state.home, { ...actions })
export default class Home extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    loaded: false,
    loading: false,
    lastItemId: 0,
    hasMore: true
  }

  componentDidMount() {
    Taro.showToast({
      title: '欢迎回来',
      icon: 'none',
      duration: 3000
    })

    this.props.dispatchHome().then(() => {
      this.setState({ loaded: true })
    })
    this.props.dispatchPin({ orderType: 4, size: 12})
    this.loadRecommend()
  }

  loadRecommend = () => {
    if (!this.state.hasMore || this.state.loading) {
      return
    }
    
    const payload = {
      lastItemId: this.state.lastItemId,
      size: RECOMMEND_SIZE
    }
    this.setState({ loading: true })
    this.props.dispatchRecommend(payload).then((res) => {
      const lastItem = res.rcmdItemList[res.rcmdItemList.length - 1]
      this.setState({
        loading: false,
        hasMore: res.hasMore,
        lastItemId: lastItem && lastItem.id
      })
    }).catch(() => {
      this.setState({ loading: false })
    })
  }

  render () {
    if (!this.state.loaded) {
      return <Loading />
    }

    const { homeInfo, pin, recommend } = this.props
    return (
      <View className='home'>
        <Clock />
        <SearchInput />
        <ScrollView
          scrollY
          className='home__wrap'
          onScrollToLower={this.loadRecommend}
          style={{ height: getWindowHeight() }}>
          <Banner list={homeInfo.focus} />
          <Policy list={homeInfo.policyDesc} />
          <Pin
            banner={homeInfo.newUserExclusive}
            list={pin}
          />
          <Recommend list={recommend} />
        </ScrollView>
      </View>
    )
  }
}
