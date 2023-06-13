import { ChangeEvent, FC, useState, useContext, FocusEvent } from "react";
import { CommentsContext } from "../../../../../context/comments/comments-context";
import { FormEditCommentType } from "../../../../../types/modal-window/task/task";

export const FormEdit: FC<FormEditCommentType> = ({
  task,
  currentComment,
  onToggleForm,
}) => {
  const { commentUpdate } = useContext(CommentsContext);

  const [newComment, setNewComment] = useState(currentComment.text);

  const handleChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };
  const handleSaveComment = () => {
    commentUpdate(task, newComment, currentComment.id);
    setNewComment("");
    onToggleForm(false);
  };
  const handleReturn = () => {
    onToggleForm(false);
  };
  const handleFocus = (e: FocusEvent<HTMLTextAreaElement>) => {
    e.target.selectionStart = e.target.value.length;
  };
  return (
    <li>
      <div className="comment_avatar"></div>
      <h5>Автор: {currentComment.author}</h5>
      <div>
        <textarea
          value={newComment}
          onChange={handleChangeComment}
          autoFocus
          onFocus={handleFocus}
        />
      </div>
      <div>
        <button onClick={handleSaveComment}>Сохранить</button>
        <button onClick={handleReturn}>Отменить изменения</button>
      </div>
    </li>
  );
};
