/*
 * @Author: fenglingcong 
 * @Date: 2019-08-20 11:35:37 
 * @Last Modified by: fenglingcong
 * @Last Modified time: 2019-08-24 20:01:29
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import loadingIcon from './assets/loading.gif'
import './index.scss'

export default class Loading extends Component {
  static defaultProps = {
    loaded: false,
    loading: false,
    hasMore: true
  }
  render() {
    const { loaded, loading, hasMore } = this.props;
    return (
      <View className='my-loading'>
        {loaded &&
          <Image src={loadingIcon} className='my-loading__img' />
        }
        {loading &&
          <Text>正在加载中......</Text>
        }
        {!hasMore &&
          <Text>更多内容，敬请期待</Text>
        }
      </View>
    )
  }
}
