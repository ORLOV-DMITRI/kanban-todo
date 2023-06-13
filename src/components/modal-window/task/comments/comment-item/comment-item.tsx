import { FC, useState, useContext } from "react";
import { AuthorContext } from "../../../../../context/author/author-context";
import { FormEdit } from "../comment-form-edit/comment-form-edit";
import { CommentsContext } from "../../../../../context/comments/comments-context";
import { CommentItemType } from "../../../../../types/modal-window/task/task";

export const Item: FC<CommentItemType> = ({ comment, task }) => {
  const [isEdited, setIsEdited] = useState(false);
  const { commentDelete } = useContext(CommentsContext);
  const { author } = useContext(AuthorContext);
  const openEditForm = () => {
    setIsEdited(true);
  };
  const handleDeleteComment = () => {
    commentDelete(task, comment.id);
  };

  if (isEdited) {
    return (
      <FormEdit comment={comment} task={task} onChangeIsEdit={setIsEdited} />
    );
  }

  return (
    <li>
      <h5>Автор: {comment.author}</h5>
      <p>{comment.text}</p>
      <div>
        <button onClick={openEditForm}>Изменить</button>
        <button onClick={handleDeleteComment}>Удалить</button>
      </div>
    </li>
  );
};
