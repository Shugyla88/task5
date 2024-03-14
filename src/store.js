import { createStore, combineReducers } from 'redux';
import expensesReducer from './reducers/expensesReducer';

const rootReducer = combineReducers({
  expenses: expensesReducer,
});

const store = createStore(rootReducer);

export default store;