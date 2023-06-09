import { FC, useEffect, useMemo, useState } from "react";
import { ProviderType, TaskType } from "../../types/global";
import { TaskContext } from "./task-context";

export const TaskProvider: FC<ProviderType> = ({ children }) => {
  const [tasks, setTasks] = useState<TaskType[]>(
    JSON.parse(localStorage.getItem("tasks") || "") //ЗАБЫЛ КАК ЭТО СДЕЛАТЬ
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const taskAdd = (task: TaskType) => {
    const newTask: TaskType = {
      id: task.id,
      title: task.title,
      description: "",
      comment: [],
      status: task.status,
      author: task.author,
    };
    setTasks([...tasks, newTask]);
  };
  const taskDelete = (taskId: string) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  const taskUpdate = (newTask: TaskType) => {
    tasks.filter((task: TaskType) => {
      if (task.id === newTask.id) {
        task = newTask;
        setTasks([...tasks]);
      }
    });
  };
  return (
    <TaskContext.Provider value={{ tasks, taskAdd, taskDelete, taskUpdate }}>
      {children}
    </TaskContext.Provider>
  );
};
