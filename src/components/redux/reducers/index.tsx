import { combineReducers } from 'redux';
import { UserReducer } from './userReducer';

const Reducers = combineReducers({
  todos: UserReducer,
});

export type RootState = ReturnType<typeof Reducers>;
export default Reducers;
