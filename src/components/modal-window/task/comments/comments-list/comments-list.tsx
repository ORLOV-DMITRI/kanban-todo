import { FC } from "react";
import { TaskType } from "../../../../../types/global";
import { CommentItem } from "../comment-item/comment-item";
type CommentListType = {
  task: TaskType;
  onDeleteComment: (id: string) => void;
};
export const CommentsList: FC<CommentListType> = ({
  task,
  onDeleteComment,
}) => {
  return (
    <ul className="comment__list">
      {task.comments.map((comment) => (
        <CommentItem comment={comment} author={task.author} />
      ))}
    </ul>
  );
};
