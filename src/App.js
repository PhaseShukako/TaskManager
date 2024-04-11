import React, { useState, useEffect } from 'react';
import './App.css';
import InputData from './Components/InputData';
import Table from './Components/UpdateTaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const generateId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  const handleAddTask = (newTask) => {
    const updatedTasks = [...tasks, { ...newTask, id: generateId() }];
    setTasks(updatedTasks);
  };

  const handleUpdateTask = (id, updatedTask) => {
    const updatedTasks = tasks.map(task => (task.id === id ? updatedTask : task));
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={`App ${darkTheme ? 'dark' : 'blue'}`}>
      <h1>Todo Task Dashboard</h1>
      <div className="theme-toggle">
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
      <InputData onAddTask={handleAddTask} />
      <Table tasks={tasks} onDeleteTask={handleDeleteTask} onUpdateTask={handleUpdateTask} />
    </div>
  );
}

export default App;
