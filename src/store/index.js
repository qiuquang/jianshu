import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'; // 数据源
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

let middleware = [thunk];
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;