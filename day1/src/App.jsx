import { useState } from 'react'
import './App.css'
import mainImage from './assets/main-image.png';

function App(){
  const {month, year, date, day} = todaysDate();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([]);


  function handleInputChange(event){
    setInputText(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    setTasks([...tasks, inputText]);
    setInputText('')
  }

  function removeTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  

  return (

    <div id = 'main'>
      <div id='headings'>
        <h1>To-Do List</h1>
        <h2>{`${month}/${date}/${year} ${dayNames[day]}`}</h2>
      </div>

      <div id='main-image'>
        <img src={mainImage} alt="A guy studying" />
      </div>  

      <div id='enter-task'>
        <input type="text" value={inputText} onChange = {handleInputChange} placeholder='Things to do' />
        <button onClick={handleSubmit}>Enter</button>
      </div>
      <div>
        <ul id = 'task-list'>
            {tasks.map((task, index) => (
            <li key={index}>
              <h4 className = 'task-label' onDoubleClick={()=>removeTask(index)}>{task}</h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function todaysDate(){
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date  = today.getDate();
  const day = today.getDay();
  return {month, year, date, day};
}

export default App

