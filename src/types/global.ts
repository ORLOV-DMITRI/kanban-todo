type Comment = {
  id: string;
  author: string;
  text: string;
};
export type TaskType = {
  id: string;
  title: string;
  description: string;
  comment: Array<Comment>;
  status: string;
  author: string;
};

export type TaskContextType = {
  tasks: Array<TaskType>;
  taskAdd: (task: TaskType) => void;
  taskDelete: (taskId: string) => void;
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
