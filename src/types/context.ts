import { TaskType } from "./global";

export type TaskContextType = {
  tasks: Array<TaskType>;
  taskAdd: (task: TaskType) => void;
  taskDelete: (taskId: string) => void;
  taskUpdate: (task: TaskType) => void;
  taskShow: (taskId: string) => void;
  displayedTask: TaskType;
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
