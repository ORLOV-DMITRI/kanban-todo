import { FC, KeyboardEvent } from "react";
import { FormAddDescriptionType } from "../../../../../types/modal-window/task/task";

export const FormAdd: FC<FormAddDescriptionType> = ({
  onChangeDescription,
  descriptionSave,
  description,
}) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.code === "Enter") {
      descriptionSave();
    }
    if (e.ctrlKey && e.code === "NumpadEnter") {
      descriptionSave();
    }
  };
  return (
    <div className="description__add">
      <textarea
        className="description__textarea"
        onChange={onChangeDescription}
        onBlur={descriptionSave}
        onKeyDown={(e) => handleKeyDown(e)}
        placeholder="Добавить более подробное описание"
        autoFocus
      ></textarea>
      <div>
        {description.length > 0 && (
          <button onClick={descriptionSave}>Сохранить</button>
        )}
      </div>
    </div>
  );
};
