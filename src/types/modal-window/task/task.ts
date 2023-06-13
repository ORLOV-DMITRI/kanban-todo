import { CommentType, TaskType } from "../../global";
import { ChangeEvent } from "react";

export type TaskModalType = {
  isActive: boolean;
  onCloseModal: () => void;
};

export type TaskDetailType = {
  task: TaskType;
};

export type TaskContainerType = {
  task: TaskType;
  onCloseModal: () => void;
};
export type TaskTitleType = {
  task: TaskType;
  onCloseModal: () => void;
};

export type FormAddDescriptionType = {
  onChangeDescription: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  descriptionSave: () => void;
  description: string;
};
export type FormEditDescriptionType = {
  onChangeDescription: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  descriptionSave: () => void;
  descriptionDelete: () => void;
  description: string;
};
export type FormAddCommentType = {
  task: TaskType;
  onFormToggle: (newState: boolean) => void;
};
export type FormEditCommentType = {
  currentComment: CommentType;
  task: TaskType;
  onToggleForm: (status: boolean) => void;
};
export type CommentItemType = {
  comment: CommentType;
  task: TaskType;
};
