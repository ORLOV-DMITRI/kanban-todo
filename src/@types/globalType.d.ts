interface IComment {
  id: string;
  author: string;
  text: string;
}
export interface ITask {
  id: string;
  title: string;
  description: string;
  comment: Array<IComment>;
  commentCount: number;
  status: string;
  author: string;
}
export type TaskContextType = {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  removeTask: (taskId: string) => void;
  editTask: (task: ITask) => void;
};
export type StatusContextType = {
  statuses: string[];
  changeStatus: (newStatus: string, prevStatus: string) => void;
};
export type ProviderType = {
  children: React.ReactNode;
};
