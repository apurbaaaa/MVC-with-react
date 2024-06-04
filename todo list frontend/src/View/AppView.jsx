import React from 'react';
import mainImage from '../assets/main-image.png';
import TaskList from './TaskList';
import './AppView.css';
import { todaysDate } from '../Utils/todaysDate';

function AppView({ inputText, handleInputChange, handleSubmit, tasks }) {
  const { month, year, date, day, dayNames } = todaysDate();

  return (
    <div id='main'>
      <div id='headings'>
        <h1>To-Do List</h1>
        <h2>{`${month}/${date}/${year} ${dayNames[day]}`}</h2>
      </div>

      <div id='main-image'>
        <img src={mainImage} alt="A guy studying" />
      </div>

      <div id='enter-task'>
        <input type="text" value={inputText} onChange={handleInputChange} placeholder='Things to do' />
        <button onClick={handleSubmit}>Enter</button>
      </div>
      
      <TaskList tasks={tasks} />
    </div>
  );
}

export default AppView;
