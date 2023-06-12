import { FC, useState, ChangeEvent } from "react";
import { CommentFormAdd } from "../comment-form-add/comment-form-add";
import { CommentsList } from "../comments-list/comments-list";
import { ICONS } from "../../../../../constants/icons";
import { TaskDetailType } from "../../../../../types/modal";
import "../comment.css";
import { CommentsProvider } from "../../../../../context/comments/comments-provider";

export const CommentsContainer: FC<TaskDetailType> = ({ task }) => {
  return (
    <CommentsProvider>
      <div className="comment">
        <div className="comment__title">
          {ICONS.comment()}
          <h3>Коментарии</h3>
        </div>
        <CommentFormAdd task={task} />
        <div className="comment__all">
          <CommentsList task={task} />
        </div>
      </div>
    </CommentsProvider>
  );
};
