import React from 'react';
import { useTasks } from '../context/TaskContext';  // Подключаем хук useTasks

const TaskItem = ({ task }) => {
  const { deleteTask } = useTasks();  // Деструктурируем функцию удаления задачи из контекста

  return (
    <li>
      {task.text}
      <button onClick={() => deleteTask(task.id)}>Delete</button>  {/* Кнопка для удаления задачи */}
    </li>
  );
};

export default TaskItem;
