import { type } from "os";
import { ITask } from "./globalType";

export type TodoColumnType = {
  status: string;
};
export type TodoStatusType = {
  status: string;
  tasks: ITask[];
};
export type TodoCardType = {
  task: ITask;
};
export type TodoAddTaskType = {
  status: string;
};
export type TodoAddTaskFormType = {
  status: string;
  onSetIsOpen: (e: MouseEvent<Element, MouseEvent>) => void;
};
