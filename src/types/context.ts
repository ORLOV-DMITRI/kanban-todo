import { type } from "os";
import { TaskType } from "./global";

export type TaskContextType = {
  tasks: Array<TaskType>;
  taskAdd: (task: TaskType) => void;
  taskDelete: (id: string) => void;
  taskUpdate: (task: TaskType) => void;
};
export type Statuses = {
  newStatus: string;
  prevStatus: string;
};
export type StatusContextType = {
  statuses: string[];
  statusChange: ({ newStatus, prevStatus }: Statuses) => void;
};
export type ProviderType = {
  children: React.ReactNode;
};
export type AuthorContextType = {
  author: string;
  authorSave: (author: string) => void;
  authorDelete: () => void;
};
export type CommentsContextType = {};
