interface IComment {
  id: number;
  author: string;
  text: string;
}
export interface ITask {
  id: number;
  title: string;
  description: string;
  comment: Array<IComment>;
  commentCount: number;
  status: string;
  author: IAuthor;
}
export type TaskContextType = {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  removeTask: (taskId: number) => void;
  editTask: (task: ITask) => void;
};
export type StatusContextType = {
  statuses: string[];
  changeStatus: (newStatus: string, prevStatus: string) => void;
};
export type ProviderType = {
  children: React.ReactNode;
};
