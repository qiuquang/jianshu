import * as contants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({ // fromJS把js对象转成immutable对象
  focused: false, // 输入框动画标志
}); // 默认值

export default (state = defaultState, action) => { // 返回纯函数
  if (action.type === contants.SEARCH_FOCUS) {
    return  state.set('focused', true); // immutable对象的set方法会结合之前的immutable对象的值和设置的值，返回一个全新对象
  }
  if (action.type === contants.SEARCH_BLUR) {
    return  state.set('focused', false); // immutable对象的set方法会结合之前的immutable对象的值和设置的值，返回一个全新对象
  }
  return state;
}