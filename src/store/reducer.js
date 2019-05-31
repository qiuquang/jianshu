import { combineReducers  } from 'redux'; // 整合reducer
import headerReducer from '../common/header/store/reducer';

const reducer = combineReducers({
  header: headerReducer
})

export default reducer;
