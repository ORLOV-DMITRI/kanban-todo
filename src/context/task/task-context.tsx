import { createContext } from "react";
import { TaskContextType } from "../../types/context/context";

const initial = {
  tasks: [],
  taskAdd: () => {},
  taskDelete: () => {},
  taskUpdate: () => {},
};

export const TaskContext = createContext<TaskContextType>(initial);
