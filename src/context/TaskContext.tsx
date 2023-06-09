import { FC, createContext, useEffect, useId, useState } from "react";
import { ITask, ProviderType, TaskContextType } from "../@types/globalType";

// const initialTasks: ITask[] = [
//   {
//     id: useId(),
//     title: "Task 1",
//     description: "",
//     comment: [],
//     commentCount: 1,
//     status: "TODO",
//     author: {
//       id: useId(),
//       name: "Dimas",
//     },
//   },
//   // {
//   //   id: uIdTask(),
//   //   title: "Task 2",
//   //   description: "Lorem ipsum dolor sit amet.",
//   //   comment: [],
//   //   commentCount: 5,
//   //   status: "In Progress",
//   //   author: {
//   //     id: uIdAuthor(),
//   //     name: "Dimas",
//   //   },
//   // },
//   // {
//   //   id: uIdTask(),
//   //   title: "Task 3",
//   //   description: "Lorem ipsum dolor sit amet.",
//   //   comment: [],
//   //   commentCount: 0,
//   //   status: "Testing",
//   //   author: {
//   //     id: uIdAuthor(),
//   //     name: "Dimas",
//   //   },
//   // },
//   // {
//   //   id: uIdTask(),
//   //   title: "Task 4",
//   //   description: "Lorem ipsum dolor sit amet.",
//   //   comment: [],
//   //   commentCount: 0,
//   //   status: "Done",
//   //   author: {
//   //     id: uIdAuthor(),
//   //     name: "Dimas",
//   //   },
//   // },
//   // {
//   //   id: uIdTask(),
//   //   title: "Task 1 Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
//   //   description: "Lorem ipsum dolor sit amet.",
//   //   comment: [
//   //     {
//   //       id: 1,
//   //       author: "Dmitri",
//   //       text: "ПРивет",
//   //     },
//   //   ],
//   //   commentCount: 1,
//   //   status: "TODO",
//   //   author: {
//   //     id: uIdAuthor(),
//   //     name: "Dimas",
//   //   },
//   // },
//   // {
//   //   id: uIdTask(),
//   //   title: "Task 2",
//   //   description: "Lorem ipsum dolor sit amet.",
//   //   comment: [],
//   //   commentCount: 5,
//   //   status: "In Progress",
//   //   author: {
//   //     id: uIdAuthor(),
//   //     name: "Dimas",
//   //   },
//   // },
//   // {
//   //   id: uIdTask(),
//   //   title: "Task 3",
//   //   description: "Lorem ipsum dolor sit amet.",
//   //   comment: [],
//   //   commentCount: 0,
//   //   status: "Testing",
//   //   author: {
//   //     id: uIdAuthor(),
//   //     name: "Dimas",
//   //   },
//   // },
//   // {
//   //   id: uIdTask(),
//   //   title: "Task 4",
//   //   description: "Lorem ipsum dolor sit amet.",
//   //   comment: [],
//   //   commentCount: 0,
//   //   status: "Done",
//   //   author: {
//   //     id: uIdAuthor(),
//   //     name: "Dimas",
//   //   },
//   // },
// ];

export const TaskContext = createContext<TaskContextType | null>(null);

const TaskProvider: FC<ProviderType> = ({ children }) => {
  const TaskId = () => {
    let newId = useId();
    return () => newId;
  };

  const [tasks, setTasks] = useState<ITask[]>(
    JSON.parse(localStorage.getItem("tasks")!) || null
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
      author: task.author,
    };
    setTasks([...tasks, newTask]);
  };
  const removeTask = (taskId: string) => {
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
