import { FC, useContext } from "react";
import { TaskType } from "../../../../../types/global";
import { CommentItem } from "../comment-item/comment-item";
import { AuthorContext } from "../../../../../context/author/author-context";
type CommentListType = {
  task: TaskType;
};
export const CommentsList: FC<CommentListType> = ({ task }) => {
  return (
    <ul className="comment__list">
      {task.comments.map((comment) => (
        <CommentItem key={comment.id} task={task} comment={comment} />
      ))}
    </ul>
  );
};
