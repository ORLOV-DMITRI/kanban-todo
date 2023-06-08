import { FC, createContext, useEffect, useState } from "react";
import { ITask, ProviderType, TaskContextType } from "../@types/globalType";
import { uIdAuthor, uIdTask } from "../global/uniqueID";

const initialTasks: ITask[] = [
  {
    id: uIdTask(),
    title: "Task 1",
    description: "",
    comment: [],
    commentCount: 1,
    status: "TODO",
    author: {
      id: uIdAuthor(),
      name: "Dimas",
    },
  },
  // {
  //   id: uIdTask(),
  //   title: "Task 2",
  //   description: "Lorem ipsum dolor sit amet.",
  //   comment: [],
  //   commentCount: 5,
  //   status: "In Progress",
  //   author: {
  //     id: uIdAuthor(),
  //     name: "Dimas",
  //   },
  // },
  // {
  //   id: uIdTask(),
  //   title: "Task 3",
  //   description: "Lorem ipsum dolor sit amet.",
  //   comment: [],
  //   commentCount: 0,
  //   status: "Testing",
  //   author: {
  //     id: uIdAuthor(),
  //     name: "Dimas",
  //   },
  // },
  // {
  //   id: uIdTask(),
  //   title: "Task 4",
  //   description: "Lorem ipsum dolor sit amet.",
  //   comment: [],
  //   commentCount: 0,
  //   status: "Done",
  //   author: {
  //     id: uIdAuthor(),
  //     name: "Dimas",
  //   },
  // },
  // {
  //   id: uIdTask(),
  //   title: "Task 1 Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
  //   description: "Lorem ipsum dolor sit amet.",
  //   comment: [
  //     {
  //       id: 1,
  //       author: "Dmitri",
  //       text: "ПРивет",
  //     },
  //   ],
  //   commentCount: 1,
  //   status: "TODO",
  //   author: {
  //     id: uIdAuthor(),
  //     name: "Dimas",
  //   },
  // },
  // {
  //   id: uIdTask(),
  //   title: "Task 2",
  //   description: "Lorem ipsum dolor sit amet.",
  //   comment: [],
  //   commentCount: 5,
  //   status: "In Progress",
  //   author: {
  //     id: uIdAuthor(),
  //     name: "Dimas",
  //   },
  // },
  // {
  //   id: uIdTask(),
  //   title: "Task 3",
  //   description: "Lorem ipsum dolor sit amet.",
  //   comment: [],
  //   commentCount: 0,
  //   status: "Testing",
  //   author: {
  //     id: uIdAuthor(),
  //     name: "Dimas",
  //   },
  // },
  // {
  //   id: uIdTask(),
  //   title: "Task 4",
  //   description: "Lorem ipsum dolor sit amet.",
  //   comment: [],
  //   commentCount: 0,
  //   status: "Done",
  //   author: {
  //     id: uIdAuthor(),
  //     name: "Dimas",
  //   },
  // },
];

export const TaskContext = createContext<TaskContextType | null>(null);

const TaskProvider: FC<ProviderType> = ({ children }) => {
  const [tasks, setTasks] = useState<ITask[]>(
    JSON.parse(localStorage.getItem("tasks")!) || initialTasks
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: ITask) => {
    const newTask: ITask = {
      id: task.id,
      title: task.title,
      description: "",
      comment: [],
      commentCount: 0,
      status: task.status,
      author: {
        id: uIdAuthor(),
        name: task.author.name,
      },
    };
    setTasks([...tasks, newTask]);
  };
  const removeTask = (taskId: number) => {
    const filtredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filtredTasks);
  };
  const editTask = (newTask: ITask) => {
    tasks.filter((task: ITask) => {
      if (task.id === newTask.id) {
        task = newTask;
        setTasks([...tasks]);
      }
    });
  };
  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
