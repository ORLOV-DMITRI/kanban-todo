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
  task: TaskType;
};
export type AuthorType = {
  setAuthor: (author: string) => void;
  author: string;
  onCloseModal: (newStatus: boolean) => void;
};
