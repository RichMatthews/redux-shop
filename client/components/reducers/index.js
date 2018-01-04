import { combineReducers } from 'redux';
import basket from './basket';
import categories from './categories';

const rootReducer = combineReducers({
  basket,
  categories
});

export default rootReducer;
