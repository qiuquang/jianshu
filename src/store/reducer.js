const defaultState = {
  focused: false, // 输入框动画标志
}; // 默认值

export default (state = defaultState, action) => { // 返回纯函数
  if (action.type === 'search_focus') {
    return {
      focused: true,
    }
  }
  if (action.type === 'search_blur') {
    return {
      focused: false,
    }
  }
  return state;
}