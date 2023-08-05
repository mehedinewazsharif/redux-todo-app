import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    addTodo({
      id: new Date().getTime(),
      text,
      completed: false,
    });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a new todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default TodoForm;