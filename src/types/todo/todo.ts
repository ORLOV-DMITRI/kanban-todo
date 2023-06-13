import { TaskType } from "../global";

export type ContainerType = {
  onModalOpen: (newState: boolean) => void;
};
export type ColumnType = {
  status: string;
  onModalOpen: (newState: boolean) => void;
};
export type StatusType = {
  status: string;
  tasks: TaskType[];
};
export type CardType = {
  task: TaskType;
  onModalOpen: (newState: boolean) => void;
};
export type AddButtonType = {
  status: string;
};
export type FormAddTaskType = {
  status: string;
  onCloseForm: () => void;
};
