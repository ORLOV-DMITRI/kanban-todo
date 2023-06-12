import { FC, ChangeEvent, useState, useContext } from "react";
import { CommentsContext } from "../../../../../context/comments/comments-context";
import { TaskType } from "../../../../../types/global";

type CommentFormType = {
  // comment: string;
  // onChangeComment: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  // onSaveComment: () => void;
  task: TaskType;
};

export const CommentFormAdd: FC<CommentFormType> = ({
  // comment,
  // onChangeComment,
  // onSaveComment,
  task,
}) => {
  const { commentSave } = useContext(CommentsContext);
  const [comment, setComment] = useState<string>("");
  const handleChangeComment = (e: any) => {
    setComment(e.target.value);
  };
  const onSaveComment = () => {
    commentSave(task, comment);
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
          onClick={onSaveComment}
        >
          Сохранить
        </button>
      </div>
    </div>
  );
};
