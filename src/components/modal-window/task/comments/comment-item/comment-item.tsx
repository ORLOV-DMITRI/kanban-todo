import { FC, useState } from "react";
import { CommentType, TaskType } from "../../../../../types/global";
type CommentItem = {
  comment: CommentType;
  author: string;
};
export const CommentItem: FC<CommentItem> = ({ comment, author }) => {
  const [isEdited, setIsEdited] = useState(false);

  const openEditForm = () => {
    setIsEdited(true);
  };

  if (isEdited) {
    return (
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Сохранить</button>
          <button>Отменить изменения</button>
        </div>
      </div>
    );
  }

  return (
    <li>
      <div className="comment__avatar"></div>
      <h4>{author}</h4>

      {comment.text}
      <div>
        <button onClick={openEditForm}>Изменить</button>
        <button>Удалить</button>
      </div>
    </li>
  );
};
