import { useState } from 'react'
import './App.css'

function App(){
  const {month, year, date, day} = todaysDate();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <div id='headings'>
      <h1>To-Do List</h1>
      <h2>{`${month}/${date}/${year} ${dayNames[day]}`}</h2>
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
