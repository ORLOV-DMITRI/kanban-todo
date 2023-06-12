import { ChangeEvent, FC, useState, useContext, FocusEvent } from "react";
import { CommentType, TaskType } from "../../../../../types/global";
import { CommentsContext } from "../../../../../context/comments/comments-context";
type CommentFormEditType = {
  comment: CommentType;
  task: TaskType;
  onChangeIsEdit: (status: boolean) => void;
};
export const CommentFormEdit: FC<CommentFormEditType> = ({
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
    <div>
      <div className="comment_avatar"></div>
      <h4>{task.author}</h4>
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
    </div>
  );
};
