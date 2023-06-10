import { FC, useEffect, useMemo, useState } from "react";
import { ProviderType } from "../../types/context";
import { TaskContext } from "./task-context";
import { TaskType } from "../../types/global";

const initTask = {
  id: "123",
  title: "Заголовок Заголовок Заголовок",
  description: "Описание Описание Описание Описание Описание",
  comment: [
    {
      id: "111",
      text: "Комент 1 Комент 1 Комент 1 Комент 1 Комент 1",
      author: "DImas",
    },
  ],
  status: "TODO",
  author: "Dimas",
};
const initTasks = [
  {
    id: "123",
    title: "Заголовок Заголовок Заголовок",
    description: "Описание Описание Описание Описание Описание",
    comment: [
      {
        id: "111",
        text: "Комент 1 Комент 1 Комент 1 Комент 1 Комент 1",
        author: "DImas",
      },
    ],
    status: "TODO",
    author: "Dimas",
  },
];

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
