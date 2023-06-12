import { FC, useState, ChangeEvent } from "react";
import { CommentFormAdd } from "../comment-form-add/comment-form-add";
import { CommentsList } from "../comments-list/comments-list";
import { ICONS } from "../../../../../constants/icons";
import { TaskDetailType } from "../../../../../types/modal";
import "../comment.css";
import { CommentsProvider } from "../../../../../context/comments/comments-provider";

export const CommentsContainer: FC<TaskDetailType> = ({ task }) => {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);

  const handleChangeFormState = (newState: boolean) => {
    setIsOpenForm(newState);
  };
  const selectedForm = () => {
    if (isOpenForm) {
      return (
        <CommentFormAdd task={task} onChangeForm={handleChangeFormState} />
      );
    }
    return (
      <p onClick={() => handleChangeFormState(true)}>Напишите комментарий...</p>
    );
  };
  return (
    <CommentsProvider>
      <div className="comment">
        <div className="comment__title">
          {ICONS.commentAdd()}
          <h3>Комментарии</h3>
        </div>
        <div className="comment__new">
          <div className="comment__form">
            <div className="comment__icon">
              <span className="comment__avatar"></span>
            </div>
            {selectedForm()}
          </div>
        </div>

        <CommentsList task={task} />
      </div>
    </CommentsProvider>
  );
};
