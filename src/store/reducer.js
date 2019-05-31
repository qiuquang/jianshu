import { combineReducers  } from 'redux'; // 整合reducer
import {reducer as headerReducer} from '../common/header/store';

const reducer = combineReducers({
  header: headerReducer
})

export default reducer;
