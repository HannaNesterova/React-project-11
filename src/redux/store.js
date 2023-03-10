import { createStore } from 'redux';
import initialState from './initialState';
//import { dispatch } from 'redux';

const reducer = (state, action) => {
  const dispatch = (action) =>{
    state = reducer(state, action)
  }
  const reducer = (state, action) => {
    if(action.type === 'ADD_COLUMN') return { ...state, columns: [...state.columns, action.newColumn]}
    return state;
  };
  return state;
};


const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
