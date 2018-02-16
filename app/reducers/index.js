import { combineReducers } from 'redux';
import Dishes from './dishesReducer'



const rootReducer = combineReducers({
  Dishes,
});

export default rootReducer;
