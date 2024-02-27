import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, isCompleted: false }]);
      setInput('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
  };

  const handleSaveTodo = (index) => {
    if (input.trim()) {
      const newTodos = [...todos];
      newTodos[index].text = input;
      setTodos(newTodos);
      setEditIndex(null);
      setInput('');
    }
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => handleToggleCompleted(index)}
            />
            {editIndex === index ? (
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onBlur={() => handleSaveTodo(index)}
              />
            ) : (
              <span onClick={() => handleEditTodo(index)}>{todo.text}</span>
            )}
            <button className='one' onClick={() => handleDeleteTodo(index)}><i class="fa-sharp fa-solid fa-trash"></i></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


/*
import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, isCompleted: false }]);
      setInput('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => handleToggleCompleted(index)}
            />
            {todo.text}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
//*/