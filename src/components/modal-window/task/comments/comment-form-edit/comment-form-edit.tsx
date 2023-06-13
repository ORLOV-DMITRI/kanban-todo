import { ChangeEvent, FC, useState, useContext, FocusEvent } from "react";
import { CommentsContext } from "../../../../../context/comments/comments-context";
import { FormEditCommentType } from "../../../../../types/modal-window/task/task";

export const FormEdit: FC<FormEditCommentType> = ({
  task,
  comment,
  onChangeIsEdit,
}) => {
  const { commentUpdate } = useContext(CommentsContext);

  const [commentEdit, setCommentEdit] = useState(comment.text);
  const handleChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentEdit(e.target.value);
  };
  const handleSaveComment = () => {
    commentUpdate(task, commentEdit, comment.id);
    setCommentEdit("");
    onChangeIsEdit(false);
  };
  const handleReturn = () => {
    onChangeIsEdit(false);
  };
  const handleFocus = (e: FocusEvent<HTMLTextAreaElement>) => {
    e.target.selectionStart = e.target.value.length;
  };
  return (
    <li>
      <div className="comment_avatar"></div>
      <h5>Автор: {comment.author}</h5>
      <div>
        <textarea
          value={commentEdit}
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
