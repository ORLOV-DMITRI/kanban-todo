import { FC, useState, useContext, ChangeEvent } from "react";
import { CommentsContext } from "../../../../../context/comments/comments-context";
import { TaskType } from "../../../../../types/global";

type CommentFormType = {
  task: TaskType;
};

export const CommentFormAdd: FC<CommentFormType> = ({ task }) => {
  const { commentSave } = useContext(CommentsContext);
  const [comment, setComment] = useState<string>("");

  const handleChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };
  const handleSaveComment = () => {
    commentSave(task, comment);
    setComment("");
  };

  return (
    <div className="comment__new">
      <div className="comment__form">
        <span className="comment__avatar"></span>
        <textarea value={comment} onChange={handleChangeComment} />
      </div>
      <div>
        <button
          disabled={comment.length > 0 ? false : true}
          onClick={handleSaveComment}
        >
          Сохранить
        </button>
      </div>
    </div>
  );
};
