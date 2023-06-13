import { FC, useState } from "react";
import { FormAdd } from "../comment-form-add/comment-form-add";
import { ICONS } from "../../../../../constants/icons";
import "../comment.css";
import { CommentsProvider } from "../../../../../context/comments/comments-provider";
import { List } from "../comments-list/comments-list";
import { TaskDetailType } from "../../../../../types/modal-window/task/task";

export const CommentsContainer: FC<TaskDetailType> = ({ task }) => {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);

  const handleChangeFormState = (newState: boolean) => {
    setIsOpenForm(newState);
  };
  const selectedForm = () => {
    if (isOpenForm) {
      return <FormAdd task={task} onChangeForm={handleChangeFormState} />;
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

        <List task={task} />
      </div>
    </CommentsProvider>
  );
};
