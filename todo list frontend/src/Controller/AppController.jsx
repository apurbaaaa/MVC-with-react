import React, { useState } from 'react';
import AppView from '../View/AppView';
import { useTasks } from '../Model/useTasks';

function AppController() {
  const [inputText, setInputText] = useState('');
  const { tasks, addTask, removeTask } = useTasks();

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addTask(inputText);
    setInputText('');
  }

  return (
    <AppView
      inputText={inputText}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      tasks={tasks}
    />
  );
}

export default AppController; 
