import { createStore, combineReducers } from 'redux';

// 计数器 reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// 用户 reducer
const userReducer = (state = { name: 'Anonymous', age: 0 }, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// 待办事项 reducer
const todosReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};

// 合并 reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  todos: todosReducer,
});

export const store = createStore(rootReducer);