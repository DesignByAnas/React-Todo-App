import React, { useState } from 'react';

const Todo = ({ onLogout }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <button onClick={onLogout} style={{ marginBottom: '10px' }}>Logout</button>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onInput={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new task"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button type="submit" style={{ padding: '5px 10px' }}>Add</button>
      </form>
      <ul style={{ marginTop: '20px' }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {todo}
            <button
              onClick={() => deleteTodo(index)}
              style={{ marginLeft: '10px', padding: '5px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;