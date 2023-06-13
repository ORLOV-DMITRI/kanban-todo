import { CommentType, TaskType } from "../../global";
import { ChangeEvent } from "react";

export type TaskModalType = {
  isActive: boolean;
  onCloseModal: (newState: boolean) => void;
};

export type TaskDetailType = {
  task: TaskType;
};

export type TaskContainerType = {
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
  onChangeForm: (newState: boolean) => void;
};
export type FormEditCommentType = {
  comment: CommentType;
  task: TaskType;
  onChangeIsEdit: (status: boolean) => void;
};
export type CommentListType = {
  task: TaskType;
};
export type CommentItemType = {
  comment: CommentType;
  task: TaskType;
};
