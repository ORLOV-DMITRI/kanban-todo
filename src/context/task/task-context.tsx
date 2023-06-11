import { createContext } from "react";
import { TaskContextType } from "../../types/context";

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
};

export const TaskContext = createContext<TaskContextType>(initial);
