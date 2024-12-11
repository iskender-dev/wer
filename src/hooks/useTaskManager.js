import { useState } from 'react';

export const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => setTasks([...tasks, { id: Date.now(), text }]);
  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));

  return { tasks, addTask, deleteTask };
};
