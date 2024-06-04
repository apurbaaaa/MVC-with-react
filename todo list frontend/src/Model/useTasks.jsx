import { useState } from 'react';

export function useTasks() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function removeTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return {
    tasks,
    addTask,
    removeTask
  };
}
