import React from 'react';
import { TaskProvider } from './context/TaskContext'; // Импортируем TaskProvider
import AddTask from './components/AddTask';  // Импортируем компонент AddTask
import TaskList from './components/TaskList';  // Импортируем компонент TaskList

function App() {
  return (
    <TaskProvider> {/* Оборачиваем приложение в TaskProvider */}
      <div className="app">
        <h1>Task Manager</h1>
        <AddTask /> {/* Компонент для добавления задач */}
        <TaskList /> {/* Компонент для отображения задач */}
      </div>
    </TaskProvider>
  );
}

export default App;
