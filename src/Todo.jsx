import { useState, useEffect } from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';
import './Todo.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import DateTime from './components/DateTime';
import ClearButton from './components/ClearButton';

import { todosKey } from './App';

const Todo = ({ task, setTask }) => {

  // Add a new task
  const handleAddToDo = (newTask) => {
    if (!task.some(t => t.text === newTask)) { // Check if task already exists
      setTask((previous) => [...previous, { text: newTask, completed: false }]);
    }
  };

  // Toggle task completion
  const handleCheckdToDo = (taskItem) => {
    setTask((previous) => 
      previous.map((item) =>
        item.text === taskItem.text
          ? { ...item, completed: !item.completed } // Toggle completion
          : item
      )
    );
  };


localStorage.setItem(todosKey, JSON.stringify(task))


  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <DateTime />
      </header>

      <TodoForm onAddToDo={handleAddToDo} />
      <TodoList
        task={task}
        setTask={setTask}
        handleCheckdToDo={handleCheckdToDo}
      />
      <ClearButton setTask={setTask} />
    </section>
  );
};

export default Todo;
