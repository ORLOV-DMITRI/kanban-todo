import { createContext } from "react";
import { TaskContextType } from "../../types/context/context";

const initTask = {
  id: "",
  title: "",
  description: "",
  comments: [],
  status: "TODO",
  author: "",
};
const initial = {
  tasks: [],
  taskAdd: () => {},
  taskDelete: () => {},
  taskUpdate: () => {},
};

export const TaskContext = createContext<TaskContextType>(initial);
