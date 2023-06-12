import { FC, useState, useContext, ChangeEvent } from "react";
import { CommentsContext } from "../../../../../context/comments/comments-context";
import { TaskType } from "../../../../../types/global";
import { AuthorContext } from "../../../../../context/author/author-context";

type CommentFormType = {
  task: TaskType;
  onChangeForm: (newState: boolean) => void;
};

export const CommentFormAdd: FC<CommentFormType> = ({ task, onChangeForm }) => {
  const { commentSave } = useContext(CommentsContext);
  const [comment, setComment] = useState<string>("");
  const { author } = useContext(AuthorContext);

  const handleChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };
  const handleSaveComment = () => {
    commentSave(task, comment, author);
    setComment("");
    onChangeForm(false);
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
