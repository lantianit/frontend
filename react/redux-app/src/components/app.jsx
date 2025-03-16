import React from 'react';
import { connect } from 'react-redux';

// 组件定义
function App({ count, name, todos, increment, decrement, updateUser, addTodo }) {
  return (
    <div style={{ padding: 20 }}>
      {/* 计数器部分 */}
      <div>
        <h1>计数器: {count}</h1>
        <button 
          onClick={increment}
          style={{ marginRight: 10 }}
        >
          +1
        </button>
        <button 
          onClick={decrement}
        >
          -1
        </button>
      </div>

      {/* 用户信息部分 */}
      <div style={{ marginTop: 20 }}>
        <h1>当前用户: {name}</h1>
        <button
          onClick={() => updateUser({ name: 'Bob', age: 30 })}
        >
          更新用户为 Bob
        </button>
      </div>

      {/* 待办事项部分 */}
      <div style={{ marginTop: 20 }}>
        <h1>待办事项 ({todos.length} 项)</h1>
        <button
          onClick={() => addTodo(`任务 ${todos.length + 1}`)}
        >
          添加新任务
        </button>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          {todos.map((todo, index) => (
            <li key={index} style={{ margin: '8px 0' }}>
              ✅ {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// 将 Redux 的 state 映射到组件 props
const mapStateToProps = (state) => ({
  count: state.counter.count,
  name: state.user.name,
  todos: state.todos.todos,
});

// 定义 mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
  updateUser: (userInfo) => dispatch({ 
    type: 'UPDATE_USER', 
    payload: userInfo 
  }),
  addTodo: (todoText) => dispatch({
    type: 'ADD_TODO',
    payload: todoText
  })
});

// 使用 connect 连接组件（同时传入两个参数）
export default connect(mapStateToProps, mapDispatchToProps)(App);