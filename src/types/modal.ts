import { ReactNode, ChangeEvent } from "react";
import { TaskType } from "./global";

export type AuthorModalType = {
  currentState: boolean;
  onChangeState: (newState: boolean) => void;
  children: ReactNode;
};
export type TaskModalType = {
  isActive: boolean;
  onCloseModal: (newState: boolean) => void;
};
export type AuthorType = {
  onModalStateChange: (newStatus: boolean) => void;
};
export type TaskDetailType = {
  task: TaskType;
};
