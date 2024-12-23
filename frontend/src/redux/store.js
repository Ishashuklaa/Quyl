import { createStore, combineReducers } from 'redux';
import { studentsReducer } from './studentsReducer';

// Combine reducers (You can add more reducers later if needed)
const rootReducer = combineReducers({
  students: studentsReducer,
});

// Create the store
const store = createStore(rootReducer);

export default store;
