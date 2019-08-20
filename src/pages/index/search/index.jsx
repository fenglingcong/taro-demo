import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import searchIcon from '../assets/search.png'
import './index.scss'



class SearchInput extends Component {
  clickGoodsSearch() {
    Taro.navigateTo({
      url: '/pages/search/search'
    })
  }
  
  render() {
    return (
      <View className="search-wrap" onClick={this.clickGoodsSearch}>
        <Image className="search-icon" src={searchIcon} />
        <Text className="search-text">
          {`搜索商品，共${searchCount}款好物`}
        </Text>
      </View>
    )
  }
}

export default SearchInput
