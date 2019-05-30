import { createStore  } from 'redux';
import reducer from './reducer' // 数据源

const store = createStore(reducer);

export default store;