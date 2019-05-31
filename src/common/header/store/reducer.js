import * as contants from './constants'

const defaultState = {
  focused: false, // 输入框动画标志
}; // 默认值

export default (state = defaultState, action) => { // 返回纯函数
  if (action.type === contants.SEARCH_FOCUS) {
    return {
      focused: true,
    }
  }
  if (action.type === contants.SEARCH_BLUR) {
    return {
      focused: false,
    }
  }
  return state;
}