import { FC, useContext, useEffect, useMemo, useState } from "react";
import { ProviderType, Statuses } from "../../types/context";
import { TaskContext } from "../task/task-context";
import { CommentType, TaskType } from "../../types/global";
import { v1 } from "uuid";
import { CommentsContext } from "./comments-context";
const taskStatuses: string[] = ["TODO", "In Progress", "Testing", "Done"];

export const CommentsProvider: FC<ProviderType> = ({ children }) => {
  const { tasks, taskUpdate } = useContext(TaskContext);

  const [comment, setComment] = useState<string>();

  const commentSave = (task: TaskType, comment: string) => {
    const newComment: CommentType = {
      id: v1(),
      author: task.author,
      text: comment,
    };
    task.comments = [newComment, ...task.comments];
    taskUpdate(task);
  };
  const commentUpdate = (task: TaskType, newComment: string, id: string) => {
    task.comments.map((comment) => {
      if (comment.id === id) {
        comment.text = newComment;
        taskUpdate(task);
      }
    });
  };
  const commentDelete = (task: TaskType, id: string) => {
    task.comments.filter((comment) => comment.id !== id);
    taskUpdate(task);
  };

  return (
    <CommentsContext.Provider
      value={{ commentSave, commentUpdate, commentDelete }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
