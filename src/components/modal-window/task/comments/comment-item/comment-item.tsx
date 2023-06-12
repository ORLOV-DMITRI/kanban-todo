import { FC, useState, useContext } from "react";
import { CommentType, TaskType } from "../../../../../types/global";
import { AuthorContext } from "../../../../../context/author/author-context";
import { CommentFormEdit } from "../comment-form-edit/comment-form-edit";
import { CommentsContext } from "../../../../../context/comments/comments-context";
type CommentItem = {
  comment: CommentType;
  task: TaskType;
};
export const CommentItem: FC<CommentItem> = ({ comment, task }) => {
  const [isEdited, setIsEdited] = useState(false);
  const { commentDelete } = useContext(CommentsContext);

  const openEditForm = () => {
    setIsEdited(true);
  };
  const handleDeleteComment = () => {
    commentDelete(task, comment.id);
    console.log("аа");
  };

  if (isEdited) {
    return (
      <CommentFormEdit
        comment={comment}
        task={task}
        onChangeIsEdit={setIsEdited}
      />
    );
  }

  return (
    <li>
      <div className="comment__avatar"></div>
      <h4>{task.author}</h4>
      {comment.text}
      <div>
        <button onClick={openEditForm}>Изменить</button>
        <button onClick={handleDeleteComment}>Удалить</button>
      </div>
    </li>
  );
};
