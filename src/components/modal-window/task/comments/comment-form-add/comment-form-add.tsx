import { FC, ChangeEvent } from "react";

type CommentFormType = {
  comment: string;
  onChangeComment: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSaveComment: () => void;
};

export const CommentFormAdd: FC<CommentFormType> = ({
  comment,
  onChangeComment,
  onSaveComment,
}) => {
  return (
    <div className="comment__new">
      <div className="comment__form">
        <span className="comment__avatar"></span>
        <textarea value={comment} onChange={onChangeComment} />
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
