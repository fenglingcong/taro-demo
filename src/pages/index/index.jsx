import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as actions from '../../actions/home'
import './index.scss'
import Loading from '@components/loading'
import Clock from './clock'
import SearchInput from './search'
import Banner from './banner'

const RECOMMEND_SIZE = 20

@connect(state => state.home, { ...actions })
class Home extends Component {
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
  }

  render() {
    if (!this.state.loaded) {
      return <Loading />
    }

    const { homeInfo } = this.props
    return (
      <View className="home">
        <Clock />
        <SearchInput />
        <Banner list={homeInfo.focus} />
      </View>
    )
  }
}

export default Home
