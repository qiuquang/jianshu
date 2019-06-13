import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({ // fromJS把js对象转成immutable对象
  topicList: [],// 输入框动画标志
  articleList: [],
  recommendList: []
}); // 默认值

export default (state = defaultState, action) => { // 返回纯函数
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
      // state.set('topicList', fromJS(action.topicList)).set() //.. 可以连续set
    case constants.ADD_ARTICLE_LIST:
      // console.log(action);
      console.log(state.get('articleList'));
      return state.set('articleList', state.get('articleList').concat(action.list));
    default:
      return state;
  }
}