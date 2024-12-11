import React from 'react';
import TaskItem from './TaskItem';
import { useTasks } from '../context/TaskContext';  // Подключаем хук useTasks

const TaskList = () => {
  const { tasks } = useTasks();  // Получаем список задач из контекста

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />  // Для каждой задачи рендерим TaskItem
      ))}
    </ul>
  );
};

export default TaskList;
