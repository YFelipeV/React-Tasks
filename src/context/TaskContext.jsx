import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();
export function TaskContextProvider(props) {
  const [tasks, setTask] = useState([]);

  function createTask(task) {
    setTask([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        descripcion: task.descripcion,
      },
    ]);
  }
  function deleteTask(taskId) {
    setTask(tasks.filter((task) => task.id !== taskId));
  }
  useEffect(() => {
    setTask(data);
  }, []);
  return (
    <TaskContext.Provider
      className="bg-zinc-900  h-auto"
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
