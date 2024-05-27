import React from 'react';


function TaskList({ tasks, removeTask }) {
  return (
    <ul id='task-list'>
      {tasks.map((task, index) => (
        <li key={index}>
          <h4 className='task-label' onDoubleClick={() => removeTask(index)}>{task}</h4>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
