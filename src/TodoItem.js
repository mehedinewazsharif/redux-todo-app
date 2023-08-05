import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="list-group-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
      <button
        className="btn btn-sm btn-danger float-end"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;