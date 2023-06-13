import { FC } from "react";
import { TaskDetailType } from "../../../../../types/modal-window/task/task";
import { Item } from "../comment-item/comment-item";

export const List: FC<TaskDetailType> = ({ task }) => {
  return (
    <div>
      {task.comments.length > 0 && (
        <ul className="comment__list">
          {task.comments.map((comment) => (
            <Item key={comment.id} task={task} comment={comment} />
          ))}
        </ul>
      )}
    </div>
  );
};
