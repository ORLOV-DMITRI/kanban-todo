import { ReactNode, ChangeEvent } from "react";
import { TaskType } from "./global";

export type AuthorModalType = {
  isActive: boolean;
  onCloseModal: (newState: boolean) => void;
  children: ReactNode;
};
export type TaskModalType = {
  isActive: boolean;
  onCloseModal: (newState: boolean) => void;
};
export type AuthorType = {
  onCloseModal: (newStatus: boolean) => void;
};
export type TaskDetailType = {
  task: TaskType;
  taskUpdate: (task: TaskType) => void;
};
