import { createContext } from "react";
import { TaskContextType } from "../../types/context";

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
const initTask = {
  id: "",
  title: "",
  description: "",
  comment: [],
  status: "TODO",
  author: "",
};
const initial = {
  tasks: [],
  taskAdd: () => {},
  taskDelete: () => {},
  taskUpdate: () => {},
  taskShow: () => {},
  displayedTask: initTask,
};

export const TaskContext = createContext<TaskContextType>(initial);
