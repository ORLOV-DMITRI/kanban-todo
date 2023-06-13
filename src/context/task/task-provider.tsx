import { FC, useEffect, useMemo, useState } from "react";
import { ProviderType } from "../../types/context/context";
import { TaskContext } from "./task-context";
import { TaskType } from "../../types/global";

const initialTasks = [
  {
    id: "",
    title: "",
    description: "",
    comments: [
      {
        id: "",
        text: "",
        author: "",
      },
    ],
    status: "initial",
    author: "",
  },
];

export const TaskProvider: FC<ProviderType> = ({ children }) => {
  if (localStorage.getItem("tasks") == null) {
    localStorage.setItem("tasks", JSON.stringify(initialTasks));
  }
  const [tasks, setTasks] = useState<TaskType[]>(
    JSON.parse(localStorage.getItem("tasks") || "")
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const taskAdd = (task: TaskType) => {
    const newTask: TaskType = {
      id: task.id,
      title: task.title,
      description: "",
      comments: [],
      status: task.status,
      author: task.author,
    };
    setTasks([...tasks, newTask]);
  };
  const taskDelete = (id: string) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
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
    <TaskContext.Provider
      value={{
        tasks,
        taskAdd,
        taskDelete,
        taskUpdate,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
