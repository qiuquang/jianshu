import React, { Component } from 'react';
import { connect } from 'react-redux'; // 建立连接
import { TopicWrapper, TopicItem } from '../style'

class Topic extends Component{
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {
          list.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img className="topic-pic"
                     src={item.get('imgUrl')} alt="download"/>
                {item.get('title')}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    // focused: state.get('header').get('focused'), // immutable  get方法
    list: state.getIn(['home', 'topicList']), // 等价上面方法
  }
}
// const mapDispath = (dispatch) => { // 暂时用不到
//   return {
//     handleInputFocus() {
//       dispatch(actionCreator.searchFoucs())
//     },
//     handleInputBlur() {
//       dispatch(actionCreator.searchBlur())
//     }
//   }
// }

export default connect(mapState, null)(Topic);