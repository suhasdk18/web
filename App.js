import React, { useState } from 'react';
import './App.css'; 

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input.trim() === '') return;
    setTasks(tasks.concat(input)); 
    setInput('');
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <h2> To-Do List</h2>
      <input
        type="text"
        className="todo-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="HEN MADBEKU BARD MADIKO SEDE"
      />
      <button onClick={handleAddTask} className="todo-button">
        Add
      </button>

      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button
              onClick={() => handleDeleteTask(index)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;



