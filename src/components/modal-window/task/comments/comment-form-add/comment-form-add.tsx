import { FC, useState, useContext, ChangeEvent } from "react";
import { CommentsContext } from "../../../../../context/comments/comments-context";
import { AuthorContext } from "../../../../../context/author/author-context";
import { FormAddCommentType } from "../../../../../types/modal-window/task/task";

export const FormAdd: FC<FormAddCommentType> = ({ task, onFormToggle }) => {
  const { commentSave } = useContext(CommentsContext);
  const [comment, setComment] = useState<string>("");
  const { author } = useContext(AuthorContext);

  const handleChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };
  const handleSaveComment = () => {
    commentSave(task, comment, author);
    setComment("");
    onFormToggle(false);
  };

  return (
    <div>
      <textarea
        value={comment}
        autoFocus
        onChange={handleChangeComment}
        placeholder="Напишите комментарий..."
      />
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
