import { TaskType } from "../global";

export type ContainerType = {
  onOpenModal: (newState: boolean) => void;
};
export type ColumnType = {
  status: string;
  onOpenModal: (newState: boolean) => void;
};
export type StatusType = {
  status: string;
  tasks: TaskType[];
};
export type CardType = {
  task: TaskType;
  onOpenModal: (newState: boolean) => void;
};
export type AddButtonType = {
  status: string;
};
export type FormAddTaskType = {
  status: string;
  onCloseForm: () => void;
};
