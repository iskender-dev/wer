import React, { createContext, useContext } from 'react';
import { useTaskManager } from '../hooks/useTaskManager'; // Хук для работы с задачами

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);  // Хук для доступа к задачам

export const TaskProvider = ({ children }) => {
  const taskManager = useTaskManager();  // Хук для управления задачами

  return (
    <TaskContext.Provider value={taskManager}>
      {children}
    </TaskContext.Provider>
  );
};
