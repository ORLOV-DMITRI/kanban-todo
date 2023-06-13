import { FC, useContext } from "react";
import { ProviderType } from "../../types/context/context";
import { TaskContext } from "../task/task-context";
import { CommentType, TaskType } from "../../types/global";
import { v1 } from "uuid";
import { CommentsContext } from "./comments-context";

export const CommentsProvider: FC<ProviderType> = ({ children }) => {
  const { tasks, taskUpdate } = useContext(TaskContext);

  const commentSave = (task: TaskType, comment: string, author: string) => {
    const newComment: CommentType = {
      id: v1(),
      author: author,
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
    const filteredComments = task.comments.filter(
      (comment) => comment.id !== id
    );
    task.comments = filteredComments;
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
