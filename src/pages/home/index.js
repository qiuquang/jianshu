import React, { Component } from 'react';
import Topic from './components/Topic';
import { connect } from 'react-redux';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import { actionCreators } from './store';

class Home extends Component{
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" alt="description" src="//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
          <Topic>
          </Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    )
  }

  componentDidMount(){ // 这是ui组件
    this.props.changetHomeData();
  }
}

const mapDispatch = (dispatch) => ({ // 这是容器组件
  changetHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  }
})

export default connect(null, mapDispatch)(Home)
