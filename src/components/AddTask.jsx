import React from 'react';
import { useTasks } from '../context/TaskContext';  // Подключаем хук useTasks

const AddTask = () => {
  const { addTask } = useTasks();  // Деструктурируем функцию добавления задачи из контекста
  const [newTask, setNewTask] = React.useState('');  // Локальное состояние для нового текста задачи

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);  // Вызываем функцию добавления задачи
      setNewTask('');  // Очищаем поле ввода
    }
  };

  return (
    <div className="task-input">
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)}  // Обновляем состояние задачи
        placeholder="Add a new task" 
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
