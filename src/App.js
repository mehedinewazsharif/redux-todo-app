import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './actions';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="container mt-4">
      <h2>Todo App using Redux</h2>
      <TodoForm addTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        toggleTodo={handleToggleTodo}
        deleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default App;
